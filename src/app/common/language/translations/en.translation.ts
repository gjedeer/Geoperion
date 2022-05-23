import { Locale } from "../language.interface"

export class Translation {
  readonly localeKey: Locale = "EN"

  readonly settings = {
    settings: "settings",

    difficulty: {
      difficulty: "difficulty",
      easy: "easy",
      medium: "medium",
      hard: "hard",
    },

    gameLength: {
      short: "short",
      medium: "medium",
      long: "long",
    },
  }
}
