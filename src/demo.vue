<template>
  <sidebar-menu :initial="true"
            :header="header"
            :items="items"
            :profile="profile">
  </sidebar-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarMenu from "./SidebarMenu.vue";

export default defineComponent({
  name: "Demo",
  components: {
    SidebarMenu,
  },

  data() {
    return {
      header: {
        src: "https://imgr.search.brave.com/enObmoCmrMl_inNeTdofjG_hnVljSfkRiZQ4GXpaGSo/fit/1200/1200/ce/1/aHR0cHM6Ly9zZHRp/bWVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wMy9j/cHBwcC5wbmc",
        title: "Alvidir",
      },

      profile: {
        picture: "https://gitlab.com/uploads/-/system/user/avatar/2419927/avatar.png?width=400",
        nickname: "Dummy Dumper",
        user: "dummy123",
        warning: {
          icon: "bx bxs-bell",
          message: "you got new notifications",
        }
      },

      items: [
        {
          id: "application1",
          name: "Application one",
          src: "https://imgr.search.brave.com/xUAJUD-A0l1sNEhzmwUNv099Sykdd2WzwpNGTMAWdy4/fit/512/512/ce/1/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY2xlYW4tbWlu/aW1hbC1zZXQvMTYv/ZWRpdC0wMS01MTIu/cG5n",
        },
        {
          id: "application2",
          name: "Application two",
          icon: "bx bxs-notepad",
        },
        {
          id: "add",
          name: "Add application",
          icon: "bx bxs-customize",
        }
      ]
    }
  },
});
</script>

<style lang="scss">
@import "fibonacci-styles";

* {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

</style>