<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                <!--  display logo-->
            </div>
        </div>


        <!--  Header-->
        <div class="row">
            <div class="col-12 text-center pt-3">
                <div id="signin-div" class="flex-item border">
                    <h2 class="pt-4 pl-4">Create Account</h2>
                    <form @submit="signup" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" v-model="email" class="form-control" required />
                        </div>
                        <!-- Form-->
                        <div class="form-row">

                            <div class="col">

                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" v-model="firstName" class="form-control" required />
                                </div>
                            </div>
                            <div class="col">

                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" v-model="lastName" class="form-control" required />
                                </div>
                            </div>
                        </div>
                        <!-- Password-->
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" v-model="password" class="form-control" required />
                        </div>
                        <!-- confirm Password-->
                        <div class="form-group">
                            <label for="Password">Confirm Password</label>
                            <input type="password" v-model="confirmPassword" class="form-control" required />
                        </div>

                        <button type="submit" class="btn btn-primary mt-2">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

     
<script>
//const axios = require("axios");
import axios from 'axios'
const sweetalert = require("sweetalert");

export default {
    name: "SignUp",
    baseURL: "http://localhost:8080",
    props: ["baseURL"],
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            confirmPassword: null,
        };
    },
    methods: {
        async signup(e) {
            e.preventDefault();
            // if the password matches
            if (this.password === this.confirmPassword) {
                // call the signup API
                const user = {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                };
                // call the API
                console.log("user", user);
                const baseURL = "http://localhost:8080";

                axios({
                    method: 'post',
                    url: `${baseURL}/user/signup`,
                    data: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })

                    // await axios
                    //   .post(`${this.baseURL}/user/signup`, user)
                    .then(() => {
                        // redirect to home page
                        this.$router.replace("/");
                        sweetalert({
                            text: "User signup successful. Please Login",
                            icon: "success",
                            closeOnClickOutside: false,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        sweetalert({
                            text: "User already exists or some database connection error maybe ",
                            icon: "error",
                            closeOnClickOutside: false,
                        });
                    });
            } else {
                // passwords are not matching
                sweetalert({
                    text: "Error! Passwords are not matching",
                    icon: "error",
                    closeOnClickOutside: false,
                });
            }
        },
    },

};
</script>
 
