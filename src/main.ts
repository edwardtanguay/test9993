import './style.css'
import employees from './data/employees.json';

// interface IUser {
//   firstName: string;
//   lastName: string;
//   age: number;
//   greet: () => string;
// }

// const user1: IUser = {
//   firstName: 'Kyle',
//   lastName: 'Thomsonson',
//   age: 7,
//   greet: function () {
//     return '';
//   }
// }

// user1.greet = function () {
//   return 'he is ' + this.age;
// }

let html = '';
for (const employee of employees) {
  html += `
  <div class="employee">
  <div>${employee.firstName} ${employee.lastName} - ${employee.address.phone}</div> 
  </div>
  `;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>There are ${employees.length} employees</h1>
    ${html}
  </div>
`
