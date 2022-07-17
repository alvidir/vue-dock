<template>
    <div class="dock-container"
        :class="orientation?? 'horizontal'">
        <div class="dock">
            <span>h</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export enum DockOrientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal",
}

export default defineComponent({
    // eslint-disable-next-line
    name: "Dock",
    emits: [],

    props: {
        active: Boolean,
        orientation: String as PropType<DockOrientation>,
    },

    methods: {
    }
})
</script>

<style lang="scss">
@import "global.scss";

$dock-size: $fib-9 * 1px;
$inner-ident: $fib-4 * 1px;
$ident: $fib-6 * 1px;

.absolute.dock-container {
    position: fixed;

    &.vertical {
        height: 100vh !important;
    }

    &.horizontal {
        width: 100vw !important;
    }
}

.dock-container {
    display: flex;
    justify-content: center;
    z-index: 1;

    &.vertical {
        width: $dock-size + $ident;
        height: fit-content;
        max-height: 100vh;

        .dock {
            flex-direction: column;
            width: $dock-size - 2*$inner-ident;
            height: fit-content;
            max-height: 90vh;
        }
    }

    &.horizontal {
        width: fit-content;
        max-width: 100vw;
        height: $dock-size + $ident;
        bottom: 0;

        .dock {
            flex-direction: row;
            width: fit-content;
            max-width: 90vw;
            height: $dock-size - 2*$inner-ident;
        }
    }

    .dock {
        margin-top: auto;
        margin-bottom: auto;
        border-radius: $fib-6 * 1px;
        background: var(--color-background-primary);
        border: 1px solid var(--color-scrollbar);
        padding: $inner-ident;
    }
}
</style>