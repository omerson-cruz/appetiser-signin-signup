<template>
  <v-app>
    <nav-bar></nav-bar>

    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from "./components/Navbar"

export default {
  name: 'App',

  components: {
    'nav-bar': Navbar
  },

  data() {
    return {

    };
  },

  created() {
    // test for vue-cookies
    this.$cookies.set('test', 'asdfadsf', 20)


    console.log('cookies get', this.$cookies.get('test'))

    console.log('cookies get from App', this.$cookies.keys())
  },

}
</script>

<style lang="scss">
.bordered {
  border: 5px solid yellow
}



</style>
