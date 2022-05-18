<template>
	<div>
		<div class="headerImg">
			<img class="imgData" :src="imgUri" />
			<div class="imgText">
				<h1
					class="nameData"
					name="eventName"
					contenteditable="true"
					@input="onInput"
				>
					{{ eventName }}
				</h1>
			</div>
		</div>
		<div class="container">
			<div id="btnTags">
				<input
					list="typeTags"
					class="btn-primary btnTest"
					contenteditable="true"
					@input="handleDataList"
				/>
				<datalist id="typeTags">
					<option
						v-for="(tag, id) in dbTypeTags"
						:key="id"
						:value="tag.text"
					></option>
				</datalist>

				<input
					list="locationTags"
					class="btn-primary btnTest"
					contenteditable="true"
					@input="handleDataList"
				/>
				<datalist id="locationTags">
					<option
						v-for="(tag, id) in dbLocationTags"
						:key="id"
						:value="tag.text"
					></option>
				</datalist>

				<input
					list="dateTags"
					class="btn-primary btnTest"
					contenteditable="true"
					@input="handleDataList"
				/>
				<datalist id="dateTags">
					<option
						v-for="(tag, id) in dbDateTags"
						:key="id"
						:value="tag.text"
					></option>
				</datalist>

				<input
					list="timeTags"
					class="btn-primary btnTest"
					contenteditable="true"
					@input="handleDataList"
				/>
				<datalist id="timeTags">
					<option
						v-for="(tag, id) in dbTimeTags"
						:key="id"
						:value="tag.text"
					></option>
				</datalist>
			</div>
			<p
				class="descText"
				contenteditable="true"
				name="description"
				@input="onInput"
			>
				{{ description }}
			</p>
		</div>

		<button class="btn btn-outline-primary center" @click="submit">
			Create!
		</button>
	</div>
</template>

<script>
	// import { v4 as uuidv4 } from 'uuid'

	export default {
		data() {
			return {
				// default values / placeholders
				eventName: 'Gabbes Änglar',
				typeTag: 'Musik',
				locationTag: 'Göteborg',
				dateTag: '2022-06-18',
				timeTag: '18:00',
				description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
				doloribus a dolores cupiditate facere? Magni dolorum animi repudiandae,
				iusto est mollitia tenetur veniam nisi vel, eligendi reiciendis ullam,
				sed ad!`,
				imgUri:
					'https://kopakrypto.se/wp-content/uploads/sites/6/2021/12/olika-kryptovalutor.jpg',

				event: {},
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
			// handles input from "buttons", not working properly with v-model
			handleDataList(e) {
				const variableToUpdate = e.target.getAttribute('name')
				this[variableToUpdate] = e.target.value
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
					image:
						'https://kopakrypto.se/wp-content/uploads/sites/6/2021/12/olika-kryptovalutor.jpg',
					description: this.description,
					likes: 0,
					likeBool: false
				}

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
	.list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#btnTags {
		display: flex;
		justify-content: center;
	}
	.btnTest {
		background-color: #1f3868;
		color: #f1f6ff;
		border: 0;
		border-radius: 1.5rem;
		padding: 0.75rem;
		width: 8rem;
		margin: 5px;
	}
	#likeIcon {
		display: flex;
		justify-content: center;
	}
	.nameData {
		color: black;
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
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		object-fit: contain;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		opacity: 0.7;
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
	.descText {
		text-align: center;
	}

	.center {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>
