<template>
  <v-app-bar
    app
    color="grey lighten-4"
    light
    flat
  >
    <div class="d-flex align-center">
      <div class="my-2">
        <v-btn class="button-title px-0" text color="black" @click="pushHome">select-shampoo</v-btn>
      </div>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'

@Component
export default class HeaderBar extends Vue {
  public pushHome () {
    this.$router.push('/')
  }
}
</script>

<style scoped>
.button-title{
  font-family: 'Dosis-Regular';
}
</style>
