<template>
  <div class="question">
    <h2>问题二</h2>
    <p>请写出一个文本框和一个按钮：</p>
    <br>
    <form>
      <p>文本框：</p>
      <label>解答</label>
      <input type="text"></input>
      <br>
      <br>
      <p>按钮：</p>
      <label>解答</label>
      <input type="text"></input>
      <button type="button" @click="confirm">确认</button>
    </form>
    <div id="btn">
      <button id="preBtn" @click="preQuestion" v-bind:class="{disabled: isDisabled}" class="btn btn-info">
        <span class="glyphicon glyphicon-hand-left" aria-hidden="true"></span>
        上一题
      </button>
       <button id="nextBtn" @click="nextQuestion" v-bind:class="{disabled: isDisabled}" class="btn btn-info">
        下一题
        <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function () {
    return {
      isDisabled: true
    }
  },
  methods: {
    confirm: function () {
      this.isDisabled = false
      return false
    },
    nextQuestion: function () {
      this.$store.dispatch('addQuestionNum')
    },
    preQuestion: function () {
      this.$store.dispatch('delQuestionNum')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #btn {
    float: right;
  }
  input[type="text"] {
    width: 300px;
  }
</style>
