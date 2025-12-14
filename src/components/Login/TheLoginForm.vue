<template>
  <div class="LoginForm">
        <div class="TextArea">
        <p class="Title">TONIGHT TO NINE</p>
        <p class="SubTitle">오늘 저녁 9시부터 시작하는 즉석 모임 플랫폼</p>
        </div>

    <form class="InputForm">
        <TheInput type="text" :Placeholder="EmailField" v-model:Value="EmailValue"/>
        <TheInput type="text" :Placeholder="PasswordField" v-model:Value="PasswordValue" FieldType="password" />
        <button class="LoginButton" @click="HnadleLogin">로그인하기</button>
    </form>

    <p class="SignupText">9시에 나도 만나고싶다면?<span class="AccentText" @click="HnadleSignUp">회원가입</span></p>

  </div>
</template>

<script>
import {ref} from "vue"
import { useRouter } from "vue-router";
import TheInput from "../common/TheInput.vue";
import axios from "axios";
export default {
 name : 'LoginForm',
 components: {
    TheInput
 },
 setup(){
    const EmailField = ref('이메일을 입력해주세요')
    const PasswordField = ref('비밀번호를 입력해주세요')
    const EmailValue = ref("")
    const PasswordValue = ref("")
    const router = useRouter()

    const HnadleSignUp = () =>  {
        router.push("/signup")
    }

    const HnadleLogin = async (e) => {
    e.preventDefault() 

    const formData = new URLSearchParams()
    formData.append("grant_type", "password")
    formData.append("username", EmailValue.value)       
    formData.append("password", PasswordValue.value)

    const response = await axios.post(
        "http://localhost:8000/token",
        formData,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    )

    console.log(response.data)


    localStorage.setItem("access_token", response.data.access_token)
    if(response.data.access_token){
        router.push("/main")
    }
}

        
    return{
        EmailField,
        PasswordField,
        EmailValue,
        PasswordValue,
        HnadleSignUp,
        HnadleLogin,
        axios
    }
 },

 
}

</script>

<style scoped>
   @import url('../../assets/style/Login/loginform.scss');
</style>

