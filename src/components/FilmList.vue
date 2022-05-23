<template>
 <Carousel class="carousel" :mouseDrag="false" :breakpoints="breakpoints" :settings="settings">
    <Slide v-for="slide in films" :key="slide">
      <img @click="getCurrentFilm(slide.id)" class="carousel__item" :src="slide.image" alt="film poster">
    </Slide>
    
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>



<script>

import {Carousel, Slide, Navigation, Pagination} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    name: "FilmList",
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },

    data() {
        return {
            films: [],
            settings: {
                itemsToShow: 1,
                snapAlign: 'center'
            },
                
            breakpoints: {
                700: {
                    itemsToShow: 2,
                    snapAlign: 'center'
                },
                1040: {
                    itemsToShow: 3,
                    snapAlign: 'center'
                },
                1380: {
                    itemsToShow: 4,
                    snapAlign: 'center'
                },
                1720: {
                    itemsToShow: 5,
                    snapAlign: 'center'
                }
            }
        }
    },

    mounted() {
        const axios = require("axios")
        axios.get("https://ghibliapi.herokuapp.com/films")
        .then (res => {
            res.data.forEach(el => {
                this.films.push({
                    image: el.image,
                    id: el.id
                })
            });
        })
    },

    methods: {
        getCurrentFilm(id) {
            this.$store.dispatch('getFilm', id)
        }
    },
}
</script>


<style lang="scss">

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}

.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}

.carousel__slide--next > .carousel__item {
  transform: translate(-10px);
}

.carousel__slide--prev > .carousel__item {
  transform: translate(10px);
}

.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

.carousel {
    width: 80%;
    margin: auto;
    margin-top: 150px;

    &__prev, &__next {
        background-color: rgb(57, 143, 0);
    }

    &__pagination {
        padding: 0;
        flex-wrap: wrap;
    }

    &__pagination-button {
        background-color: rgba(57, 143, 0, 0.411);
    }

    &__pagination-button--active {
        background-color: rgb(57, 143, 0);
    }

    img {
        width: 260px;
        cursor: pointer;
    }
}
</style>