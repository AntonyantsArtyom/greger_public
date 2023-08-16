import classes from "./ChoosingInput.module.css"

function ChoosingInput({ description, variants }) {
   return (
      <div className={classes.inputArea}>
         <p className={classes.description}>{description}</p>
         <select className={classes.select} defaultValue={""}>
            <option className={classes.variant} value={""} disabled></option>
            {variants.map((variant) => (
               <option className={classes.variant} key={variant}>
                  {variant}
               </option>
            ))}
         </select>
      </div>
   )
}

export default ChoosingInput
