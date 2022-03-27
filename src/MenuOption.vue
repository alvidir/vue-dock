<template>
    <button class="menu-option"
            @click="onClick">
        <div class="icon">
            <slot name="icon">
                <img :src="iconSrc">
            </slot>
        </div>
        <div class="title">
            <slot>
                <label> {{title}} </label>
            </slot>
        </div>
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
    flex-direction: row;
    min-height: $default-width;
    min-width: $default-width;

    .icon {
        display: flex;
        height: $default-width;
        min-width: $default-width;
    }

    .title {
        pointer-events: none;
        margin-top: auto;
        margin-bottom: auto;
    }

    label {
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:  1rem;
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
}
</style>