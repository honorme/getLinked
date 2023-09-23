import { clash, montserrat } from 'pages/_app'
import { Button } from './button'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import {
  BackButton,
  Facebook,
  Instagram,
  Linkedin,
  StarOneScreenOne,
  StarTwoScreenOne,
  Twitter,
} from 'assets/svgs'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './utils'
import { useMutation } from '@tanstack/react-query'

export const ContactUs = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handlePage = (index: number) => {
    index !== 3 && router.push('/')
  }
  const [contactDetails, setContactDetails] = useState({
    first_name: '',
    email: '',
    message: '',
  })
  const contact = useMutation(async (data: any) => {
    const res = await axios.post(BASE_URL + '/hackathon/contact-form', data)
    if (!res.data) {
      throw new Error('Failed to contact')
    }
    return res.data
  })
  const handleContact = useCallback(async () => {
    try {
      setLoading(true)
      await contact.mutate(contactDetails)
    } catch (error) {
      setLoading(false)
      console.log(error)
      alert('Failed to save contact')
    } finally {
      setContactDetails({
        first_name: '',
        email: '',
        message: '',
      })
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [contactDetails, contact])

  return (
    <div className={classNames(montserrat.className, `relative`)}>
      <Image
        draggable={false}
        src="/images/flare/flare3.png"
        alt="logo"
        width={710}
        height={587}
        className="absolute z-0 bottom-0 -rotate-180 mt-[140px] "
      />
      <Image
        draggable={false}
        src="/images/flare/flare2.png"
        alt="logo"
        width={710}
        height={587}
        className="absolute z-0 bottom-0 right-0 mb-[-200px]  max-[800px]:hidden"
      />
      <StarOneScreenOne className="absolute top-48 left-32 " />
      <StarTwoScreenOne className="absolute top-56 right-[500px] " />
      <StarTwoScreenOne className="absolute bottom-32 left-[500px] max-[700px]:hidden " />
      <div className="w-full h-[140px] max-[700px]:h-[60px] z-50 fixed px-24 max-[700px]:px-4 flex items-end justify-between pb-[26px] backdrop-blur-[10px] ">
        <span
          className={`flex font-medium text-[36px] max-[700px]:hidden ${clash.className} `}
        >
          <p>get</p>
          <p className="text-[#D434FE] ">linked</p>
        </span>
        <div className="flex items-center gap-32 z-10 max-[800px]:hidden ">
          <div className="flex items-center gap-2 ">
            {nav?.map((item, index) => (
              <p
                onClick={() => handlePage(index)}
                className={classNames(
                  'text-[14px] hover:text-[#D434FE] hover:tracking-[.8px] transition-all cursor-pointer w-28 flex justify-center ',
                  index === 3 && 'text-[#D434FE]'
                )}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="w-[172px] flex items-center justify-center ">
            <Button
              onClick={() => router.push('/register')}
              style={{ height: 53 }}
            >
              Register
            </Button>
          </div>
        </div>
        <BackButton
          onClick={() => router.back()}
          className="min-[700px]:hidden cursor-pointer "
        />
      </div>
      <div className="flex max-[700px]:flex-col max-[700px]:items-center max-[700px]:pt-[20px] pt-[300px] justify-center gap-x-40 relative ">
        <div className=" max-[700px]:hidden">
          <div className="flex flex-col gap-y-3 px-10 max-[800px]:px-0 max-[800px]:mt-10 text-[13px] w-[350px] ">
            <p className="text-[#D434FE] text-[28px] font-semibold ">
              Get in Touch
            </p>
            <p>Contact Information</p>
            <p className="w-[150px] ">
              27,Alara Street Yaba 100012 Lagos State
            </p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
            <div className="flex flex-col gap-x-4 gap-y-2 ">
              <p className="text-[#D434FE] font-semibold ">Share on</p>
              <div className="flex items-center gap-x-2 ">
                <Instagram />
                <Twitter />
                <Facebook />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] max-[700px]:w-auto min-[700px]:bg-[#ffffff09] backdrop-blur-[5px] rounded-[10px] p-14 max-[700px]:px-4 ">
          <p
            className={classNames(
              clash.className,
              'text-[#D434FE] text-[19px] font-semibold '
            )}
          >
            Questions or need assistance?
            <br />
            Let us know about it!
          </p>
          <p className="max-[700px]:text-[12px] ">
            Email us below to any question related to our event
          </p>
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col">
              <input
                style={{ width: '100%', height: 47, paddingLeft: 10 }}
                className="mt-10"
                type="text"
                placeholder="First Name"
                value={contactDetails.first_name}
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    first_name: e.target.value,
                  })
                }}
              />
              <input
                style={{ width: '100%', height: 47, paddingLeft: 10 }}
                className="mt-10"
                type="text"
                placeholder="Mail"
                value={contactDetails.email}
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    email: e.target.value,
                  })
                }}
              />
              <textarea
                style={{
                  width: '100%',
                  minHeight: 100,
                  maxHeight: 120,
                  paddingLeft: 10,
                }}
                className="mt-10"
                placeholder="Message"
                value={contactDetails.message}
                onChange={(e) => {
                  setContactDetails({
                    ...contactDetails,
                    message: e.target.value,
                  })
                }}
              />
            </div>
            <div
              className={classNames(
                'w-full flex items-center justify-center transition-all duration-200 ',
                !loading && ' hover:px-2'
              )}
            >
              <button
                disabled={
                  loading ||
                  !contactDetails.first_name ||
                  !contactDetails.email ||
                  !contactDetails.message
                }
                onClick={handleContact}
                style={{ height: 47, marginTop: 40 }}
                className={classNames(
                  loading ||
                    !contactDetails.first_name ||
                    !contactDetails.email ||
                    !contactDetails.message
                    ? 'bg-[#aeaaaa] rounded-[5px] w-full cursor-not-allowed '
                    : 'primary-button w-full '
                )}
              >
                Submit
              </button>
              {!!loading && (
                <span className="loader relative top-5 left-2"></span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-4 mt-10 mb-5 min-[700px]:hidden ">
          <p className="text-[#D434FE] font-semibold text-[14px] ">Share on</p>
          <div className="flex items-center gap-x-4 ">
            <Instagram />
            <Twitter />
            <Facebook />
            <Linkedin />
          </div>
        </div>
      </div>
      {contact.isSuccess && (
        <div className="w-full h-full max-[900px]:px-5 max-[700px]: fixed top-0 left-0 flex justify-center items-center bg-[#000000b0] backdrop-blur-[5px] ">
          <div className="border-[1px] border-[#D434FE] max-[700px]:border-none rounded-[10px] p-10 px-20 ">
            <div className="flex max-[700px]:flex-col max-[700px]:items-center  ">
              <Image
                draggable={false}
                src="/images/main/big-check.png"
                alt="logo"
                width={300}
                height={400}
                className="relative left-20 max-[700px]:left-0"
              />
              <Image
                draggable={false}
                src="/images/main/congrats-man.png"
                alt="logo"
                width={300}
                height={400}
                className="relative right-20 max-[700px]:right-0"
              />
            </div>
            <p className="text-[30px] text-center ">
              Congratulations <br /> you have added Contact!
            </p>
            <div className="w-full flex items-center justify-center hover:px-2 transition-all duration-200 mt-10 ">
              <button
                onClick={() => router.push('/')}
                className="primary-button w-full "
                style={{
                  height: 53,
                  width: '90%',
                  backgroundColor: 'transparent',
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
      {contact.isError && (
        <div className="w-full h-full max-[900px]:px-5 max-[700px]: fixed top-0 left-0 flex justify-center items-center bg-[#000000b0] backdrop-blur-[5px] ">
          <div className="border-[1px] border-[#D434FE] max-[700px]:border-none rounded-[10px] p-10 px-20 ">
            <div className="flex justify-center ">
              <Image
                draggable={false}
                src="/images/main/error.png"
                alt="logo"
                width={150}
                height={150}
                className=""
              />
            </div>
            <p className="text-[30px] max-[800px]:text-[15px] text-center mt-4 ">
              Sorry, an error occured
            </p>
            <div className="w-full flex items-center justify-center hover:px-2 transition-all duration-200 mt-10 ">
              <button
                onClick={() => router.reload()}
                className="primary-button w-full "
                style={{
                  height: 53,
                  width: '90%',
                  backgroundColor: 'transparent',
                }}
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
const nav = ['Timeline', 'Overview', 'FAQs', 'Contact']
