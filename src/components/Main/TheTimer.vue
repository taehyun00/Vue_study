<template>
  <div class="TimerArea">
    <p class="DescriptionText">{{ timeDescription }}</p>
    <div class="Timer">
        <div class="TimeBlock">{{ remainingTime.hours }}</div>
        <div class="TimeBlock">{{ remainingTime.minutes }}</div>
        <div class="TimeBlock">{{ remainingTime.seconds }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'TheTimer',
  setup() {
    const now = ref(new Date())

    const remainingMs = computed(() => {
      const current = now.value
      
      const serviceStart = new Date(
        current.getFullYear(),
        current.getMonth(),
        current.getDate(),
        21, 0, 0, 0
      )

      const serviceEnd = new Date(
        current.getFullYear(),
        current.getMonth(),
        current.getDate(),
        24, 0, 0, 0
      )

      let target

      if (current < serviceStart) {

        target = serviceStart
      } else if (current >= serviceStart && current < serviceEnd) {

        target = serviceEnd
      } else {
        
        target = new Date(
          current.getFullYear(),
          current.getMonth(),
          current.getDate() + 1,
          21, 0, 0, 0
        )
      }

      return target - current
    })

    const timeDescription = computed(() => {
      const current = now.value

      const serviceStart = new Date(
        current.getFullYear(),
        current.getMonth(),
        current.getDate(),
        21, 0, 0, 0
      )

      const serviceEnd = new Date(
        current.getFullYear(),
        current.getMonth(),
        current.getDate(),
        24, 0, 0, 0
      )

      if (current < serviceStart) {
        return '서비스 시작까지'
      } else if (current >= serviceStart && current < serviceEnd) {
        return '서비스 종료까지'
      } else {
        return '서비스 시작까지'
      }
    })

    const remainingTime = computed(() => {
      const totalSeconds = Math.max(0, Math.floor(remainingMs.value / 1000))

      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
      const seconds = String(totalSeconds % 60).padStart(2, '0')

      return { hours, minutes, seconds }
    })

    let timerId = null

    const tick = () => {
      now.value = new Date()
    }

    onMounted(() => {
      tick()
      timerId = setInterval(tick, 1000)
    })

    onBeforeUnmount(() => {
      if (timerId) clearInterval(timerId)
    })

    return {
      remainingTime,
      remainingMs,
      timeDescription,
    }
  },
}
</script>

<style scoped>
  @import url("../../assets/style/Main/timer.scss")
</style>
