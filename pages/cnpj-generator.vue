<template>
  <v-layout column justify-center align-center>
    <v-snackbar v-model="snackbar" class="cnpj-generator__snack-bar">
      Cnpj copied to clipboard!
    </v-snackbar>
    <h1 class="font-weight-thin mb-5">Cnpj Generator</h1>
    <div class="my-2">
      <v-btn class="cnpj-generator__button" @click="generateCnpj()"
        >Generate</v-btn
      >
    </div>
    <v-flex class="cnpj-generator__result-wrapper">
      <p v-if="result.cnpj" class="cnpj-generator__result">
        Result: {{ result.cnpj }}
        <v-icon
          class="cnpj-generator__copy-button"
          @click="saveToClipBoard(result.cnpj)"
          >mdi-content-copy</v-icon
        >
      </p>
      <p v-if="result.maskCnpj" class="cnpj-generator__result">
        Result with mask: {{ result.maskCnpj }}
        <v-icon
          class="cnpj-generator__copy-button"
          @click="saveToClipBoard(result.maskCnpj)"
          >mdi-content-copy</v-icon
        >
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CnpjGenerator',
  data: () => ({
    result: { cnpj: '', maskCnpj: '' },
    snackbar: false
  }),
  computed: {},

  methods: {
    saveToClipBoard(text) {
      navigator.clipboard.writeText(text)
      this.snackbar = true
    },

    random(n) {
      return Math.round(Math.random() * n)
    },

    mod(dividend, divider) {
      return Math.round(dividend - Math.floor(dividend / divider) * divider)
    },

    generateCnpj() {
      const n = 9
      const n1 = this.random(n)
      const n2 = this.random(n)
      const n3 = this.random(n)
      const n4 = this.random(n)
      const n5 = this.random(n)
      const n6 = this.random(n)
      const n7 = this.random(n)
      const n8 = this.random(n)
      const n9 = 0
      const n10 = 0
      const n11 = 0
      const n12 = 1
      let d1 =
        n12 * 2 +
        n11 * 3 +
        n10 * 4 +
        n9 * 5 +
        n8 * 6 +
        n7 * 7 +
        n6 * 8 +
        n5 * 9 +
        n4 * 2 +
        n3 * 3 +
        n2 * 4 +
        n1 * 5
      d1 = 11 - this.mod(d1, 11)
      if (d1 >= 10) d1 = 0
      let d2 =
        d1 * 2 +
        n12 * 3 +
        n11 * 4 +
        n10 * 5 +
        n9 * 6 +
        n8 * 7 +
        n7 * 8 +
        n6 * 9 +
        n5 * 2 +
        n4 * 3 +
        n3 * 4 +
        n2 * 5 +
        n1 * 6
      d2 = 11 - this.mod(d2, 11)
      if (d2 >= 10) d2 = 0
      const cnpj =
        '' +
        n1 +
        n2 +
        '.' +
        n3 +
        n4 +
        n5 +
        '.' +
        n6 +
        n7 +
        n8 +
        '/' +
        n9 +
        n10 +
        n11 +
        n12 +
        '-' +
        d1 +
        d2
      this.result.cnpj = cnpj.replace(/[^\w\s]/gi, '')
      this.result.maskCnpj = cnpj
    }
  },

  head() {
    return {
      title: 'CNPJ generator',
      meta: [
        {
          hid: 'cnpj generator',
          name: 'CNPJ Generator',
          content: 'CNPJ generator'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
.cnpj-generator {
  &__textarea,
  &__result-wrapper {
    width: 500px;
    margin-top: 10px;
  }
  &__result {
    word-break: break-all;
  }
  &__copy-button {
    font-size: 11pt !important;
    margin-left: 3px !important;
  }
}

#webpack-hot-middleware-clientOverlay {
  display: none !important;
}
</style>
