<script>
	const setDialog = () => {
		const dialog = document.querySelector('#demo-modal');
		const open = document.querySelector('#demo-modal-open');
		const form = document.querySelector('#demo-modal form');

		open?.addEventListener('click', open_dialog);
		form?.addEventListener('submit', close_dialog);

		function open_dialog() {
			document.startViewTransition(() => {
				dialog.showModal();
			});
		}

		function close_dialog(e) {
			e.preventDefault();
			const form = e.target;
			document.startViewTransition(() => {
				form.submit();
			});
		}
	};
</script>

<svelte:window on:load={setDialog()} />

<button id="demo-modal-open">Open</button>
<dialog id="demo-modal">
	<p>Here to show some nice transitions</p>
	<form method="dialog">
		<button type="submit">OKE</button>
	</form>
</dialog>

<style>
	button {
		border: 1px solid #fff;
		padding: 8px;
		border-radius: 4px;
	}
	dialog {
		padding: 16px;
		border-radius: 16px;
		width: 35%;
		view-transition-name: dialog;

		& p {
			font-size: 20px;
			font-weight: bold;
			margin-bottom: 4px;
		}

		& form {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}

		& input {
			border: 1px solid grey;
			border-radius: 4px;
			padding: 2px 4px;
		}

		& button {
			background: #000;
			color: #fff;
			text-transform: uppercase;
		}
	}

	::view-transition-group(dialog) {
		z-index: 10;
	}
</style>
