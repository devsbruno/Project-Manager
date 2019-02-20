<template >
<div class="projects">
  <h1 class="display-1 purple--text mb-3">Projects</h1>
  
   <v-container  class="my-4">
     <v-expansion-panel>
       <v-expansion-panel-content v-for="project in myprojects" :key="project.title">
         <div slot="header" class="purple--text display-1">{{project.title}}</div>
         <v-card>
           <v-card-text class="px-4">
             <div class="font-weight-bold orange--text"> Due on  {{project.due}}</div>
             <div class="black--text headline font-weight-light ">{{project.content}}</div>
           </v-card-text>
         </v-card>
       </v-expansion-panel-content>
     </v-expansion-panel>

	</v-container>

</div>

</template>

<script >
import db from '@/fb.js'

  export default {
    data() {
      return{
        projects: [
        // { title: 'The GOT', person: 'The Guerre', due: ' 7th May 2019', status: 'ongoing', content: "The tourney of Ashford Meadows. What is dead may never die. Can a man still be brave if he’s afraid? That is the only time a man can be brave.A forked purple lightning bolt, on black field speckled with four-pointed stars. Can a man still be brave if he’s afraid? That is the only time a man can be brave.The tourney of Ashford Meadows. The wolf and the lion. I would like a trial by combat. It's ten thousand miles between Kings landing and the wall. Pay the iron price. The Dothraki do things in their own time, for their own reasons. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. Bastards are born of passion, aren't they? We don't despise them in Dorne. Bastards are born of passion, aren't they? We don't despise them in Dorne. Fire and blood. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward."},
        
        // { title: 'Code up the homepage', person: "Pe'Chris", due: '25th Dec 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Design video thumbnails', person: 'Res Mau', due: '26th Jul 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Create a community forum', person: 'G30rg', due: '18th Sep 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Create a family forum', person: 'P Cku', due: '23th Aug 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'}
      ]
    }
  },
  computed:{
    myprojects(){
      return this.projects.filter(project =>{
        return project.person ==='The Guerre'
      })

    }
  },
  created() {
   db.collection('projects').onSnapshot( res =>{
   const changes = res.docChanges();

   changes.forEach(change => {
   if(change.type === 'added'){
   this.projects.push({
   ...change.doc.data(),
   id : change.doc.id
         })
       }
     })
   })
 }
}
</script>
