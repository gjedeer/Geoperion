import { NgModule } from "@angular/core"
import { GameStorage } from "./game-storage"
import { GameConfigState } from "./game-config.state"
import { GameDifficultyStorage } from "./game-difficulty.storage"
import { GameLengthStorage } from "./game-length.storage"
import { AppThemeSettingsModule } from "./theme/theme-settings.module"

@NgModule({
  imports: [AppThemeSettingsModule],
  providers: [GameStorage, GameDifficultyStorage, GameLengthStorage],
})
export class GameSettingsModule {
  // init on load
  constructor(private configState: GameConfigState) {
    configState.init()
  }
}
