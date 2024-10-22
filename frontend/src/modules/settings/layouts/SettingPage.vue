<template>
    <MainContainer>
        <LinkContainer>
            <UiLink v-for="(item, index) in settingsLinks" :pathName="item.pathName" :text="item.text" :key="index"/>
        </LinkContainer>
        <!-- SETTING BLOCK -->
        <SecondContainer>
            <RouterView/>
        </SecondContainer>    
    </MainContainer>
</template>

<script setup lang="ts">

import MainContainer from '@/core/components/containers/MainContainer.vue';
import LinkContainer from '@/core/components/containers/LinkContainer.vue';
import UiLink from '@/core/components/ui/UiLink.vue';
import { settingsLinks } from '@/core/options/links';
import SecondContainer from '@/core/components/containers/SecondContainer.vue';

</script>

<style scoped>
.settings-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>


