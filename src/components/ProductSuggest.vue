<template>
  <v-col cols="12" class="pt-10">
    <h3 class="pb-5">あなたにおすすめのシャンプー</h3>
    <div class="product-card" v-for='(item, i) in shampooDataArray' :key="i">
      <v-col cols="12" class="px-0">
        <v-card class="mx-auto" max-width="500">
          <div class="d-flex flex-no-wrap justify-space-between card-product">
            <v-avatar
              class="ma-3"
              size="40"
              tile
            >
              <div :class="prizeIcon[i]"></div>
            </v-avatar>
            <!-- <v-avatar
              class="ma-3"
              size="50"
              tile
            > -->
            <img class="card-image" :src="item.image_url">
            <!-- </v-avatar> -->
            <div class="card-string">
              <h5 class="product-name">{{item.name}}</h5>
              <div class="card-string-icon">
                <h5 class="product-price">¥{{item.price}} {{item.volume}}ml</h5>
                <v-btn
                  class="modal-button"
                  icon
                  small
                  color="grey darken-3"
                  @click.stop="dialog[i] = true"
                  @click="openModal()"
                >
                  <v-icon dark>
                    mdi-dots-vertical-circle-outline
                  </v-icon>
                </v-btn>
              </div>
              <!-- <div>
                <v-btn
                  class="modal-button"
                  outlined
                  small
                  width="150px"
                  color="indigo"
                  @click.stop.prevent="openWindow(item.affiliateLink)"
                >
                  Amazonへ
                </v-btn>
              </div> -->
            </div>
          </div>
          <chart :chartData="chartData(item.point)" :options="chartOption"></chart>

          <!-- <v-rating
            v-model="item.rating"
            :length="rateLength"
            background-color="grey lighten-1"
            color="yellow accent-4"
            dense
            half-increments
            hover
            readonly
            size="20"
          ></v-rating> -->
        </v-card>
        <Modal
          :dialog=dialog[i]
          :values=item.point
          :typePoint=typePoint
          :item=item
          @handle-parent=updateDialog
        />
      </v-col>
    </div>
  </v-col>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue, Prop } from 'vue-property-decorator'
import { ChartData, ChartOptions } from 'chart.js'
import Chart from '@/components/Chart.vue'
import Modal from '@/components/Modal.vue'

@Component({
  components: {
    Chart,
    Modal
  }
})

export default class ProductSuggest extends Vue {
  @Prop()
  shampooDataArray?: any

  @Prop()
  typePoint?: number[]

  public rateLength = 7

  public prizeIcon = [
    'prize-icon_1',
    'prize-icon_2',
    'prize-icon_3'
  ]

  public dialog = {
    0: false,
    1: false,
    2: false
  }

  public updateDialog (value: boolean) {
    this.dialog = {
      0: value,
      1: value,
      2: value
    }
  }

  get localValues () {
    if (this.shampooDataArray !== undefined) {
      const dataArray = []
      this.shampooDataArray.forEach((data: any) => {
        dataArray.push(data.point)
      })
      return 0.75
    } else {
      return [5, 5, 5, 5, 5]
    }
  }

  public openWindow (url: string) {
    this.$ga.event('amazonLinkButton', 'push')
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }

  public openModal () {
    this.$ga.event('openProductModal', 'push')
  }

   private chartData: any = (point: any) => {
     const data = {
       labels: ['泡立ち', '頭皮への優しさ', '髪の補修力', '安全性', '　　仕上がり'],
       datasets: [
         {
           label: 'シャンプー解析',
           data: point.map((point: number) => point * 0.75),
           backgroundColor: [
             'rgba(0, 173, 181, 0.5)'
           ],
           borderColor: [
             'rgba(0, 173, 181, 1)'
           ],
           borderWidth: 1
         },
         {
           label: 'アナタのタイプ',
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
     return data
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
    }
  }
}
</script>

<style scoped>
.product-card h5{
  text-align: start;
}
.card-product{
  align-items: flex-end;
}
.card-string{
  margin: auto;
  width: 100%;
}
.card-string-icon{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-name{
  font-family: "Dosis-Regular";
}
.product-price{
  font-family: "Avenir";
}
.card-image{
  height: 70px;
  margin: 5px;
}
.card-image img{
  height: 70px;
}
.modal-button{
  margin-top: 5px;
  margin-bottom: 5px;
}
.prize-icon_1{
  width: 100%;
  height: 100%;
  background-image: url('../assets/f3-1.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.prize-icon_2{
  width: 100%;
  height: 100%;
  background-image: url('../assets/f3-2.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.prize-icon_3{
  width: 100%;
  height: 100%;
  background-image: url('../assets/f3-3.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
