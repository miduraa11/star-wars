<template>
  <v-container>
    <PeopleTable :data="people.results" :loading="people.loading"></PeopleTable>
    <PlanetsTable :data="planets.results" :loading="planets.loading"></PlanetsTable>
  </v-container>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import PeopleTable from "../components/PeopleTable"
import PlanetsTable from "../components/PlanetsTable"
export default {
  name: "List",
  components: { PeopleTable, PlanetsTable },
  data () {
    return {}
  },
  beforeMount () {
    this.getPlanets()
    this.getPeople()
  },
  mounted () {},
  computed: {
    ...mapState(['people', 'planets'])
  },
  methods: {
    ...mapActions(['getPeople', 'getPlanets'])
  }
};
</script>
