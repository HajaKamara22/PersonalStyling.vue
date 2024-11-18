<script setup>
import { useCartStore } from "@/stores/cartStore";
import CartItem from "@/components/CartItem.vue";
import {useRouter} from 'vue-router'
import { useCookies } from 'vue3-cookies'; //import vue3-cookies framework
const { cookies } = useCookies()

// Access to the store
const store = useCartStore();
const router = useRouter()
// Function to remove an item
const removeItem = (item) => {
  store.removeItem(item);
};

function submitOrder() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": cookies.get('token') 
    },
    body: JSON.stringify({
        outfit_ids: store.items
    }),
  };
  fetch("http://localhost:3000/submit", options)
  .then (response => {
    return response.json()
  })
  .then(order => {
    store.updateOrderDetails(order)
    router.push("/submit")
  })
}
</script>

<template>

<a href="/">
        <img class="logo" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/Luxe_Closet_Transparent.png" > 
</a>

  <div class="cart-container">
    <h1 class="cart-title">Shopping Cart</h1>

    <div v-if="store.items.length === 0" class="empty-cart">
      <p>Your cart is empty</p>
    </div>

    <div v-else class="cart-items">
      <!-- Cart items -->
      <CartItem
        v-for="(item, index) in store.items"
        :key="index"
        :postInfo="item"
        :showTrashButton="true"
      ></CartItem>
    </div>

    <!-- Checkout button -->
    <div v-if="store.items.length > 0" class="cart-footer">
      <button @click="submitOrder()" class="checkout-btn">Place Order</button>
    </div>
  </div>
</template>

<style scoped>
/* Center the cart container on the page */
.cart-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo{
  /* margin: 10px; */
  width: 125px;
  height: auto;
  display: flex;
  margin-left: 800px;
}

/* Title styling */
.cart-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Styling for cart items */
.cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}

/* Empty cart message */
.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
}

/* Checkout button */
.cart-footer {
  margin-top: 30px;
  text-align: center;
}

.checkout-btn {
  background-color: #f0c14b;
  color: #111;
  padding: 15px 30px;
  border: 1px solid #a88734;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

.checkout-btn:hover {
  background-color: #ddb347;
}
</style>
