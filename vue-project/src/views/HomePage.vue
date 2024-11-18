<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
    rel="stylesheet"
  />

  <div class="navBar">
    <nav class="nav">
      <a href="/about" class="a">About Us</a>
      <a href="/events" class="a">Events</a>
    </nav>

    <div>
      <img
        class="logo"
        src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/Luxe_Closet_Transparent.png"
      />
    </div>

    <nav class="nav">
      <a v-if="!cookies.get('token')" href="/login" class="cta-button"
        >Discover your style with our quiz</a>
      <RouterLink v-else class="placeOrder" :to="`/outfits/${userStore.userSkinTone}/${userStore.userUnderTone}/${userStore.userEyeColor}/${userStore.userHairColor}`">Place Order</RouterLink>

      <a href="/contact" class="a">Contact</a>
    </nav>
  </div>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Personal Styling, Tailored for You</h1>
        <p>
          Discover your unique style and express it confidently in 3 simple
          steps, with the power of generative AI to find your perfect color
          palette.
        </p>
        <br>
        <a href="/login" class="cta-button"
          >Discover your style with our quiz</a
        >
      </div>
    </section>

    <div class="all">
      <div class="shapedividers_com-1554">
        <!-- <div class="shapedividers_com-42"> -->

        <h2 class="us">About Us</h2>
        <p class="mission">
          Our website helps women find the perfect business outfits for
          interviews or daily work life, offering personalized styling options
          based on their unique measurements. We make it easy to look polished
          and professional, providing tailored clothing recommendations that
          ensure a comfortable and confident fit for any work occasion.
        </p>
        <!-- </div> -->
      </div>
    </div>

    <section class="services" id="services">
      <div class="service-grid">
        <div
          class="service-card image-container"
          v-for="service in services"
          :key="service.id"
        >
          <img :src="service.image" alt="service image" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2>What Our Clients Say</h2>
      <div class="testimonial-grid">
        <div
          class="testimonial-card"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <p>"{{ testimonial.quote }}"</p>
          <h4>{{ testimonial.client }}</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartStore";
import {userUserStore} from "@/stores/userStore";
import { useCookies } from "vue3-cookies"; //import vue3-cookies framework

const { cookies } = useCookies();
const store = useCartStore();
const userStore = userUserStore()
store.resetOrderDetails()

let services = [
  {
    id: 1,
    title: "Wardrobe Overhaul",
    description:
      "Reimagine your wardrobe with personalized styling. Our experts will work closely with you to curate a selection of pieces that not only align with your style but also fit your lifestyle. We focus on updating your wardrobe to reflect your personality and fashion goals, ensuring every piece is versatile, timeless, and uniquely you.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D", // Placeholder image
  },
  {
    id: 2,
    title: "Personal Shopping",
    description:
      "Take the stress out of shopping with our expert personal shopping service. Whether you’re looking for the perfect outfit for a special occasion or building a complete seasonal wardrobe, our team will guide you through the process, selecting the best pieces based on your preferences, body type, and budget. We offer tailored shopping experiences both in-store and online, making it convenient and enjoyable.",
    image:
      "https://images.unsplash.com/photo-1621406384199-f9ee619e3810?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
  },
  {
    id: 3,
    title: "Virtual Styling",
    description:
      "Experience the convenience of professional styling from the comfort of your home. With our Virtual Styling service, you’ll receive one-on-one sessions with our expert stylists who will provide personalized advice, outfit recommendations, and styling tips. Whether you’re looking to refresh your wardrobe, experiment with new trends, or find outfits for specific occasions, our virtual sessions are designed to meet your needs in a hassle-free manner.",
    image:
      "https://images.unsplash.com/photo-1542009708210-df3fb1850c51?q=80&w=3482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
  },
];

let testimonials = [
  {
    id: 1,
    quote:
      "Haja helped me feel more confident in my everyday outfits. I finally have a wardrobe that feels like me!",
    client: "Aaliyah Golden",
  },
  {
    id: 2,
    quote:
      "The wardrobe overhaul was a game changer. My closet is full of outfits that I love wearing.",
    client: "Adia ",
  },
  {
    id: 3,
    quote: "The services were amazing! I would recommend booking with Haja",
    client: "Cayla",
  },
];
</script>

<style scoped>
.placeOrder {
  text-decoration: none;
  color: black;
}
.luxe-closet {
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  color: #d4af37;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 50px 0;
  text-decoration: none;
  padding: 15px;
}

.logo {
  /* margin: 10px; */
  width: 125px;
  height: auto;
}

.all {
  background-color: #fff;
}
.us {
  text-align: center;
  padding: 20px;
  margin: 50px;
}

.mission {
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  line-height: 1.8;
  width: 700px;
  /* margin-top: 50px; */
}
.about {
  background-color: #ffffff;
  text-align: center;
  text-decoration: none;
}

.shapedividers_com-1554 {
  overflow: hidden;
  position: relative;
}
.shapedividers_com-1554::before {
  content: "";
  font-family: "shape divider from ShapeDividers.com";
  position: absolute;
  z-index: 3;
  pointer-events: none;
  background-repeat: no-repeat;
  bottom: -0.1vw;
  left: -0.1vw;
  right: -0.1vw;
  top: -0.1vw;
  background-size: 111% 90px;
  background-position: 50% 0%;
  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23fbd8c2"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23fbd8c2"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23fbd8c2"/></svg>');
}

@media (min-width: 2100px) {
  .shapedividers_com-1554::before {
    background-size: 111% calc(2vw + 90px);
  }
}

/* 
.shapedividers_com-42{
overflow:hidden;
position:relative;
} */
.shapedividers_com-42::before {
  content: "";
  font-family: "shape divider from ShapeDividers.com";
  position: absolute;
  z-index: 3;
  pointer-events: none;
  background-repeat: no-repeat;
  bottom: -0.1vw;
  left: -0.1vw;
  right: -0.1vw;
  top: -0.1vw;
  background-size: 111% 90px;
  background-position: 50% 100%;
  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z" fill="%23fbd8c2"/><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" opacity=".5" fill="%23fbd8c2"/><path d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z" opacity=".5" fill="%23fbd8c2"/></svg>');
}

@media (min-width: 2100px) {
  .shapedividers_com-42::before {
    background-size: 111% calc(2vw + 90px);
  }
}

.navBar {
  display: flex;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f7f7f7;
  color: #333;
}

.navBar {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  padding-left: 30px;
  font-size: 19px;
}

.logo {
  width: 170px;
  height: auto;
}

.nav {
  display: flex;
  gap: 30px;
  align-items: center;
  font-weight: 600;
}

.a {
  text-decoration: none;
  color: #333;
  position: relative;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.25s;
}

.a::after {
  content: "";
  position: absolute;
  inset: 0;
  background: bisque;
  scale: 1 0;
  z-index: -1;
  transition: 0.45s;
}

.a:hover::after {
  scale: 1 1;
}

.home-page {
  width: 100%;
  padding: 20px;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #e6e6e6;
  background-image: url("https://personal-styling-outfits.s3.us-east-2.amazonaws.com/2+plants.avif");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.hero .hero-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  max-width: 900px;
}

.hero h1 {
  font-size: 3rem;
  margin: 0;
  font-weight: 600;
}

.hero p {
  font-size: 1.2rem;
  margin-top: 10px;
}

.cta-button {
  background-color: #e91e63;
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-weight: 600;
  margin-top: 20px;
}

.cta-button:hover {
  background-color: #d81b60;
}

.all {
  background-color: #fff;
}

.us {
  text-align: center;
  padding: 20px;
  margin: 50px auto;
  font-size: 2.5rem;
}

.mission {
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  line-height: 1.8;
  width: 700px;
}

.services {
  padding: 60px 20px;
  background-color: #f0f0f0;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.service-card:hover {
  transform: scale(1.05);
}

.service-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.service-card h3 {
  font-size: 1.5rem;
  margin: 20px 0;
}

.service-card p {
  padding: 0 20px 20px;
  color: #777;
}

.testimonials {
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.testimonial-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonial-card p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
}

.testimonial-card h4 {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}
</style>
