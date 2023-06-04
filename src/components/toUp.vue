<template>
  <transition name="fade" appear>
    <button @click="toTop" v-show="showScrollButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="3em"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->

        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"
        />
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showScrollButton: null,
    };
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
      });
    },
    handleScroll() {
      this.showScrollButton = !this.showScrollButton;
      this.showScrollButton = window.scrollY;
      if (this.showScrollButton >= 500) {
        this.showScrollButton = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
svg {
  fill: #003752;
  position: fixed;
  bottom: 20px;
  right: 10px;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: 1s ease all;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
