<template>
  <v-layout>
    <div>
      <h1 class="font-weight-thin mb-5">Color and Palette Picker</h1>
      <div class="d-flex">
        <v-card class="css-filters__control-wrapper">
          <v-card-text
            v-for="({ max, min, name, model }, index) in filterProps"
            :key="index"
          >
            <div class="d-flex justify-space-between align-center">
              <p>{{ name }}</p>
              <p>
                {{ filterProps[index].model }}
              </p>
            </div>
            <v-slider
              v-if="typeof min !== 'undefined'"
              v-model="filterProps[index].model"
              class="align-center"
              :max="max"
              :min="min"
            />
          </v-card-text>
        </v-card>

        <div>
          <img
            :style="{ filter: filters }"
            src="@/static/zelda.jpg"
            alt="logo"
            class="mr-1 ml-5 css-filters__example-image"
          />
          <div class="ml-5 mt-5">
            <v-card>
              <v-card-text> filter: {{ filters }} </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CssFilters',
  data: () => ({
    filterProps: [
      {
        name: 'Contrast',
        min: 0,
        max: 200,
        model: 100
      },
      {
        name: 'Brightness',
        min: 0,
        max: 200,
        model: 100
      },
      {
        name: 'Saturate',
        min: 0,
        max: 200,
        model: 100
      },
      {
        name: 'Sepia',
        min: 0,
        max: 200,
        model: 0
      },
      {
        name: 'Grayscale',
        min: 0,
        max: 200,
        model: 0
      },
      {
        name: 'Invert',
        min: 0,
        max: 200,
        model: 0
      },
      {
        name: 'Hue Rotate',
        min: 0,
        max: 200,
        model: 0
      },
      {
        name: 'Blur',
        min: 0,
        max: 200,
        model: 0
      }
    ]
  }),
  computed: {
    filters() {
      const [
        contrast,
        brightness,
        saturate,
        sepia,
        grayscale,
        invert,
        hue,
        blur
      ] = this.filterProps

      return `contrast(${contrast.model}%) brightness(${brightness.model}%) saturate(${saturate.model}%) sepia(${sepia.model}%) grayscale(${grayscale.model}%) invert(${invert.model}%) hue-rotate(${hue.model}deg) blur(${blur.model}px)`
    }
  }
})
</script>

<style lang="scss">
.css-filters {
  &__control-wrapper {
    width: 500px;
  }
  &__example-image {
    width: 100%;
  }
}
</style>
