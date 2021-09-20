<template>
  <div class="example">
    <p class="example__text">Hi, I'm component {{ smile }}</p>
    <v-btn elevation="2"
      @click="onBtnClick"
    >Btn for click check</v-btn>
  </div>
</template>

<script lang="ts" src="./Example.ts" />
<style lang="scss" src="./Example.scss" />
