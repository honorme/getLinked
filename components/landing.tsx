import { FlareOne, FlareTwo, TitleSvg } from 'assets/svgs'
import Image from 'next/image'
import { Button } from './button'

export const Landing = () => {
  const nav = ['Timeline', 'Overview', 'FAQs', 'Contact']

  return (
    <div className="flex flex-col bg-[#140D27] text-[#ffffff] ">
      <div className="absolute left-0 ">
        <FlareOne />
      </div>
      <div className="absolute right-0 top-0 ">
        <FlareTwo />
      </div>
      <div className="w-full h-screen flex flex-col ">
        <div className="w-full h-[140px] border-b-[1px] border-[#ffffff20] px-24 flex items-end justify-between pb-[26px] ">
          <span className="flex font-medium text-[36px] ">
            <p>get</p>
            <p className="text-[#D434FE] ">linked</p>
          </span>
          <div className="flex items-center gap-32 z-10">
            <div className="flex items-center gap-10">
              {nav?.map((item, index) => (
                <p
                  className="text-[14px] hover:text-[#D434FE] transition-all cursor-pointer "
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
            <Button style={{ height: 53 }}>Register</Button>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="z-10 ml-24 mt-20 ">
            <TitleSvg width={600} />
            <p className="w-96 ">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button style={{ height: 53, marginTop: 40 }}>Register</Button>
          </div>
          <div className="w-[600px] h-[600px] ">
            <Image
              src="/images/image-one.png"
              alt="logo"
              width={500}
              height={500}
              className="absolute bottom-16 ml-14 z-30 globe "
              // className="relative left-28 top-20 "
            />
            <Image
              src="/images/man-wearing-smart-glasses-touching-virtual-screen.png"
              alt="logo"
              width={600}
              height={600}
              className="absolute bottom-0 z-10 grayscale-[50%] "
              // className="relative left-28 top-20 "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex  bg-[#ffffff20]  "></div>
    </div>
  )
}
