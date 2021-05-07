<template>
  <div class="">
    <div class="container">
      <div class="row Banner">
        <div class="col-12 p-0 mb-3">
          <div class="top-link mt-3 ml-3 mr-3 d-flex justify-content-between">
            <div>
              <p @click="$router.back()">
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
              <h6>Trip Information</h6>
            </div>
            <div></div>
          </div>
          <div class="ml-3 mr-3 mt-5">
            <p class="pt-1">
              I want to go to...
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="mb-0">Kakamega Forest</h3>
              <div>
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 16 16"
                  class="bi bi-x"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 container">
        <form class="container">
          <div class="form-group row d-flex align-items-center borderBottom">
            <label
              for="colFormLabelSm"
              class="col-1 col-form-label col-form-label"
              ><svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-calendar-week"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                />
                <path
                  d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                /></svg
            ></label>
            <div class="pl-1 col-11">
              <input
                type="text"
                class="form-control form-control"
                id="colFormLabelSm"
                placeholder="Dates"
              />
            </div>
          </div>
          <div
            class="form-group row mt-4 d-flex align-items-center borderBottom"
          >
            <label
              for="colFormLabelSm"
              class="col-1 col-form-label col-form-label"
              ><svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-wallet2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
                /></svg
            ></label>
            <div class="pl-1 col-11">
              <input
                type="text"
                class="form-control form-control"
                id="colFormLabelSm"
                placeholder="Budget per day per person"
              />
            </div>
          </div>
          <div
            class="form-group row mt-4 d-flex align-items-center borderBottom"
          >
            <label
              for="colFormLabelSm"
              class="col-1 col-form-label col-form-label"
              ><svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-heart"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                /></svg
            ></label>
            <div class="pl-1 col-11">
              <input
                type="text"
                class="form-control form-control"
                id="colFormLabelSm"
                placeholder="Choose your interest"
              />
            </div>
          </div>
          <div
            class="form-group row mt-4 d-flex align-items-center borderBottom"
          >
            <div class="col-12">
              <input
                type="text"
                class="form-control form-control"
                id="colFormLabelSm"
                placeholder="Trip Name"
              />
            </div>
          </div>
          <div class="col-12 mt-4">
            <p>Travel with?</p>
            <div class="row">
              <div class="col-6">
                <button class="btn btn-lg btn-primary w-100">Solo</button>
              </div>
              <div class="col-6">
                <button class="btn btn-lg btn-primary w-100">Party</button>
              </div>
            </div>
          </div>
          <router-link :to="{ name: 'myTrips' }"
            ><button
              type="submit"
              class="mt-4 mb-4 btn btn-lg btn-primary w-100"
            >
              START MY TRIP
            </button></router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
.Banner {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../../assets/david-clode-xFqH9peAlmw-unsplash.jpg");
  height: 33vh;
  background-position: center;
  background-size: cover;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.5) 0 1px 0;
  letter-spacing: 1px;
  & h3 {
    font-weight: 800;
    font-size: 21px;
  }
  & p {
    font-size: 12px;
    font-weight: 600;
  }
}
.top-link a {
  color: #fff;
}
a {
  text-decoration: none;
}
input {
  height: 28px;
  display: block;
  border: none;
  border-radius: 0;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: rgb(0, 0, 0);
  padding: 0;
  line-height: 14px;
  font-size: 14px;
  font-weight: 900;
}
.form-control {
  min-height: auto;
}
.form-control:focus {
  background: #fff;
  box-shadow: none;
}
.btn-primary {
  background: #0037cf;
  font-weight: 700;
  font-size: 14px;
}
.borderBottom {
  border-bottom: 1.5px solid #ccc;
  padding-bottom: 10px;
}
</style>
