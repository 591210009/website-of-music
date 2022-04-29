<template>
  <div class="container">
    <el-container>
      <!-- 左侧边栏 -->
      <el-asider class="asider">
        <!-- 大菜单 -->
        <el-menu
          default-active="1-5-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <!-- 小菜单 -->
          <el-menu-item index="1">
            <span slot="title">歌单1</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">歌单2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">歌单3</span>
          </el-menu-item>
        </el-menu>
      </el-asider>
      <!-- 右侧中心 -->
      <el-main>
        <el-header>
          <el-row class="songListPhoto" height="300">
            <div class="img">
              <img src="./images/不屑.jpg" alt="歌单头像" />
            </div>
            <div class="describe">
              <ul>
                <li class="listName">我喜欢</li>
                <li>简介: 胖胖喜欢的音乐</li>
              </ul>
            </div>
          </el-row>
          <el-row class="songListOperation" gutter="10">
            <!-- 播放选项 -->
            <el-col :span="2">
              <el-button type="primary" round>播放</el-button>
            </el-col>
            <!-- 批量操作按钮 -->
            <el-col :span="3">
              <el-button type="primary" round>批量操作</el-button>
            </el-col>
            <!-- 搜索框 -->
            <el-col :span="9">
              <el-input
                v-model="searchInList"
                placeholder="搜索"
                suffix-icon="el-icon-search"
                clearable="true"
              ></el-input>
            </el-col>
            <el-col :span="5">
              <el-button type="primary" round>排序</el-button>
            </el-col>
          </el-row>
        </el-header>
        <el-footer>
          <!-- 歌单中的歌曲列表 -->
          <e-row>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="歌曲名"></el-table-column>
              <el-table-column prop="singer" label="歌手"></el-table-column>
              <el-table-column prop="time" label="时长"></el-table-column>
            </el-table>
          </e-row>
        </el-footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "PersonalCenter",
  data() {
    return {
      isCollapse: false,
      searchInList: "",
      tableData: [
        {
          name: "有何不可",
          singer: "许嵩",
          time: "03:59",
        },
        {
          name: "断桥残雪",
          singer: "许嵩",
          time: "03:47",
        },
        {
          name: "清明雨上",
          singer: "许嵩",
          time: "03:59",
        },
        {
          name: "有何不可",
          singer: "许嵩",
          time: "03:39",
        },
        {
          name: "有何不可",
          singer: "许嵩",
          time: "03:39",
        },
        {
          name: "有何不可",
          singer: "许嵩",
          time: "03:39",
        },
        {
          name: "有何不可",
          singer: "许嵩",
          time: "03:39",
        },
        {
          name: "有何不可",
          singer: "许嵩",
          time: "03:39",
        },
        {
          name: "有何不可",
          singer: "许嵩",
          time: "03:39",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
  },
};
</script>

<style scoped lang='less'>
.container .el-container {
  margin: 5px 0;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  box-shadow: 1px 1px gray;
  overflow: hidden;
}
.container el-asider {
  // background-color: #bfa;
  height: 825px;
  width: 200px;
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: rgba(0, 0, 0, 0.3);

  .el-menu-vertical-demo .el-menu-item {
    display: flex;
    justify-content: center;
  }
}
.el-main {
  width: auto;
  /* background-color: red; */
  .songListPhoto .img {
    float: left;
    img {
      width: 150px;
      border-radius: 10px;
    }
  }
  .describe {
    float: left;
    margin-left: 20px;
    & .listName {
      // background-color: red;
      line-height: 80px;
      font-size: 28px;
    }
  }
}
.el-table {
  overflow: auto;
}
</style>