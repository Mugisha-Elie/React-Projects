import HelloWorld from "./components/HelloWorld"
import EventCapturing from "./components/EventCapturing"
import ListRendering from "./components/ListRendering"
import Form from "./components/Form"
import JsonRendering from "./components/JsonRendering"
import ApiFetching from "./components/ApiFetch"

export default function App(){
  return (
    <>
      {/* <HelloWorld /> */}
      <EventCapturing />
      {/* <ListRendering /> */}
      {/* <Form /> */}
      {/* <JsonRendering /> */}
      <ApiFetching />
    </>
  )
}