<template>

    <LoginForm />

</template>

<script>
import LoginForm from "./components/TheLoginForm.vue"
export default {
  name: 'App',
  components:{
    LoginForm
  }

}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  background-color: #3E3E3E;
  margin: 0 ;
  padding : 0 ;
  display: flex;
  align-items: center;
  justify-content: center;

}

@font-face {
  font-family:'JB';
  src: url('./fonts/jb.ttf') format('truetype');
}


@font-face {
  font-family:'JR';
  src: url('./fonts/jr.ttf') format('truetype');
}


@font-face {
  font-family:'JL';
  src: url('./fonts/jl.ttf') format('truetype');
}

</style>
