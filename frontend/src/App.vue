
<template>
<div class="main-divide">
<div class="head-wrapper">

  <header class="head">
    <nav class="head-nav">
      <LinkContainer :direction="'column'">
        <UiLink v-for="link in appLinks" :underline="underlines.header" :key="link.id" :pathName="link.name" :text="link.text" />
      </LinkContainer>
    </nav>
    <div class="account">
      <RouterLink :to="{ name: 'profile' }">
        name
      </RouterLink>
      <div class="picture">
        
      </div>
    </div>
  </header>
</div>

  <main class="main-view">
    <RouterView />
  </main>
</div>

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

// get image from back

</script>

<style scoped>
.main-divide {
  display: flex;
  flex-direction: row;
}
.main-view {
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
}
.head-wrapper {
  position: fixed;
  max-width: 370px;
  top: 10px;
  bottom: 10px;
}
.head {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: var(--bg-nav-green);
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
