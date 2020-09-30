<template>
  <div>
    <h3>あなたにおすすめのシャンプー</h3>
    <div class="product-card" v-for='(item, i) in shampooDataArray' :key="i">
      <div v-if="i===0" class="prize-icon_1"></div>
      <div v-if="i===1" class="prize-icon_2"></div>
      <div v-if="i===2" class="prize-icon_3"></div>
      <v-card class="mx-auto" max-width="500">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar
            class="ma-3"
            size="100"
            tile
          >
          <div class="card-image" v-html="item.image_url"></div>
          </v-avatar>
          <div class="card-string">
            <h4 class="product-name">{{item.name}}</h4>
            <h4 class="product-price">¥{{item.price}} {{item.volume}}ml</h4>
            <div>
              <v-btn
                class="modal-button"
                outlined
                small
                width="150px"
                @click.stop="dialog[i] = true"
              >
                オススメ理由を見る
              </v-btn>
            </div>
            <div>
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
            </div>
          </div>
        </div>
        <v-rating
          v-model="item.rating"
          :length="rateLength"
          background-color="grey lighten-1"
          color="yellow accent-4"
          dense
          half-increments
          hover
          readonly
          size="20"
        ></v-rating>
      </v-card>
      <Modal
        :dialog=dialog[i]
        :values=item.point
        :description = item.description
        :name=item.name
        :affiliateLink=item.affiliateLink
        @handle-parent=updateDialog
      />
    </div>
  </div>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue, Prop } from 'vue-property-decorator'
import Modal from '@/components/Modal.vue'

@Component({
  components: {
    Modal
  }
})

export default class ProductSuggest extends Vue {
  @Prop()
  shampooDataArray?: any

  public rateLength = 7
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

  public openWindow (url: string) {
    this.$ga.event('amazonLinkButton', 'push')
    window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
  }
}
</script>

<style>
.product-card h3{
  text-align: start;
  margin-top: 30px;
}
.card-string{
  margin: auto;
}
.product-name{
  font-family: "Dosis-Regular";
  margin-bottom: 10px;
}
.product-price{
  font-family: "Avenir";
}
.card-image{
  width: 100px;
  height: 100px;
}
.card-image img{
  width: auto;
  height: 100px;
}
.modal-button{
  margin-top: 5px;
  margin-bottom: 5px;
}
.prize-icon_1{
  margin-top:8px;
  margin-bottom:8px;
  width: 48px;
  height: 30px;
  background-image: url('../assets/f3-1.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.prize-icon_2{
  margin-top:8px;
  margin-bottom:8px;
  width: 48px;
  height: 30px;
  background-image: url('../assets/f3-2.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.prize-icon_3{
  margin-top:8px;
  margin-bottom:8px;
  width: 48px;
  height: 30px;
  background-image: url('../assets/f3-3.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
