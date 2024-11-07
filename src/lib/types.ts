export type Slide = {
	title: string;
	subtitle?: string;
	type: 'content' | 'code' | 'demo' | 'ship';
	order: number;
	slug: string;
};

export type Meta = {
	description: string;
	presentation: string;
	title: string;
};
