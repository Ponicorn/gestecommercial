<template>
  <div class="phrase-turbogenerique">{{ phrasesGeneriques[indexPhrasesGeneriques] }}</div>
  <div class="animation-chargement-wrapper">
    <div class="animation-chargement"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const phrasesGeneriques = [
  'Disruption du marché',
  'Analyse des tendances sous-complexe',
  'Négociation avec les commerciaux',
  'Récupération du dossier client préstige'
]

function indexAleatoirePhrase() {
  return Math.floor(Math.random() * phrasesGeneriques.length) 
}

let indexPhrasesGeneriques = indexAleatoirePhrase()

onMounted(() => {
  indexPhrasesGeneriques = indexAleatoirePhrase()
  setTimeout(() => {
    router.push('/offre')
  }, 3000)
})

</script>
