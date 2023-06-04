<template>
  <section id="contact">
    <div class="container">
      <h1 class="text-center h11">
        Contact Us
        <p class="display-6 text-black-50 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus?
        </p>
      </h1>
      <div class="row mt-5">
        <div class="col display-6">
          <h1 style="color: white">GET IN TOUCH</h1>
          <p style="color: white" class="pp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          </p>
        </div>

        <div class="col">
          <form action="">
            <div class="one">
              <label for="">User Name</label>
              <input class="mt-1" type="text" placeholder="Your Name" />
            </div>
            <div class="one">
              <label for="">Email Address</label>
              <input class="mt-1" type="text" placeholder="Your Email" />
            </div>
            <div class="one">
              <label for="">Massage</label>
              <textarea
                class="mt-1"
                name=""
                id=""
                cols="25"
                rows=""
                placeholder="Your Massage"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  align-items: center;
}
.one {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
button {
  border-radius: 20px;
  padding: 5px 20px;
  margin-top: 10px;
  color: white;
  background: blue;
  border: none;
  margin-left: 10px;
}
button:hover {
  background: rgb(66, 66, 252);
}
.row {
  background: rgb(0, 95, 255);
  background: linear-gradient(
    9deg,
    rgba(0, 95, 255, 1) 0%,
    rgba(97, 150, 237, 1) 0%,
    rgba(45, 121, 249, 1) 6%,
    rgba(91, 147, 241, 1) 15%,
    rgba(56, 120, 224, 1) 60%,
    rgba(46, 110, 212, 1) 68%,
    rgba(18, 77, 172, 1) 99%,
    rgba(40, 103, 203, 1) 100%
  );
  padding: 50px 20px;
  border-radius: 0px 30px 0 30px;
}
.col {
  margin: 0 50px;
}
input,
textarea {
  border-radius: 10px;
  padding: 5px;
}
textarea:focus,
input:focus {
  box-shadow: 0 10px 10px rgb(66, 66, 252);
}

input,
select,
textarea {
  color: #000;
  border: 1px solid rgb(26, 26, 255);
}
#section {
  display: static;
}
.h11 {
  color: rgb(18, 45, 90);
}
@media screen and(max-width:1000px) {
  input {
    width: 100px;
  }
}
.pp {
  width: 300px;
  font-size: 20px;
}
</style>
