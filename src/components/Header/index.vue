<template>
  <div class="container">
    <el-row class="content">
      <el-col :span="5" class="logo">
        <el-link href="javascript" :underline="false">
          <img src="./images/logo.png" alt="Logo" />
          <span>Dream Music</span>
        </el-link>
      </el-col>
      <el-col :span="2" class="link">
        <el-link href="javascript" :underline="false"
          ><span>个人中心</span></el-link
        >
      </el-col>
      <el-col :span="1" align="middle" class="link">
        <router-link to="/songList">
          <el-link href="javascript" :underline="false">
            <span>歌单</span>
          </el-link>
        </router-link>
      </el-col>
      <el-col :span="1" class="link">
        <router-link to="/singer">
          <el-link :underline="false"><span>歌手</span></el-link>
        </router-link>
      </el-col>
      <el-col :span="2" class="link">
        <router-link to="/ranking">
          <el-link :underline="false">
            <span>排行榜</span>
          </el-link>
        </router-link>
      </el-col>
      <el-col :span="10" class="input-content">
        <div class="input">
          <input type="text" placeholder="歌曲名/歌手" />
          <el-button icon="el-icon-search" circle class="button"></el-button>
        </div>
        <el-button
          type="primary"
          icon="el-icon-user-solid"
          circle
          class="userIcon"
        ></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
};
</script>

<style scoped lang='less'>
/* .content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
} */
@height: 80px;
.logo {
  height: @height;
  display: flex;
  text-align: center;
  img {
    width: 80px;
    float: left;
    margin-right: 5px;
  }
  span {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    line-height: @height;
  }
}

.link {
  line-height: @height;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  float: left;
  span {
    display: block;
    line-height: @height;
    font-size: 16px;
  }
}

.userIcon {
  float: right;
}
/* 搜索框开始 */
.input-content {
  width: 310px;
  height: @height;
  padding-top: 20px;
  float: right;
}
.userIcon {
  float: left;
  margin: 0 5px;
}
.input {
  height: 40px;
  width: 236px;
  border-radius: 30px;
  padding-left: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
  float: left;
}
input {
  width: 192px;
  height: 100%;
  float: left;
  border: none;
  outline: none;
  font-size: 16px;
}
.button {
  border: none;
  font-size: 16px;
}

/* 搜索框结束 */
</style>
