<template>
    <div class="details">
        <transition name='fade'>
            <img v-if="currentFilm.id != ''" class="banner" :src="currentFilm.movie_banner" alt="film's banner">
        </transition>
        <h2>{{currentFilm.title}}</h2>
        <p class="description">{{currentFilm.description}}</p>
        <div class="infos">
            <div class="filmInfo">
                <div class="tomato_score card">
                    <h3>RT Score <img src="../assets/tomato.svg" alt="tomato icon"/></h3>
                    <p v-if="currentFilm.id != ''">{{currentFilm.rt_score}}/100</p>
                </div>
                <div class="card">
                    <h3>Watch time <font-awesome-icon icon='clock' /></h3>
                    <p v-if="currentFilm.id != ''">{{currentFilm.running_time}} minutes</p>
                </div>
                <div class="card">
                    <h3>Release date <font-awesome-icon class="calendar" icon='calendar' /></h3>
                    <p v-if="currentFilm.id != ''">{{currentFilm.release_date}}</p>
                </div>
            </div>
            <div class="teamInfo">
                <div class="card">
                    <h3>Director <font-awesome-icon class="clapperBoard" icon='clapperboard' /></h3>
                    <p v-if="currentFilm.id != ''">{{currentFilm.director}}</p>
                </div>
                <div class="card">
                    <h3>Producer <font-awesome-icon class="user-tie" icon='user-tie' /></h3>
                    <p v-if="currentFilm.id != ''">{{currentFilm.producer}}</p>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 80%;
    margin: auto;
    padding-bottom: 150px;

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

    .description {
        font-size: 21px;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: 50px;
        h3 {
            font-size: 20px;
        }
    }

    .filmInfo {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 50px;
        @include mobile--details {
            justify-content: space-around;
        }

        .tomato_score {
            h3 {
                display: flex;
                gap: 5px;
            }

            img {
                width: 22px;
            }
        }

        .calendar {
            color: rgb(36, 81, 206);
        }

    }

    .teamInfo {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 50px;

        .clapperBoard {
            color: rgb(0, 0, 0);
        }

        .user-tie {
            color: rgb(0, 0, 0);
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        gap: 6px;
        border-left: 1px solid black;
        padding: 5px 10px;

        p {
            font-weight: 600;
        }
    }
}

</style>