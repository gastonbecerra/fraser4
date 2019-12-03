import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  isLinear = false;
  //firstFormGroup: FormGroup;
  //secondFormGroup: FormGroup;
 
  constructor(
    // private _formBuilder: FormBuilder
    ) {}

  ngOnInit() {

    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });

  }

}
