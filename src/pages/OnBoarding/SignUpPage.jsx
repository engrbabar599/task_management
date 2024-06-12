import React from 'react'
import IMAGES from '../../assets/images'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link } from 'react-router-dom'

export const SignUpPage = () => {
    return (
        <div className='grid grid-cols-5  bg-white h-screen'>
            <div className=' col-span-3 bg-gray-100 space-y-16 p-8 flex items-center flex-col '>
                <div className='flex items-center justify-start  flex-col'>
                    <h1 className='text-4xl  '>
                        Dashboard
                    </h1>
                    <p className='text-base'>
                        Manage your project and team in easy way
                    </p>
                </div>

                <img src={IMAGES.logo} alt="logo" className='object-cover w-3/5' />
            </div>


            <div className=' col-span-2 space-y-4 w-full flex flex-col items-center justify-center '>
                {/* <div className='w-full'> */}


                <h1 className='text-3xl'>Create your account</h1>


                <Input
                    titleStyle={'text-left'}
                    width={'w-full'}
                    title={'Name'}
                    placeholder={'Input your name in here'}
                    value={""}
                    // onChange={handleChange}
                    name="nameOnAccount"
                // errorMessage={errors.nameOnAccount}
                />
                <Input
                    titleStyle={'text-left'}
                    width={'w-full'}
                    title={'Email'}
                    placeholder={'Input your email in here'}
                    value={""}
                    // onChange={handleChange}
                    name="nameOnAccount"
                // errorMessage={errors.nameOnAccount}
                />
                <Input
                    titleStyle={'text-left'}
                    width={'w-full'}
                    title={'Role'}
                    placeholder={'Input your email in here'}
                    value={""}
                    // onChange={handleChange}
                    name="nameOnAccount"
                // errorMessage={errors.nameOnAccount}
                />
                <Input
                    titleStyle={'text-left'}
                    width={'w-full'}
                    title={'Password'}
                    placeholder={'Input your email in here'}
                    value={""}
                    // onChange={handleChange}
                    name="nameOnAccount"
                // errorMessage={errors.nameOnAccount}
                />

                <div className='space-y-2'>

                    <Input
                        titleStyle={'text-left'}
                        width={'w-full'}
                        title={'Confirm Password'}
                        placeholder={'Input your password in here'}
                        value={""}
                        // onChange={handleChange}
                        name="nameOnAccount"
                    // errorMessage={errors.nameOnAccount}
                    />
                    {/* <div className='text-right'>Forgot Password?</div> */}
                    {/* </div> */}
                </div>


                <Button text={'Sign up'} className={' px-8 py-2 !font-medium !text-base bg-black w-2/4'} />

                <div>
                    Already have a account ?&nbsp;
                    <Link to="/SignUp" className='text-'>Sign in Now</Link>
                </div>

            </div>



        </div>
    )
}
