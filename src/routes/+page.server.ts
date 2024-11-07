import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const response = await fetch('/api/presentations');
	const { presentations, latest, message } = await response.json();

	if (!response.ok) {
		error(404, message || 'Could not find presentations');
	}

	return {
		presentations,
		latest
	};
}
