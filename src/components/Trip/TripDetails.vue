<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 p-0 mb-3">
          <div class="top-link mt-3 ml-3 mr-3 d-flex align-items-center">
            <div class="mr-5">
              <p @click="$router.back()" class="my-0">
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 16 16"
                  class="bi bi-chevron-left"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </p>
            </div>
            <div>
              <h3 class="mb-0">Trip Details Plan</h3>
            </div>
            <div></div>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="w-80">
            <button class="btn btn-primary">Days Plan</button>
          </div>
          <div>
            <button class="btn btn-primary">Reservations</button>
          </div>
          <div>
            <button class="btn btn-primary">Budget & Expense</button>
          </div>
        </div>
        <div class="mt-4 row scrolling-wrapper">
          <div class="day text-center">
            <h3 class="my-1">Day 1</h3>
            <p class="text-muted mb-1">November 09,2020</p>
          </div>
          <div class="day text-center">
            <h3 class="my-1">Day 2</h3>
            <p class="text-muted mb-1">November 10,2020</p>
          </div>
          <div class="day text-center">
            <h3 class="my-1">Day 3</h3>
            <p class="text-muted mb-1">November 11,2020</p>
          </div>
        </div>

        <div class="col-12">
          <ul class="my-3 timeline">
            <li>
              <div class="timeline-badge">
                <span>1</span>
              </div>
              <div class="timeline-panel">
                <h3 class="mb-0">8:30</h3>
                <div class="timeline-item card mb-1" style="max-width: 100%;">
                  <div class="row g-0">
                    <div class="col-4 timeline-img">
                      <img
                        src="@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
                        alt="..."
                      />
                    </div>
                    <div class="col-8">
                      <div class="card-body">
                        <h3 class="mb-4">Roro's Restaurant</h3>
                        <h6 class="mb-1 float-right text-primary">1hrs</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-actions d-flex justify-content-end">
                  <span class="mr-3">
                    <img src="@/assets/icons/wall-clock.png" width="15" />
                  </span>
                  <span class="mr-3">
                    <img src="@/assets/icons/hourglass.png" width="15" />
                  </span>
                  <span class="mr-3">
                    <img src="@/assets/icons/dollar.png" width="15" />
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge warning">
                <span>2</span>
              </div>
              <div class="timeline-panel">
                <h3 class="mb-0">11:30</h3>
                <div class="timeline-body">
                  <div class="timeline-item card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                      <div class="col-4 timeline-img">
                        <img
                          src="@/assets/david-clode-wOpm2alT6qU-unsplash.jpg"
                          alt="..."
                        />
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h3 class="mb-4">Girraffe Center</h3>
                          <h6 class="mb-1 float-right text-primary">3hrs</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-actions d-flex justify-content-end">
                  <span class="mr-3">
                    <img src="@/assets/icons/wall-clock.png" width="15" />
                  </span>
                  <span class="mr-3">
                    <img src="@/assets/icons/hourglass.png" width="15" />
                  </span>
                  <span class="mr-3">
                    <img src="@/assets/icons/dollar.png" width="15" />
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge warning">
                <span>3</span>
              </div>
              <div class="timeline-panel">
                <div class="timeline-body">
                  <div class="timeline-item card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                      <div class="col-4 timeline-img">
                        <img
                          src="@/assets/aung-nyi-Te6wiGYQ_WQ-unsplash.jpg"
                          alt="..."
                        />
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h3 class="mb-4">Kitengela Glass House</h3>
                          <h6 class="mb-1 float-right text-primary">
                            2hrs 30mins
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-actions d-flex justify-content-end">
                  <span class="mr-3">
                    <img src="@/assets/icons/wall-clock.png" width="15" />
                  </span>
                  <span class="mr-3">
                    <img src="@/assets/icons/hourglass.png" width="15" />
                  </span>
                  <span class="mr-3">
                    <img src="@/assets/icons/dollar.png" width="15" />
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge warning">
                <!-- <span>3</span> -->
              </div>
              <div class="timeline-panel">
                <div class="my-3 new-attraction text-center">
                  <h3 class="my-4">+ Add new attraction</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <swipeable-bottom-sheet ref="swipeableBottomSheet">
      <h1>Lorem Ipsum</h1>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </swipeable-bottom-sheet>
  </div>
</template>
<script>
import { SwipeableBottomSheet } from "vue-swipeable-bottom-sheet";
export default {
  components: {SwipeableBottomSheet},
  props: {
    msg: String
  },
  data() {
    return {
      longText:
        "Kakamega Forest is a tropical rainforest situated in the Kakamega and Nandi County of Kenya, northwest of the capital Nairobi, and near to the border with Uganda. It is Kenya's only tropical rainforest and is said to be Kenya's last remnant of the ancient Guineo-Congolian rainforest that once spanned the continent",
      readMoreActivated: false
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
h6 {
  font-size: 11px;
  font-weight: 700;
}
.new-attraction {
  border: 2px dashed #999;
  border-radius: 7px;
}
.top-link {
  & h3 {
    color: #000;
    text-shadow: none;
    font-weight: 800;
    font-size: 19px;
  }
}
.btn-primary {
  background: #0037cf;
  font-weight: 700;
  font-size: 10px;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  & .day {
    display: inline-block;
    white-space: normal;
    margin: 0 1px;
    vertical-align: top;
    width: 30%;

    & h3 {
      font-weight: 700;
      font-size: 16px;
    }
    & p {
      font-weight: 700;
      font-size: 9px;
    }
  }
}

.timeline {
  list-style: none;
  padding: 0;
  position: relative;
}
.timeline-panel h3 {
  font-weight: 700;
  font-size: 13px;
}
.timeline-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 7px 0 0 7px;
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  border-left: 2px dashed #999999;
  left: 50%;
  margin-left: -1.5px;
  margin-top: 30px;
  margin-bottom: 5%;
}

.timeline > li {
  margin-bottom: 20px;
  position: relative;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li > .timeline-panel {
  position: relative;
}
.timeline-item {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  border-radius: 7px;
}

.timeline > li > .timeline-badge {
  & span {
    color: #fff;
    font-weight: 800;
  }
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  left: 50%;
  margin-left: -25px;
  background-color: #000;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

ul.timeline:before {
  left: 25px;
}

ul.timeline > li > .timeline-panel {
  width: calc(100% - 15vw);
  width: -moz-calc(100% - 15vw);
  width: -webkit-calc(100% - 15vw);
}

ul.timeline > li > .timeline-badge {
  left: 15px;
  margin-left: 0;
  margin-top: 30px;
  // top: 16px;
}

ul.timeline > li > .timeline-panel {
  float: right;
}
</style>
