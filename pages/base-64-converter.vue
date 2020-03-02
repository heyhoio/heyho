<template>
  <v-layout column justify-center align-center>
    <h1 class="font-weight-thin mb-5">Base64 Converter</h1>
    <v-textarea
      v-model="text"
      class="base-64-converter__textarea"
      outlined
      label="Original Text"
    />
    <v-flex class="base-64-converter__result-wrapper">
      <p>Result:</p>
      <p class="base-64-converter__result">{{ result }}</p>
    </v-flex>
    <v-flex class="base-64-converter__result-wrapper">
      <p>Decoded:</p>
      <p class="base-64-converter__result">{{ decodedResult }}</p>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import { encode, decode } from '@/utils/base64'

export default Vue.extend({
  name: 'Base64Converter',
  data: () => ({
    text: 'mywebsite.com',
    convertToBase64: true
  }),
  computed: {
    result: vm => encode(vm.text),
    decodedResult: vm => decode(vm.result)
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

<style lang="scss">
.base-64-converter {
  &__textarea,
  &__result-wrapper {
    width: 500px;
  }
  &__result {
    word-break: break-all;
  }
}
</style>
