<template>
	<main>
		<div class="container">
			<h1>Event > {{ event.location }}</h1>
		</div>
		<div class="headerImg">
			<img class="imgData" :src="event.image" />
		</div>
		<div class="container">
			<div id="likeIcon">
				<h1>{{ event.name }}</h1>
				<div v-if="likeCheck" class="likeCount">
					<i
						id="iconOne"
						class="bi bi-heart-fill"
						type="button"
						@click="likeBtnF"
					></i>

					<p class="likedCount">{{ likedEvent }}</p>
				</div>
				<div v-else class="likeCount">
					<i
						id="iconTwo"
						class="bi bi-heart"
						type="button"
						@click="likeBtnT"
					></i>

					<p class="likedCount">{{ likedEvent }}</p>
				</div>
			</div>

			<div class="btnTags">
				<button class="btn btn-primary" disabled>
					{{ event.type }}
				</button>
				<button class="btn btn-primary" disabled>
					{{ event.location }}
				</button>
				<button class="btn btn-primary" disabled>
					{{ event.date }}
				</button>
				<button class="btn btn-primary" disabled>
					{{ event.time }}
				</button>
			</div>
			<p class="descText">{{ event.description }}</p>
			<div v-if="shareBool" class="shareBox">
				<i class="bi bi-share-fill" type="button" @click="setShareFalse"></i>

				<a :href="shareFb"><i class="bi bi-facebook" type="button"></i></a>

				<a :href="shareTwitter">
					<i class="bi bi-twitter" type="button" @click="shareTwitter"></i
				></a>

				<input class="linkText" :value="share" readonly />
				<button
					id="linkBtn"
					class="btn btn-outline-primary"
					aria-pressed="true"
					@click="copyText(linkEvent())"
				>
					Copy Link <i id="iconBtnSize" class="bi bi-clipboard2"></i>
				</button>
			</div>
			<div v-else class="shareBox">
				<i
					id="shareIkonF"
					class="bi bi-share"
					type="button"
					@click="setShareTrue"
				></i>
			</div>
		</div>
	</main>
</template>
<script>
	import { getEventById } from '../eventTagRelations'

	export default {
		data() {
			return {
				event: undefined,
				likeCheck: null,
				likedEvent: null,
				share: '',
				shareBool: false,
				shareFb: '',
				shareTwitter: ''
			}
		},
		created() {
			this.event = getEventById(this.$route.params.id)
			this.likedEvent = this.getLike(this.$route.params.id)
			this.likeCheck = this.getBool(this.$route.params.id)
			this.share = this.linkEvent()
			this.setShareFb(this.linkEvent())
			this.setShareTwitter(this.linkEvent())
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
			},
			setShareTrue() {
				this.shareBool = true
			},
			setShareFalse() {
				this.shareBool = false
			},
			setShareFb(host) {
				this.shareFb = 'https://www.facebook.com/sharer.php?u=' + host
			},
			setShareTwitter(host) {
				this.shareTwitter = 'https://twitter.com/intent/tweet?text=' + host
			},
			copyText(host) {
				navigator.clipboard.writeText(host)
			},
			linkEvent() {
				var host =
					window.location.protocol +
					'//' +
					window.location.host +
					'/#/event/' +
					this.$route.params.id
				return host
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		max-width: 90% !important;
	}
	.headerImg {
		position: relative;
	}
	.imgData {
		display: block;
		width: 100%;
		max-height: 36rem;
		min-height: 10rem;
		object-fit: cover;
		margin: auto;
	}
	#likeIcon {
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
	}

	#iconTwo {
		color: red;
	}
	#iconTwo:hover {
		color: red;
		text-shadow: 0 0 0.5rem red;
	}
	#iconOne {
		color: red;
	}
	.likeCount {
		display: table-row;
		text-align: center;
	}
	.likeCount > i {
		font-size: 2.5rem;
	}
	.btnTags {
		width: auto;
		text-align: left;
	}

	.descText {
		margin-top: 2rem;
		text-align: left;
		max-width: 50%;
		min-width: 100%;
	}
	.shareBox {
		display: flex;
		width: auto;
		align-items: center;
		margin-bottom: 5rem;
		margin-top: 2rem;
	}
	.shareBox > i,
	.shareBox > a {
		font-size: 2.5rem;
	}

	.shareBox > *:not(:last-child) {
		margin-right: 1.5rem;
	}
	#shareIkonF:hover {
		text-shadow: 0 0 0.5rem black;
	}

	.linkText {
		width: 47%;
		border-radius: 10px;
		color: black;
		border-color: #fae8f5;
	}

	#linkBtn {
		margin: 0;
		display: flex;
		align-items: center;
	}
	#iconBtnSize {
		font-size: 1.5rem;
	}
</style>
