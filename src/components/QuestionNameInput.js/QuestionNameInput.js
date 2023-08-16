import classes from "./QuestionNameInput.module.css"

function QuestionNameInput({ description, placeholder }) {
   return (
      <div className={classes.inputArea}>
         <p className={classes.description}>{description}</p>
         <input className={classes.input} placeholder={placeholder} />
      </div>
   )
}

export default QuestionNameInput
