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
    result: (vm) =>
      vm.convertToBase64 ? Base64.encode(vm.text) : Base64.decode(vm.text)
  },
  head() {
    return {
      title: 'Base 64 Encoder and Decoder',
      meta: [
        {
          hid: 'base 64 encoder and decoder',
          name: 'Base 64 Encoder and Decoder',
          content:
            'A Base 64 Encoder and Decoder to get an ready-to-use visualization of base64 encoding/decoding'
        }
      ]
    }
  }
})
</script>
