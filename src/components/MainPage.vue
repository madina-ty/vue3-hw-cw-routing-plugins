<template>
    <div class="main-container">
      <div class="title">
        <h1>Main Page</h1>
      </div>
      <nav class="navbar">
        <router-link to="/gallery" class="nav-link">Gallery</router-link>
        <router-link to="/contacts" class="nav-link">Contacts</router-link>
        <router-link to="/order" class="nav-link">Shop</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
  }
  </script>
  
  <style scoped>
  .main-container {
    background-color: #ffe6f1; 
    padding: 20px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .title h1 {
    color: #ff66b2;
    font-size: 3em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
  }
  
  .navbar {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
  }
  
  .nav-link {
    color: #ff66b2;
    font-size: 1.5em;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 25px;
    background-color: #ffb3d9;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nav-link:hover {
    background-color: #ff66b2; 
    color: white;
    transform: translateY(-3px); 
  }
  
  .nav-link:active {
    transform: translateY(0); 
  }
  
  </style>
  
  