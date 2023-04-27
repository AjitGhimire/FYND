<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = 'pk_test_51MyssbSDGHtVQZySIS52lSuI50LnQ0SaLjo5WJ0mpzUPsBWnv3x9kDHOIFFSQIHt2Y964RDjsKfW7IvgLEr0JKEB00mpXj0jLn';
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1MzbnwSDGHtVQZySIYts7YlX', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8081/checkoutsuccess',
      cancelURL: 'http://localhost:8081/checkouterror',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>