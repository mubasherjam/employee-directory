export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  location: string;
  salary: number;
  joinDate: string;
  status: string;
  managerid: number | null;
  avatar: string;
}