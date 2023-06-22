import './css/style.css';
import './css/card.css';
import './css/form.css';
import buttonHandler from './functions/buttonHandler';
import { displayItems, displayProjects} from './functions/displayItems';
import { List, ToDo } from './functions/factoryFunctions';

//List of Lists of ToDos
const ProjectList = List("All", "Today", "Next 7 Days", "Overdue");
buttonHandler(ProjectList);

const projects = List();
projects.addItem("Homework");

// let listOne = List();
// listOne.addItem(ToDo('Laundry','Separate colors from whites','08-01-2023','high',));
// listOne.addItem(ToDo('Cook Dinner','Spaghetti','08-01-2023','high',));
// displayItems(listOne.getItems())