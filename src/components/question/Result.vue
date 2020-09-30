<template>
  <v-container class="about">
    <v-row class="text-center">
      <v-col cols="12" sm="8" class="mb-5">
        <chart :chartData="chartData" :options="chartOption"></chart>
      </v-col>
      <v-col cols="12" sm="4">
        <ProductSuggest :shampooDataArray=shampooDataArray />
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
  conditionType?: number[]

  @Prop()
  shampooDataArray?: any

  private chartData: ChartData = {
    labels: ['頭皮の痛み', '頭皮の痒み', 'オイリー肌', 'ドライ肌', 'ヘアカラーダメージ', 'パーマダメージ', '縮毛矯正', 'ブリーチ', 'ボリューム'],
    datasets: [
      {
        label: '頭皮・髪の健康状態',
        data: this.values,
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
        suggestedMin: 1,
        suggestedMax: 6
      }
    }
  }
}
</script>
