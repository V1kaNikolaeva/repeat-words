<template>
    <div class="wrapper-all-results">
        <slot/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrapper-all-results {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-height: 220px;
    min-height: fit-content;
    width: 160px;
    overflow-y: auto;
    border: 1px solid rgba(26, 24, 47, 0.15);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
}
.wrapper-all-results::-webkit-scrollbar {
  width: 8px;
  background-color: rgba(26, 24, 47, 0.15);
  border-radius: 5px;
}

.wrapper-all-results::-webkit-scrollbar-thumb {
  width: 8px;
  background: rgba(26, 24, 47, 0.15);
  border-radius: 5px;
}


</style>