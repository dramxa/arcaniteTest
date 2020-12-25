<template>
    <div class="c-product">
        <div class="c-product__image" :style="`background-image: url('img/products/${image}');`">
        </div>
        <div class="c-product__description d-flex align-center">
            <div class="flex-grow-1">
                <div class="c-product__name mb-1">{{name}}</div>
                <div class="d-flex">
                    <div class="c-product__description-items d-flex align-center px-2 mr-2"><i class="icon-car mr-1"></i>{{deliveryCost}}</div>
                    <div class="c-product__description-items d-flex align-center px-2 mr-2"><i class="icon-time mr-1"></i>{{deliveryTime}}</div>
                    <div class="c-product__description-items d-flex align-center px-2"><i class="icon-coins mr-1"></i>{{cost}}</div>
                </div>
            </div>
            <div class="c-product__rating d-flex align-center justify-space-around">
                {{rating}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'name', 'rating', 'deliveryCost', 'deliveryTime', 'cost']
}
</script>

<style lang="stylus">
.c-product
    border-radius 10px
    overflow hidden
    &__description
        height 80px
        background #fff
        padding 5px 15px
    &__image
        height 246px
        background-position center center
        background-size cover
    &__name
        font-size 20px
    &__name, &__rating, &__description-items
        font-weight 600
    &__rating
        border-radius 50%
        background-color #9CCB3B
        font-size 24px
        color #fff
        width 57px
        height 57px
    &__description-items
        border-radius 5px
        background #F4F4F4
        font-size 14px
</style>