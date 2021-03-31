import React from 'react'

export default function Recipe({title,calories,image,ingredients}) {
    return (
        <>
            <div className=" font-sans ">
            <div className="max-w-md md:max-w-2xl px-2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
            <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56" style={{ backgroundImage: `url(${image})`}}>
            </div>
            <div className="p-4 md:p-5">
            <p className="font-bold text-xl md:text-2xl">{title}</p>
            <div className="text-gray-700 md:text-lg">
                <ul className="list-disc">
                {ingredients.map((ingredient,index)=>(
                    <li key={index}>{ingredient.text}</li>
                ))
                }
                </ul>
            </div>
            <p className="text-l"><span className="font-bold">Calories:</span>{calories}</p>
            </div>
              </div>
          </div>
     </div>

        </>
    )
}
