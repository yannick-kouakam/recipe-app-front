<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">RECIPE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">Recipes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link disabled" to="#">Disabled</router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0 mr-lg-5">
          <input class="form-control mr-sm-1" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" >Search</button>
        </form>
        <button class="btn btn-outline-primary my-2 my-sm-0 mr-3" >Log In</button>
        <button class="btn btn-outline-danger my-2 my-sm-0 mr-3" >Sign Up</button>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
