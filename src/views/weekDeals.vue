<template>
    <v-container class="week-deals">
        <div class="d-flex mb-4 align-center">
            <div class="week-deals__title flex-grow-1" :class="{'week-deals__title--small': $vuetify.breakpoint.xs}">
                Предложения недели
            </div>
            <v-btn icon class="week-deals__navigation-btn mr-2" @click.prevent="prev()">
                <i class="icon-arrow-left"></i>
            </v-btn>
            <v-btn icon class="week-deals__navigation-btn" @click.prevent="next()">
                <i class="icon-arrow-right"></i>
            </v-btn>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in items" :key="index">
                <c-product v-bind="item" />
            </swiper-slide>
        </swiper>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                    name: 'Название ресторана',
                    image: '1.jpg',
                    rating: '4.7',
                    deliveryCost: '0 ₽',
                    deliveryTime: '20-30 мин',
                    cost: '₽₽₽',
                },
                {
                    name: 'Название ресторана',
                    image: '2.jpg',
                    rating: '5.0',
                    deliveryCost: '0 ₽',
                    deliveryTime: '20-30 мин',
                    cost: '₽₽₽',
                },
                {
                    name: 'Название ресторана',
                    image: '3.jpg',
                    rating: '3.7',
                    deliveryCost: '50 ₽',
                    deliveryTime: '20-30 мин',
                    cost: '₽₽₽',
                },
                {
                    name: 'Название ресторана',
                    image: '1.jpg',
                    rating: '4.2',
                    deliveryCost: '0 ₽',
                    deliveryTime: '20-30 мин',
                    cost: '₽₽₽',
                },
                {
                    name: 'Название ресторана',
                    image: '2.jpg',
                    rating: '4.1',
                    deliveryCost: '0 ₽',
                    deliveryTime: '20-30 мин',
                    cost: '₽₽₽',
                },
                {
                    name: 'Название ресторана',
                    image: '3.jpg',
                    rating: '4.7',
                    deliveryCost: '0 ₽',
                    deliveryTime: '20-30 мин',
                    cost: '₽₽₽',
                },
            ]
        }
    },
    computed:{
        swiperOptions(){
            return {
                slidesPerView: this.$vuetify.breakpoint.lgAndUp ? 3 : this.$vuetify.breakpoint.smAndDown ? 1 : 2,
                spaceBetween: 30,
            }
        }
    },
    methods:{
        prev(){
            this.$refs.mySwiper.$swiper.slidePrev(500, false)
        },
        next(){
            this.$refs.mySwiper.$swiper.slideNext(500, false)
        }
    }
}
</script>

<style lang="stylus">
.week-deals
    &__navigation-btn
        width 50px !important
        height 50px !important
        background #F0F0F0
        color #000000
        border-radius 50%
        font-size 18px !important
    &__title
        font-size 32px
        font-weight 600
        color #000
        &--small
            font-size 24px
</style>