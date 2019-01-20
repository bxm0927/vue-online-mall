<template>
    <div class="index-page">
        <section class="left-nav">
            <div class="all-product">
                <h2 class="title">全部产品</h2>

                <div class="product" v-for="product in productList" :key="product.title">
                    <h3 class="sub-title">{{ product.title}}</h3>
                    <ul>
                        <li v-for="item in product.list" :key="item.name">
                            <a :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="lastest-news">
                <h2 class="title">最新消息</h2>
                <ul>
                    <li v-for="item in newsList" :key="item.id">
                        <a :href="item.url">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </section>

        <section class="right-entry">
            <swiper-slide :swiper-slides="slideList"></swiper-slide>

            <ul class="project-list">
                <li v-for="item in boardList" :key="item.id">
                    <img :src="item.img" :alt="item.title">
                    <div class="right-info">
                        <h3>{{ item.title }}</h3>
                        <p class="desc">{{ item.description }}</p>
                        <router-link class="button" :to="{ path: '/detail/' + item.toKey }">立即购买</router-link>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import SwiperSlide from "../components/SwiperSlide";
    import { getProductList, getNewsList, getSlideList, getBoardList } from "@/api";

    export default {
        data() {
            return {
                productList: [],
                newsList: [],
                slideList: [],
                boardList: []
            };
        },
        created() {
            getProductList().then(res => (this.productList = res.data));
            getNewsList().then(res => (this.newsList = res.data));
            getSlideList().then(res => (this.slideList = res.data));
            getBoardList().then(res => (this.boardList = res.data));
        },
        components: {
            SwiperSlide
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/css/mixin.scss";

    .index-page {
        width: 1200px;
        margin: 20px auto;
        overflow: hidden;
    }

    .left-nav {
        float: left;
        width: 300px;
        text-align: left;
        .all-product,
        .lastest-news {
            margin: 0 15px 15px 0;
            background: #fff;
            box-shadow: 0 0 1px #ddd;
            .sub-title {
                padding: 0 15px 5px 15px;
                font-weight: bold;
                color: #222;
            }
            ul {
                padding: 10px 15px;
                li {
                    padding: 5px;
                    @include ellipsis();
                    a {
                        color: #222;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
            .hot-tag {
                background: red;
                color: #fff;
            }
        }
        h2.title {
            margin-bottom: 20px;
            padding: 10px 15px;
            background: #4fc08d;
            color: #fff;
        }
    }

    .right-entry {
        float: left;
        width: 900px;
        .project-list {
            overflow: hidden;
            li {
                float: left;
                box-sizing: border-box;
                padding: 20px;
                width: 50%;
                background-color: #fff;
                box-shadow: 0 0 1px #ddd;
            }
            img {
                float: left;
                margin-right: 30px;
            }
            .right-info {
                h3 {
                    margin-bottom: 15px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #000;
                }
                .button {
                    margin-top: 20px;
                }
            }
        }
    }
</style>
