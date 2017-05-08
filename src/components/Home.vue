<template>
  <div id="home">
    <div class="page-header">
      <h1>
        小测验 
        <small>前端基础知识</small>
        <span class="glyphicon glyphicon-education" aria-hidden="true"></span>
      </h1>
    </div>
    
    <div>
      <h2>Web应用基础知识</h2>
      <table class="table table-striped">
        <tbody>
          <tr>
            <td>HTML标签</td>
            <td>共7问</td>
            <td><router-link to="/htmlTag">挑战</router-link></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td>XXX</td>
            <td><a href="#">挑战</a></td>
          </tr>
          <tr>
            <td>XXX</td>
            <td>XXX</td>
            <td><a href="#">挑战</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    font-size: 17px;
  }
</style>
