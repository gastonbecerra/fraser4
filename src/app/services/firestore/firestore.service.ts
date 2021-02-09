import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(
    private firestore: AngularFirestore,
    private db: AngularFireDatabase
  ) {}

  public createRegistro(data) {
    // return this.firestore.collection('evocacion').add(data);    
    const item1 = data;    
    const pushId = this.db.createPushId();
    const item2 = { ...item1, id: pushId };;
    return this.db.list('/evocaciones').set(item2.id, item2);
  }

  public getOraciones() {
    return this.db.list('/oraciones').snapshotChanges();
  }

  public getOracionesArray() {
    let data = [];
    this.db.list('/oraciones').snapshotChanges().subscribe(oraciones => {
      oraciones.forEach((catData: any) => {
        data.push({
          oracion: catData.payload.child("oracion").val(),
          estado: catData.payload.child("estado").val(),
          id: catData.key,
        });
      })
    });
    console.log(data)
    return data;
  }

  public setOraciones(oracion) {
    // https://medium.com/angular-chile/angular-6-y-firestore-b7f270adcc96
    this.db.list('/oraciones').set(oracion.id, oracion);
    // return this.getOracionesArray();
  }

}