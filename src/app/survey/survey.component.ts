import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

export interface Opciones {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  valoracionesTxt = ['terminator','desempleo'];

  encuestaForm = this.fb.group({
    aliases: this.fb.array([
      this.fb.control('', Validators.required),
      /*
      this.fb.control('', Validators.required),
      this.fb.control('', Validators.required),
      this.fb.control('', Validators.required),
      this.fb.control('', Validators.required),
      */
    ]),
    sociodemo: this.fb.group({
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      nivel_estudios: [''],
      carrera: [''],
      ingreso: [''],
      medios: ['']
    }),
  });

  get aliases() {
    return this.encuestaForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    console.warn(this.encuestaForm.value);
  }

  ngOnInit() {
    console.warn(this.valoracionesTxt);
  }

}
