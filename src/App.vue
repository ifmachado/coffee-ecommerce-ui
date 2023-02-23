<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin">Admin</router-link>

  </nav>
  <router-view
    :baseURL="baseURL"
    :categories="categories"
    :products="products">
  </router-view>
</template>

<script>
import axios from 'axios';

export default{
  data() {
    return {
      baseURL : "http://localhost:8080",
      products: [],
      categories: []
    }
  },

  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios.get( `${this.baseURL}/category/list/`)
       .then(res => this.categories = res.data)
       .catch(err => console.log(err))

      //api call to get product
      await axios.get( `${this.baseURL}/product/`)
       .then(res => this.products = res.data)
       .catch(err => console.log(err))

    }

    

  },
  mounted() {
    this.fetchData();
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
