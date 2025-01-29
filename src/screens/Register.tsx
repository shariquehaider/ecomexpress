import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { CircleCheck } from 'lucide-react';
import useRegister from "@/hooks/useRegister"
import { useSelector } from "react-redux"

function Register() {
  const { message, error } = useSelector((state: any) =>  state.userRegister)

  const { tabValue, loginDetails, registerDetails, rules, tabValueHandler, handleLogin, handleRegister, handleLoginClick, handleRegisterClick} = useRegister()

  return (
    <>
      <div className="register">
        <Tabs defaultValue={tabValue} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 bg-[#F5F5F5]">
            <TabsTrigger value="login" className={tabValue == "login" ? "bg-white" : ""} onClick={() => tabValueHandler("login")}>Login</TabsTrigger>
            <TabsTrigger value="register" className={tabValue == "register" ? "bg-white" : ""} onClick={() => tabValueHandler("register")}>Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login to your account to continue.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Username/Email</Label>
                  <Input id="name" placeholder="Username/Email" name="username" value={loginDetails.username} onChange={handleLogin} required/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Password</Label>
                  <Input id="username" type="password" placeholder="Password" name="password" value={loginDetails.password} onChange={handleLogin} required/>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button type="button" onClick={handleLoginClick}>Login</Button>
                <Button variant={"link"}><Link to="/">Forgot Password?</Link></Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                  {message && <CardDescription>{message}</CardDescription>}
                  {error && <CardDescription className="text-[red]">{error.toString()}</CardDescription>}
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username <span className="text-[red]">*</span></Label>
                  <Input id="username" type="text" placeholder="Username" value={registerDetails.username} name="username" onChange={handleRegister} required/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Name <span className="text-[red]">*</span></Label>
                  <Input id="name" type="text" placeholder="Name" value={registerDetails.name} name="name" onChange={handleRegister} required/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email <span className="text-[red]">*</span></Label>
                  <Input id="email" type="email" placeholder="Email" value={registerDetails.email} name="email" onChange={handleRegister} required/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm-email">Confirm Email <span className="text-[red]">*</span></Label>
                  <Input id="confirm-email" type="email" placeholder="Confirm Email" value={registerDetails.confirmEmail} name="confirmEmail" onChange={handleRegister} required/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password <span className="text-[red]">*</span></Label>
                  <Input id="password" type="password" placeholder="Password" value={registerDetails.password} name="password" onChange={handleRegister} required/>
                </div>
                <div className="space-y-1 flex flex-col bg-[#F5F5F5] p-2">
                  <p className="flex gap-2"><CircleCheck className={rules.length ? "text-[green]" : ""}/> Must have alteast 8 characters.</p>
                  <p className="flex gap-2"><CircleCheck className={rules.specialCharacter ? "text-[green]" : ""}/> Must have a special character.</p>
                  <p className="flex gap-2"><CircleCheck className={rules.digit ? "text-[green]" : ""}/> Must have at least one digit.</p>
                  <p className="flex gap-2"><CircleCheck className={rules.upperCase ? "text-[green]" : ""}/> Must have at least one uppercase letter</p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm-password">Confirm Password <span className="text-[red]">*</span></Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm Password" value={registerDetails.confirmPassword} name="confirmPassword" onChange={handleRegister} required/>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="button" onClick={handleRegisterClick}>Register</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default Register