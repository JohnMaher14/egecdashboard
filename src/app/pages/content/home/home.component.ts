import { Component, OnInit, Renderer2 } from '@angular/core';
import { Chart } from 'chart.js';
import { CKEditor4 } from 'ckeditor4-angular';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogined!:boolean;
  userArray:any;
  statistics: any;
  role!:string;
  firstName!: string;
  lastName!: string;
  fullName!: string;
  greeting!:string;
  ckeditorContent: any;
  ckeConfig:any;
  notepad:any;
  notepadNull : string = 'بماذا تفكر؟';
  day!:string;
  month!:string;
  chart:any;
  hideNotePad:boolean = false;
  empolyees: any[] = [];
  empolyeesCard: any[] = [];
  bsInlineValue = new Date();
  loading!:boolean;
  employeesLoading!:boolean;
  dataChart!: number;
  showNotedpad!:boolean;
  date = new Date();
  constructor(
    private _Renderer2:Renderer2,
    private _GeneralService:GeneralService,
    private _AuthenticationService:AuthenticationService,
    private _BsLocaleService:BsLocaleService
    ) {
    }
  public typingInNotepad(event: CKEditor4.EventInfo){
    console.log(event.editor.getData());
    this._GeneralService.notepad( JSON.stringify(event.editor.getData()) ,this.userArray.id ,  'data').subscribe(
      (response) => {
        
        localStorage.setItem('notepad', JSON.parse(response.AdminNote));
      }
    )
  }
  // typingInNotepad(event:any){
  //   console.log(event);
  //   this._GeneralService.notepad(event.target.value ,this.userArray.id ,  event.target.value).subscribe(
  //     (response) => {
  //       console.log(response);
        
  //       localStorage.setItem('notepad', response.AdminNote);
  //     }
  //   )
  // }
  getNotepad(){
    if(localStorage.getItem('notepad') != undefined){
      this.notepad =  localStorage.getItem('notepad');
    }else{
      this.notepad = this.userArray.admin_note;
    }
  }
  onClickBackground(id:number){
    var bodyContainer =  document.querySelector('body');
    if(id == 1){
      this._Renderer2.setStyle(bodyContainer, 'background', 'url(assets/images/background/Defult.jpg)');
      localStorage.setItem('backgroundWidget' , "background: url(assets/images/background/Defult.jpg)")
    }
    else if(id == 2){
      this._Renderer2.setStyle(bodyContainer, 'background', 'url(assets/images/background/Black.jpg)');
      localStorage.setItem('backgroundWidget' , "background: url(assets/images/background/Black.jpg)")


    }
    else if(id == 3){
      this._Renderer2.setStyle(bodyContainer, 'background', 'url(assets/images/background/Cacao.jpg)');

      localStorage.setItem('backgroundWidget' , "background: url(assets/images/background/Cacao.jpg)")

    }
    else if(id == 4){
      this._Renderer2.setStyle(bodyContainer, 'background', 'url(assets/images/background/Light.jpg)');
      localStorage.setItem('backgroundWidget' , "background: url(assets/images/background/Light.jpg)")

    }
    else if(id == 5 ){
      this._Renderer2.setStyle(bodyContainer, 'background', 'url(assets/images/background/Mint.jpg)');
      localStorage.setItem('backgroundWidget' , "background: url(assets/images/background/Mint.jpg)")

    }
    else if(id == 6){
      this._Renderer2.setStyle(bodyContainer, 'background', '#202556');

      localStorage.setItem('backgroundWidget' , "background: #202556")

    }
    else if(id == 7){
      this._Renderer2.setStyle(bodyContainer, 'background', '#09c');

      localStorage.setItem('backgroundWidget' , "background: #09c")

    }
    else if(id == 8 ){
      this._Renderer2.setStyle(bodyContainer, 'background', '#177e80');

      localStorage.setItem('backgroundWidget' , "background: #177e80")

    }
    else if(id == 9){
      this._Renderer2.setStyle(bodyContainer, 'background', '#581845');

      localStorage.setItem('backgroundWidget' , "background: #581845")

    }
    else if(id == 10){
      this._Renderer2.setStyle(bodyContainer, 'background', '#C7D628');

      localStorage.setItem('backgroundWidget' , "background: #C7D628")

    }
    else if(id == 11 ){
      this._Renderer2.setStyle(bodyContainer, 'background', '#B03B37');

      localStorage.setItem('backgroundWidget' , "background: #B03B37")

    }
    else if(id == 12 ){
      this._Renderer2.setStyle(bodyContainer, 'background', '#65575C');

      localStorage.setItem('backgroundWidget' , "background: #65575C")

    }
  }
  getClock(){
    const getClock = new Date();
    var h = getClock.getHours();
    var format = h >= 12 ? 'PM' : 'AM';
    if (format == 'PM') {
      this.greeting = 'مساء الخير,'
    }else{
      this.greeting = 'صباح الخير,'

    }
    const deg = 6
    const hr = document.querySelector("#hr")
    const mn = document.querySelector("#mn")
    const sc = document.querySelector("#sc")

    this.day = new Date().toLocaleString('ar-EG', {day: 'numeric'});
    this.month = new Date().toLocaleString('ar-EG', {month: 'long'});

    setInterval( () =>  {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        //hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
        //mn.style.transform = `rotateZ(${(mm)}deg)`
        //sc.style.transform = `rotateZ(${(ss)}deg)`

        // this.Renderer2.setStyle(hr, "rotateZ", `(${hh} + (${mm} / ${12}))`);
        this._Renderer2.setAttribute(hr, "style" , "transform: rotateZ(" + (hh + (mm / 12)) + "deg)");
        this._Renderer2.setAttribute(mn, "style" , "transform: rotateZ(" + mm + "deg)");
        this._Renderer2.setAttribute(sc, "style" , "transform: rotateZ(" + ss + "deg)");
        // this.Renderer2.setAttribute(sc, "rotateZ", "180deg");

    }, 1000)

  }
  showNotePad(){
    let notePad =  document.querySelector('.notepad__card');
    let mainCard =  document.querySelector('.main__card');
    this._Renderer2.addClass(notePad, 'show')
    this._Renderer2.removeClass(mainCard, 'show')
    this.hideNotePad = true;
  }
  hideNotepad(){
    let notePad =  document.querySelector('.notepad__card');
    let mainCard =  document.querySelector('.main__card');

    this._Renderer2.removeClass(notePad, 'show')
    this._Renderer2.addClass(mainCard, 'show')

    this.hideNotePad = false;

  }
  showBackground(){

    let widget = document.querySelector('.widget')
    let bodyOverlay = document.querySelector('.body-overlay')

    this._Renderer2.addClass(widget, 'show')
    this._Renderer2.addClass(bodyOverlay, 'opened')
  }
  hideBackground(){

    let widget = document.querySelector('.widget')
    let bodyOverlay = document.querySelector('.body-overlay')

    this._Renderer2.removeClass(widget, 'show')
    this._Renderer2.removeClass(bodyOverlay, 'opened')

  }
  showStatistics(){
    this.loading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyees = response.AdminsData.concat(

          response.SuperAcademicGuideData,
          response.AcademicGuideData,
          response.AssistantData,
          response.DataEntryData,
          response.RegisteredAdminData,
          response.FilesAdminData,
          response.AccountAdminData,

        );

        this.empolyees.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyees.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        const chartss =  [response.totalAdmin ,  response.totalSuperAcademicGuide, response.totalAcademicGuide , response.totalAssistant , response.totalAccountAdmin , response.totalDataEntry , response.totalRegisteredAdmin,  response.totalFilesAdmin ]
        // this.dataChart = Math.max(null , chartss)
        this.dataChart = Math.max.apply(null , chartss)
        const minDataChart = Math.min.apply(null , chartss)
        console.log(Math.max.apply(null , chartss));
        this.chart = new Chart("emplyeesChart", {
          type: 'line', //this denotes tha type of chart

          data: {// values on X-Axis
            labels: [ "أدمن" , "كبير مرشد اكاديمين", "المرشد الاكاديمي",   "مساعد" , "محسابين" ,  "مدخل البيانات"  ,  "أدمن التسجيل"  ,  "أدمن الملفات"],
             datasets: [
              {
                data: [response.totalAdmin ,  response.totalSuperAcademicGuide, response.totalAcademicGuide , response.totalAssistant , response.totalAccountAdmin , response.totalDataEntry , response.totalRegisteredAdmin,  response.totalFilesAdmin ],
                fill: true,
                tension: 0.5,
                borderColor: '#fff',
                borderWidth: 1,
                pointBackgroundColor:[ '#202556' , '#09c' , '#FF5733' , '#581845' , '#777' , 'red' , '#6F9897' , '#CAB69E'],
                backgroundColor: 'rgba(255,255,255,0.5)',
                pointHoverBorderColor: ['#202556' , '#09c' , '#FF5733' , '#581845' , '#777' , 'red' , '#6F9897' , '#CAB69E'],
                pointHoverBackgroundColor : ['#202556' , '#09c' , '#FF5733' , '#581845' , '#777' , 'red' , '#6F9897' , '#CAB69E'],
              }
            ]
          },


          options: {

            responsive: true,
            maintainAspectRatio: false,
            plugins:{
              legend: {
                display: false
              },
            },
            scales:{
              x:{
                display: false
              },
              y:{
                max: this.dataChart,
                min: minDataChart
              }
            },
          },


        });
        this.loading = false;
      }
    )
  }
  showAllRoles(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.AdminsData.concat(

          response.SuperAcademicGuideData,
          response.AcademicGuideData,
          response.AssistantData,
          response.DataEntryData,
          response.RegisteredAdminData,
          response.FilesAdminData,
          response.AccountAdminData,

        );

        this.empolyeesCard.forEach(
          (response:any) => {
            console.log(response.name , response.en_name);
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )
  }
  admins(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        // console.log(response.AdminsData);
        this.empolyeesCard = response.AdminsData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

  }
  superAcademicGuide(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.SuperAcademicGuideData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

  }
  academicGuide(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.AcademicGuideData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

  }
  assitants(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.AssistantData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

  }
  dataEntry(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.DataEntryData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

  }
  registeredAdminData(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.RegisteredAdminData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

  }
  filesAdminData(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.FilesAdminData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

  }
  accountAdminData(){
    this.employeesLoading = true;
    this._GeneralService.statistics().subscribe(
      (response) => {
        this.empolyeesCard = response.AccountAdminData

        this.empolyeesCard.forEach(
          (response:any) => {
            if(response.role == 'super-admin'){
              return response.reRole = 'سوبر أدمن';
            }else if(response.role == 'admin'){
              return response.reRole = 'أدمن';
            }else if(response.role == 'super-academic-guide'){
              return response.reRole = 'كبير مرشدين أكاديمي';
            }else if(response.role == 'academic-guide'){
              return response.reRole = ' مرشد أكاديمي';
            }else if(response.role == 'assistant'){
              return response.reRole = 'مساعد';
            }else if(response.role == 'data-entry'){
              return response.reRole = 'مدخل بيانات';
            }else if(response.role == 'registered-admin'){
              return response.reRole = 'أدمن التسجيل';
            }else if(response.role == 'files-admin'){
              return response.reRole = 'أدمن  الملفات';
            }else if(response.role == 'account-admin'){
              return response.reRole = 'أدمن  الحسابات';
            }
            return response;
          }
        )
        this.empolyeesCard.forEach(
          (response:any) => {
              let splitName = response.en_name == null ? response.name : response.en_name;
              let splitedName = splitName.split(' ');
              let firstName = splitedName[0];
              if(splitedName[1] != undefined){
                let lastName = splitedName[1]
                let fullName = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase();
                return response.abbrevationName = fullName

              }else{
                let fullName = firstName.split('')[0].toUpperCase()
                return response.abbrevationName = fullName
              }

            }
        )
        this.employeesLoading = false;
      }
    )

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
            }else if(this.userArray?.role == 'data-entry'){
              this.role = 'مدخل بيانات';
            }else if(this.userArray?.role == 'registered-admin'){
              this.role = 'أدمن التسجيل';
            }else if(this.userArray?.role == 'files-admin'){
              this.role = 'أدمن  الملفات';
            }else if(this.userArray?.role == 'account-admin'){
              this.role = 'أدمن  الحسابات';
            }
        // const splitRole = this.userArray?.role;
        // const splitedRole =  splitRole.split('-');
        // this.role = splitedRole.join(' ');
        const splitName = this.userArray?.name;
        const splitedName =  splitName.split(' ');
        this.firstName = splitedName[0]
        this.lastName = splitedName[1] || splitedName[2]
        this.fullName = this.firstName.split('')[0].toUpperCase() + this.lastName.split('')[0].toUpperCase();
        this.isLogined = false;

      }
    })
  }

  ngOnInit(): void {
    this.getClock();
    this.showStatistics();
    this.authenticationFunction();
    this.getNotepad();
    this.showAllRoles();
    this.ckeConfig = {
      toolbar: [ [ 'Bold' ,  'Italic' , 'Underline' , 'BulletedList', 'NumberedList' , 'Emoji'] ],
      removePlugins: [
        "resize"
      ],
      contentsLangDirection :[
        'rtl'
      ]
    };

    this._BsLocaleService.use('ar')

    // this.superAdmins();
    let main_content = document.querySelector('.content');

    this._Renderer2.removeClass(document.body , 'login')
    this._Renderer2.addClass(document.body , 'main')
    this._Renderer2.addClass(main_content , 'content')
  }
}
