<template>
  <v-layout>
    <v-snackbar v-model="snackbar">
      Credit Card copied to clipboard
    </v-snackbar>
    <v-dialog v-model="dialog" max-width="400px">
      <v-card>
        <v-card-title class="headline">{{ brand }}</v-card-title>
        <v-card-text
          class="credit-card-generator__card"
          @click="saveToClipboard"
        >
          {{ card }} <v-icon>mdi-content-copy</v-icon>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-flex d-flex justify-center flex-column align-center>
      <h1 class="font-weight-thin mb-5 text-center">
        Credit Card Generator
      </h1>
      <v-select
        v-model="brand"
        outlined
        placeholder="Choose the brand"
        :items="items"
        class="credit-card-generator__selector"
      />
      <v-btn class="credit-card-generator__button" @click="generate"
        >Generate</v-btn
      >
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import generator from '@/helpers/credit-card-generator'

export default Vue.extend({
  name: 'CreditCardGenerator',
  data: () => ({
    brand: null,
    card: null,
    items: [
      'VISA',
      'Amex',
      'Mastercard',
      'Discover',
      'Diners',
      'EnRoute',
      'JCB',
      'Voyager'
    ],
    dialog: false,
    snackbar: false
  }),
  methods: {
    generate() {
      if (!this.brand) return
      this.card = generator.GenCC(this.brand)[0]
      this.dialog = true
    },
    saveToClipboard() {
      navigator.clipboard.writeText(this.card)
      this.snackbar = true
    }
  }
})
</script>

<style lang="scss">
.credit-card-generator {
  &__selector,
  &__button {
    width: 200px;
  }
  &__dialog {
    max-width: 400px !important;
  }
}
</style>
