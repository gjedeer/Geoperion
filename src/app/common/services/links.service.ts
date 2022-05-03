import { Injectable } from "@angular/core"
import { AppPaths } from "src/app/root/routing.interface"

@Injectable({
  providedIn: "root",
})
export class LinksService {
  getSettingsLink() {
    return this.getRootLink(AppPaths.settings)
  }

  getGamesLink() {
    return this.getRootLink(AppPaths.games)
  }

  private getRootLink(link: string) {
    return `/${link}`
  }
}
