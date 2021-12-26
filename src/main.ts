import DockMenu from "./DockMenu.vue"
import MenuOption from "./MenuOption.vue"
import { defineCustomElement } from "vue"

const DOCK_MENU_TAG = "dock-menu"
const MENU_OPTION_TAG = "menu-option"

export {
    DockMenu,
    MenuOption
}

export function include(app: any): any {
    app.component(DOCK_MENU_TAG, DockMenu)
       .component(MENU_OPTION_TAG, MenuOption)
}

// Remember to format all SFC names as *.ce.vue to include its styles into the web component
// see: https://v3.vuejs.org/guide/web-components.html

const ElementDockMenu = defineCustomElement(DockMenu)
const ElementMenuOption = defineCustomElement(MenuOption)


export {
    ElementDockMenu,
    ElementMenuOption,
};


export function register() {
    customElements.define(DOCK_MENU_TAG, ElementDockMenu)
    customElements.define(MENU_OPTION_TAG, ElementMenuOption)
}