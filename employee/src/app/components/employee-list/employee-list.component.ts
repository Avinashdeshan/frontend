import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[]=[];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees():void {
    this.employeeService.getAll().subscribe(data=> this.employees=data);
  }

  deleteEmployee(id:number):void{
    if (confirm('Are you sure')){
      this.employeeService.delete(id).subscribe(()=>this.loadEmployees());
    }
  }

  goToAddFor(){
    this.router.navigate(['/add'])
  }
}
