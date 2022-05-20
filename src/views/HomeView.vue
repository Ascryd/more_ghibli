<template>
  <div class="home">
    <HeaderSection />

    <FilmList />

    <FilmDetails />

    <DetailsContainer />

    <FooterSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'
import FilmList from "@/components/FilmList.vue"
import FilmDetails from "@/components/FilmDetails.vue"
import FooterSection from "@/components/FooterSection.vue"

import DetailsContainer from "@/components/DetailsContainer.vue"

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    FilmList,
    FilmDetails,
    DetailsContainer,
    FooterSection
  }
}
</script>
