import { error } from '@sveltejs/kit';
import { dashboard, shop } from '../../lib/stats/stats';

export async function load() {
	try {
		return {
			dashboard,
			shop
		};
	} catch (err) {
		error(404, `message here ${err}`);
	}
}
