import classes from "./QuestionDescriptionInput.module.css"

function QuestionDescriptionInput({ description }) {
   return (
      <div className={classes.inputArea}>
         <p className={classes.description}>{description}</p>
         <textarea className={classes.textarea} />
      </div>
   )
}

export default QuestionDescriptionInput
