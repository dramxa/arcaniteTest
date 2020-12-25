<template>
    <div class="top-menu">
        <v-container>
            <div v-if="this.$vuetify.breakpoint.mdAndUp" class="d-flex flex-wrap">
                <v-btn text class="top-menu__item" :class="{'top-menu__item--active': glb_currentSection == page.section}" v-for="page in pagesToShow" :key="page.id">
                    {{page.name}}
                </v-btn>
                <v-menu left nudge-bottom="12px" offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text class="top-menu__item" v-on="on">
                            Еще
                            <i class="top-menu__dropdown-icon icon-dropdown"></i>
                        </v-btn>
                    </template>
                    <v-list class="top-menu__dropdown-menu">
                        <v-list-item class="top-menu__dropdown-menu-item" v-for="page in pagesToHide" :key="page.id">
                            {{page.name}}
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div v-else>
                <swiper-slide v-for="(item, index) in items" :key="index">
                    <v-btn text class="top-menu__item" :class="{'top-menu__item--active': glb_currentSection == page.section}" v-for="page in pages" :key="page.id">
                        {{page.name}}
                    </v-btn>
                </swiper-slide>
            </div>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
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
    computed:{
        ...mapGetters(['glb_currentSection']),
        pagesToShow(){
            if(this.$vuetify.breakpoint.lgAndUp)
                return this.pages.slice(0, 9)
            if(this.$vuetify.breakpoint.md)
                return this.pages.slice(0, 7)
        },
        pagesToHide(){
            if(this.$vuetify.breakpoint.lgAndUp)
                return this.pages.slice(9)
            if(this.$vuetify.breakpoint.md)
                return this.pages.slice(7)
        }
    },
    methods:{
        ...mapActions(['glb_setCurrentSection']),
    },
}
</script>

<style lang="stylus">
.top-menu
    background #9CCB3B
    height 60px
    & &__item
        flex-basis 0
        flex-grow 1
        border-radius 5px
        height 40px
        font-weight 600
        font-size 18px
        color #fff
        padding 0 8px
    & &__item--active
        color #000
        background #fff
    &__dropdown-icon
        position absolute
        right 0
        font-size 14px
    &__dropdown-menu-item:hover
        cursor pointer
        background #F5F5F5
</style>