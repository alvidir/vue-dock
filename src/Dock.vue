<template>
    <div class="dock-container"
        :class="position?? DockPosition.LEFT">
        <div class="dock">
            <span>h</span>
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
        position: String as PropType<DockPosition>,
    },

    setup() {
        return {
            DockPosition,
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
    }

    &.bottom {
        @extend .top;
        bottom: 0;
    }

    &.right {
        @extend .left;
        right: 0;
    }

    .dock {
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