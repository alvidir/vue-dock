<template>
  <div class="sidebar"
       :class="{active: active}">
    <button class="logo-container"
            @click="switchActivity()">
      <div class="logo">
        <span class="icon-container">
          <img :src="header.src">
        </span>
        <span class="title"> {{ header.title }} </span>
      </div>
    </button>
    
    <ul class="nav-items">
      <li v-for="item in items"
          :key="item.id">
        <a href="#"
            :class="{idented: active}">
          <span class="icon-container small">
            <img v-if="item.src" :src="item.src">
            <i v-if="item.icon" :class="item.icon"></i>
          </span>
          <span :class="{hidden: !active}"> {{item.name}} </span>
        </a>
        <button v-if="item.options"
                class='bx bx-chevron-down'>
        </button>
        <!-- span v-if="!active" class="tooltip"> {{item.name}} </span -->
      </li>
    </ul>
    <div class="profile-container">
      <div class="photo">
        <i class="warning-icon"
           v-if="profile.warning"
           :class="profile.warning.icon">
        </i>
        <img :src="profile.picture"/>
      </div>
      <div class="profile-info">
        <a class="name" href="#"> {{profile.username}} </a>
        <slot name="under-username"></slot>
      </div>
      <button class='bx bxs-cog bx-spin-hover'></button>
      <!-- span v-if="!active" class="tooltip"> Application one </span -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Header {
  icon: string | undefined,
  img: string | undefined,
  title: string,
}

interface Item {
  id: string,
  name: string,
  img: string,
}

interface Warning {
  icon: string,
  message: string,
}

interface Profile {
  picture: string,
  username: string,
  warning: Warning | undefined,
}

export default defineComponent({
  name: "SidebarMenu",
  props: {
    initial: Boolean,
    
    header: {
      type: Object as () => Header,
      required: true,
    },

    items: {
      type: Object as () => Item[],
      required: true,
    },

    profile: {
      type: Object as () => Profile,
      required: true,
    }
  },

  data() {
    return {
      active: this.initial?? false
    }
  },

  methods: {
    switchActivity() {
      console.log("switch activity to: ", this.active)
      this.active = !this.active
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "fibonacci-styles";

$collapsed-width: $fib-9 * 1px;
$expanded-width: $fib-12 * 1px;
$logo-size: $fib-8 * 1px;
$icon-size: $fib-7 * 1px;
$bound-margin: $fib-6 * 1px;
$text-padding:  $fib-5 * 1px;
$ident-padding: $fib-7 * 1px;

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: $collapsed-width;
  overflow: hidden;

  top: 0;
  left: 0;
  
  background: magenta;
  transition: width  $fib-8 * 0.01s ease-in-out;

  &.active {
     width: $expanded-width + $ident-padding;
  }

  button {
    min-width: $collapsed-width;
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
  
  a {
    text-decoration: none;
  }

  .tooltip {
    z-index: 1;
    position: absolute;
  }

  .icon-container {
    display: flex;
    height: $collapsed-width;
    width: $collapsed-width;

    img {
      $double-padding: $fib-6 * 1px;
      max-height: $collapsed-width - $double-padding;
      max-width: $collapsed-width - $double-padding;
      $double-padding: $fib-6 * 1px;
      padding: $double-padding / 2;
      margin: auto;
    }

    i {
      font-size: $logo-size;
      text-align: center;
      line-height: $collapsed-width;
      margin: auto;
    }

    &.small {
      img {
        $reduce: $fib-3 * 1px;
        max-height: $icon-size - $reduce;
        max-width: $icon-size - $reduce;
      }

      i {
        font-size: $icon-size;
      }
    }
  }

  .logo-container {
    display: flex;
    margin-top: $bound-margin;
    margin-bottom: $bound-margin;

    .logo {
      display: flex;
      align-items: center;
      flex: 1;

      span.title {
        font-size: $icon-size;
        font-weight: 600;
      }
    }

    button {
      background: transparent;
      border: none;

      font-size: $logo-size;
    }
  }

  .nav-items {
    flex: 1;
    list-style: none;

    a {
      display: flex;
      align-items: center;
      transition: padding-left $fib-8 * 0.01s ease-in-out;

      &.idented {
        padding-left: $ident-padding;
      }

      span {
        transition: opacity  $fib-8 * 0.01s ease-in-out;

        &.hidden {
          opacity: 0%;
        }
      }
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        height: $collapsed-width;
        min-width: $collapsed-width;
        text-align: center;
        line-height: $collapsed-width;
        font-size: $icon-size;
      }

      span {
        font-size: 1rem;
        font-weight: 500;
        white-space: nowrap;
      }
    }
  }

  .profile-container {
    display: flex;
    margin-top: $bound-margin;
    margin-bottom: $bound-margin;

    .photo {
      display: flex;
      position: relative;

      height: $collapsed-width;
      min-width: $collapsed-width;
      justify-content: center;
      
      border-radius: $fib-6 * 1px;

      .warning-icon {
        position: absolute;
        font-size: $fib-7 * 1px;

        bottom: $fib-3 * 1px;
        right: $fib-3 * 1px;
      }

      img {
        margin: auto;
        border-radius: $fib-5 * 1px;
        height: $logo-size;
        width: $logo-size;
      }
    }

    .profile-info {
      flex: 1;
      margin: auto;
      padding-left: $text-padding;
    }

    button {
      font-size: $icon-size;
    }
  }
}
</style>
