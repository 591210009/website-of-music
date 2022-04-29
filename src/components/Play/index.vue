<template>
  <div class="container">
    <el-row class="content" type="flex">
      <!-- 歌曲图片图标 -->
      <el-col :span="2" class="img">
        <el-link><img src="./images/portrait.jpg" /></el-link>
      </el-col>
      <!-- 歌曲名字和进度条 -->
      <el-col :span="12">
        <el-container class="songNameAndProgressBar">
          <el-header height="80px">
            <el-row>
              <el-col :span="18">
                <div class="link">
                  <el-link
                    href="javascript:;"
                    :underline="false"
                    class="elLink"
                  >
                    <span> 月球下的人 - 任然</span>
                  </el-link>
                </div>
              </el-col>
              <el-col :span="4" :offset="2" class="play-time">
                <span>00:17/02:53</span>
              </el-col>
            </el-row>
            <div class="progress-bar">
              <div class="lower-bar">
                <div class="forward-bar">
                  <div class="btn"></div>
                </div>
              </div>
            </div>
          </el-header>
        </el-container>
      </el-col>
      <!-- 上一首 播放|暂停 下一首按钮 -->
      <el-col :span="3" class="play-button">
        <el-button type="primary" circle plain>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-047caozuo_shangyishou"></use>
          </svg>
        </el-button>
        <el-button type="primary" circle plain>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
        </el-button>
        <el-button type="primary" circle plain>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-048caozuo_xiayishou"></use>
          </svg>
        </el-button>
      </el-col>
      <!-- 音量 -->
      <el-col :span="5" class="volume">
        <el-container>
          <el-header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gl-volumeMiddle"></use>
            </svg>
            <div class="progress-bar">
              <div class="lower-bar">
                <div class="forward-bar">
                  <div class="btn"></div>
                </div>
              </div>
            </div>
          </el-header>
        </el-container>
      </el-col>
      <!-- 播放模式 和菜单 -->
      <el-col :span="2" class="menu">
        <el-row :gutter="10">
          <el-col :span="12">
            <el-link :underline="false">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang-suijibofang"></use>
              </svg>
            </el-link>
          </el-col>
          <el-col :span="12">
            <el-link :underline="false">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caidan"></use>
              </svg>
            </el-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicName: "",
      progressBar: 0,
    };
  },
  computed: {},
};
</script>

<style scoped lang='less'>
@width: 1140px;
@height: 80px;

.container {
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}
.icon {
  color: #34e7e4;
}
.content {
  width: @width;
  height: @height;
  // background-color: greenyellow;
  padding: 0 10px;
}
.img > .el-link img {
  // background-color: red;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
// 播放进度条开始
.songNameAndProgressBar {
  width: @width*0.5;
  height: @height;
  // margin-right: 10px;
  // background-color: red;
  // display: flex;

  .el-header {
    padding: 0;
  }

  .link {
    width: 100%;
    height: @height*0.5;
    // background-color: #bfa;

    position: relative;
    .elLink {
      position: absolute;
      top: 10px;
      font-size: 16px;
      line-height: 16px;
      &:hover {
        text-decoration: none;
        color: yellow;
      }
    }
  }

  // 播放时间
  .play-time {
    position: relative;
    span {
      position: absolute;
      top: 10px;
    }
  }
}
.progress-bar {
  width: 100%;
  height: @height*0.5;
  // background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  .lower-bar {
    width: 100%;
    height: 16px;
    background-color: #333;
    border-radius: 16px;
    .forward-bar {
      width: 100px;
      height: 16px;
      background: #ccc;
      border-radius: 16px;
    }
  }
}
.forward-bar .btn {
  width: 16px;
  height: 16px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  left: 84px;
}
// 播放进度条结束

// 上一首下一首播放按钮开始
.play-button {
  margin-left: 30px;
  // background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 17px;
  }
}
// 上一首下一首播放按钮结束

// 音量设置开始
.volume {
  @volumeHeight: 5px;
  position: relative;
  .el-header {
    padding: 5px;
  }

  padding-left: 20px;
  .icon {
    font-size: 26px;
    height: @height;
    float: left;
    position: absolute;
    top: 2px;
  }
  .progress-bar {
    width: 69%;
    height: @volumeHeight;
    // background-color: #fff;
    position: absolute;
    display: flex;
    align-items: center;
    left: 50px;
    top: 39px;
    .lower-bar {
      width: 100%;
      height: @volumeHeight;
      background-color: #333;
      border-radius: @volumeHeight;
      .forward-bar {
        width: 86px;
        height: @volumeHeight;
        background: #ccc;
        border-radius: @volumeHeight;
      }
    }
  }
  .forward-bar .btn {
    width: @volumeHeight;
    height: @volumeHeight;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    // left: 84px;
  }
}
// 音量设置结束

// 循环模式和菜单选项开始
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 26px;
  }
}
// 循环模式和菜单选项结束
</style>
