<template>
  <v-container>
    <h2>People</h2>
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
            <th class="text-left">Gender</th>
            <th class="text-left">Mass</th>
            <th class="text-left">Height</th>
            <th class="text-left">Birth year</th>
            <th class="text-left">Hair color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.name" class="text-left">
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.mass }}</td>
            <td>{{ item.height }}</td>
            <td>{{ item.birth_year }}</td>
            <td>{{ item.hair_color }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: "PeopleTable",
  props: ['data', 'loading'],
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['getPeople']),
    searchBy () {
      this.getPeople(this.search)
    }
  }
};
</script>
