<template>
  <div class="parent">
    <div class="container mt-5">
      <div class="row">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          class="col-lg-6 col-sm-10"
        >
          <h1 class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            nulla.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque
            tenetur at maxime quae enim et voluptas ipsam quibusdam quod.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          class="col-lg-5 col-sm-8 mt-5 mm"
        >
          <div class="main">
            <div class="big-circle">
              <div class="icon-block">
                <img src="@/assets/1.png" alt="web design icon" />
              </div>
              <div class="icon-block">
                <img src="@/assets/2.png" alt="game design icon" />
              </div>
              <div class="icon-block">
                <img src="@/assets/3.png" alt="game dev icon" />
              </div>
              <div class="icon-block">
                <img src="@/assets/4.png" alt="ui-ux icon" />
              </div>
            </div>
            <div class="circle">
              <div class="icon-block">
                <img src="@/assets/6.png" alt="blockchain icon" />
              </div>
              <div class="icon-block">
                <img src="@/assets/4.png" alt="blockchain icon" />
              </div>
              <div class="icon-block">
                <img src="@/assets/8.png" alt="ar-vr icon" />
              </div>
              <div class="icon-block">
                <img src="@/assets/7.png" alt="artificial intelligence icon" />
              </div>
            </div>
            <div class="center-logo">
              <img class="logoo" src="@/assets/middle.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <slide-page></slide-page>
</template>

<script>
import slidePage from "./slidePage.vue";
export default {
  components: { slidePage },
};
</script>

<style scoped>
.row {
  align-items: center;
  justify-content: center;
}
body {
  /* background-color: #3f5de1; */
}
.main-container {
  min-height: 100vh;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  height: 260px;
  overflow: hidden;
}
.main {
  margin: 0px auto;
  width: 380px;
  height: 380px;
  position: relative;
}
.big-circle {
  height: 100%;
  width: 100%;
  position: relative;
  /* border: 3px solid #000000; */
  border-radius: 50%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  animation: Rotate 20s linear infinite;
  -webkit-animation: Rotate 20s linear infinite;
}
.icon-block {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  /* background-image: linear-gradient(180deg, #4967e6 0%, #627bf4 100%);
  -webkit-background-image: linear-gradient(180deg, #4967e6 0%, #627bf4 100%);
  box-shadow: 0 2px 4px 0 #3e5ada; */
  /* -webkit-box-shadow: 0 0px 10px 0 black; */
}
.icon-block img {
  margin: 0px auto;
  width: 80%;
  animation: Rotate-reverse 20s linear infinite;
  -webkit-animation: Rotate-reverse 20s linear infinite;
}
.icon-block:first-child {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.icon-block:nth-child(2) {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  -webkit-transform: translate(50%, -50%);
}
.icon-block:nth-child(3) {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  -webkit-transform: translate(-50%, 50%);
}
.icon-block:nth-child(4) {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
/* circle content */
.circle {
  animation: circle-rotate 20s linear infinite;
  -webkit-animation: circle-rotate 20s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  width: 60%;
  height: 60%;
  /* border: 3px solid #6495f2; */
  border-radius: 50%;
}
.circle .icon-block img {
  animation: img-rotate 20s linear infinite;
  -webkit-animation: img-rotate 20s linear infinite;
}
/* center logo */
.center-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.center-logo img {
  max-width: 150px;
}

/* keyframe animation */

@keyframes Rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes Rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes Rotate-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@-webkit-keyframes Rotate-reverse {
  from {
    -webkit-transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}

@keyframes circle-rotate {
  from {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(405deg);
  }
}

@-webkit-keyframes circle-rotate {
  from {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
  }
  to {
    -webkit-transform: translate(-50%, -50%) rotate(405deg);
  }
}

@keyframes img-rotate {
  from {
    transform: rotate(-45deg);
  }
  to {
    transform: rotate(-405deg);
  }
}

@-webkit-keyframes img-rotate {
  from {
    -webkit-transform: rotate(-45deg);
  }
  to {
    -webkit-transform: rotate(-405deg);
  }
}
img {
}
@media screen and (max-width: 500px) {
  .logoo {
    width: 130px;
  }
  .icon-block {
    width: 70px;
    height: 70px;
    padding: -30px;
    margin: 30px;
  }
  .main .big-circle {
    /* width: 400px; */
  }
}

.container {
  overflow: hidden;
}
.mm img {
  margin: 0 auto;
}
.main-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.main {
  position: relative;
  z-index: 1000;
  padding: 40px;
}
</style>
center-logo
