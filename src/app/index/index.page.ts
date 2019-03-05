import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  list=null
  constructor(private myHttp:HttpClient) { }
  
  ngOnInit() {
    var url = "http://192.168.1.185:3000/imagelist"
    this.myHttp.get(url)
    .subscribe((result)=>{
      this.list = result
    })
  }
  
}
