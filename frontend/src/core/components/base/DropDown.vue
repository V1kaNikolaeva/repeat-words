<template>
    <div class="list__container">
        <UiButton @click="show = !show">
            <template #left-icon>
                <IconDown v-show="show"/>
                <IconUp v-show="!show"/>
            </template>
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
import IconUp from '../icons/IconUp.vue';
import IconDown from '../icons/IconDown.vue';



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
.ul-dropdown {
    border: 1px solid black;
    border-radius: 20px;
    background-color: var(--white);
}
.wrapper__ul {
    position: absolute;
    top: 52px;
    width: 100%;
}

</style>