import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsStudentComponent implements OnInit {
  id: string;
  student: any;

  @HostBinding('class.content') someField = true;


  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe(student => {
      this.student = student;
    });
  }

  ngOnInit() {
  }

}
