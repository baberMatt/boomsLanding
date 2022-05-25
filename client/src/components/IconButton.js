
import { ChartPieIcon } from '@heroicons/react/solid'

export default function IconButton(props) {
  return (
    <>
      <button
        type="button"
        id="hireBtn"
        className="inline-flex items-center m-2 px-4 py-3 border border-transparent shadow-sm text-xl font-medium rounded-md text-boomsWhite bg-boomsYellow hover:bg-boomsYellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentSky"
      >
        <span className='mr-2 text-1xl'>🍕 </span>
        {props.text}
      </button>
    </>
  )
}