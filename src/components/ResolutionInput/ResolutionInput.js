import classes from "./ResolutionInput.module.css"

function ResolutionInput({ description }) {
   return (
      <div className={classes.inputArea}>
         <p className={classes.description}>{description}</p>
         <input className={classes.input} />
      </div>
   )
}

export default ResolutionInput
