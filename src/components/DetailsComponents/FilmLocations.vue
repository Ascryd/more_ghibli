<template>
    <div class="locations">
        <div class="list">
            <div :class="[`index--${index}`]" class="bloc" v-for="(location, index) in this.locations" :key="location.id">
                <img class="bloc__pics" :src="require(`../../assets/locations/${location.name_pics}.webp`)" alt="photo of the character"> 
                <h2 class="bloc__name">{{location.name}}</h2> 
                <div class="bloc__info">
                    <p><strong>Climate : </strong>{{location.climate}}</p>
                    <p><strong>Terrain : </strong>{{location.terrain}}</p>
                    <p><strong>Surface Water : </strong>{{location.surface_water}}</p>
                </div>
            </div>
        </div>
        <div class="nothing" v-if="this.locations.length == 0">
            <p>Oops, there is no information here, sorry !</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

    export default {
        name: 'FilmLocations',
    
    
        data() {
            return {
                locations: []
            }
        },

        watch: {
            currentFilm() {
                this.getLocations()
            }
        },

        mounted () {
            this.getLocations()
        },

        computed: {
            ...mapState(['currentFilm'])
        },

        methods: {
            getLocations() {
                this.locations = []

                axios.get("https://ghibliapi.herokuapp.com/locations")
                .then(res => {
                    res.data.forEach(location => {
                        location.films.forEach(el => {
                            let filmId = el.replace('https://ghibliapi.herokuapp.com/films/', '')
                            if(filmId == this.currentFilm.id) {
                                if (/\s/.test(location.name)) {
                                    location.name_pics = location.name.replace(/\s+/g, '_')
                                } else {
                                    location.name_pics = location.name
                                }

                                this.locations.push(location)
                            }
                        })
                    })
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },
    }

</script>

<style lang="scss" scoped>

.locations {
    width: 80%;
    margin: auto;

    .list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 70px;

        .bloc {
            display: flex;
            flex-direction: column;
            width: 350px;
            gap: 10px;
            background-color: white;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 1px 1px 10px black;
            padding-bottom: 5px;
            opacity: 0;

            &:hover {
                box-shadow: 2px 2px 20px black;
            }

            &__pics {
                width: 100%;
                height: 190px;
                object-fit: cover;
                align-items: center;
            }

            &__name {
                font-size: 18px;
                font-weight: 600;
            }

            &__info {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding-left: 5px;
                gap: 5px;
            }
        }

        @for $i from 0 to 20 {
            .index--#{$i} {
                animation: slideLeft 0.7s ($i *140ms) forwards;
            }
        }
    }

    .nothing {
        @include nothing-text
    }
}
    
</style>