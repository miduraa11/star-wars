<template>
  <v-container>
    <h2>Planets</h2>
    <v-simple-table
      class="text-center"
      dense
      height=350
    >
      <template v-if="loading">
        <v-progress-circular
          :size="50"
          :width="7"
          color="red"
          indeterminate
        ></v-progress-circular>
      </template>
      <template v-slot:top>
        <v-text-field v-model="search" label="Search by name" class="mx-4" v-on:keyup.enter="searchBy"></v-text-field>
      </template>
      <template v-slot:default v-if="!loading">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Climate</th>
            <th class="text-left">Diameter</th>
            <th class="text-left">Gravity</th>
            <th class="text-left">Orbital period</th>
            <th class="text-left">Population</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.name" class="text-left">
            <td>{{ item.name }}</td>
            <td>{{ item.climate }}</td>
            <td>{{ item.diameter }}</td>
            <td>{{ item.gravity }}</td>
            <td>{{ item.orbital_period }}</td>
            <td>{{ item.population }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: "PlanetsTable",
  props: ['data', 'loading'],
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['getPlanets']),
    searchBy () {
      this.getPlanets(this.search)
    }
  }
};
</script>
