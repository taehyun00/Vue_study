<template>
  <div class="SignupForm">
    <div class="TextArea">
        <p class="Title">TONIGHT TO NINE</p>
        <p class="SubTitle">오늘 저녁 9시부터 시작하는 즉석 모임 플랫폼</p>
    </div>

    <form class="InputForm">
        <TheInput type="text" :Placeholder="NameField" :Value="NameValue"/>
        <TheInput type="text" :Placeholder="EmailField" :Value="EmailValue"/>
        <TheInput type="text" :Placeholder="PasswordField" :Value="PasswordValue"/>
        <button class="LoginButton">회원가입</button>
    </form>
  </div>
  
</template>

<script>
import {ref} from "vue"
import { useRouter } from "vue-router";
import TheInput from "./common/TheInput.vue";
export default {
 name : 'SignupForm',
 components: {
    TheInput
 },
 setup(){
    const EmailField = ref('이메일을 입력해주세요')
    const PasswordField = ref('비밀번호를 입력해주세요')
    const NameField = ref('사용자명을 입력해주세요')
    const NameValue = ref("")
    const EmailValue = ref("")
    const PasswordValue = ref("")
    const router = useRouter()

    const HnadleSignUp = () =>  {
        router.push("/signup")
    }
        
    return{
        EmailField,
        PasswordField,
        EmailValue,
        PasswordValue,
        NameField,
        NameValue,
        HnadleSignUp
    }
 },

 
}

</script>

<style scoped>
  @import url('../assets/style/signupform.scss');  
</style>

