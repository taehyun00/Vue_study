<template>
  <div v-for="(item, index) in Result" :key="index" class="SearchListLayout">
    <p class="Title">{{ removeMarkdown(item.title) }} <span class="SubTitle">{{ item.category }}</span></p>
    <p class="Address">{{ item.address }}</p>
    <a v-if = "item.link" :href="item.link" target="_blank" rel="noopener noreferrer" class="Link">바로가기</a>
  </div>
</template>

<script>
import removeMarkdown from 'markdown-to-text'
export default {
    name : "TheSearchList",
    props : {
        Result : {
            type : Array,
            default : () => []
        }
    },
    setup(){
        return{
        removeMarkdown
        }
    }
}
</script>

<style>
.SearchListLayout{
    margin-top : -120px;
    margin-bottom: 30px;
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
    }
.Address {
        font-family: 'JL';
        font-size: 32px;
        color : #ffffff;
        margin-top : -50px;
        margin-bottom: 30px;
    }
.Link {
    font-family: 'JL';
    font-size: 24px;
    color : #BA7EFF;
}
</style>