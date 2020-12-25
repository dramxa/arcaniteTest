<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="100%"
      class="mobile-menu"
    >
        <div class="d-flex mb-6 mt-2">
            <v-btn text class="mobile-menu__close-btn pa-0 d-flex align-center justify-space-around" @click="close()">
                <i class="mdi mdi-close"></i>
            </v-btn>
            <div class="mobile-menu__logo flex-grow-1 text-center">
                <img :src="require('../../public/img/logo.svg')" alt="">
            </div>
        </div>
        <c-address class="px-6 mb-3" />
        <v-list>
            <v-list-item class="mobile-menu__item px-8" v-for="page in pages" :key="page.id" @click="close()">
                {{page.name}}
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ['value'],
    data(){
        return{
            drawer: false,
            pages:[
                {
                    id: 1,
                    href: '#1',
                    name: 'Все',
                    section: 'all'
                },
                {
                    id: 2,
                    href: '#2',
                    name: 'Суши',
                    section: 'sushi'
                },
                {
                    id: 3,
                    href: '#3',
                    name: 'Пицца',
                    section: 'pizza'
                },
                {
                    id: 4,
                    href: '#4',
                    name: 'Бургеры',
                    section: 'burgers'
                },
                {
                    id: 5,
                    href: '#5',
                    name: 'Фастфуд',
                    section: 'fastfood'
                },
                {
                    id: 6,
                    href: '#6',
                    name: 'Шашлыки',
                    section: 'kebabs'
                },
                {
                    id: 7,
                    href: '#7',
                    name: 'Азиатская',
                    section: 'asian'
                },
                {
                    id: 8,
                    href: '#8',
                    name: 'Десерты',
                    section: 'desserts'
                },
                {
                    id: 9,
                    href: '#9',
                    name: 'Здоровая еда',
                    section: 'helthy'
                },
                {
                    id: 10,
                    href: '#10',
                    name: 'Напитки',
                    section: 'drinks'
                },
                {
                    id: 11,
                    href: '#11',
                    name: 'Супы',
                    section: 'soups'
                },
                {
                    id: 12,
                    href: '#12',
                    name: 'Салаты',
                    section: 'salats'
                }
            ]
        }
    },
    watch:{
        value:{
            handler : function(value){
                this.drawer = value;
            },
            immediate : true
        }
    },
    methods:{
        close(value){
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus">
.mobile-menu
    z-index 2 !important
    &__logo
        height 60px
        & img
            height 60px
    &__close-btn
        width 60px !important
        height 60px !important
        font-size 40px !important
        & i
            position relative
            right 5px
    &__item:hover
        cursor pointer
        background #F5F5F5
</style>