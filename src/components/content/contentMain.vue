<template>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="资源列表" name="first">
        <div class="report">
          <label>
            截止当前，该数据源下总共已注册
            <span class="orange">{{ 11 }}</span>
            个资源，
            <span class="green">{{ 5 }}</span>
            个资源还未注册；已注册资源中业务表
            <span class="orange">{{ 11 }}</span
            >个，字典表 <span class="blue">{{ 0 }}</span
            >个，日志表 <span class="blue">{{ 0 }}</span
            >个；同时，已注册资源中， <span class="blue">{{ 0 }}</span
            >个已对标， <span class="blue">{{ 11 }}</span
            >个未对标
          </label>
        </div>
        <!-- 资源列表搜索部分 -->
        <resource-list></resource-list>
        
        <!-- 数据包管理头 -->
        <data-set-manage></data-set-manage>
        
          <!-- 数据包布局 -->
        <dataset></dataset>
      </el-tab-pane>

      <el-tab-pane label="代码集" name="second">
        <codeset></codeset>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import resourceList from "./resourceList.vue";
import codeset from "./codeSet.vue";
import dataset from "./dataSet";
import dataSetManage from './dataSetManage'
export default {
  components: {
    resourceList,
    codeset,
    dataset,
    dataSetManage 
  },
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

<style scoped>
.content {
  background-color: #fff;
  font-size: 12px;
  /* width: 615px; */
  margin-left: 10px;
  height: 700px;
}
.content .el-tabs__nav {
  margin-left: 10px;
}
.report {
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #dbe2ef;
  /* height: 68px; */
  /* width: 605px; */
  line-height: 34px;
  padding: 0 5px;
}

.report label {
  padding: 0, 5px;
  /* height: 50px; */
  width: 100%;
}
.orange {
  color: #f7b138;
}
.blue {
  color: #6bb1fb;
}
.green {
  color: #5fc59c;
}
</style>
