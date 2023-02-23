<template>
    <div class="container">
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signin-div" class="flex-item border">
                    <h2 class="pt-4 pl-4">Sign-In</h2>


                    <form @submit="signin" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="email" type="email" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="password" type="password" class="form-control"  required />
                        </div>   <small class="form-text text-muted">By continuing, you agree to our Conditions of Use and
                            Privacy Notice.</small>
                     
                        <button type="submit" class="btn btn-primary mt-2 py-0">
                            Continue
                            <!-- <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
                                <span class="sr-only">Loading...</span>
                            </div> -->
                        </button>
                    </form>
                    <hr />            
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import axios from 'axios';
const sweetalert = require("sweetalert");


export default{
    name: "SignIn",
    baseURL: "http://localhost:8080",
    props: ["baseURL"],
  data() {
    return {
      email: null,
      password: null,
    };
},
  
  methods: {
    async signin(e){
        e.preventDefault();
        const user = {
            email: this.email,
            password: this.password

        };
          console.log("user", user);
                const baseURL = "http://localhost:8080";
        
        axios({
                    method: 'post',
                    url: `${baseURL}/user/signin`,
                    data: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
        .then(() =>{
            this.$router.replace("/");
            sweetalert({
                text: "Login successful",
                icon: "success",
            });
        })
        .catch((err) => console.log("err", err));
           sweetalert({
                            text: "Login unsuccessful ",
                            icon: "error",
                            closeOnClickOutside: false,
                        });

    },
  },  
};
</script>


