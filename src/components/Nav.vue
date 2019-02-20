<template>
<nav>   
  <v-snackbar v-model="snackbar" :timeout="3797" top color="green">
    <span color="red--text"> Awesome!! The new Project was added</span>
    <v-btn flat @mouseover= "snackbar = false"  color="red">Close</v-btn>
  </v-snackbar>


 <v-toolbar app class="purple lighten-4" height= "127px">
   <v-toolbar-side-icon color="primary" @click="drawer= !drawer"></v-toolbar-side-icon>
  <v-toolbar-title class="text--darken-4 pa-5 ma-4 ">
    <span class="blue--text text--darken-4 display-2">devs</span>
		<span class="purple--text text--darken-4  display-3">BRUNO</span>
		<span class="blue--text display-2 text--darken-4">.com</span>
	</v-toolbar-title>
	<v-spacer></v-spacer>

  <!-- drop menu -->
  <v-menu offset-y>
    <v-btn slot="activator" round ripple outline color="black">
      <v-icon left>expand_more</v-icon>
      <span class="green--text">Menu</span>
    </v-btn>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-title>{{link.text}}</v-list-tile-title>

        </v-list-tile>
      </v-list>
  </v-menu>

	<v-btn round outline color="black">
		<span dark >Log Out</span>
		<v-icon right small>exit_to_app</v-icon>
	</v-btn>
 </v-toolbar>

  <v-navigation-drawer  v-model="drawer" app class="yellow lighten-4">
    <!-- <v-spacer></v-spacer> -->
   

    <v-list wave waves  >
      <v-layout column  align-center>
        <v-flex class="mt-5">
          <v-avatar size="173">
            <img src="/az4.jpg" alt="">
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-flex>
        <p class="purple--text display-1 mt-1" align-end>
        De' Guerre,
      </p>
     </v-flex>
      <v-flex class="mt-4 mb-3">
        <popup @projectadded='snackbar=true'/>
      </v-flex>
      <v-list-tile v-for='link in links' :key="link.text" router :to= "link.route" @click="drawer=false" class="mt-4">
        <v-list-tile-action>
           <v-icon class="  purple--text">{{link.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="red--text text--darken-4 font-weight-bold">{{link.text}}</v-list-tile-title>

        </v-list-tile-content>
      </v-list-tile>
    </v-list>
   
  </v-navigation-drawer>

 

</nav>
</template>
 <script>
import Popup from './Popup'

 export default{
   data(){
     return{
       drawer: false,
       links:[
         {  icon:'dashboard', text : "DashBoard", route:"/" },
         {  icon:'folder', text : "Projects", route:"/projects" },
         {  icon:'person', text : "Team", route:"/team" },
          {  icon:'group', text : "About", route:"/about" },
          {  icon:'cake', text : "Brunno", route:"/bruno" }
         ],
         snackbar : false
     }
   },
   components:{Popup}
}
</script>




 
 