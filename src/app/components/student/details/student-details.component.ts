/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { StudentService } from '../../../services/student/student.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-student-details',
 	templateUrl: './student-details.component.html',
 	styleUrls: ['./student-details.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class StudentDetailsComponent implements OnInit {
 	index:any;
 	studentDetail:any;
 	constructor(private router: Router, private route: ActivatedRoute, private studentService:StudentService,private toastr: ToastrService) { 
 		// Get user detail index number sent in params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getStudentDetails(this.index);
 			}
 		});
 	}

 	ngOnInit() {
 	}

 	// Get student details 
 	getStudentDetails(index:number){
 		let getStudentDetail = this.studentService.getStudentDetails(index);
 		if(getStudentDetail) {
 			this.studentDetail = getStudentDetail.studentData;
 			this.toastr.success(getStudentDetail.message,"Success");
 		}
 	}

 }

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */