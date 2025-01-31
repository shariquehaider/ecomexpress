import { KeyRound } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { useState } from 'react';
import { newPassword } from '@/interface/interaces';
import store from '@/store';
import { changePasswordDispatchAction } from '@/disptacher/user';
import { useSelector } from 'react-redux';
import { toast } from '@/hooks/use-toast';

function LoginCredentials({user}: {user: any}) {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [password, setPassword] = useState<newPassword>({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  const {error, message} = useSelector((state: any) => state.changePassword)

  if (error) {
    toast({
      description: error.toString()
    })
  } else if (message) {
    toast({
      description: message
    })
  }


  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setPassword(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  }

  const handleSubmit = () => {
    store.dispatch(changePasswordDispatchAction(password))
  }

  return (
    <>
      <div className='p-[0rem_0] flex flex-col text-white gap-5'>
        <div className="flex justify-center">
          <KeyRound size={36} />
        </div>
        <hr />
        <div className="flex justify-center p-[0_20rem]">
          <div className="password-change w-full">
            <div className="title">Welcome, {user.name}</div>
            <div className="subtitle">Current Password</div>
            <div className="input-container ic1">
              <Input id="currentPassword" className="input" type="password" placeholder=" " 
              value={isDisabled ? user.password : password.currentPassword} 
              disabled={isDisabled} 
              onChange={handleChange}
              name='currentPassword'/>
              <div className="cut"></div>
              <Label htmlFor="currentPassword" className="placeholder">Current Password</Label>
            </div>
            <div className="input-container ic2">
              <Input id="newPassword" className="input" type="password" placeholder=" " onChange={handleChange} value={password.newPassword} name='newPassword'/>
              <div className="cut cut2"></div>
              <Label htmlFor="newPassword" className="placeholder">New Password</Label>
            </div>
            <div className="input-container ic2">
              <Input id="confirmPassword" className="input" type="password" placeholder=" " onChange={handleChange} value={password.confirmNewPassword} name='confirmNewPassword'/>
              <div className="cut cut-short"></div>
              <Label htmlFor="confirmPassword" className="placeholder">Confirm New Password</Label>
            </div>
            {isDisabled && <Button className="submit" type='button' onClick={handleEdit}>Change Password</Button>}
            {!isDisabled && <div className='flex gap-[2rem]'>
              <Button className='submit' type='button' onClick={handleSubmit}>Save</Button>
              <Button className="submit" type='button' onClick={handleEdit}>Cancel</Button>
            </div>}
          </div>
        </div>

      </div>
    </>
  )
}

export default LoginCredentials