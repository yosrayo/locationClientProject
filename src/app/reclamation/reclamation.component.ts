import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireStorage } from 'angularfire2/storage';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation } from '../classes/reclamation';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamation={}as any;
  reclamations!:Reclamation[];
  submitted = false;
  ajoutForm!: FormGroup;
  imagePreview!: string | ArrayBuffer;
  exist!: boolean;
  fb = '';
  downloadURL!: Observable<string>;
  type! : string;
  description! : string;
  date! : string;
  photo! : string;
  address! : string;
  constructor(   private reclamationService:ReclamationService,
     private httpClient: HttpClient , private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.ajoutForm = this.formBuilder.group({
      firstname: ['', Validators.required],
   
      
      
  })
  }


  get f() { return this.ajoutForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    this.exist=false;
    // stop here if form is invalid
    if (this.ajoutForm.invalid) {
        return;
    }else {
      this.reclamation.type=this.type;
      this.reclamation.photo = this.fb; 
     
      
this.reclamationService.create(this.reclamation as Reclamation).subscribe(produit=>{});
alert("ajouter avec succés");
      this.type = '';
    
    console.log(this.ajoutForm.value);
    //window.location.replace("accueilAdmin");
    
  
}
  }
  
    
}
