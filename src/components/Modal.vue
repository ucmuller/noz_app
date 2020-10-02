<template>
  <div>
    <v-dialog
      v-model="localDialog"
    >
      <v-card>
        <div class="close-button">
          <v-btn
            class="modal-button"
            icon
            x-large
            color="grey darken-3"
            @click="closeModal"
          >
            <v-icon>
              mdi-close-circle-outline
            </v-icon>
          </v-btn>
        </div>
        <v-card-text class="title font-weight-bold py-0">
          {{item.name}}
        </v-card-text>
        <div class="card-image">
          <img :src="item.image_url">
        </div>
        <v-card-text class="subtitle font-weight-bold py-3 teal--text">
          {{item.introduction}}
        </v-card-text>
        <v-card-text>
          {{item.description}}
        </v-card-text>
        <chart :chartData="chartData" :options="chartOption"></chart>
        <v-col cols="12" class="pa-5">
        <v-btn
          class="modal-button"
          outlined
          small
          block
          color="indigo"
          @click.stop.prevent="openWindow(item.affiliateLink)"
        >
          Amazonで購入する
        </v-btn>
        </v-col>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue, Prop, Emit } from 'vue-property-decorator'
import { ChartData, ChartOptions } from 'chart.js'
import Chart from '@/components/Chart.vue'

@Component({
  components: {
    Chart
  }
})
export default class ProductSuggest extends Vue {
  @Prop()
  dialog = false

  @Prop()
  values?: number[]

  @Prop()
  item?: any

  @Prop()
  typePoint?: number[]

  @Emit()
  public parentDataReset () {
    this.$emit('handle-parent', false)
  }

  get localDialog () {
    return this.dialog
  }

  set localDialog (value: boolean) {
    this.parentDataReset()
  }

  get localValues () {
    if (this.values !== undefined) {
      return this.values.map((point: number) => point * 0.75)
    } else {
      return [5, 5, 5, 5, 5]
    }
  }

  public closeModal () {
    this.parentDataReset()
  }

  private chartData: ChartData = {
    labels: ['泡立ち', '頭皮への優しさ', '髪の補修力', '安全性', '　　仕上がり'],
    datasets: [
      {
        label: 'シャンプー',
        data: this.localValues,
        backgroundColor: [
          'rgba(0, 173, 181, 0.5)'
        ],
        borderColor: [
          'rgba(0, 173, 181, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'アナタ',
        data: this.typePoint,
        backgroundColor: [
          'rgba(255, 190, 11, 0.5)'
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
      display: true,
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'シャンプーとアナタの相性',
      fontSize: 13,
      fontColor: '#000000'
    }
  }

  public openWindow (url: string) {
    this.$ga.event('amzonLinkButtonInModal', 'push')
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }
}
</script>

<style scoped>
.close-button{
  display: flex;
  justify-content: flex-end;
}
.card-image{
  height: 200px;
  display: flex;
  justify-content: center;
  margin: 20px;
}
.card-image img{
  height: 100%;
}
</style>
