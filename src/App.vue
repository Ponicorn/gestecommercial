<template>
  <div class="background">
    <div class="background-picture" :class="[backgroundClass]"></div>
    <div class="background-filter"></div>
  </div>

  <div class="content-center">
    <div class="wrapper-etape">
      <router-view/>
    </div>
  </div>

</template>

<script setup>
import { onBeforeMount } from 'vue'

function getRandomBackground() {
  const numberRandom =  Math.floor(Math.random() * 5) + 1 
  return `picture-${numberRandom}`
}

let backgroundClass = getRandomBackground()

onBeforeMount(() => {
  backgroundClass = getRandomBackground()
})

</script>