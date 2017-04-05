import { environment } from '../../environments/environment';

export const ApiUrlConstant = {
  LOGINURL: environment.apiUrl + '/token',
  GETALLROLESURL: environment.apiUrl + '/api/v1/Roles',
  DELETEROLE:environment.apiUrl+'/api/v1/RoleDelete'
}