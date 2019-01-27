<template>
    <div id="app">
        <header class="app-header">
            <div class="app-header-inner">
                <router-link :to="{ path: '/' }" class="logo">
                    <img src="./assets/logo.png">
                </router-link>

                <div class="header-nav">
                    <ul class="nav-list">
                        <template v-if="username">
                            <li>{{ username }}</li>
                            <li class="nav-pile">|</li>
                            <li>退出</li>
                            <li class="nav-pile">|</li>
                        </template>

                        <template v-else>
                            <li @click="showDialog('isShowLogin')">登录</li>
                            <li class="nav-pile">|</li>
                            <li @click="showDialog('isShowReg')">注册</li>
                            <li class="nav-pile">|</li>
                        </template>

                        <li @click="showDialog('isShowAbout')">关于</li>
                    </ul>
                </div>
            </div>
        </header>

        <main class="app-content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </main>

        <footer class="app-footer">
            <p>© 2016 fishenal MIT</p>
        </footer>

        <base-dialog v-if="isShowLogin" @close="hideDialog('isShowLogin')">
            <login-form @has-login="hasLogin" @error="loginError"></login-form>
        </base-dialog>

        <base-dialog v-if="isShowReg" @close="hideDialog('isShowReg')">
            <h2>注册</h2>
        </base-dialog>

        <base-dialog v-if="isShowAbout" @close="hideDialog('isShowAbout')">
            <h2>关于我们</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam veniam enim, architecto sed quaerat consequatur id animi debitis provident dolore impedit assumenda earum, iusto voluptas velit rerum aliquam soluta voluptatem quas, quidem ipsum! Vero numquam consequatur ullam adipisci. In ad dolores dolorum quam adipisci consectetur aperiam eveniet, cupiditate tenetur veritatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam veniam enim, architecto sed quaerat consequatur id animi debitis provident dolore impedit assumenda earum, iusto voluptas velit rerum aliquam soluta voluptatem quas, quidem ipsum! Vero numquam consequatur ullam adipisci. In ad dolores dolorum quam adipisci consectetur aperiam eveniet, cupiditate tenetur veritatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam veniam enim, architecto sed quaerat consequatur id animi debitis provident dolore impedit assumenda earum, iusto voluptas velit rerum aliquam soluta voluptatem quas, quidem ipsum! Vero numquam consequatur ullam adipisci. In ad dolores dolorum quam adipisci consectetur aperiam eveniet, cupiditate tenetur veritatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam veniam enim, architecto sed quaerat consequatur id animi debitis provident dolore impedit assumenda earum, iusto voluptas velit rerum aliquam soluta voluptatem quas, quidem ipsum! Vero numquam consequatur ullam adipisci. In ad dolores dolorum quam adipisci consectetur aperiam eveniet, cupiditate tenetur veritatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam veniam enim, architecto sed quaerat consequatur id animi debitis provident dolore impedit assumenda earum, iusto voluptas velit rerum aliquam soluta voluptatem quas, quidem ipsum! Vero numquam consequatur ullam adipisci. In ad dolores dolorum quam adipisci consectetur aperiam eveniet, cupiditate tenetur veritatis?</p>
        </base-dialog>
    </div>
</template>

<script>
    import BaseDialog from "./components/base/BaseDialog.vue";
    import LoginForm from "./components/LoginForm.vue";

    export default {
        name: "App",
        data() {
            return {
                isShowAbout: false,
                isShowLogin: false,
                isShowReg: false,

                username: ""
            };
        },
        methods: {
            showDialog(param) {
                this[param] = true;
            },
            hideDialog(param) {
                this[param] = false;
            },
            hasLogin(data) {
                console.log("data: ", data);
                this.username = data.username;

                this.hideDialog('isShowLogin')
            },
            loginError() {}
        },
        components: {
            BaseDialog,
            LoginForm,
        }
    };
</script>

<style lang="scss">
    @import "@/assets/css/reset.scss";
    @import "@/assets/css/const.scss";
    @import "@/assets/css/common.scss";

    .app-header {
        width: 100%;
        height: 90px;
        line-height: 90px;
        color: #b2b2b2;
        background: #363636;

        .app-header-inner {
            width: $PAGE-WIDTH;
            margin: 0 auto;
            .logo {
                float: left;
                margin-top: 20px;
                display: flex;
                align-items: center;
                img {
                    width: 50px;
                }
            }
            .header-nav {
                float: right;
                ul {
                    overflow: hidden;
                }
                li {
                    cursor: pointer;
                    float: left;
                }
                .nav-pile {
                    padding: 0 10px;
                }
            }
        }
    }

    .app-content {
        width: $PAGE-WIDTH;
        margin: 0 auto;
    }

    .app-footer {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #e3e4e8;
    }
</style>
