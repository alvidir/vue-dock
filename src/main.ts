import SidenavMenu from "./SidenavMenu.vue"
import MenuOption from "./MenuOption.vue"

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