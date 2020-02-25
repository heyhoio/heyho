<template>
  <v-layout class="box-shadow-generator d-flex flex-column">
    <h1 class="font-weight-thin mb-5 text-center">Color and Palette Picker</h1>
    <div class="d-flex box-shadow-generator__outer-wrapper">
      <div class="box-shadow-generator__controls-wrapper">
        <v-card>
          <v-card-text
            v-for="({ max, min, name, model, color }, index) in boxShadowProps"
            :key="index"
          >
            <div d-flex class="justify-space-between align-center">
              <p>{{ name }}</p>
              <v-switch
                v-if="typeof boxShadowProps[index].model === 'boolean'"
                v-model="boxShadowProps[index].model"
              ></v-switch>
              <p v-if="typeof boxShadowProps[index].model === 'string'">
                {{ boxShadowProps[index].model }}
              </p>
            </div>
            <v-slider
              v-if="typeof min !== 'undefined'"
              v-model="boxShadowProps[index].model"
              class="align-center"
              :max="max"
              :min="min"
            />
            <v-color-picker
              v-if="color"
              v-model="boxShadowProps[index].color"
              mode="rgba"
            />
          </v-card-text>
        </v-card>
      </div>

      <div class="box-shadow-generator__box-container">
        <div class="indigo lighten-4 d-flex align-center justify-center">
          <div
            class="box-shadow-generator__box"
            :style="{ 'box-shadow': boxShadow }"
          />
        </div>
        <div class="d-flex flex-column justify-center align-center mt-5">
          <v-card>
            <v-card-text>
              <p>box-shadow: {{ boxShadow }};</p>
              <p>-webkit-box-shadow: {{ boxShadow }};</p>
              <p>-moz-box-shadow:{{ boxShadow }};</p>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'BoxShadowGenerator',
  data: () => ({
    boxShadowProps: [
      {
        name: 'Horizontal Shadow Length',
        min: -200,
        max: 200,
        model: ''
      },
      {
        name: 'Vertical Shadow Length',
        min: -200,
        max: 200,
        model: 0
      },
      {
        name: 'Blur Radius',
        min: 0,
        max: 400,
        model: 20
      },
      {
        name: 'Spread Radius',
        min: 0,
        max: 400,
        model: 0
      },
      {
        name: 'Shadow Color',
        color: '#000'
      },
      {
        name: 'Inset',
        model: false
      }
    ]
  }),
  computed: {
    boxShadow() {
      const [
        horizontal,
        vertical,
        blur,
        spread,
        shadowColor,
        inset
      ] = this.boxShadowProps
      return `${horizontal.model}px ${vertical.model}px ${blur.model}px ${
        spread.model
      }px ${shadowColor.color} ${inset.model ? 'inset' : ''}`
    }
  },
  head() {
    return {
      title: 'HeyHo - Box Shadow Generator',
      meta: [
        {
          hid: 'box shadow generator',
          name: 'Box Shadow Generator',
          content:
            'A box shadow generator to get an ready-to-use visualization on box-shadow CSS property'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.box-shadow-generator {
  &__box {
    width: 300px;
    height: 300px;
    background-color: #d2d2d2;
    margin: 150px;
  }
  &__outer-wrapper {
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      flex-wrap: wrap;
    }
  }
  &__controls-wrapper {
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: 100%;
    }
  }
  &__box-container {
    width: 100%;
    margin-left: 20px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
}
</style>
