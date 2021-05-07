<template>
  <div class="container">
    <div class="row mt-4 ">
      <div class="top-tab d-flex justify-content-between">
        <div class="">
          <h5>Past Trip</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="cardbox shadow-sm bg-white ">
          <div class="cardbox-item">
            <img
              class="img-fluid location-img"
              src="@/assets/magdalena-kula-manchee-68D2-Aojf1U-unsplash.jpg"
              alt="Image"
            />
          </div>
          <!--/ cardbox-item -->
          <div class="pl-2 pr-2 cardbox-base">
            <div class="place-info">
              <h6 class="mb-1 mt-1">Lake Magadi 2020</h6>
              <p class="text-muted mb-1">
                3 months ago
              </p>
            </div>
          </div>
          <!--/ cardbox-base -->
        </div>
        <!--/ cardbox -->
      </div>
      <div class="col-6">
        <div class="cardbox shadow-sm bg-white ">
          <div class="cardbox-item">
            <img
              class="img-fluid location-img"
              src="@/assets/harshil-gudka-CcyP9DlIdrM-unsplash.jpg"
              alt="Image"
            />
          </div>
          <!--/ cardbox-item -->
          <div class="pl-2 pr-2 cardbox-base">
            <div class="place-info">
              <h6 class="mb-1 mt-1">Lamu 2020</h6>
              <p class="text-muted mb-1">
                4 months ago
              </p>
            </div>
          </div>
          <!--/ cardbox-base -->
        </div>
        <!--/ cardbox -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.top-tab {
  & h5 {
    font-weight: 800;
    font-size: 15px;
    margin-bottom: 10px;
  }
}
.price {
  & span {
    font-size: 13px;
    font-weight: 800;
  }
}
.cardbox {
  border-radius: 7px;
  margin-bottom: 20px;
  padding: 0px !important;
}

/* ------------------------------- */
/* Cardbox Item
---------------------------------- */
.cardbox .cardbox-item {
  position: relative;
  display: block;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
.fw {
  width: 100% !important;
  height: auto;
}
/* ------------------------------- */
/* Cardbox Base
---------------------------------- */
.cardbox-base {
  border-bottom: 2px solid #f4f4f4;
}
.cardbox-base li {
  list-style: none;
  margin: 0px -3px 0px -9px !important;
  padding: 0px 0px 0px 0px !important;
  display: inline-block;
}

.cardbox-base li a i {
  position: relative;
  font-size: 16px;
  color: #8d8d8d;
}
.cardbox-base li a span {
  font-size: 12px;
  color: #8d8d8d;
  margin-left: 20px;
  position: relative;
}
.cardbox-base li a em {
  font-size: 14px;
  color: #8d8d8d;
  position: relative;
  top: 3px;
}
.cardbox-base li a img {
  width: 25px;
  height: 25px;
  margin: 0px !important;
  border: 2px solid #fff;
}
.location-img {
  object-fit: cover;
  height: 25vh;
  width: 100%;
  transition: 0.3s;
  border-radius: 7px 7px 0 0;
}
.date p {
  font-weight: 700;
  font-size: 13px;
  color: #188de2;
}
.place-info {
  & h6 {
    font-weight: 800;
    font-size: 12px;
  }
  & p {
    font-weight: 700;
    font-size: 9px;
  }
}
</style>
