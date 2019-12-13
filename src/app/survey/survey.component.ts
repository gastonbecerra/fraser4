import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore/firestore.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private firestoreService: FirestoreService, private router: Router) { }

  private estimulos = ['Big data', 'Inteligencia artificial', 'Conocimiento', 'Ciencia de datos'];
  public tiempo : string;
  public data : string;
  public estimulo : string;
  public carreras = [
    { text: "NATURALES Y EXACTAS",
      children: [
        { text: "Matemáticas" },
        { text: "Computación e Informática" },
        { text: "Física" },
        { text: "Química" },
        { text: "Medio ambiente" },
        { text: "Biología" },
        { text: "Otras Naturales y Exactas" },
      ] }, 
      { text: "INGENIERÍAS Y TECNOLOGÍAS",
      children: [
        { text: "Ing. Civil" },
        { text: "Ing. Eléctrica y de la Información" },
        { text: "Ing. Mecánica" },
        { text: "Ing. Química" },
        { text: "Ing. Médica" },
        { text: "Ing. del Medio Ambiente" },
        { text: "Biotecnología" },
        { text: "Nanotecnología" },
        { text: "Otras Ingenierías" },
      ] }, 
      { text: "CIENCIAS MÉDICAS Y DE LA SALUD",
      children: [
        { text: "Medicina" },
        { text: "Ciencias de la Salud" },
        { text: "Biotecnología" },
        { text: "Otras Médicas y de la Salud" },
      ] },
      { text: "CIENCIAS AGRÍCOLAS Y ANIMALES",
      children: [
        { text: "Agricultura" },
        { text: "Producción Animal" },
        { text: "Veterinarias" },
        { text: "Biotecnología Agropecuaria" },
        { text: "Otras de Ciencias Agrícolas" },
      ] },
      { text: "CIENCIAS SOCIALES Y EMPRESARIALES",
      children: [
        { text: "Psicología" },
        { text: "Economía, Negocios y Administración" },
        { text: "Educación" },
        { text: "Sociología y Política" },
        { text: "Urbanismo, Geografía y Arquitectura" },
        { text: "Comunicación y Medios" },
        { text: "Turismo, Eventos y Gastronomía" },
        { text: "Derecho" },
        { text: "Otras Ciencias Sociales y empresariales" },
      ] },
      { text: "HUMANIDADES",
      children: [
        { text: "Historia y Antropología" },
        { text: "Lengua y Literatura" },
        { text: "Filosofía y Religión" },
        { text: "Arte" },
        { text: "Otras Humanidades" },
      ] },
  ];

  // https://jasonwatmore.com/post/2019/06/25/angular-8-dynamic-reactive-forms-example
  dynamicForm: FormGroup;

  ngOnInit() {
    const current = new Date();
    this.tiempo = current.getTime().toString();
    this.estimulo = this.estimulos[Math.floor(Math.random() * this.estimulos.length)]; // selecciona el estimulo
    this.dynamicForm = this.formBuilder.group({
      tiempo: [this.tiempo],
      estimulo: [this.estimulo],
      terms: new FormArray([]),
      sociodemo: this.fb.group({
        edad: [, Validators.required],
        sexo: ['', Validators.required],
        nivel_estudios: [''],
        carrera: [''],
        medio: [''],
        medios_diarios: [false], medios_sitios: [false], medios_cursos: [false], medios_formacion: [false],
      }),
    });
    this.agregarCampos(5);
  }

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.terms as FormArray; }

  agregarCampos(cuantos: number) {
    for (let i = 0; i < cuantos; i++) {
      this.t.push(this.formBuilder.group({
          palabra: ['', Validators.required],
          valoracion: [5],
          orden: [],
      }));
    }
  }

  onSubmit() {
    // console.log( JSON.stringify( this.dynamicForm.value ) );
    this.data = this.dynamicForm.value;
    // console.log( this.data );
    this.firestoreService.createRegistro(this.data).then (() => {
       // console.log("registro grabado");
       this.router.navigate(['gracias']);
    })   
  }

}
