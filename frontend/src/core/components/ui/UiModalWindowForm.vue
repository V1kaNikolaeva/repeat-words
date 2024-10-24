<template>
    <div v-if="props.isModalActive" class="modal-window">
        <div class="modal-content">
            <UiButton @click="exit" :bType="bTypes.exit" class="exit-cross">
                <template #right-icon>
                    <IconCross/>
                </template>
            </UiButton>

            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { bTypes } from '@/types/enums';
import UiButton from './UiButton.vue';
import IconCross from '../icons/IconCross.vue';


const props = defineProps<{ isModalActive: boolean }>()
const emit = defineEmits(['update:isModalActive']) 
const exit = () => {
    emit('update:isModalActive', !props.isModalActive)
}

</script>

<style scoped>
.modal-window {
  z-index: 5;
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 200px;
  padding-left: 20px;
  padding-right: 20px;
  left: 0;
  top: 0;
  background-color: rgb(34, 34, 34);
  background-color: rgba(36, 36, 36, 0.4);
  overflow: auto;
}


.modal-content {
  position: relative;
  max-width: 700px;
  margin: auto;
  padding: 40px;
  -webkit-box-shadow: 0px 13px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 13px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 0px 13px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: var(--white);
  border-radius: 10px;
}
</style>