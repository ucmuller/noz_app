<template>
  <div>
    <v-dialog
      v-model="localDialog"
    >
      <v-card>
        <chart :chartData="chartData" :options="chartOption"></chart>
        <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn
          class="modal-button"
          outlined
          small
          color="indigo"
          @click.stop.prevent="openWindow(localAffiliateLink)"
        >
          Amazonへ
        </v-btn>
        </v-card-actions>
        <v-card-title class="headline">{{localName}}</v-card-title>

        <v-card-text>
          {{localDescription}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="closeModal"
          >
            CLOSE
          </v-btn>
          <!-- <v-btn
            color="green darken-1"
            text
            @click="closeModal"
          >
            Agree
          </v-btn> -->
        </v-card-actions>
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
  name?: string

  @Prop()

  description?: string

  @Prop()
  affiliateLink?: string

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
    return this.values
  }

  get localDescription () {
    return this.description
  }

  get localName () {
    return this.name
  }

  get localAffiliateLink () {
    return this.affiliateLink
  }

  public closeModal () {
    this.parentDataReset()
  }

  private chartData: ChartData = {
    labels: ['泡立ち', '優しさ(頭皮)', '髪の補修力', '成分の安全性', '仕上がり'],
    datasets: [
      {
        label: 'シャンプー解析',
        data: this.localValues,
        backgroundColor: [
          'rgba(0, 173, 181, 0.8)'
        ],
        borderColor: [
          'rgba(0, 173, 181, 1)'
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

  public openWindow (url: string) {
    this.$ga.event('amzonLinkButtonInModal', 'push')
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }
}
</script>

<style>
</style>
