import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo registo
  public createRegistro(data) {
    return this.firestore.collection('evocacion').add(data);
  }

  //Obtiene todos los gatos
  public getCats() {
    return this.firestore.collection('cats').snapshotChanges();
  }

  
  // //Obtiene un gato
  // public getCat(documentId: string) {
  //   return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  // }
  
  // //Actualiza un gato
  // public updateCat(documentId: string, data: any) {
  //   return this.firestore.collection('cats').doc(documentId).set(data);
  // }
}