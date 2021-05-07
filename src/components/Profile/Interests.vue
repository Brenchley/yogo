<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-0 mb-3">
        <div class="top-link mt-3 ml-3 mr-3 d-flex justify-content-between">
          <div>
            <p>Step 1/2</p>
          </div>
          <div>
            <router-link :to="{ name: 'profileFollowers' }"
              ><p>Skip</p></router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-8 offset-md-2 text-center">
        <h6>Hi Wanyonyi, what do you love most about travelling?</h6>
        <small class="text-muted">Select 3 or more interests</small>
      </div>
      <div class="row mt-4">
        <div class="mt-1 col-6 p-2">
          <div class="gallery-card">
            <div class="gallery-card-body">
              <label class="block-check">
                <img
                  src="@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
                  class="img-responsive"
                />
                <div href="#" class="image-grid-clickbox"></div>
                <div
                  class="checkbox-grid d-flex justify-content-between align-items-center"
                >
                  <span class="bottom-left interest-title">Food</span>
                  <input class="bottom-right" type="checkbox" />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="mt-1 col-6 p-2">
          <div class="gallery-card">
            <div class="gallery-card-body">
              <label class="block-check">
                <img
                  src="@/assets/kunal-shinde--f0YLss50Bs-unsplash.jpg"
                  class="img-responsive"
                />
                <div href="#" class="image-grid-clickbox"></div>
                <div
                  class="checkbox-grid d-flex justify-content-between align-items-center"
                >
                  <span class="bottom-left interest-title">Nature</span>
                  <input class="bottom-right" type="checkbox" />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="mt-1 col-6 p-2">
          <div class="gallery-card">
            <div class="gallery-card-body">
              <label class="block-check">
                <img
                  src="@/assets/bradford-zak-RKrHmXNrSKY-unsplash.jpg"
                  class="img-responsive"
                />
                <div href="#" class="image-grid-clickbox"></div>
                <div
                  class="checkbox-grid d-flex justify-content-between align-items-center"
                >
                  <span class="bottom-left interest-title">Culture</span>
                  <input class="bottom-right" type="checkbox" />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="mt-1 col-6 p-2">
          <div class="gallery-card">
            <div class="gallery-card-body">
              <label class="block-check">
                <img
                  src="@/assets/sneha-DEBrMzu-D8I-unsplash.jpg"
                  class="img-responsive"
                />
                <div href="#" class="image-grid-clickbox"></div>
                <div
                  class="checkbox-grid d-flex justify-content-between align-items-center"
                >
                  <span class="bottom-left interest-title">Wildlife</span>
                  <input class="bottom-right" type="checkbox" />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class=" mt-5">
          <router-link :to="{ name: 'profileFollowers' }"
            ><button type="submit" class="btn btn-block btn-primary">
              NEXT
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
.interest-title {
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}
.checkbox-grid {
  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
  z-index: 2;
  position: relative;
}
.image-grid-clickbox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
.bottom-left {
  position: absolute;
  bottom: 2px;
  left: 16px;
}
.gallery-card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
  height: 130px;
}
.gallery-card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  height: 100%;
}
.gallery-card img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
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
