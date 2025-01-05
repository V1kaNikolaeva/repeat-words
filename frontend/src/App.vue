
<template>
<div class="main-divide">
<div class="head-wrapper">

  <header class="head">
    <nav class="head-nav">
      <LinkContainer :direction="'column'">
        <UiLink v-for="link in appLinks" :underline="underlines.header" :key="link.id" :pathName="link.name" :text="link.text">
          <template #icon>
            <IconNotes v-if="link.name === 'words'" :active="currentPath === link.name ? true : false"/>
            <IconFolders v-if="link.name === 'list'" :active="currentPath === link.name ? true : false"/>
            <IconCheck v-if="link.name === 'test'" :active="currentPath === link.name ? true : false"/>
            <IconBook v-if="link.name === 'exercises'" :active="currentPath === link.name ? true : false"/>
            <IconSettings v-if="link.name === 'settings'" :active="currentPath === link.name ? true : false"/>
          </template>
        </UiLink>
      </LinkContainer>
    </nav>

    <RouterLink :to="{ name: 'profile' }">
      <div class="account">
        <div class="picture">
          
        </div>
          name

          
      </div>
    </RouterLink>


  </header>
</div>

  <main class="main-view">
    <RouterView />
  </main>
</div>

</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { appLinks } from './core/options/links';
import UiLink from './core/components/ui/UiLink.vue'
import LinkContainer from './core/components/containers/LinkContainer.vue';
import { usePositionStore } from './store/position';
import { useSettingsStore } from './store/settings';
import { useWordsStore } from './store/words';
import { useThemeStore } from './store/theme';
import { underlines } from '@/types/enums';
import IconSettings from './core/components/icons/navigation/IconSettings.vue';
import { useRouter } from 'vue-router';
import router from './router';
import IconNotes from './core/components/icons/navigation/IconNotes.vue';
import IconFolders from './core/components/icons/navigation/IconFolders.vue';
import IconCheck from './core/components/icons/navigation/IconCheck.vue';
import IconBook from './core/components/icons/navigation/IconBook.vue';


onMounted(() => {
  const positionStore = usePositionStore()
  const settingsStore = useSettingsStore()
  const wordsStore = useWordsStore()
  const themeStore = useThemeStore()
  
  positionStore.init()
  settingsStore.init()
  wordsStore.setNewData()
  themeStore.init()

  const router = useRouter()
  
})

const currentPath = computed(() => {
  return String(router.currentRoute.value.name).split('.')[0] 
})

// get image from back

</script>

<style scoped>
.main-divide {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 32px);
  margin-top: 16px;

}
.main-view {
  max-width: 1600px;
  margin: 0 auto;
  overflow-y: auto;
  scrollbar-color: var(--scrollbar-color);
  scrollbar-width: thin;
  width: 100%;
}
.head-wrapper {
  max-width: 220px;
  margin-right: 12px;
}
.head {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: var(--nav-blocks-color);
  overflow-y: auto;
  scrollbar-color: var(--scrollbar-color);
  scrollbar-width: thin;
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
.account {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
}
.head-nav {
  margin: 20px;

}
.picture {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: var(--icons);
}
</style>
