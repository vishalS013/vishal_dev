import React from 'react'

const Modal = ({children,name,age,city}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{city}</p>
      <p>{age}</p>
      {children}
      </div>
      /*
Modal - Add Todo, Edit todo
Props - 
  1. todo - {title, desc} || undefined
  2. handleSave fxn
  3. Children
*/
  )
}

export default Modal