import { Injectable } from '@angular/core';
// Needed to implement firebase CRUD operations
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from './employee.model';
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { }

  // READ
  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  // CREATE
  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  // UPDATE
  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary
      });
  }

  // DELETE
  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }

}
