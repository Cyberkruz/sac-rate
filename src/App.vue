<template>
  <div id="app">
    <div class="container">
      <div class="text-center">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <div class="row">
        <div class="col-lg">
          <sac-rate />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SacRate from './components/SacRate.vue'

export default {
  name: 'app',
  components: {
    SacRate,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
