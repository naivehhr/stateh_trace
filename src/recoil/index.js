import React from "react"
import { RecoilRoot } from "recoil"
import CharacterCounter from "./CharacterCounter"
import FontButton from "./FontButton"

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
      <FontButton />
    </div>
  )
}
