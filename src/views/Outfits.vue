<script setup>

import { useRoute } from 'vue-router'
import DisplayOutfits from '@/components/DisplayOutfits.vue'
const route = useRoute()
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue';

const store = useCartStore()

let loadingData = ref(true)

let userSeason = ref('')
let userDescription = ref('')
let userColor = ref('')
let userOutfits = ref('')

// Fetch data based on route parameters
fetch(`http://localhost:3000/gpt/${route.params.skintone}/${route.params.undertone}/${route.params.eyecolor}/${route.params.haircolor}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
        userSeason.value = data.season
        userDescription.value = data.description
        userColor.value = data.colors.join(", ")
        userOutfits.value = data.outfits
         loadingData.value = false
    })
    .catch(error => {
        console.error('Error:', error)
    });


</script>

<template>
  <div class="outfit-container">
    <div class="outfit-header">
      <h1>Outfits Based on Your Skin Tone and Undertone</h1>
    </div>
    <div v-if="loadingData">
      <div>
        Loading information
      </div>
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-else>
    <RouterLink class="cart" to="/customerorder"> CART ({{ store.items.length }}) </RouterLink>
    <div class="outfit-details">
      <p><strong>Season:</strong> {{ userSeason }}</p>
      <p><strong>Description:</strong> {{ userDescription }}</p>
      <p><strong>Colors:</strong> {{ userColor }}</p>
      <DisplayOutfits class="outfit-item" v-for="outfit in userOutfits" :postInfo="outfit" :key="outfit.id"></DisplayOutfits>
    </div>
  </div>
  </div>
</template>

<style scoped>

.cart {
  background-color: #2c3e50; 
  border: none; 
  color: white; 
  padding: 12px 24px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  margin: 8px 2px; 
  cursor: pointer; 
  border-radius: 8px; 
  transition: background-color 0.3s ease; 
}

.cart:hover {
  background-color: #7f8c8d; 
}

/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Outfit Container */
.outfit-container {
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #f9f9f9;
  padding: 30px;
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  color: #333;
}

/* Header Styling */
.outfit-header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Outfit Details */
.outfit-details {
  margin-bottom: 30px;
  font-size: 1.2rem;
}

.outfit-details p {
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #7f8c8d;
}

/* Outfit Item */
.outfit-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 9px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.outfit-item:hover {
  transform: translateY(-10px);
}

.outfit-item p {
  padding: 10px;
  color: #34495e;
  font-size: 1rem;
}

/* Styling for Descriptions */
.outfit-details strong {
  color: #2c3e50;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .outfit-header h1 {
    font-size: 2rem;
  }
  .outfit-gallery {
    grid-template-columns: 1fr; /* 1 column on smaller screens */
  }
}

.outfit-details p {
  font-size: 1rem;
}

.order {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: smaller;
  font-variant: small-caps;
}

</style>