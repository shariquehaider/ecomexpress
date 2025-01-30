import AccountCard from '@/components/AccountCard'

const cardData = [
  {
      id: 1,
      icon: "something",
      title: "Your Orders",
      desc: "Track, return, or buy things again"      
  },
  {
    id: 2,
    icon: "something",
    title: "Login & security",
    desc: "Edit login, name, and mobile number"
  },
  {
    id: 3,
    icon: "something",
    title: "Your Address",
    desc: "Edit addresses for orders and gifts"
  },
  {
    id: 4,
    icon: "something",
    title: "Settings",
    desc: "Edit account settings"
  }
]

function Account() {
  return (
    <>
      <div className='w-full p-[4rem_8rem] flex flex-col justify-center'>
        <div className='text-left text-2xl font-bold'>Welcome, Sharique</div>
        <div className='p-[2rem_0] flex gap-[2rem] flex-wrap'>
          {cardData.map(ele => <AccountCard key={ele.id} title={ele.title} desc={ele.desc} iconName={ele.icon}/>)}
        </div>
      </div>
    </>
  )
}

export default Account