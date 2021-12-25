<template>
    <div id="sidenav"
        :class="{active: active}">
        <button id="header"
                v-if="iconSrc && title"
                @click="switchActivity">
            <img :src="iconSrc">
            <span class="hideable"
                  :class="{hidden: !active}">
              {{ title }}
            </span>
        </button>
        <div id="body">
          <slot></slot>
        </div>
        <div id="footer"
             v-if="session">
          <button id="profile-picture">
            <img class="round-corners fib-5" 
                :src="session.picture">
          </button>
          <div id="profile-info">
            <a href="#">{{session.nickname}}</a>
            <div class="status">
              <span>&#9679;</span>
              <small> {{session.username}}</small>
            </div>
          </div>
          <button class="bx bxs-cog bx-spin-hover">
          </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"

export default defineComponent({
  name: "SidenavMenu",
  props: {
    title: String,
    iconSrc: String,
    activeByDefault: Boolean,
  },

  setup() {
    const session = inject('session')

    return {
      session
    }
  },

  data() {
    return {
      active: this.activeByDefault,
    }
  },

  methods: {
    switchActivity() {
      this.active = !this.active
    }
  }
});
</script>

<style lang="scss">
@import "global.scss";

#sidenav {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: $non-active-width;
    height: 100% !important;

    transition: width $transition-lapse,
                padding-left $transition-lapse;

    &.active {
        width: $active-width;
        padding-left: $ident;
    }

    &:not(.active) {
      span, a {
        @extend .hidden;
        padding-left: $ident;
      }

      .status small {
        @extend .hidden;
      }
    }

    span, a {
      @extend .hideable;
      padding-left: 0px;
      transition: opacity $transition-lapse,
                  padding-left $transition-lapse;
    }

    .status small {
        @extend .hideable;
    }

    #header {
        display: flex;
        align-items: center;
        margin-top: $ident;
        margin-bottom: golden-ratio($ident);
        overflow: hidden;

        img {
          max-width: $non-active-width;
          max-height: $non-active-width;
        }

        span {
          margin-left: $fib-3 * 1px;
          font-size: $fib-12 * 0.1px;
          font-weight: 500;
        }
    }

    #body {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: $non-active-width;
        min-height: fit-content;
    }

    #footer {
        display: flex;
        min-width: $non-active-width;
        min-height: $non-active-width;
        margin-top: golden-ratio($ident);
        margin-bottom: $ident;
        overflow: hidden;

        #profile-picture {
          display: flex;
          align-items: center;
          min-width: $non-active-width;
          height: $non-active-width;
        }

        #profile-info {
          display: flex;
          flex-direction: column;
          height: fit-content;
          width: $active-width - $non-active-width * 2;
          margin: auto;

          a, small {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 100%;
          }
        }

        .status {
          color: find-fib-color(error);

          &.online {
            color: find-fib-color(success);
          }
        }

        img {
          margin: auto;
          max-width: $fib-8 * 1px;
          max-height: $fib-8 * 1px;
        }

        button {
          width: $non-active-width;
          height: $non-active-width;
          font-size: $fib-7 * 1px;
        }
    }

    .menu-option {
      overflow: hidden;
    }
}
</style>