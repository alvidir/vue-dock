<template>
    <div class="dock-container"
         :class="{active: active}">
        <div class="separator"></div>
        <div id="dock"
             class="round-corners fib-6">
            <slot name="header">
                <button id="header"
                        @click="onClick(CLICK_ON_LOGO)">
                    <img class="bx-tada-hover"
                        :src="iconSrc">
                </button>
            </slot>
            <div id="body">
                <slot></slot>
            </div>
            <div class="divider"></div>
            <div id="footer">
                <slot name="footer">
                    <button class="with-tooltip"
                            @click="onClick(CLICK_ON_PROFILE)">
                        <img :src="session.picture">
                        <span class="tooltip round-corners fib-8">
                            <strong>&#9679;</strong>
                            &nbsp;{{session.nickname}}
                        </span>
                    </button>
                </slot>
            </div>
        </div>
        <div class="separator"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"

const CLICK_EVENT = "click"
export const CLICK_ON_LOGO = "logo"
export const CLICK_ON_PROFILE = "profile"

export default defineComponent({
    name: "Sidenav",

    emits: [CLICK_EVENT],

    props: {
        title: String,
        iconSrc: String,
        active: Boolean,
    },

    setup() {
        const session = inject('session')

        return {
            session,
            CLICK_ON_LOGO,
            CLICK_ON_PROFILE
        }
    },

    methods: {
        onClick(origin: string) {
            this.$emit(CLICK_EVENT, origin)
        }
    }
})
</script>

<style lang="scss">
@import "global.scss";

$dock-width: $default-width + $ident;
$dock-icon-size: $default-width - $ident;
$dock-items-separation: golden-ratio($ident, des);
$dock-button-size: $default-width;
$dock-inner-margin: $fib-4 * 1px;

.dock-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: $dock-width;
    height: 100% !important;
    padding-left: $dock-inner-margin;
    padding-right: $dock-inner-margin;

    &:not(.active) {
        $non-active-translation: $dock-width+$dock-inner-margin + $fib-3*1px;
        transition: transform $transition-lapse;
        
        transform: translate(-$non-active-translation);

        &:hover {
            transform: translate(0);
        }

        .glass {
            backdrop-filter: none;
        }
    }
}

.separator {
    min-height: $dock-inner-margin !important;
    width: 100%;
}

#dock {
    @extend .glass;

    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: fit-content;
    width: 100%;
    border: 1px solid;
    border-color: #ffffff55;

    #header {
        max-width: $dock-width;
        min-height: $dock-width;
        margin-top: $dock-items-separation;
        margin-bottom: $dock-items-separation;

        img {
            margin: auto;
            max-width: $dock-icon-size;
            max-height: $dock-icon-size;
        }
    }

    #body {
        display: flex;
        flex-direction: column;
        flex: 1;

        button {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: $dock-items-separation;
        }
    }

    #footer {
        display: flex;
        align-items: center;
        width: $dock-width;
        height: $dock-width;

        button {
            margin: auto;
        }

        strong {
            font-size: 1rem !important;
        }

        .tooltip {
            left: $dock-width + $ident;
        }
    }

    #body button, #footer button {
        @extend .round-corners, .fib-6;

        display: flex;
        align-items: center;
        height: $dock-button-size;
        width: $dock-button-size;

        transition: background $fib-7 * 0.01s ease-in-out;

        &:hover {
            background: #ffffff55;
        }

        &:hover:active {
            background: #ffffffaa;
        }
    
        img {
            @extend .round-corners, .fib-5;

            margin: auto;
            max-width: $dock-icon-size;
            max-height: $dock-icon-size;
        }
    }

    .divider {
        height: $fib-1 * 1px;
        background: #ffffff88;
        margin-left: $dock-items-separation;
        margin-right: $dock-items-separation;
    }

    // overwriting menu-option component styles
    .menu-option {
        @extend .with-tooltip;

        i {
            font-size: $fib-8*1px;
        }

        span {
            @extend .tooltip;
            left: $dock-width + $ident;
            font-size: $fib-6 * 1px;
        }
    }
}
</style>