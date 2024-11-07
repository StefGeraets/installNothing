export async function load({ fetch, params }) {
	const result = await fetch(`/api/slides/${params.presentation}`);
	const { slides, meta, message } = await result.json();

	if (!result.ok) {
		return {
			error: message || `Could not find presentation ${params.presentation}`,
			href: '/'
		};
	}

	if (!meta || !meta.title) {
		return {
			error: message || `Could not find presentation ${params.presentation}`,
			href: '/'
		};
	}

	if (!slides || !slides[0] || !slides[0].slug) {
		return {
			error: message || `Could not find slides for presentation ${meta.title}`,
			href: '/'
		};
	}

	return {
		meta,
		slides,
		error: null,
		href: `${meta.presentation}/${slides[0].slug}`
	};
}
