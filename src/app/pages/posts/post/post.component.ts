import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  @Input() mensaje:any=[];
  @Output() clickPost=new EventEmitter();
  ngOnInit(): void {

  }
  onClick(){
    console.log("El ID CAPTURADO ES",this.mensaje.id);
  }
}
