import QuestionNameInput from "../QuestionNameInput.js/QuestionNameInput"
import QuestionDescriptionInput from "../QuestionDescriptionInput/QuestionDescriptionInput"
import classes from "./Field.module.css"
import ChoosingInput from "../ChoosingInput/ChoosingInput"
import DateInput from "../DateInput/DateInput"
import TextInput from "../TextInput/TextInput"
import ResolutionInput from "../ResolutionInput/ResolutionInput"
import store from "../../store"

function Field() {
   return (
      <div className={classes.field}>
         {store.inputZone.map((input) => {
            if (input.type == "questionName") {
               return <QuestionNameInput description={input.description} placeholder={input.placeholder} />
            }
            if (input.type == "description") {
               return <QuestionDescriptionInput description={store.description} />
            }
            if (input.type == "choosing") {
               return <ChoosingInput description={input.description} variants={input.vaiants} />
            }
            if (input.type == "date") {
               return <DateInput description={input.description} placeholder={input.placeholder} />
            }
            if (input.type == "text") {
               return <TextInput description={input.description} placeholder={input.placeholder} />
            }
            if (input.type == "resolution") {
               return <ResolutionInput description={input.description} />
            }
         })}
      </div>
   )
}

export default Field
