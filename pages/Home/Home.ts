import {Component, Vue} from "nuxt-property-decorator";
import Form from "~/components/Form/index.vue";

@Component({
  components: {
    Form
  },
  layout: 'index'
})
export default class Home extends Vue {}
