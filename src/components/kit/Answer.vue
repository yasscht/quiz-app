<template>
<div class="w-full" >
    <div class="w-full" v-for="(answer,i) in getData[getCurrent].answers" :key="answer.id">
<div  v-on:click="addScore(answer.correct,answer.id)" class="cursor-pointer py-2 px-1 text-left bg-gray-200 rounded-sm w-full my-6" :class="[answer.id === activeProjectId ?'bg-blue-700 text-white rounded-md':null]">{{i+1}}-{{answer.label}}</div>
    </div>
</div>


</template>
<script>
import { mapGetters,mapActions} from 'vuex'
export default{
    name:"Answer",
  
    data:function(){
        return{
          clicked:false,
            answerText:this.answer,
            activeProjectId: 1,
            
        }
    },
    computed: mapGetters([
    'getData','getCurrent','getScore'
  ]),
  methods:{ 
...mapActions([
    'incrementScore',
   
  ]),
  addScore:function(isCorrect,id){
    this.activeProjectId = id
    isCorrect?this.incrementScore():null
   
    
  }
  }

}

</script>