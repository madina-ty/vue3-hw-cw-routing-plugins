<template>
    <div class="gallery-container">
      <h1 class="gallery-title">Gallery</h1>
      <div v-if="image" class="image-container">
        <img :src="image" alt="Gallery Image" class="slider-image"/>
      </div>
      <button @click="nextImage" class="next-button">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'https://i.pinimg.com/736x/14/49/42/14494250792125ee1103af75b1c1a5c6.jpg', 
          'https://avatars.dzeninfra.ru/get-zen_doc/2142605/pub_5f2c1a1d5bc1c15672c0ca48_5f2c4b85eb4e6872455c6cff/scale_1200', 
          'https://avatars.mds.yandex.net/i?id=434c40465ee013b46729ee2c2c7c4f96_l-5259226-images-thumbs&n=13', 
        ],
        currentIndex: 0
      }
    },
    computed: {
      image() {
        return this.images[this.currentIndex];
      }
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }
  }
  </script>
  
  <style scoped>
  .gallery-container {
    background-color: #ffe6f1; 
    padding: 40px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
  }
  
  .gallery-title {
    color: #ff66b2; 
    font-size: 3em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .image-container {
    margin-bottom: 30px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .slider-image {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }
  
  .next-button {
    background-color: #ff66b2;
    color: white;
    font-size: 1.2em;
    padding: 15px 30px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .next-button:hover {
    background-color: #ff3385; 
    transform: translateY(-3px); 
  }
  
  .next-button:active {
    transform: translateY(0); 
  }
  </style>
  