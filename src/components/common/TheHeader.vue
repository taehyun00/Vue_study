<template>
  <div class="Header">
    <img src="../../assets/svg/logo.svg" width="180px" />

    <div class="Infomation">
        <p class="AccentText"><span class="NameText">김태현</span>님</p>
        <p class="AccentText">로그아웃</p>
    </div>
  </div>
</template>

<script>
export default {
    name : 'TheHeader'
}
</script>

<style scoped>
    .Header{
        width: 100%;
        border : none;
        background-color: #2b2b2ba2;
        height: 70px;
        display: flex;
        position: fixed;
        left: 0;
        top : 0;
        justify-content: space-around;
        gap : 1024px;
    }
    
    .Infomation{
        display: flex;
        flex-direction: row;
        gap : 24px;
    }

    .NameText{
        color : #FFFFFF;
    }

    .AccentText{
        color : #BA7EFF;
        font-family: "JR";
        font-size: 24px;
    }
</style>