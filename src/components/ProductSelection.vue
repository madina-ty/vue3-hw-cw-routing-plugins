<template>
  <div class="products-body">
    <h1 class="product-title">Product selection</h1>
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
      <div class="product-info">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">{{ product.price }} rub</p>
        <button @click="addToCart(product)" class="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    products: [
      { 
        id: 1, 
        name: 'Product 1', 
        price: 500, 
        imageUrl: require('@/assets/images/product1.jpg')
      },
      { 
        id: 2, 
        name: 'Product 2', 
        price: 1200, 
        imageUrl: require('@/assets/images/product2.jpg')
      },
      { 
        id: 3, 
        name: 'Product 3', 
        price: 800, 
        imageUrl: require('@/assets/images/product3.jpg')
      }
    ]
  };
},
  methods: {
    addToCart(product) {
      console.log(this.$store);
      this.$store.commit('addToCart', product);
      this.$router.push('/cart');
    }
  }
};
</script>

<style scoped>
/* Общие стили */
.products-body {
  background-color: #f8f8f8;
  font-family: 'Arial', sans-serif;
  color: #333;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 20px;
  box-sizing: border-box;
}

.product-title {
  color: #e6007e;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
}

.product-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  transition: transform 0.3s ease;
}

.product-item:hover .product-image {
  transform: scale(1.05);
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.product-price {
  font-size: 1.1rem;
  color: #e6007e;
  margin: 10px 0;
}

.add-to-cart-button {
  background-color: #e6007e;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  align-self: flex-start;
}

.add-to-cart-button:hover {
  background-color: #FFC0CB;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.add-to-cart-button:focus {
  outline: none;
}

@media (max-width: 768px) {
  .product-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-image {
    margin-bottom: 15px;
  }

  .product-info {
    align-items: flex-start;
  }

  .add-to-cart-button {
    align-self: center;
  }
}

@media (max-width: 480px) {
  .product-title {
    font-size: 2rem;
  }

  .product-name {
    font-size: 1rem;
  }

  .product-price {
    font-size: 1rem;
  }

  .add-to-cart-button {
    padding: 10px 20px;
  }
}
</style>