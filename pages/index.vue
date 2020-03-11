<template>
  <v-layout column justify-center align-center>
    <h1 class="font-weight-thin">Opensource Developer Tooling!</h1>
    <p class="headline font-weight-light">
      From developers to developers 🥰!
    </p>
    <v-list width="100%">
      <v-list-item v-for="({ to, text }, index) in links" :key="to" :to="to">
        {{ index + 1 }}. {{ text }}
      </v-list-item>
    </v-list>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    links: [
      { to: '/palette-picker', text: 'Palette Picker' },
      { to: '/regex-replace-viewer', text: 'Regex Replace Viewer' },
      { to: '/box-shadow-generator', text: 'Box Shadow Generator' },
      { to: '/css-filters', text: 'CSS Filters' },
      { to: '/border-radius-generator', text: 'Border Radius Generator' },
      { to: '/text-shadow-generator', text: 'Text Shadow Generator' },
      { to: '/base-64-converter', text: 'Base 64 Converter' },
      { to: '/credit-card-generator', text: 'Credit Card Generator' }
    ]
  }),
  head() {
    return {
      title: 'Ready to Use Development Tools',
      meta: [
        {
          hid: 'ready to use development tools',
          name: 'Ready to Use Development Tools',
          content:
            'A bunch of tooling, ready-to-use, visualizers, curious stuff for developers'
        }
      ]
    }
  }
}
</script>
