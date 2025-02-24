import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './ButtonSpan';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mvgzvjjz'
    );
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const subjectInput = form.subject as HTMLInputElement;
        const subjectValue = subjectInput.value;

        if (subjectValue.length < 20) {
            setErrorMessage('Subject must be at least 20 characters long');
        } else {
            setErrorMessage('');
            try {
                await handleSubmit(event);
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrorMessage('An error occurred. Please try again later.');
            }
        }
    };

    useEffect(() => {
        console.log('Form state:', state);
        if (state.succeeded) {
            const form = document.querySelector('form') as HTMLFormElement;
            if (form) form.reset();
            toast.success('Message sent successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else if (
            state.errors &&
            Array.isArray(state.errors) &&
            state.errors.length > 0
        ) {
            console.error('Form submission failed:', state.errors);
            setErrorMessage('Failed to send message. Please try again.');
        }
    }, [state]);

    return (
        <div className="desktop:py-[100px] lg:py-[80px] phone:py-[60px] py-[40px] custom-mx">
            <ToastContainer />
            <div className="w-full flex xl:flex-row flex-col justify-between desktop:gap-[80px] gap-[40px]">
                <div className="desktop:w-[54.8%] xl:w-[46%] w-[100%]">
                    <h2 className="font-architects font-normal text-white desktop:text-[60px] text-[50px] leading-[80px] desktop:mb-[60px] mb-[40px]">
                        Get in touch with us
                    </h2>
                    <p className="font-normal desktop:text-xl text-lg desktop:leading-[34px] leading-[28px] text-lightGray">
                        Our aim is to craft bespoke projects that embody the
                        unique personality and lifestyle of each client. We
                        believe every detail, from materials to design, is
                        essential in shaping a truly extraordinary environment.
                    </p>
                    <p className="font-normal desktop:text-xl text-lg desktop:leading-[34px] leading-[28px] text-lightGray">
                        {' '}
                        Come visit us. You’ll see how we can make you ideas
                        happen!
                    </p>
                    <form
                        onSubmit={validateForm}
                        method="POST"
                        className="desktop:mt-[60px] mt-[40px]"
                    >
                        <div className="flex desktop:flex-row flex-col desktop:gap-[60px] gap-[30px]">
                            <div className="flex flex-col w-[50%]">
                                <label
                                    htmlFor="fullname"
                                    className="uppercase xl:text-base text-sm leading-5 text-lightGray"
                                >
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    required
                                    className="bg-transparent py-[30px] border-b border-b-[#333333] desktop:text-[25px] text-xl leading-5 font-light text-white placeholder-[#828282] focus:outline-none"
                                    placeholder="Enter your name and surname"
                                />
                                <ValidationError
                                    prefix="Full Name"
                                    field="fullname"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="flex flex-col desktop:w-[50%] w-[100%]">
                                <label
                                    htmlFor="email"
                                    className="uppercase xl:text-base text-sm leading-5 text-lightGray"
                                >
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="bg-transparent py-[30px] border-b border-b-[#333333] desktop:text-[25px] text-xl leading-5 font-light text-white placeholder-[#828282] focus:outline-none"
                                    placeholder="example@email.com"
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        if (event.target.value.length < 20) {
                                            console.log(
                                                'Message must be at least 20 characters long'
                                            );
                                        }
                                    }}
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col desktop:mt-[40px] mt-[30px]">
                            <label
                                htmlFor="subject"
                                className="uppercase xl:text-base text-sm leading-5 text-lightGray"
                            >
                                Subject:
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="bg-transparent py-[30px] border-b border-b-[#333333] desktop:text-[25px] xl:text-xl leading-5 font-light text-white placeholder-[#828282] focus:outline-none"
                                placeholder="Tell us about your future project."
                            />
                            {errorMessage && (
                                <span className="text-red-500 text-sm mt-2">
                                    {errorMessage}
                                </span>
                            )}
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-white20 py-[30px] uppercase font-bold mt-[40px] text-base"
                        >
                            Message us
                        </Button>
                    </form>
                </div>
                <div className="desktop:w-[41%] xl:w-[50.7%] w-[100%] xl:h-auto phone:h-[799px] h-[359px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.2678327500457!2d55.211559710471455!3d25.12663437766369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc5257e6dcf%3A0x56380e74285c1354!2zV2FyZWhvdXNlIDE2IC0gQWwgUXVveiAtIEFsIFF1b3ogSW5kdXN0cmlhbCBBcmVhIDMgLSBEdWJhaSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2sua!4v1739883205526!5m2!1sru!2sua"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
