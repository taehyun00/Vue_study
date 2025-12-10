<template>
  <div :class="LoginForm">
        <div :class="TextArea">
        <p :class="Title">TONIGHT TO NINE</p>
        <p :class="SubTitle">오늘 저녁 9시부터 시작하는 즉석 모임 플랫폼</p>
        </div>

    <form :class="InputForm">
        <TheInput type="text" :Placeholder="EmailField" :Value="EmailValue"/>
        <TheInput type="text" :Placeholder="PasswordField" :Value="PasswordValue" FieldType="password" />
        <button :class="LoginButton">로그인하기</button>
    </form>

  </div>
</template>

<script>
import {ref} from "vue"
import TheInput from "./common/TheInput.vue";
export default {
 name : 'LoginForm',
 components: {
    TheInput
 },
 setup(){
    const LoginForm = ref('LoginForm')
    const Title = ref('Title')
    const SubTitle = ref('SubTitle')
    const TextArea = ref('TextArea')
    const InputForm = ref('InputForm')
    const LoginButton = ref('LoginButton')

    const EmailField = ref('이메일을 입력해주세요')
    const PasswordField = ref('비밀번호를 입력해주세요')
    const EmailValue = ref("")
    const PasswordValue = ref("")
    return{
        LoginForm,
        Title,
        SubTitle,
        TextArea,
        EmailField,
        PasswordField,
        EmailValue,
        PasswordValue,
        InputForm,
        LoginButton
    }
 }
 
}

</script>

<style scoped>
    .LoginForm{
        width: 320px;
        height: 70vh;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .TextArea{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .Title{
        font-family: 'JR';
        font-size: 64px;
        color : #BA7EFF;
    }

    .SubTitle{
        font-family: 'JR';
        font-size: 25px;
        color : #ffffff;
        margin-top: -60px;
    }

    .InputForm{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap : 24px;
    }
    
    .LoginButton{
        border : 1px solid #FFFFFF;
        background-color : #3E3E3E;
        color : #FFFFFF;
        font-family: "JR";
        font-size: 24px;
        width: 320px;
        height: 60px;
        border-radius: 12px;
    }
    
</style>

