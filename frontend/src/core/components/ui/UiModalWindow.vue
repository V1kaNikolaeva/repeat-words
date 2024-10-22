<template>
    <div class="modal-window">
        <slot/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.modal-window {
    z-index: 5;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    position: fixed;
    width: 300px;
    height: 300px;
    padding-top: 290px;
    padding-left: 20px;
    padding-right: 20px;
    left: 0;
    top: 190;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    overflow: auto;
}
</style>