import { clash, montserrat } from 'pages/_app'
import { Button } from './button'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Image from 'next/image'
import {
  BackButton,
  StarOneScreenOne,
  StarTwoScreenOne,
  Walking,
} from 'assets/svgs'
import { useCallback, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from './utils'

export const RegisterUser = () => {
  const router = useRouter()
  const [checked, setChecked] = useState(true)
  const [registrationData, setRegistrationData] = useState({
    email: '',
    phone_number: '',
    team_name: '',
    group_size: 1,
    project_topic: '',
    category: 1,
    privacy_policy_accepted: checked,
  })
  const groupSize = Array.from({ length: 10 }, (_, index) => index + 1)
  const register = useMutation(async (data: any) => {
    const res = await axios.post(BASE_URL + '/hackathon/registration', data)
    if (!res.data) {
      throw new Error('Failed to register')
    }
    return res.data
  })
  const [loading, setLoading] = useState(false)
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axios.get(BASE_URL + '/hackathon/categories-list')
      if (!res.data) {
        throw new Error('Failed to fetch categories')
      }
      return res.data
    },
  })
  const handlePage = (index: number) => {
    index !== 3 ? router.push('/') : router.push('/contact')
  }

  const handleRegister = useCallback(async () => {
    try {
      setLoading(true)
      register.mutate(registrationData)
    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setRegistrationData({
        email: '',
        phone_number: '',
        team_name: '',
        group_size: 0,
        project_topic: '',
        category: 1,
        privacy_policy_accepted: checked,
      })
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [checked, registrationData, register])

  return (
    <div className={classNames(montserrat.className, `w-full relative`)}>
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
      <StarTwoScreenOne className="absolute top-56 right-[500px] max-[700px]:hidden " />
      <StarTwoScreenOne className="absolute bottom-32 left-[500px] max-[700px]:hidden " />
      <div className="w-full h-[140px] max-[700px]:h-[70px] z-50 fixed px-24 flex items-end max-[700px]:items-center justify-between pb-[26px] max-[700px]:pb-0 backdrop-blur-[10px] ">
        <BackButton
          onClick={() => router.back()}
          className="min-[700px]:hidden cursor-pointer "
        />
        <span className={`flex font-medium text-[36px] ${clash.className} `}>
          <p>get</p>
          <p className="text-[#D434FE] ">linked</p>
        </span>
        <div className="flex items-center gap-32 z-10 max-[1100px]:hidden ">
          <div className="flex items-center gap-2 ">
            {nav?.map((item, index) => (
              <p
                onClick={() => handlePage(index)}
                className={classNames(
                  'text-[14px] hover:text-[#D434FE] hover:tracking-[.8px] transition-all cursor-pointer w-28 flex justify-center '
                )}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="w-[172px] flex items-center justify-center ">
            <button
              onClick={() => router.push('/register')}
              className="border-[1px] border-[#D434FE] rounded-[6px] w-full cursor-not-allowed "
              style={{ height: 53, backgroundColor: 'transparent' }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex max-[1300px]:flex-col max-[1200px]:items-center pt-[300px] justify-center relative ">
        <Image
          draggable={false}
          src="/images/main/thumbsup-man.png"
          alt="logo"
          width={710}
          height={587}
          className="relative bottom-10"
        />
        <div
          className={classNames(
            montserrat.className,
            'w-[680px] max-[700px]:w-auto max-[700px]:mb-10 min-[700px]:bg-[#ffffff09] backdrop-blur-[5px] rounded-[10px] p-14 max-[700px]:px-5 max-[700px]:mx-5 '
          )}
        >
          <p
            className={classNames(
              clash.className,
              'text-[#D434FE] text-[19px] font-semibold '
            )}
          >
            Register
          </p>
          <div className="flex items-center text-[11px] ">
            <p>Be part of this movement!</p>
            <Walking className="relative bottom-3 left-2 " />
          </div>
          <p className="pt-2 pb-10">CREATE YOUR ACCOUNT</p>
          <div className="flex flex-col items-center">
            <div className="w-full grid grid-cols-2 max-[700px]:grid-cols-1 gap-8 ">
              <div className=" flex flex-col gap-y-3 text-[14px] ">
                <p>Teams Name</p>
                <input
                  style={{ width: '100%', height: 47, paddingLeft: 10 }}
                  type="text"
                  placeholder="Enter the name of your group"
                  value={registrationData.team_name}
                  onChange={(e) => {
                    setRegistrationData({
                      ...registrationData,
                      team_name: e.target.value,
                    })
                  }}
                />
              </div>
              <div className=" flex flex-col gap-y-3 text-[14px] ">
                <p>Phone</p>
                <input
                  style={{ width: '100%', height: 47, paddingLeft: 10 }}
                  type="text"
                  placeholder="Enter your phone number"
                  value={registrationData.phone_number}
                  onChange={(e) => {
                    setRegistrationData({
                      ...registrationData,
                      phone_number: e.target.value,
                    })
                  }}
                />
              </div>
              <div className="flex flex-col gap-y-3 text-[14px] ">
                <p>Email</p>
                <input
                  style={{ width: '100%', height: 47, paddingLeft: 10 }}
                  type="text"
                  placeholder="Enter your email address"
                  value={registrationData.email}
                  onChange={(e) => {
                    setRegistrationData({
                      ...registrationData,
                      email: e.target.value,
                    })
                  }}
                />
              </div>
              <div className="flex flex-col gap-y-3 text-[14px] ">
                <p>Project Topic</p>
                <input
                  style={{ width: '100%', height: 47, paddingLeft: 10 }}
                  type="text"
                  placeholder="What is your group project topic"
                  value={registrationData.project_topic}
                  onChange={(e) => {
                    setRegistrationData({
                      ...registrationData,
                      project_topic: e.target.value,
                    })
                  }}
                />
              </div>
              <div className="flex flex-col gap-y-3 text-[14px] ">
                <p>Category</p>
                <select
                  style={{ width: '100%', height: 47, paddingLeft: 10 }}
                  defaultValue={undefined}
                  value={registrationData.category}
                  onChange={(e) => {
                    setRegistrationData({
                      ...registrationData,
                      category: Number(e.target.value),
                    })
                  }}
                >
                  {categories?.map((item: any) => (
                    <option
                      key={item.id}
                      style={{ backgroundColor: '#D434FE' }}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-y-3 text-[14px] ">
                <p>Group Size</p>
                <select
                  style={{ width: '100%', height: 47, paddingLeft: 10 }}
                  placeholder="First Name"
                  value={registrationData.group_size}
                  onChange={(e) => {
                    setRegistrationData({
                      ...registrationData,
                      group_size: Number(e.target.value),
                    })
                  }}
                >
                  {groupSize.map((item: any) => (
                    <option
                      style={{ backgroundColor: '#D434FE' }}
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="self-start italic text-[#FF26B9] text-[13px] max-[700px]:text-[10px] pt-5 ">
              Please review your registration details before submitting
            </p>
            <div className="flex self-start gap-x-4 text-[13px] max-[700px]:text-[11px] pt-4 ">
              <input
                style={{ width: 20, height: 20 }}
                onChange={(e) => setChecked(e.target.checked)}
                checked={checked}
                type="checkbox"
              />
              <p>
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <div
              className={classNames(
                'w-full flex items-center justify-center transition-all duration-200 ',
                checked && !loading && ' hover:px-2'
              )}
            >
              <button
                onClick={handleRegister}
                style={{ height: 47, marginTop: 40 }}
                className={classNames(
                  checked && !loading
                    ? 'primary-button w-full '
                    : 'bg-[#aeaaaa] rounded-[5px] w-full cursor-not-allowed '
                )}
              >
                Register Now
              </button>
              {!!loading && (
                <span className="loader relative top-5 left-2"></span>
              )}
            </div>
          </div>
        </div>
        {register.isSuccess && (
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
                Congratulations <br /> you have successfully Registered!
              </p>
              <p className="text-center mt-5 ">
                Yes, it was easy and you did it! check your mail box for next
                step
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
      </div>
    </div>
  )
}
const nav = ['Timeline', 'Overview', 'FAQs', 'Contact']
