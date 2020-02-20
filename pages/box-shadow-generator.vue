<template>
  <v-layout class="box-shadow-generator">
    <v-flex>
      <v-flex>
        <v-card>
          <v-card-text
            v-for="({ max, min, name, model, color }, index) in boxShadowProps"
            :key="index"
          >
            <v-flex d-flex class="justify-space-between align-center">
              <p>{{ name }}</p>
              <v-switch
                v-if="typeof boxShadowProps[index].model === 'boolean'"
                v-model="boxShadowProps[index].model"
              ></v-switch>
              <p v-if="typeof boxShadowProps[index].model === 'string'">
                {{ boxShadowProps[index].model }}
              </p>
            </v-flex>
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
      </v-flex>
    </v-flex>
    <v-flex d-flex flex-column justify-center align-center>
      <v-flex
        d-flex
        flex-column
        justify-center
        align-center
        class="indigo lighten-4 box-shadow-generator__box-container"
      >
        <div
          class="box-shadow-generator__box"
          :style="{ 'box-shadow': boxShadow }"
        />
      </v-flex>
      <v-flex d-flex flex-column justify-center align-center>
        <v-card>
          <v-card-text>
            <p>box-shadow: {{ boxShadow }};</p>
            <p>-webkit-box-shadow: {{ boxShadow }};</p>
            <p>-moz-box-shadow:{{ boxShadow }};</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-flex>
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
  }
})
</script>

<style lang="scss">
.box-shadow-generator {
  &__box {
    width: 300px;
    height: 300px;
    background-color: #d2d2d2;
  }
  &__box-container {
    width: 100%;
  }
}
</style>
