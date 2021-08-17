<template>
  <div id="app">
    <div class="leftmenu">
      <div class="title">业务系统</div>
      <hr />
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="renderContent"
      ></el-tree>
    </div>
  </div>
</template>
<script>
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
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
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
