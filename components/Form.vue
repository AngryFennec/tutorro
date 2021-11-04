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
            class='mb-8'
            v-model='select'
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

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Я учитель',
      'Я ученик',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>


