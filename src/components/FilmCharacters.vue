<template>
    <div>
        <ul>
            <li v-for="character in this.characters" :key="character.id">{{character.name}}<img :src="require(`../assets/characters/${character.name}.webp`)" alt="photo of the character"> </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

    export default {
        name: 'FilmCharacters',

        data() {
            return {
                characters: []
            }
        },

        watch: {
            // currentFilm() {
            //     this.characters = []
            //     console.log("currentFilm à changé")
            //     this.currentFilm.people.forEach(el => {
            //         axios.get(`${el}`)
            //         .then(res => {
            //             if (/\s/.test(res.data.name)) {
            //                 res.data.name = res.data.name.replace(/\s+/g, '_')
            //             }
            //             console.log(res.data.name)
            //             this.characters.push(res.data)

                        
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })
            //     })
            // }

            currentFilm() {
                this.characters = []
                console.log("currentFilm à changé")

                axios.get("https://ghibliapi.herokuapp.com/people/")
                .then(res => {
                    res.data.forEach(character => {
                        character.films.forEach(el => { // Some characters appear in 2 movies
                            let filmId = el.replace('https://ghibliapi.herokuapp.com/films/', '')
                            if (filmId == this.currentFilm.id) {
                                if (/\s/.test(character.name)) {
                                    character.name = character.name.replace(/\s+/g, '_')
                                }
                                console.log(character.name)
                            this.characters.push(character)
                            }

                        })

                    })

                    
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },

        computed: {
            ...mapState(['currentFilm'])
        }
    }
</script>

<style lang="scss" scoped>

</style>