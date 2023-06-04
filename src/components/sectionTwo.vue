<template>
  <div class="perant text-center">
    <div class="container">
      <div class="row">
        <div data-aos="fade-up" data-aos-duration="1000" class="col-md-6">
          <img
            class="img-fluid im"
            src="@/assets/one.png"
            alt=""
            style="object-fit: contain; height: 100%; width: 100%"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          class="col-md-6 text-start hh mt-5"
        >
          <h1>Find Your passion and achieve success</h1>
          <p class="text-black-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            earum illo sapiente tempora aut praesentium quidem exercitationem
            accusamus magnam qui.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="perant text-center mt-5">
    <div class="container">
      <div class="row">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          class="col-md-6 text-start hh mt-5"
        >
          <h1>Million of job, find the one that right for you</h1>
          <p class="text-black-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            earum illo sapiente tempora aut praesentium quidem exercitationem
            accusamus magnam qui.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          class="col-md-6"
        >
          <img class="img-fluid" src="@/assets/two.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <job-section></job-section>
</template>

<script>
import JobSection from "./jobSection.vue";
export default {
  components: { JobSection },
};
</script>

<style scoped>
.im {
  height: 100%;
}
.row {
  align-items: center;
  justify-content: center;
}
* {
  overflow: hidden;
}
.perant {
  position: relative;
  top: 600px;
}
.im {
  margin-top: 40px;
}
</style>
