<template>
  <div class="container">
    <el-container>
      <el-aside width="250px">
        <el-menu :default-active="activeIndex" class="el-menu-demo">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="200px" class="header">
          <div>
            <el-link href="javascript:;" :underline="false">
              <img src="./images/飙升榜.jpg" alt="飙升榜" />
            </el-link>
          </div>
          <div class="infoAndOperation">
            <div class="name">
              <span>飙升榜</span>
            </div>
            <div class="operation">
              <el-button type="primary">播放</el-button>
            </div>
          </div>
        </el-header>
        <el-main>
          <el-header>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="name" label="歌曲名" width="180">
              </el-table-column>
              <el-table-column prop="singer" label="歌手" width="180">
              </el-table-column>
              <el-table-column prop="time" label="时长"> </el-table-column>
            </el-table>
          </el-header>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  data() {
    return {
      tableData: [
        {
          name: "清明雨上",
          singer: "许嵩",
          time: "03:05",
        },
        {
          name: "清明雨上",
          singer: "许嵩",
          time: "03:05",
        },
        {
          name: "清明雨上",
          singer: "许嵩",
          time: "03:05",
        },
      ],
    };
  },
};
</script>

<style scoped lang='less'>
.container > .el-container {
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 3px 0;
}

.el-container > .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 830px;
  overflow: auto;
  border-right: 2px solid rgba(0, 0, 0, 0.3);
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.el-container > .header {
  // background-color: #b3c0d1;
  // color: #333;
  display: flex;
  align-items: center;
  .infoAndOperation {
    margin-left: 15px;
    .name {
      // float: left;
      width: 100%;
      height: 100px;
      // background-color: red;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
    }
    .operation {
      width: 100%;
      height: 60px;
    }
  }
}

.el-main {
  // background-color: #e9eef3;

  // line-height: 160px;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}
</style>