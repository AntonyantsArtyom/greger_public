import classes from "./DateInput.module.css"

function DateInput({ description, placeholder }) {
   return (
      <div className={classes.inputArea}>
         <p className={classes.description}>{description}</p>
         <input className={classes.input} placeholder={placeholder} />
      </div>
   )
}

export default DateInput
