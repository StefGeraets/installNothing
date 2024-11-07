import { json } from '@sveltejs/kit';
import { readdirSync } from 'node:fs';

async function getLatestPresentation() {
	const dirs = readdirSync(new URL('../../../slides', import.meta.url));

	dirs.sort((a: string, b: string) => b.localeCompare(a));

	return {
		latest: dirs[0] || null,
		presentations: dirs
	};
}

export async function GET() {
	return json(await getLatestPresentation());
}
