<template>
  <div class="home">
    <HeaderSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderSection
  }
}
</script>
