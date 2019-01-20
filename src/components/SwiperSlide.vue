<!--
    Vue-Awesome-Swiper
    https://github.com/surmon-china/vue-awesome-swiper
-->
<template>
    <div class="swiper-slide-wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperSlides" :key="item.src">
                <a :href="item.href" target="_blank">
                    <img :src="item.src" :alt="item.title">
                </a>
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import "swiper/dist/css/swiper.css";
    import { swiper, swiperSlide } from "vue-awesome-swiper";

    export default {
        data() {
            return {
                swiperOption: {
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    }
                }
            };
        },
        props: {
            swiperSlides: {
                type: Array,
                required: true
            }
        },
        computed: {
            // swiper() {
            //     return this.$refs.mySwiper.swiper;
            // }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log("this is current swiper instance object", this.swiper);
            // this.swiper.slideTo(3, 1000, false);
        },
        components: {
            swiper,
            swiperSlide
        }
    };
</script>

<style lang="scss" scoped>
    .swiper-slide-wrapper {
        margin-bottom: 20px;
        width: 100%;
        height: 506px;
    }
    .swiper-slide {
        a {
            display: block;
            font-size: 0;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
