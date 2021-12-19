<template>
  <div class="sidebar"
       :class="{active: active}">
    <button v-if="header"
            class="logo-container"
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
    
    <ul v-if="items && items.length"
        class="nav-items">
      <li v-for="item in items"
          :key="item.id"
          class="round-corners fib-6"
          :class="{selected: item.selected}">
        <button>
          <div class="icon-container small">
            <img v-if="item.src" :src="item.src">
            <i v-if="item.icon" :class="item.icon"></i>
          </div>
          <span :class="{hidden: !active}"> {{item.name}} </span>
        </button>
        <span v-if="!active"
              class="tooltip round-corners fib-4">
          {{item.name}}
        </span>
      </li>
    </ul>
    <div v-if="profile"
         class="profile-container">
      <button class="photo">
        <i class="warning-icon"
           v-if="profile.warning"
           :class="profile.warning.icon">
        </i>
        <img :src="profile.picture"/>
      </button>
      <div class="profile-info">
        <a class="name" href="#"> {{profile.nickname}} </a>
        <div class="conn-status"
            :class="{online: online}">
          <span>&#9679;</span>
          <small> {{profile.user}}</small>
        </div>
      </div>
      <button class='bx bxs-cog bx-spin-hover'
              :class="{hidden: !active}"></button>
      <span v-if="!active"
            class="tooltip round-corners fib-8">
        <strong :class="{online: online}">&#9679;</strong>
        {{profile.nickname}}
      </span>
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
  selected: boolean | undefined,
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
    
    header: Object as () => Header,
    items: Object as () => Item[],
    profile: Object as () => Profile,
  },

  data() {
    return {
      active: this.initial?? false,
      online: true,
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
$items-margin: $fib-4 * 1px;
$text-padding:  $fib-5 * 1px;
$ident: $fib-6 * 1px;
$transition-lapse: $fib-8 * 0.01s ease-in-out;
$selected-background: find-fib-color(emphasis);
$hover-background: lighten($selected-background, $fib-13 * 0.1%);

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: $collapsed-width;

  top: 0;
  left: 0;
  
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
    cursor:default;
    position: absolute;
    padding: $fib-5 * 1px;
    padding-left: $ident;
    padding-right: $ident;
    left: $collapsed-width;
    background: white;
    border-color: find-fib-color(disabled);
    border: 1px solid;
    //box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    pointer-events: none;
    white-space: nowrap;
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
    margin-bottom: $bound-margin;
    min-height: $collapsed-width;
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

  .with-tooltip {
    .tooltip {
      width: fit-content;
      transition: opacity $fib-5 * 0.01s ease-in-out;
      transition-delay: $fib-3 * 0.01s;
      opacity: 0%;
    }

    &:hover {
      .tooltip {
        transition-delay: $fib-8 * 0.01s;
        opacity: 100%;
      }
    }
  }

  .nav-items {
    flex: 1;
    list-style: none;
    margin-left: $items-margin;
    margin-right: $items-margin;

    li {
      @extend .with-tooltip;

      display: flex;
      align-items: center;
      justify-content: space-between;
      height: $collapsed-width - $items-margin*2;

      &.selected {
        background-color: $selected-background;
        
        :not(.tooltip) {
          span, i {
            color: white !important;
          }
        }
      }

      &:not(.selected):hover {
        background-color: $hover-background;
      }

      button {
        display: flex;
        align-items: center;
        position: fixed;
        transform: translateX(-$items-margin);

        span {
          max-width: $fib-11 * 1px;
          transition: opacity  $transition-lapse,
                      max-width $transition-lapse,
                      margin-left $transition-lapse;
          
          overflow: hidden;
          text-overflow: ellipsis;

          &.hidden {
            margin-left: $items-margin*2;
          }
        }
      }

      span {
        font-size: 1rem;
        font-weight: 500;
        white-space: nowrap;
      }
    }
  }

  .conn-status {
    color: find-fib-color(error);

    &.online {
      color: find-fib-color(success);
    }
  }

  .profile-container {
    @extend .with-tooltip;

    display: flex;
    align-items: center;
    margin-top: $bound-margin;
    margin-bottom: $bound-margin;
    min-height: $collapsed-width;
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
        color: find-fib-color(emphasis);
        background: white;
        border-radius: 100%;
        bottom: $fib-4 * 1px;
        right: $fib-4 * 1px;
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

    .tooltip {
      margin-bottom: auto;
      strong {
        @extend .conn-status
      }
    }

    button {
      font-size: $icon-size;
    }
  }
}
</style>
