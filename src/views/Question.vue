<template>
  <v-container class="pa-0">
    <div v-if="page == 1">
      <ScalpQuestion @handle-parent="getScalpQuestionValue" />
    </div>
    <div v-if="page == 2">
      <OilyQuestion @handle-parent="getOilyQuestionValue"/>
    </div>
    <div v-if="page == 3">
      <HairQuestion @handle-parent="getHairQuestionValue"/>
    </div>
    <div v-if="page == 4">
      <PersonalQuestion @handle-parent="getPersonalQuestionValue"/>
    </div>
    <div v-if="page == 5">
      <Result :values=point :conditionType=conditionType :shampooDataArray=shampooDataArray :typeIntroduction=typeIntroduction />
      <Footer/>
    </div>
    <v-row class="text-center" justify="space-around">
    </v-row>
  </v-container>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue, Watch } from 'vue-property-decorator'
import { DB } from '@/api/firebase/db'
import firebase from 'firebase'
import ScalpQuestion from '@/components/question/ScalpQuestion.vue'
import OilyQuestion from '@/components/question/OilyQuestion.vue'
import HairQuestion from '@/components/question/HairQuestion.vue'
import PersonalQuestion from '@/components/question/PersonalQuestion.vue'
import Result from '@/components/question/Result.vue'
import Footer from '@/components/Footer.vue'

interface Answer {
  conditionPainShampoo: string;
  conditionPainHairdye: string;
  conditionItchy: string;
  conditionRash: string;
  conditionRedSkin: string;
  conditionSensitiveSkin: string;
  eatingHabits: string;
  oilySkin: string;
  chappedSkin: string;
  drySkin: string;
  conditionColoring: string;
  conditionPermanent: string;
  conditionStraighPerm: string;
  conditionBleach: string;
  conditionVolume: string;
  sex: string;
  age: string;
  shampooName: string;
}

@Component({
  components: {
    ScalpQuestion,
    OilyQuestion,
    HairQuestion,
    PersonalQuestion,
    Result,
    Footer
  }
})

export default class Question extends Vue {
  public page = 1
  public typeIntroduction = ''
  public point: number[] = []
  public isFetch = false
  public conditionType = {
    scalpType: '',
    oilyType: '',
    volume: ''
  }

  public shampooDataArray: any[] = []
  public value: Answer = {
    conditionPainShampoo: '',
    conditionPainHairdye: '',
    conditionItchy: '',
    conditionRash: '',
    conditionRedSkin: '',
    conditionSensitiveSkin: '',
    eatingHabits: '',
    oilySkin: '',
    chappedSkin: '',
    drySkin: '',
    conditionColoring: '',
    conditionPermanent: '',
    conditionStraighPerm: '',
    conditionBleach: '',
    conditionVolume: '',
    age: '',
    sex: '',
    shampooName: ''
  }

  public getScalpQuestionValue (value: Answer) {
    this.value.conditionPainShampoo = value.conditionPainShampoo
    this.value.conditionPainHairdye = value.conditionPainHairdye
    this.value.conditionItchy = value.conditionItchy
    this.value.conditionRash = value.conditionRash
    this.value.conditionRedSkin = value.conditionRedSkin
    this.value.conditionSensitiveSkin = value.conditionSensitiveSkin
    this.page = 2
  }

  public getOilyQuestionValue (value: Answer) {
    this.value.eatingHabits = value.eatingHabits
    this.value.oilySkin = value.oilySkin
    this.value.chappedSkin = value.chappedSkin
    this.value.drySkin = value.drySkin
    this.page = 3
  }

  public getHairQuestionValue (value: Answer) {
    this.value.conditionColoring = value.conditionColoring
    this.value.conditionPermanent = value.conditionPermanent
    this.value.conditionStraighPerm = value.conditionStraighPerm
    this.value.conditionBleach = value.conditionBleach
    this.value.conditionVolume = value.conditionVolume
    this.page = 4
  }

  public getPersonalQuestionValue (value: Answer) {
    this.value.age = value.age
    this.value.sex = value.sex
    this.value.shampooName = value.shampooName
    this.fetchTypeData()
  }

  public checkConditionType (value: Answer) {
    const conditionTypeArray = [
      value.conditionSensitiveSkin,
      value.conditionRash
    ]
    this.conditionType.scalpType = conditionTypeArray.includes('A') ? '敏感肌' : '健康肌'
  }

  public checkConditionOilyType (value: Answer) {
    const conditionOilyTypeArray = [
      value.oilySkin,
      value.chappedSkin,
      value.drySkin
    ]
    const oily = ['AAA', 'ABA']
    const dry = ['BAC', 'BBB', 'BBC']
    const mix = ['AAB', 'AAC', 'ABB', 'ABC', 'BAA', 'BAB', 'BBA']

    if (oily.includes(conditionOilyTypeArray.join(''))) {
      this.conditionType.oilyType = 'オイリー'
    }
    if (dry.includes(conditionOilyTypeArray.join(''))) {
      this.conditionType.oilyType = '乾燥'
    }
    if (mix.includes(conditionOilyTypeArray.join(''))) {
      this.conditionType.oilyType = '混合'
    }
  }

  public checkConditionVolume (value: Answer) {
    if (value.conditionVolume === 'A') {
      this.conditionType.volume = '出したい'
    }
    if (value.conditionVolume === 'B') {
      this.conditionType.volume = '抑えたい'
    }
    if (value.conditionVolume === 'C') {
      this.conditionType.volume = '気にしない'
    }
  }

  public fetchTypeData () {
    this.checkConditionType(this.value)
    this.checkConditionOilyType(this.value)
    this.checkConditionVolume(this.value)
    DB.collection('type')
      .where('condition_type', '==', this.conditionType)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const document = doc.data()
          this.point = document.point
          this.typeIntroduction = document.type_introduction
          this.fetchShampooData(document.suggestions)
        })
      })
      .then(() => {
        this.fetchBannerShampooData()
        console.log(this.shampooDataArray)
      })
  }

  public fetchShampooData (data: number[]) {
    data.forEach((number) => {
      DB.collection('shampoo')
        .where('id', '==', number)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const document = doc.data()
            this.shampooDataArray.push(document)
            this.isFetch = true
          })
        })
    })
  }

  public fetchBannerShampooData () {
    DB.collection('shampoo')
      .doc('999')
      .get()
      .then(doc => {
        const document = doc.data()
        this.shampooDataArray.splice(2, 0, document)
        this.isFetch = true
      })
  }

  public saveAnsweredDataToFirestore () {
    const data = {
      createdAt: firebase.firestore.Timestamp.now(),
      answer: this.value
    }
    DB.collection('result')
      .doc()
      .set(data)
      .then(() => {
        console.log('saved complete')
      })
  }

  @Watch('isFetch', { deep: true })
  public showResultPage (newValue: any) {
    if (newValue) {
      this.saveAnsweredDataToFirestore()
      this.page = 5
    }
  }
}

</script>

<style scoped>

</style>
