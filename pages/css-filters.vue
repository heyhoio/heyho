<template>
  <v-layout>
    <div>
      <h1 class="font-weight-thin mb-5 text-center">CSS Filters Generator</h1>
      <div class="d-flex css-filters__outer-wrapper">
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
            class="mr-1 css-filters__example-image"
          />
          <div class="css-filters__card-wrapper">
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
  },
  head() {
    return {
      title: 'CSS Filters',
      meta: [
        {
          hid: 'css filters',
          name: 'CSS Filters',
          content:
            'A CSS Filters generator to get an ready-to-use visualization on CSS Filters property'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.css-filters {
  &__outer-wrapper {
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      flex-wrap: wrap;
    }
  }
  &__control-wrapper {
    width: 300px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: 100%;
      flex: 1 auto;
    }
  }
  &__example-image {
    width: 100%;
    margin-left: 20px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: 100%;
      margin-left: 0px;
      margin-top: 20px;
    }
  }
  &__card-wrapper {
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: 100%;
      margin-left: 0px;
      margin-top: 20px;
    }
  }
}
</style>
