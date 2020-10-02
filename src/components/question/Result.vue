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
        <v-col cols="12" class="ma-0 pa-0">
          <chart :chartData="chartData" :options="chartOption"></chart>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0">
          <div>
            <p class="pa-0 ma-0">{{typeIntroduction}}</p>
          </div>
        </v-col>
      </v-col>
      <v-col cols="12" class="pa-0">
        <ProductSuggest :shampooDataArray=shampooDataArray :typePoint=localValues />
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
</style>
