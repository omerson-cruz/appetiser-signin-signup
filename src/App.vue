<template>
  <v-app>
    <v-app-bar
      app
      color="accent"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1"
          contain
          min-width="100"
          src="https://jobio-prd-s3.s3-ap-southeast-1.amazonaws.com/poster-photo/26522-29287-prd.png"
          width="100"
        />
        <span class="text-h5 shrink mt-1 hidden-sm-and-down">
          Appetiser
        </span>
      </div>
      <v-spacer></v-spacer>

    </v-app-bar>

    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.bordered {
  border: 5px solid yellow
}
</style>
