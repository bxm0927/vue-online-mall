<template>
    <div class="login-form">
        <div class="g-form">
            <div class="g-form-line">
                <span class="g-form-label">用户名：</span>
                <div class="g-form-input">
                    <input type="text" v-model="usernameModel" placeholder="请输入用户名">
                </div>
                <span class="g-form-error">{{ userErrors.errorText }}</span>
            </div>

            <div class="g-form-line">
                <span class="g-form-label">密码：</span>
                <div class="g-form-input">
                    <input type="password" v-model="passwordModel" placeholder="请输入密码">
                </div>
                <span class="g-form-error">{{ passwordErrors.errorText }}</span>
            </div>

            <div class="g-form-line">
                <div class="g-form-btn">
                    <a class="button" @click="onLogin">登录</a>
                </div>
            </div>

            <p class="g-form-error">{{ errorText }}</p>
        </div>
    </div>
</template>

<script>
    import { login } from "@/api";

    export default {
        data() {
            return {
                userFlag: false,
                usernameModel: "",

                passwordFlag: false,
                passwordModel: "",

                errorText: ""
            };
        },
        computed: {
            userErrors() {
                let status = true;
                let errorText = "";

                if (!/@/g.test(this.usernameModel)) {
                    status = false;
                    errorText = "不包含@";
                }

                if (!this.userFlag) {
                    errorText = "";
                    this.userFlag = true;
                }

                return {
                    status,
                    errorText
                };
            },
            passwordErrors() {
                let status = true;
                let errorText = "";

                if (!/^\w{1,6}$/g.test(this.passwordModel)) {
                    status = false;
                    errorText = "密码不是1-6位";
                }

                if (!this.passwordFlag) {
                    errorText = "";
                    this.passwordFlag = true;
                }

                return {
                    status,
                    errorText
                };
            }
        },
        methods: {
            onLogin() {
                if (!this.userErrors.status || !this.passwordErrors.status) {
                    this.errorText = "表单校验未通过，请重新输入！";
                    return;
                }

                login()
                    .then(res => this.$emit("has-login", res.data))
                    .catch(err => console.log("err: ", err));
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
