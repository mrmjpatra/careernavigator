'use client'
import UseCollegesFormData from '@/utils/collegesFormData';
import React, { FormEvent, useState } from 'react'
import { convertWord } from './CollegeDetails/CollegeDetails';
import axios from 'axios';
import { Discuss } from 'react-loader-spinner';
import toast from 'react-hot-toast';

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        stream: '',
    });
    const { sortedStreamList } = UseCollegesFormData();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!contactFormData.name || !contactFormData.email || !contactFormData.phoneNumber || !contactFormData.stream) {
            toast.error("Fill all the field");
            return
        }
        if (isNaN(Number(contactFormData.phoneNumber))) {
            toast.error("Phone Number must be a number")
            return;
        }
        setLoading(true);
        try {
            const values = {
                name: contactFormData.name,
                email: contactFormData.email,
                phoneNumber: contactFormData.phoneNumber,
                stream: contactFormData.stream
            }
            const { data } = await axios.post(`/api/contact`, values);
            if (data.success) {
                toast.success("Sent Succefully");
            } else {
                toast.error("Server Error");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='my-3'>
            <h1 className='md:text-4xl text-2xl font-bold text-blue-500 text-center'>Reach us by filling the below form</h1>
            <div className='mx-auto md:w-3/4 w-[90%]'>
                <div className='flex md:flex-row flex-col-reverse gap-2 rounded-md border-2 border-slate-600 my-4  shadow-lg shadow-slate-600' style={{ fontFamily: 'Poppins' }}>
                    <div className='bg-blue-800 text-white py-8 px-4 md:w-2/5'>
                        <h3 className='font-bold text-xl mb-3'>Why registerd with us</h3>
                        <ul className='list-disc list-inside pl-5 leading-8'>
                            <li>We help you to get admission in College</li>
                            <li>Regular updates on cut-off, placement</li>
                            <li>Never miss your admission deadlines</li>
                            <li>100% gurantee admissioin</li>
                            <li>You won&apos;t get unwanted calls from third parties</li>
                        </ul>
                    </div>
                    <div className='py-6 px-2 md:pr-4 md:w-3/5'>
                        <h1 className='font-bold md:text-2xl text-xl mb-3 leading-10'>Looking for an admission. Give us your details and we will help you!</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-6 mt-3 md:w-11/12'>
                            <input type="text" name="name" id="name" placeholder='Name'
                                onChange={(e) => setContactFormData(prev => ({ ...prev, name: e.target.value }))}
                                className='border border-blue-600 px-4 rounded py-2 focus:border-indigo-600'
                            />

                            <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number' onChange={(e) => setContactFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                                className='border border-blue-600 px-4 rounded py-2 focus:border-indigo-600'
                            />
                            <input type="email" name="email" id="email" placeholder='Email'
                                onChange={(e) => setContactFormData(prev => ({ ...prev, email: e.target.value }))}
                                className='border border-blue-600 px-4 rounded py-2 focus:border-indigo-600'
                            />
                            <select name="stream" id="stream"
                                onChange={(e) => setContactFormData(prev => ({ ...prev, stream: e.target.value }))}
                                className='border border-blue-600 px-4 rounded py-2 focus:border-indigo-600'
                            >
                                <option value="">Select</option>
                                {
                                    sortedStreamList.map(stream => <option key={stream.id} value={stream.value} >{convertWord(stream.name.toLowerCase())}</option>)
                                }
                            </select>
                            {
                                loading ? <div className='flex justify-center'>
                                    <Discuss
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="comment-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="comment-wrapper"
                                        colors={['#3431ff', '#ff0202']}
                                    />
                                </div> :
                                    <button type='submit' className='px-4 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-xl transition-all duration-200 ease-in' >Apply Now</button>
                            }
                        </form>
                        <p className='my-4 text-slate-600 text-sm'>
                            By proceeding ahead you expressly agree to the Carrer Navigator Terms & Conditions and Privacy Policy
                        </p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ContactUsForm