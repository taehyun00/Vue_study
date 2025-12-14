<template class="MainLayout">
  <TheHeader />
  <TheCreateRoom />
</template>

<script>
import TheHeader from '@/components/common/TheHeader.vue';
import TheCreateRoom from '@/components/Create/TheCreateRoom.vue';

export default {
      name: 'CreateRoomView',
      components : {
        TheHeader,
        TheCreateRoom
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