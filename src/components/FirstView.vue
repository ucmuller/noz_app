<template>
    <v-row
      class="text-center first-view"
      align="center"
      justify="center"
    >
      <v-col cols="12" sm="12" md="6" lg="7">
        <!-- <h1 class="font-weight-bold mb-3">
          <span class="first-view-span">11</span>Questions
        </h1> -->
        <h2 class="font-weight-bold mb-3">
          PERSONALIZE YOUR HAIR CARE
        </h2>
        <v-img
          class="first-view-image"
          :src="require('../assets/firstview_image.png')"
          contain
        />
        <!-- <h2 class="font-weight-bold mb-3">
          PERSONALIZE YOUR HAIR CARE
        </h2> -->
        <v-btn class="button-title" depressed large @click="$router.push('question')">START</v-btn>
      </v-col>
    </v-row>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'

@Component
export default class FirstView extends Vue {
}
</script>

<style scoped>
.first-view h1 {
  font-size: 70px;
  font-family: 'Cormorant Garamond';
}
.first-view-span {
  font-size: 90px;
  margin-top: 100px;
  font-family: 'Montserrat-SemiBold';
}
.first-view h2 {
  margin-top: 50px;
  font-family: 'Dosis-Regular';
  padding-bottom: 30px;
}
.first-view-image {
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 0;
}
.button-title{
  font-family: 'Dosis-Regular';
}

@media screen and (max-width: 480px) {
.first-view h1 {
  font-size: 50px;
  font-family: 'Cormorant Garamond';
}
.first-view-span {
  font-size: 60px;
  margin-top: 100px;
  font-family: 'Montserrat-SemiBold';
}
.first-view-image {
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 0;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
}
</style>
