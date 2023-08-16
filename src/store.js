import { makeAutoObservable } from "mobx"

class store {
   inputZone = [
      { type: "questionName", description: "наименование вопроса", placeholder: "введите наименование вопроса" },
      { type: "description", description: "описание вопроса" },
      {
         type: "choosing",
         description: "постановщик задачи",
         vaiants: ["руководитель отдела", "исполнительный директор"],
      },
      { type: "date", description: "дата создания", placeholder: "08/25/2007" },
      {
         type: "choosing",
         description: "исполнитель",
         vaiants: ["руководитель отдела", "исполнительный директор"],
      },
      {
         type: "choosing",
         description: "исполнитель",
         vaiants: ["руководитель отдела", "исполнительный директор"],
      },
      {
         type: "choosing",
         description: "входящий вопрос",
         vaiants: ["отсутствует", "в работе"],
      },
      {
         type: "choosing",
         description: "входящий вопрос",
         vaiants: ["отсутствует", "в работе"],
      },
      {
         type: "choosing",
         description: "приоритет срочности",
         vaiants: ["срочно", "в течении недели", "в течении месяца"],
      },
      { type: "date", description: "дата создания", placeholder: "08/25/2007" },
      {
         type: "choosing",
         description: "тип вопроса",
         vaiants: ["авария на предриятии", "неполадки оборудования"],
      },
      {
         type: "choosing",
         description: "раздел вопроса",
         vaiants: ["юридический", "снабжение", "прочие"],
      },
      {
         type: "text",
         description: "период выполнения",
         placeholder: "введите период выполнения",
      },
      {
         type: "choosing",
         description: "статус решения",
         vaiants: ["в процессе", "решен", "заморожен"],
      },
      {
         type: "resolution",
         description: "резолюция",
      },
   ]
   constructor() {
      makeAutoObservable(this)
   }
}

export default new store()
