<template>
    <div class="card h-100 w-100">
      <div>
          <img class="card-img-top" :src="category.imageURL" alt="Card image cap"/>
      </div>
      <div class="card-body">
          ><h5 class="card-title">{{ category.categoryName }}</h5>
          <p class="card-text font-italic">
              {{ category.description }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>
  </template>
  <script>
  export default {
    name: "CategoryBox",
    props: ["category"],
    methods: {},
  };
  </script>
  
  