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
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>

                    <li v-for="item in newsList" :key="item.title">
                        <a :href="item.url">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </section>

        <section class="right-entry">
            <!-- <slide-show :slides="slides" :inv="invTime"></slide-show> -->
            <div class="slide"></div>

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
    // import slideShow from '../components/slideShow'
    import { getUserInfo } from "@/api";

    export default {
        data() {
            return {
                newsList: [],
                productList: [
                    {
                        title: "PC产品",
                        list: [
                            {
                                name: "数据统计",
                                url: "http://starcraft.com",
                                hot: false
                            },
                            {
                                name: "数据预测",
                                url: "http://warcraft.com",
                                hot: true
                            },
                            {
                                name: "流量分析",
                                url: "http://overwatch.com",
                                hot: false
                            },
                            {
                                name: "广告发布",
                                url: "http://hearstone.com",
                                hot: false
                            }
                        ]
                    },
                    {
                        title: "手机应用类",
                        list: [
                            {
                                name: "91助手",
                                url: "http://weixin.com",
                                hot: false
                            },
                            {
                                name: "产品助手",
                                url: "http://twitter.com",
                                hot: true
                            },
                            {
                                name: "智能地图",
                                url: "http://maps.com",
                                hot: false
                            },
                            {
                                name: "团队语音",
                                url: "http://phone.com",
                                hot: false
                            }
                        ]
                    }
                ],
                invTime: 2000,
                slides: [
                    {
                        src: require("../assets/slideShow/pic1.jpg"),
                        title: "xxx1",
                        href: "detail/analysis"
                    },
                    {
                        src: require("../assets/slideShow/pic2.jpg"),
                        title: "xxx2",
                        href: "detail/count"
                    },
                    {
                        src: require("../assets/slideShow/pic3.jpg"),
                        title: "xxx3",
                        href: "http://xxx.xxx.com"
                    },
                    {
                        src: require("../assets/slideShow/pic4.jpg"),
                        title: "xxx4",
                        href: "detail/forecast"
                    }
                ],
                boardList: [
                    {
                        title: "开放产品",
                        description: "开放产品是一款开放产品",
                        id: "car",
                        toKey: "analysis",
                        saleout: false,
                        img: require("../assets/images/1.png")
                    },
                    {
                        title: "品牌营销",
                        description: "品牌营销帮助你的产品更好地找到定位",
                        id: "earth",
                        toKey: "count",
                        saleout: false,
                        img: require("../assets/images/2.png")
                    },
                    {
                        title: "使命必达",
                        description: "使命必达快速迭代永远保持最前端的速度",
                        id: "loud",
                        toKey: "forecast",
                        saleout: true,
                        img: require("../assets/images/3.png")
                    },
                    {
                        title: "勇攀高峰",
                        description: "帮你勇闯高峰，到达事业的顶峰",
                        id: "hill",
                        toKey: "publish",
                        saleout: false,
                        img: require("../assets/images/4.png")
                    }
                ]
            };
        },
        created() {
            getUserInfo(100).then(res => {
                console.log("res: ", res);
            });
        },
        components: {
            // slideShow
        }
    };
</script>

<style lang="scss" scoped>
    .index-page {
        width: 1200px;
        margin: 20px auto;
        overflow: hidden;
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
                }
                li {
                    padding: 5px;
                }
                a {
                    color: #222;
                    &:hover {
                        text-decoration: underline;
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
            .slide {
                margin-bottom: 20px;
                width: 100%;
                height: 500px;
                background-color: #4fc08d;
            }
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
    }
</style>
