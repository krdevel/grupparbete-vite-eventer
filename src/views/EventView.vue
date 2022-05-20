<template>
	<main>
		<div class="container">
			<h1 v-if="temp">Event > {{ event.location }}</h1>
		</div>
		<div class="headerImg">
			<img class="imgData" :src="event.image" />

			<div class="imgText">
				<h1 class="nameData">{{ event.name }}</h1>
			</div>
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

			<div v-if="shareBool">
				<div class="shareBox">
					<h1>
						<i
							class="bi bi-share-fill"
							type="button"
							@click="setShareFalse"
						></i>
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
						<input :value="share" readonly />
						<button class="btn btn-outline-primary" @click="copyText">
							<i class="bi bi-clipboard2"></i>
						</button>
					</div>
				</div>
			</div>
			<div v-else>
				<div class="shareBox">
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
				shareTwitter: '',
				temp: false
			}
		},
		created() {
			this.event = getEventById(this.$route.params.id)
			this.likedEvent = this.getLike(this.$route.params.id)
			this.likeCheck = this.getBool(this.$route.params.id)
			this.share = this.linkEvent()
			this.setShareFb()
			this.setShareTwitter()
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
			setShareFb() {
				var host =
					window.location.protocol +
					'//' +
					window.location.host +
					'/#/event/' +
					this.$route.params.id
				this.shareFb = 'https://www.facebook.com/sharer.php?u=' + host
			},
			setShareTwitter() {
				var host =
					window.location.protocol +
					'//' +
					window.location.host +
					'/#/event/' +
					this.$route.params.id
				this.shareTwitter = 'https://twitter.com/intent/tweet?text=' + host
			},
			copyText() {
				var host =
					window.location.protocol +
					'//' +
					window.location.host +
					'/#/event/' +
					this.$route.params.id
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

		text-align: left;
	}
	.btnTag {
		background-color: #1f3868;
		color: #f1f6ff;
		border: 0;
		border-radius: 1.5rem;
		padding: 0.75rem;
		width: 8rem;
		margin: 0.5rem;
		$badge-color: black;
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.imgData {
		display: block;
		//width: 64rem;
		//height: 36.8125rem;
		width: 90rem;
		height: 36rem;
		object-fit: cover;
		margin: auto;
		opacity: 0.7;
	}
	#iconTwo {
		color: darkred;

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
</style>
