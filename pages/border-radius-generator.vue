<template>
  <v-layout class="border-radius-generator d-flex flex-column">
    <h1 class="font-weight-thin mb-5 text-center">Border Radius generator</h1>
    <div class="d-flex border-radius-generator__outer-wrapper">
      <div class="border-radius-generator__controls-wrapper">
        <v-card>
          <v-card-text
            v-for="({ max, min, name, model, color }, index) in borderProps"
            :key="index"
          >
            <div d-flex class="justify-space-between align-center">
              <p>{{ name }}</p>
              <v-switch
                v-if="typeof borderProps[index].model === 'boolean'"
                v-model="borderProps[index].model"
              ></v-switch>
              <p v-if="typeof borderProps[index].model === 'string'">
                {{ borderProps[index].model }}
              </p>
            </div>
            <v-slider
              v-if="typeof min !== 'undefined'"
              v-model="borderProps[index].model"
              class="align-center"
              :max="max"
              :min="min"
            />
            <v-color-picker
              v-if="color"
              v-model="borderProps[index].color"
              mode="rgba"
            />
          </v-card-text>
        </v-card>
      </div>

      <div class="border-radius-generator__box-container">
        <div class="indigo lighten-4 d-flex align-center justify-center">
          <div
            class="border-radius-generator__box"
            :style="{
              'border-radius': borderRadius,
              'background-color': bgColor
            }"
          />
        </div>
        <div class="d-flex flex-column justify-center align-center mt-5">
          <v-card>
            <v-card-text>
              <p>border-radius: {{ borderRadius }};</p>
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
  name: 'BorderRadiusGenerator',
  data: () => ({
    borderProps: [
      {
        name: 'Border Top Left',
        min: 0,
        max: 40,
        model: ''
      },
      {
        name: 'Border Top Right',
        min: 0,
        max: 40,
        model: ''
      },
      {
        name: 'Border Bottom Right',
        min: 0,
        max: 40,
        model: ''
      },
      {
        name: 'Border Bottom Left',
        min: 0,
        max: 40,
        model: ''
      },
      {
        name: 'Background Color',
        color: '#000'
      }
    ]
  }),
  computed: {
    borderRadius() {
      const [top, right, bottom, left] = this.borderProps
      return `${top.model}px ${right.model}px ${bottom.model}px ${left.model}px`
    },
    bgColor() {
      const [bgColor] = this.borderProps.filter(
        prop => prop.name === 'Background Color'
      )

      return `${bgColor.color}`
    }
  },
  head() {
    return {
      title: 'Border Radius Generator',
      meta: [
        {
          hid: 'border radius generator',
          name: 'Border Radius Generator',
          content:
            'A Border Radius Generator to get an ready-to-use visualization of border-radius CSS property'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.border-radius-generator {
  &__box {
    width: 300px;
    height: 300px;
    background-color: rgba(63, 2, 63, 0.815);
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
