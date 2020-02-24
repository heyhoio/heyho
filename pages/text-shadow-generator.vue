<template>
  <v-layout class="text-shadow-generator d-flex flex-column">
    <h1 class="font-weight-thin mb-5 text-center">Text shadow generator</h1>
    <div class="d-flex text-shadow-generator__outer-wrapper">
      <div class="text-shadow-generator__controls-wrapper">
        <v-card>
          <v-card-text
            v-for="({ max, min, name, model, color }, index) in textShadowProps"
            :key="index"
          >
            <div d-flex class="justify-space-between align-center">
              <p>{{ name }}</p>
              <v-switch
                v-if="typeof textShadowProps[index].model === 'boolean'"
                v-model="textShadowProps[index].model"
              ></v-switch>
              <p v-if="typeof textShadowProps[index].model === 'string'">
                {{ textShadowProps[index].model }}
              </p>
            </div>
            <v-slider
              v-if="typeof min !== 'undefined'"
              v-model="textShadowProps[index].model"
              class="align-center"
              :max="max"
              :min="min"
            />
            <v-color-picker
              v-if="color"
              v-model="textShadowProps[index].color"
              mode="rgba"
            />
          </v-card-text>
        </v-card>
      </div>

      <div class="text-shadow-generator__box-container">
        <div class="indigo lighten-4 d-flex align-center justify-center">
          <div
            class="text-shadow-generator__box"
            :style="{ 'text-shadow': textShadow }"
          >
            TEXT
          </div>
        </div>
        <div class="d-flex flex-column justify-center align-center mt-5">
          <v-card>
            <v-card-text>
              <p>text-shadow: {{ textShadow }};</p>
              <p>-webkit-text-shadow: {{ textShadow }};</p>
              <p>-moz-text-shadow:{{ textShadow }};</p>
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
    textShadowProps: [
      {
        name: 'Shift right',
        min: -39,
        max: 40,
        model: ''
      },
      {
        name: 'Shift down',
        min: -39,
        max: 40,
        model: ''
      },
      {
        name: 'Blur',
        min: -39,
        max: 40,
        model: ''
      },
      // {
      //   name: 'Opacity',
      //   min: 0,
      //   max: 400,
      //   model: 0
      // },
      {
        name: 'Shadow Color',
        color: '#000'
      }
    ]
  }),
  computed: {
    textShadow() {
      const [right, down, blur, shadowColor] = this.textShadowProps
      return `${right.model}px ${down.model}px ${blur.model}px ${shadowColor.color}`
    }
  }
})
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.text-shadow-generator {
  &__box {
    width: 300px;
    height: 300px;
    background-color: #d2d2d2;
    margin: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    -webkit-font-smoothing: antialiased;
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
