<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <FirstView/>
  </div>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import FirstView from '@/components/FirstView.vue'

@Component({
  components: {
    FirstView
  }
})

export default class Home extends Vue {
}
</script>

<style scoped>

</style>
