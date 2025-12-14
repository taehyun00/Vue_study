<template>
  <div class="Header">
    <img src="../../assets/svg/logo.svg" width="180px" />

    <div class="Infomation">
        <p class="AccentText" @click="HandleList">방목록</p>
        <p class="AccentText" @click="HandleCreate">방생성</p>
    </div>

    <div class="Infomation">
        <p class="AccentText"><span class="NameText">{{ username }}</span>님</p>
        <p class="AccentText">로그아웃</p>
    </div>
  </div>
</template>

<script >
import axios from "axios";
import { ref,watch } from 'vue';
import { useRouter } from "vue-router";

export default {
    name : 'TheHeader',
    setup(){
        const router = useRouter();
        const token = ref(localStorage.getItem("access_token"));
        const username = ref();
        watch(token, async (newToken) => {
            if (!newToken) return

            const res = await axios.get("http://localhost:8000/me", {
                headers: {
                Authorization: `Bearer ${newToken}`,
                },
            })

            username.value = res.data.name
            },{ immediate: true })

        
        const HandleCreate =() => {
            router.push("/create")
        }
        const HandleList =() => {
            router.push("/list")
        }

        return{
            axios,
            username,
            router,

            HandleCreate,
            HandleList
        }
    }
}
</script>

<style scoped>
    .Header{
        width: 100vw;
        border : none;
        background-color: #2b2b2ba2;
        height: 70px;
        display: flex;
        position: fixed;
        left: 0;
        top : 0;
        justify-content: space-around;
        align-items: center;
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