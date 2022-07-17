<template>
    <h1>hello world</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "DockItem",
    emits: [],

    props: {
        selected: Boolean,
    },

    methods: {
    }
})
</script>

<style lang="scss">
@import "global.scss";


</style>