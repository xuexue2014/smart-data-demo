<template>
  <div class="lookData">
    <div class="box lookDataLeft">
      <div class="content leftTop">
        <leftLine></leftLine>
      </div>
      <div class="content leftBottom">
        <left-pie></left-pie>
      </div>
    </div>
    <div class="box lookDataCenter">
      <!-- <center-echarts></center-echarts> -->
    </div>
    <div class="box lookDataRight">
      <div class="content rightTop">
        <right-bar></right-bar>
      </div>
      <div class="content rightBottom">
        <rightRadar></rightRadar>
      </div>
    </div>
  </div>
</template>

<script>
import leftLine from "../components/echarts/line.vue";
import leftPie from "../components/echarts/letfPie.vue";
import rightBar from "../components/echarts/rightBar.vue";
import rightRadar from "../components/echarts/rightRadar.vue";
// import centerEcharts from "../components/echarts/centerEcharts.vue"
export default {
  components: {
    leftLine,
    leftPie,
    rightBar,
    rightRadar,
    // centerEcharts
  },
};
</script>

<style scoped>
.lookData {
  box-sizing: border-box;
  /* background: url(../assets/bcimg.jpg) no-repeat; */
  /* min-height: 600px; */
  /* height: 100%; */
  /* margin-top: -20px; */
  display: flex;
  height: calc(100vh - 120px);
}
.box {
  margin: 0 10px;
}
.content {
  border: brown 1px solid;
  height: 50%;
  margin: 20px 0;
}
.lookDataCenter {
  position: relative;
}
.lookDataCenter::after {
  content: "";
  border-right: #45e4db 1px solid;
  border-bottom: 1px solid #45e4db;
  height: 20px;
  width: 20px;
  right: 0;
  bottom: 30px;
  position: absolute;
}
.lookDataCenter::before {
  content: "";
  border-top: #45e4db 1px solid;
  border-left: 1px solid #45e4db;
  height: 20px;
  width: 20px;
  top: 30px;
  left: 0;
  position: absolute;
}

.lookDataLeft {
  flex: 3;
}
.leftTop .leftBottom {
  height: 300px;
}
.lookDataCenter {
  flex: 5;
}
.lookDataRight {
  flex: 3;
}
</style>
