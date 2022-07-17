<template>
  <dock class="absolute"
       :orientation="'vertical'"
       :active="true">      
  </dock>
  <h1>
    whats up world!
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServeDev',

  data() {
    return {}
  },

  methods: {},
});
</script>

<style lang="scss">
@import "fibonacci-styles";

* {
  @extend .theme-dark;

  margin: 0;
  padding: 0;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: row;
  width: 100%;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;

  background: var(--color-background-secondary);
}

.demo-item {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>