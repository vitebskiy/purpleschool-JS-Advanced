import { User } from "./user.js";
import { Task } from "./task.js";

const task = new Task('Тут совсем любой текст');
const user = new User(task);

user.do();