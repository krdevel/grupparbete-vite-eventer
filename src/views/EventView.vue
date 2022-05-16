<template>
	<div class="headerImg">
		<img class="imgData" :src="event.image" height="300" />

		<div class="imgText">
			<h1 class="nameData">{{ event.name }}</h1>
		</div>
	</div>
	<div id="likeIcon" class="container">
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

	<div id="btnTags" class="container">
		<button id="btnTest" class="btn-primary" disabled>{{ event.type }}</button>
		<button id="btnTest" class="btn-primary" disabled>
			{{ event.location }}
		</button>
		<button id="btnTest" class="btn-primary" disabled>{{ event.date }}</button>
		<button id="btnTest" class="btn-primary" disabled>{{ event.time }}</button>
	</div>
	<div class="container">
		<p>{{ event.description }}</p>
		<p id="likeIcon">{{ likedEvent }} people liked this event</p>
		<div v-if="likeCheck" id="likeIcon"><p>You like this event</p></div>
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
		display: flex;
		justify-content: center;
	}
	#btnTest {
		background-color: #1f3868;
		color: #f1f6ff;
		border: 0;
		border-radius: 1.5rem;
		padding: 0.75rem;
		width: 8rem;

		margin: 5px;
		$badge-color: black;
	}
	#likeIcon {
		display: flex;
		justify-content: center;
	}
	.nameData {
		color: white;
		text-shadow: 2px 2px 4px #000000;
	}

	.headerImg {
		background-repeat: no-repeat;
		position: relative;
		text-align: center;
	}

	.imgText {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.imgData {
		border-radius: 8px;
		object-fit: cover;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	#iconTwo {
		color: red;
	}
	#iconTwo:hover {
		color: black;
	}
	#iconOne {
		color: red;
	}
</style>
