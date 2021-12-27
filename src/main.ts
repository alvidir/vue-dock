import SidenavMenu from "./SidenavMenu.vue"
import MenuOption from "./MenuOption.vue"
import { defineCustomElement } from "vue"

const SIDENAV_MENU_TAG = "sidenav-menu"
const MENU_OPTION_TAG = "menu-option"

export {
    SidenavMenu,
    MenuOption
}

export function include(app: any): any {
    app.component(SIDENAV_MENU_TAG, SidenavMenu)
       .component(MENU_OPTION_TAG, MenuOption)
}

// Remember to format all SFC names as *.ce.vue to include its styles into the web component
// see: https://v3.vuejs.org/guide/web-components.html

const ElementSidenavMenu = defineCustomElement(SidenavMenu)
const ElementMenuOption = defineCustomElement(MenuOption)


export {
    ElementSidenavMenu,
    ElementMenuOption,
};


export function register() {
    customElements.define(SIDENAV_MENU_TAG, ElementSidenavMenu)
    customElements.define(MENU_OPTION_TAG, ElementMenuOption)
}