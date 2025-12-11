<template>
  <div>
    <TheHeader />
    <TheTimer />
  </div>
</template>

<script>
import TheHeader from '@/components/common/TheHeader.vue';
import TheTimer from '@/components/Main/TheTimer.vue';

export default {
    name : "MainView",
    components : {
        TheHeader,
        TheTimer
    }
}
</script>

<style>
</style>