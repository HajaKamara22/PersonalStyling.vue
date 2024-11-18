<script setup>
import { ref } from 'vue';
let email = ref('')
let password = ref('')

function register() {
    let params = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email.value, password: password.value})
    }

    fetch("http://localhost:3000/register", params)
    .then(response => {
        console.log(response)
    })
}

</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">


  <div class="signup-container">
    <div class="signup-box">
      <h1>Sign up</h1>
      <form @submit.prevent="register">
        <label for="first-name">First Name</label>
        <input v-model="firstName" type="text" id="first-name" name="first-name" placeholder="Enter your first name" />

        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" name="email" placeholder="Enter your email" />

        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" name="password" placeholder="Enter your password" />

        <!-- <a href="/login">
        <button  type="sign-up" class="btn-signup">Sign Up</button>
      </a> -->
      <RouterLink class="btn-signup" to="/login">Sign Up</RouterLink>
      </form>

      <div class="login-text">
        Already have an account? <RouterLink class="login-link" to="/login">Log in</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .flex-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.account{
    display: flex;
}

.log-in{
    padding-top: 15px;
    margin-left: 10px;
} */


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
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Sign up box styling */
.signup-box {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.signup-box h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600; /* Bold heading for modern look */
}

/* Form styling */
form {
  display: flex;
  flex-direction: column;
}

form label {
  text-align: left;
  color: #666;
  font-weight: 600;
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
}

form input:focus {
  border-color: #007bff;
  background-color: #fff;
  outline: none;
}

/* Button styling */
.btn-signup {
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: 600; /* Bolder button text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;
  text-decoration: none; /* Ensure the link looks like a button */
  display: inline-block;
}

.btn-signup:hover {
  background-color: #0056b3;
}

/* Sign in option */
.login-text {
  font-size: 0.9rem;
  color: #666;
}

.login-link {
  color: #007bff;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

</style>

