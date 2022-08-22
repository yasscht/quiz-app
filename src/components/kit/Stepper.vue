<template>
<div class="px-4 py-1 bg-blue-700 text-white rounded-md text-sm">
{{getCurrent+1}}-{{total}}
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{

    name:"Stepper",
        props:{
        currentQuestion:Number,
        totalQuestions:Number    
        },
    data:function(){
        return{
current: this.currentQuestion,
total:this.totalQuestions
        }

    },
    computed:mapGetters([
        'getCurrent'
    ])

}

</script>