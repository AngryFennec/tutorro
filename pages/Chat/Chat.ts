import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Chat extends Vue {
  data() {
    return {
      items: [
        {
          header: 'Today'
        },
        { divider: true },
        {
          avatar: 'https://picsum.photos/250/300?image=660',
          title: 'Meeting @ Noon',
          subtitle:
            `<span class='font-weight-bold'>Spike Lee</span> &mdash; I'll be in your neighborhood`
        },
        {
          avatar: 'https://picsum.photos/250/300?image=821',
          title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
          subtitle:
            '<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=783',
          title: 'Yes yes',
          subtitle:
            '<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations'
        },
        {
          header: 'Yesterday'
        },
        { divider: true },
        {
          avatar: 'https://picsum.photos/250/300?image=1006',
          title: 'Dinner tonight?',
          subtitle:
            '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=146',
          title: 'So long',
          subtitle:
            '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?'
        },
        {
          header: 'Last Week'
        },
        { divider: true },
        {
          avatar: 'https://picsum.photos/250/300?image=1008',
          title: 'Breakfast?',
          subtitle:
            '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=839',
          title:
            'Winter Porridge <span class="grey--text text--lighten-1"></span>',
          subtitle:
            '<span class="font-weight-bold">cc: Daniel</span> &mdash; Tell me more...'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=145',
          title: 'Oui oui',
          subtitle:
            '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?'
        }
      ]
    }
  }
};
