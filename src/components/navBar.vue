<template>
  <header>
    <nav class="d-flex justify-content-between">
      <div class="logo mt-2">logo</div>
      <div class="link">
        <ul class="d-flex mt-3">
          <li
            v-show="!mobile"
            class="mx-5 mt-1"
            v-for="list in lists"
            :key="list.id"
          >
            <a :href="list.url">{{ list.name }}</a>
          </li>

          <button class="btnn" v-show="!mobile">Login</button>
          <button class="btnn mx-1" v-show="!mobile">Sign Un</button>
        </ul>
        <div
          class="menu"
          :class="{ 'icon-active': mobileNav }"
          v-show="mobile"
          @click="toggleMobileNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <transition name="fade">
          <ul @click="open" v-show="mobileNav" class="mobile-nav pb-3">
            <li
              @click="!open"
              class="mx-5 text-center pt-2 hi mb-2"
              v-for="list in lists"
              :key="list.id"
            >
              <a class="link" :href="list.url">{{ list.name }}</a>
            </li>
            <div class="parent">
              <button class="btn-m mt-5 text-center" v-show="mobile">
                Login
              </button>
              <button class="btn-m mt-5 mx-2 text-center" v-show="mobile">
                Sign Up
              </button>
            </div>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { id: "1", name: "Home", url: "#home" },
        { id: "2", name: "Job", url: "#job" },
        { id: "3", name: "contact", url: "#contact" },
      ],
      btn: { id: "1", btn: "sign in" },
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      scrollNav: null,
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = innerWidth;
      if (this.windowWidth <= 990) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style lang="scss" scoped>
.image {
}
nav {
  margin: 0 20px;
  margin-top: 0px;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.menu {
  margin-top: -10px;
  cursor: pointer;
}
.menu span {
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  background-color: #000;
  transition: transform 0.3s ease-in-out;
  align-items: center;
}

.icon-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.icon-active span:nth-child(2) {
  opacity: 0;
}

.icon-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
.mobile-nav {
  /* background: blue; */
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 400px;
  padding: 30px;
  margin: 20px 0;
  font-size: 20px;
  box-shadow: 0 0 10px black;
  margin-top: 80px;
  /* background: rgb(0, 95, 255); */
  background: rgb(126, 193, 255);
}
.mobile-nav .hi {
  position: relative;
  top: 20px;
  margin: 40px 0;
}
.mobile-nav ul {
  /* margin: 20px 0; */
}
.mobile-nav {
  /* background: rgb(209, 15, 15); */
  z-index: -1;
}
.link {
  z-index: 9000;
}

li {
}
header {
  /* background: #555; */
}
.fade-enter-active {
  transition: top 0.5s ease-in;
}
.fade-leave-active {
  transition: top 0.2s ease-in-out;
}

.fade-enter-from {
  top: -400px;
}

.fade-leave-to {
  top: -400px;
}
.btnn {
  background: rgb(16, 69, 155);
  background: linear-gradient(
    90deg,
    rgb(34, 108, 226) 6%,
    rgba(27, 63, 121, 1) 100%
  );
  border: none;
  border-radius: 20px;
  width: 90px;
  padding: 5px;
  align-items: center;
  color: #fff;
  margin-top: 3px;
}
.btnn:hover {
  background: rgba(38, 106, 215, 0.805);
}
.parent {
  text-align: center;
}
.btn-m {
  background: rgb(0, 76, 198);
  border: none;
  border-radius: 20px;
  width: 90px;
  padding: 5px;
  align-items: center;
  &:hover {
    background: rgb(45, 45, 254);
  }
}
.hi li a {
  margin-top: 30px;
}
.logo {
  font-size: 28px;
  z-index: 9999;
}
a {
  color: white;
}
li:hover {
  transform: scale(1.1);
  transition: 1s ease all;
}
li {
  transition: 1s ease all;
  font-size: 20px;
}
</style>
