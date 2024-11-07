export function randomXY(): [string, string] {
	const [x, y] = [10 + Math.random() * 80, 10 + Math.random() * 80];

	if (y > 35 || x < 40 || x > 60) {
		return [`${x}%`, `${y}%`];
	}

	return x < 50
		? [`${x - (10 + Math.random() * 20)}%`, `${y}%`]
		: [`${x + (10 + Math.random() * 20)}%`, `${y}%`];
}

export function createSurpriseElement(wrapper: HTMLElement, pick?: string) {
	const el = document.createElement('div');

	el.classList.add('surprise-img');

	const [x, y] = randomXY();
	el.style.top = y;
	el.style.left = x;

	if (pick === 'monkeys') {
		el.ariaLabel = ['🙉', '🙊', '🙈'].at(Math.round(Math.random() * 2.7)) || '🙉';
	} else if (pick === 'bananas') {
		el.ariaLabel = '🍌';
	} else {
		el.ariaLabel = ['🙉', '🙊', '🙈'].at(Math.round(Math.random() * 2.7)) || '🍌';
	}

	setTimeout(() => {
		el.remove();
	}, 2500);

	wrapper.appendChild(el);
}
