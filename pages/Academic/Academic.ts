import {Component, Vue} from "nuxt-property-decorator";

type AcademicType = {
  id: number;
  lesson: string;
  classes: number;
  hours: number;
};

@Component
export default class Academic extends Vue {
  public get academics(): AcademicType[] {
    return [
      {
        id: 1,
        lesson: "Физика",
        classes: 8,
        hours: 167,
      },
      {
        id: 2,
        lesson: "Математика",
        classes: 6,
        hours: 87,
      },
      {
        id: 3,
        lesson: "Геометрия",
        classes: 9,
        hours: 34,
      },
      {
        id: 4,
        lesson: "Астрономия",
        classes: 10,
        hours: 23,
      },
      {
        id: 5,
        lesson: "Русский язык",
        classes: 8,
        hours: 90,
      },
      {
        id: 6,
        lesson: "История",
        classes: 6,
        hours: 67,
      },
      {
        id: 7,
        lesson: "Шахматы",
        classes: 8,
        hours: 34,
      },
      {
        id: 8,
        lesson: "Физика",
        classes: 10,
        hours: 89,
      },
      {
        id: 9,
        lesson: "Римское право",
        classes: 11,
        hours: 34,
      },
      {
        id: 10,
        lesson: "Рисование",
        classes: 3,
        hours: 167,
      },
    ];

  }
}
