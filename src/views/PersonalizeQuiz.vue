<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useCookies } from 'vue3-cookies'; //import vue3-cookies framework
import { userUserStore } from "@/stores/userStore";

const { cookies } = useCookies()
const router = useRouter();
const userStore = userUserStore()

// User selections
let userSkintone = ref("");
let userHeight = ref("");
let userBust = ref("");
let userWaist = ref("");
let userHairColor = ref("");
let userEyeColor = ref("");

console.log(cookies.get('token'))

// Function to handle user input and make the API call
function userInput() {
  let userUndertone = userSkintone.value === "beige" ? "warm" : "cool"; // Determine undertone
  
  userStore.setUserInfo(userSkintone.value, userUndertone, userHairColor.value, userEyeColor.value)
  console.log(userStore.userSkinTone, userUndertone, userStore.userHairColor, userStore.userEyeColor)

  let input = {
    skin_tone: userSkintone.value,
    under_tone: userUndertone,
    height: userHeight.value,
    bust: userBust.value,
    waist: userWaist.value,
    hair_color: userHairColor.value,
    eye_color: userEyeColor.value,
  };

  console.log("Input Data: ", input); // Log the input for debugging

  const params = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": cookies.get('token')
    },
    body: JSON.stringify(input),
  };

  // Send POST request to the backend
  fetch("http://localhost:3000/personalizequiz", params)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data)
      // Navigate to the next page (outfits) on successful submission
      router.push(
        `/outfits/${userSkintone.value}/${userUndertone}/${userEyeColor.value}/${userHairColor.value}`
      );
    })
    .catch((error) => {
      console.error("Error during fetch:", error); // Log error for troubleshooting
      alert("Something went wrong while submitting. Please try again.");
    });
}
</script>

<template>
  <h2 class="personalize">3 Easy Steps</h2>
  <p class="description-text">
    Discover your best colors and styles in just 3 easy steps! Using ChatGPT, we analyze your undertone and skin tone to generate a custom color palette.
  </p>

  <div class="step-container-horizontal">
    <!-- Step 1 -->
    <div class="form-container">
      <h2>Step 1</h2>
      <p class="step-description">Tell us your height, bust, and waist measurements so we can tailor outfit suggestions to fit you perfectly.</p>
      <form>
        <label for="height">Height (ft):</label>
        <select v-model="userHeight" id="height" name="height">
          <option value="0">--</option>
          <option value="1">4'8 - 4'11</option>
          <option value="2">5'0 - 5'3</option>
          <option value="3">5'4 - 5'6</option>
          <option value="4">5'7 - 5'9</option>
        </select>

        <label for="bust">Bust (in):</label>
        <select v-model="userBust" id="bust" name="bust">
          <option value="5">--</option>
          <option value="6">S: 32A, 32B, 34A, 34B</option>
          <option value="7">M: 32C, 34B, 36A, 36B, 36C</option>
          <option value="8">L: 32D, 34D, 36D, 38A, 38B, 38C</option>
          <option value="9">XL: 32DD, 32DDD, 34DD, 34DDD</option>
        </select>

        <label for="waist">Waist/Hips (cm):</label>
        <select v-model="userWaist" id="waist" name="waist">
          <option value="10">--</option>
          <option value="11">S: 64-69/89-91</option>
          <option value="12">M: 74-77/99-102</option>
          <option value="13">L: 81-86/105-109</option>
          <option value="14">XL: L36DD-38C-38D</option>
        </select>
      </form>
    </div>

    <!-- Step 2 -->
    <div class="form-container">
      <h2>Step 2</h2>
      <p class="step-description">Your eye and hair color help us choose the best colors to complement your natural features.</p>
      <form>
        <label for="eyeColor">Eye Color</label>
        <select v-model="userEyeColor" id="eyeColor" name="eyeColor">
          <option value="">--</option>
          <option value="brown">Brown</option>
          <option value="dark brown">Dark Brown</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>

        <label for="hairColor">Hair Color</label>
        <select v-model="userHairColor" id="hairColor" name="hairColor">
          <option value="">--</option>
          <option value="brown">Brown</option>
          <option value="dark brown">Dark Brown</option>
          <option value="black">Black</option>
          <option value="blonde">Blonde</option>
        </select>
      </form>
    </div>

    <!-- Step 3: Undertone Selection -->
    <div class="form-container undertone-section">
      <h2>Step 3</h2>
      <p class="step-description">Select your undertone and skin tone to generate a personalized color palette that enhances your natural glow.</p>
      <div class="undertone-grid">
        <!-- Porcelain -->
        <label for="porcelain">
          <input id="porcelain" type="radio" name="product" class="card-input-element" value="porcelain" v-model="userSkintone" />
          <div class="undertone-card">
            <img src="../assets/image (2).png" alt="Porcelain" class="undertone-image" />
            <div class="undertone-name">PORCELAIN</div>
            <div class="undertone-description">Cool Undertone</div>
            <div class="undertone-text">Translucent with yellow or pink undertones</div>
          </div>
        </label>

        <!-- Almond -->
        <label for="almond">
          <input id="almond" type="radio" name="product" class="card-input-element" value="almond" v-model="userSkintone" />
          <div class="undertone-card">
            <img src="../assets/image (4).png" alt="Almond" class="undertone-image" />
            <div class="undertone-name">ALMOND</div>
            <div class="undertone-description">Cool Undertone</div>
            <div class="undertone-text">Warm medium to light brown</div>
          </div>
        </label>

        <!-- Warm Beige -->
        <label for="beige">
          <input id="beige" type="radio" name="product" class="card-input-element" value="beige" v-model="userSkintone" />
          <div class="undertone-card">
            <img src="../assets/image (3).png" alt="Warm Beige" class="undertone-image" />
            <div class="undertone-name">WARM BEIGE</div>
            <div class="undertone-description">Warm Undertone</div>
            <div class="undertone-text">A light, warm shade of white with sandy tones</div>
          </div>
        </label>

        <!-- Espresso -->
        <label for="espresso">
          <input id="espresso" type="radio" name="product" class="card-input-element" value="espresso" v-model="userSkintone" />
          <div class="undertone-card">
            <img src="../assets/image (5).png" alt="Espresso" class="undertone-image" />
            <div class="undertone-name">ESPRESSO</div>
            <div class="undertone-description">Cool Undertone</div>
            <div class="undertone-text">Deep, rich, brown complexion</div>
          </div>
        </label>
      </div>
    </div>
  </div>

  <!-- Submit Button -->
  <div class="submit">
    <button @click="userInput()">Submit</button>
  </div>
</template>


<style scoped>
/* Main body styling */
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f5f2;
}

/* Main header for the page */
.personalize {
  font-size: 50px;
  color: #a57c65;
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px #00000030; /* Subtle shadow for main heading */
}

/* Step container styling for horizontal layout */
.step-container-horizontal {
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 10px;
}

.description-text {
  font-size: 18px;
  color: #4d4035; /* Use a muted color to blend well with the design */
  text-align: center;
  margin: 0 auto;
  padding: 10px 20px;
  max-width: 800px; /* Keep it limited to a readable width */
  line-height: 1.6;
  letter-spacing: 0.5px; /* Adds a little spacing between letters */
  background-color: #f9f6f1; /* Subtle background color to make it stand out */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Add a soft shadow */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
}

/* Style for the main section title */
.personalize {
  font-size: 50px;
  color: #a57c65;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  border-bottom: 2px solid #a57c65; /* Adds a visual separator below the title */
  display: inline-block; /* Keeps the border limited to the text width */
  display: flex;
  justify-content: center;
}


/* Form container styling for each step */
.form-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 500px;
  transition: all 0.3s ease-in-out;
  text-align: center;
}

.form-container:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Form elements styling */
label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #4d4035;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #f9f6f1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

select:focus {
  border-color: #a57c65;
  background-color: #fff;
  outline: none;
}

/* Step title styling */
h2 {
  font-size: 1.5rem;
  color: #a57c65;
  margin-bottom: 20px;
}

/* Undertone section */
.undertone-section {
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.undertone-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

/* Undertone cards styling */
.undertone-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.undertone-card:hover {
  transform: scale(1.05);
}

.card-input-element {
  display: none;
}

.card-input-element:checked + .undertone-card {
  box-shadow: 0 0 3px 5px #a57c65;
}

.undertone-image {
  width: 50%;
  height: auto;
  border-radius: 8px;
}

.undertone-name {
  font-weight: bold;
  margin-top: 10px;
  font-size: 18px;
  color: #4d4035;
}

.undertone-description {
  font-style: italic;
  font-size: 14px;
  color: #757575;
  margin-bottom: 10px;
}

.undertone-text {
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

/* Submit button */
.submit {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 12px 30px;
  background-color: #a57c65;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #8a5f47;
}

/* Description styles for each step */
.form-container p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  background-color: #f1ece8;
  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.form-container h2 {
  color: #4d4035;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

  </style>