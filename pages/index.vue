<template>
  <v-layout column justify-center align-center>
    <h1>Here are some DevTools!</h1>
    <nuxt-link v-for="({ to, text }, index) in links" :key="to" :to="to"
      >{{ index + 1 }}.{{ text }}</nuxt-link
    >
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    links: [{ to: '/color-picker', text: 'Color Picker' }]
  })
}
</script>
