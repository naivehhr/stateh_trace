import { selector } from "recoil"
import { textState, fontSizeState } from "./myAtom"

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  },
})

const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState)
    const unit = "px"

    return `${fontSize}${unit}`
  },
})

export { charCountState, fontSizeLabelState }
