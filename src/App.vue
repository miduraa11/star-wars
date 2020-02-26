<template>
  <v-app>
    <v-app-bar app dark src="../src/assets/toolbar.jpg">
      <v-app-bar-nav-icon @click="drawer = true" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Star Wars</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-if="auth.loggedIn" to="/list">List</v-btn>
        <v-btn text v-if="auth.loggedIn" @click.prevent="clearStore">Logout</v-btn>
        <v-btn text v-else to="/login">Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="darken-1--text text--darken-1"
        >
          <v-list-item v-if="auth.loggedIn" to="/list">
            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
            <v-list-item-title>List</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!auth.loggedIn" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item v-else @click.prevent="clearStore">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: "App",
  components: {},
  data () {
    return {
      drawer: false
    }
  },
  mounted () {

  },
  methods: {
    ...mapActions(['clearStore'])
  },
  computed: {
    ...mapState(['auth'])
  }
};
</script>

<style scoped>
.v-btn:before {
  background-color: transparent !important;
}
</style>
