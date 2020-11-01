<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="2"
      height="150"
    >
      <base-img
        :src="require('@/assets/mercy_logo.png')"
        contain
        max-width="250"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          color="grey darken-4"
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--grey text--darken-4"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      items: [
        'Home',
        'About',
        'Our Team',
        'Activities',
        'Gallery',
        'Contact',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
