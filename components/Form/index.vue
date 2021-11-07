<template>
  <v-flex lg8 xs12 sm8>
    <v-card>
      <v-card-text>
        <form>
          <v-text-field
            v-model='name'
            :error-messages='nameErrors'
            :counter='15'
            label='Ваше Имя'
            required
            @input='$v.name.$touch()'
            @blur='$v.name.$touch()'
          ></v-text-field>
          <v-text-field
            v-model='email'
            :error-messages='emailErrors'
            label='Ваш E-mail'
            required
            @input='$v.email.$touch()'
            @blur='$v.email.$touch()'
          ></v-text-field>
          <v-select
            v-model='select'
            class='mb-8'
            :items='items'
            :error-messages='selectErrors'
            label='Вы учитель или ученик?'
            required
            @change='$v.select.$touch()'
            @blur='$v.select.$touch()'
          ></v-select>


          <v-btn
            class='mr-4'
            @click='submit'
          >
            Войти
          </v-btn>
          <v-btn @click='clear'>
            Очистить форму
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<style lang='scss' src='./Form.scss' />
<script lang='ts' src='./Form.ts' />
