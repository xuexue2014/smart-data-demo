<template>
  <div id="app">
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :render-content="renderContent"
    ></el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
            },
            {
              label: "二级 1-1",
            },
            {
              label: "二级 1-1",
            },
            {
              label: "二级 1-1",
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
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
</style>