import { Component, OnInit } from '@angular/core';

// Inject EmployeeService to EmployeeListComponent class
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    let x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(employee: Employee) {
    // Use Object.assign() to make a copy of object (prevents modifying original data in real-time due to two-way-binding)
    this.employeeService.selectedEmployee = Object.assign({}, employee);
  }

  onDelete(key: string) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.employeeService.deleteEmployee(key);
      this.toastr.warning('Deleted Successfully', 'Employee Register');
    }
  }

}
