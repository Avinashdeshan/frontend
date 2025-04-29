import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employee:Employee={
    name: '',
    email: '',
    department: ''
  };
  departments = ['HR', 'IT', 'Finance', 'Operations'];

  constructor(private employeeService:EmployeeService, private router:Router){}

  onSubmit(): void {
    this.employeeService.create(this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
