<template>
    <div class="blank"></div>
    <div class="playController">
        <div class="left" @click="show = !show">
            <div class="cover-img">
                <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
            </div>
            <div class="content">
                <div class="title">{{ playlist[playCurrentIndex].name }}</div>
                <div class="tips">横滑可以切换上下首歌</div>
            </div>

        </div>

        <div class="right">
            <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-24gl-playCircle"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-zanting1"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>

        <play-music :play="play" :paused='paused' @back="show = !show" v-show="show"
            :playDetails="playlist[playCurrentIndex]"></play-music>
        <audio ref="audio"
            :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState, mapMutations, useStore } from 'vuex';
import playMusic from '@/components/playMusic.vue'

export default {
    data() {
        return {
            paused: true,
            show: false
        }
    },
    computed: {
        ...mapState(['playlist', 'playCurrentIndex'])
    },
    mounted() {
        console.log([this.$refs.audio]);
        console.log(this.playlist[this.playCurrentIndex], 11222);
        this.$store.dispatch('reqLyric', {id: this.playlist[this.playCurrentIndex].id })
    },
    updated() {
        this.$store.dispatch('reqLyric',{id: this.playlist[this.playCurrentIndex].id})
    },
    methods: {
        play: function () {
            console.log(this.$refs.audio.currentTime);
            if (this.$refs.audio.paused) {
                this.$refs.audio.play()
                this.paused = false
                this.updateTime()

            } else {
                this.$refs.audio.pause()
                this.paused = true
                clearInterval(this.$store.state.id)
            }
            console.log([this.$refs.audio]);

        },
        updateTime() {
            this.$store.state.id = setInterval(() => {
                this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
            }, 1000);
        }
    },
    components: {
        playMusic
    },
}

</script>

<style lang="less">
.blank {
    height: 1.2rem;
}

.playController {
    background-color: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;

    .left {
        display: flex;
        padding: 0 0.2rem;

        .cover-img {
            img {
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 0.4rem;
            }
        }

        .content {
            padding: 0 0.2rem;

            .title {
                width: 3.5rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .tips {
                padding-top: 0.1rem;
                font-size: 0.2rem;
                color: #999;

            }
        }
    }

    .right {
        .icon {
            width: 0.55rem;
            height: 0.55rem;
            margin: 0 0.2rem;
        }
    }


}
</style>