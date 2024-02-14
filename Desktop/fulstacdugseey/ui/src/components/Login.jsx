import React, { useEffect } from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import {  useUser} from '../../src/hook/useUser';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import axios from 'axios';
  
  import toast, { Toaster } from 'react-hot-toast';

  import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';


const Login = () => {

const {setUser,login,user
} = useUser()




useEffect(() => {
    if (user) navigate('/');
}, [user]);



console.log(user)
    
const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
});


const navigate = useNavigate();


const handleInputChange = (event) => {
    setFormData({
        ...formData,
        [event.target.id]: event.target.value
    });
};



const [loading, setLoading] = useState(false);









const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);

    try {

        const { data } = await axios.post('api/user/login', formData);
        console.log(data);
        toast.success("login succefully")
        login(data ,data.
            expiredate)


        navigate('/login');
        
        setLoading(false);
       
    } catch (e) {
        setLoading(false);
   
        console.error(e);
        toast.error(e.response.data.message


         
            )
    }

};
  return (
    <div className='w-full'>
    <Card>
        <CardHeader>
            <CardTitle className="text-center"> Login</CardTitle>
         
        </CardHeader>
        <CardContent>
            <form  onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">email</Label>
                        <Input
                          onChange={handleInputChange}
                            id="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">password</Label>
                        <Input
                            type="password"
                            onChange={handleInputChange}
                       
                            id="password" placeholder="Enter Your password" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Button>{loading ? "loading..." : "login"}</Button>
                    </div>

                </div>
            </form>

        </CardContent>

    </Card>
</div>
  )
}

export default Login