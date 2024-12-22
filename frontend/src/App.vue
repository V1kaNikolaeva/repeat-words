
<template>
  
  <header class="head">
    <div class="wrapper">
      <nav>
        <LinkContainer>
          <UiLink v-for="link in appLinks" :underline="underlines.header" :key="link.id" :pathName="link.name" :text="link.text" />
        </LinkContainer>
      </nav>
    </div>
  </header>

  <main class="main-view">
    <RouterView />
  </main>

</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { appLinks } from './core/options/links';
import UiLink from './core/components/ui/UiLink.vue'
import LinkContainer from './core/components/containers/LinkContainer.vue';
import { usePositionStore } from './store/position';
import { useSettingsStore } from './store/settings';
import { useWordsStore } from './store/words';
import { useThemeStore } from './store/theme';
import { underlines } from '@/types/enums';


onMounted(() => {
  const positionStore = usePositionStore()
  const settingsStore = useSettingsStore()
  const wordsStore = useWordsStore()
  const themeStore = useThemeStore()
  
  positionStore.init()
  settingsStore.init()
  wordsStore.setNewData()
  themeStore.init()
})
</script>

<style scoped>
.main-view {
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  padding-top: 80px;

}
.head {
  width: 100%;
  max-width: 1600px;
  height: 68px;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header-link {
  margin-right: 30px;
}
.header-link:last-child {
  margin-right: 0;
}
.active-link {
  border-bottom: 1px solid rgb(0, 0, 0);
}
</style>
