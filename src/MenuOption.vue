<template>
    <button class="menu-option"
            @click="onClick">
        <div class="icon-container">
            <slot></slot>
        </div>
        <span> {{title}} </span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const CLICK_EVENT = "click";

export default defineComponent({
    name: "MenuOption",
    
    emits: [CLICK_EVENT],

    props: {
        id: String,
        title: String,
        iconSrc: String,
        selected: Boolean,
    },

    methods: {
        onClick() {
            this.$emit(CLICK_EVENT, this.id)
        }
    }
})
</script>

<style lang="scss">
@import "global.scss";

.menu-option {
    display: flex;
    align-items: center;
    min-height: $default-width;
    min-width: $default-width;

    .icon-container {
        display: flex;
        align-items: center;
    
        height: $default-width;
        min-width: $default-width;
    }

    img {
        margin: auto;
        min-height: $fib-7 * 1px;
        max-width: $fib-7 * 1px;
    }

    i {
        width: 100%;
        font-size: $fib-7 * 1px;
        text-align: center;
    }

    span {
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:  1rem;
    }
}
</style>