import { Component, OnInit } from '@angular/core';
import { RouteNames, RoleService } from '../../Services/index';
import { apiresponse } from '../../Model/index';


@Component({
  selector: 'app-role',
  templateUrl: 'role.component.html'
})
export class RoleComponent implements OnInit {
  roles: any[];
  constructor(private _routeNames: RouteNames, private _roleService: RoleService) {
    this._routeNames.name.next('Role');
    this._routeNames.displayHeader.next(true);
  }

  ngOnInit() {
    this._roleService.getAllRoles("ALL", true, 0, "ASC", "Name").subscribe(
      result =>{
         if(result.ResponseStatus == 0)
         {
            this.roles = result.ResponseData;
         } 
      }
    );
  }
}
