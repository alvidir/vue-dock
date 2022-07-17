<template>
    
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export enum DockPosition {
    LEFT = "left",
    BOTTOM = "bottom",
}

export default defineComponent({
    name: "Dock",
    emits: [],

    props: {
        active: Boolean,
        position: String as PropType<DockPosition>,
    },

    methods: {
    }
})
</script>

<style lang="scss">
@import "global.scss";


</style>