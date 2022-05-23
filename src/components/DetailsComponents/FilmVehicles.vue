<template>
    <div class="vehicles">
        <div class="list">
            <div :class="[`index--${index}`]" class="bloc" v-for="(vehicle, index) in this.vehicles" :key="vehicle.id">
                <img class="bloc__pics" :src="require(`../../assets/vehicles/${vehicle.name_pics}.webp`)" alt="photo of the character"> 
                <h2 class="bloc__name">{{vehicle.name}}</h2> 
                <div class="bloc__info">
                    <div class="description">
                        <p class="description__title"><strong>Description : </strong></p>
                        <p class="description__content">{{vehicle.description}}</p>
                    </div>
                    <p><strong>Length : </strong>{{vehicle.length}}</p>
                    <p><strong>Vehicle class : </strong>{{vehicle.vehicle_class}}</p>
                    <p><strong>Pilot : </strong>{{vehicle.pilot}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

    export default {
        name: 'FilmVehicles',

        data() {
            return {
                vehicles: []
            }
        },

        watch: {
            currentFilm() {
                this.getVehicles()
            }
        },

        mounted () {
            this.getVehicles()
        },

        computed: {
            ...mapState(['currentFilm'])
        },

        methods: {
            getVehicles() {
                this.vehicles = []

                axios.get("https://ghibliapi.herokuapp.com/vehicles")
                .then (res => {
                    res.data.forEach(vehicle => {
                        vehicle.films.forEach(el => {
                            let filmId = el.replace('https://ghibliapi.herokuapp.com/films/', '')
                            if (filmId == this.currentFilm.id) {
                                if (/\s/.test(vehicle.name)) {
                                    vehicle.name_pics = vehicle.name.replace(/\s+/g, '_')
                                } else {
                                    vehicle.name_pics = vehicle.name
                                }

                                axios.get(`${vehicle.pilot}`)
                                .then (res => {
                                    vehicle.pilot = res.data.name

                                    this.vehicles.push(vehicle)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
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

.vehicles {
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
            gap: 10px;
            background-color: white;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 1px 1px 10px black;
            padding-bottom: 5px;
            width: 900px;
            opacity: 0;

            &:hover {
                box-shadow: 2px 2px 20px black;
            }

            &__pics {
                width: 100%;
                height: 300px;
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

                .description {
                    display: flex;
                    justify-content: flex-start;
                    gap: 9px;
                    transition: all 0.4s;

                    @include mobile {
                        flex-direction: column;
                        gap: 4px;
                    }

                    &__title {
                        min-width: 100px;
                        text-align: start;
                    }

                    &__content {
                        text-align: start;
                    }
                }
            }
        }

        @for $i from 0 to 20 {
            .index--#{$i} {
                animation: slideDown 0.7s ($i *140ms) forwards;
            }
        }
    }
}
</style>