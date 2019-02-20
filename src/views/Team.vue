<template >
<div class="team">
  <h1 class="display-1 purple--text mb-3">Teams</h1>
   <v-container  class="my-4">
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 v-for=" person in team" :key="person.name">

        <v-card hover  ripple tile class="text-xs-center ma-4 pa-4 " justify-space-between>
          <v-responsive pt-4>
            <v-avatar size="273" class="grey lighten-2">
              <img :src="person.avatar" alt="avatar">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{person.name}}</div>
            <div class="grey--text">{{person.role}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="grey">
               <v-icon left>message</v-icon>
               <span>message</span>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>

    </v-layout>

	</v-container>


</div>

</template>

<script>
  export default {
    data(){
      return{
        team:[
        { name: 'The Net Ninja', role: 'Web developer', avatar: "/az5.jpg" },
        { name: "Pe' Chris", role: 'Graphic designer', avatar: "/az3.jpg" },
        { name: 'G30rg', role: 'Web developer', avatar: "/az4.jpg" },
        { name: 'P Cku', role: 'Social media maverick', avatar: "/az1.jpg" },
        { name: 'Res Mau', role: 'Sales guru', avatar: "/az6.jpg"}
        ]
      }
    }

  }
</script>
