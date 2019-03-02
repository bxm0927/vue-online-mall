<template>
    <div class="dialog-wrapper">
        <div class="dialog-cover" @click="close"></div>

        <div class="dialog-content">
            <span class="dialog-close" @click="close">x</span>
            <slot>empty</slot>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            close() {
                this.$emit("close");
            }
        }
    };
</script>

<style lang="scss" scoped>
    .dialog-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        .dialog-cover {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.3;
        }
        .dialog-content {
            position: fixed;
            top: 20%;
            left: 50%;
            margin-left: -25%;
            padding: 2%;
            width: 50%;
            max-height: 50%;
            line-height: 1.6;
            border: 2px solid #464068;
            background: #fff;
            overflow: auto;
        }
        .dialog-close {
            position: absolute;
            right: 5px;
            top: 5px;
            width: 20px;
            height: 20px;
            text-align: center;
            cursor: pointer;
            &:hover {
                color: #4fc08d;
            }
        }
    }
</style>
