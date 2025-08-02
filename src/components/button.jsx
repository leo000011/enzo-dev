import React from 'react'

const Button = (props) => {

    const handlerClick = (o) => {
    window.location.href = o;
  }

    return (
        <>
        <button onClick={()=> handlerClick(props.link)} className="font-medium cursor-pointer flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded 
        bg-white hover:text-black/67 
         hover:border-blue-100/30 active:scale-95 transition justify-center w-60 ">
        
        {props.text}
    </button>
        </>
    )
}


export default Button