<template>

  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style >
html, body, #app {
  width: 100vw;
  height: 100vh;
  background-color: #3E3E3E;
  margin: 0 ;
  padding : 0 ;
  display: flex;
  align-items: center;
  justify-content: center;

}

@font-face {
  font-family:'JB';
  src: url('./assets/fonts/jb.ttf') format('truetype');
}


@font-face {
  font-family:'JR';
  src: url('./assets/fonts/jr.ttf') format('truetype');
}


@font-face {
  font-family:'JL';
  src: url('./assets/fonts/jl.ttf') format('truetype');
}

</style>
