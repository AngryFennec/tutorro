import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  public dateFooter: number = new Date().getFullYear();
}
