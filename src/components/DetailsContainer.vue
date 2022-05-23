<template>
    <div>
        <nav class="menu">
            <ul>
                <li class="btn" v-for="item in links" :key="item.title" @click="itemToShow(item)" :class="{'btn--active': item.isActive}">{{item.title}}</li>
            </ul>
        </nav>

        <div class="content">
            <FilmCharacters v-if="toShow == 'Characters'" />
            <FilmLocations v-if="toShow == 'Locations'" />
            <FilmVehicles v-if="toShow == 'Vehicles'" />
        </div>


        

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
                toShow: 'Characters',
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
                this.toShow = item.title

                this.links.forEach(el => {
                    el.isActive = false
                })

                item.isActive = true
            }
        },
    }
</script>

<style lang="scss" scoped>

.menu {
    margin-bottom: 50px;

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;

        .btn {
            background-color: white;
            padding: 5px 7px;
            cursor: pointer;
            border-radius: 7px;

            &--active {
                color: white;
                background-color: rgb(51, 51, 51);
            }
        }
    }
}

.content {
    min-height: 500px;
}
</style>