<template>
  <div class="LoginForm">
        <div class="TextArea">
        <p class="Title">TONIGHT TO NINE</p>
        <p class="SubTitle">오늘 저녁 9시부터 시작하는 즉석 모임 플랫폼</p>
        </div>

    <form class="InputForm">
        <TheInput type="text" :Placeholder="EmailField" :Value="EmailValue"/>
        <TheInput type="text" :Placeholder="PasswordField" :Value="PasswordValue" FieldType="password" />
        <button class="LoginButton" @click="HnadleLogin">로그인하기</button>
    </form>

    <p class="SignupText">9시에 나도 만나고싶다면?<span class="AccentText" @click="HnadleSignUp">회원가입</span></p>

  </div>
</template>

<script>
import {ref} from "vue"
import { useRouter } from "vue-router";
import TheInput from "../common/TheInput.vue";
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

    const HnadleLogin = () =>  {
        router.push("/main")
    }
        
    return{
        EmailField,
        PasswordField,
        EmailValue,
        PasswordValue,
        HnadleSignUp,
        HnadleLogin
    }
 },

 
}

</script>

<style scoped>
   @import url('../../assets/style/Login/loginform.scss');
</style>

