<template>
  <div class="MainLayout">
    <TheHeader />
    <TheTimer />
    <TheSearch />
  </div>
</template>

<script>
import TheHeader from '@/components/common/TheHeader.vue';
import TheSearch from '@/components/Main/TheSearch.vue';
import TheTimer from '@/components/Main/TheTimer.vue';

export default {
    name : "MainView",
    components : {
        TheHeader,
        TheTimer,
        TheSearch
    }
}
</script>

<style>
  .MainLayout{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap : 120px;
    padding: 24px;
  }
</style>