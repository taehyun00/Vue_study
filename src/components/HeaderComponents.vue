<template>
  <div :class="HeaderBoxClass">
  </div>
</template>

<script>
import {ref} from "vue"
export default {
 name : 'HeaderComponents',
 setup(){
    const HeaderBoxClass = ref('HeaderBox')

    return{
        HeaderBoxClass
    }
 }
 
}

</script>

<style scoped>
    .HeaderBox{
        width: 100%;
        height: 40px;
        background-color : #8dc03b;
    }
</style>