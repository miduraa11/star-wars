import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import router from "../router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      username: '',
      loggedIn: false,
      token: '',
      errorMessage: ''
    },
    people: null,
    planets: null
  },
  mutations: {
    SET_AUTH(state, credentials) {
      state.errorMessage = ''
      if (credentials.username === 'starwars' && credentials.password === 'starwars') {
        state.auth.username = credentials.username
        state.auth.loggedIn = true
        state.auth.token = Math.random().toString(36)
        router.push('/list')
      } else {
        state.auth.errorMessage = 'Invalid username or password'
      }
    },
    CLEAR_AUTH(state) {
      state.auth.username = ''
      state.auth.loggedIn = false
      state.auth.token = ''
      state.auth.errorMessage = ''
      router.push('/login')
    },
    SET_PEOPLE(state, people) {
      state.people = people
    },
    CLEAR_PEOPLE(state) {
      state.people = null
    },
    SET_PLANETS(state, planets) {
      state.planets = planets
    },
    CLEAR_PLANETS(state) {
      state.planets = null
    }
  },
  actions: {
    setAuth (context, credentials) {
      context.commit('SET_AUTH', credentials)
    },
    getPeople (context, criteria) {
      let people = {loading: true, results: null}
      
      context.commit('SET_PEOPLE', people)
      
      if (criteria) {
        axios.get('https://swapi.co/api/people/?search=' + criteria).then(response => {
          people.loading = false
          people.results = response.data.results
          context.commit('SET_PEOPLE', people)
        })
      } else {
        axios.get('https://swapi.co/api/people/').then(response => {
          people.loading = false
          people.results = response.data.results
          context.commit('SET_PEOPLE', people)
        })
      }
    },
    getPlanets (context, criteria) {
      let planets = {loading: true, results: null}
      
      context.commit('SET_PLANETS', planets)
      
      if (criteria) {
        axios.get('https://swapi.co/api/planets/?search=' + criteria).then(response => {
          planets.loading = false
          planets.results = response.data.results
          context.commit('SET_PLANETS', planets)
        })
      } else {
        axios.get('https://swapi.co/api/planets/').then(response => {
          planets.loading = false
          planets.results = response.data.results
          context.commit('SET_PLANETS', planets)
        })
      }
    },
    clearStore (context) {
      context.commit('CLEAR_AUTH')
      context.commit('CLEAR_PEOPLE')
      context.commit('CLEAR_PLANETS')
    },
  },
  modules: {}
});
