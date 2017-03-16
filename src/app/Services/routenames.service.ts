import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/RX';

@Injectable()
export class RouteNames{
  public name = new Subject();
}
