<template>
  <v-layout column justify-center align-center>
    <h1 class="font-weight-thin mb-5">Regex Replace Viewer</h1>
    <v-flex>
      <v-text-field v-model="regex" outlined label="RegEx" />
      <v-text-field v-model="text" outlined label="Text" />
      <v-text-field v-model="replaceBy" outlined label="Replace By" />
    </v-flex>
    <v-flex>
      <p>Result:</p>
      <p>{{ result }}</p>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegexViewer',
  data: () => ({
    regex: '\\.',
    replaceBy: ' replaced string here ',
    text: 'mywebsite.com'
  }),
  computed: {
    result() {
      let regex: RegExp | string = ''
      try {
        regex = new RegExp(`${this.regex}`, 'g')
      } catch (error) {}
      return String(this.text).replace(regex, this.replaceBy)
    }
  }
})
</script>
