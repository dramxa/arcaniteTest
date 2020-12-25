<template>
    <v-card flat tile class="c-labeled-checkbox">
        <input class="c-labeled-checkbox__input" type="checkbox" 
            :disabled="isDisable" 
            :id="cbid" 
            :checked="stateInner" 
            @change="updateValue($event.target.checked)" 
        > 
            <label class="grey700 fs-xs c-labeled-checkbox__label" :class="classes" :for="cbid">
                <slot/>
            </label>
    </v-card>
</template>

<script>

export default {
    props:[
        'cbid', 'classes', 'isDisable', 'value'
    ],

    data(){
        return{
            stateInner: false
        }
    },

    methods: {
        updateValue(value){
            this.$emit('input', value)
            this.$emit('checked', value)
            this.$emit('click', value)
        }
    },

    watch:{
        value:{
            handler : function(value){
                this.stateInner = value;
            },
            immediate : true
        }
    }
}
</script>

<style lang="stylus" scoped>
.c-labeled-checkbox
    &__label
        width: 100%
        line-height: 18px
        height: 13px
</style>
<style scoped>
label {
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
input[type="checkbox"]:checked, 
input[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

input[type="checkbox"]:checked + label, 
input[type="checkbox"]:not(:checked) + label {
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 18px;    
}
input[type="checkbox"]:not([disabled]):checked + label, 
input[type="checkbox"]:not([disabled]):not(:checked) + label {   
    cursor: pointer;
}

input[type="checkbox"]:checked + label:before, 
input[type="checkbox"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 16px;
    height: 16px;
    border: 1px solid #B0BEC5;     /* Цвет рамки */
    background-color: #ffffff;     /* Цвет фона */
}
input[type="checkbox"]:checked + label:before {
    background-color: #9CCB3B;     /* Цвет фона (active) */
    border: 1px solid #9CCB3B;     /* Цвет рамки (active) */
}

input[type="checkbox"]:checked + label:before, 
input[type="checkbox"]:not(:checked) + label:before {
    border-radius: 2px;
}

input[type="checkbox"]:checked + label:after, 
input[type="checkbox"]:not(:checked) + label:after {
    content: "";
    position: absolute;
}

input[type="checkbox"]:checked + label:after {
    left: 3px;
    top: 3px;
    width: 10px;
    height: 6px;
    border-radius: 1px;
    border-left: 2px solid #fff;      /* Цвет галочки */
    border-bottom: 2px solid #fff;    /* Цвет галочки */
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

</style>