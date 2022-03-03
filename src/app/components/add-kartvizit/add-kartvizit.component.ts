import { ToastrService } from 'ngx-toastr';
import { KartvizitService } from './../../services/kartvizit.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-add-kartvizit',
  templateUrl: './add-kartvizit.component.html',
  styleUrls: ['./add-kartvizit.component.css']
})
export class AddKartvizitComponent implements OnInit {

  kartvizitAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private kartvizitService:KartvizitService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createKartvizitAddForm();
  }

  createKartvizitAddForm():void{
    this.kartvizitAddForm = this.formBuilder.group({
      title:["",Validators.required],
      name:["",Validators.required],
      email:["",Validators.required],
      phoneNumber:["",Validators.required]

    })
  }
  add(){
    this.kartvizitAddForm.valid
    let kartvizitModel = Object.assign({}, this.kartvizitAddForm.value);
    this.kartvizitService.add(kartvizitModel).subscribe()
    this.toastrService.success("Kartvizit başarıyla eklendi")
  }
}
