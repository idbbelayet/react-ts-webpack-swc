interface EmployeeInfo {
  id: number;
  fullName: string; //TextBox
  email: string; //TextBox
  sex: string; //Radio button
  age: number; //Numeric TextBox
  favoriteColor: number; //Dropdown
  isActive: boolean; //CheckBox
  joiningDate: Date; //Datepicker
  skills: string[]; //Multi select dropdown
}

export default EmployeeInfo;
