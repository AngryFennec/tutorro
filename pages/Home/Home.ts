import {Component, Vue} from "nuxt-property-decorator";
import Example from "~/components/Example/index.vue";

@Component({
  components: {
    Example
  },
})
export default class Home extends Vue {}
