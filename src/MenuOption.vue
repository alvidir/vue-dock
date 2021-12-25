<template>
    <button class="menu-option">
        <div class="icon-container">
            <slot></slot>
        </div>
        <span> {{title}} </span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "MenuOption",
    props: {
        id: String,
        title: String,
        iconSrc: String,
        selected: Boolean,
    },
})
</script>

<style lang="scss">
@import "global.scss";

.menu-option {
    display: flex;
    align-items: center;
    min-height: $non-active-width;
    min-width: $non-active-width;

    .icon-container {
        display: flex;
        align-items: center;
    
        height: $non-active-width;
        min-width: $non-active-width;
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