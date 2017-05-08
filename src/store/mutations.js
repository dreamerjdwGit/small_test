// src/store/mutations.js
import * as types from './mutation-types'

export default {
  [types.ADD_QUESTION_NUM] (state) {
    state.questionNum += 1
  },
  [types.DEL_QUESTION_NUM] (state) {
    state.questionNum -= 1
  }
}
