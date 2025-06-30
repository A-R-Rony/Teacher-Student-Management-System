import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StudentService} from '../student.service';
import {studentModel} from '../model/studentClass';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-show-all-students',
  imports: [RouterModule],
  templateUrl: './show-all-students.html',
  styleUrl: './show-all-students.css'
})
export class ShowAllStudents implements OnInit {
     studentService = inject(StudentService);
     studentAddedList = this.studentService.getAllStudents();
     studentObj:studentModel = new studentModel();

     studentAddForm !: FormGroup;


  ngOnInit(): void {
    this.studentAddedList = this.studentService.getAllStudents();
  }

  createForm(student: studentModel) {
    this.studentAddForm = new FormGroup({
      studentName: new FormControl(student.studentName ),
      studentEmail: new FormControl(student.studentEmail ),
      studentRoll: new FormControl( student.studentRoll ),
      studentId: new FormControl(student.studentId),
    });
  }
  currentEditId = -1;
     OnEdit(student: studentModel) {
       this.studentObj = student;
       this.createForm(student); // edit a click korle teacher add form show korbe
       this.currentEditId = this.studentObj.studentId; // storing the id of the edited teacher
     }
     OnDelete(student: studentModel) {
       this.studentService.deleteStudentById(student.studentId);
     }
}
