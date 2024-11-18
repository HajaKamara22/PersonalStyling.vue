<script setup>
import { ref } from 'vue';
const props = defineProps(['postInfo', 'showTrashButton'])

//import file access to the store
import { useCartStore } from '@/stores/cartStore';

//creates an instance of the cart store
const store = useCartStore()

function trashCan() {
    store.removeFromCart(props.postInfo.id)
}
</script>

<template>
  <div class="outfit-gallery">
    <img :src="postInfo.outfit_link" alt="Outfit Image" class="outfit-img" />
    <p>{{ postInfo.description }}</p>
    
    <!-- Conditionally render the "X" button based on the prop -->
    <button v-if="showTrashButton" @click="trashCan()" class="trash">X</button>
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

.outfit-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  grid-gap: 20px;
  padding: 20px;
  justify-items: center;
}

.outfit-img {
  max-width: 50%;
  height: auto;
  border-bottom: 2px solid #ecf0f1;
}

.trash {
  background-color: #2c3e50; 
  border: none; 
  color: white; 
  padding: 5px 10px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 14px; 
  margin: 8px 2px; 
  cursor: pointer; 
  border-radius: 8px; 
  transition: background-color 0.3s ease; 
}

.trash {
  background-color: red; 
}
</style>
