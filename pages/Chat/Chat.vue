<template>
  <v-row justify='center'>
    <v-col
      cols='12'
      sm='8'
      md='6'
    >
      <v-card>

        <v-list two-line>
          <template v-for='(item, index) in items'>
            <v-subheader
              v-if='item.header'
              :key='item.header'
              inset
            >
              {{
                item.header
              }}
            </v-subheader>

            <v-divider
              v-else-if='item.divider'
              :key='Chat'
              inset
            ></v-divider>

            <v-list-item
              v-else
              :key='item.title'
              ripple
            >
              <v-list-item-avatar>
                <img :src='item.avatar'>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html='item.title'></v-list-item-title>
                <v-list-item-subtitle
                  v-html='item.subtitle'
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang='ts' src='./Chat.ts' />
<style lang='scss' src='./Chat.scss'/>
