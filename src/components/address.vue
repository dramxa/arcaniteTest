<template>
    <div class="c-address">
        <div v-show="glb_address !== null" class="c-address--set" @click="unsetAddress">
            <i class="c-address__icon-mark icon-mark mr-2"></i>{{glb_address}}
        </div>
        <div v-show="glb_address === null"  class="c-address--unset">
            <div class="c-address__input-block d-flex align-center">
                <i class="c-address__icon-mark icon-mark  mr-2"></i>
                <input ref="address-input" class="c-address__input flex-grow-1" v-model="address" @input="getAddressList()" type="text" placeholder="Введите адрес доставки">
                <v-divider vertical />
                <i class="c-address__icon-close icon-close ml-3" @click="clear()"></i>
                <div class="c-address__suggestions-block py-2" v-if="suggestionAddressList.length">
                    <div class="c-address__suggestions-row d-flex py-1 align-center" v-for="(item, index) in suggestionAddressList" :key="index" @click="setAddress(item)">
                        <div class="c-address__suggestions-icon d-flex align-center">
                            <i class="icon-mark"></i>
                        </div>
                        <span class="c-address__suggestions-address">{{item.value}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
    data(){
        return{
            address: '',
            addressObject: null,
            suggestionAddressList: [],
        }
    },
    computed:{
        ...mapGetters(['glb_address']),

        isValidAddress(){
            if(this.addressObject === null)
                return false
            if(this.addressObject.house === null)
                return false
            return true
        }
    },
    methods:{
        ...mapActions(['glb_setAddress']),

        getAddressList(){
            let url ='https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
            let token ='16e38a1428c7ff1accd7f8b28dd7740788ca6a0b'
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            }
            let params = {
                query: this.address,
                count: 10,
                from_bound: { value: "street" },
                to_bound: { value: "house" },
                locations: [{ region: "москва" }],
            }
            let results = []
            axios.post(url, params, {headers}).then(
                function (response) {
                    if(response.data.suggestions.length){
                        response.data.suggestions.forEach(s=>{
                            results.push({
                                data: s.data,
                                value: s.value.replace('г Москва, ', '')
                            })
                        })
                    }
                }
            )
            this.suggestionAddressList = results
        },
        setAddress(item){
            this.address = item.value
            this.addressObject = item.data
            if(this.isValidAddress)
                this.glb_setAddress(this.address)
            else{
                this.$refs['address-input'].focus()
                this.getAddressList()
            }
        },
        clear(){
            this.address = ''
            this.addressObject = null
        },
        unsetAddress(){
            this.address = this.glb_address
            this.glb_setAddress(null)
            this.$nextTick(() => {
                this.$refs['address-input'].focus()
            })
            this.getAddressList()
        }
    }
}
</script>

<style lang="stylus">
.c-address
    &--set, &--unset
        font-weight 600
    &--set
        display flex
        align-items center
        font-size 18px
        cursor pointer
    &__input-block
        position relative
        border-radius 5px
        height 40px
        background #F5F5F5
        padding 5px 12px
        width 100%
    &__icon-mark
        font-size 28px
    &__icon-close
        font-size 16px
        cursor pointer
    &__suggestions-block
        position absolute
        z-index 2
        top 100%
        left 0
        right 0
        border-radius 5px
        background #ffffff
        box-shadow 0px 4px 8px -2px rgba(0,0,0,0.4)
    &__suggestions-row
        padding 5px 14px
        cursor pointer
    &__suggestions-row:hover
        background #F5F5F5
    &__suggestions-icon
        border-radius 50%
        background #F5F5F5
        color #585858
        padding 4px
        margin-right 13px
    &__suggestions-address
        font-weight 600
        font-size 16px
        color #979797
</style>