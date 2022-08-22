<template>
<div class="flex flex-col items-center border-2 border-black w-10/12 mx-auto py-20 space-y-9 text-lg">
    <div class="w-4/5 text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi dolorem quas dicta facere, quos veritatis, dolore, esse cumque nisi quod. Laborum officia vitae ea quidem vel assumenda rem sapiente.
    </div>

    <div class="font-semibold text-gray-400"><span class="text-green-400">{{getScore}}</span>/{{getData.length}}</div>
    <div class="flex flex-col space-y-2">
 <button v-on:click="resetCurrent" class="bg-green-600 w-48 py-2 font-bold rounded-md text-white">Confirm your test</button>
    <button v-on:click="resetCurrent" class="text-gray-400 font-semibold">Restart test</button>
    </div>
     
</div>
</template>
<script>
import { mapGetters ,mapActions} from 'vuex';
export default{
    name:"Result",
    computed:mapGetters(['getScore','getData']),
    methods:mapActions(['resetCurrent'])
}
</script>