<template>
    <div class="dock-item tooltip"
        :class="dockItemClass"
        @click="onClick">
        <label class="tooltip-text">{{placeholder}}</label>
        <div class="dock-item-content">
        <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject } from "vue"
import { SCOPE_KEY, Position } from "./Dock.vue"
import {
    CLICK_EVENT_NAME
} from "./constants"

interface Scope {
    selected: (id: string) => boolean,
    position: Position
    onClick: (id: string) => void,
}

export default defineComponent({
    name: "DockItem",
    emits: [
        CLICK_EVENT_NAME
    ],

    props: {
        id: String,
        selected: Boolean,
        placeholder: String,
        position: {
            type: String as PropType<Position>,
            default: Position.RIGHT,
        },
    },

    setup() {
        const scope = inject<Scope>(SCOPE_KEY)
        return {
            scope
        }
    },

    computed: {
        finalPosition(): Position | undefined {
            return this.scope?.position || this.position 
        },

        dockItemClass(): string[] {
            const position = this.scope?.position || this.position 
            const selected =  this.id && this.scope?.selected(this.id)
            
            let classes: string[] = []
            if (position) classes.push(position)
            if(this.selected || selected) classes.push('selected')
            return classes
        },
    },

    methods: {
        onClick() {
            this.$emit(CLICK_EVENT_NAME, this.id)
            if (this.id) this.scope?.onClick(this.id)
        }
    }
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

    &.selected {
        background: var(--color-accent);
    }
}
</style>