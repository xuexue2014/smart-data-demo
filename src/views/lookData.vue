<template>
  <div class="lookData">
    <div class="box lookDataLeft">
      
      <div class="content leftTop">
   <bar></bar>
      </div>
      <div class="content leftBottom"></div>
    </div>
    <div class="box lookDataCenter">22
      <div class="center centerTop"></div>
      <div class="center centerBottom"></div>
    </div>
    <div class=" box lookDataRight">33
      <div class="content rightTop"></div>
      <div class="content rightBottom"></div>
    </div>
  </div>
</template>

<script>
import bar from '../components/echarts/bar.vue'
export default {
  components:{
    bar,
    }
};
</script>

<style scoped>


.lookData{
  background: url(../assets/bcimg.jpg) no-repeat;
  /* min-height: 600px; */
  height: 100%;
   margin-top: -20px;
  display: flex;
  
}
.box{
  margin: 0 10px;

}
.content{
    border: brown 1px solid;
    height: 50%;
    margin-bottom: 20px;
}
.lookDataCenter{
    position: relative;

}
.lookDataCenter::after{
  content: '';
  border-right: #45e4db 1px solid;
  border-bottom: 1px solid #45e4db;
  height: 20px;
  width: 20px;
  right: 0;
  bottom: 30px;
  position: absolute;
}
.lookDataCenter::before{
  content: '';
  border-top: #45e4db 1px solid;
  border-left: 1px solid #45e4db;
  height: 20px;
  width: 20px;
  top: 30px;
  left: 0;
  position: absolute;
}

.lookDataLeft{
  flex:1;
}
.leftTop .leftBottom{
height: 300px;
}
.lookDataCenter{
  flex:2;
  
}
.lookDataRight{
  flex:1;
}
</style>
