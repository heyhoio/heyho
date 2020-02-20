<template>
  <v-layout d-flex flex-column align-center justify-center>
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="timeout">
      Color copied to clipboard
      <v-btn color="blue" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <h1 class="font-weight-thin mb-5">Color and Palette Picker</h1>
    <div v-for="(pallete, index) in palletes" :key="index">
      <h2 class="mt-5 mb-5 headline font-weight-light">{{ pallete.name }}</h2>
      <v-flex d-flex>
        <v-card
          v-for="color in pallete.colors"
          :key="color"
          :style="{ backgroundColor: `#${color}` }"
          width="200px"
          height="150px"
          class="color-picker__pallete-item"
          @click="savePallete(color)"
        >
          <v-card-text>
            {{ color }}
          </v-card-text>
        </v-card>
      </v-flex>
    </div>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ColorPicker',
  data: () => ({
    palletes: [
      {
        name: 'Velvet',
        colors: ['EE4540', 'C72C41', '801336', '510A32', '2D142C']
      },
      {
        name: 'Sunset',
        colors: ['8FB9A8', 'FEFAD4', 'FCD0BA', 'F1828D', '765D69']
      },
      {
        name: 'Sunset 2',
        colors: ['FCBB6D', 'D8737F', 'AB6C82', '685D79', '475C7A']
      },
      {
        name: 'Lazy Day',
        colors: ['F18C8E', 'F0B7A4', 'F1D1B5', '568EA6', '305F72']
      },
      {
        name: 'Hottest',
        colors: ['CC2A49', 'F99E4C', 'F36F38', 'EF4648', '582841']
      },
      {
        name: 'Halloween',
        colors: ['F26627', 'F9A26C', 'EFEEEE', '9BD7D1', '325D79']
      },
      {
        name: 'Amusement Park',
        colors: ['DDA5B6', 'F2CC8C', 'F1E6C1', '3F6A8A', '4D5E72']
      },
      {
        name: 'Jamaica',
        colors: ['EF3D59', 'E17A47', 'EFC958', '4AB19D', '344E5C']
      }
    ],
    snackbar: false,
    snackbarColor: 'primary',
    timeout: 2000
  }),
  methods: {
    savePallete(color) {
      navigator.clipboard.writeText(`#${color}`)
      this.snackbarColor = `#${color}`
      this.snackbar = true
    }
  }
})
</script>

<style lang="scss">
.color-picker {
  &__pallete-item {
    cursor: pointer;
  }
}
</style>
