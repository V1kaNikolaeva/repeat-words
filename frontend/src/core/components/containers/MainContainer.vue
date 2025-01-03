<template>
    <div class="main-container">
        <slot/>
    </div>
</template>

<script setup lang="ts"></script>


<style>
.main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 30px);
    margin-left: 40px;
    margin-top: 10px;
}
</style>