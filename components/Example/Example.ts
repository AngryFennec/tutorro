import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Example extends Vue {
  public smile: string = '^_^';

  public onBtnClick(): void {
    this.smile === '^_^' ? this.smile = 'o_O' : this.smile = '^_^';
  }
}
