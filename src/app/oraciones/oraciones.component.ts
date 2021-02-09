import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';


@Component({
  selector: 'app-oraciones',
  templateUrl: './oraciones.component.html',
  styleUrls: ['./oraciones.component.css']
})
export class OracionesComponent implements OnInit {

  constructor(private firestoreService: FirestoreService) { }

  data = [];

  ngOnInit() {
    // this.firestoreService.getOraciones().subscribe(val => {this.data=val});
    // this.data = [];
    // this.firestoreService.getOraciones().subscribe(oraciones => {
    //   oraciones.forEach((catData: any) => {
    //     this.data.push({
    //       oracion: catData.payload.child("oracion").val(),
    //       estado: catData.payload.child("estado").val(),
    //       id: catData.key,
    //     });
    //   })
    // });
    // console.log(this.data)
    this.data = this.firestoreService.getOracionesArray();
  }

  setEstado(oracion,estado) {
    oracion.estado = estado;
    this.firestoreService.setOraciones(oracion);
    // this.ngOnInit();
  }

}
