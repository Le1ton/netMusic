<template>
    <div class="listView">
        <listview-top :playlist="state.playlist"></listview-top>

        <play-list :playlist="state.playlist"></play-list>
    </div>

</template>

<script>
import listviewTop from "@/components/listviewTop.vue"
import playList from "@/components/playList.vue"
import { getPlayListDetails } from "@/api/index";
import { onMounted, reactive } from "vue";
import {useRoute } from "vue-router"
import store from "@/store/index.js"

export default {
    setup() {
        // 获取路由数据
        const route = useRoute()
        let state = reactive({
            list: [],
            playlist: {
                creator: {},
                tracks: []
            }
        })
        onMounted(async () => {
            let id = route.query.id;
            // console.log(id);
            let result = await getPlayListDetails(id);
            state.playlist = result.data.playlist
            store.commit('setPlaylist', state.playlist.tracks)
            // console.log(state.playlist.tracks);
            // console.log(result);
        })
        return {
            state
        }

    },
    components: {
        listviewTop,
        playList
    }
}

</script>