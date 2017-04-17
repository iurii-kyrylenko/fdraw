<template>
  <div class="container">
  <!--
    <fdraw-r :value="{ palette: 'wk' }"></fdraw-r><br/>
    <fdraw-r :value="{ resolution: 20, palette: [{h:0,r:255,g:255,b:0},{h:1,r:0,g:0,b:0}] }"></fdraw-r><br/>
  -->
    <div class="fpanel">
      <input :value="params.width" @change="pushToImmutable('width', $event)" title="Width">
      <span>&times;</span>
      <input :value="params.height" @change="pushToImmutable('height', $event)" title="Height">
      <span class="info"><b>{{ drawing }}</b></span>
      <br/>
      <input :value="params.resolution" @change="pushToImmutable('resolution', $event)" title="Resolution">
      <select :value="selectedPalette" @change="selectPalette" title="Palette">
        <option disabled value="custom">Select palette</option>
        <option value="bw">b&amp;w</option>
        <option value="wb">w&amp;b</option>
        <option value="rb">rainbow</option>
        <option value="wk">wiki</option>
      </select>
      <div class="info">x:&nbsp;&nbsp;&nbsp;&nbsp;{{ params.x }}</div>
      <div class="info">y:&nbsp;&nbsp;&nbsp;&nbsp;{{ params.y}}</div>
      <div class="info">zoom: {{ params.zoom }}</div>
    </div>

    <fdraw-rw v-model="params" @progress="progress"></fdraw-rw>
  </div>
</template>

<script>
  import FdrawR from '@/fdraw/components/FdrawR'
  import FdrawRw from '@/fdraw/components/FdrawRw'
  import getColor from '@/fdraw/services/getColor'
  export default {
    components: { FdrawR, FdrawRw },
    data: () => ({
      params: {
        width: 320,
        height: 440,
        x: -0.5,
        y: 0,
        zoom: 150,
        resolution: 300,
        palette: [
          { h: 0.0, r: 100, g: 0, b: 0 },
          { h: 0.5, r: 255, g: 255, b: 0 },
          { h: 1.0, r: 100, g: 0, b: 0 }
        ]
      },
      drawing: ''
    }),
    computed: {
      selectedPalette () {
        switch (this.params.palette) {
          case getColor.bw: return 'bw'
          case getColor.wb: return 'wb'
          case getColor.rb: return 'rb'
          case getColor.wk: return 'wk'
          default: return 'custom'
        }
      }
    },
    methods: {
      selectPalette (event) {
        const palette = getColor[event.target.value]
        this.params = { ...this.params, palette }
      },
      pushToImmutable (key, event) {
        const n = +event.target.value
        if (!isNaN(n) && n > 0) {
          this.params = { ...this.params, [key]: n }
        }
      },
      progress (event) {
        this.drawing = event ? 'Drawing...' : '[+] [-] drag pinch'
      }
    }
  }
</script>

<style scoped>
  .fpanel {
    margin-bottom: 12px;
    width: 320px;
    height: 110px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 4px #eee;
    border-radius: 3px;
    padding: 2px;
  }
  .fpanel > input {
    margin: 4px;
    width: 40px;
    padding: 2px;
    text-align: center;
  }
  .fpanel > .info {
    margin-left: 16px;
    font-family: Courier New;
    font-size: 0.8em;
  }
</style>
