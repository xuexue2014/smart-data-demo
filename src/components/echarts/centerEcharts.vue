<template>
  <div id="centerEcharts"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
    $.getJSON(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
    myChart.hideLoading();
     graph.nodes.forEach(function (node) {
        node.label = {
            show: node.symbolSize > 30
        };
    })  
    } )
  },
  methods: {
    drawLine() {
      console.log(this);
      let myChart = this.$echarts.init(
        document.getElementById("centerEcharts")
      );
      myChart.setOption(
        {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: graph.categories.map(function (a) {
                return a.name;
            })
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 10
                    }
                }
            }
        ]
    }
      );
    },
  },
};
</script>

<style>
#centerEcharts {
  width: 100%;
  height: 100%;
}
</style>