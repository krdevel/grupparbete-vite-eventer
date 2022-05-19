<template>
	<div class="container">
		<div class="headerImg">
			<img class="imgData" :src="event.image" />

			<div class="imgText">
				<h1 class="nameData">{{ event.name }}</h1>
			</div>
		</div>

		<div id="likeIcon">
			<div v-if="likeCheck">
				<i
					id="iconOne"
					class="bi bi-heart-fill"
					type="button"
					@click="likeBtnF"
				></i>
			</div>
			<div v-else>
				<i id="iconTwo" class="bi bi-heart" type="button" @click="likeBtnT"></i>
			</div>
		</div>
		<p id="likeIcon">{{ likedEvent }}</p>

		<div id="btnTags">
			<button class="btnTag" disabled>
				{{ event.type }}
			</button>
			<button class="btnTag" disabled>
				{{ event.location }}
			</button>
			<button class="btnTag" disabled>
				{{ event.date }}
			</button>
			<button class="btnTag" disabled>
				{{ event.time }}
			</button>
		</div>
		<p class="descText">{{ event.description }}</p>
	</div>
</template>
<script>
	import { getEventById } from '../eventTagRelations'

	export default {
		data() {
			return {
				event: undefined,
				likeCheck: null,
				likedEvent: null
			}
		},
		created() {
			this.event = getEventById(this.$route.params.id)
			this.likedEvent = this.getLike(this.$route.params.id)
			this.likeCheck = this.getBool(this.$route.params.id)
		},
		methods: {
			likeBtnT() {
				this.likeCheck = this.$store.commit('likeTrue', this.$route.params.id)
				this.$store.commit('likeAdd', this.$route.params.id)
				this.likedEvent = this.getLike(this.$route.params.id)
				this.likeCheck = this.getBool(this.$route.params.id)
			},
			likeBtnF() {
				this.likeCheck = this.$store.commit('likeFalse', this.$route.params.id)
				this.$store.commit('likeMin', this.$route.params.id)
				this.likedEvent = this.getLike(this.$route.params.id)
				this.likeCheck = this.getBool(this.$route.params.id)
			},
			getLike(Id) {
				let event = this.$store.state.dbEvents.find((event) => event.id === Id)
				return event.likes
			},
			getBool(Id) {
				let event = this.$store.state.dbEvents.find((event) => event.id === Id)
				return event.likeBool
			}
		}
	}
</script>

<style lang="scss" scoped>
	#btnTags {
		width: auto;

		text-align: center;
	}
	.btnTag {
		background-color: #1f3868;
		color: #f1f6ff;
		border: 0;
		border-radius: 1.5rem;
		padding: 0.75rem;
		width: 8rem;
		margin: 0.5rem;
		//height: 3rem;
		$badge-color: black;
	}
	#likeIcon {
		display: flex;
		justify-content: center;
	}
	.nameData {
		color: black;
		text-align: center;
	}

	.headerImg {
		position: relative;
	}

	.imgText {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.imgData {
		display: block;
		margin-left: auto;
		margin-right: auto;

		//height: auto;
		border-radius: 8px;
		object-fit: fill;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		opacity: 0.7;
	}
	#iconTwo {
		color: red;
		//background: rgba(242, 78, 30, 0.15);
	}
	#iconTwo:hover {
		color: black;
	}
	#iconOne {
		color: red;
	}
	.descText {
		text-align: center;
	}
</style>
