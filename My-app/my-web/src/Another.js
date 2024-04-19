import React from 'react'

const Another = ({name,age,array,person}) => {
  return (
    <div>
        {/* simple */}
<h1>{name}</h1>
<h1>{age}</h1>
<h1>{array}</h1>
{/* object and array */}
<h1>{person.name}</h1>
<h1>{person.city}</h1>
<h1>{person.array2}</h1>

    </div>
  )
}

export default Another