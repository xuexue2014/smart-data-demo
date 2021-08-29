<template>
  <div id="leftPie"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      console.log(this);
      let myChart = this.$echarts.init(document.getElementById("leftPie"));
      myChart.setOption({
        
        title: {
          text: "人员上网浏览统计",
          // subtext: "纯属虚构",
          textStyle: {
            color: "rgba(33,225,219,0.5)",
          },
          left: "center",
          // top: "3%",
          backgroundColor: "rgba(227, 231, 231, 0.3)",
          borderRadius: [3, 3, 3, 3],
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "left",
          orient: "vertical",
          // 图例与文字的对齐设定
          align:"left",
        },
       /* 
       这个极坐标，但是该属性不能用
        polar: {
          center: ["20%", "50%"],
          radius: ["24%", "60%"],
        }, */
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style>
#leftPie {
  width: 100%;
  height: 100%;
}
</style>