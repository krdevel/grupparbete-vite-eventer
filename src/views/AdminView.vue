<template>
	<main>
		<div class="container">
			<div class="header">
				<h1>Create your event</h1>
				<h2>{{ step }}</h2>
			</div>
			<Transition name="slide-up">
				<img v-if="imgUri" class="imgData" :src="imgUri" />
			</Transition>

			<div class="container">
				<h1 v-if="eventName" style="margin-top: 3rem">{{ eventName }}</h1>

				<div id="btnTags">
					<Transition name="slide-up">
						<button v-if="typeTag" class="btn btn-primary" disabled>
							{{ typeTag }}
						</button>
					</Transition>
					<Transition name="slide-up">
						<button v-if="locationTag" class="btn btn-primary" disabled>
							{{ locationTag }}
						</button>
					</Transition>
					<Transition name="slide-up">
						<button v-if="dateTag" class="btn btn-primary" disabled>
							{{ dateTag }}
						</button>
					</Transition>
					<Transition name="slide-up">
						<button v-if="timeTag" class="btn btn-primary" disabled>
							{{ timeTag }}
						</button>
					</Transition>
				</div>
				<p class="descText">{{ description }}</p>
			</div>

			<div v-if="step === 1" class="hcenter">
				<h1>What's the image URL?</h1>
				<input v-model="imgUri" placeholder="www.asd.com" required />
				<p style="color: red">{{ error }}</p>
				<p>
					https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/640px-Football_iu_1996.jpg
				</p>
			</div>

			<div v-else-if="step === 2" class="hcenter">
				<h1>What's the event name?</h1>
				<input v-model="eventName" placeholder="Gabriels Änglar" required />
				<p style="color: red">{{ error }}</p>
				<!-- https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/640px-Football_iu_1996.jpg -->
			</div>

			<div v-else-if="step === 3" class="hcenter">
				<h1>What's the event type?</h1>

				<div>
					<button
						v-for="(tag, i) in getTags('type')"
						:key="i"
						type="button"
						:class="selected === i ? 'btn-primary' : 'btn-outline'"
						class="btn"
						@click=";(selected = i), (typeTag = tag.text), handleNext()"
					>
						{{ tag.text }}
					</button>
				</div>
				<p style="color: red">{{ error }}</p>
			</div>
			<div v-else-if="step === 4" class="hcenter">
				<h1>What's the location?</h1>
				<div>
					<button
						v-for="(tag, i) in getTags('location')"
						:key="i"
						type="button"
						:class="selected === i ? 'btn-primary' : 'btn-outline'"
						class="btn"
						@click=";(selected = i), (locationTag = tag.text), handleNext()"
					>
						{{ tag.text }}
					</button>
				</div>
				<p style="color: red">{{ error }}</p>
			</div>
			<div v-else-if="step === 5" class="hcenter">
				<h1>What's the date?</h1>
				<div>
					<button
						v-for="(tag, i) in getTags('date')"
						:key="i"
						type="button"
						:class="selected === i ? 'btn-primary' : 'btn-outline'"
						class="btn"
						@click=";(selected = i), (dateTag = tag.text), handleNext()"
					>
						{{ tag.text }}
					</button>
				</div>
				<p style="color: red">{{ error }}</p>
			</div>
			<div v-else-if="step === 6" class="hcenter">
				<h1>What time?</h1>
				<div>
					<button
						v-for="(tag, i) in getTags('time')"
						:key="i"
						type="button"
						:class="selected === i ? 'btn-primary' : 'btn-outline'"
						class="btn"
						@click=";(selected = i), (timeTag = tag.text), handleNext()"
					>
						{{ tag.text }}
					</button>
				</div>
				<p style="color: red">{{ error }}</p>
			</div>
			<div v-else-if="step === 7" class="hcenter">
				<div class="form-floating">
					<textarea
						id="floatingTextarea2"
						v-model="description"
						class="form-control"
						placeholder="Event Description"
						style="height: 100px; width: 30rem"
					></textarea>
				</div>
				<p style="color: red">{{ error }}</p>
			</div>
			<div v-else-if="step === 8" class="hcenter">
				<button type="button" class="btn btn-primary" @click="submit">
					Create
				</button>
			</div>

			<div class="navigator vcenter">
				<button
					v-if="step !== 8"
					type="button"
					class="btn btn-primary"
					@click="handleNext"
				>
					Next
				</button>
				<button
					v-if="step !== 1"
					type="button"
					class="btn btn-primary"
					@click="step--"
				>
					Back
				</button>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				error: null,
				selected: null,
				types: null,
				// default values / placeholders
				eventName: null,
				typeTag: null,
				locationTag: null,
				dateTag: null,
				timeTag: null,
				description: null,
				imgUri: null,
				event: {},
				step: 1,
				// all tags that are retrieved on created()
				dbTypeTags: null,
				dbLocationTags: null,
				dbDateTags: null,
				dbTimeTags: null
			}
		},
		created() {
			this.dbTypeTags = this.$store.state.dbTypeTags
			this.dbLocationTags = this.$store.state.dbLocationTags
			this.dbDateTags = this.$store.state.dbDateTags
			this.dbTimeTags = this.$store.state.dbTimeTags
		},
		methods: {
			handleNext() {
				switch (this.step) {
					case 1:
						this.error = null
						if (this.imgUri === null) {
							this.error = 'No image found!'
						} else {
							this.step++
							this.error = null
						}
						break
					case 2:
						this.error = null
						if (this.eventName === null) {
							this.error = 'No event name found!'
						} else {
							this.step++
							this.error = null
						}
						break
					case 3:
						this.selected = null
						this.error = null
						if (this.typeTag === null) {
							this.error = 'No event type!'
						} else {
							this.step++
							this.error = null
						}
						break
					case 4:
						this.selected = null
						this.error = null
						if (this.locationTag === null) {
							this.error = 'No location type!'
						} else {
							this.step++
							this.error = null
						}
						break
					case 5:
						this.selected = null
						this.error = null
						if (this.dateTag === null) {
							this.error = 'No date!'
						} else {
							this.step++
							this.error = null
						}
						break
					case 6:
						this.selected = null
						this.error = null
						if (this.timeTag === null) {
							this.error = 'No time tag selected!'
						} else {
							this.step++
							this.error = null
						}
						break
					case 7:
						this.error = null
						if (this.description === null) {
							this.error = 'No description!'
						} else {
							this.step++
							this.error = null
						}
						break

					default:
						break
				}
			},

			handleSelect() {
				this.selected = !this.selected
			},

			getTags(type) {
				const key = 'db' + type.charAt(0).toUpperCase() + type.slice(1) + 'Tags'

				return this.$store.state[key]
			},

			// handles input from "buttons", not working properly with v-model
			handleDataList(e) {
				const variableToUpdate = e.target.getAttribute('list')
				console.log(variableToUpdate)
				this[variableToUpdate] = e.target.value
				console.log(this.typeTag)
			},
			// handles input from html elemnts tagged with editable, not working with v-model
			onInput(e) {
				const variableToUpdate = e.target.getAttribute('name')
				this[variableToUpdate] = e.target.innerText
			},
			submit() {
				this.event = {
					id: 'a33abc11-264e-4bbb-82e8-b87226bb4383',
					name: this.eventName,
					type: this.typeTag,
					location: this.locationTag,
					date: this.dateTag,
					time: this.timeTag,
					image: this.imgUri,
					description: this.description,
					likes: 0,
					likeBool: false
				}
				console.log(this.event)
				// adds event to db
				this.$store.commit('createEvent', this.event)
				// assigns tags in db
				this.$store.commit('dbSetEventTags', {
					eventName: this.eventName,
					typeTagText: this.typeTag,
					locationTagText: this.locationTag,
					dateTagText: this.dateTag,
					timeTagText: this.timeTag
				})
				// navigates to the created event
				this.$router.push({ path: `/event/${this.event.id}` })
			}
		}
	}
</script>

<style lang="scss" scoped>
	main {
		min-height: 100vh;
	}
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition: all 0.5s ease-out;
	}

	.slide-right-enter-from {
		opacity: 0;
		transform: translateX(30px);
	}

	.slide-right-leave-to {
		opacity: 0;
		transform: translateX(-30px);
	}
	.slide-up-enter-active,
	.slide-up-leave-active {
		transition: all 0.25s ease-out;
	}

	.slide-up-enter-from {
		opacity: 0;
		transform: translateY(30px);
	}

	.slide-up-leave-to {
		opacity: 0;
		transform: translateY(-30px);
	}
	.header {
		display: flex;
		justify-content: center;
	}
	.hcenter {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 200px;
	}
	.vcenter {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.textarea {
		overflow: hidden;
		border: 0;
		width: 100%;
		height: auto;
		resize: none;
	}
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
		max-height: 36rem;
		min-height: 10rem;
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
		max-width: 50%;
		min-width: 100%;
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
