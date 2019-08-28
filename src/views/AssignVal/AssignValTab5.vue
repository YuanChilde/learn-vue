<template>
    <div class="container">
        <header>
            <!--:user是插槽Prop-->
            <slot name="header" :user="user"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: "我是子姓名"
                }
            };
        }
    }
</script>

<style scoped>

</style>
