<template>
  <dock :active="true"
        :position="'left'"
        :selected="selected"
        @click="onClick">
    <dock-item id="0" placeholder="first item"><label>Aa</label></dock-item>
    <dock-item id="1" placeholder="second item"><label>Bb</label></dock-item>
    <dock-item id="2" placeholder="third item"><label>Cc</label></dock-item>
    <dock-item id="3" placeholder="fourth item"><label>Dd</label></dock-item>
    <dock-item id="4" placeholder="fifth item"><label>Ee</label></dock-item>
    <dock-item id="5" placeholder="sixth item"><label>Ff</label></dock-item>
    <dock-separator></dock-separator>
    <dock-item id="6" placeholder="seventh item"><label>Gg</label></dock-item>
  </dock>
  <div>
    <h1>
      hello world
    </h1>
    <p>
      Lorem ipsum dolor sit amet. Et eveniet officiis et repellat quis ad mollitia repellendus rem amet accusamus aut quidem obcaecati. Ex neque excepturi et voluptatum velit sit quas ipsum aut dolorem fugit ut fugiat aliquam. Qui cumque voluptatum ut repudiandae sint non nihil natus in porro quia.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServeDev',

  data() {
    return {
      selected: ''
    }
  },

  methods: {
    onClick(id: string) {
      this.selected = id
    }
  },
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

label {
  color: var(--color-text);
}
</style>