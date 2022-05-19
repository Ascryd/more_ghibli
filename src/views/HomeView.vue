<template>
  <div class="home">
    <HeaderSection />

    <FilmList />

    <FilmDetails />

    <DetailsContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'
import FilmList from "@/components/FilmList.vue"
import FilmDetails from "@/components/FilmDetails.vue"

import DetailsContainer from "@/components/DetailsContainer.vue"

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    FilmList,
    FilmDetails,
    DetailsContainer
  }
}
</script>
