
import Address from '@/components/Address'
import LoginCredentials from '@/components/LoginCredentials'
import MyOrders from '@/components/MyOrders'
import Setting from '@/components/Setting'
import Sidebar from '@/components/Sidebar'
import { userDetailsDispatchAction } from '@/disptacher/user'
import store from '@/store'
import { useSelector } from 'react-redux'

function SettingsPage() {
  const { tabName } = useSelector((state: any) => state.tabName);
  const {userDetails} = useSelector((state: any) => state.userDetails)

  return (
    <>
      <div className='flex'>
        <Sidebar/>
        <div className='p-[2rem_0] w-full border-t-[1px] border-r-[1px] border-white bg-[#15172b] min-h-[100svh]'>
          {tabName == "#orders" && <MyOrders/>}
          {tabName == "#credentials" && <LoginCredentials user={userDetails.user}/>}
          {tabName == "#address" && <Address user={userDetails.user}/>}
          {tabName == "#settings" && <Setting/>}
        </div>
      </div>
    </>
  )
}

export default SettingsPage;

export const settingsLoader = async () => {
  await store.dispatch(userDetailsDispatchAction())
  return 
}