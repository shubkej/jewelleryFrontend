export interface EmployeePayloadDataType {
  // id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  designations?: any;
  joining_date: Date | string;
  assignBy?: string;
  assignTo?: string;
}

export interface EmployeeEditPayloadType {
  id: string;
  formData: {
    first_name: string;
    last_name: string;
    email?: string;
    password: string;
    joining_date: Date | string;
    designations?: any;
  };
}

export interface EmployeeAssign {
  assignTo: string;
  // assignBy: string;
}
