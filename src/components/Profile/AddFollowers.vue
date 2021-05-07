<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-0 mb-3">
        <div class="top-link mt-3 ml-3 mr-3 d-flex justify-content-between">
          <div>
            <p>Step 2/2</p>
          </div>
          <div>
            <router-link :to="{ name: 'discover' }"><p>Skip</p></router-link>
          </div>
        </div>
      </div>
      <div class="col-md-8 offset-md-2 text-center">
        <h6>Add follow travel lovers who have interest like you</h6>
      </div>
      <div class="followers mt-4">
        <div class="mt-4 d-flex justify-content-between">
          <div class="profile">
            <div class="d-flex justify-content-between">
              <img
                src="@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
                class="img-responsive"
              />
              <div class="ml-2">
                <p class="">Eve Wanjiku</p>
                <small class="text-muted">been to 234 places</small>
              </div>
            </div>
          </div>
          <div class="btn btn-secondary">Follow</div>
        </div>
        <div class="mt-4 d-flex justify-content-between">
          <div class="profile">
            <div class="d-flex justify-content-between">
              <img src="@/assets/112.jpeg" class="img-responsive" />
              <div class="ml-2">
                <p class="">Steph Capella</p>
                <small class="text-muted">been to 234 places</small>
              </div>
            </div>
          </div>
          <div class="btn btn-secondary">Follow</div>
        </div>
        <div class="mt-4 d-flex justify-content-between">
          <div class="profile">
            <div class="d-flex justify-content-between">
              <img
                src="@/assets/bradford-zak-RKrHmXNrSKY-unsplash.jpg"
                class="img-responsive"
              />
              <div class="ml-2">
                <p class="">Tom Mbega</p>
                <small class="text-muted">been to 34 places</small>
              </div>
            </div>
          </div>
          <div class="btn btn-secondary">Follow</div>
        </div>
        <div class=" mt-5">
          <router-link :to="{ name: 'discover' }"
            ><button type="submit" class="btn btn-block btn-primary">
              COMPLETE
            </button></router-link
          >
        </div>
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
a {
  text-decoration: none;
  color: rgb(141, 141, 141);
}
.top-link {
  font-weight: 800;
  font-size: 13px;
  color: rgb(141, 141, 141);
}
.btn-secondary {
  padding: 8px;
  font-size: 13px;
  width: 105px;
  height: 33px !important;
}
.profile {
  & img {
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
  }
  & p {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: -5px;
  }
  & small {
    font-size: 11px;
  }
}
label {
  margin-bottom: 0 !important;
}

.block-check {
  display: block;
  position: relative;
  height: 100%;

  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn-primary {
  background: #0037cf;
  font-weight: 700;
  font-size: 14px;
}
</style>
