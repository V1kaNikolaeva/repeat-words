<template>
    <div class="list__container">
        <UiButton @click="show = !show" :bType="bTypes.dropDown">
            <template #text>
                {{ props.buttonText }}
            </template>
        </UiButton>
        <div class="wrapper__ul">
            <ul class="ul-dropdown" v-if="show">
                <slot name="list" />
            </ul>

            <slot name="advice" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef, type Ref } from 'vue';
import UiButton from '../ui/UiButton.vue';
import { bTypes } from '@/types/enums';

interface Props {
    buttonText: string,
}
const props = defineProps<Props>()
const show: Ref<boolean> = shallowRef(false)



</script>

<style scoped>
.list__container {
    display: flex;
    flex-direction: column;
    position: relative;
}
.wrapper__ul {
    position: absolute;
    top: 52px;
    width: 100%;
}

</style>