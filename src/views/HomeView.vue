<template>
  <div class="home">
    <HeaderSection />

    <FilmList />

    <FilmDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'
import FilmList from "@/components/FilmList.vue"
import FilmDetails from "@/components/FilmDetails.vue"

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    FilmList,
    FilmDetails
  }
}
</script>
