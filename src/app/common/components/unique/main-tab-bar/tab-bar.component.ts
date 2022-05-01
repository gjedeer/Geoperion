import { Component } from "@angular/core"
import { LinksService } from "src/app/common/services/links.service"

@Component({
  selector: "common-main-tab-bar",
  templateUrl: "./tab-bar.component.html",
})
export class MainTabBarComponent {
  constructor(public links: LinksService) {}
}
