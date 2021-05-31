import nounAnalytics from "../../../assets/icons/nounAnalytics.png";
import nounBook from "../../../assets/icons/nounBook.png";
import nounCity from "../../../assets/icons/nounCity.png";
import nounFile from "../../../assets/icons/nounFile.png";
import nounPeople from "../../../assets/icons/nounPeople.png";
import nounSettings from "../../../assets/icons/nounSettings.png";
import { Page, paths } from "./../../../core/routes/constants";

export const links = [
  {
    id: "1",
    path: paths[Page.KNOWLEDGEBASE],
    name: "База знаний",
    icon: nounBook,
  },
  {
    id: "2",
    path: paths[Page.REQUESTS],
    name: "Заявки",
    icon: nounFile,
  },
  {
    id: "3",
    path: paths[Page.STAFF],
    name: "Сотрудники",
    icon: nounPeople,
  },
  {
    id: "4",
    path: paths[Page.CLIENTS],
    name: "Клиенты",
    icon: nounCity,
  },
  {
    id: "5",
    path: paths[Page.ASSETS],
    name: "Активы",
    icon: nounAnalytics,
  },
  {
    id: "6",
    path: paths[Page.SETTINGS],
    name: "Настройки",
    icon: nounSettings,
  },
];
