<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <music-list></music-list>


  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'
import swiperCom from '@/components/swiperCom.vue'
import iconList from "@/components/iconList.vue"
import musicList from "@/components/musicList.vue"

export default {
  name: 'HomeView',
  components: {
    topNav,
    swiperCom,
    iconList,
    musicList,
  },
  
}
</script>

<style lang="less" scoped>
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background-color: skyblue;
}


</style>
