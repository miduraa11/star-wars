<template>
  <v-row align="center" justify="center">
    <v-col
      xs="12"
      sm="8"
      md="6"
      lg="4"
    >
      <v-alert v-if="auth.errorMessage" type="error">
        {{auth.errorMessage}}
      </v-alert>
      <v-card>
        <v-card-title>
          <h2>Login</h2>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              id="username"
              label="Username" 
              prepend-icon="mdi-account-circle"
              v-model="credentials.username"
              />
            <v-text-field
                id="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                v-model="credentials.password"
              />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click.prevent="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "Login",
  components: {},
  data () {
    return {
      showPassword: false,
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {},
  computed: {
    ...mapState(['auth'])
  },
  methods: {
    ...mapActions(["setAuth"]),

    login () {
      this.setAuth(this.credentials)
    }
  }
};
</script>

<style scoped>
.v-btn {
  width: 100%
}
</style>
