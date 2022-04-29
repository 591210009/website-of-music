import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import PersonalCenter from '@/pages/PersonalCenter'
import Ranking from '@/pages/Ranking'
import Singer from '@/pages/Singer'
import SongList from '@/pages/SongList'

export default new VueRouter({
  routes:[
    {
      path:'/personalcenter',
      component:PersonalCenter
    },
    {
      path:'/ranking',
      component:Ranking
    },
    {
      path:'/singer',
      component:Singer,
    },
    {
      path:'/songList',
      component:SongList
    },
    {
      path:'*',
      redirect:'/personalcenter'
    }
  ]
})