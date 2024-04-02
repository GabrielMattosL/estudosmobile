import { StatusBar } from "expo-status-bar"
import { Home } from "./src/screens/home"

export default function App() {
  return(
    <>
    <StatusBar 
      style="auto"
      backgroundColor="grey"
      translucent={false}
    />
    <Home/>
    </>
  )
}