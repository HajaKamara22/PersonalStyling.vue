<script setup>
import { ref } from 'vue';
import { useCookies } from 'vue3-cookies'; //import vue3-cookies framework
const { cookies } = useCookies()
import {useRouter} from "vue-router";
const router = useRouter()
import { useCartStore } from '@/stores/cartStore';

let email = ref('')
let password = ref('')
let calendar = ref('')
let store = useCartStore()

function login(e) { //e= is an event
  e.preventDefault() //this will prevent reloading of the page
    let params = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email.value, password: password.value})
    }
console.log(calendar.value)
    fetch("http://localhost:3000/login", params)
    .then(response => response.text())
    .then(json => {
      console.log(json)  //express will call this response(json)
      //need to add logic
      if (json === 'Incorrect login details') {
        alert ('Incorrect Login')
      } else {
        cookies.set('token', json);

        router.push('/personalizequiz')
      }
      //if the user enters the right email and password redirect to next page if not, alarm wrong info.
      //set cookies
      // cookies.set('token', json) //to save cookies, global variables, cookies can be used anywhere, but I would have to know the name of the cookie.
                //(can be named anything, to get the token) 
      // router.push('/personalizequiz')
    })
}

</script>

<template>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

 <!-- <div class="flex-container">
  <p class="success">"Once you dress for success the success will come"</p>
  <h1 class="welcome">Welcome!</h1>
  <p class="details">Please enter your details</p>
  <div class="emailinfo">
    <label for="email">Email address</label>
    <br>
    <br>
    <input v-model="email" type="text" id="email">
  </div>
  <br>
  <div class="passwordinfo">
    <label for="password" class="password">Password</label>
    <br>
    <br>
    <input v-model="password" type="password" id="password">
  </div>
  
  

  <div class="remember">
    <label for="remember"></label>
    <input type="checkbox" id="remember">
    <p>Remember me</p>
    <p class="forget">Forgot password</p>
  </div>

  <div>
  Sign in 
  </div> 
  <br>
  <div>
 <button>Sign in with Google</button>
  </div>

  <div class="sign-up">
  <p class="account">Don't have an account?</p>
 <RouterLink to="/register" class="signup2"> Sign up</RouterLink>  
  </div>

</div> -->

<a class="logo-container" href="/" >
        <img class="logo" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/Luxe_Closet_Transparent.png" > 
  </a> 


<div class="login-container">
  <div class="login-box">
    <h1>Welcome!</h1>
    <p class="quote">"Once you dress for success, the success will come"</p>
    <form @submit="login">
      <label for="email">Email address</label>
      <input v-model="email" required pattern=".+@gmail\.com" type="email" id="email" name="email" placeholder="Enter your email" />

      <label for="password">Password</label>
      <input v-model="password" type="password" id="password" name="password" placeholder="Enter your password" />

      <!-- <input v-model="calendar" type="datetime-local" > -->
      <div class="options">
        <div class="remember-me">
          <input type="checkbox" id="remember" />
          <label for="remember">Remember me</label>
        </div>
        <a href="#" class="forgot-password">Forgot password?</a>
      </div>

      <button  type="submit" class="btn-login">Sign In</button> 
      <!-- make this submit to the next page /personalizequiz -->

      <div class="social-login">
        <!-- <button type="button" class="btn-google">Sign in with Google</button> -->
      </div>
      <br>
<RouterLink to="register" class="signup-link">Don't have an account? </RouterLink>
      
    </form>
  </div>
</div>


</template>

<style scoped>

.luxe-closet{
  font-family: 'Times New Roman', Times, serif;
  color: #D4AF37;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 50px 0;
  text-decoration: none;
  padding: 15px;
  
}

.logo{
 width: 200px;
 height: auto;
 
  
}

.logo-container{
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 20px; */
}


body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;
  font-family: 'Poppins', sans-serif; /* Updated font */
}

/* Main container */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-top: 20px;
}

/* Login box styling */
.login-box {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  font-family: 'Poppins', sans-serif; /* Ensure uniform font style */
}

.login-box h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600; /* Modern look */
}

.login-box .quote {
  font-style: italic;
  font-size: 1.1rem;
  color: #777;
  margin-bottom: 30px;
}

/* Form styling */
form {
  display: flex;
  flex-direction: column;
}

form label {
  text-align: left;
  color: #666;
  font-weight: 600; /* Bold for emphasis */
  margin-bottom: 5px;
}

form input {
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fafafa;
  transition: all 0.3s;
  font-family: 'Poppins', sans-serif; /* Keep input text modern */
}

form input:focus {
  border-color: #333;
  background-color: #fff;
  outline: none;
}

/* Options for remember me and forgot password */
.options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.remember-me label {
  font-size: 0.9rem;
  color: #666;
}

.forgot-password {
  color: #007bff;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* Button styling */
.btn-login {
  padding: 12px;
  background-color: #333;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;
  font-family: 'Poppins', sans-serif;
}

.btn-login:hover {
  background-color: #0056b3;
}

/* Social login */
.social-login {
  display: flex;
  justify-content: center;
}

/* Signup text */
.signup-text {
  font-size: 0.9rem;
  color: #666;
}

.signup-link {
  color: #007bff;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>


