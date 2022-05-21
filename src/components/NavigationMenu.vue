<template>
	<nav class="nav">
		<div v-if="isMobile" class="navbar-container mobile">
			<!-- <img id="logo" src="/favicon-196.png" alt="Logo" @click="resetStore" /> -->

			<RouterLink class="nav-link" to="/">
				<i class="bi bi-house-fill nav-item" style="font-size: 2rem"> </i>
			</RouterLink>
			<RouterLink class="nav-link" to="/">
				<i class="bi bi-search nav-item" style="font-size: 2rem"> </i>
			</RouterLink>
			<RouterLink class="nav-link" to="/">
				<i class="bi bi-heart nav-item" style="font-size: 2rem"> </i>
			</RouterLink>
			<RouterLink class="nav-link" to="/admin">
				<i class="bi bi-person-circle nav-item" style="font-size: 2rem"> </i>
			</RouterLink>
		</div>

		<nav v-else class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img
						src="../assets/logo.svg"
						width="30"
						height="24"
						alt="Logo"
						@click="resetStore"
					/>
				</a>

				<div class="d-flex">
					<RouterLink class="nav-link" to="/">
						<a>Home</a>
					</RouterLink>
					<RouterLink class="nav-link" to="/admin">
						<a>ADMIN</a>
					</RouterLink>

					<!-- <a class="nav-link" href="#"> </a> -->
					<RouterLink class="nav-link" to="/">
						<i class="bi bi-search" style="font-size: 2rem"> </i>
					</RouterLink>
					<RouterLink class="nav-link" to="/">
						<i class="bi bi-heart" style="font-size: 2rem; color: red"> </i>
					</RouterLink>
				</div>
			</div>
		</nav>

		<!-- <div v-else class="navbar-container">
			<img id="logo" src="/favicon-196.png" alt="Logo" @click="resetStore" />

			<RouterLink class="nav-link" to="/">
				<p>Home</p>
			</RouterLink>
			<RouterLink class="nav-link" to="/admin">
				<p>Admin</p>
			</RouterLink>
		</div> -->
	</nav>
</template>

<script>
	import '../../css/bootstrap.scss'
	export default {
		data() {
			return {
				windowWidth: window.innerWidth,
				isMobile: null,
				links: [
					{ address: '/', title: 'Home' },
					{ address: '/admin', title: 'admin' }
				]
			}
		},
		watch: {
			windowWidth(newWidth, oldWidth) {
				if (newWidth >= 768) {
					this.isMobile = false
				} else {
					this.isMobile = true
				}
			}
		},
		created() {
			this.getRes()
			this.$nextTick(() => {
				window.addEventListener('resize', this.getRes)
			})
		},
		methods: {
			resetStore() {
				window.localStorage.removeItem('vuex')
				location.reload()
			},
			getRes() {
				this.windowWidth = window.innerWidth
			}
		}
	}
</script>

<style lang="scss" scoped>
	nav.navbar {
		margin: 1rem;
		padding: 0;
	}

	nav.navbar.bg-light {
		background-color: #fff !important;
	}

	nav .nav-link {
		font-size: 1.25rem;
		font-weight: 550;
		color: #000;
		text-transform: uppercase;

		padding: 0 2rem;
	}

	.navbar-light .navbar-toggler {
		border-color: transparent;
		color: #868686;
	}
	.nav-link {
		margin: 0;
		text-align: center;
		margin-top: auto;
		margin-bottom: auto;
	}
	.navbar {
		width: 100%;
	}

	#logo {
		cursor: pointer;
		width: 2rem;
		margin: 0.5rem 0.75rem 0.5rem 0;
	}

	.navbar-container {
		width: 100%;
		background-color: #1f3868;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.nav-item {
		list-style-type: none;
	}

	@media screen and (max-width: 768px) {
		.nav {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.navbar-container {
			position: fixed;
			bottom: 0;
			margin-bottom: 10px;
			width: 80%;
			min-width: 350px;
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			border-radius: 25px;
		}

		i {
			color: white;
		}

		.nav-item:hover {
			border-bottom: 2px white solid;
		}
	}
</style>
