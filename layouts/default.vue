<template>

  <v-app dark>
    <v-system-bar
      app
      height='72'
      color='grey darken-1'
    >
    <Header />
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

     <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer/index'
import Header from '~/components/Header/index'
export default {
  components: { Header, Footer },
  created() {
    this.$store.dispatch('loadTeachersList')
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-history',
          title: 'Последнее',
          to: '/last'
        },
        {
          icon: 'mdi-book-education',
          title: 'Предметы',
          to: '/academic'
        },
        {
          icon: 'mdi-account-details',
          title: 'Ученики',
          to: '/students'
        },
        {
          icon: 'mdi-chat-processing-outline',
          title: 'Чат',
          to: '/chat'
        },
        {
          icon: 'mdi-table',
          title: 'Расписание',
          to: '/schedule'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  }
}
</script>
