export default function createReportObject(employeesList) {
  retrun {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
}
