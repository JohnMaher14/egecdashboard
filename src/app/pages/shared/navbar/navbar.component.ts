import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogined!:boolean;
  userArray: any;
  firstName!: string;
  lastName!: string;
  fullName!: string;
  role!:string;
  constructor(
    private _AuthenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authenticationFunction()
  }
  authenticationFunction(){

    this._AuthenticationService.currentUserData.subscribe(() => {
      if (this._AuthenticationService.currentUserData.getValue() == null) {
        this.isLogined = true;
      } else {
        this.userArray = JSON.parse(
          localStorage.getItem('currentUserArray') || '{}'
        );


        const splitRole = this.userArray?.role;

        const splitedRole =  splitRole.split('-');
        const split = this.userArray?.name;
        const splited =  split.split(' ');
        this.role = splitedRole.join(' ');
        this.firstName = splited[0]
        this.lastName = splited[1] || splited[2]
        this.fullName = this.firstName.split('')[0].toUpperCase() + this.lastName.split('')[0].toUpperCase();
        this.isLogined = false;


      }
    })
  }

  logout(){
    this._AuthenticationService.signOut();
  }
}
