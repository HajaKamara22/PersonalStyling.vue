
<script setup>

import { ref } from 'vue';
const props = defineProps(['postInfo'])

//import file access to the store
import { useCartStore } from '@/stores/cartStore';

//creates an instance of the cart store
const store = useCartStore()
console.log(props)
function addToCart() {
    store.addToCart(props.postInfo)
}

// const liked = ref(false);

//add like function 
// function whenLiked() {
//     liked.value = !liked.value;

//     const newLikeCount = liked.value ? props.postInfo.likes + 1 : props.postInfo.likes - 1;

//     fetch(`http://localhost:3000/gpt/${props.postInfo.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ likes: newLikeCount }),
//     })
//     .then(response => {
//         if (!response) {
//             liked.value = !liked.value;
//             return;
//         }
//         return response.json();
//     })
//     .then(updatedPost => {
//         if (updatedPost) {
//             props.postInfo.likes = updatedPost.likes
//         }
//     });

// }




</script>




<template>
<div class="outfit-gallery">

      <img :src="postInfo.outfit_link" alt="Outfit Image" class="outfit-img" />
      <div class="heartLikes">
      <!-- <img v-if="liked" @click="whenLiked" class="heart" src="/Users/hkamara/customers-cookies/vue-project/src/assets/heart-icon-y1k.png"> -->
      <!-- <img v-else @click="whenLiked" class="hearts" src="/Users/hkamara/customers-cookies/vue-project/src/assets/heart-icon-y1k.png"> -->
      <!-- <p class="likes">{{ postInfo.likes }}</p> -->
      <p>{{ postInfo.description }}</p>
      <button @click="addToCart()" class="addToCart">Add to cart</button>
      </div>

   
  </div>
</template>


<style scoped>
/* .likes{
    font-weight: bold;
    padding: 20px;
} */


/* .heart{
    width: 30px;
    height: 30px;
    margin-top: 30px;
    padding-left: 10px;

    
} */

/* .hearts{
    width: 30px;
    height: 30px;
    margin-top: 30px;
    padding-left: 10px;
    color: grey;
    opacity: 0.4;
} */

/* .heartLikes{
    display: flex;

} */

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


.addToCart {
  background-color: #2c3e50; 
  border: none; 
  color: white; 
  padding: 12px 24px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 14px; 
  margin: 8px 2px; 
  cursor: pointer; 
  border-radius: 8px; 
  transition: background-color 0.3s ease; 
}

.addToCart:hover {
  background-color: #7f8c8d; 
}

</style>