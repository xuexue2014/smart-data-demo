<template>
  <div class="codeSetDataset">
    <div class="datalist">
      <el-descriptions
        v-for="item in newTableData"
        :key="item.key"
        :column="5"
        :colon="false"
      >
        <el-descriptions-item contentClassName="iconii">
          <div class="dataName">
            <el-checkbox></el-checkbox>
            <i class="iconfont dataicon"> &#xe644;</i>
            {{ item.data }}
          </div>
        </el-descriptions-item>

        <el-descriptions-item class="empty"></el-descriptions-item>
        <!-- <div labelStyle>11</div> -->
        <el-descriptions-item label="用途分类:">
          {{ item.usestype }}</el-descriptions-item
        >
        <el-descriptions-item label="有效性状态:">{{
          item.effectType
        }}</el-descriptions-item>

        <el-descriptions-item contentClassName="iconii">
          <span><i class="iconfont"> &#xe604;</i> </span>
          <span><i class="iconfont"> &#xefac;</i> </span>
          <span><i class="iconfont"> &#xe644;</i></span>
        </el-descriptions-item>

        <el-descriptions-item label="最新审核状态:" labelClassName="iconii">
          {{ item.reviewstate }}
        </el-descriptions-item>
        <el-descriptions-item label="数据获取:">{{
          item.dataget
        }}</el-descriptions-item>
        <el-descriptions-item label="共享类型:">{{
          item.shareType
        }}</el-descriptions-item>
        <el-descriptions-item label="共享方式:">
          {{ item.shareMethod }}</el-descriptions-item
        >
      </el-descriptions>
      <!-- 2222{{JSON.stringify(selectedOptions)}}  -->
      <!-- 3333{{selectedOptions}} -->
      <!-- 11111{{newTableData}} -->
    </div>
  </div>
</template>

<script>
import { tableData } from "./mockData";
import { mapState } from "vuex";

export default {
  data() {
    return {
      tableData: tableData,
      // selectedOptions1:JSON.stringify(selectedOptions),
    };
  },
  computed: {
    ...mapState(["selectedOptions"]),
    newTableData() {
      //  var isMatch=[];
      /* includes(this.selectedOptions.usestype),
这个selectedOptions.usestype可以是空的，但是不能不存在，
因此需要提前给selectedOptions里面设置属性，对应的值为空即可 */
      const filterData = this.tableData.filter((v) => {
        return (
          v.usestype.includes(this.selectedOptions.usestype) &&
          v.reviewstate.includes(this.selectedOptions.approvalState) &&
          v.effectType.includes(this.selectedOptions.effectState)
        );
      });
      return filterData;
    },
  },
};
</script>

<style scoped>
.iconii i {
  color: #4ea5ff;
  padding-right: 10px;
}
.iconii {
  color: #4ea5ff;
  /* padding-right: 10px; */
}

.codeSetDataset {
  display: flex;
}

.datalist {
  /* width: 90%; */
  font-size: 12px !important;
  /* border-bottom: 1px solid rgb(211, 207, 207); */
  /* padding: 10px 10px 0; */
}
.dataicon {
  margin-left: -18px;
}
.datalist .el-descriptions {
  box-sizing: border-box;
  font-size: 14px;
  color: #303133;
  border-bottom: 1px solid rgb(211, 207, 207);
  padding: 10px 38px 0;
}

div /deep/ .el-descriptions-item__label {
  margin-right: 3px;
  color: #c3c0c0;
}
.datalist table tbody tr td > .dataName {
  color: #4ea5ff;
}
.labelStyle {
  margin-right: 1px !important;
  color: #c3c0c0;
}
/* 这个样式生效了 */
div /deep/ .el-checkbox__input {
  margin-left: -35px;
}
</style>