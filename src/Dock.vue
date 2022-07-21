<template>
    <div class="dock-container"
        :class="position">
        <div class="dock">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export enum DockPosition {
    TOP = "top",
    RIGHT = "right",
    BOTTOM = "bottom",
    LEFT = "left",
}

export default defineComponent({
    // eslint-disable-next-line
    name: "Dock",
    emits: [],

    props: {
        active: Boolean,
        position: {
            type: String as PropType<DockPosition>,
            default: DockPosition.LEFT,
        }
    },

    methods: {
    }
})
</script>

<style lang="scss">
@import "global.scss";

$dock-size: $fib-9 * 1px;
$ident: $fib-4 * 1px;
$tooltip-ident: 3*$ident;

.dock-container {
    
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    position: fixed;
    padding: $ident;
    z-index: 1;

    &.top {
        width: 100vw;
        height: $dock-size + 2*$ident;

        .dock {
            flex-direction: row;
            width: fit-content;
            max-width: 90vw;
            height: $dock-size;
        }

        .dock-item {
            height: 100%;
        }

        .tooltip-text {
            transform: translateY($tooltip-ident) !important;
        }
    }

    &.left {
        width: $dock-size + 2*$ident;
        height: 100vh;

        .dock {
            flex-direction: column;
            width: $dock-size;
            height: fit-content;
            max-height: 90vh;
        }

        .dock-item {
            width: 100%;
        }

        .tooltip-text {
            transform: translateX($tooltip-ident) !important;
        }
    }

    &.bottom {
        @extend .top;
        bottom: 0;

        .tooltip-text {
            transform: translateY(-$tooltip-ident) !important;
        }
    }

    &.right {
        @extend .left;
        right: 0;

        .tooltip-text {
            transform: translateX(-$tooltip-ident) !important;
        }
    }

    .dock {
        display: flex;
        margin-top: auto;
        margin-bottom: auto;
        border-radius: $fib-6 * 1px;
        background: var(--color-background-primary);
        border: 1px solid var(--color-scrollbar);
        box-sizing: border-box;
        padding: $ident;
    }
}
</style>