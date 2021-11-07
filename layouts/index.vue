<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header/index'
import Footer from '~/components/Footer/index'

export default {
  components: { Footer, Header },
  data() {
    return {
      to: '/'
    }
  }
}
</script>
