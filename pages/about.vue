<template>
  <v-layout column justify-center align-center>
    <h1 class="font-weight-thin">About us!</h1>
    <p class="headline font-weight-light">Some of us:</p>
    <v-list width="100%">
      <v-list-item
        v-for="({ to, text }, index) in links"
        :key="to"
        target="_blank"
        :href="to"
        >{{ index + 1 }}. {{ text }}</v-list-item
      >
    </v-list>
  </v-layout>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  data: () => ({
    links: [
      { to: 'https://github.com/douglas-pires', text: 'Douglas Pires' },
      { to: 'https://github.com/AustinFelipe', text: 'Austin Felipe' },
      { to: 'https://github.com/Carl13da', text: 'Carlos Henrique' },
      { to: 'https://github.com/vaahxx', text: 'Valentina Garavaglia' },
      { to: 'https://github.com/DanilloMaster', text: 'Danillo Caetano' }
    ]
  }),
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'About page',
          name: 'About page',
          content: 'This is us, please contact us whenever possible :D'
        }
      ]
    }
  }
})
</script>
