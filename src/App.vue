<template>
  <div>
    <HeaderComponents />
  </div>
</template>

<script>
import HeaderComponents from "./components/HeaderComponents.vue"
export default {
  name: 'App',
  components:{
    HeaderComponents
  }

}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
