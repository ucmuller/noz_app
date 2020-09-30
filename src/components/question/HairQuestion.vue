<template>
  <v-container class="hairQuestion">
    <div v-for='(question, i) in questions'
      :key="i">
      <v-row :id="question.id" class="text-center question-row" justify="space-around">
        <v-col cols="12" class="center">
          <div>
            <h2>{{question.question}}</h2>
            <v-row justify="space-around">
              <v-radio-group v-if="i === 0 || i === 4" v-model="question.answer">
                <v-radio
                  v-for='(choice, i) in question.choices'
                  :key="i"
                  :label="choice.string"
                  :value="choice.value"
                  color="grey darken-2"
                ></v-radio>
              </v-radio-group>
              <v-radio-group v-if="i === 1 || i === 2 || i === 3" row v-model="question.answer">
                <v-radio
                  v-for='(choice, i) in question.choices'
                  :key="i"
                  :label="choice.string"
                  :value="choice.value"
                  color="grey darken-2"
                ></v-radio>
              </v-radio-group>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-row class="text-center question-row" justify="space-around">
      <v-col cols="12" class="center">
        <v-btn
         class="question-button"
         large color="lime"
         :disabled="!ready"
         @click="setValue">
          NEXT
        </v-btn>
      </v-col>
      <!-- <v-btn class="question-button" large @click="deleteValue">AGAIN</v-btn> -->
    </v-row>
    <v-row class="text-center page-nation" justify="space-around" >
      <h2>3/4</h2>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue, Watch } from 'vue-property-decorator'
import VueScrollTo from 'vue-scrollto'

interface Answer {
  conditionColoring: string;
  conditionPermanent: string;
  conditionStraighPerm: string;
  conditionBleach: string;
  conditionVolume: string;
}

@Component
export default class HairQuestion extends Vue {
  public ready = false
  public value = {
    conditionColoring: '',
    conditionPermanent: '',
    conditionStraighPerm: '',
    conditionBleach: '',
    conditionVolume: ''
  }

  public questions = [
    {
      question: 'カラーリングの頻度',
      choices: [
        {
          string: '月に一回以上',
          value: 'A'
        },
        {
          string: '2~3ヶ月に一回',
          value: 'B'
        },
        {
          string: '4~6ヶ月に一回',
          value: 'C'
        },
        {
          string: '半年以上してない',
          value: 'D'
        },
        {
          string: 'してない',
          value: 'E'
        }
      ],
      answer: '',
      id: 'conditionColoring'
    },
    {
      question: 'パーマをかけている',
      choices: [
        {
          string: 'はい',
          value: 'A'
        },
        {
          string: 'いいえ',
          value: 'B'
        }
      ],
      answer: '',
      id: 'conditionPermanent'
    },
    {
      question: '縮毛矯正をしている',
      choices: [
        {
          string: 'はい',
          value: 'A'
        },
        {
          string: 'いいえ',
          value: 'B'
        }
      ],
      answer: '',
      id: 'conditionStraighPerm'
    },
    {
      question: 'ブリーチをしている',
      choices: [
        {
          string: 'はい',
          value: 'A'
        },
        {
          string: 'いいえ',
          value: 'B'
        }
      ],
      answer: '',
      id: 'conditionBleach'
    },
    {
      question: '髪のボリュームについて',
      choices: [
        {
          string: 'ボリュームを出したい',
          value: 'A'
        },
        {
          string: 'ボリュームを抑えたい',
          value: 'B'
        },
        {
          string: 'ボリュームは気にしていない',
          value: 'C'
        }
      ],
      answer: '',
      id: 'conditionVolume'
    }
  ]

  created () {
    window.scrollTo({
      top: 0
    })
  }

  @Watch('value', { deep: true })
  public onValueChanged (val: Answer) {
    if (val.conditionColoring !== '' && val.conditionPermanent !== '' && val.conditionStraighPerm !== '' && val.conditionBleach !== '' && val.conditionVolume !== '') {
      this.ready = true
    }
  }

  @Watch('questions', { deep: true })
  public onConditionPainValueChanged (newValue: any, oldValue: any) {
    if (newValue[0].answer !== this.value.conditionColoring) {
      this.value.conditionColoring = newValue[0].answer
      this.scroll('#conditionPermanent')
    }
    if (newValue[1].answer !== this.value.conditionPermanent) {
      this.value.conditionPermanent = newValue[1].answer
      this.scroll('#conditionStraighPerm')
    }
    if (newValue[2].answer !== this.value.conditionStraighPerm) {
      this.value.conditionStraighPerm = newValue[2].answer
      this.scroll('#conditionBleach')
    }
    if (newValue[3].answer !== this.value.conditionBleach) {
      this.value.conditionBleach = newValue[3].answer
      this.scroll('#conditionVolume')
    }
    if (newValue[4].answer !== this.value.conditionVolume) {
      this.value.conditionVolume = newValue[4].answer
    }
  }

  public setValue () {
    this.$emit('handle-parent', this.value)
  }

  public scroll (element: string) {
    const options = {
      easing: 'ease-in',
      offset: -60,
      force: true,
      cancelable: true
    }
    if (window.parent.screen.width <= 480) {
      VueScrollTo.scrollTo(element, 200, options)
    }
  }
}

</script>

<style scoped>
.hairQuestion {
  font-family: '游ゴシック体';
  color: #404146;
}
.question-row {
  margin-top: 20px;
}
.page-nation {
  margin-top: 50px;
}
.question-button {
  margin: 20px;
  margin-top: 50px;
  font-family: 'Dosis-Regular';
}
@media screen and (max-width: 480px) {
.hairQuestion {
  height: 1500px;
}
.hairQuestion h2 {
  font-size: 20px;
}
}
</style>
