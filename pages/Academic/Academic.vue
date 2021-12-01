<template>
  <v-container>
    <v-row
      align='center'
      justify='center'
    >
      <v-col cols='12' sm='8' md='6'>
        <v-card v-for='academic in academics'
                :key='`academic-${academic.id}`'
                class='mx-auto'
                max-width='344'
        >
          <v-card-text>
            <div>Класс: {{ academic.classes }}</div>
            <p class='text-h4 text--primary'>
              {{ academic.lesson }}
            </p>

            <div class='text--primary'>
              Общее количество уроков: {{ academic.hours }}
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
