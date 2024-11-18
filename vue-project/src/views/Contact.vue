<script setup>

</script>

<template>
  <div class="contact-page">
    <h1 class="haja">Hi, I'm Haja!</h1>
    <p class="bio">
      I am a passionate content creator and influencer dedicated to the world of
      fashion and makeup. I specialize in personal styling, empowering
      professional women to discover and enhance their unique confidence and
      style.
    </p>
    <div class="contact">
      <p class="email-title">Email Address:</p>
      <p class="email">Hajakamara.hk@gmail.com</p>
    </div>
    <div class="social-grid">
      <div class="social-item">
        <img class="qr-code" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/qr-code (1).png" alt="Pinterest QR Code">
        <p>Pinterest</p>
      </div>
      <div class="social-item">
        <img class="qr-code" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/qr-code (3).png" alt="TikTok QR Code">
        <p>TikTok</p>
      </div>
      <div class="social-item">
        <img class="qr-code" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/qr-code (2).png" alt="YouTube QR Code">
        <p>YouTube</p>
      </div>
      <div class="social-item">
        <img class="qr-code" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/qr-code (4).png" alt="LinkedIn QR Code">
        <p>LinkedIn</p>
      </div>
    </div>
    <div class="image-section">
      <img class="collage" src="/Users/hkamara/Library/CloudStorage/OneDrive-Humana/Desktop/Capstone-Final/Personal-Styling-Vue/vue-project/src/assets/image.png" alt="Image Collage">
      <!-- <button class="get-in-touch">Get In Touch</button> -->
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f9f9f9;
  font-family: 'Helvetica Neue', sans-serif;
}

.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: white;
}

.haja {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.bio {
  text-align: center;
  line-height: 1.8;
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 40px;
}

.contact {
  text-align: center;
  margin-bottom: 40px;
}

.email-title {
  font-weight: bold;
}

.email {
  font-size: 1.1rem;
  color: #333;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  margin-bottom: 50px;
}

.social-item {
  text-align: center;
}

.qr-code {
  height: 150px;
  transition: transform 0.3s ease;
}

.qr-code:hover {
  transform: scale(1.1);
}

.image-section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.collage {
  height: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.get-in-touch {
  padding: 10px 20px;
  font-size: 1.1rem;
  color: white;
  background-color: #ff4081;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-in-touch:hover {
  background-color: #ff2050;
}
</style>