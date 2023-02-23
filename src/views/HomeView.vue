<template>
    <!-- Header-->
    <header class="bg-dark py-5 bg-cover" id="background-div">
        <div class="container px-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center my-5">
                        <h1 class="display-5 fw-bolder text-white mb-2">Java Coffee Club</h1>
                        <p class="lead text-white mb-4">Welcome to our online coffee store, where you can discover an exquisite range of premium coffee products sourced from around the world.</p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                          <router-link to="/category">
                            <a class="btn btn-outline-light btn-lg px-4">Shop By Category</a>
                          </router-link>
                          <router-link to="/product">
                            <a class="btn btn-outline-light btn-lg px-4">Shop All Products</a>
                          </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="py-5 border-bottom" id="features">
      <h2 class="pt-3"> Get Started with Us</h2>
        <div class="container px-5 my-5">
            <div class="row gx-5">
              <div v-for="index in this.categorySize" :key="index"
              class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
              <CategoryBox :category="categories[index-1]" />
              </div>
            </div>
        </div>
    </section>

    <!-- <section class="py-5 border-bottom" id="features">
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3"> Top Products</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.productSize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="products[index-1]" />
        </div>
      </div>
    </div>
    </section> -->
</template>

<script>
import CategoryBox from '@/components/Category/CategoryBox.vue';
// import ProductBox from '@/components/Product/ProductBox.vue';
export default {
  name: "HomeView",
  components: {CategoryBox},
  props: ["categories", "products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0
    }
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length );
    this.productSize = Math.min(8, this.products.length);
  }
};
</script>
<style>
  .page-holder {
    min-height: 100vh;
  }

  #background-div {
    background: url("../assets/display.png");
  }
  
  .bg-cover{
    background-size: cover !important;
  }

  #heading {
    font-weight: 400;
  }

  .card {
  border: none;
}
</style>



