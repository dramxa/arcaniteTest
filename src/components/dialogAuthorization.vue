<template>
  <v-dialog v-model="dialog" max-width="435" width="90%" transition="dialog-bottom-transition">
        <div class="d-authorization">
            <i class="d-authorization__close-btn icon-close" @click="close()"></i>
            <div class="d-authorization__title">Вход в личный кабинет</div>
            <div class="d-authorization__number">
                <div class="d-authorization__number-title">Введите номер телефона</div>
                <input class="d-authorization__input" type="text">
            </div>
            <div class="mb-5">
                <input class="d-authorization__input" placeholder="Введите код из СМС-сообщения" type="text">
            </div>
            <div class="mb-5">
                <c-labeled-checkbox cbid="user-agreement" :value="userAgree">
                    Указывая номер телефона, я принимаю условия <a class="d-authorization__user-agreement-link">пользовательского соглашения</a>
                </c-labeled-checkbox>
            </div>
            <v-btn text class="d-authorization__btn mb-7" @click="logIn()">
                Войти
            </v-btn>
            <div class="d-authorization__first-time text-center">
                В первый раз? <span class="d-authorization__first-time-register">Зарегистрироваться</span>
            </div>
        </div>
    </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props:[ 'value' ],
    data(){
        return{
            dialog: false,
            userAgree: false
        }
    },
    watch:{
        value:{
            handler : function(value){
                this.dialog = value;
            },
            immediate : true
        }
    },
    computed:{
        ...mapGetters(['glb_authorize']),
    },
    methods:{
        ...mapActions(['glb_setAuthorize']),

        close(){
            this.$emit('close')
        },
        logIn(){
            this.glb_setAuthorize(true)
            this.$emit('close')
        }
    }

}
</script>

<style lang="stylus">
.d-authorization
    position relative
    padding 38px 38px 60px 38px
    background #ffffff
    border-radius 10px
    &__title
        font-weight 600
        font-size 20px
        margin-bottom 39px
    &__number
        margin-bottom 50px
    &__number-title
        margin-bottom 20px
        font-size 16px
        font-weight 600
        color #979797
    &__input
        display block
        height 40px
        width 100%
        background #F7F7F7
        border-radius 10px
        padding 5px 15px
    &__close-btn
        position absolute
        top 15px
        right 15px
        cursor pointer
        font-size 16px
    & &__btn
        width 100%
        height 50px !important
        border-radius 10px
        background #9CCB3B
        color #ffffff !important
        font-size 20px !important
        font-weight 600
    &__first-time
        font-size 18px
        font-weight 600
        color #979797
    &__first-time-register
        cursor pointer
        color #000
    &__user-agreement-link
        color #9CCB3B !important
</style>