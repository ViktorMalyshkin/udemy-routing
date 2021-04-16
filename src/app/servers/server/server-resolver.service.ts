import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface ServerModel {
  id: number;
  name: string;
  status: string

}

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<ServerModel> {

  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerModel> | Promise<ServerModel> | ServerModel {
    return this.serversService.getServer(+route.params['id']);
  }
}
