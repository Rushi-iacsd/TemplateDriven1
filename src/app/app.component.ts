import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TemplateDriven'; 
  @ViewChild('f') signUpForm !: NgForm
  gendersArray : Array<string> = ["Female", "Male", "Other"]
   modeOfContactArr : {id : number; moc : string}[] = [
      {id:1 , moc:"Phone"},
      {id:2 , moc:"Email" },
   ];


   usersInfoDB = {
    userInfo: { username: "Rushi" , email: "rushi@gmail.com"}, 
    secrectQuestion: "teacher", 
    gender: "Male" , 
    mode : "Email"
  }
   
   modeOfContactChecked  : any;

   constructor(){}
  ngOnInit(): void {
    setTimeout(() => {
      this.pathuserValues()
    }, 0)
  }



// onSubmit(f :NgForm){
//   // console.log(f);
//   console.log(f.value);
// }

onSubmit(){

  if(this.signUpForm.valid){
  console.log(this.signUpForm.value);
   this.signUpForm.reset();
}else{
 alert ('plz enter valid fields.')
}
}

pathuserValues(){
  this.signUpForm.form.patchValue(this.usersInfoDB)

}
}