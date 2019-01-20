<!--
    基础弹窗组件，通过 slot 插槽传入内容
    props: isShow
    events: 'close'
-->
<template>
    <div class="dialog-wrapper">
        <h1>dialog-wrapper</h1>
    </div>
</template>

<script>
    export default {
        props: {
            isShow: {
                type: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
