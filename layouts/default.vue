<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed dense app elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/" tag="v-toolbar-title" class="nav-logo d-flex">
        <img src="@/static/logo.svg" alt="logo" class="mr-1" />
        <span>heyho</span>
      </nuxt-link>
      <v-spacer></v-spacer>
      <nuxt-link to="/about" tag="span" class="default__about-link">
        about
      </nuxt-link>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'trip_origin',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'trip_origin',
          title: 'Palette Picker',
          to: '/palette-picker'
        },
        {
          icon: 'trip_origin',
          title: 'Regex Replace Viewer',
          to: '/regex-replace-viewer'
        },
        {
          icon: 'trip_origin',
          title: 'Box Shadow Generator',
          to: '/box-shadow-generator'
        },
        {
          icon: 'trip_origin',
          title: 'CSS Filters',
          to: '/css-filters'
        },
        {
          icon: 'trip_origin',
          title: 'Border Radius Generator',
          to: '/border-radius-generator'
        },
        {
          icon: 'trip_origin',
          title: 'Text Shadow Generator',
          to: '/text-shadow-generator'
        },
        {
          icon: 'trip_origin',
          title: 'Base 64 Converter',
          to: '/base-64-converter'
        },
        {
          icon: 'trip_origin',
          title: 'Credit Card Generator',
          to: '/credit-card-generator'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
.nav-logo {
  align-items: center;
  cursor: pointer;
}
.default {
  &__about-link {
    cursor: pointer;
  }
}
</style>
