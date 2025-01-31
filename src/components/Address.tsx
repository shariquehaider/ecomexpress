import { MapPinHouse } from 'lucide-react'

function Address({user}: {user: any}) {
  return (
    <>
    <div className='p-[0rem_0] flex flex-col text-white gap-5'>
      <div className="flex justify-center">
        <MapPinHouse size={36}/>
      </div>
      <hr />
      <div className="flex"></div>

    </div>
    </>
  )
}

export default Address