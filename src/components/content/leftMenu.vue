<template>
  <div id="leftmenuMain">
    <div class="leftmenu">
      <div class="title">业务系统</div>
      <hr/>
      <el-tree
        :data="leftMenuData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="renderContent"
        :current-node-key="selectedKey"
       
        node-key="value"
      ></el-tree>
    <!-- highlightCurrent="true" -->
    </div>
  </div>
</template>
<script>

import { mapState} from 'vuex'

export default {
  data() {
    return {
      // 要想设置一个变量接受字符串（然后把这个值传递给兄弟组件，这么写咋错了，应该怎么写？
      menuname: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
  
    // getMenuName(event) {
    //   console.log("123" + event.target.innerHTML);
    //   console.log(event.target.tagName);
    //   this.menuname = event.target.innerHTML;
    // },
    
   
    handleNodeClick(data,node,item) {
      console.log('11',data,node,item);
    
      this.$store.commit('setValue', {
        name: 'selectedKey',
        value: data.value
      })
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
  computed:{
    ...mapState(['leftMenuData','selectedKey']),
    // ...mapMutation(['count'])
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
