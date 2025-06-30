import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { studentModel } from '../model/studentClass';

@Component({
  selector: 'app-add-new-student',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-new-student.html',
  styleUrl: './add-new-student.css'
})
export class AddNewStudent implements OnInit {
  isEdited = false;
  currentEditId = -1;
  router = inject(Router); // navigate korbo eta diye
  route = inject(ActivatedRoute);
  studentService = inject(StudentService);

  studentAddForm!: FormGroup;
  studentObj: studentModel = new studentModel();
  studentAddedList: studentModel[] = [];

  ngOnInit(): void {
    this.studentAddedList = this.studentService.getAllStudents();
    const studentId = Number(this.route.snapshot.paramMap.get('id'));
    if (studentId) {
      const student = this.studentService.getStudentById(studentId);
      if (student) {
        this.studentObj = student;
        this.isEdited = true;
        this.currentEditId = studentId;
      }
    }

    this.createForm();
  }

  createForm() {
    this.studentAddForm = new FormGroup({
      studentName: new FormControl(this.studentObj.studentName),
      studentEmail: new FormControl(this.studentObj.studentEmail),
      studentRoll: new FormControl(this.studentObj.studentRoll),
      studentId: new FormControl(this.studentObj.studentId),
    });
  }

  resetForm() {
    this.studentAddForm.reset({
      studentName: '',
      studentEmail: '',
      studentRoll: '',
      studentId: null,
    });
  }

  submitForm() {
    const maxId = this.studentAddedList.length > 0
      ? Math.max(...this.studentAddedList.map(s => s.studentId))
      : 0;

    const newStudent: studentModel = {
      studentRoll: this.studentAddForm.value.studentRoll ?? '',
      studentId: maxId + 1,
      studentName: this.studentAddForm.value.studentName ?? '',
      studentEmail: this.studentAddForm.value.studentEmail ?? ''
    };

    this.studentService.addNewStudent(newStudent);
    this.studentAddedList = this.studentService.getAllStudents();
    this.resetForm();
  }

  OnUpdate() {
    const updatedStudent: studentModel = {
      studentRoll: this.studentAddForm.value.studentRoll ?? '',
      studentId: this.currentEditId,
      studentName: this.studentAddForm.value.studentName ?? '',
      studentEmail: this.studentAddForm.value.studentEmail ?? ''
    };

    this.studentService.updateStudentById(this.currentEditId, updatedStudent);
    this.resetForm();
    this.router.navigate(['/showAllStudents']);
  }
}
