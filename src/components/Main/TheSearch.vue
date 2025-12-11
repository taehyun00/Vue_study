<template>
  <div class="SearchLayout">
  <div class="SearchBar">
    <TheInput v-model:Value="SearchValue" :Placeholder="SearchField" />
  </div>
  <button class="SearchButton" @click="handleSearch">검색하기</button>
  </div>
  <TheSearchList :Result="Result" />
</template>

<script>
import TheInput from '../common/TheInput.vue';
import {ref} from "vue"
import axios from 'axios';
import TheSearchList from './TheSearchList.vue';
export default {
    name : "TheSearch",
    components :{
      TheInput,
      TheSearchList
    },
    setup(){
    const SearchField = ref('식당을 검색해주세요')
    const SearchValue = ref("")
    const Result = ref([])

    const handleSearch = async () => {
      try {
        console.log('검색어:', SearchValue.value)

        const response = await axios.get(
          '/v1/search/local.json',
          {
            params: {
              query: SearchValue.value,
              display : 5
            },
            headers: {
              'X-Naver-Client-Id': 'NLMWWxgnNyMWSFmrzggP',
              'X-Naver-Client-Secret': 'ZIQCLwPkna',
            },
          }
        )

        Result.value = response.data.items
        console.log(Result.value)
      } catch (error) {
        alert('검색 중 오류:', error)
      }
    }


    return{
      SearchField,
      SearchValue,
      Result,
      axios,
      handleSearch
    }
    }
    
}
</script>

<style>
  .SearchLayout{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom : 30px;
  }
  .SearchBar {
    width: 70%;
  }

  .SearchButton {
    width: 20%;
    border-radius: 12px;
    border : none;
    background-color: #BA7EFF;
    font-family: "JR";
    font-size: 24px;
    color : #FFFFFF;
    height: 36px;
  }
</style>