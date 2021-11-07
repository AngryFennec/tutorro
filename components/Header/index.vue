<template>
  <v-container>
    <v-row
      align='center'
      justify='space-between'
    >
      <v-col
        cols='10'
      >
        <h2>Tutor</h2>
        <span>A simple learning platform</span>
      </v-col>

      <v-col
        cols='2'
      >
        <v-avatar
          size='40'>
          <v-img
            alt='Avatar'
            src='https://cdn.vuetifyjs.com/images/john.png'></v-img>
        </v-avatar>
        <strong class='hidden-sm-and-down pl-2'>Ivanov Ivan</strong>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts' src='./Header.ts'/>
<style lang='scss' src='./Header.scss'/>
