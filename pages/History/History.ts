import { Component, Vue } from 'nuxt-property-decorator';

type HistoryType = {
  id: number;
  title: string;
  subtitle: string;
}

@Component
export default class History extends Vue {
 public get last(): HistoryType[] {
   return [
     {
       id: 1,
       title: "Физика",
       subtitle: "Кинематика точки и твердого тела",
     },
     {
       id: 2,
       title: "Математика",
       subtitle: "Сложение простых чисел",
     },
     {
       id: 3,
       title: "Геометрия",
       subtitle: "Ромб",
     },
     {
       id: 4,
       title: "Астрономия",
       subtitle: "Далёкие галактики",
     },
     {
       id: 5,
       title: "Русский язык",
       subtitle: "Части предложения",
     },
     {
       id: 6,
       title: "История",
       subtitle: "Восстание машин 2205 года",
     },
   ]
 }
}
