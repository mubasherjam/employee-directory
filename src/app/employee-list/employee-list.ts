import { Component, inject } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../models/employee.model';
@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList
{
  private employeeService: EmployeeService = inject(EmployeeService);
  employees: Employee[] = [];
}
