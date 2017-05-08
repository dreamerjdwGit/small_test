<template>
  <div id="HTMLTag">
    <div class="page-header">
      <h1>
        Web应用基础知识
        <small>HTML标签</small>
      </h1>
    </div>
    <component v-bind:is="questionNum"></component>
  </div>
</template>

<script>

import HTMLTagtest01 from './HTMLTag_test/HTMLTag_test_01.vue'
import HTMLTagtest02 from './HTMLTag_test/HTMLTag_test_02.vue'

export default {
  name: 'home',
  computed: {
    isDisabled: function () {
      return true
    },
    questionNum: function () {
      var num = this.$store.state.questionNum >= 10 ? this.$store.state.questionNum : ('0' + this.$store.state.questionNum)
      return 'HTMLTag_test_' + num
    }
  },
  components: {
    'HTMLTag_test_01': HTMLTagtest01,
    'HTMLTag_test_02': HTMLTagtest02
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    font-size: 17px;
  }
  button {
    float: right;
  }
</style>
