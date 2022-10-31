import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogined!:boolean;
  isOpened!: boolean;
  submenuIsOpened!: boolean;
  userArray: any;
  firstName!: string;
  lastName!: string;
  fullName!: string;
  role!:string;
  constructor(
    private _AuthenticationService:AuthenticationService,
    private _Renderer2:Renderer2
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


        if(this.userArray?.role == 'super-admin'){
          this.role = 'سوبر أدمن';
        }else if(this.userArray?.role == 'admin'){
          this.role = 'أدمن';
        }else if(this.userArray?.role == 'super-academic-guide'){
          this.role = 'كبير مرشدين أكاديمي';
        }else if(this.userArray?.role == 'academic-guide'){
          this.role = ' مرشد أكاديمي';
        }else if(this.userArray?.role == 'assistant'){
          this.role = 'مساعد';
        }else if(this.userArray?.role == 'date-entry'){
          this.role = 'مدخل بيانات';
        }else if(this.userArray?.role == 'registered-admin'){
          this.role = 'أدمن التسجيل';
        }else if(this.userArray?.role == 'files-admin'){
          this.role = 'أدمن  الملفات';
        }else if(this.userArray?.role == 'account-admin'){
          this.role = 'أدمن  الحسابات';
        }
                const split = this.userArray?.name;
        const splited =  split.split(' ');
        this.firstName = splited[0]
        this.lastName = splited[1] || splited[2]
        this.fullName = this.firstName.split('')[0].toUpperCase() + this.lastName.split('')[0].toUpperCase();
        this.isLogined = false;


      }
    })
  }
  responsiveMenuCLick(){
    let mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
    this._Renderer2.setStyle(mobileMenuWrapper, 'display', 'block');
    this.isOpened = true;
  }
  responsiveMenuHide(){
    let mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
    this._Renderer2.removeStyle(mobileMenuWrapper, 'display');
    this.isOpened = false;

  }
  submenuClick(id:number){
    if(id == 1){
      let subMenu = document.querySelector('.ad_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id== 2 ){
      let subMenu = document.querySelector('.buy_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id== 3 ){
      let subMenu = document.querySelector('.accounting_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true

    }else if(id== 4){
      let subMenu = document.querySelector('.register_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true

    }else if(id== 5){
      let subMenu = document.querySelector('.movment_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id== 6){
      let subMenu = document.querySelector('.reports_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true

    }else if(id== 7){
      let subMenu = document.querySelector('.users_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id== 8){
      let subMenu = document.querySelector('.ads_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id == 9){
      let subMenu = document.querySelector('.marketing_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id == 10){
      let subMenu = document.querySelector('.calls_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id == 11){
      let subMenu = document.querySelector('.invoice_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id == 12){
      let subMenu = document.querySelector('.accountspending_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id == 13){
      let subMenu = document.querySelector('.accountsaccepted_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id == 14){
      let subMenu = document.querySelector('.current_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }else if(id == 15){
      let subMenu = document.querySelector('.create_menu__list');
      this._Renderer2.addClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = true
    }
  }
  submenuHide(id:number){
    if(id == 1){
      let subMenu = document.querySelector('.ad_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id== 2 ){
      let subMenu = document.querySelector('.buy_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id== 3 ){
      let subMenu = document.querySelector('.accounting_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false

    }else if(id== 4){
      let subMenu = document.querySelector('.register_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false

    }else if(id== 5){
      let subMenu = document.querySelector('.movment_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id== 6){
      let subMenu = document.querySelector('.reports_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false

    }else if(id== 7){
      let subMenu = document.querySelector('.users_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id== 8){
      let subMenu = document.querySelector('.ads_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id == 9){
      let subMenu = document.querySelector('.marketing_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id == 10){
      let subMenu = document.querySelector('.calls_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id == 11){
      let subMenu = document.querySelector('.invoice_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id == 12){
      let subMenu = document.querySelector('.accountspending_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id == 13){
      let subMenu = document.querySelector('.accountsaccepted_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id == 14){
      let subMenu = document.querySelector('.current_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }else if(id == 15){
      let subMenu = document.querySelector('.create_menu__list');
      this._Renderer2.removeClass(subMenu , 'menu__sub-open')
      this.submenuIsOpened = false
    }
  }
  logout(){
    this._AuthenticationService.signOut();
  }
}
