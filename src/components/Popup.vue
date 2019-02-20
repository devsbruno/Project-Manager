<template>
<v-dialog max-width="600px" v-model="dialog">
	<v-btn round slot="activator" class="cyan"> Add a Project</v-btn>
	<v-card>
		<v-card-title>
			<h2 class="pa-3">Add a New Project</h2>
		</v-card-title>
		<v-card-text>
			<v-form class="px-3" ref="f4">
				<v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules" ></v-text-field>
				<v-textarea label="Information" v-model="content" prepend-icon='edit' :rules="inputRules"></v-textarea>

				<v-menu>
					<v-text-field slot="activator" label="Date Piker" prepend-icon="date_range" :value="fdate">
					</v-text-field>
					<v-date-picker v-model="due"></v-date-picker>
				</v-menu>

				<v-spacer></v-spacer>

				<v-btn class="mx-0 green mt-3" @click="submit" :loading="loading">Add Project</v-btn>
			</v-form>
		</v-card-text>
	</v-card>

</v-dialog>
	
</template>

<script>

import format from 'date-fns/format'
import db from '@/fb'

export default {
	data(){
		return{
			title:"",
			content:"",
			due: null,
			inputRules: [
				v => v.length >=6 || 'Minimum lenght is 7 Character'
			],
			loading: false, 
			dialog : false
		}
	},
	methods: {
		submit() {
				if(this.$refs.f4.validate()){
           this.loading = true;

					const project ={
						title : this.title,
						content : this.content,
						due : format(this.due, 'Do MMM YYYY'),
						person: 'The Guerre',
						status : 'ongoing'
					}
					db.collection('projects').add(project).then(() => {
						this.loading = false ;
						this.dialog = false;
						this.$emit('projectadded');
					} )					
				}		
		}
	},
	computed: {
		fdate() {
			return this.due ? format(this.due, 'Do MMM YYYY') : ''
		}
	}
	
}
</script>

