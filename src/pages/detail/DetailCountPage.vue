<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据统计</h2>
            <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品类型：</div>
                <div class="sales-board-line-right">
                    <base-chooser :chooses="buyTypes" @on-choose="salesSelecteOnChoose"></base-chooser>
                </div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">产品版本：</div>
                <div class="sales-board-line-right">
                    <base-chooser-mult
                        :chooses="versionList"
                        @on-choose="onParamChange('versions', $event)"
                    ></base-chooser-mult>
                </div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">购买数量：</div>
                <div class="sales-board-line-right">
                    <base-counter :max="999" @on-change="onParamChange('buyNum', $event)"></base-counter>
                </div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">适用地区：</div>
                <div class="sales-board-line-right">
                    <base-selecte :selections="districts" @on-change="districtsSelecteOnChange"></base-selecte>
                </div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">有效时间：</div>
                <div class="sales-board-line-right">半年</div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">总价：</div>
                <div class="sales-board-line-right">500 元</div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">库存：</div>
                <div class="sales-board-line-right">{{ $store.state.inventory }} 件</div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">&nbsp;</div>
                <div class="sales-board-line-right">
                    <div class="button">立即购买</div>
                </div>
            </div>
        </div>

        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

            <table class="sales-board-table">
                <tbody>
                    <tr class="ui-table-row" v-for="item in salesDes" :key="item.text">
                        <td class="col-first">
                            <div class="intro-pic">
                                <label>{{ item.name }}</label>
                            </div>
                        </td>

                        <td v-for="text in item.items" :key="text">
                            <div class="intro-pic">
                                <label>{{ text }}</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import BaseSelecte from "../../components/base/BaseSelecte.vue";
    import BaseChooser from "../../components/base/BaseChooser.vue";
    import BaseChooserMult from "../../components/base/BaseChooserMult.vue";
    import BaseCounter from "../../components/base/BaseCounter.vue";

    export default {
        data() {
            return {
                salesDes: [
                    {
                        name: "安全安保",
                        items: [
                            "办公文教",
                            "彩票",
                            "车辆物流",
                            "成人用品",
                            "出版传媒",
                            "电脑硬件"
                        ]
                    },
                    {
                        name: "电子电工",
                        items: [
                            "房地产建筑装修",
                            "分类平台",
                            "服装鞋帽",
                            "箱包饰品",
                            "化工原料制品",
                            "机械设备"
                        ]
                    },
                    {
                        name: "家庭日用品",
                        items: [
                            "家用电器",
                            "教育培训",
                            "节能环保",
                            "金融服务",
                            "礼品",
                            "旅游住宿"
                        ]
                    },
                    {
                        name: "美容化妆",
                        items: [
                            "母婴护理",
                            "农林牧渔",
                            "软件",
                            "商务服务",
                            "生活服务",
                            "食品保健品"
                        ]
                    },
                    {
                        name: "手机数码",
                        items: [
                            "通讯服务设备",
                            "网络服务",
                            "医疗服务",
                            "游戏",
                            "运动休闲娱乐",
                            "招商加盟"
                        ]
                    }
                ],
                buyTypes: [
                    {
                        label: "红色版",
                        value: 0
                    },
                    {
                        label: "绿色版",
                        value: 1
                    },
                    {
                        label: "紫色版",
                        value: 2
                    }
                ],
                districts: [
                    {
                        label: "北京",
                        value: 0
                    },
                    {
                        label: "上海",
                        value: 1
                    },
                    {
                        label: "广州",
                        value: 2
                    },
                    {
                        label: "天津",
                        value: 3
                    },
                    {
                        label: "武汉",
                        value: 4
                    },
                    {
                        label: "重庆",
                        value: 5
                    }
                ],
                versionList: [
                    {
                        label: "客户版",
                        value: 0
                    },
                    {
                        label: "代理商版",
                        value: 1
                    },
                    {
                        label: "专家版",
                        value: 2
                    }
                ]
            };
        },
        created() {},
        mounted() {},
        methods: {
            districtsSelecteOnChange(data) {
                console.log("data: ", data);
            },
            salesSelecteOnChoose(data) {
                console.log("data: ", data);
            },
            onParamChange(attr, val) {
                console.log("attr: ", attr);
                console.log("val: ", val);
            }
        },
        components: {
            BaseSelecte,
            BaseChooser,
            BaseChooserMult,
            BaseCounter
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
