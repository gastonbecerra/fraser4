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

  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) { }

  private estimulos = ['Big data', 'Inteligencia artificial', 'Conocimiento', 'Aprendizaje automático (machine learning)', 'Ciencia de datos'];
  public estimulo : string;

  public populations = [
    { text: "CIENCIAS NATURALES Y EXACTAS",
      children: [
        { text: "Matemáticas" },
        { text: "Ciencias de la Computación e Información" },
        { text: "Ciencias Físicas" },
        { text: "Ciencias Químicas" },
        { text: "Ciencias de la Tierra y el medio ambiente" },
        { text: "Ciencias Biológicas" },
        { text: "Otras carreras relacionadas con las Ciencias Naturales y Exactas" },
      ] }, 
      { text: "INGENIERÍAS Y TECNOLOGÍAS",
      children: [
        { text: "Ingeniería Civil" },
        { text: "Ingeniería Eléctrica, Ingeniería Electrónica e Ingeniería de la Información" },
        { text: "Ingeniería Mecánica" },
        { text: "Ingeniería Química" },
        { text: "Ingeniería Médica" },
        { text: "Ingeniería del Medio Ambiente" },
        { text: "Biotecnología Industrial" },
        { text: "Nanotecnología" },
        { text: "Otras carreras relacionadas con Ingenierías y Tecnologías" },
      ] }, 
      { text: "CIENCIAS MÉDICAS Y DE LA SALUD",
      children: [
        { text: "Medicina" },
        { text: "Ciencias de la Salud" },
        { text: "Biotecnología de la Salud" },
        { text: "Otras carreras relacionadas con Ciencias Médicas y de la Salud" },
      ] },
      { text: "CIENCIAS AGRÍCOLAS Y ANIMALES",
      children: [
        { text: "Agricultura, Silvicultura y Pesca" },
        { text: "Producción Animal y Lechería" },
        { text: "Ciencias Veterinarias" },
        { text: "Biotecnología Agropecuaria" },
        { text: "Otras carreras relacionadas con Ciencias Agrícolas" },
      ] },
      { text: "CIENCIAS SOCIALES Y EMPRESARIALES",
      children: [
        { text: "Psicología" },
        { text: "Economía, Negocios y Administración de empresas" },
        { text: "Educación" },
        { text: "Sociología y Política" },
        { text: "Urbanismo, Geografía Económica y Social, y Arquitectura" },
        { text: "Comunicación y Medios" },
        { text: "Turismo, Hospitalidad, Eventos y Gastronomía" },
        { text: "Derecho" },
        { text: "Otras carreras relacionadas con Ciencias Sociales y empresariales" },
      ] },
      { text: "HUMANIDADES",
      children: [
        { text: "Historia, Antropología y Arqueología" },
        { text: "Lengua y Literatura" },
        { text: "Filosofía, Ética y Religión" },
        { text: "Arte" },
        { text: "Otras carreras relacionadas con Humanidades" },
      ] },
  ];

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
      medio: [''],
      medios_diarios: [''], medios_sitios: [''], medios_cursos: [''], medios_formacion: [''],
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
    // hay que sumarle el estimulo
    // hay que sumarle un timestamp
    // hay que sumarle las valoraciones
    // this.firestoreService.createRegistro(this.encuestaForm.value).then (() => {
    //   console.log("registro grabado")
    // })   
  }

  ngOnInit() {
    // selecciona el estimulo
    this.estimulo = this.estimulos[Math.floor(Math.random() * this.estimulos.length)];
  }

}
