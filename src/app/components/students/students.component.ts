import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentsComponent implements OnInit {
  students: any[];
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: string;

  @HostBinding('class.content') someField: boolean = true;

  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }
}
