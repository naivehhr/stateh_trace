import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { fontSizeState } from "./myAtom"
import { fontSizeLabelState } from "./mySelector"

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState)
  const fontSizeLabel = useRecoilValue(fontSizeLabelState)
  return (
    <div>
      <div>Current font size: ${fontSizeLabel}</div>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>
    </div>
  )
}