<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
        <div class="topCenter">
            <span class="navBtn" @click="$router.push('/me')">我的</span>
            <span class="navBtn active">发现</span>
            <span class="navBtn">云村</span>
            <span class="navBtn">视频</span>
        </div>
        <div class="topRight" @click="$router.push('/searchview')">
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>

<style lang="less" scoped> .topNav {
     width: 7.5rem;
     height: 1rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 0.2rem;

     .icon {
        padding-top: 0.1rem;
         width: 0.5rem;
         height: 0.5rem;
     }

     .search {
         width: 0.45rem;
         height: 0.45rem;
     }

     .topCenter {
         width: 5rem;
         display: flex;
         justify-content: space-around;
         align-items: center;
         .active {
             font-weight: 900;
             font-size: 0.38rem;
             color: orangered;
         }
     }

 }
</style>