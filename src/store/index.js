import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({

  state: {
    currentFilm: {
      description: "",
      director: "",
      id: "",
      image: "",
      locations: [],
      movie_banner: "",
      original_title: "",
      original_title_romanised: "",
      people: [],
      producer: "",
      release_date: "",
      rt_score: "",
      running_time: "",
      species: [],
      title: "",
    },
  },

  getters: {
  },

  mutations: {
    changeCurrentFilm (state, film) {
      state.currentFilm = film

    }
  },

  actions: {
    getFilm({commit}, id) {
      axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then (res => {
          // console.log(res.data)
          commit("changeCurrentFilm", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

  modules: {
  }

})
