<template>
    <div class="dock-item tooltip"
        :class="finalPosition">
        <label class="tooltip-text">{{placeholder}}</label>
        <div class="dock-item-content">
        <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject } from "vue"
import { SETTINGS_KEY, Position } from "./Dock.vue"

interface Settings {
    position: Position
}

export default defineComponent({
    name: "DockItem",
    emits: [],

    props: {
        selected: Boolean,
        placeholder: String,
        position: {
            type: String as PropType<Position>,
            default: Position.RIGHT,
        },
    },

    setup() {
        const settings = inject<Settings>(SETTINGS_KEY)
        return {
            settings
        }
    },

    computed: {
        finalPosition(): Position | undefined {
            return this.settings?.position || this.position 
        }
    },
})
</script>

<style lang="scss">
@import "global.scss";

.dock-item {
    display: flex;
    justify-content: center;
    border-radius: $fib-5 * 1px;
    aspect-ratio: 1 / 1 !important;

    &:hover {
        background: var(--color-button);
    }

    .dock-item-content {
        height: fit-content;
        width: fit-content;
        max-height: 100%;
        max-width: 100%;
        margin: auto;
    }
}
</style>