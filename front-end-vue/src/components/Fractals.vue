<template>
  <div class="container">
<!--
    <fdraw-r class="bottom-span" :value="{ palette: 'wk' }"></fdraw-r>
    <fdraw-r class="bottom-span"
             :value="{ resolution: 20, palette: [{h:0,r:255,g:255,b:0},{h:1,r:0,g:0,b:0}] }">
    </fdraw-r>
-->
    <div class="title bottom-span">Tools:</div>
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

    <div class="title top-span">Color map:</div>
    <fdraw-rw class="top-span" v-model="params" @progress="progress" @stat="stat=$event"></fdraw-rw>

    <div class="title top-span">Spectrum:</div>
    <fchart class="top-span" :stat="stat" width="324" height="120" span="0.2" :palette="palette"></fchart>
  </div>
</template>

<script>
  import FdrawR from '@/fdraw/components/FdrawR'
  import FdrawRw from '@/fdraw/components/FdrawRw'
  import FChart from '@/fdraw/components/FChart'
  import getColor from '@/fdraw/services/getColor'
  export default {
    components: { FdrawR, FdrawRw, 'fchart': FChart },
    data: () => ({
      params: {
        width: 320,
        height: 440,
        x: -1.37215516,
        y: 0.0109641665,
        zoom: 498788,
        resolution: 300,
        palette: getColor.wk
      },
      drawing: '',
      stat: [],
      palette: getColor.wk
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
        this.palette = palette
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
  .title {
    font-family: monospace;
  }
  .top-span {
    margin-top: 10px;
  }
  .bottom-span {
    margin-bottom: 10px;
  }
  .fpanel {
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
    font-family: monospace;
    font-size: 0.8em;
  }
</style>
