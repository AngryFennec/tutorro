<template>
  <v-container>
    <v-row
      align='center'>
      <v-col>
        <v-card v-for="academic in academics"
          :key="`academic-${academic.id}`"
          class='mx-auto'
          max-width='344'
        >
          <v-card-text>
            <div>Класс: 6 - 11</div>
            <p class='text-h4 text--primary'>
              {{ academic.lesson }}
            </p>

            <div class='text--primary'>
              Общее количество уроков: 167
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              color='primary'
              outlined
              rounded
            >
              Перейти в предмет
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts' src='./Academic.ts' />
<style lang='scss' src='./Academic.scss' />
