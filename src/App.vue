<template>
  <nav-bar></nav-bar>
  <header-section></header-section>
  <section-two />
  <sectionthree />
  <contact-us></contact-us>
  <to-up></to-up>
  <footer-section></footer-section>

  <!-- the section three is content splide js -->
</template>
<script>
import navBar from "./components/navBar.vue";
import headerSection from "./components/headerSection.vue";
import SectionTwo from "./components/sectionTwo.vue";
import sectionthree from "./components/sectionthree.vue";
import footerSection from "@/components/footerSection.vue";
import ContactUs from "@/components/ContactUs.vue";
import ToUp from "./components/toUp.vue";

export default {
  components: {
    navBar,
    headerSection,
    SectionTwo,
    sectionthree,
    footerSection,
    ContactUs,
    ToUp,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
