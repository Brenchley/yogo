<template>
  <div class="container">
    <div class="row mt-4 ">
      <div class="top-tab d-flex justify-content-between">
        <div class="">
          <h5>Ongoing Trip</h5>
        </div>
      </div>
    </div>
    <div class="row cards d-block">
      <router-link :to="{ name: 'givenTrip' }"
        ><div class="cardy pl-2 pr-1">
          <div class="cardbox shadow-sm bg-white ">
            <div class="cardbox-item p-3">
              <img
                class="img-fluid location-img"
                src="@/assets/sneha-uDL7x5SU9bw-unsplash.jpg"
                alt="Image"
              />
            </div>
            <!--/ cardbox-item -->
            <div class="pl-3 pr-3 cardbox-base">
              <div class="place-info d-flex justify-content-between">
                <h6 class="mb-0">Maasai Mara Drive</h6>
                <p class="mb-1">
                  <svg
                    width="0.9em"
                    height="0.9em"
                    viewBox="0 0 16 16"
                    class="bi bi-geo-alt-fill mb-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                  Narok
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="date">
                  <p class="mb-0">15 Nov - 20 Nov</p>
                </div>
                <div class="likes">
                  <ul class="pl-2 mb-2">
                    <li>
                      <a href="#"
                        ><img
                          src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg"
                          class="img-fluid rounded-circle"
                          alt="User"
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg"
                          class="img-fluid rounded-circle"
                          alt="User"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--/ cardbox-base -->
          </div>
          <!--/ cardbox -->
        </div></router-link
      >
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
a {
  text-decoration: none;
  color: inherit;
}
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

// ----------- */
/* Media Section
---------------------------------- */
.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.media .mr-3 {
  margin-right: 1rem !important;
}
.media img {
  width: 48px !important;
  height: 48px !important;
  padding: 2px;
  border: 2px solid #f4f4f4;
}
.media-body {
  -ms-flex: 1;
  flex: 1;
  padding: 0.4rem !important;
}
.media-body p {
  font-family: "Rokkitt", serif;
  font-weight: 500 !important;
  font-size: 14px;
  color: #88898a;
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
  height: 30vh;
  width: 100%;
  border-radius: 7px;
  transition: 0.3s;
}
.date p {
  font-weight: 700;
  font-size: 12px;
  color: #188de2;
}
.place-info {
  & h6 {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.3px;
  }
  & p {
    font-weight: 700;
    font-size: 12px;
    color: #188de2;
  }
}
</style>
