import {Component, Vue} from "nuxt-property-decorator";

type AcademicType = {
  id: number;
  lesson: string;
};

@Component
export default class Academic extends Vue {

  public get academics(): AcademicType[] {
    return [
      {
        id: 1,
        lesson: "L1",
      },
      {
        id: 2,
        lesson: "L2",
      }
    ];
  }
}
