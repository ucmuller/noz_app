<template>
  <v-container class="personalQuestion">
    <v-row
    v-for='(question, i) in questions'
    :key="i"
    class="text-center question-row"
    justify="space-around">
      <v-col cols="8" class="center select-form">
        <div>
          <v-row justify="space-around">
            <v-select
              :items="question.choices"
              :label="question.label"
              v-model="question.answer"
              color="grey darken-2"
            ></v-select>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center question-row" justify="space-around">
      <v-col cols="10" class="center select-form">
        <v-text-field
            label="アナタが今使用しているシャンプー名(任意)"
            placeholder="ボタニカルシャンプー"
            v-model="value.shampooName"
            outlined
          ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center question-row" justify="space-around">
      <v-col cols="12" class="center">
        <!-- <v-btn class="question-button" large @click="deleteValue">AGAIN</v-btn> -->
        <v-btn
          class="question-button"
          large
          color="lime"
          :disabled="!ready"
          @click="setValue">
          ENTER
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center page-nation" justify="space-around" >
      <h2>4/4</h2>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue, Watch } from 'vue-property-decorator'

interface Answer {
  age: string;
  sex: string;
  shampooName: string;
}

@Component
export default class PersonalQuestion extends Vue {
  public ready = false
  public value = {
    age: '',
    sex: '',
    shampooName: ''
  }

  public questions = [
    {
      choices: [
        '男',
        '女'
      ],
      answer: '',
      id: 'sex',
      label: '性別'
    },
    {
      choices: [
        '20~24歳',
        '25~29歳',
        '30~34歳',
        '35~39歳',
        '40~44歳',
        '45~49歳',
        '50~54歳',
        '55~59歳',
        '60~64歳',
        '65歳~'
      ],
      answer: '',
      id: 'age',
      label: '年齢'
    }
  ]

  created () {
    window.scrollTo({
      top: 0
    })
  }

  @Watch('value', { deep: true })
  public onValueChanged (val: any) {
    if (val.sex !== '' && val.age !== '') {
      this.ready = true
    }
  }

  @Watch('questions', { deep: true })
  public onConditionPainValueChanged (newValue: any, oldValue: any) {
    if (newValue[0].answer !== this.value.sex) {
      this.value.sex = newValue[0].answer
    }
    if (newValue[1].answer !== this.value.age) {
      this.value.age = newValue[1].answer
    }
  }

  public setValue () {
    this.$emit('handle-parent', this.value)
  }
}
</script>

<style scoped>
.personalQuestion {
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
.select-form{
  margin: 20px;
}
@media screen and (max-width: 480px) {
.scalpQuestion h2 {
  font-size: 20px;
}
}
</style>
