<template>
    <div id="app">
        <header class="app-header">
            <div class="app-header-inner">
                <router-link :to="{path: '/'}" class="logo">
                    <img src="./assets/logo.png">
                </router-link>

                <div class="header-nav">
                    <ul class="nav-list">
                        <li @click="showDialog('isShowLogin')">登录</li>
                        <li class="nav-pile">|</li>
                        <li @click="showDialog('isShowReg')">注册</li>
                        <li class="nav-pile">|</li>
                        <li @click="showDialog('isShowAbout')">关于</li>
                    </ul>
                </div>
            </div>
        </header>

        <div class="app-content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <footer class="app-footer">
            <p>© 2016 fishenal MIT</p>
        </footer>
    </div>
</template>

<script>
    // import ThisDialog from './components/Dialog'
    // import LoginForm from './parts/LoginForm'

    export default {
        name: "App",
        data() {
            return {
                isShowAbout: false,
                isShowLogin: false,
                isShowReg: false
            };
        },
        methods: {
            showDialog(param) {
                this[param] = true;
            },
            hideDialog(param) {
                this[param] = false;
            }
        },
        components: {
            // ThisDialog,
            // LoginForm
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
