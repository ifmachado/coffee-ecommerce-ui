<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Category</h4>
        <router-link :to="{name :'AddCategory'}">
      <button class="btn" style="float:right">Add Category</button>
        </router-link>       
       </div>

      <!-- //<div>{{ categories }}</div> -->
    </div>

    <div class="row">
      <div v-for="category of categories" 
      :key="category.id" 
      class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
      <CategoryBox :category="category"></CategoryBox>
    </div>
    </div>
 </div>
</template>
<script>
//import AddCategory from "./AddCategory.vue";

import CategoryBox from '../../components/Category/CategoryBox.vue';
//import { getEnabledCategories } from 'trace_events';
export default {
name: "MyCategory",
props : ["categories"],
components: {CategoryBox},

  data(){
       return {
          baseURL: "http://localhost:8080",
      };
   },
   methods: {
   },
   mounted() {
   }

};
</script>

<style scoped></style>