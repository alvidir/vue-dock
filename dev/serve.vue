<template>
  <sidenav-menu title="Sidenav menu"
                icon-src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png"
                :profile="profile"
                :active="true">
    <menu-option id="photosjop"
                 title="Photoshop"
                 icon-src="https://www.computerhope.com/issues/pictures/photoshop-300.png"
                 :selected="true">
    </menu-option>
    <menu-option id="aftereffects"
                 title="Affter effects"
                 icon-src="data:image/png;base64,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"
                 :selected="false">
    </menu-option>
    <menu-option id="illustrator"
                 title="Illustrator"
                 icon-src="https://logodownload.org/wp-content/uploads/2017/04/adobe-Illustrator-logo-1-1.png"
                 :selected="false">
    </menu-option>              
  </sidenav-menu>
  <h1>
    Hello world
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServeDev',

  data() {
    return {
      profile: {
        picture: "https://secure.gravatar.com/avatar/45df7687ab93fe5d5a54f274c3ac05e1?s=800&d=identicon",
        nickname: "Dummy Dumper"
      }
    }
  },

  methods: {},
});
</script>

<style lang="scss">
@import "fibonacci-styles";

* {
  @extend .theme-light;

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