<template>
  <v-app>
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

@Component({
  components: {
    HeaderBar
  }
})

export default class App extends Vue {
}
</script>
