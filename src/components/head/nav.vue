<template>
  <div class="navMain">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/logo.png" />
          <h4 class="logo">智能数据运营平台</h4>
        </div></el-col
      >
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
                ><router-link to="/adddata">数据报送</router-link></el-menu-item
              >
              <el-menu-item index="2-2"
                ><router-link to="/adddata">资源注册</router-link></el-menu-item
              >
              <el-menu-item index="2-3"
                ><router-link to="/adddata">系统注册</router-link></el-menu-item
              >
              <el-menu-item index="2-3"
                ><router-link to="/adddata">数据需求</router-link></el-menu-item
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
              <el-menu-item index="3-1">数据超市</el-menu-item>
              <el-menu-item index="3-2">标签画像</el-menu-item>
              <el-menu-item index="3-2">数据检索</el-menu-item>
              <el-menu-item index="3-2">标签洞察</el-menu-item>
            </el-submenu>

            <el-menu-item index="4">
              <router-link to="lookdata">看数据 </router-link>
            </el-menu-item>
          </el-menu>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <div class="headRight">
            <span class="el-icon-s-custom"></span>
            <span>admin</span>
            <span class="el-icon-download"></span>
            <span>|</span>
            <span class="el-icon-s-unfold"></span>
          </div>
        </div>
      </el-col>
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
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  float: right;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 2px solid #409eff !important;
  border-bottom-color: #409eff !important;
  /* color: rgb(255, 208, 75); */
  color: #303133 !important;
}
.navMain {
  margin: auto;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-menu--horizontal a {
  text-decoration: none;
}
.el-col {
  border-radius: 4px;
}
.el-col img {
  width: 30px;
  height: 15px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple .headRight {
  /* margin-left: 60px; */
  display: flex;
  justify-content: flex-end;
  color: #e5e9f2;
  align-items: center;
  margin-right: 0px;
}
.headRight span {
  margin-right: 5px;
  height: 60px;
  line-height: 60px;
}

.bg-purple-light {
  background: #e5e9f2;
}
.logo {
  display: inline-block;
  color: #cbd1d7;
  margin-left: 5px;
  margin-right: 80px;
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
  line-height: 60px;
  background-color: #092643;
}
.row-bg {
  height: 60px;
  background-color: #092643;
}

element.style {
  background-color: #092643;
}
</style>