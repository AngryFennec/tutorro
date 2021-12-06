<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for='item in last'
        :key='`item-${item.id}`'
        :to='item.to'


      >
        <v-list-item-content>
          <v-row justify='center' align='center'>
            <v-col cols='12' sm='8' md='6'>
              <v-card
                color='#fffff'
                dark
              >

                <v-card-title class='text-h5'>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    block
                    color='primary'
                    outlined
                    rounded

                  >
                    Продолжить
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>

</template>

<script lang='ts' src='./History.ts'/>
<style lang='scss' src='./History.scss'/>
