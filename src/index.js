import './css/style.css';
import './css/card.css';
import './css/form.css';
import buttonHandler from './functions/buttonHandler';
import { displayItems, displayProjects} from './functions/displayItems';
import { List, ToDo } from './functions/factoryFunctions';

//Object of Lists of ToDos
const ProjectList = {
    all: List("all",true),
    today: List("today",true),
    "next 7 days": List("next 7 days",true),
    overdue: List("overdue",true),
};
buttonHandler(ProjectList);

ProjectList["all"].addItem(ToDo('Laundry','Two Loads','08-01-2023','high',));
ProjectList["all"].addItem(ToDo('Cook Dinner','Spaghetti','08-01-2023','high',));
// displayItems(listOne.getItems())