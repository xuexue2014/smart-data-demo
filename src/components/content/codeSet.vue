<template>
  <div class="codeset">
    <div class="report">
      <label>
        本页面为您展示当前业务系统资源下的所有代码集，截止当前，该业务系统资源下
        总共已注册
        <span class="orange">{{ 0 }}</span>
        个代码集，其中有
        <span class="green">{{ 0 }}</span>
        个代码集已对标，剩余
        <span class="red">{{ 0 }}</span
        >个未对标 个未对标
      </label>
    </div>
    <div class="selectbox wordkeys">
      <span class="point">·</span>
      <span class="">代码集名称</span>
      <span class="space1">|</span>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
};
</script>

<style scoped>
.report {
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #dbe2ef;
  height: 68px;
  /* width: 605px; */
  line-height: 34px;
  padding: 0 5px;
}
.report label {
  padding: 0, 5px;
  /* height: 50px; */
  width: 100%;
}
.el-select {
  top: 4px;
}
.orange {
  color: #f7b138;
}
.blue {
  color: #6bb1fb;
}
.red {
  color: #cc2b33;
}
</style>
