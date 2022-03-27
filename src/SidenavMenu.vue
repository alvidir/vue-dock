<template>
    <span class="padding"
         :class="{active: active}"></span>
    <div class="dock-container"
         :class="{active: active}">
        
        <div class="separator"></div>

        <div class="dock round-corners fib-6">

            <slot name="header">
                <button class="header"
                        @click="onClick(CLICK_ON_LOGO)">
                    <img :src="iconSrc">
                </button>
            </slot>

            <div class="body">
                <slot></slot>
            </div>
            
            <div v-if="profile" class="divider"></div>

            <div class="footer"
                 v-if="profile">
                <slot name="footer">
                    <menu-option id="profile"
                                :icon-src="profile.picture"
                                :selected="false">
                        <label class="round-corners fib-8">
                            <strong>&#9679;</strong>
                            &nbsp;{{profile.nickname}}
                        </label>
                    </menu-option>     
                </slot>
            </div>
        </div>

        <div class="separator"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

const CLICK_EVENT = "click"
export const CLICK_ON_LOGO = "logo"
export const CLICK_ON_PROFILE = "profile"

export interface ProfileInterface {
    picture: string,
    nickname: string,
}

export default defineComponent({
    name: "Sidenav",

    emits: [CLICK_EVENT],

    props: {
        title: String,
        iconSrc: String,
        active: Boolean,
        profile: Object as PropType<ProfileInterface>
    },

    setup() {
        return {
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
$dock-header-margin: $ident * $FIB_RATIO;
$dock-items-separation: calc($ident / $FIB_RATIO);
$dock-button-size: $default-width;
$dock-inner-margin: $fib-4 * 1px;

.padding {
    width: $dock-width + 2 * $dock-inner-margin;
    transition: width $transition-lapse;

    &:not(.active) {
        width: 0px;
    }
}

.dock-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: $dock-width;
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

.dock {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    //min-height: ($fib-12 + $fib-6) * 1px;
    border: 1px solid;
    border-color: var(--color-text-disabled);
    background: var(--color-background-primary);

    .header {
        max-width: $dock-width;
        min-height: $dock-width;
        margin-top: $dock-header-margin;
        margin-bottom: $dock-header-margin;

        img {
            margin: auto;
            max-width: $dock-icon-size;
            max-height: $dock-icon-size;
        }
    }

    .body {
        flex: 1;
        //min-height: $dock-button-size;
        //overflow-y: auto;

        //-ms-overflow-style: none;  /* IE and Edge */
        //scrollbar-width: none;  /* Firefox */

        button {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: $dock-items-separation;
        }
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    // .body::-webkit-scrollbar {
    //    display: none;
    // }

    .footer {
        display: flex;
        width: $dock-width;
        height: $dock-width;

        button {
            margin: auto;
        }

        strong {
            font-size: 1rem !important;
        }

        label {
            left: $dock-width + $ident;
        }
    }

    .body button, .footer button {
        @extend .round-corners, .fib-6;

        display: flex;
        height: $dock-button-size;
        width: $dock-button-size;

        transition: background $fib-7 * 0.01s ease-in-out;

        &:hover {
            background: var(--color-highlight);
        }

        &:hover:active {
            background: var(--color-background-primary);
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
        background: var(--color-text-disabled);
        margin-left: $dock-items-separation;
        margin-right: $dock-items-separation;
    }

    // overwriting menu-option component styles
    .menu-option {
        @extend .with-tooltip;

        .title {
            pointer-events: none;
        }

        i {
            font-size: $fib-8*1px;
        }

        label {
            @extend .tooltip;
            margin-left: $ident;
            font-size: $fib-6 * 1px;
        }
    }
}
</style>