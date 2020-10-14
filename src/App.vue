<template>
  <v-app class="wrap">
    <v-content>
      <HeaderBar/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import HeaderBar from './components/HeaderBar.vue'
import Footer from './components/Footer.vue'

@Component({
  components: {
    HeaderBar
  }
})

export default class App extends Vue {
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
  font-family: 'Dosis-Regular'
}
</style>
