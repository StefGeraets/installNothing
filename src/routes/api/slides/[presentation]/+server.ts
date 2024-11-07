import { error, json } from '@sveltejs/kit';
import type { Meta, Slide } from '$lib/types';

async function getSlides(presentation: string): Promise<Slide[]> {
	const slides: Slide[] = [];
	const paths = import.meta.glob(`/src/slides/**/*.md`, { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const segments = path.split('/');
		const dir = segments.at(-2) || '';
		const slug = segments.at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug && dir === presentation) {
			const metadata = file.metadata as Omit<Slide, 'slug'>;
			const slide = { ...metadata, slug } satisfies Slide;
			slides.push(slide);
		}
	}

	return slides.sort((first, second) => first.order - second.order);
}

async function getMeta(presentation: string): Promise<Meta | null> {
	const paths = import.meta.glob(`/src/slides/**/0meta.txt`, { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const segments = path.split('/');
		const dir = segments.at(-2) || '';

		if (file && typeof file === 'object' && 'metadata' in file && dir === presentation) {
			const metadata = file.metadata as Omit<Meta, 'presentation'>;
			return { ...metadata, presentation } satisfies Meta;
		}
	}

	return null;
}

export async function GET({ params }) {
	const slides = await getSlides(params.presentation);
	const meta = await getMeta(params.presentation);

	if (!meta) {
		error(404, `Could not find 0meta.txt for ${params.presentation}`);
	}

	if (!slides.length) {
		error(404, `Could not find slides for ${params.presentation}`);
	}

	return json({
		slides,
		meta
	});
}
