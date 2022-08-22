<template>
  <div class="text-blue-700 font-bold">
    {{ $store.state.timerCount}}
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex';
export default {
  name: "Counter",
  data: function () {
    return {
      timerCount: this.$store.state.timerCount,
    };
  },
  computed:mapGetters(['getTimerCount']),
methods:mapActions(['increment','resetCounter','decrementCounter']),
  watch: {
    '$store.state.timerCount': {
      handler(value) {

        if (value > 0 ) {
          setTimeout(() => {
           this.decrementCounter()
          }, 1000);
        }else{
         
            this.increment()
            
            this.resetCounter()
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>
