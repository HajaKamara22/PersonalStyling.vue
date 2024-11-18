<script setup>
import { useCartStore } from '@/stores/cartStore'
import CartItem from '@/components/CartItem.vue'
import { ref } from 'vue'

// Access to the store
const store = useCartStore()
store.resetCart()
// Order date and time ref
const orderDate = ref('');
const orderTime = ref('');

// Random location and contact information
const pickupLocation = ref('Downtown Plaza');
const address = ref('123 Fashion Ave, Cityville');
const phoneNumber = ref('(123) 456-7890');
const pointOfContact = ref('Jane Doe');
const pickupTime = ref('4:00 PM');

// Fetch order confirmation data
// onMounted(() => {
// //   const confirmationData = JSON.parse(localStorage.getItem('orderConfirmation'));
//   if (confirmationData) {
//     orderDate.value = store.orderDetails.orderDate;
//     orderTime.value = store.orderDetails.orderTime;
//   }
</script>

<template>
    <a href="/">
        <img class="logo" src="../src/assets/Luxe_Closet_Transparent.png" > 
</a>
  <div class="confirmation-container">
    <h1 class="confirmation-title">Order Confirmation</h1>

    <div class="confirmation-details">
      <!-- Order Info -->
      <div class="order-summary">
        <h2>Great selections</h2>
        <p>Your outfits are being prepared. <br /> *Please read carefully*</p>
      </div>

       <div class="order-info">
        <table>
          <tr> 
            <!-- <p>Order Time: {{store.orderDate.orderTime}}</p> -->
          <p>Order #: 98765</p>
           <p>Order Date:{{ store.orderDetails.orderDate }}</p>
          </tr>
          <br>
       
            <p>Point of Contact: {{ pointOfContact }}</p>
            <p>Pickup Location: {{ pickupLocation }}</p>
            <p>Address:{{ address }}</p>
        
            <p>Phone Number:{{ phoneNumber }}</p>
       
            <!-- <p>Pickup Time: {{ pickupTime }}</p> -->
        </table>
      </div>

      <!-- Item List -->
      <div class="order-items">
        <table>
          <thead>
            <tr>
              <th>Items to be prepared</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in store.orderDetails.outfits" :key="index">
              <td>
                <CartItem :postInfo="item" :showTrashButton="false" />
              </td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Confirmation Page Container */
.confirmation-container {
  max-width: 900px; /* Reduce the max-width to make it more compact */
  margin: 0 auto;
  padding: 20px; /* Reduce padding for a more compact design */
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

/* Title Styling */
.confirmation-title {
  font-size: 2rem; /* Reduced font size for a more compact layout */
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

/* Order Summary Styling */
.order-summary {
  text-align: center;
  margin-bottom: 20px;
}

.order-summary h2 {
  font-size: 1.5rem; /* Reduced font size */
  font-weight: bold;
  color: #2c3e50;
}

.order-summary p {
  font-size: 1rem; /* Reduced font size */
  color: #7f8c8d;
}

/* Order Info Styling */
.order-info {
  margin-bottom: 20px;
}

.order-info table {
  width: 100%;
  border-spacing: 8px; /* Reduced spacing for a tighter look */
}

.order-info td {
  padding: 6px; /* Reduced padding */
  font-size: 1rem; /* Reduced font size */
  color: #34495e;
}

.order-info strong {
  color: #2c3e50;
  font-weight: bold;
}

/* Order Items Styling */
.order-items {
  width: 100%;
  border-top: 1px solid #e0e0e0; /* Adjusted border thickness */
  margin-top: 20px;
}

.order-items table {
  width: 100%;
  border-collapse: collapse;
}

.order-items th, .order-items td {
  padding: 10px; /* Reduced padding */
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.order-items th {
  font-size: 1.1rem; /* Slightly reduced font size */
  color: #2c3e50;
}

.order-items td {
  font-size: 0.9rem; /* Reduced font size for the items */
  color: #34495e;
}

.order-items td img {
  max-width: 120px; /* Reduced image size */
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
</style>