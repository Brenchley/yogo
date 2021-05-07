<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="d-none form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <router-link :to="{ name: 'discover' }"
            ><button type="submit" class="mt-4 btn btn-block btn-primary">
              SIGN IN
            </button></router-link
          >

          <div class="col-12 text-center mt-3">
            <p class="font-weight-bold text-muted mb-1" style="font-size:12px;">
              or sing in with
            </p>
            <div class="social-btn">
              <router-link :to="{ name: 'discover' }"
                ><img src="@/assets/facebook.svg" class="mr-3"
              /></router-link>
              <router-link :to="{ name: 'discover' }"
                ><img src="@/assets/google.svg" class="p-2"
              /></router-link>
            </div>
          </div>
        </form>
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
@import "../../scss/styles";

/* LABEL ======================================= */
label {
  color: rgb(138, 138, 138);
  padding: 0;
  line-height: 14px;
  font-size: 14px;
  font-weight: 600;
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
.social-btn img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 7px;
  background: #f5f5f5;
}
</style>
