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
