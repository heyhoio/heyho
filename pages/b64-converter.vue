<template>
  <v-layout column justify-center align-center>
    <h1 class="font-weight-thin mb-5">Base64 Converter</h1>
    <v-flex>
      <v-text-field v-model="text" outlined label="Original Text" />
      <v-switch
        v-model="convertToBase64"
        outlined
        label="Convert To Base64"
      ></v-switch>
    </v-flex>
    <v-flex>
      <p>Result:</p>
      <p>{{ result }}</p>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import { Base64 } from 'js-base64'

export default Vue.extend({
  name: 'Base64Converter',
  data: () => ({
    text: 'mywebsite.com',
    convertToBase64: true
  }),
  computed: {
    result() {
      let formattedText = ''
      if (this.convertToBase64) {
        formattedText = Base64.encode(this.text)

        return formattedText
      }

      formattedText = Base64.decode(this.text)

      return formattedText
    }
  }
})
</script>
