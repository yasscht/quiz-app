<template>
  <div id="app">

    <QuizContainer v-if="getCurrent<5" />
    <Result v-else/>

  </div>
 
</template>

<script>

import QuizContainer from "./components/QuizContainer.vue"
import Result from "./components/Result.vue";
import { mapGetters } from "vuex";
export default {
  name: 'App',
  components: {
 
    QuizContainer,
    Result

  },
  computed:mapGetters(['getCurrent'])
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
