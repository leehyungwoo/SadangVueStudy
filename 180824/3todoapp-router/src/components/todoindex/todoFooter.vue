<template>
    <div>
        <button @click="clearAllBtn">clearAll</button>
    </div>
</template>

<script>
    export default {
        name:'todoFooter',
        methods:{
            clearAllBtn(){
                this.$emit('emitClearAll')
            }
        }
    }
</script>
