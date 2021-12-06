import { Component, Vue } from 'nuxt-property-decorator';

type StudentsType = {
  id: number;
  title: string;
  class: number;
  progress:number;
  name: string,
}

@Component
export default class Students extends Vue {
  public get students(): StudentsType[] {
    return [
      {
        id: 1,
        title: "Физика",
        class: 7,
        progress: 23,
        name: "Петя Пупкин",
      },
      {
        id: 2,
        title: "Математика",
        class: 8,
        progress: 89,
        name: "Вася Головин",
      },
      {
        id: 3,
        title: "Геометрия",
        class: 4,
        progress: 12,
        name: "Акакий Петровский",
      },
      {
        id: 4,
        title: "Русский язык",
        class: 9,
        progress: 45,
        name: "Игоря Чкалов",
      },
      {
        id: 5,
        title: "История",
        class: 5,
        progress: 78,
        name: "Иван Поддубный",
      },
      {
        id: 7,
        title: "Шахматы",
        class: 6,
        progress: 67,
        name: "Стас Козявкин",
      },
      {
        id: 8,
        title: "Римское право",
        class: 11,
        progress: 11,
        name: "Илья Заичкин",
      },
    ]
  }


}
