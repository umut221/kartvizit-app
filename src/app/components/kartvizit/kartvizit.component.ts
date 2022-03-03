import { KartvizitService } from './../../services/kartvizit.service';
import { Kartvizit } from './../../models/kartvizit';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kartvizit',
  templateUrl: './kartvizit.component.html',
  styleUrls: ['./kartvizit.component.css']
})
export class KartvizitComponent implements OnInit {

  kartvizits:Kartvizit[] = [];
  filterText:string = "";
  deletedName:string = "";

  constructor(private kartvizitService:KartvizitService, 
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getKartvizits();
  }

  getKartvizits(){
    this.kartvizitService.getKartvizits().subscribe(response=>{
      this.kartvizits = response;
      this.toastrService.success("Kartvizitler listelendi");
    })
  }
  deleteKartvizit(id:number){
    this.kartvizitService.delete(id).subscribe(response=>{
      this.toastrService.error("Kartvizit Silindi")
    });
  }

  detailKartvizit(name:string){
    this.toastrService.info(name,"Detaylar");
  }
}
