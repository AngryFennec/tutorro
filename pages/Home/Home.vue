<template>
  <v-main>
    <v-row
      align='center'
    >
      <v-col
        class='mt-12'
        cols='12'
      >
        <h1>Авторизуйтесь, для начала работы</h1>
        <p>
          <NuxtLink to="{name: 'login'}">Ещё нет аккаунта?</NuxtLink>
        </p>
      </v-col>
      <v-col>
        <Form />
      </v-col>
    </v-row>
  </v-main>
</template>


<script lang='ts' src='./Home.ts' />
<style lang='scss' src='./Home.scss' />
