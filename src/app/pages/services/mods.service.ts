import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Mod } from "../types/mods.type";

@Injectable({
  providedIn: 'root'
})
export class ModsService {
  readonly #http = inject(HttpClient);

  getMods() {
    return this.#http.get<Mod[]>('assets/data/mods.json');
  }
}