<template>
  <el-container>
    <el-header height="80px"><Header /></el-header>
    <el-container><router-view></router-view></el-container>
    <el-footer height="80px"><Play /></el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Play from "@/components/Play";
export default {
  name: "App",
  components: {
    Header,
    Play,
  },

  // mounted() {
  //   this.$router.push({ path: "ranking" });
  // },
};
</script>

<style scoped>
el-container {
  margin-top: 100px;
}
</style>
