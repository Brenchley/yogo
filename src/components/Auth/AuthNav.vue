<template>
  <div class="navigation">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex align-items-center pt-3 pb-3">
          <router-link class="mr-auto navbar-brand" to="/">
            <!-- <img src="@/assets/brand/logo.png" class="" width="100px" /> -->
          </router-link>

          <div class="">
            <router-link class="mr-3" to="/login"
              ><button class="btn btn-transparent">Login</button></router-link
            >
            <router-link class="" to="/register"
              ><button class="btn btn-blue">Join</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// let SELF;
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.navigation {
  background: #fff;
}
.btn-transparent {
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #585858;
  height: 45px;
  width: 94px;
  background: transparent;
}
.btn-blue {
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  height: 45px;
  width: 94px;
  background: #34529e;
}
</style>
