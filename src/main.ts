/* eslint-disable */
import Dock from "./Dock.vue"
import DockItem from "./DockItem.vue"

const DOCK_TAG = "dock"
const DOCK_ITEM_TAG = "dock-item"

export {
    Dock,
    DockItem
}

export function include(app: any): any {
    app.component(DOCK_TAG, Dock)
       .component(DOCK_ITEM_TAG, DockItem)
}