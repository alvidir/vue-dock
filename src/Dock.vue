<template>
    <div class="dock-container"
        :class="dockContainerClass">
        <div class="dock">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, provide, computed } from "vue"
import { Orientation } from "./DockSeparator.vue"

export enum Position {
    TOP = "top",
    RIGHT = "right",
    BOTTOM = "bottom",
    LEFT = "left",
}

export const ReversePosition: {[key: string]: Position} = {
    [Position.TOP]: Position.BOTTOM,
    [Position.RIGHT]: Position.LEFT,
    [Position.BOTTOM]: Position.TOP,
    [Position.LEFT]: Position.RIGHT,
}

const PositionOrientation: {[key: string]: Orientation} = {
    [Position.TOP]: Orientation.HORIZONTAL,
    [Position.RIGHT]: Orientation.VERTICAL,
    [Position.BOTTOM]: Orientation.HORIZONTAL,
    [Position.LEFT]: Orientation.VERTICAL,
}

export const SETTINGS_KEY = "settings"

export default defineComponent({
    // eslint-disable-next-line
    name: "Dock",
    emits: [],

    props: {
        active: Boolean,
        position: {
            type: String as PropType<Position>,
            default: Position.LEFT,
        }
    },

    setup() {
        const settings: {[key: string]: string} = {
            position: Position.RIGHT,
            orientation: PositionOrientation[Position.RIGHT]
        }
        
        provide(SETTINGS_KEY, reactive(settings))

        return {
            settings
        }
    },

    created() {
        this.settings.position = ReversePosition[this.position]
        this.settings.orientation = PositionOrientation[this.position]
    },

    computed: {
        dockContainerClass(): string {
            return `${this.position} ${this.active? 'active' : null}`
        },

        orientation(): Orientation {
            return PositionOrientation[this.position]
        }
    }
})
</script>

<style lang="scss">
@import "global.scss";

.dock-container {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    position: fixed;
    padding: $dock-ident;
    z-index: 1;

    $translate: -$dock-size -$dock-ident;

    &:not(.active) {
        &:not(.bottom).top {
            top: $translate !important;
            transition: top $dock-transition-lapse;

            &:hover {
                top: 0 !important;
            }
        }

        &:not(.right).left {
            left: $translate;
            transition: left $dock-transition-lapse;

            &:hover {
                left: 0;
            }
        }

        &.bottom {
            bottom: $translate !important;
            transition: bottom $dock-transition-lapse;

            &:hover {
                bottom: 0 !important;
            }
        }

        &.right {
            right: $translate !important;
            transition: right $dock-transition-lapse;

            &:hover {
                right: 0 !important;
            }
        }
        
    }

    &.top {
        width: 100vw;
        height: $dock-size + 2*$dock-ident;

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
            transform: translateY($dock-tooltip-ident) !important;
        }
    }

    &.left {
        width: $dock-size + 2*$dock-ident;
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
            transform: translateX($dock-tooltip-ident) !important;
        }
    }

    &.bottom {
        @extend .top;
        bottom: 0;

        .tooltip-text {
            transform: translateY(-$dock-tooltip-ident) !important;
        }
    }

    &.right {
        @extend .left;
        right: 0;

        .tooltip-text {
            transform: translateX(-$dock-tooltip-ident) !important;
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
        padding: $dock-ident;
        min-height: fit-content !important;
    }
}
</style>