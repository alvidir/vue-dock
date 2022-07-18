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
$ident: $fib-4 * 1px;

.dock-container {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    position: fixed;
    padding: $ident;
    z-index: 1;

    &.vertical {
        width: $dock-size + 2*$ident;
        height: 100vh;

        .dock {
            flex-direction: column;
            width: $dock-size;
            height: fit-content;
            max-height: 90vh;
        }
    }

    &.horizontal {
        width: 100vw;
        height: $dock-size + 2*$ident;
        bottom: 0;

        .dock {
            flex-direction: row;
            width: fit-content;
            max-width: 90vw;
            height: $dock-size;
        }
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