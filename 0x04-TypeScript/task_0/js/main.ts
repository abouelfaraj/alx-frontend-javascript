interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "a",
  lastName: "ch",
  age: 30,
  location: "rbt";
  }

const student2: Student = {
  firstName: "b",
  lastName: "kh",
  age: 20,
  location: "tmr";
  }

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
const row = document.createElement('tr');
const cell_name = document.createElement('td');
const cell_location = document.createElement('td');

row.appendChild(cell_name);
row.appendChild(cell_location);
tbody.appendChild(row);
});

document.body.appendChild(table);
