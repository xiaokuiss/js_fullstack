<template>
    <div class="container">
        <div class="star-left">
            <div class="star_fs">{{seller.score}}</div>
            <div class="zhpf">综合评分</div>
            <div class="xqpj">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="star_center"></div>
        <div class="star_right">
            <div class="star_top">
                <div class="star_fwtd">服务态度</div>
                <div class="fwx"></div>
                <div class="star_tdpf">{{seller.serviceScore}}</div>
            </div>
            <div class="star_mid">
                <div class="star_fwtd">商品评分</div>
                <div class="fwx"></div>
                <div class="star_tdpf">{{seller.foodScore}}</div>
            </div>
            <div class="star_bom">
                <div class="star_sj">送达时间</div>
                <div class="star_time">{{deliveryTime}}分钟</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Ratings',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: [],
      classMap: [],
      detailShow: false
    }
  },
  // components: {
  //  star
  // },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    this.$http
      .get("https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller")
      .then(res => {
        if (res.data.errno === 0) {
          this.ratings = res.data.data;
         
        }
      });
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.container
  width 100%
  height 100%
  background-color black
  display flex



</style>
