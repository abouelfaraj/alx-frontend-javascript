interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	contract: boolean;
	[propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor {
  new (first: string, lastName: string): StudentClassInterface;
  }
 
interface StudentClassInterface {
  workOnHomeWork(): string;
  displayName(): string; 
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName= lastName;
  }

  workOnHomework():string {
    return "Currently working";
    }
  displayName(): string {
    return this.firstName;
    }
};

export { printTeacher, StudentClass };
