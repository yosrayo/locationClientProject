import { Component, OnInit } from '@angular/core';
import { BiensService } from '../services/biens.service';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-biens',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css']
})
export class BiensComponent implements OnInit {
  list = [] as any ;
  listBiens = [] as any ;
  Caracteristique ="";
  fil="";
  public page =1;
  public pageSize = 3;
  constructor(private bienService:BiensService,config: NgbPaginationConfig) { config.size = 'sm';
  config.boundaryLinks = true; }

  ngOnInit(): void {
    this.bienService.getBiens().subscribe((res) => {
      this.list = res;});
  }


  searche(){
    if (this.Caracteristique != ""){
      if(this.fil=="yosra"){
      this.list = this.list.filter((res: { yosra: string; })=>{
        return res.yosra.toLocaleLowerCase().match(this.Caracteristique.toLocaleLowerCase());
      });
    }else if (this.fil=="All"){
      this.list = this.list.filter((res: { lastName: string; })=>{
        return res.lastName.toLocaleLowerCase().match(this.Caracteristique.toLocaleLowerCase());
      });
    } else if (this.fil=="Address"){
      this.list = this.list.filter((res: { address: string; })=>{
        return res.address.toLocaleLowerCase().match(this.Caracteristique.toLocaleLowerCase());
      });
    } 
    }else if(this.Caracteristique==""){
      this.ngOnInit();
    }

  }

  detail(m: any){
    this.listBiens= m
    console.log("h", this.listBiens);
    localStorage.setItem("detailsBient",JSON.stringify(this.listBiens));
   // window.location.replace("#/detail")
   }
}
