<template>
<div class="c-search">
    <div v-show="activeSearch">
        <div class="c-search__input-block d-flex align-center">
            <i class="c-search__icon-mark icon-search  mr-2"></i>
            <input ref="search-input" class="c-search__input flex-grow-1" v-model="search" @blur="inputBlur" type="text" placeholder="Что ищем?">
            <v-divider vertical />
            <i class="c-search__icon-close icon-close ml-3" @click="clear()"></i>
        </div>
    </div>
    <div v-show="!activeSearch">
        <v-btn text class="c-search__activation-btn" @click="activateSearch()">
            <i class="icon-search mr-2"></i> <span class="d-none d-md-inline">Поиск</span>
        </v-btn>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            activeSearch: false
        }
    },
    methods:{
        inputBlur(){
            if(this.search == '')
                this.activeSearch = false
        },
        clear(){
            this.search = ''
            this.$refs['search-input'].focus()
        },
        activateSearch(){
            this.activeSearch = true
            this.$nextTick(() => {
                this.$refs['search-input'].focus();
            })
            
        }
    }
}
</script>

<style lang="stylus">
.c-search
    & &__activation-btn i
        font-size 24px
    & &__activation-btn
        font-size 18px
        font-weight 600
    &__input-block
        position relative
        border-radius 5px
        height 40px
        background #F5F5F5
        padding 5px 12px
        width 100%
    &__input
        font-size 18px
        font-weight 600
        color #979797
    &__icon-mark
        font-size 21px
    &__icon-close
        font-size 16px
        cursor pointer
</style>