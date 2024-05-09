import React from 'react'

const TarifTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ?
    "bg-third text-dark border-white hover:text-slate-300"
    :
    "bg-slate-700 hover:bg-first"
  return (
    <div>
      <div>
        <button className={`${buttonStyles} rounded-full border-slate-50 cursor-pointer px-4 xl:px-6 py-3 `}
        onClick={() => onClick(name)}>
            {name}
        </button>
    </div>
    </div>
  )
}

export default TarifTag
