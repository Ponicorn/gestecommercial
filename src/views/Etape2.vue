<template>
  <div class="phrase-turbogenerique">Bla bla bla nos équipe</div>
  <div class="animation-chargement-wrapper">
    <div class="animation-chargement"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/offre')
  }, 4000)
})

</script>
