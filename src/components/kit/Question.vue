<template>
<span class="py-3">
    {{getData[getCurrent]?.label}}
</span>
</template>
<script>
import { mapGetters} from 'vuex'
export default{
    name:"Question",
         computed: mapGetters([
    'getData','getCurrent'
  ]),

}

</script>