<template>
  <v-container>
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
      <Result :values=answerDoubleValue :conditionType=conditionType :shampooDataArray=shampooDataArray />
    </div>
    <v-row class="text-center" justify="space-around">
    </v-row>
  </v-container>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import { DB } from '@/api/firebase/db'
import ScalpQuestion from '@/components/question/ScalpQuestion.vue'
import OilyQuestion from '@/components/question/OilyQuestion.vue'
import HairQuestion from '@/components/question/HairQuestion.vue'
import PersonalQuestion from '@/components/question/PersonalQuestion.vue'
import Result from '@/components/question/Result.vue'

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
}

@Component({
  components: {
    ScalpQuestion,
    OilyQuestion,
    HairQuestion,
    PersonalQuestion,
    Result
  }
})

export default class Question extends Vue {
  public page = 1
  public answerValue = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  public answerDoubleValue: number[] = []
  public conditionType = ''
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
    sex: ''
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
    console.log(this.fetchConditionType(this.value))
    this.conditionType = this.characterize().type
    this.fetchShampooData(this.characterize().product)
    this.doubleValue()
  }

  public doubleValue () {
    const arr: any = []
    this.answerValue.forEach((v, i) => {
      if (i !== 4) {
        arr.push(v * 2)
      } else {
        arr.push(v)
      }
    })
    this.answerDoubleValue = arr
  }

  public characterize (): any {
    const conditionTypeArray = [
      this.conditionOilyType(this.answerValue[1], this.answerValue[2]),
      this.conditionVolume(this.answerValue[8])
    ]
    switch (conditionTypeArray.join('')) {
      case 'BBA':
        return {
          type: 1,
          product: [59, 36, 65]
        }
      case 'BBC':
        return {
          type: 2,
          product: [96, 21, 36]
        }
      case 'BBB':
        return {
          type: 3,
          product: [48, 56, 65]
        }
      case 'BCA':
        return {
          type: 4,
          product: [61, 36, 44]
        }
      case 'BCC':
        return {
          type: 5,
          product: [57, 21, 36]
        }
      case 'BCB':
        return {
          type: 6,
          product: [59, 58, 36]
        }
      case 'BAA':
        return {
          type: 7,
          product: [48, 97, 36]
        }
      case 'BAC':
        return {
          type: 8,
          product: [96, 21, 68]
        }
      case 'BAB':
        return {
          type: 9,
          product: [48, 23, 93]
        }
      case 'ABA':
        return {
          type: 10,
          product: [48, 40, 76]
        }
      case 'ABC':
        return {
          type: 11,
          product: [110, 32, 40]
        }
      case 'ABB':
        return {
          type: 12,
          product: [48, 94, 40]
        }
      case 'ACA':
        return {
          type: 13,
          product: [57, 40, 5]
        }
      case 'ACC':
        return {
          type: 14,
          product: [98, 41, 64]
        }
      case 'ACB':
        return {
          type: 15,
          product: [53, 99, 81]
        }
      case 'AAA':
        return {
          type: 16,
          product: [57, 97, 76]
        }
      case 'AAC':
        return {
          type: 17,
          product: [96, 110, 17]
        }
      case 'AAB':
        return {
          type: 18,
          product: [104, 31, 93]
        }
      default:
        return {
          type: 0,
          product: [0, 0, 0]
        }
    }
  }

  public fetchConditionType (value: Answer): string {
    const conditionTypeArray = [
      value.conditionPainShampoo,
      value.conditionPainHairdye,
      value.conditionItchy,
      value.conditionRash
    ]
    this.conditionType = conditionTypeArray.includes('A') ? '敏感肌' : '健康肌'
    return this.conditionType
  }

  public conditionOilyType (conditionOilyValue: number, conditionDryValue: number): string {
    if (conditionOilyValue === conditionDryValue) {
      return 'A'
    }
    if (conditionOilyValue > conditionDryValue) {
      return 'B'
    }
    if (conditionOilyValue < conditionDryValue) {
      return 'C'
    } else {
      return ''
    }
  }

  public conditionVolume (conditionVolume: number): string {
    if (conditionVolume === 1) {
      return 'A'
    }
    if (conditionVolume === 2) {
      return 'B'
    }
    if (conditionVolume === 3) {
      return 'C'
    } else {
      return ''
    }
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
          })
        })
    })
  }
}

</script>

<style scoped>

</style>
