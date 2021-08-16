<template>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="资源列表" name="first">
          <div class="report">
              <label>
              截止当前，该数据源下总共已注册
              <span class="orange">{{11}}</span>
              个资源，
              <span class="green">{{5}}</span>
              个资源还未注册；已注册资源中业务表
              <span class="orange">{{11}}</span>个，字典表
              <span class="blue">{{0}}</span>个，日志表
              <span class="blue">{{0}}</span>个；同时，已注册资源中，
              <span class="blue">{{0}}</span>个已对标，
              <span class="blue">{{11}}</span>个未对标
              </label>
          </div>
          </el-tab-pane>
      <el-tab-pane label="代码集" name="second"> 代码集 </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
.content {
 font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
 font-size: 12px;

}
.content .el-tabs__nav {
  margin-left: 10px;
}
.report{
    text-align:left;
    margin-left: 10px;
    margin-right: 20px;
    background-color: #dbe2ef;
    height: 68px;
    width: 868px;
    line-height: 68px;
}
.report label{
    height: 50px;
    width: 865px;
}
.orange{
    color: #f7b138;
}
.blue{
    color: #6bb1fb;
}
.green{
    color: #5fc59c;
}
</style>