import { Component, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items$: Observable<any[]> = of([]);
  constructor(private firestore: AngularFirestore) {
    //     const aCollection = collection(this.firestore, 'items')
    //     this.items$ = collectionData(aCollection);
    //   }

    this.items$ = this.firestore.collection('todos').valueChanges();
    this.items$.subscribe((data) => {
      console.log(data);
    });
  }
}
