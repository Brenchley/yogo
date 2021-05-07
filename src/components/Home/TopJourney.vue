<template>
  <div class="container">
    <div class="row mt-4 ">
      <div class="top-tab d-flex justify-content-between">
        <div class="">
          <h5>Top Journeys</h5>
        </div>
        <div class="">
          <router-link to="/"
            ><p class="text-muted">
              See All
              <svg
                width="0.8em"
                height="0.8em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-right mb-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg></p
          ></router-link>
        </div>
      </div>
    </div>
    <div class="row cards d-block scrolling-wrapper">
      <div class="cardy pl-2 pr-1">
        <div class="cardbox shadow-sm bg-white">
          <div class="cardbox-item">
            <div class="row d-flex align-items-stretch" style="height:12rem;">
              <div class="col-6 pr-1" style="max-height:12rem;">
                <img
                  class="img-fluid location-img"
                  src="@/assets/sneha-uDL7x5SU9bw-unsplash.jpg"
                  alt="Image"
                />
              </div>
              <div class="col-6 pl-0" style="height:12rem;">
                <div class="container-fluid" style="height:100%;">
                  <div
                    class="row d-flex align-items-stretch"
                    style="height:100%;"
                  >
                    <div class="col-12 p-0" style="height:50%">
                      <img
                        class="img-fluid location-img"
                        src="@/assets/brian-mcmahon-PTXrQVFNIAk-unsplash.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="col-12" style="height:50%">
                      <div
                        class="row d-flex align-items-stretch pt-1"
                        style="height:100%"
                      >
                        <div class="col-6 pl-0 pr-1" style="height:100%">
                          <img
                            class="img-fluid location-img"
                            src="@/assets/sneha-8wH5ug37nbk-unsplash.jpg"
                            alt="Image"
                          />
                        </div>
                        <div class="col-6 p-0" style="height:100%">
                          <img
                            class="img-fluid location-img"
                            src="@/assets/sneha-yuCIZAIEVJ8-unsplash.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/ cardbox-item -->
          <div class="pl-2 pr-2 mt-2 cardbox-base">
            <div class="place-info d-flex justify-content-between">
              <h6 class="mb-0">Lake Magadi</h6>
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
                Magadi
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="price">
                <button class="btn btn-danger">Ksh 30,000</button>
                <span class="ml-2 text-muted">5 days</span>
              </div>
              <div class="bookmark"></div>
            </div>
            <hr class="mb-2 mt-2" />
            <div class="d-flex justify-content-between">
              <div class="reaction-icons">
                <i class="far fa-heart"></i>
                <i class="ml-3 fas fa-share-alt"></i>
              </div>
              <div class="bookmark">
                <i class="far fa-bookmark"></i>
              </div>
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
                <li>
                  <a><span>242 Likes</span></a>
                </li>
              </ul>
            </div>
          </div>
          <!--/ cardbox-base -->
        </div>
        <!--/ cardbox -->
      </div>
      <div class="cardy pl-2 pr-1">
        <div class="cardbox shadow-sm bg-white">
          <div class="cardbox-item">
            <div class="row d-flex align-items-stretch" style="height:12rem;">
              <div class="col-6 pr-1" style="max-height:12rem;">
                <img
                  class="img-fluid location-img"
                  src="@/assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg"
                  alt="Image"
                />
              </div>
              <div class="col-6 pl-0" style="height:12rem;">
                <div class="container-fluid" style="height:100%;">
                  <div
                    class="row d-flex align-items-stretch"
                    style="height:100%;"
                  >
                    <div class="col-12 p-0" style="height:50%">
                      <img
                        class="img-fluid location-img"
                        src="@/assets/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="col-12" style="height:50%">
                      <div
                        class="row d-flex align-items-stretch pt-1"
                        style="height:100%"
                      >
                        <div class="col-6 pl-0 pr-1" style="height:100%">
                          <img
                            class="img-fluid location-img"
                            src="@/assets/thomas-tucker-MNtag_eXMKw-unsplash.jpg"
                            alt="Image"
                          />
                        </div>
                        <div class="col-6 p-0" style="height:100%">
                          <img
                            class="img-fluid location-img"
                            src="@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/ cardbox-item -->
          <div class="pl-2 pr-2 mt-2 cardbox-base">
            <div class="place-info d-flex justify-content-between">
              <h6 class="mb-0">K1 Club Food Fest</h6>
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
                Nairobi
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="price">
                <button class="btn btn-danger">Ksh 30,000</button>
                <span class="ml-2 text-muted">5 days</span>
              </div>
              <div class="bookmark"></div>
            </div>
            <hr class="mb-2 mt-2" />
            <div class="d-flex justify-content-between">
              <div class="reaction-icons">
                <i class="far fa-heart"></i>
                <i class="ml-3 fas fa-share-alt"></i>
              </div>
              <div class="bookmark">
                <i class="far fa-bookmark"></i>
              </div>
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
                <li>
                  <a><span>242 Likes</span></a>
                </li>
              </ul>
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
  & a,
  p {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    text-decoration: none;
  }
}
.price {
  & .btn-danger {
    height: 27px;
    padding: 5px;
    font-size: 11px;
    font-weight: 800;
  }
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
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  & .cardy {
    display: inline-block;
    white-space: normal;
    margin: 0 1px;
    vertical-align: top;
    width: 90%;
  }
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
