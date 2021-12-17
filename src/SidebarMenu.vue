<template>
  <div class="sidebar"
       :class="{active: active}">
    <button class="logo-container"
            @click="switchActivity()">
      <div class="logo">
        <span class="icon-container">
          <img :src="header.src">
        </span>
        <span class="title">
          {{ header.title }}
        </span>
      </div>
    </button>
    
    <ul class="nav-items">
      <li v-for="item in items"
          :key="item.id">
        <button>
          <div class="icon-container small">
            <img v-if="item.src" :src="item.src">
            <i v-if="item.icon" :class="item.icon"></i>
          </div>
          <span :class="{hidden: !active}"> {{item.name}} </span>
        </button>
        <!--span v-if="!active" class="tooltip"> {{item.name}} </span-->
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
      <button class='bx bxs-cog bx-spin-hover'
              :class="{hidden: !active}"></button>
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
@use "sass:math";
@import "fibonacci-styles";

$collapsed-width: $fib-9 * 1px;
$expanded-width: $fib-12 * 1px;
$logo-size: $fib-8 * 1px;
$icon-size: $fib-7 * 1px;
$bound-margin: $fib-6 * 1px;
$text-padding:  $fib-5 * 1px;
$ident: $fib-6 * 1px;
$transition-lapse: $fib-8 * 0.01s ease-in-out;

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: $collapsed-width;
  //overflow: hidden;

  top: 0;
  left: 0;
  
  background: magenta;
  transition: width  $transition-lapse,
              padding-left $transition-lapse;

  .ident {
    padding-left: $ident !important;
  }

  &.active {
    $ident: $ident;
    width: $expanded-width - $ident;
    padding-left:  $ident;
  }

  button {
    min-width: $collapsed-width;
    background: transparent;
    border: none;
    transition: opacity $transition-lapse;

    &.hidden { 
      opacity: 0%;
    }

    &:hover {
      cursor: pointer;
    }
  }
  
  a {
    text-decoration: none;
  }

  .tooltip {
    position: absolute;
    padding: $fib-5 * 1px;
    padding-left: $fib-6 * 1px;
    padding-right: $fib-6 * 1px;
    
    background: red;
    left: $collapsed-width;
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
      padding: math.div($double-padding, 2);
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
    overflow: hidden;

    .logo {
      display: flex;
      align-items: center;
      flex: 1;

      span.title {
        transition: min-width $transition-lapse;
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

  span.hidden {
    opacity: 0% !important;
    max-width: 0px !important;
  }

  .nav-items {
    flex: 1;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        display: flex;
        align-items: center;

        span {
          max-width: $fib-11 * 1px;
          transition: opacity  $transition-lapse,
                      max-width $transition-lapse;
          
          overflow: hidden;
          text-overflow: ellipsis;
        }
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
    overflow: hidden;

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
      margin: auto 0 auto 0;
      
      padding-left: $text-padding;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    button {
      font-size: $icon-size;
    }
  }
}
</style>
