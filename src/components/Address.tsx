import { MapPinHouse } from 'lucide-react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { updateAddressInterface } from '@/interface/interaces';
import store from '@/store';
import { updateAddressDispatchAction } from '@/disptacher/user';



function Address({ user }: { user: any }) {

  const [ addressDetails, setAddressDetails ] = useState<updateAddressInterface>({
    addressType: "",
    addressLine: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phone: ""
  })

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setAddressDetails(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  const handleOnClick = (type: string) => {
    setAddressDetails(preValue => {
      return {
        ...preValue,
        addressType: type
      }
    })
    store.dispatch(updateAddressDispatchAction(addressDetails))
  }

  return (
    <>
      <div className='p-[0rem_0] flex flex-col text-white gap-5'>
        <div className="flex justify-center">
          <MapPinHouse size={36} />
        </div>
        <hr />
        <div className="flex flex-col justify-center p-[5rem_10rem]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Update Shipping Address</AccordionTrigger>
              <AccordionContent>
                <div className="password-change w-full">
                  <div className="title">Welcome, {user.name}</div>
                  <div className="subtitle">Update Your Shipping Address</div>
                  <div className="input-container ic1">
                    <Input id="addressLine" className="input" type="text" placeholder=" " value={user.shippingAddress ? user.shippingAddress.addressLine : addressDetails.addressLine}
                      name='addressLine' onChange={handleOnChange}/>
                    <div className="cut"></div>
                    <Label htmlFor="addressLine" className="placeholder">Address Line</Label>
                  </div>
                  <div className="input-container ic2 flex flex-between gap-[5rem]">
                    <div>
                      <Input id="city" className="input" type="text" placeholder=" " name='city' value={user.shippingAddress ? user.shippingAddress.city : addressDetails.city} onChange={handleOnChange}/>
                      <div className="cut !w-[45px]"></div>
                      <Label htmlFor="city" className="placeholder z-50">City</Label>
                    </div>
                    <div>
                      <Input id="state" className="input" type="text" placeholder=" " name='state' value={user.shippingAddress ? user.shippingAddress.state : addressDetails.state} onChange={handleOnChange}/>
                      <div className="cut !w-[40px] !left-[17rem]"></div>
                      <Label htmlFor="state" className="placeholder !left-[17rem]">State</Label>
                    </div>
                    <div>
                      <Input id="country" className="input" type="text" placeholder=" " name='country' value={user.shippingAddress ? user.shippingAddress.country : addressDetails.country} onChange={handleOnChange}/>
                      <div className="cut !w-[55px] !left-[33rem]"></div>
                      <Label htmlFor="country" className="placeholder !left-[33rem]">Country</Label>
                    </div>
                    <div>
                      <Input id="postalCode" className="input" type="text" placeholder=" " name='pinCode' value={user.shippingAddress ? user.shippingAddress.pinCode : addressDetails.pinCode} onChange={handleOnChange}/>
                      <div className="cut !w-[60px] !left-[49rem]"></div>
                      <Label htmlFor="postalCode" className="placeholder !left-[49rem]">Pin Code</Label>
                    </div>
                  </div>
                  <div className="input-container ic2">
                    <Input id="phone" className="input" type="text" placeholder=" " name='phone' value={user.shippingAddress ? user.shippingAddress.phone : addressDetails.phone} onChange={handleOnChange}/>
                    <div className="cut cut-short !w-[90px]"></div>
                    <Label htmlFor="phone" className="placeholder">Phone Number</Label>
                  </div>
                  <Button className="submit" type='button' onClick={() => handleOnClick('shippingAddress')} >Update Address</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Update Billing Address</AccordionTrigger>
              <AccordionContent>
                <div className="password-change w-full">
                  <div className="flex items-center justify-end space-x-2">
                    <Checkbox id="sameAddress" />
                    <label
                      htmlFor="sameAddress"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Same as Shipping Address
                    </label>
                  </div>
                  <div className="subtitle">Update Your Billing Address</div>
                  <div className="input-container ic1">
                    <Input id="addressLine" className="input" type="text" placeholder=" "
                      name='addressLine' value={addressDetails.addressLine}/>
                    <div className="cut"></div>
                    <Label htmlFor="addressLine" className="placeholder">Address Line</Label>
                  </div>
                  <div className="input-container ic2 flex flex-between gap-[5rem]">
                    <div>
                      <Input id="city" className="input" type="text" placeholder=" " name='city' value={addressDetails.city}/>
                      <div className="cut !w-[45px]"></div>
                      <Label htmlFor="city" className="placeholder z-50">City</Label>
                    </div>
                    <div>
                      <Input id="state" className="input" type="text" placeholder=" " name='state' value={addressDetails.state}/>
                      <div className="cut !w-[40px] !left-[17rem]"></div>
                      <Label htmlFor="state" className="placeholder !left-[17rem]">State</Label>
                    </div>
                    <div>
                      <Input id="country" className="input" type="text" placeholder=" " name='country' value={addressDetails.country} />
                      <div className="cut !w-[55px] !left-[33rem]"></div>
                      <Label htmlFor="country" className="placeholder !left-[33rem]">Country</Label>
                    </div>
                    <div>
                      <Input id="postalCode" className="input" type="text" placeholder=" " name='pinCode' value={addressDetails.pinCode}/>
                      <div className="cut !w-[60px] !left-[49rem]"></div>
                      <Label htmlFor="postalCode" className="placeholder !left-[49rem]">Pin Code</Label>
                    </div>
                  </div>
                  <div className="input-container ic2">
                    <Input id="phone" className="input" type="password" placeholder=" " name='phone' value={addressDetails.phone}/>
                    <div className="cut cut-short !w-[90px]"></div>
                    <Label htmlFor="phone" className="placeholder">Phone Number</Label>
                  </div>
                  <Button className="submit" type='button' >Update Address</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </>
  )
}

export default Address