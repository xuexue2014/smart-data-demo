<template>
  <div class="selectmain">
    <div class="selectCenter">
      <div
        class="selectbox"
        v-for="item in selectObj"
        :key="item.key"
        :class="item.key"
      >
        <!-- <span>{{111-Object.keys(selectObj)}}</span> -->
        <span class="point">{{ item.name }}</span>
        <!-- <span class="point">{{ item.data}}</span> -->

        <span class="space1">|</span>

        <el-select
          v-model="selectedValue[item.key]"
          clearable
          placeholder="请选择"
          :disabled="item.disabled"
          @change="handlechange"
        >

          <el-option
            v-for="it in item.data"
            :key="it && it.value"
            :label="it ? it.label : 'llll'"
            :value="it && (it.value || it.label)"
        
          >
          </el-option>
        </el-select>
      </div>
      <div class="selectbox wordkeys">
        <span class="point">关键字</span>
        <span class="space1">|</span>
        <el-select
          v-model="value"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入资源中文名、英文名"
          :remote-method="remoteMethod"
          :loading="loading"
        >
          <!-- 这个图标出不来 -->
          <span class="el-icon-search"></span>

          <!-- <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> -->
        </el-select>
      </div>
    </div>
    <div class="packup">收起</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { tableData } from './mockData'
export default {
  data() {
    const selectedItem =  this.$store.getters.selectedItem;
    const selectedDataSource =  this.$store.getters.selectedDataSource;

    return {

      //   关键字 （用了【远程搜索】组件，的数据样式
      options: [],
      tableData: tableData,
      selectedValue: {
     /*    为啥要用这种方式？？？  一个对象和一个值 与  得到什么？
        bussystem: selectedItem && selectedItem.value, */
        bussystem:  selectedItem.value,
        // datasouse: selectedDataSource.label,
        datasouse:"",
        effectState: selectedDataSource && selectedDataSource.value,
        approvalState: "",
        usestype: "",
        dataget: "",
        dataup: "",
      },
      value: [],
      list: [],
      loading: false,
      states: ["Alabama", "Alaska", "Arizona"],
    };
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
    this.selectObj[0].data = this.leftMenuData;
  },
  watch: {
    selectedItem(item){
      // debugger
      this.selectedValue.bussystem = item && item.value;
     }
  },
  computed: {
    ...mapState(["count", "leftMenuData"]),
    // ...mapMutation(['count'])
    ...mapGetters(['selectedItem','selectedDataSource']),
    selectObj(){

      // 取值给bussystemData
      const selectedItem =  this.$store.getters.selectedItem;
      const bussystemData = [];
      if(selectedItem){
        bussystemData.push(selectedItem);
      }

      // 取值给datasouseData
      const selectedDataSource =  this.$store.getters.selectedDataSource;
      const datasouseData = [];
      if(selectedDataSource){
        datasouseData.push(selectedDataSource);
      }
      console.log('-----',selectedItem)
      return  [
        { key: "bussystem", 
        name: "业务系统", 
        // disabled: true, 
        data: bussystemData,
        disabled: true
        }, 
        {
          key: "datasouse",
          name: "数据源",
          data: datasouseData,
        },
        {
          key: "effectState",
          name: "有效性状态",
          data: [
            {
              value: "已停用",
              label: "已停用",
            },
            {
              value: "已启用",
              label: "已启用",
            },
            {
              value: "停用中",
              label: "停用中",
            },
            {
              value: "启用中",
              label: "启用中",
            },
            {
              value: "草稿",
              label: "草稿",
            },
          ],
        },
        {
          key: "approvalState",
          name: "最新审核状态",
          data: [
            {
              value: "审核不通过",
              label: "审核不通过",
            },
            {
              value: "审核通过",
              label: "审核通过",
            },
            {
              value: "审核中",
              label: "审核中",
            },
            {
              value: "待送审",
              label: "待送审",
            },
          ],
        },
        {
          key: "usestype",
          name: "用途类型",
          data: [
            {
              value: "业务表",
              label: "业务表",
            },
            {
              value: "其他表",
              label: "其他表",
            },
            {
              value: "字典表",
              label: "字典表",
            },
            {
              value: "日志表",
              label: "日志表",
            },
            {
              value: "关联表",
              label: "关联表",
            },
          ],
        },
        {
          key: "dataget",
          name: "数据获取方式",
          data: [
            {
              value: "自建系统录入",
              label: "自建系统录入",
            },
            {
              value: "交易平台",
              label: "交易平台",
            },
            {
              value: "爬虫爬取",
              label: "爬虫爬取",
            },
            {
              value: "公开数据库",
              label: "公开数据库",
            },
            {
              value: "网络采集",
              label: "网络采集",
            },
          ],
        },
        {
          key: "dataup",
          name: "数据更新周期",
          data: [
            {
              value: "每年",
              label: "每年",
            },
            {
              value: "每月",
              label: "每月",
            },
            {
              value: "每周",
              label: "每周",
            },
            {
              value: "每日",
              label: "每日",
            },
          ],
        },
      ]
    }
   
  },
  methods: {
    handlechange() {
      console.log(this.selectedValue);
      this.$store.commit('setSelectedOptions',this.selectedValue)
      // console.log(selectedValue[item.key]);


    },
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
  // watch:{
  //   slectedItem:function(){
  //     this.selectObj[0].data= this.slectedItem;
  //   }
  // }
};
</script>

<style>
.selectmain {
  display: flex;
}
.point {
  position: relative;
}
.point::before {
  content: "";
  position: absolute;
  top: calc(50% - 2px);
  left: -10px;
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #64affe;
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
  font-size: 12px !important;
  border: none !important;
  padding-left: 0px !important;
  width: 97%;
  text-align: center;
  position: relative;
  top: 4px;
  height: 26px !important;
}

.el-input__prefix,
.el-input__suffix {
  top: 7px !important;
}
.selectbox {
  box-sizing: border-box;
  border: solid 1px rgb(211, 208, 208);
  width: 28%;
  border-radius: 5px;
  height: 30px;
  /* padding: 5px 0; */
  text-align: left;
  margin: 5px 0px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.el-select .el-input .el-input__inner {
  top: 0;
}
</style>
