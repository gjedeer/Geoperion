import { NgModule } from "@angular/core"
import { AppCommonModule } from "src/app/common/common.module"
import { GuessCountryAnswersComponent } from "./answeres/answers.component"
import { GuessCountryGameEventsBus } from "./guess-country.events-bus"
import { GuessCountryEventsHandler } from "./guess-country.handler"
import { GuessCountryGamePage } from "./guess-country.page"
import { GuessCountryState } from "./guess-country.state"
import { GuessCountryOptionsComponent } from "./options/options.component"

@NgModule({
  imports: [AppCommonModule],
  declarations: [GuessCountryGamePage, GuessCountryOptionsComponent, GuessCountryAnswersComponent],
  providers: [GuessCountryGameEventsBus],
})
export class GuessCountryGameModule {
  // start on module initialization
  constructor(
    private countryState: GuessCountryState,
    private eventsHandler: GuessCountryEventsHandler,
  ) {}
}
