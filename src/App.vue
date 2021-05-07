<template>
  <router-view />
</template>

<style lang="scss">
@import "./scss/styles";
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0a0a0a;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
