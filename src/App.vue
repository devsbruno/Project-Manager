<template>
  <v-app class="grey lighten-2">
    <Navbar />  
    <v-content class="mx-5 my-3">
    <router-view></router-view>
    </v-content>


  </v-app>
</template>

<script>

import Navbar from '@/components/Nav.vue'

export default {
  name: 'App',
  components:{   Navbar  },

  data () {
    return {
      
    }
  }
}
</script>
