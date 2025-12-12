<template>
    <div  v-if="Result.length > 0">
        <div v-for="(item, index) in Result" :key="index" class="SearchListLayout">
            <p class="Title">{{ removeMarkdown(item.title) }} <span class="SubTitle">{{ item.category }}</span></p>
            <p class="Address">{{ item.address }}</p>
            <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer" class="Link">바로가기</a>
        </div>
    </div>

    <div v-else>
        <div class="EmptyResult">
            <p class="Address">검색결과가 없습니다</p>
        </div>
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
    height: auto;
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
    }
.Link {
    font-family: 'JL';
    font-size: 24px;
    color : #BA7EFF;
    text-decoration-line : none;
}

.EmptyResult{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>