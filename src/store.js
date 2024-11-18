import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      cart: [] 
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    }
  }
});
