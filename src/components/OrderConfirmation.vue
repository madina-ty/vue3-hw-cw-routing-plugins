<template>
    <div>
      <h1>Подтверждение и оплата</h1>
      <p>Вы уверены, что хотите оформить заказ?</p>
      <button @click="confirmOrder">Подтвердить</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      confirmOrder() {
        alert('Ваш заказ подтвержден!');
        this.$router.push('/');
      }
    }
  }
  </script>
  