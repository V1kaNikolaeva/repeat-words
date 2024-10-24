<template>
  <div>
  <label class="label" for="">{{ labelText }}</label>
  <div class="select">
    <UiButton :borderRadiusPosition="borderRadiusPosition" :bType="bTypes.select" :border="true" :openSelect="open" @click="selectBar">
      <template #text>
        {{ currentItem }}
      </template>
    </UiButton>

      <ul class="list">
        <li class="item" v-for="(item, index) in props.items" :key="index" :value="item.name" @click="pickedItem(item.name, item.value)">
          {{ item.name }}
        </li>
      </ul>

  </div>
</div>
</template>

<script setup lang="ts">
// import { vOnClickOutside } from '@vueuse/components'
import UiButton from './UiButton.vue';
import { ref, computed, type Ref } from 'vue';
import type { Select } from '@/types/types';
import { bTypes, Visibility } from '@/types/enums';

interface Props {
    items: Select[],
    showItemFirst: string,
    labelText: string
}

const props = defineProps<Props>()
// если список отрыт, пропс для кнопки чтобы изменить border
const borderRadiusPosition: Ref<boolean> = ref(false)

const emits = defineEmits(['update:modelValue']);

const visibility: Ref<string> = ref(Visibility.hidden);
const open: Ref<boolean> = ref(false);
const light: Ref<boolean> = ref(false);
const lightColor = computed(() => {
  return light.value ? '#7f7f7f' : '#3e3e3e'
})


// const outsideClose = () => {
//   light.value = false;
//   visibility.value = 'hidden';
//   open.value = false
// }

const selectBar = () => {
  open.value = !open.value;
  if (open.value === true) {
    light.value = true;
    visibility.value = Visibility.visible;
    borderRadiusPosition.value = true
  } else if (open.value === false) {
    light.value = false;
    visibility.value = Visibility.hidden;
    borderRadiusPosition.value = false
  }
};

const currentItem = props.showItemFirst ? ref(props.showItemFirst) : ref(props.items[0].name);
console.log(currentItem.value)
const pickedItem = (name: string, value: string) => {
  light.value = false;
  currentItem.value = name;
  open.value = !open.value;
  borderRadiusPosition.value = false
  visibility.value = 'hidden';
  emits('update:modelValue', value);
};
</script>

<style scoped>
.select {
  width: 130px;
}
.list {
  position: absolute;
  z-index: 6;
  width: 130px;
  background-color: var(--white);
  visibility: v-bind(visibility);
  border: 1px solid v-bind(lightColor);
  border-radius: 0px 0px 10px 10px;
}
.label {
  display: block;
  width: 100%;
  margin-bottom: 5px;
}
.item {
  padding: 5px;
  cursor: pointer;
}
.item:last-child {
  border-radius: 0px 0px 10px 10px;
}
.item:hover {
  background-color: var(--gray-hover);
}

</style>