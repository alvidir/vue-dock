<template>
    <div class="dock-separator"
        :class="finalOrientation">
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType,  inject } from "vue"
import { SETTINGS_KEY } from "./Dock.vue"

export enum Orientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal",
}

interface Settings {
    orientation: Orientation
}

export default defineComponent({
    name: "DockSeparator",
    emits: [],

    props: {
        orientation: {
            type: String as PropType<Orientation>,
            default: Orientation.HORIZONTAL,
        }
    },

    setup() {
        const settings = inject<Settings>(SETTINGS_KEY)
        console.log(settings?.orientation)
        return {
            settings
        }
    },

    computed: {
        finalOrientation(): Orientation | undefined {
            return this.settings?.orientation || this.orientation
        }
    },
})
</script>

<style lang="scss">
@import "global.scss";

.dock-separator {
    $size: 1px;
    background: var(--color-scrollbar);
    
    &.horizontal {
        width: $size;
        margin-right: $dock-ident;
        margin-left: $dock-ident;
    }

    &.vertical {
        height: $size;
        margin-top: $dock-ident;
        margin-bottom: $dock-ident;
    }
}
</style>