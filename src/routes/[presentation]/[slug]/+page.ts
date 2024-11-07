import { error } from '@sveltejs/kit';
import type { Slide } from '$lib/types';

export async function load({ params, fetch }) {
	try {
		await import(`../../../slides/${params.presentation}/0style.css`);
	} catch (e) {
		console.debug(
			`[${params.presentation}] No styling found for presentation. To include custom styles, add a 0style.css file to the presentation directory.`
		);
	}

	let slide: Slide;
	let response: Response;

	try {
		slide = await import(`../../../slides/${params.presentation}/${params.slug}.md`);
	} catch (e) {
		error(404, {
			message: `Could not find slide file ${params.presentation}/${params.slug}.md`,
			presentation: params.presentation
		});
	}

	try {
		response = await fetch(`/api/slides/${params.presentation}`);
	} catch (e: unknown) {
		error(404, {
			message: `Unexpected error while loading slides for ${params.presentation}: ${e.message}`,
			presentation: params.presentation
		});
	}

	try {
		if (!response.ok) {
			error(404, {
				message: `Could not load slides for ${params.presentation}`,
				presentation: params.presentation
			});
		}

		const { slides }: { slides: Slide[] } = await response.json();

		const indexOfCurrent = slides.findIndex((s) => s.slug === params.slug);
		const previous =
			indexOfCurrent === 0 ? `/${params.presentation}` : slides[indexOfCurrent - 1].slug;
		const next =
			indexOfCurrent === slides.length - 1 ? params.slug : slides[indexOfCurrent + 1].slug;
		const total = slides.length;

		return {
			content: slide.default,
			current: indexOfCurrent + 1,
			meta: slide.metadata as Slide,
			next,
			previous,
			total
		};
	} catch (e: unknown) {
		error(404, {
			message: `Unexpected error while loading slide: ${e.message}`,
			presentation: params.presentation
		});
	}
}
