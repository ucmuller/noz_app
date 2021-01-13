<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="grey darken-1 white--text text-center"
    >
      <v-card-text class="white--text">
        <v-btn
          v-for="(item, i) in buttons"
          :key="i"
          text
          class="px-2"
          @click='openWindow(item.link)'
        >
          {{ item.label }}
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <v-btn
          v-for="(item, i) in icons"
          :key="i"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px" @click="openWindow(item.link)">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Select-Shampoo</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  public icons = [
    {
      icon: 'mdi-twitter',
      link: 'https://twitter.com/kenji__inoue'
    },
    {
      icon: 'mdi-youtube',
      link: 'https://www.youtube.com/channel/UCcBv10OsykgKm2IZnhxx__g'
    },
    {
      icon: 'mdi-instagram',
      link: 'https://instagram.com/select_shampoo?igshid=xcf1ayhwzixu'
    }
  ]

  public buttons = [
    {
      label: '監修者の紹介',
      link: 'https://select-shampoo.com/others/profile/'
    },
    {
      label: 'シャンプーの選び方',
      link: 'https://select-shampoo.com/about-shampoo/how-to-choose-shampoo/'
    },
    {
      label: '診断サイトの秘話',
      link: 'https://note.com/kenjiinoue/n/nf2dd4c1e63cb'
    },
    {
      label: '運営元',
      link: 'https://rndv.co.jp/'
    }
  ]

  public openWindow (url: string) {
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }
}
</script>
