"use client"

const CategoryCard = (props) => {
  const normal = "p-2 border text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white transition-all rounded-md cursor-pointer"
  const active = "p-2 border bg-blue-800 text-white border-blue-800 rounded-md cursor-pointer"
  return (
    <div className={props.active === true ? active : normal} onClick={props.onclick}>
      <h1 className='capitalize'>{props.name}</h1>
    </div>
  )
}

export default CategoryCard