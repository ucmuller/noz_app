<template>
  <v-container class="about pa-3">
    <v-row class="text-center">
      <v-col cols="12" class="pa-0 my-5">
        <div>
          <h3>アナタの診断結果</h3>
        </div>
      </v-col>
      <v-col cols="4" class="pa-0 mb-5">
        <v-card
          class="mx-auto"
          color="#ffb6b9"
        >
          <v-card-text class="px-0">
            <div class="type-title ">頭皮タイプ</div>
            <div class="type-value">{{ conditionType.scalpType }}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="pa-0 mb-5">
        <v-card
          class="mx-auto"
          color="#fce38a"
        >
          <v-card-text class="px-0">
            <div class="type-title">肌</div>
            <div class="type-value">{{ conditionType.oilyType }}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="pa-0 mb-5">
        <v-card
          class="mx-auto"
          color="#95e1d3"
        >
          <v-card-text class="px-0">
            <div class="type-title">ボリューム</div>
            <div class="type-value">{{ conditionType.volume }}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="type-introduction py-5">
        <!-- <v-col cols="12" class="ma-0 pa-0">
          <chart :chartData="chartData" :options="chartOption"></chart>
        </v-col> -->
        <v-col cols="12" class="pa-0">
          <v-card>
            <chart :chartData="chartData" :options="chartOption"></chart>
            <div class="pa-0 ma-3 introduction">
              <p class="pa-2 ma-0">{{typeIntroduction}}</p>
            </div>
            <div class="avatar-box">
              <v-col cols="3" class="pa-0 ma-0">
                <v-avatar size="60">
                  <img src="@/assets/face_kenji.png" alt="">
                </v-avatar>
              </v-col>
              <v-col cols="9" class="pa-0 ma-0">
                <h4 class="text-left">監修: 井上賢治(ケンジ)</h4>
                <p class="pa-0 ma-0">Michio Nozawa HAIR SALON 銀座店 店長｜美容師歴18年目｜自身の頭で年間200種類のシャンプーを検証、解析するシャンプーマニア</p>
              </v-col>
            </div>
          </v-card>
        </v-col>
      </v-col>
      <v-col cols="12" class="px-3 pt-5">
        <v-card
          @click="openWindow('https://cramel.jp/productlist/14')"
        >
          <v-img
            :src="require('@/assets/images/shampoo_cramel.001.jpeg')"
            :aspect-ratio="16/9"
          ></v-img>
        </v-card>
      </v-col>
      <!-- <v-col cols="12" class="pt-3 pb-0">
        <v-btn
          class="white--text button font-weight-bold"
          color="#19C0C9"
          large
          @click="openWindow('https://cramel.jp/productlist/14')"
        >
          YouTuberが使っているシャンプー
        </v-btn>
      </v-col> -->
      <v-col cols="12" class="pa-0">
        <ProductSuggest :shampooDataArray=shampooDataArray :typePoint=localValues />
      </v-col>
      <!-- <v-col cols="12" class="pt-3 pb-0">
        <v-btn
          class="white--text button font-weight-bold"
          color="#19C0C9"
          large
          @click="openWindow('https://cramel.jp/productlist/14')"
        >
          YouTuberが使っているシャンプー
        </v-btn>
      </v-col> -->
      <v-col cols="12" class="px-3 pt-5">
        <v-card
          @click="toCramelBottomBanner('https://cramel.jp/productlist/14')"
        >
          <v-img
            :src="require('@/assets/images/shampoo_cramel.001.jpeg')"
            :aspect-ratio="16/9"
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" class="py-5">
        <h3 class="pt-10">より詳しく診断を希望の方</h3>
        <p class="mb-3 red--text">(先着100名様無料診断)</p>
        <p class="line-introduction text-left">タイプ精度をあげるため、髪と頭皮にまつわる、より詳しい相談や診断をLINEにて承っております。 プロの美容師がより詳しいカウンセリング診断をして、アナタにあったシャンプーやトリートメント、施術などのオススメをしています。気軽にご相談下さい。</p>
        <h4 class="py-0">LINEで無料相談する</h4>
        <p class="red--text">(先着100名様無料)</p>
        <!-- <v-btn
          class="white--text button font-weight-bold mt-3"
          color="#00B900"
          large
          block
          @click="openWindow('https://lin.ee/Osk4lUC')"
        >
        <v-icon
          left
          dark
        >
          mdi-chat
        </v-icon>
          友だち追加
        </v-btn> -->
        <a href="https://lin.ee/Osk4lUC"><img height="36" border="0" src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"></a>
      </v-col>
      <v-col cols="12" class="py-5">
        <h3 class="pt-10 mb-3">Youtube動画はこちらから</h3>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/ahnh8LBHNpM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <v-btn
          class="white--text button font-weight-bold mt-3"
          color="#FF0000"
          large
          block
          @click="openWindow('https://www.youtube.com/watch?v=ahnh8LBHNpM')"
        >
        <v-icon
          left
          dark
        >
          mdi-youtube
        </v-icon>
          YouTubeで見る
        </v-btn>
      </v-col>
      <v-col cols="12" class="py-5">
        <h3 class="pt-10 mb-3">Instagramはこちらから</h3>
        <v-row>
          <v-col cols="12">
            <v-avatar
              color="primary"
              size="200"
              @click="openWindow('https://www.instagram.com/select_shampoo/')"
            >
              <v-img :src="require('@/assets/kenji_insta.png')"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-btn
          class="white--text button font-weight-bold mt-3"
          color="#D93177"
          large
          block
          @click="openWindow('https://www.instagram.com/select_shampoo/')"
        >
        <v-icon
          left
          dark
        >
          mdi-instagram
        </v-icon>
          Instagramへ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue, Prop } from 'vue-property-decorator'
import { ChartData, ChartOptions } from 'chart.js'
import Chart from '@/components/Chart.vue'
import ProductSuggest from '@/components/ProductSuggest.vue'

@Component({
  components: {
    Chart,
    ProductSuggest
  }
})
export default class Result extends Vue {
  @Prop()
  values?: number[]

  @Prop()
  conditionType?: any

  @Prop()
  shampooDataArray?: any

  @Prop()
  typeIntroduction?: string

  get localValues () {
    if (this.values !== undefined) {
      return this.values.map((point: number) => point * 0.75)
    } else {
      return [5, 5, 5, 5, 5]
    }
  }

  private chartData: ChartData = {
    labels: ['泡立ち', '頭皮への優しさ', '髪の補修力', '安全性', '　　仕上がり'],
    datasets: [
      {
        label: '頭皮・髪の健康状態',
        data: this.localValues,
        backgroundColor: [
          'rgba(255, 190, 11, 0.8)'
        ],
        borderColor: [
          'rgba(255, 190, 11, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  private chartOption: ChartOptions = {
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 6
      }
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'アナタに合うシャンプータイプ',
      fontSize: 18,
      fontColor: '#000000'
    }
  }

  public openWindow (url: string) {
    if (url === 'https://www.youtube.com/channel/UCcBv10OsykgKm2IZnhxx__g') {
      this.$ga.event('toYouTube', 'push')
    }
    if (url === 'https://www.instagram.com/select_shampoo/') {
      this.$ga.event('toInstagram', 'push')
    }
    if (url === 'https://cramel.jp/productlist/14') {
      this.$ga.event('toCramel', 'push')
    }
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }

  public toCramelBottomBanner (url: string) {
    this.$ga.event('toCramelBottomBanner', 'push')
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }

  public pushBannerBota () {
    this.$ga.event('banner_BOTA', 'push')
    window.open('https://monicam.jp/campaign/405', '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }
}
</script>

<style>
.type-title{
  font-size: 13px;
}
.type-value{
  font-size: 18px;
  font-weight: bold;
}
.type-introduction{
  background-color: #f6f5f5;
}
.introduction{
  position: relative;
  padding: 0.6em;
  background: #e0edff;
  border-radius: 10px;
}
.introduction:after {
  position: absolute;
  content: '';
  top: 100%;
  left: 30px;
  border: 15px solid transparent;
  border-top: 15px solid #e0edff;
  width: 0;
  height: 0;
}
.type-introduction h3{
  padding-top: 10px;
  padding-bottom: 10px;
}
.type-introduction p{
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: start;
}
.avatar-box{
  display: flex;
}
.line-introduction{
  background-color: #f6f5f5;
}
.button {
  text-transform: none;
}
</style>
