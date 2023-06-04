<template>
  <div class="image-footer"></div>
  <div>
    <section id="job">
      <div class="parent text-center">
        <div class="container text-center mt-5">
          <h1 data-aos="fade-up" data-aos-duration="1000" class="">
            Browse Jobs By Category
          </h1>
          <div class="leftt"><img src="@/assets/Shape-17.png" alt="" /></div>
          <p data-aos="fade-up" data-aos-duration="1500" class="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            saepe?
          </p>
          <div class="row mt-5 mx-5">
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div
                class="cardd one"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div class="card-image">
                  <img src="@/assets/Shape-3.png" alt="" />
                </div>
                <div class="card-body mt-3">
                  <h5 style="color: rgb(18, 45, 90)">Accounting / Finance</h5>
                  <p>100 open position</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                class="cardd two"
              >
                <div class="card-image">
                  <img src="@/assets/Shape-4.png" alt="" />
                </div>
                <div class="card-body mt-3">
                  <h5>Programmer</h5>
                  <p>100 open position</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div class="cardd" data-aos="zoom-in" data-aos-duration="2000">
                <div class="card-image">
                  <img src="@/assets/Shape-5.png" alt="" />
                </div>
                <div class="card-body mt-3">
                  <h5 style="color: rgb(18, 45, 90)">Accounting / Finance</h5>
                  <p>100 open position</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div class="cardd" data-aos="zoom-in" data-aos-duration="2200">
                <div class="card-image">
                  <img src="@/assets/Shape-6.png" alt="" />
                </div>
                <div class="card-body mt-3">
                  <h5 style="color: rgb(18, 45, 90)">Production / Operation</h5>
                  <p>100 open position</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div class="cardd" data-aos="zoom-in" data-aos-duration="2200">
                <div class="card-image">
                  <img src="@/assets/Shape-3.png" alt="" />
                </div>
                <div class="card-body mt-3">
                  <h5 style="color: rgb(18, 45, 90)">Lorem, ipsum.</h5>
                  <p>1000 open position</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-10">
              <div class="cardd" data-aos="zoom-in" data-aos-duration="2200">
                <div class="card-image">
                  <img src="@/assets/Shape-3.png" alt="" />
                </div>
                <div class="card-body mt-3">
                  <h5 style="color: rgb(18, 45, 90)">Accounting / Finance</h5>
                  <p>1000 open position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cardd {
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(228, 224, 224);
  padding: 20px;
  max-width: 320px;
}
.row {
  justify-content: center;
}
.col-lg-4 {
  margin-bottom: 40px;
}

.two {
  color: white;
  background: rgb(27, 63, 121);
  background: linear-gradient(
    9deg,
    rgba(27, 63, 121, 1) 6%,
    rgba(98, 147, 227, 1) 100%
  );
}
h1 {
  color: rgb(18, 45, 90);
}
.leftt {
  position: absolute;
  right: 0px;
  top: 1150px;
  max-width: 100%;
}
.parent {
  overflow-x: hidden;
  margin-top: -200px;
}
@media screen and(max-width:600px) {
  .leftt {
    position: absolute;
    right: 0px;
    top: 1000px;
    max-width: 10%;
  }
}
#job {
  margin-top: 1000px;
}
</style>
