<template>
    <div class="dock-item tooltip top">
        <label class="tooltip-text">Tooltip text</label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "DockItem",
    emits: [],

    props: {
        selected: Boolean,
        placeholder: String,
    },

    methods: {
    }
})
</script>

<style lang="scss">
@import "global.scss";

.dock-item {
    border-radius: $fib-5 * 1px;
    aspect-ratio: 1 / 1;

    &:hover {
        background: var(--color-button);
    }
}
</style>