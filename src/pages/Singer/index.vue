<template>
  <div class="container">
    <el-container>
      <el-aside width="250px">
        <el-menu default-active="1-1" :collapse="isCollapse">
          <template slot="title">全部</template>
          <el-menu-item index="1-1">华语男歌手</el-menu-item>
          <el-menu-item index="1-2">华语女歌手</el-menu-item>
          <el-menu-item index="1-3">华语组合</el-menu-item>
          <el-menu-item index="1-4">日本男歌手</el-menu-item>
          <el-menu-item index="1-5">日本女歌手</el-menu-item>
          <el-menu-item index="1-6">日本组合</el-menu-item>
          <el-menu-item index="1-7">欧美男歌手</el-menu-item>
          <el-menu-item index="1-8">欧美女歌手</el-menu-item>
          <el-menu-item index="1-9">欧美组合</el-menu-item>
          <el-menu-item index="1-10">其他</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="singer">
          <el-link :underline="false">
            <div class="imgShell">
              <img src="./images/许嵩.webp" alt="" class="img" />
            </div>
            <div class="name">
              <p>许嵩</p>
            </div>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/汪苏泷.webp" alt="" class="img" />
            <p class="name">汪苏泷</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/任然.webp" alt="" class="img" />
            <p class="name">任然</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/等什么君.webp" alt="" class="img" />
            <p class="name">等什么君</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/陈奕迅.webp" alt="" class="img" />
            <p class="name">陈奕迅</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/Avril Lavigne.webp" alt="" class="img" />
            <p class="name">Avril Lavigne</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/J.Fla.webp" alt="" class="img" />
            <p class="name">J.Fla</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/薛之谦.webp" alt="" class="img" />
            <p class="name">薛之谦</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/Selena Gomez.webp" alt="" class="img" />
            <p class="name">Selena Gomez</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
        <div class="singer">
          <el-link :underline="false">
            <img src="./images/刘珂矣.webp" alt="" class="img" />
            <p class="name">刘珂矣</p>
          </el-link>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Singer",
  data() {
    return {
      imgUrl: "./images/陈奕迅.webp",
    };
  },
  // mounted() {
  //   console.log(this.$router);
  // },
};
</script>

<style scoped lang='less'>
.container .el-container {
  margin: 5px 0;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  box-shadow: 1px 1px gray;
  overflow: hidden;
  height: 825px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 900px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
  height: 900px;
  .singer {
    float: left;
    width: 200px;
    height: 200px;
    // background-color: #bfa;
    margin: 5px;
    .imgShell {
      width: 100%;
      float: left;
      height: 150px;
    }
    .img {
      width: 150px;
      border-radius: 50%;
    }
    .name {
      float: left;
      height: 50px;
      width: 100%;
      // background-color: red;
      font-size: 20px;
      line-height: 50px;
    }
  }
}
// 隐藏滚轮
.el-main::-webkit-scrollbar {
  width: 0 !important;
}
</style>