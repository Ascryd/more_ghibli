<template>
    <div>
        <nav class="menu">
            <ul>
                <li v-for="item in links" :key="item.title" @click="itemToShow(item)">{{item.title}}</li>
                <!-- <li @click="toShow = 'Locations'">Species</li>
                <li @click="toShow = 'Vehicles'">Vehicles</li> -->
            </ul>
        </nav>

        <FilmCharacters v-if="toShow == 'Characters'" />
        <FilmLocations v-if="toShow == 'Locations'" />

    </div>
</template>

<script>
import FilmCharacters from "@/components/DetailsComponents/FilmCharacters.vue"
import FilmLocations from "@/components/DetailsComponents/FilmLocations.vue"

    export default {
        name: 'DetailsContainer',
        components: {
            FilmCharacters,
            FilmLocations
        },

        data() {
            return {
                toShow: '',
                links: [
                    {
                        title: 'Characters',
                        isActive: true
                    },

                    {
                        title: 'Locations',
                        isActive: false
                    },

                    {
                        title: 'Vehicles',
                        isActive: false
                    },
                ],
            }
        },

        methods: {
            itemToShow(item) {
                console.log(item)
                this.toShow = item.title
            }
        },

    }
</script>

<style lang="scss" scoped>

.menu {
    margin-bottom: 50px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        li {
            background-color: white;
            padding: 5px;

        }
    }
}

</style>