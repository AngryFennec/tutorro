import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class History extends Vue {
  data() {
    return {
      items: [
        {
          title: '1',
          to: '/'
        },
        {
          title: '2',
          to: '/'
        },
        {
          title: '3',
          to: '/'
        },
        {
          title: '4',
          to: '/'
        },
        {
          title: '5',
          to: '/'
        },
        {
          title: '6',
          to: '/'
        }
      ],
      title: 'Физика. 10 класс'
    }
  }
}
