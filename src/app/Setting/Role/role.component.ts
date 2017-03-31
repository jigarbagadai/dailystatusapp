import { Component, OnInit } from '@angular/core';
import { RouteNames, RoleService, AlertService } from '../../Services/index';
import { apiresponse, pagedataresponse } from '../../Model/index';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-role',
  templateUrl: 'role.component.html'
})
export class RoleComponent implements OnInit {
  roles: any[];
  busy: Subscription;
  roleName: string = "ALL";
  sortKey: string = "RoleName";
  sortDirection: string = "ASC";
  currentPage: any = 0;
  totalRecords: any;
  status: boolean = true;
  pagingresponse: pagedataresponse;

  constructor(private _routeNames: RouteNames, private _roleService: RoleService, private alertService: AlertService) {
    this._routeNames.name.next('Roles');
    this._routeNames.displayHeader.next(true);
  }

  ngOnInit() {
    this.BindGrid();
  }

  onEditClick(id) {
    this.alertService.success('Edit click ', true);
    console.log("Edit - Role component called... id:" + id);
  }

  onDeleteClick(id) {
    console.log("Delete - Role component called... id:" + id);
  }

  OnRoleSorting(sortingparams) {
    this.sortDirection = sortingparams.SortDirection;
    this.sortKey = sortingparams.Sortkey
    this.BindGrid();
  }

  onGridPaging(pagenumber) {
    this.currentPage = pagenumber;
    this.BindGrid();
  }

  onSearchClick(rolename: HTMLInputElement, status: HTMLInputElement) {
    let name: string = rolename.value;
    if (name == "") {
      name = "ALL"
    }
    this.roleName = name;
    this.status = status.value == "true";
    this.BindGrid();
  }

  BindGrid() {
    let skipRecords: number = (parseInt(this.currentPage) - 1) * environment.pagingSize;
    if (skipRecords < 0) {
      skipRecords = 0;
    }

    this.busy = this._roleService.getAllRoles(this.roleName, this.status, skipRecords, environment.pagingSize, this.sortDirection, this.sortKey).subscribe(
      result => {
        if (result.ResponseStatus == 0) {
          this.pagingresponse = <pagedataresponse>result.ResponseData;
          this.roles = this.pagingresponse.Data;
          this.currentPage = this.pagingresponse.CurrentPageNumber;
          this.totalRecords = this.pagingresponse.TotalRecords;
          this.sortKey = this.pagingresponse.SortKey;
          this.sortDirection = this.pagingresponse.SortDirection;
        }
      }
    );
  }
}
