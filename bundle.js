// export class User {
//   constructor(task) {
//     this.task = task;
//   }

//   do() {
//     this.task.run();
//   }
// }

class User {
  constructor(task) {
    this.task = task;
  }

  do() {
    this.task.run();
  }
}

// export class Task {
//   constructor(message) {
//     this.message = message;
//   }

//   run() {
//     console.log(this.message);
//   }
// }

class Task {
  constructor(message) {
    this.message = message;
  }

  run() {
    console.log(this.message);
  }
}

const task = new Task('Тут совсем любой текст');
const user = new User(task);

user.do();
