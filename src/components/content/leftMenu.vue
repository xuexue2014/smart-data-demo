<template>
  <div id="leftmenuMain">
    <div class="leftmenu">
      <div class="title">业务系统</div>
      <hr />
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="renderContent"
      ></el-tree>
      <!-- <div class="test" v-on:click='getMenuName($event)'>测试</div> -->
      <button v-on:click="getMenuName($event)">点击测试</button>
      <h1>count:{{ this.$store.state.count }}</h1>
      <button @click="countIncrease">点击+</button>
    </div>
  </div>
</template>
<script>
import hub from "../../eventBus";

export default {
  data() {
    return {
      data: [
        {
          label: "3685",
          children: [
            {
              label: "interface(http://127.0.0.18",
            },
            {
              label: "kafka-华为FI",
            },
            {
              label: "开源kafka-admin",
            },
            {
              label: "内置文件中心",
            },
          ],
        },
        {
          label: "测试服务系统",
          children: [
            {
              label: "104",
            },
            {
              label: "guass227db",
            },
            {
              label: "mysql192",
            },
          ],
        },
        {
          label: "测试系统",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
      ],
      // 要想设置一个变量接受字符串（然后把这个值传递给兄弟组件，这么写咋错了，应该怎么写？
      menuname: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    countIncrease() {
      const v=33
      this.$store.commit("increment",v);
      console.log("qq" + this.$store.state.count);
      console.log("WW" + this.$store.state);
    },
    getMenuName(event) {
      console.log("123" + event.target.innerHTML);
      console.log(event.target.tagName);
      this.menuname = event.target.innerHTML;
    },
    // 兄弟组件传值--这个函简写怎么写
    handle: function () {
      hub.$emit("menuname", this.menuname);
    },

    handleNodeClick(data) {
      console.log(data);
    },
    renderContent(h, { node, data, store }) {
      console.log(node, data, store);
      return h("div", [
        h("el-icon", {
          props: { className: "el-icon-edit" },
        }),
        data.label,
      ]);
    },
  },
};
</script>

<style>
.el-menu-item a {
  color: #dbe2ef !important;
}
.el-menu-item.is-active {
  border-bottom-color: #409eff !important;
}
.title {
  text-align: left;
  padding: 0px, 10px;
  padding-left: 15px;
}
.leftmenu {
  height: 700px;
  border: solid 1px #4e5052;
}
</style>
