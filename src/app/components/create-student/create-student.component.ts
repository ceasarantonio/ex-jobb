import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { AlertsService } from '@jaspero/ng2-alerts';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateStudentComponent implements OnInit {


  @HostBinding('class.content') someField: boolean = true;

  public alertOptions: any = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 1500
  };

  public type: any;
  public message: string;
  public  firstName: string;
          lastName: string;
          email: string;
          phone: string;
          school: string;
          education: string;

   student: Student = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    education: ''
    };
    


  constructor(
    private studentService: StudentService,
    private _alert: AlertsService,
    private router: Router
  ) {
    {
      this.alertOptions.overlay = true;
      this.alertOptions.overlayClickToClose = true;
      this.alertOptions.showCloseButton = true;
      this.alertOptions.duration = 10000;

      this.type = 'success';
      this.message = 'Student added';
     }
   }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Student, valid: boolean}) {
    this.studentService.newStudent(value).then(student => {
      this._alert.create(this.type, this.message, {
        overlay: this.alertOptions.overlay,
        overlayClickToClose: this.alertOptions.overlayClickToClose,
        showCloseButton: this.alertOptions.showCloseButton,
        duration: this.alertOptions.duration,
      });
      this.router.navigate(['/student/', student.key]);
    });
  }

}
