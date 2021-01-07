<template>
  <v-container class="pa-0">
    <v-row class="text-center">
      <v-col cols="12" class="pa-0">
        <v-img
          :src="require('../assets/images/IMG_3602.jpg')"
          cover
        />
      </v-col>
      <v-col
        class=""
        cols="12"
      >
        <div class="my-3">
          <h3 class="font-weight-bold mb-3">
            あなたに合うシャンプーを1分で診断
          </h3>
          <v-btn
            @click="pushQuestion"
            depressed
            color="grey darken-1"
            class="white--text font-weight-bold"
            large
          >
            シャンプー診断はじめる
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="pa-0 pb-3">
        <h6 class="share-text">
          Let's Share the Post!
        </h6>
      </v-col>
      <v-col cols="12" class="pa-0 pb-3 mb-5 border">
        <v-row class="d-flex justify-center">
          <v-col cols="4" class="ma-0 pa-0 pl-3">
            <v-btn
              class="white--text"
              color="#00acee"
              depressed
              small
              @click="openWindow('https://twitter.com/intent/tweet?url=https://select-shampoo-7310c.web.app/&text=1%E5%88%86%E3%81%A7%E3%82%B7%E3%83%A3%E3%83%B3%E3%83%97%E3%83%BC%E8%A8%BA%E6%96%AD&via=Shampoo_Meister&related=%40kenji__inoue&hashtags=SelectShampoo')"
            >
              Twitter
            </v-btn>
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <v-btn
              class="white--text"
              color="#3B5998"
              depressed
              small
              @click="openWindow('http://www.facebook.com/share.php?u=https://select-shampoo-7310c.web.app/')"
            >
              Facebook
            </v-btn>
          </v-col>
          <v-col cols="4" class="ma-0 pa-0 pr-3">
            <a href="https://lin.ee/Osk4lUC"><img height="28" border="0" src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"></a>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="pb-3 mb-5 px-2 pt-0 border"
        cols="12"
      >
        <div class="mx-3 my-3">
          <h3 class="font-weight-bold mb-3">
            あなたもさっそく診断してみよう！
          </h3>
          <p class="text-left mb-3">
            この診断では1分で質問に答えるだけで、あなたに合うシャンプーが見つかります。
          </p>
          <p class="text-left mb-3">
            手に入りやすい市販のシャンプーを中心に紹介しています。毎日使用するシャンプーは、ヘアケアには欠かせません。
            <br>
            シャンプー選びにぜひお役立てください！
          </p>
          <v-btn
            @click="pushQuestion"
            depressed
            color="grey darken-1"
            class="white--text font-weight-bold"
            large
          >
            シャンプー診断はじめる
          </v-btn>
        </div>
      </v-col>

      <v-col cols="5" class="pa-0">
        <v-img
          :src="require('../assets/images/s-1051x1318_v-fms_webp_7e462d43-72f9-489e-9938-79e3e9e5ddc2_small.jpg')"
          contain
          height="100%"
        />
      </v-col>

      <v-col cols="7" class="pb-3 mb-0 bg-grey">
        <v-row>
          <v-col cols="3" class="pr-0 pb-0">
            <h5 class="font-weight-bold mb-3 badge">
              監修
            </h5>
          </v-col>
          <v-col cols="9" class="mx-0 pl-1 pb-0">
            <h5 class="font-weight-bold text-start">
              ケンジ(井上賢治)
            </h5>
          </v-col>
          <v-col cols="12" class="my-0 py-0">
            <h5 class="text-start my-0">
               Michio Nozawa HAIR SALON 銀座 現店長。美容師18年。年間200種類のシャンプーを使用、検証したものをカウンセリング＆紹介をするシャンプーマイスター。
            </h5>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="pb-3 mb-5 px-2 border"
        cols="12"
      >
        <div class="mx-3 my-3">
          <h3 class="mb-3 text-start">
            9割の人が自分に合わないシャンプーを使ってる
          </h3>
          <p class="text-left mb-3">
            仕事柄「どのシャンプーを使えばよい？」と相談をされることがよくありますが、ランキングや口コミで選んでる人の多くが間違ったシャンプーを選んでいます。
          </p>
          <p class="text-left mb-3">
            自分に合わないシャンプーは、髪と頭皮にマイナスの効果になることすらあるので、ご自身の髪と頭皮状態を知り、自分に合うシャンプーを見つけて美しい髪を手に入れられるように、このサービスを立ち上げました。
          </p>
          <v-btn
            @click="pushQuestion"
            depressed
            color="grey darken-1"
            class="white--text font-weight-bold"
            large
          >
            シャンプー診断はじめる
          </v-btn>
        </div>
      </v-col>
      <v-col
        class="pb-3 mb-5 px-1 pt-0 border"
        cols="12"
      >
        <div class="my-3">
          <h3 class="mb-3">
            正しいシャンプーの選び方
          </h3>
        </div>
        <div class="py-3 mx-2">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/ytCu66MZe7g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </v-col>
      <v-col
        class="pb-3 mb-5 px-1 pt-0"
        cols="12"
      >
        <div class="my-3">
          <h3 class="mb-3">
            ユーザーの声
          </h3>
        </div>
        <v-row>
          <v-col
            cols="12"
          >
            <v-card
              class="py-3 mx-7"
              color="#ffe64e"
            >
              <v-avatar
                class="profile mt-5"
                size="164"
              >
                <v-img cover :src="require('../assets/images/s-1080x1080_v-fs_webp_4961f6e0-9844-40b6-b1e3-9ffaafb18899_small.jpg')"></v-img>
              </v-avatar>
              <p class="text-h7">
                30代前半・女性
              </p>
              <p class="text-h6 font-weight-bold">
                髪にハリ・コシが！
              </p>
              <p class="mx-3 text-start">
                今まで、美容サイトのランキング上位のものを選んで使用していました。美容師（ケンジ）さんに診断してもらったシャンプーを使用したら、髪のまとまりも出てきてハリ・コシを感じるようになってきて感謝しています。
              </p>
            </v-card>
          </v-col>
          <v-col
            cols="12"
          >
            <v-card
              class="py-3 mx-7"
              color="#ffe64e"
            >
              <v-avatar
                class="profile mt-5"
                size="164"
              >
                <v-img cover :src="require('../assets/images/s-290x286_webp_eb48b10f-5405-4e61-8ca4-cc9f66522859.jpg')"></v-img>
              </v-avatar>
              <p class="text-h7">
                20代後半・女性
              </p>
              <p class="text-h6 font-weight-bold">
                美容院に行かなくて出来るヘアケア
              </p>
              <p class="mx-3 text-start">
                ボリュームがあり髪が広がってしまうので相談したら、シャンプーとコンディショナーをオススメされ、それを購入しました。洗い上がりがしっとりとしていて広がらなくなりました。今までランキングの上位のものを購入していて失敗していたと気付きました。            </p>
            </v-card>
          </v-col>
          <v-col
            cols="12"
          >
            <v-card
              class="py-3 mx-7"
              color="#ffe64e"
            >
              <v-avatar
                class="profile mt-5"
                size="164"
              >
                <v-img cover :src="require('../assets/images/s-1673x1754_v-fms_webp_690c477f-da07-41a3-b473-d8b9022acf04_small.jpg')"></v-img>
              </v-avatar>
              <p class="text-h7">
                30代後半・男性
              </p>
              <p class="text-h6 font-weight-bold">
                頭皮の痒みがシャンプーで改善
              </p>
              <p class="mx-3 text-start">
                頭皮の痒みにずっと悩んでいたのですが、体質と年齢によるものだと思って諦めていました。シャンプーを提案されて購入したら、徐々にですが痒みが改善されてきて驚きです。シャンプーは毎日使うので、これからはもっと気を使います。
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="mb-5 px-1"
        cols="12"
      >
        <v-btn
          @click="pushQuestion"
          depressed
          color="grey darken-1"
          class="white--text font-weight-bold"
          large
        >
          シャンプー診断はじめる
        </v-btn>
      </v-col>
    </v-row>
    <Footer/>
  </v-container>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Footer
  }
})
export default class FirstView extends Vue {
  public pushQuestion () {
    this.$router.push('/question')
  }

  public openWindow (url: string) {
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }

  created () {
    window.scrollTo({
      top: 0
    })
  }
}
</script>

<style scoped>
.border{
  border-bottom: 8px solid #EEEEEE;
}
.bg-grey{
  background-color: #EEEEEE;
}
.bg-yellow{
  background-color: #ffdb00;
}
.badge{
  background: #ffdb00;
  border-radius: 10px;
  flex: none;
  height: auto;
}
.share-text {
    position: relative;
    display: inline-block;
    padding: 0 55px;
}
.share-text:before, .share-text:after {
    content: "";
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 45px;
    height: 1px;
    background-color: #000;
}
.share-text:before {
    left: 0;
}
.share-text:after {
    right: 0;
}
</style>
