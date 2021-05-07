<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" />
          </div>
          <div class="form-group mt-3">
            <label>Username</label>
            <input type="text" class="form-control" />
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
          <router-link :to="{ name: 'profileInterests' }"
            ><button type="submit" class="mt-4 btn btn-block btn-primary">
              SIGN UP
            </button></router-link
          >
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

a {
  text-decoration: none;
}

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
</style>
