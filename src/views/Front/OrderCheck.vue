<template>
  <div>
    <BuyProgress :progress="step"></BuyProgress>
    <div class="py-2 check-order container ">
      <table class="table table-sm my-5">
        <thead class="my-4">
          <tr>
            <th class="text-center">商品資訊</th>
            <th width="150" class="text-center ">數量</th>
            <th width="120" class="text-center ">單價</th>
            <th width="120" class="text-center ">折扣</th>
            <th width="120" class="text-center ">小計</th>
            <th width="150" class="text-center ">刪除</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in cart.carts" :key="index">
            <td>
              <div class="d-flex">
                <div
                  class="order-product-img img-fluid mr-2"
                  :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
                ></div>
                <div class="align-self-center">{{ item.product.title }}</div>
              </div>
            </td>
            <td class="align-middle text-center">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-center">
              {{ item.product.origin_price | currency }}
            </td>
            <td class="align-middle text-center">
              {{ item.product.price | currency }}
            </td>
            <td class="align-middle text-center">{{ item.total | currency }}</td>

            <td class="align-middle text-center">
              <a href="#" class="text-danger" @click.prevent="removeCart(item.id)">
                <i class="fas fa-trash-alt"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div class="container mb-4">
        <div class="row">
          <div class="col-md-8">
            <div class="alert alert-secondary">
              輸入「NEWMEMBER2020」，新會員享88折優惠
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="輸入優惠碼"
                v-model="coupon_code"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-info" @click.prevent="addCouponCode">
                  套用優惠券
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <table class="table order-product-table border-0">
              <tbody>
                <tr>
                  <td>總金額</td>
                  <td class="text-right">{{ cart.total | currency }}</td>
                </tr>
                <tr>
                  <td>優惠折抵</td>
                  <td class="text-right">-{{ (cart.total - cart.final_total) | currency }}</td>
                </tr>
                <tr>
                  <td>應付金額</td>
                  <td class="text-right text-secondary">
                    {{ cart.final_total | currency }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col">
            <div class="d-flex mt-2">
              <router-link to="/product_list" class="btn btn-outline-info mr-auto"
                >返回購物</router-link
              >
              <router-link to="/client_info" class="btn btn-outline-secondary">下一步</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BuyProgress from '../../components/Front/BuyProgress.vue';

export default {
  components: {
    BuyProgress,
  },
  data() {
    return {
      coupon_code: '',
      step: '1',
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    removeCart(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.delete(api).then((response) => {
        vm.$bus.$emit('message:push', response.data.message, 'danger');
        vm.$store.dispatch('updateLoading', false);
        vm.getCart();
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      vm.$store.dispatch('updateLoading', true);
      const couponCode = {
        data: {
          code: vm.coupon_code,
        },
      };
      vm.$http.post(api, couponCode).then((response) => {
        if (response.data.success === true) {
          vm.$bus.$emit('message:push', response.data.message, 'success');
        } else if (response.data.success === false) {
          vm.$bus.$emit('message:push', response.data.message, 'danger');
        }
        vm.$store.dispatch('updateLoading', false);
        vm.getCart();
      });
    },
    goCheckout() {
      this.$router.push('/customer_order');
    },
  },
  computed: {
    ...mapGetters(['cart']),
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.order-product-img {
  background-position: center center;
  background-size: cover;
  width: 100px;
  height: 100px;

  @media (max-width: 575.98px) {
    width: 100px;
    height: 60px;
  }
}

thead {
  th {
    @media (max-width: 575.98px) {
      font-size: 13px;
      font-weight: bold;
      padding-bottom: 10px;
      padding-top: 10px;
    }
  }
}
.order-product-table td {
  border: 0;
}

.check-order tbody {
  font-size: 15px;
}

.form-control:focus {
  border-color: rgba(107, 201, 224, 0.91);
  box-shadow: 0 0 0 0.2rem rgba(220, 235, 241, 0.92549);
}
</style>
