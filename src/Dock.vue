<template>
  <div class="sidebar"
       :class="{expanded: active}">
    <button class="logo-container"
            @click="switchActivity()">
      <div class="logo">
        <i class='bx bxl-docker'></i>
        <span> Dashboard </span>
      </div>
    </button>
    
    <ul class="nav-items">
      <li>
        <a href="#">
          <button class='bx bxs-grid-alt'></button>
          <span :class="{hidden: !active}"> Application one </span>
        </a>
        <!-- <span class="tooltip"> Application one </span> -->
      </li>
      <li>
        <div class="submenu">
          <a href="#">
            <button class='bx bxs-grid-alt'></button>
            <span :class="{hidden: !active}"> Application two </span>
          </a>
          <button class='bx bx-chevron-down'></button>
        </div>
        <!-- <span class="tooltip"> Application two </span> -->
      </li>
      <li>
        <a href="#">
          <button class='bx bxs-grid-alt'></button>
          <span :class="{hidden: !active}"> Add application </span>
        </a>
        <!-- <span class="tooltip"> Add application </span> -->
      </li>
    </ul>
    <div class="profile-container">
      <div class="photo">
        <span class="status-dot"
              :class="{hidden: !active}">
          &#9679;
        </span>
        <img src="https://gitlab.com/uploads/-/system/user/avatar/2419927/avatar.png?width=400"/>
      </div>
      <div class="profile-info">
        <a class="name" href="#"> Username </a>
        <div class="status">
          <span>&#9679;</span>
          <label>Online</label>
        </div>
      </div>
      <button class='bx bxs-cog'></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dock",
  props: {
    initial: Boolean,
  },

  data() {
    return {
      active: this.initial
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

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: $collapsed-width;
  overflow: hidden;

  top: 0;
  left: 0;
  
  transition: width  $fib-8 * 0.01s ease-in-out;

  &.expanded {
     width: $expanded-width;
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

  .logo-container {
    display: flex;
    margin-top: $bound-margin;
    margin-bottom: $bound-margin;

    .logo {
      display: flex;
      align-items: center;
      flex: 1;

      i {
        font-size: $logo-size;
        height: $collapsed-width;
        min-width: $collapsed-width;
        text-align: center;
        line-height: $collapsed-width;
      }

      span {
        font-size: $icon-size;
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

      span {
        transition: opacity  $fib-8 * 0.01s ease-in-out;

        &.hidden {
          opacity: 0%;
        }
      }
    }

    li {
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

      .submenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

      .status-dot {
        position: absolute;
        font-size: $fib-8 * 1px;

        bottom: $fib-4 * -1px;
        right: $fib-4 * 1px;

        transition: opacity 0.2s ease-in-out;
        &.hidden {
          opacity: 0%;
        }
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
      padding-left: $fib-4 * 1px;

      .status {
        span {
          color: greenyellow;
        }

        label {
          font-size: $fib-6 * 1px;
        }
      }
    }

    button {
      font-size: $icon-size;
    }
  }
}
</style>
