/* eslint-disable */
import Dock from "./Dock.vue"
import DockItem from "./DockItem.vue"
import DockSeparator from "./DockSeparator.vue"

const DOCK_TAG = "dock"
const DOCK_ITEM_TAG = "dock-item"
const DOCK_SEPARATOR_TAG = "dock-separator"

export {
    Dock,
    DockItem,
    DockSeparator
}

export function include(app: any): any {
    app.component(DOCK_TAG, Dock)
       .component(DOCK_ITEM_TAG, DockItem)
       .component(DOCK_SEPARATOR_TAG, DockSeparator)
}