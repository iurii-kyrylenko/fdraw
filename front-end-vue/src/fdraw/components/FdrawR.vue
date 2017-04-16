<template>
  <canvas class="fcanvas"
          tabindex="-1"
          :width="state.width"
          :height="state.height">
  </canvas>
</template>

<script>
  /**
   * A 'read-only' component. Uses inner state.
   * The state is initialized from the props at the creation stage.
   */
  import mixins from './mixins'
  import getColor from '../services/getColor'

  const optionsDefault = {
    width: 300,
    height: 300,
    x: -0.5,
    y: 0,
    zoom: 100,
    resolution: 300,
    palette: getColor.bw
  }

  export default {
    mixins: [mixins],
    methods: {
      changeState (cb) {
        this.state = { ...this.state, ...cb(this.state) }
        this.draw()
        this.$emit('input', this.state)
      }
    },
    created () {
      if (this.value && typeof this.value.palette === 'string') {
        this.value.palette = getColor[this.value.palette]
      }
      this.state = { ...optionsDefault, ...this.value }
      this.getState = () => this.state
    }
  }
</script>

<style>
  @import './styles.css'
</style>
