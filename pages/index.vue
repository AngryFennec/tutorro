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
    </v-col>
    <v-col>
      <Form />
    </v-col>
  </v-row>
</v-main>
</template>

<script>
import Form from '~/components/Form'
export default {
  components: { Form },
  layout: 'index'
}
</script>
