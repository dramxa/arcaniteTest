import Vue from 'vue'

import address             from '@/components/address'
import search              from '@/components/search'
import product             from '@/components/product'
import labeledCheckbox     from '@/components/labeledCheckbox'
import dialogAuthorization from '@/components/dialogAuthorization'


export default function () {
    Vue.component( 'c-address'         , address             )
    Vue.component( 'c-search'          , search              )
    Vue.component( 'c-product'         , product             )
    Vue.component( 'c-labeled-checkbox', labeledCheckbox     )
    Vue.component( 'd-authorization'   , dialogAuthorization )
}