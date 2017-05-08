import * as types from './mutation-types'

export default {
  addQuestionNum ({ commit }) {
    commit(types.ADD_QUESTION_NUM)
  },
  delQuestionNum ({ commit }) {
    commit(types.DEL_QUESTION_NUM)
  }
}
