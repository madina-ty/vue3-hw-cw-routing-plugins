<template>
  <div class="cart-container">
    <h1 class="cart-title">Корзина</h1>
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <p class="cart-item-name">{{ item.name }} - <span class="cart-item-price">{{ item.price }} руб</span></p>
    </div>
    <p class="cart-total">Итого: <span class="total-amount">{{ total }} руб</span></p>
    <button @click="goToConfirmation" class="cart-button">Перейти к оформлению</button>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }
  },
  methods: {
    goToConfirmation() {
      this.$router.push('/order/confirmation');
    }
  }
}
</script>

<style scoped>
/* Основной контейнер */
.cart-container {
  background-color: #fdf2f9; /* Легкий розовый фон */
  font-family: 'Arial', sans-serif;
  color: #333;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  max-width: 500px;
  margin: 30px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Заголовок корзины */
.cart-title {
  color: #e6007e;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: bold;
}

/* Элементы корзины */
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

/* Название и цена товара */
.cart-item-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.cart-item-price {
  color: #e6007e;
}

/* Итоговая сумма */
.cart-total {
  font-size: 1.4rem;
  text-align: right;
  font-weight: bold;
  margin-top: 20px;
}

.total-amount {
  color: #e6007e;
  font-size: 1.6rem;
}

/* Кнопка оформления */
.cart-button {
  background-color: #e6007e;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  display: block;
  width: 100%;
  margin-top: 20px;
}

.cart-button:hover {
  background-color: #FFC0CB;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cart-button:focus {
  outline: none;
}

/* Адаптивность */
@media (max-width: 768px) {
  .cart-container {
    padding: 20px;
  }

  .cart-title {
    font-size: 2rem;
  }

  .cart-item-name {
    font-size: 1rem;
  }

  .cart-item-price {
    font-size: 1rem;
  }

  .cart-total {
    font-size: 1.2rem;
  }

  .total-amount {
    font-size: 1.4rem;
  }

  .cart-button {
    padding: 10px 20px;
  }
}
</style>
