<template>
	<main class="container">
		<div class="container">
			<h1>Event > {{ event.location }}</h1>
		</div>
		<div class="headerImg">
			<img class="imgData" :src="event.image" />

			<!-- <div class="imgText">
				<h1 class="nameData">{{ event.name }}</h1>
			</div> -->
		</div>
		<div class="container">
			<div id="likeIcon">
				<div v-if="likeCheck">
					<h1>
						<i
							id="iconOne"
							class="bi bi-heart-fill"
							type="button"
							@click="likeBtnF"
						></i>
					</h1>
				</div>
				<div v-else>
					<h1>
						<i
							id="iconTwo"
							class="bi bi-heart"
							type="button"
							@click="likeBtnT"
						></i>
					</h1>
				</div>
			</div>
			<p id="likeIcon">{{ likedEvent }}</p>
			<h1>{{ event.name }}</h1>
			<div id="btnTags">
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
				<h1>
					<i class="bi bi-share-fill" type="button" @click="setShareFalse"></i>
				</h1>

				<h1 id="linkOne">
					<a :href="shareFb"><i class="bi bi-facebook" type="button"></i></a>
				</h1>
				<h1 id="linkTwo">
					<a :href="shareTwitter">
						<i class="bi bi-twitter" type="button" @click="shareTwitter"></i
					></a>
				</h1>
				<div id="linkThree">
					<input class="linkText" :value="share" readonly />
					<button
						id="linkBtn"
						class="btn btn-outline-primary"
						aria-pressed="true"
						@click="copyText(linkEvent())"
					>
						Copy Link <i class="bi bi-clipboard2"></i>
					</button>
				</div>
			</div>
			<div v-else class="shareBox">
				<h1 id="ikonF">
					<i
						id="shareIkonF"
						class="bi bi-share"
						type="button"
						@click="setShareTrue"
					></i>
				</h1>
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
	#btnTags {
		width: auto;
		margin-top: 3rem;
		text-align: left;
	}
	#likeIcon {
		display: flex;
		justify-content: right;
	}
	.nameData {
		color: black;
		text-align: center;
	}

	.headerImg {
		position: relative;
	}

	.imgText {
		// 		margin: 30px;
		// 		background-color: #ffffff;
		// opacity: 0.6;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.imgData {
		display: block;
		//width: 64rem;
		//height: 36.8125rem;
		width: 100%;
		height: 36rem;
		object-fit: cover;
		margin: auto;

		//opacity: 0.7;
	}
	#iconTwo {
		color: red;

		//background: rgba(242, 78, 30, 0.15);
	}
	#iconTwo:hover {
		color: red;
		text-shadow: 0 0 11px red;
	}
	#iconOne {
		color: red;
	}
	.descText {
		margin-top: 2rem;
		text-align: left;
		width: 50%;
	}
	.shareBox {
		display: flex;
		align-items: baseline;
		margin-bottom: 5rem;
		margin-top: 2rem;
	}
	#shareIkonF:hover {
		//color: darkblue;
		//box-shadow: ;
		text-shadow: 0 0 11px black;
	}
	#linkOne {
		margin-right: 0.5rem;
		margin-left: 1rem;
	}
	#linkTwo {
		margin-right: 1rem;
	}
	#linkThree {
		margin-bottom: -3rem;
	}
	.linkText {
		border-radius: 10px;
		color: black;
		border-color: #fae8f5;
	}
	#linkBtn {
		margin-bottom: 0px;
		margin-top: 0px;
		margin-right: 0px;
	}
</style>
