<template>
  <section>
    <div class="headd">
      <h1 style="color: white">Find your <span>Job</span> better and faster</h1>
      <p class="text-black-50 mt-2 content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, dolorem.
      </p>
      <div class="search justify-content-center">
        <input type="search" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
    <div class="air air1"></div>
    <div class="air air2"></div>
    <div class="air air3"></div>
    <div class="air air4"></div>
  </section>

  <div class="con" v-if="false">
    <div class="hello">
      <div class="image">
        <img class="img-fluid" src="@/assets/illustrasiheader.png" alt="" />
      </div>
    </div>

    <div class="containe mx-5">
      <div class="row">
        <div class="col">
          <div class="h">
            <h1 class="content">Find your job better and faster</h1>
            <p class="text-black-50 mt-2 content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
              dolorem.
            </p>
            <button class="btn btn-outline-primary">Join Us</button>
            <button class="btn btn-outline-primary mx-1">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
}
.search input {
  padding: 5px 10px;
  border-radius: 20px 0px 0px 20px;
  border: none;
}
.search button {
  padding: 5px 10px;
  border-radius: 0px 20px 20px 0px;
  border: none;
  background: blue;
  color: #fff;
  transition: 0.3s ease all;
  &:hover {
    background: rgb(12, 0, 59);
    transition: 0.3s ease all;
  }
}
span {
  color: blue;
}
.headd {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
input {
}
section {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #3586ff;
  overflow-x: hidden;
}
section .air {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
  background-size: 1000px 100px;
}
section .air.air1 {
  animation: wave 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}
section .air.air2 {
  animation: wave2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}
section .air.air3 {
  animation: wave 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}
section .air.air4 {
  animation: wave2 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}
@keyframes wave {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
}
@keyframes wave2 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1000px;
  }
}

.image {
  /* width: 800px; */
  height: 180%;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1000;
}

h1 {
  /* overflow-y: hidden; */
}
.h {
  margin-left: 100px;
  margin-top: 160px;
  max-width: 450px;
}

.hello .image {
  overflow-y: hidden;
}
img {
  max-width: 1000px;
  transition: 1s ease all;
}
/* Media Query for smaller screens */
@media (max-width: 1200px) {
  .image {
    transition: 1s ease all;

    /* height: auto; */
    position: absolute;
    top: 0;
    object-fit: cover;
  }
  img {
    width: 800px;
  }
  .h {
    max-width: 400px;
    position: relative;
    right: 100px;
  }
  .img1 {
    width: 150px;
  }
}
@media (max-width: 990px) {
  .image {
    transition: 1s ease all;

    /* height: auto; */
    position: absolute;

    object-fit: cover;
  }
  img {
    width: 700px;
  }
  .h {
    position: relative;
    top: -30px;
  }
  .img1 {
    width: 150px;
  }
}

@media (max-width: 873px) {
  .image {
    transition: 1s ease all;

    /* height: auto; */
    position: absolute;

    object-fit: cover;
  }
  img {
    width: 580px;
  }
  .h {
    position: relative;
    bottom: 30px;
  }
  .img1 {
    width: 150px;
  }
}
@media (max-width: 767px) {
  .image {
    transition: 1s ease all;

    /* height: auto; */
    position: absolute;

    object-fit: cover;
  }
  img {
    width: 540px;
  }
  .h {
    /* margin-bottom: -80px;
    margin-left: 50px; */
    position: relative;
    top: -70px;
  }
  .h h1 {
    /* font-size: 20px; */
    max-width: 320px;
  }
  .h p {
    /* font-size: 14px; */
    max-width: 320px;
    margin-top: -80px;
  }
  .img1 {
    width: 150px;
  }
}
@media (max-width: 680px) {
  .image {
    transition: 1s ease all;

    /* height: auto; */
    position: absolute;

    object-fit: cover;
  }
  img {
    width: 400px;
  }
  .h h1 {
    font-size: 20px;
    max-width: 230px;
  }
  .h p {
    font-size: 12px;
    max-width: 220px;
  }
  .h {
    margin-top: 120px;
  }
  .img1 {
    width: 100px;
  }
}
@media (max-width: 517px) {
  .image {
    transition: 1s ease all;

    /* height: auto; */
    position: absolute;

    object-fit: cover;
  }
  img {
    width: 380px;
  }
  .h h1 {
    font-size: 20px;
    max-width: 220px;
  }
  .h p {
    font-size: 12px;
    max-width: 210px;
  }
  .h {
    margin-top: 80px;
    position: relative;
    right: 130px;
  }
  .img1 {
    width: 100px;
  }
}

h1 {
  color: rgb(0, 106, 255);
}

@media (max-width: 417px) {
  .image {
    transition: 1s ease all;

    /* height: auto; */
    position: absolute;

    object-fit: cover;
  }
  img {
    width: 300px;
  }
  .h h1 {
    font-size: 20px;
    max-width: 230px;
  }
  .h p {
    font-size: 12px;
    max-width: 20 0px;
  }
  .h {
    /* margin-top: 90px;
    margin-right: 10px; */
    position: relative;
    right: 130px;
  }
  .img1 {
    width: 150px;
  }
}
@media screen and (max-width: 500px) {
  .img1 {
    width: 80px;
  }
}
</style>
