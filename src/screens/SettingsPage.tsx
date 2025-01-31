
import Address from '@/components/Address'
import LoginCredentials from '@/components/LoginCredentials'
import MyOrders from '@/components/MyOrders'
import Setting from '@/components/Setting'
import Sidebar from '@/components/Sidebar'
import { useSelector } from 'react-redux'

function SettingsPage() {
  const { tabName } = useSelector((state: any) => state.tabName)
  return (
    <>
      <div className='flex'>
        <Sidebar/>
        <div className='p-[2rem_0] w-full border-t-[1px] border-r-[1px] border-white bg-black min-h-[100svh]'>
          {tabName == "#orders" && <MyOrders/>}
          {tabName == "#credentials" && <LoginCredentials/>}
          {tabName == "#address" && <Address/>}
          {tabName == "#settings" && <Setting/>}
        </div>
      </div>
    </>
  )
}

export default SettingsPage