<template>
  <v-container class="scalpQuestion">
    <div v-for='(question, i) in questions'
      :key="i">
      <v-row :id="question.id" class="text-center question-row" justify="space-around">
        <v-col cols="12" class="center">
          <div>
            <h3>{{question.question}}</h3>
            <v-row justify="space-around">
              <v-radio-group row v-model="question.answer">
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
        <!-- <v-btn class="question-button" large @click="deleteValue">AGAIN</v-btn> -->
        <v-btn
          class="question-button"
          large
          color="lime"
          :disabled="!ready"
          @click="setValue">
            NEXT
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center page-nation" justify="space-around" >
      <h2>1/4</h2>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue, Watch } from 'vue-property-decorator'
import VueScrollTo from 'vue-scrollto'

interface Answer {
  conditionPainShampoo: string;
  conditionPainHairdye: string;
  conditionItchy: string;
  conditionRash: string;
  conditionRedSkin: string;
  conditionSensitiveSkin: string;
}

@Component
export default class ScalpQuestion extends Vue {
  public ready = false

  public value: Answer = {
    conditionPainShampoo: '',
    conditionPainHairdye: '',
    conditionItchy: '',
    conditionRash: '',
    conditionRedSkin: '',
    conditionSensitiveSkin: ''
  }

  public questions = [
    {
      question: 'シャンプーしてて頭皮に痛みを感じたことがある？（直近1ヶ月）',
      choices: [
        {
          string: '痛みを感じた',
          value: 'A'
        },
        {
          string: '痛みを感じない',
          value: 'B'
        }
      ],
      answer: '',
      id: 'conditionPainShampoo'
    },
    {
      question: 'パーマ液・カラー剤が染みますか？',
      choices: [
        {
          string: '染みる',
          value: 'A'
        },
        {
          string: '染みない',
          value: 'B'
        },
        {
          string: 'わからない',
          value: 'C'
        }
      ],
      answer: '',
      id: 'conditionPainHairdye'
    },
    {
      question: '頭皮にかゆみを感じたことがある？（直近１ヶ月）',
      choices: [
        {
          string: 'ある',
          value: 'A'
        },
        {
          string: 'ない',
          value: 'B'
        }
      ],
      answer: '',
      id: 'conditionItchy'
    },
    {
      question: '化粧水・スキンケアで赤みが出る（かぶれる）ことがある？',
      choices: [
        {
          string: 'ある',
          value: 'A'
        },
        {
          string: 'ない',
          value: 'B'
        },
        {
          string: '覚えてない',
          value: 'C'
        }
      ],
      answer: '',
      id: 'conditionRash'
    },
    {
      question: '肌を引っ掻くと赤みが残るタイプ？',
      choices: [
        {
          string: '5分以上残る',
          value: 'A'
        },
        {
          string: '5分以上は残らない',
          value: 'B'
        }
      ],
      answer: '',
      id: 'conditionRedSkin'
    },
    {
      question: '肌が敏感な方だと思う？',
      choices: [
        {
          string: '敏感だと思う',
          value: 'A'
        },
        {
          string: '敏感だと思わない',
          value: 'B'
        }
      ],
      answer: '',
      id: 'conditionSensitiveSkin'
    }
  ]

  created () {
    window.scrollTo({
      top: 0
    })
  }

  @Watch('value', { deep: true })
  public onValueChanged (val: Answer) {
    if (val.conditionPainShampoo !== '' && val.conditionPainHairdye !== '' && val.conditionItchy !== '' && val.conditionRash !== '' && val.conditionRedSkin !== '' && val.conditionSensitiveSkin !== '') {
      this.ready = true
    }
  }

  @Watch('questions', { deep: true })
  public onConditionPainValueChanged (newValue: any, oldValue: any) {
    if (newValue[0].answer !== this.value.conditionPainShampoo) {
      this.value.conditionPainShampoo = newValue[0].answer
      this.scroll('#conditionPainHairdye')
    }
    if (newValue[1].answer !== this.value.conditionPainHairdye) {
      this.value.conditionPainHairdye = newValue[1].answer
      this.scroll('#conditionItchy')
    }
    if (newValue[2].answer !== this.value.conditionItchy) {
      this.value.conditionItchy = newValue[2].answer
      this.scroll('#conditionRash')
    }
    if (newValue[3].answer !== this.value.conditionRash) {
      this.value.conditionRash = newValue[3].answer
      this.scroll('#conditionRedSkin')
    }
    if (newValue[4].answer !== this.value.conditionRedSkin) {
      this.value.conditionRedSkin = newValue[4].answer
      this.scroll('#conditionSensitiveSkin')
    }
    if (newValue[5].answer !== this.value.conditionSensitiveSkin) {
      this.value.conditionSensitiveSkin = newValue[5].answer
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
.scalpQuestion {
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
.scalpQuestion {
  height: 1600px;
}
.scalpQuestion h2 {
  font-size: 20px;
}
}
</style>
