<template>
    <div>
      <svg class="chart" :width="width" :height="height">
        <g v-for="(bar, index) in stat" :transform="`translate(${index*barStep},${height*(1-bar)})`">
          <rect :width="barWidth" :height="bar*height">
            <title>{{ index/stat.length + ' : ' + bar.toPrecision(2) }}</title>
          </rect>
        </g>
      </svg>
    </div>  
</template>

<script>
  export default {
    props: ['stat', 'width', 'height', 'span'],
    computed: {
      barStep () {
        return this.width / this.stat.length
      },
      barWidth () {
        return this.barStep * (1 - this.span)
      }
    }
  }
</script>

<style scoped>
  .chart {
    background-color: #f0f0f0;
    border: 1px solid #fff;
    box-shadow: 1px 1px 4px #ccc;
  }
  .chart rect {
    cursor: pointer;
    fill: #5e5e5e;
  }
</style>
