<template>
    <MainContainer>
        <LinkContainer>
            <UiLink v-for="(item, index) in hsks" :key="index" :text="item.text" :pathName="item.pathName"/>
        </LinkContainer>
        <SecondContainer>
            <RouterView/>
        </SecondContainer>
    </MainContainer>
</template>

<script setup lang="ts">
import UiLink from '@/core/components/ui/UiLink.vue';
import LinkContainer from '@/core/components/containers/LinkContainer.vue';
import SecondContainer from '@/core/components/containers/SecondContainer.vue';
import MainContainer from '@/core/components/containers/MainContainer.vue';
import { hsks } from '@/core/options/links';

</script>

<style scoped>

</style>