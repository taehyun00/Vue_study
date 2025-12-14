<template>
  <div class="BungaeList">
    <div
      class="BungaeCard"
      v-for="bungae in bungalows"
      :key="bungae.id"
    >
      <div class="Header">
        <h3 class="Title">{{ bungae.title }}</h3>
        <span class="Mood" v-if="bungae.mood">#{{ bungae.mood }}</span>
      </div>

      <p class="Description">{{ bungae.description }}</p>

      <div class="InfoRow">
        <span>🕘 {{ bungae.meet_time }}</span>
        <span>👥 {{ bungae.max_people }}명</span>
      </div>

      <div class="Place" v-if="bungae.place_keyword">
        📍 {{ bungae.place_keyword }}
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from "vue"
import axios from "axios"

export default {
  name: "BungaeList",
  setup() {
    const bungalows = ref([])

    const fetchBungae = async () => {
      const res = await axios.get("http://localhost:8000/bungae")
      bungalows.value = res.data
    }

    onMounted(fetchBungae)

    return {
      bungalows,
    }
  },
}
</script>


<style scoped>
.BungaeList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1200px, 1fr));
  gap: 24px;
  padding: 24px;
  margin-top : 460px;
}

.BungaeCard {
  border: 1px solid #ffffff;
  border-radius: 24px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.BungaeCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Title {
  color: #ffffff;
  font-size: 20px;
  margin: 0;
  font-family: "JR";
}

.Mood {
  color: #ba7eff;
  font-size: 14px;
    font-family: "JR";
}

.Description {
  color: #cfcfcf;
  margin: 12px 0;
  font-size: 15px;
    font-family: "JR";
}

.InfoRow {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-size: 14px;
    font-family: "JR";
}

.Place {
  margin-top: 10px;
  color: #ba7eff;
  font-size: 14px;
    font-family: "JR";
}
</style>
