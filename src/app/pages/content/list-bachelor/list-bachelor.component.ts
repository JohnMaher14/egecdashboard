import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-list-bachelor',
  templateUrl: './list-bachelor.component.html',
  styleUrls: ['./list-bachelor.component.scss']
})
export class ListBachelorComponent implements OnInit {

  customers: any[] =[];
  constructor(private _GeneralService: GeneralService) { }

  ngOnInit() {
      this._GeneralService.statistics().subscribe(
        (response) => {
          this.customers = response.AdminsData.concat(

            response.SuperAcademicGuideData,
            response.AcademicGuideData,
            response.AssistantData,
            response.DataEntryData,
            response.RegisteredAdminData,
            response.FilesAdminData,
            response.AccountAdminData,

          );
          this.customers.forEach(
            (response:any) => {
              const splitRole = response.role;
              const splitedRole = splitRole.split('-');
              const role = splitedRole.join(' ');
              return response.reRole = role;
            }
          )
        }
      );
  }



}
