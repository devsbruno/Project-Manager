<template >
<div class="dashboard">
  <h1 class="display-1 purple--text mb-3">Dashboard</h1>
  
  <v-container  class="my-4">  
    <v-layout row class="mb-3" id="sorta" >
      <v-tooltip top>
        <v-btn  @click="sortBy('title')" slot="activator" >
         <v-icon left color="red">folder</v-icon>
         <span class="caption text lowercase">Order by Project</span>
        </v-btn>
        <span>Sort these Projects br their Names</span>
      </v-tooltip>
      <v-btn >
        <v-icon left flat color="red">person</v-icon>
        <span class="caption text lowercase" @click="sortBy('person')" >Order by Member</span>
    </v-btn>
    <v-btn >
        <v-icon left flat color="red">query_builder</v-icon>
        <span class="caption text lowercase" @click="sortBy('due')">Order by Date</span>
    </v-btn>
    <v-btn >
        <v-icon left flat color="red">timeline</v-icon>
        <span class="caption text lowercase" @click="sortBy('status')">Order by Status</span>
    </v-btn>
    </v-layout>

   
   <v-card  class="pa-3" v-for="project in projects" :key='project.id'>
     <v-layout row wrap :class="`pa-3 project ${project.status}`">
      <v-flex xs12 md6 >
        <div class="caption grey--text pb-2">Project Title</div>
        <div>{{project.title}}</div>
        <div>{{project.id}}</div>
      </v-flex>
      <v-flex xs6 sm4 md2 >
        <div class="caption grey--text pb-2">Team Member</div>
        <div>{{project.person}}</div>
      </v-flex>
      <v-flex xs6 sm4 md2 >
        <div class="caption grey--text pb-2">Due by</div>
        <div>{{project.due}}</div>
      </v-flex>
      <v-flex xs2 sm4 md2 >
       <div class="right">
              <v-chip  :class="`${project.status} white--text my-2 `">{{ project.status }}</v-chip>
       </div>
      </v-flex>
    </v-layout>
    <v-divider ></v-divider>
   </v-card> 
	</v-container>
</div>
</template>

<script >
import db from '@/fb'

  export default {
    data() {
      return{
        projects: [
         { title: 'Design a new website', person: 'The Guerre', due: ' 7th May 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Code up the homepage', person: "Pe'Chris", due: '25th Dec 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Design video thumbnails', person: 'Res Mau', due: '26th Jul 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Create a community forum', person: 'G30rg', due: '18th Sep 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Create a family forum', person: 'P Cku', due: '23th Aug 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'}
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 :1 )
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

<style>
.project.complete{
  border-left: 10px solid green;
}
.project.ongoing{
  border-left: 10px solid orange
}
.project.overdue{
  border-left: 10px solid red;
  border-bottom: 3px dotted red;
}
.v-chip.complete{
  background: green ;
}
.v-chip.ongoing{
  background: orange;
}
.v-chip.overdue{
  background: red;
}
#sorta button{
  background: rgb(135, 251, 251);
  color: rgb(196, 10, 243);
}
.v-chip{
  padding: 2px;
 }


</style>


