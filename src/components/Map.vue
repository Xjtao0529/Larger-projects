<template>
  <div class="com-container">
    <div class="com-chart" ref="map_ref"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
  methods: {
    async initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.map_ref, "chalk");
      const res = await axios.get(
        "http://localhost:8080/static/map/china.json"
      );
      this.$echarts.registerMap("china", res.data);
      const initOption = {
        geo: {
          type: "map",
          map: "china",
        },
      };
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      const { data: res } = await this.$http.get("map");
      this.allData = res;
      this.updateChart();
    },
    updateChart() {
      const seriesArr = this.allData.map((item) => {
        return {
          type: "effectScatter",
          name: item.name,
          data: item.children,
        };
      });
      const dataOption = {
        series: seriesArr,
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const adapterOption = {};
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
  },
};
</script>

<style lang="scss" scoped></style>
