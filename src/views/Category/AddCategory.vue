<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Add Category</h4>
        </div>
      </div>
 
      <div class="row">
        <div class="col-3"></div>
        <div class="col-md-6 px-5 px-md-0">
         <form>
           <div class="form-group">
             <label> Name</label>
             <input type="text" class="form-control" v-model="categoryName" required>
           </div>
           <div class="form-group">
             <label>Description</label>
             <textarea type="text" class="form-control" v-model="description" required ></textarea>
           </div>
           <div class="form-group">
             <label>Image</label>
             <input type="url" class="form-control" v-model="imageURL" required>
           </div>
           <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
         </form>
        </div>
        <div class="col-3"></div>
      </div>
   </div>
 </template>
<script>

const axios = require("axios");
//import swal from 'sweetalert';
const sweetalert = require("sweetalert");
export default {

    data(){
        return{
            categoryName: "", 
            description: "",
            imageURL: "",
        };
    },
    methods:{
        addCategory(){
            console.log(this.categoryName, this.description)
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageURL: this.imageURL,
            };
            const baseURL = "http://localhost:8080";

    axios({
    method: 'post',
    url: `${baseURL}/category/create`,
    data : JSON.stringify(newCategory),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(() => {
    sweetalert({
        text: "Category added successfully",
        icon: "success",
    });
  })
  .catch((err) => {
    console.log(err);
  });
},
},
};
</script>

<style scoped></style>


