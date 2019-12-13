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

  // Crea un nuevo registo con una mezcla de estos links:
  // https://github.com/angular/angularfire/issues/199
  // https://github.com/angular/angularfire/blob/HEAD/docs/rtdb/objects.md
  // https://blog.nubecolectiva.com/como-integrar-firebase-y-angular-7-listado-de-datos-desde-firebase-parte-3-final/

  public createRegistro(data) {
    // return this.firestore.collection('evocacion').add(data);    
    const item1 = data;    
    const pushId = this.db.createPushId();
    const item2 = { ...item1, id: pushId };;
    return this.db.list('/evocaciones').set(item2.id, item2);
  }

}