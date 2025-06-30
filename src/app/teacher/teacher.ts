import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {teacherModel} from '../model/teacherClass';
import {TeacherService} from '../teacher.service';


@Component({
  selector: 'app-teacher',
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher  implements OnInit {

  teacherService: TeacherService = inject(TeacherService);

  showAddForm: boolean = false;
  showListForm: boolean = false;
  isEdited: boolean = false;

  showForm() {// teacher adding form
    this.showAddForm = true;
    this.showListForm = false;
  }

  showList() {// display teacher list
    this.showListForm = true;
    this.showAddForm = false;

  }

  teacherobj = new teacherModel();
  teacherAddForm = new FormGroup({
    teacherName: new FormControl(this.teacherobj.teacherName),
    teacherEmail: new FormControl(this.teacherobj.teacherEmail),
    teacherSubject: new FormControl(this.teacherobj.teacherSubject),
    teacherId: new FormControl(this.teacherobj.teacherId),
  });

  createForm() {
    this.teacherAddForm = new FormGroup({
      teacherName: new FormControl(this.teacherobj.teacherName),
      teacherEmail: new FormControl(this.teacherobj.teacherEmail),
      teacherSubject: new FormControl(this.teacherobj.teacherSubject),
      teacherId: new FormControl(this.teacherobj.teacherId),
    });
  }

  teacherAddedList: teacherModel[] = [];
  ngOnInit(): void {
    this.teacherAddedList = this.teacherService.getAllTeachers();
  }

  resetForm() {
    this.isEdited = false;
    this.currentEditId = -1;
    this.showAddForm = true;
    this.teacherobj = new teacherModel();
    this.createForm();
  }

  submitForm() {
    const maxId = this.teacherAddedList.length > 0
      ? Math.max(...this.teacherAddedList.map(t => t.teacherId))
      : 0; // delete korle na hoy id duplicate hoye jay

    const newTeacher: teacherModel = {
      teacherSubject: this.teacherAddForm.value.teacherSubject ?? '',
      teacherId: maxId + 1,
      teacherName: this.teacherAddForm.value.teacherName ?? '',
      teacherEmail: this.teacherAddForm.value.teacherEmail ?? ''
    };

    this.teacherService.addTeacher(newTeacher);
    this.teacherAddedList = this.teacherService.getAllTeachers();
    this.teacherobj = new teacherModel();
    this.resetForm();
  }


  currentEditId = -1;

  OnEdit(teacher: teacherModel) {
    this.isEdited = true;
    this.teacherobj = teacher;

    this.showAddForm = true; // edit a click korle teacher add form show korbe
    this.currentEditId = this.teacherobj.teacherId; // storing the id of the edited teacher
    this.createForm();  // create the form again
  }

  OnUpdate() {
    console.log("inside update click event");
    this.isEdited = false;
    const updatedTeacher: teacherModel = ({
      teacherSubject: this.teacherAddForm.value.teacherSubject ?? '',
      teacherId: this.currentEditId,
      teacherName: this.teacherAddForm.value.teacherName ?? '',
      teacherEmail: this.teacherAddForm.value.teacherEmail ?? '',
    });

    this.teacherService.updateTeacherById(this.currentEditId,updatedTeacher);
    this.teacherAddedList = this.teacherService.getAllTeachers();
    console.log(this.teacherAddedList);
    this.resetForm();
    this.showListForm = true;
    this.showAddForm = false;

  }

  OnDelete(teacher: teacherModel) {
    this.teacherService.deleteTeacherById(teacher.teacherId);
    this.teacherAddedList = this.teacherService.getAllTeachers(); // Refresh list after delete
  }

  protected readonly onsubmit = onsubmit;
}
