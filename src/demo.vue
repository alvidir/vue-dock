<template>
  <dock></dock>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dock from "./Dock.vue";

export default defineComponent({
  name: "Home",
  components: {
    Dock,
  },
});
</script>

<style lang="scss">
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