import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FirestoreService } from '../services/firestore/firestore.service';

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

  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) { 

  }



  valoracionesTxt = ['terminator','desempleo'];

  carreras = {
    "1 CIENCIAS NATURALES Y EXACTAS" : [
      "Matemáticas",
      "Ciencias de la Computación e Información",
      "Ciencias Físicas",
      "Ciencias Químicas",
      "Ciencias de la Tierra y relacionadas con el Medio Ambiente",
      "Ciencias Biológicas",
      "Otras carreras relacionadas con Ciencias Naturales y Exactas",
    ],
    "2 CIENCIAS NATURALES Y EXACTAS" : [
      "Matemáticas",
      "Ciencias de la Computación e Información",
      "Ciencias Físicas",
      "Ciencias Químicas",
      "Ciencias de la Tierra y relacionadas con el Medio Ambiente",
      "Ciencias Biológicas",
      "Otras carreras relacionadas con Ciencias Naturales y Exactas",
    ]
 }

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

  

  onSubmit() {
    console.warn(this.encuestaForm.value);
    this.firestoreService.createRegistro(this.encuestaForm.value).then (() => {
      console.log("locura en movimiento")
    })
   
  }

  ngOnInit() {
    console.warn(this.valoracionesTxt);
    console.warn(this.carreras);


  }

}
