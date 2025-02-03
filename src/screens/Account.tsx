import AccountCard from '@/components/AccountCard';
import { userDetailsDispatchAction } from '@/disptacher/user';
import { toast } from '@/hooks/use-toast';
import store from '@/store';
import { BaggageClaim, KeyRound, MapPinHouse, Settings } from 'lucide-react';
import { useSelector } from 'react-redux';


const cardData = [
  {
    id: 1,
    icon: <BaggageClaim />,
    title: "Your Orders",
    desc: "Track, return, or buy things again",
    link: "/account/settings#orders"
  },
  {
    id: 2,
    icon: <KeyRound />,
    title: "Login & security",
    desc: "Edit login, name, and mobile number",
    link: "/account/settings#credentials"
  },
  {
    id: 3,
    icon: <MapPinHouse />,
    title: "Your Address",
    desc: "Edit addresses for orders and gifts",
    link: "/account/settings#address"
  },
  {
    id: 4,
    icon: <Settings />,
    title: "Account Settings",
    desc: "Edit account settings",
    link: "/account/settings#settings"
  }
]

function Account() {
  const {error, userDetails} = useSelector((state: any) => state.userDetails)
  console.log(userDetails)
  if (error) {
    toast({
      description: error
    })
  }

  return (
    <>
      <div className='w-full p-[4rem_20rem] flex flex-col justify-center'>
        <div className='text-left text-2xl font-bold'>Welcome, {userDetails.user.name}</div>
        <div className='p-[2rem_0] flex gap-[2rem] flex-wrap justify-center'>
          {cardData.map(ele => <AccountCard key={ele.id} title={ele.title} desc={ele.desc} link={ele.link}>{ele.icon}</AccountCard>)}
        </div>
      </div>
    </>
  )
}

export default Account;


export const userLoader = async () => {
  await store.dispatch(userDetailsDispatchAction())
  return 
}