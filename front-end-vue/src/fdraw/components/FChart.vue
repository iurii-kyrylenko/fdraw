<template>
    <div>
      <svg class="chart" :width="width" :height="height">
        <g v-for="(bar, index) in stat" :transform="`translate(${index*barStep},${height*(1-bar)})`">
          <rect :width="barWidth" :height="bar*height">
            <title>{{ index/stat.length + ' : ' + bar.toPrecision(2) }}</title>
          </rect>
        </g>
      </svg>
      <canvas ref="canvas" class="palette" :width="width" :height="32"></canvas>
    </div>
</template>

<script>
  import getColor from '../services/getColor'

  export default {
    props: ['stat', 'width', 'height', 'span', 'palette'],
    computed: {
      barStep () {
        return this.width / this.stat.length
      },
      barWidth () {
        return this.barStep * (1 - this.span)
      }
    },
    watch: {
      palette () {
        this.showPalette()
      }
    },
    mounted () {
      this.showPalette()
    },
    methods: {
      showPalette () {
        const canvas = this.$refs.canvas
        const context = canvas.getContext('2d')
        const width = canvas.width
        const height = canvas.height
        const imageData = context.createImageData(width, height)
        const fcolor = (h) => getColor.lg(h, this.palette)
        for (let j = 0; j < height; j++) {
          for (let i = 0; i < width; i++) {
            const ii = 4 * (j * width + i)
            const c = fcolor(i / width)
            imageData.data[ii + 0] = c.r
            imageData.data[ii + 1] = c.g
            imageData.data[ii + 2] = c.b
            imageData.data[ii + 3] = c.a
          }
        }
        context.putImageData(imageData, 0, 0)
      }
    }
  }
</script>

<style scoped>
  .chart {
    display: block;
    background-color: #f0f0f0;
    border: 1px solid #fff;
    box-shadow: 1px 1px 4px #ccc;
  }
  .chart rect {
    cursor: pointer;
    fill: #5e5e5e;
  }
  .palette {
    border: 1px solid #fff;
    box-shadow: 1px 1px 4px #ccc;
  }
</style>
