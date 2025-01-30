import AccountCard from '@/components/AccountCard';
import { BaggageClaim, KeyRound, MapPinHouse, Settings } from 'lucide-react';


const cardData = [
  {
    id: 1,
    icon: <BaggageClaim />,
    title: "Your Orders",
    desc: "Track, return, or buy things again",
    link: "/account/orders"
  },
  {
    id: 2,
    icon: <KeyRound />,
    title: "Login & security",
    desc: "Edit login, name, and mobile number",
    link: "/account/settings/login"
  },
  {
    id: 3,
    icon: <MapPinHouse />,
    title: "Your Address",
    desc: "Edit addresses for orders and gifts",
    link: "/account/address"
  },
  {
    id: 4,
    icon: <Settings />,
    title: "Settings",
    desc: "Edit account settings",
    link: "/account/settings"
  }
]

function Account() {
  return (
    <>
      <div className='w-full p-[4rem_20rem] flex flex-col justify-center'>
        <div className='text-left text-2xl font-bold'>Welcome, Sharique</div>
        <div className='p-[2rem_0] flex gap-[2rem] flex-wrap justify-center'>
          {cardData.map(ele => <AccountCard key={ele.id} title={ele.title} desc={ele.desc} link={ele.link}>{ele.icon}</AccountCard>)}
        </div>
      </div>
    </>
  )
}

export default Account