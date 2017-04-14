import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  model: any;
  myForm: FormGroup;
  see (f:any) {
    console.log(f);
  }

  constructor (private fb:FormBuilder){


    this.myForm = this.fb.group({
        roleDef: 3,
        areaDef: 1,
        addrDef: "milkshop",
        nameDef: "iandy",
        emailDef: "iandy",
        telDef: "0956789000",
        addressDef: "0956789000",
        conDef: 1,
        optionRq: ""
    });
  }

  ngOnInit (){


  }


  roles = [{
      id:1,
      name: "一般市民"
    },{
      id:2,
      name: "議員"
    },{
      id:3,
      name: "里幹事"
    },{
      id:4,
      name: "里長"
    },{
      id:5,
      name: "公務員"
    },{
      id:6,
      name: "學生"
    },{
      id:7,
      name: "學生"
    }];

  areas = [{
    id: 1,
    name: "東區"
  },{
    id: 2,
    name: "西區"
  }];

  contact = [{
    id: 1,
    name: "用Email聯繫",
    options: ""
  },
  {
    id: 2,
    name: "用電話聯繫",
    options: "phone"
  },
  {
    id: 3,
    name: "用書面聯繫",
    options: "address"
  }];
}
