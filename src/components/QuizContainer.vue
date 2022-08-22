<template>
  <div class="flex flex-col border-2 border-black w-10/12 mx-auto py-20">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="border-black px-7">
        <img class="w-full object-cover" :src="getData[getCurrent].image" />
      </div>
      <div class="w-3/4 flex flex-col items-start px-8 mt-8 md:mt-0">
        <div
          class="w-full flex justify-between items-center border-b border-gray-200 p-1"
        >
          <Stepper
            :currentQuestion="Number(getCurrent)"
            :totalQuestions="Number(getData.length)"
          />
          <Counter />
          <!--  <div>{{getData[getCurrent]}}</div> -->
        </div>
        <div class="flex flex-col items-center md:items-start w-full">
          <Question />
          <Answer />
          <div class="relative w-full">
            <button
              @click="next()"
              class="px-4 py-1 w-20 rounded-md text-white bg-green-500 absolute right-0"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Answer from "./kit/Answer.vue";

import Stepper from "./kit/Stepper.vue";
import Question from "./kit/Question.vue";

import Counter from "./kit/Counter.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "QuizContainer",
  components: { Answer, Question, Stepper, Counter },

  computed: mapGetters(["getData", "getCurrent"]),
  data: function () {
    return {
      currentQuestion: this.getData[this.getCurrent],
    };
  },

  methods: {
    ...mapActions(["increment", "resetCounter"]),
    next() {
      this.increment();
      this.resetCounter();
    },
  },
};
</script>
