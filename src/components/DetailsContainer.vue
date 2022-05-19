<template>
    <div>
        <nav class="menu">
            <ul>
                <li v-for="item in links" :key="item.title" @click="itemToShow(item)">{{item.title}}</li>
            </ul>
        </nav>

        <FilmCharacters v-if="toShow == 'Characters'" />
        <FilmLocations v-if="toShow == 'Locations'" />
        <FilmVehicles v-if="toShow == 'Vehicles'" />

    </div>
</template>

<script>
import FilmCharacters from "@/components/DetailsComponents/FilmCharacters.vue"
import FilmLocations from "@/components/DetailsComponents/FilmLocations.vue"
import FilmVehicles from "@/components/DetailsComponents/FilmVehicles.vue"

    export default {
        name: 'DetailsContainer',
        components: {
            FilmCharacters,
            FilmLocations,
            FilmVehicles
        },

        data() {
            return {
                toShow: 'Locations',
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