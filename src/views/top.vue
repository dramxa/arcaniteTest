<template>
<div class="toolbar">
    <v-container class="py-0 px-3">
        <div class="toolbar__wrapper d-flex align-center justify-space-between">
            <v-btn v-if="$vuetify.breakpoint.smAndDown" text class="toolbar__menu-btn pa-0 d-flex align-center justify-space-around" @click="openMobileMenu()">
                <i class="mdi mdi-menu"></i>
            </v-btn>
            <div class="toolbar__logo mr-2">
                <img v-if="$vuetify.breakpoint.mdAndUp" :src="require('../../public/img/logo.svg')" alt="">
                <img v-if="$vuetify.breakpoint.smAndDown" :src="require('../../public/img/mobile-logo.svg')" alt="">
            </div>
            <div class="flex-grow-1 toolbar__address" v-if="$vuetify.breakpoint.smAndUp">
                <c-address />
            </div>
            <div class="toolbar__actions d-flex align-center">
                <c-search/>
                <v-btn v-if="!glb_authorize" text class="toolbar__login-btn" @click="dialog=true">
                    <i class="icon-login mr-2"></i> <span class="d-none d-md-inline">Войти</span>
                </v-btn>
                <v-menu right nudge-bottom="26px" nudge-left="70%" offset-y v-else>
                    <template v-slot:activator="{ on }">
                        <v-btn text  class="toolbar__user" v-on="on">
                            <i class="icon-user"></i>
                        </v-btn>
                    </template>
                    <v-list class="toolbar__user-menu">
                        <v-list-item class="toolbar__user-menu-item">
                            <i class="icon-user mr-3"></i> Личные данные
                        </v-list-item>
                        <v-list-item class="toolbar__user-menu-item">
                            <i class="icon-mark-plus mr-3"></i> Адреса доставки
                        </v-list-item>
                        <v-list-item class="toolbar__user-menu-item">
                            <i class="icon-check mr-3"></i> Предыдущие заказы
                        </v-list-item>
                        <v-divider/>
                        <v-list-item class="toolbar__user-menu-item" @click="logOut()">
                            <i class="icon-logout mr-3"></i> Выход
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn text class="toolbar__cart-btn">
                    <i class="icon-cart"></i>
                </v-btn>
            </div>
        </div>
        <d-authorization :value="dialog" @close="closeDialog()" />
    </v-container>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dialogAuthorization from '../components/dialogAuthorization.vue'
export default {
  components: { dialogAuthorization },
    data(){
        return {
            dialog: false
        }
    },
    computed:{
        ...mapGetters(['glb_authorize']),
    },
    methods:{
        ...mapActions(['glb_setAuthorize']),
        closeDialog(){
            this.dialog = false
        },
        logOut(){
            this.glb_setAuthorize(false)
        },
        openMobileMenu(){
            this.$emit('menu')
        }
    }
}
</script>

<style lang="stylus">
.toolbar, .toolbar__wrapper
    height 89px
    background #ffffff
    &__logo
        height 40px
        & img
            height 40px
    &__address
        max-width 450px
    &__search-btn i, &__login-btn i, &__cart-btn i
        font-size 24px
    & &__actions &__search-btn, & &__actions &__login-btn, & &__actions &__cart-btn
        font-size 18px
        font-weight 600
    &__user i 
        font-size 24px
        color #000000
    &__user-menu-item i
        font-size 24px
    &__user-menu-item:hover
        cursor pointer
        background #F5F5F5
    &__menu-btn
        min-width 38px !important
        width 38px !important
        height 38px !important
        font-size 30px !important
    &__menu-btn i 
        position relative
        top 2px
        right 2px
</style>