<template>
  <div class="CreateRoom">
    <h2>방 생성하기</h2>

    <TheInput
      v-model:Value="title"
      PlaceHolder="방 이름을 입력해주세요"
    />

    <TheInput
      v-model:Value="description"
      PlaceHolder="방 설명을 입력해주세요"
    />

    <TheInput
      v-model:Value="maxPeople"
      PlaceHolder="최대 인원 수"
      type="number"
    />

    <TheInput
      v-model:Value="meetTime"
      type="time"
    />

    <TheInput
      v-model:Value="placeKeyword"
      PlaceHolder="장소 키워드 (예: 강남, 홍대)"
    />

    <select v-model="mood" class="MoodSelect">
      <option value="">분위기 선택</option>
      <option value="술">술</option>
      <option value="밥">밥</option>
      <option value="카페">카페</option>
      <option value="조용">조용</option>
      <option value="신남">신남</option>
    </select>

    <button @click="createRoom" class="CreateButton">생성하기</button>
  </div>
</template>


<script>
import { ref } from "vue"
import TheInput from "../common/TheInput.vue"
import axios from "axios"
import { useRouter } from "vue-router";
export default {
  name: "TheCreateRoom",
  components: { TheInput },
  setup() {
    const title = ref("")
    const description = ref("")
    const maxPeople = ref(2)
    const meetTime = ref("")
    const placeKeyword = ref("")
    const mood = ref("")
    const router = useRouter();
    const createRoom = async () => {
      const token = localStorage.getItem("access_token")

      const response = await axios.post(
        "http://localhost:8000/bungae",
        {
          title: title.value,
          description: description.value,
          max_people: maxPeople.value,
          meet_time: meetTime.value,
          place_keyword: placeKeyword.value,
          mood: mood.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if(response.status == 200){
        alert("방이 생성되었어요!")
        router.push(`room/${response.data.data}`)
      }
    }

    return {
      title,
      description,
      maxPeople,
      meetTime,
      placeKeyword,
      mood,
      createRoom,
    }
  },
}
</script>


<style scoped>
.CreateRoom {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width : 80vw;

}

.MoodSelect {
  height: 60px;
  font-size: 16px;
  font-family: "JR";
  background-color: #43434300;
  border-radius: 12px;
  padding : 12px;
  outline: none;
}

.CreateButton {
        border : 1px solid #FFFFFF;
        background-color : #3E3E3E;
        color : #FFFFFF;
        font-family: "JR";
        font-size: 24px;
        height: 60px;
        border-radius: 12px;

}
</style>

