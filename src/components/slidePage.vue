<template>
  <div class="parent">
    <div class="content text-center mt-3">
      <h1 data-aos="fade-up" data-aos-duration="1000">Come On, Join With Us</h1>
      <p data-aos="fade-up" data-aos-duration="1500" class="text-black-50 mt-5">
        Lorem ipsum dolor sit amet.
      </p>
    </div>

    <Splide class="mt-5" :options="options" aria-label="My Favorite Images">
      <SplideSlide>
        <div class="cardd">
          <div class="card-image">
            <img class="img-fluid" src="@/assets/per1.png" alt="" />
          </div>
          <div class="star">
            <ul>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
            </ul>
          </div>
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nesciunt?
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="cardd">
          <div class="card-image">
            <img class="img-fluid" src="@/assets/per2.png" alt="" />
          </div>
          <div class="star">
            <ul>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
            </ul>
          </div>
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nesciunt?
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="cardd">
          <div class="card-image">
            <img class="img-fluid" src="@/assets/per3.png" alt="" />
          </div>
          <div class="star">
            <ul>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
            </ul>
          </div>
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nesciunt?
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="cardd">
          <div class="card-image">
            <img class="img-fluid" src="@/assets/per2.png" alt="" />
          </div>
          <div class="star">
            <ul>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
            </ul>
          </div>
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nesciunt?
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="nono">
        <div class="cardd">
          <div class="card-image">
            <img class="img-fluid" src="@/assets/per1.png" alt="" />
          </div>
          <div class="star">
            <ul>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
            </ul>
          </div>
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nesciunt?
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
export default {
  setup() {
    const options = {
      type: "loop",
      rewind: true,
      gap: "-4rem",
      // perPage: 2,
      mediaQuery: "min",
      breakpoints: {
        1000: {
          perPage: 3,
        },
        800: {
          perPage: 2,
        },
      },
      autoplay: true,
      fixedWidth: 0,
    };

    return { options };
  },
};
</script>

<style scoped>
.parent {
  margin-top: 150px;
}
.nono {
  /* margin: 10px 0; */
}
.star ul {
  list-style: none;
}
.star ul li {
  display: inline-block;
  margin: 0 5px;
  position: relative;
  left: -10px;
  color: orange;
}
.card-image {
  width: 120px;
  margin: 0 auto;
}
img {
}
.cardd {
  margin: 10px 60px;
  text-align: center;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  /* padding: 10px; */
  border-radius: 15px;
  height: 240px;
}
.splide__slide img {
  width: 100%;
  height: auto;
}
.co {
  margin-top: 100px;
  overflow: hidden;
}
.middle {
  width: 700px;
  /* position: relative;
  text-align: center; */
}
.mmm {
  align-items: center;
  /* position: absolute; */
}
h1 {
  color: rgb(18, 45, 90);
}
</style>
