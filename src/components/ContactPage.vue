<template>
    <div class="contact-container">
      <h1 class="contact-title">Контакты</h1>
      <div class="contact-info">
        <div class="contact-item">
          <span class="label">Phone Number:</span>
          <span class="value">+7 123 456 78 90</span>
        </div>
        <div class="contact-item">
          <span class="label">Email:</span>
          <span class="value">example@example.com</span>
        </div>
      </div>
      <div class="footer">
        <p>Feel free to reach out with any questions or inquiries!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage'
  }
  </script>
  
  <style scoped>
  .contact-container {
    background-color: #fff0f6; 
    padding: 40px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 15px;
    max-width: 600px;
    margin: 50px auto;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  .contact-title {
    color: #ff66b2; 
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  .contact-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.2em;
  }
  
  .label {
    font-weight: bold;
    color: #ff66b2;
  }
  
  .value {
    color: #555;
    font-style: italic;
  }
  
  .footer {
    margin-top: 20px;
    color: #ff66b2;
    font-size: 1.1em;
  }
  
  .contact-item:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
  
  hr {
    width: 50%;
    border: 1px solid #ff66b2;
    margin: 30px auto;
  }
 
  footer p {
    font-size: 1.2em;
    color: #ff66b2;
    font-weight: bold;
  }
  </style>
  