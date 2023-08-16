import classes from "./TextInput.module.css"

function TextInput({ description, placeholder }) {
   return (
      <div className={classes.inputArea}>
         <p className={classes.description}>{description}</p>
         <input className={classes.input} placeholder={placeholder} />
      </div>
   )
}

export default TextInput
