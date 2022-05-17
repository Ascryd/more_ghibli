<template>
    <div class="details">
        <img class="banner" :src="currentFilm.movie_banner" alt="film's banner">
        <h2>{{currentFilm.title}}</h2>
        <p>{{currentFilm.description}}</p>
        <div class="infos">
            <div class="filmInfo">
                <div>
                    <h3>RT Score</h3>
                    <!-- <font-awesome-icon :icon="['fas', 'phone']" /> -->
                    <p>{{currentFilm.rt_score}}</p>
                </div>
                <div>
                    <h3>Watch time</h3>
                    <p>{{currentFilm.running_time}}</p>
                </div>
                <div>
                    <h3>Release date</h3>
                    <p>{{currentFilm.release_date}}</p>
                </div>
            </div>
            <div class="teamInfo">
                <div>
                    <h3>Director</h3>
                    <p>{{currentFilm.director}}</p>
                </div>
                <div>
                    <h3>h3roducer</h3>
                    <p>{{currentFilm.producer}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: 'FilmDetails',

        computed: {

            ...mapState(['currentFilm'])
        },
    }

</script>

<style lang="scss" scoped>

.details {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 80%;
    margin: auto;

    .banner {
        margin: auto;
        width: 100%;
        height: 320px;
        object-fit:cover;
    }

    h2 {
        font-size: 30px;
        font-weight: 600;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: 40px;
        h3 {
            font-size: 20px;
        }
    }

    .filmInfo {
        display: flex;
        justify-content: space-around;
    }

    .teamInfo {
        display: flex;
        justify-content: space-around;
    }
}

</style>