<template>
  <div class="selectmain">
    <div class="selectCenter">
      <!-- 业务系统（禁选） -->
      <div class="selectbox bussystem">
        <span class="">业务系统</span>
        <span class="space1">|</span>
        <el-select v-model="value" disabled placeholder="业务系统">
          <el-option
            v-for="item in bussystem"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 数据源 -->
      <div class="selectbox datasourse">
        <span class="">数据源</span>
        <span class="space1">|</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in datasouse"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 有效性状态 -->
      <div class="selectbox effectstate">
        <span class="">有效性状态</span>
        <span class="space1">|</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in effectState"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 最新审核状态 -->
      <div class="selectbox approvalstate">
        <span class="">最新审核状态</span>
        <span class="space1">|</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in approvalState"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 用途类型 -->
      <div class="selectbox usestype">
        <span class="">用途类型</span>
        <span class="space1">|</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in usestype"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 数据获取方式 -->
      <div class="selectbox dataGet">
        <span class="">数据获取方式</span>
        <span class="space1">|</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in dataget"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 数据更新周期 -->
      <div class="selectbox dataUpdate">
        <span class="">数据更新周期</span>
        <span class="space1">|</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in dataup"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 关键字 （用了【远程搜索】组件-->
      <div class="selectbox wordkeys">
        <span class="point">·</span>
        <span class="">有效性状态</span>
        <span class="space1">|</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in wordkeys"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="packup">收起</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   此处需要拿到【业务系统】子菜单的名称
      bussystem: [
        {
          value: "选项1",
          label: "此处应该传【业务系统】的值",
        },
      ],
      //   此处需要拿到【业务系统】子菜单下的值
      datasouse: [
        {
          value: "选项1",
          label: "已停用",
        },
        {},
      ],
      effectState: [
        {
          value: "选项1",
          label: "已停用",
        },
        {
          value: "选项2",
          label: "已启用",
        },
        {
          value: "选项3",
          label: "停用中",
        },
        {
          value: "选项4",
          label: "启用中",
        },
        {
          value: "选项5",
          label: "草稿",
        },
      ],
      approvalState: [
        {
          value: "选项1",
          label: "审核不通过",
        },
        {
          value: "选项2",
          label: "审核通过",
        },
        {
          value: "选项3",
          label: "审核中",
        },
        {
          value: "选项4",
          label: "待送审",
        },
      ],
      usestype: [
        {
          value: "选项1",
          label: "业务表",
        },
        {
          value: "选项2",
          label: "其他表",
        },
        {
          value: "选项3",
          label: "字典表",
        },
        {
          value: "选项4",
          label: "日志表",
        },
        {
          value: "选项5",
          label: "关联表",
        },
      ],
      dataget: [
        {
          value: "选项1",
          label: "自建系统录入",
        },
        {
          value: "选项2",
          label: "交易平台",
        },
        {
          value: "选项3",
          label: "爬虫爬取",
        },
        {
          value: "选项4",
          label: "公开数据库",
        },
        {
          value: "选项5",
          label: "网络采集",
        },
      ],
      dataup: [
        {
          value: "选项1",
          label: "每年",
        },
        {
          value: "选项2",
          label: "每月",
        },
        {
          value: "选项3",
          label: "每周",
        },
        {
          value: "选项4",
          label: "每日",
        },
      ],
      //   关键字 （用了【远程搜索】组件，的数据样式
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

<style>
.selectmain {
  display: flex;
}
.point{
    color:#64affe;
    font-size: 28px;
    font-weight: 700;
    padding: 2px 5px 0;
}
.selectCenter {
  box-sizing: border-box;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}
.packup {
  width: 10%;
}
.el-input__inner {
    font-size: 12px!important;
  border: none !important;
  padding-left: 0px !important;
  width: 97%;
  text-align: center;
}
.selectbox {
  border: solid 1px rgb(158, 155, 155);
  width: 33%;
  /* background-color: #fff!important; */
  /* padding-right: 5%; */
}
.el-select {
  width: 55%;
}
.selectbox .space1 {
  font-weight: 700;
  padding: 0 5px;
}
</style>