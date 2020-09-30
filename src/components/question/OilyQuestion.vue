<template>
  <v-container class="oilyQuestion">
    <div v-for='(question, i) in questions'
      :key="i">
      <v-row :id="question.id" class="text-center question-row" justify="space-around">
        <v-col cols="12" class="center">
          <div>
            <h2>{{question.question}}</h2>
            <v-row justify="space-around">
              <v-radio-group v-if="i !== 2" v-model="question.answer">
                <v-radio
                  v-for='(choice, i) in question.choices'
                  :key="i"
                  :label="choice.string"
                  :value="choice.value"
                  color="grey darken-2"
                ></v-radio>
              </v-radio-group>
              <v-radio-group v-if="i === 2" row v-model="question.answer">
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
          large
          color="lime"
          :disabled="!ready"
          @click="setValue">
            NEXT
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center page-nation" justify="space-around" >
      <h2>2/4</h2>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue, Watch } from 'vue-property-decorator'
import VueScrollTo from 'vue-scrollto'

interface Answer {
  eatingHabits: string;
  oilySkin: string;
  chappedSkin: string;
  drySkin: string;
}

@Component
export default class OilyQuestion extends Vue {
  public ready = false

  public value: Answer = {
    eatingHabits: '',
    oilySkin: '',
    chappedSkin: '',
    drySkin: ''
  }

  public questions = [
    {
      question: '食生活は脂物・肉類が中心',
      choices: [
        {
          string: '1日に1食は食べる',
          value: 'A'
        },
        {
          string: '2日に1食は食べる',
          value: 'B'
        },
        {
          string: '週に1回程度',
          value: 'C'
        }
      ],
      answer: '',
      id: 'eatingHabits'
    },
    {
      question: '朝起きたタイミングで頬のテカっている部位を手のひらで触った時に',
      choices: [
        {
          string: '手のひらに皮脂がついてくる',
          value: 'A'
        },
        {
          string: '手のひらに皮脂がついてこない',
          value: 'B'
        }
      ],
      answer: '',
      id: 'oilySkin'
    },
    {
      question: '顔で皮ムケしている部位がある',
      choices: [
        {
          string: 'ある',
          value: 'B'
        },
        {
          string: 'ない',
          value: 'A'
        }
      ],
      answer: '',
      id: 'chappedSkin'
    },
    {
      question: '顔が乾燥して肌に粉を吹くことがある',
      choices: [
        {
          string: '気になったことがない',
          value: 'A'
        },
        {
          string: '季節によってふくことがある',
          value: 'B'
        },
        {
          string: '粉をふきやすい',
          value: 'C'
        }
      ],
      answer: '',
      id: 'drySkin'
    }
  ]

  created () {
    window.scrollTo({
      top: 0
    })
  }

  @Watch('value', { deep: true })
  public onValueChanged (val: Answer) {
    if (val.eatingHabits !== '' && val.oilySkin !== '' && val.chappedSkin !== '' && val.drySkin !== '') {
      this.ready = true
    }
  }

  @Watch('questions', { deep: true })
  public onConditionPainValueChanged (newValue: any, oldValue: any) {
    if (newValue[0].answer !== this.value.eatingHabits) {
      this.value.eatingHabits = newValue[0].answer
      this.scroll('#oilySkin')
    }
    if (newValue[1].answer !== this.value.oilySkin) {
      this.value.oilySkin = newValue[1].answer
      this.scroll('#chappedSkin')
    }
    if (newValue[2].answer !== this.value.chappedSkin) {
      this.value.chappedSkin = newValue[2].answer
      this.scroll('#drySkin')
    }
    if (newValue[3].answer !== this.value.drySkin) {
      this.value.drySkin = newValue[3].answer
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
.oilyQuestion {
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
.oilyQuestion {
  height: 1400px;
}
.oilyQuestion h2 {
  font-size: 20px;
}
}
</style>
