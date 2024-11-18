import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cartStore",
  () => {
    const items = ref([]);

    const orderDetails = ref({
      orderId: 0,
      orderDate: "",
      orderTime: "",
      outfits: [],
    });

    function addToCart(outfit) {
      items.value.push(outfit);
      console.log(items);
    }

    function updateOrderDetails(order) {
      orderDetails.value.orderId = order.orderId;
      orderDetails.value.orderDate = order.orderDate;
      orderDetails.value.orderTime = order.orderTime;
      orderDetails.value.outfits.push(...items.value);
    }

    function resetCart() {
      items.value = [];
    }

    function resetOrderDetails() {
      orderDetails.value.orderId = 0;
      orderDetails.value.orderDate = "";
      orderDetails.value.orderTime = "";
      orderDetails.value.outfits = [];
    }

    function removeFromCart(id) {
      items.value = items.value.filter((item) => item.id !== id);
    }

    return {
      items,
      addToCart,
      removeFromCart,
      orderDetails,
      updateOrderDetails,
      resetCart,
      resetOrderDetails,
    };
  },

  { persist: true }
);
