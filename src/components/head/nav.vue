<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <router-link to="/homepage">首页 </router-link>
            </el-menu-item>

            <el-submenu index="2">
              <template slot="title">录数据</template>

              <el-menu-item index="2-1"
                ><router-link to="/adddata">选项1</router-link></el-menu-item
              >
              <el-menu-item index="2-2"
                ><router-link to="/adddata">选项2</router-link></el-menu-item
              >
              <el-menu-item index="2-3"
                ><router-link to="/adddata">选项3</router-link></el-menu-item
              >
              <!-- <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu> -->
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <router-link to="usedata">用数据 </router-link></template
              >
              <el-menu-item index="3-1"
                >选项1</el-menu-item
              >
              <el-menu-item index="3-2"
                >选项1</el-menu-item
              >
            </el-submenu>

            <el-menu-item index="4">
              <router-link to="lookdata">看数据 </router-link>
            </el-menu-item>
          </el-menu>
        </div></el-col
      >
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /* background: #99a9bf; */
}
.bg-purple {
  /* background: #d3dce6; */
}
.bg-purple-light {
  /* background: #e5e9f2; */
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  height: 60px;
  background-color: #0d2e48;
}
</style>