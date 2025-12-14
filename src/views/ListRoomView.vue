<template class="MainLayout">
  <TheHeader />
  <TheRoomList />
</template>

<script>
import TheHeader from '@/components/common/TheHeader.vue';
import TheRoomList from '@/components/Room/TheRoomList.vue';


export default {
      name: 'ListRoomView',
      components : {
        TheHeader,
        TheRoomList
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