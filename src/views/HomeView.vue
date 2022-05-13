<template>
  <div class="home">
    <HeaderSection />

    <FilmList />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'
import FilmList from "@/components/FilmList.vue"

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    FilmList,
  }
}
</script>
