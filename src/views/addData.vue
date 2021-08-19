<template>
  <div class="main">
    <div class="sumTitle">
      截至目前，总共已接入
      <span class="warning-color">6</span>
      个业务系统，
      <span class="success-color">9</span>
      个数据源，共
      <span class="primary-color">253</span>
      个资源
    </div>
    <div class="maincontent">
      <el-row :gutter="10">
        <!-- <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3"
          ><div class="grid-content bg-purple"></div
        ></el-col> -->
        <el-col :xs="4" :sm="6" :md="8" :lg="6" :xl="6">
          <div class="grid-content bg-purple-light">
            <leftmenu></leftmenu>
          </div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="18" :xl="18">
          <div class="grid-content bg-purple-light">
            <contentmain></contentmain>
            </div>
        </el-col>
        <!-- <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3"
          ><div class="grid-content bg-purple"></div
        ></el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script>
import leftmenu from "../components/content/leftMenu.vue";
import contentmain from "../components/content/contentMain.vue";
export default {
  components: {
    leftmenu,
    contentmain,
  },
};
</script>

<style>
.main {
  width: 100%;
  background: url(../assets/bcimg.jpg) no-repeat;
  margin-top: -20px;
  background-size: cover;
}
.sumTitle {
  color: #e5e9f2;
  width: 1200px;
  height: 180px;
  font-weight: 400;
  font-size: 25px;
  line-height: 180px;
  margin: 0 auto;
}
.sumTitle .warning-color {
  color: #ffa300;
}
.sumTitle .success-color {
  color: #00b05d;
}
.sumTitle .primary-color {
  color: #409eff;
}
.maincontent {
  max-width: 1200px;
  margin: 0 auto;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #fafafa;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
