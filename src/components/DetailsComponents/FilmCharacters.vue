<template>
    <div class="characters">
        <div class="list">
            <div :class="[`index--${index}`]" class="bloc" v-for="(character, index) in this.characters" :key="character.id">
                <img class="bloc__pics" :src="require(`../../assets/characters/${character.name_pics}.webp`)" alt="photo of the character"> 
                <h2 class="bloc__name">{{character.name}}</h2> 
                <div class="bloc__info">
                    <p><strong>Age : </strong>{{character.age}}</p>
                    <p><strong>EyeColor : </strong>{{character.eye_color}}</p>
                    <p><strong>Gender : </strong>{{character.gender}}</p>
                    <p><strong>Hair color : </strong>{{character.hair_color}}</p>
                    <p><strong>Species : </strong>{{character.species}}</p>
                </div>
            </div>
        </div>
        <div class="nothing" v-if="this.characters.length == 0">
            <p>Oops, there is no information here, sorry !</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

    export default {
        name: 'FilmCharacters',

        data() {
            return {
                characters: [],
                empty: false
            }
        },

        watch: {   
           currentFilm() {
                this.getCharacters()
            }, 
            
        },

        mounted () {
            this.getCharacters()

        },

        computed: {
            ...mapState(['currentFilm'])
        },

        methods: {
            getCharacters() { // We get the characters of the selected film
                this.characters = []
                let storeArray = []

                axios.get("https://ghibliapi.herokuapp.com/people/")
                .then(res => {
                    res.data.forEach(character => {
                        character.films.forEach(el => { // Some characters appear in 2 movies
                            let filmId = el.replace('https://ghibliapi.herokuapp.com/films/', '')
                            if (filmId == this.currentFilm.id) {
                                if (/\s/.test(character.name)) {
                                    character.name_pics = character.name.replace(/\s+/g, '_')
                                } else {
                                    character.name_pics = character.name
                                }

                                axios.get(`${character.species}`) // Get the characters species
                                .then (result => {
                                    character.species = result.data.name
                                
                                storeArray.push(character)
                                return storeArray
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            }
                        })
                    })
                    storeArray = this.characters                    
                })
                .catch(err => {
                    console.log(err)
                })
            },
        },
    }
</script>

<style lang="scss" scoped>

.characters {
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
            width: 220px;
            opacity: 0;


            &:hover {
                box-shadow: 2px 2px 20px black;
            }

            &__pics {
                width: 100%;
                height: 310px;
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
                padding: 0 5px;
                gap: 5px;

                p {
                    text-align: start
                }
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