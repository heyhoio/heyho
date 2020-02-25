<template>
  <v-layout column justify-center align-center>
    <h1 class="font-weight-thin">Here are some DevTools!</h1>
    <p class="headline font-weight-light">
      As developers we care to provide awesome tooling!
    </p>
    <v-list width="100%">
      <v-list-item v-for="({ to, text }, index) in links" :key="to" :to="to"
        >{{ index + 1 }}. {{ text }}</v-list-item
      >
    </v-list>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    links: [
      { to: '/color-picker', text: 'Color Picker' },
      { to: '/regex-replace-viewer', text: 'Regex Replace Viewer' },
      { to: '/box-shadow-generator', text: 'Box Shadow Generator' },
      { to: '/css-filters', text: 'CSS Filters' },
      { to: '/credit-card-generator', text: 'Credit Card Generator' }
    ]
  })
}
</script>
