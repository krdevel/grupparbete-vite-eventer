<template>
	<footer>
		<div>
			<h4>Eventer</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco.
			</p>
		</div>
		<div>
			<ul>
				<li><a>Contact</a></li>
				<li><a>FAQ</a></li>
				<li><a>Facebook</a></li>
				<li><a>Find us</a></li>
				<li><a>Instagram</a></li>
				<li><a>Careers</a></li>
			</ul>
		</div>
	</footer>
</template>

<script></script>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #1f3868;
		color: #fff;
		margin: 0 1rem 1rem 1rem;
		padding: 3rem 5rem;
	}

	footer > div {
		width: 33%;
	}

	footer h4 {
		text-transform: uppercase;
	}

	footer p {
		font-size: 1.25rem;
		font-weight: 200;
		margin: 0;
	}

	footer ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0;
		grid-auto-columns: 1fr;
		grid-auto-rows: 5rem;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	footer a {
		cursor: pointer;
		font-size: 1.25rem;
		line-height: 5rem;
	}

	@media screen and (max-width: 1024px) {
		footer {
			flex-direction: column;
			padding: 3rem 2.5rem;
		}

		footer > div {
			width: 100%;
		}

		footer > div:first-child {
			margin-bottom: 3rem;
		}
	}
</style>
