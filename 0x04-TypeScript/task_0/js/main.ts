interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
        firstName: "Rohn",
        lastName: "Foe",
        age: 30,
        location: "Lisbon"
}

const student2: Student = {
	firstName: "John",
        lastName: "Doe",
        age: 37,
        location: "Nairobi"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "pink";
table.appendChild(tbody);

studentList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td);
  const locationCell = document.createElement('td);

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid green";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});
