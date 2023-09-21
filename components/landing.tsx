import {
  Bronze,
  ChairGirl,
  Championship,
  CloudMan,
  CountdownSvg,
  CurledArrowScreenTwo,
  Ellipse,
  Facebook,
  FlareFive,
  FlareFour,
  FlareOne,
  FlareSix,
  FlareTwo,
  Gold,
  GreenCheck,
  Instagram,
  LibertyAssured,
  LibertyPay,
  Linkedin,
  Location,
  PadlockMan,
  Phone,
  QuestionMark,
  Security,
  Silver,
  StandingMan_Woman,
  StarOneScreenOne,
  StarOneScreenTwo,
  StarTwoScreenOne,
  SubTitleSvg,
  TheBigIdea,
  TitleSvg,
  Twitter,
  Whispersms,
  Winwise,
} from 'assets/svgs'
import Image from 'next/image'
import { Button } from './button'
import { useEffect, useState } from 'react'
import { clash, montserrat, typohoop, voces, volkhov } from 'pages/_app'

export const Landing = () => {
  const nav = ['Timeline', 'Overview', 'FAQs', 'Contact']
  const [idx, setIdx] = useState<number>()
  const [width, setWidth] = useState(500)
  const [height, setHeight] = useState(500)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setWidth(600)
        setHeight(600)
      } else {
        setWidth(500)
        setHeight(500)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`tracking-wide ${montserrat.className} max-[500px]:absolute `}
    >
      <div className="absolute left-0 -top-40 ">{/* <FlareOne /> */}</div>
      <div className="absolute right-0 top-0 ">
        <FlareTwo />
      </div>
      {/* screen one - head  */}
      <div className="w-[full] max-[1100px]:h-auto flex flex-col border-b-[1px] border-[#ffffff20] ">
        <StarOneScreenOne className="absolute top-48 left-32 " />
        <StarTwoScreenOne className="absolute top-56 right-[500px] " />
        <StarTwoScreenOne className="absolute bottom-32 left-[500px] " />
        <div className="w-full h-[140px] border-b-[1px] border-[#ffffff20] px-24 flex items-end justify-between pb-[26px] ">
          <span className={`flex font-medium text-[36px] ${clash.className} `}>
            <p>get</p>
            <p className="text-[#D434FE] ">linked</p>
          </span>
          {/* <div className="flex items-center gap-32 z-10">
            <div className="flex items-center gap-2 max-[1100px]:">
              {nav?.map((item, index) => (
                <p
                  className="text-[14px] hover:text-[#D434FE] hover:tracking-[.8px] transition-all cursor-pointer w-28 flex justify-center "
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
            <Button style={{ height: 53 }}>Register</Button>
          </div> */}
        </div>

        <div className="w-full flex max-[1100px]:flex-col justify-between items-center mt-10 relative ">
          <div className="z-10 ml-24 mt-20 ">
            <TitleSvg className="w-[600px] max-[1100px]:w-[400px] " />
            <p className="w-96 ">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button style={{ height: 53, marginTop: 40 }}>Register</Button>
            <CountdownSvg className="mt-8 " />
          </div>
          <SubTitleSvg className="absolute right-20 top-0 " />
          <div className="w-full flex min-[1100px]:justify-end max-[1100px]:justify-center h-[600px] overflow-hidden relative max-[1100px]:self-end ">
            <Image
              draggable={false}
              src="/images/image-one.png"
              alt="logo"
              width={width}
              height={height}
              style={{ transition: 'width 0.5s, height 0.5s' }}
              className="absolute bottom-16 max-[1100px]:left-0 ml-14 z-30 globe "
            />
            <Image
              draggable={false}
              src="/images/man-wearing-smart-glasses-touching-virtual-screen.png"
              alt="logo"
              width={600}
              height={600}
              className="absolute -bottom-5 z-10 grayscale-[50%] cloud-motion "
            />
            <Image
              draggable={false}
              src="/images/metrix.png"
              alt="logo"
              width={600}
              height={600}
              className="absolute bottom-40 right-0 z-0  globe "
            />
          </div>
        </div>
      </div>
      {/* screen two - introduction  */}
      <div className="w-full py-40 flex relative border-b-[1px] border-[#ffffff20]">
        <StarOneScreenTwo className="absolute top-60 left-32 " />
        <CurledArrowScreenTwo className="absolute bottom-32 right-[50%]" />
        <div className="w-full flex max-[1100px]:flex-col items-center justify-center gap-x-20 ">
          <TheBigIdea className="cloud-motion" />
          <div className="max-[1100px]:mt-20">
            <SubTitle
              white="Introduction to getlinked"
              purple="tech Hackathon 1.0"
              star={<StarOneScreenTwo className="relative left-20 top-10 " />}
            />
            <p className="w-[525px] max-[1100px]:w-[400px] max-[1100px]:text-center mt-5 ">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&#39;re a coding genius, a design maverick, or a concept
              wizard, youll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&#39;s what we&#39;re all about!
            </p>
          </div>
        </div>
      </div>
      {/* screen three - rules and guidelines  */}
      <div className="w-full flex relative  border-b-[1px] border-[#ffffff20]">
        {/* <FlareOne className="absolute left-0 -top-40 " /> */}
        <FlareFour className="absolute right-0 top-0 " />
        <div className="w-full flex max-[1100px]:flex-col-reverse items-center justify-center gap-x-10 ">
          <div className="z-10 max-[1100px]:mb-20 ">
            <SubTitle
              white="Rules and"
              purple="Guidelines"
              star={<StarTwoScreenOne className="relative left-20 top-10 " />}
            />
            <p className="w-[525px] max-[1100px]:w-[400px] max-[1100px]:text-center mt-5 ">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&#39;re a coding genius, a design maverick, or a concept
              wizard, you&#39;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&#39;s what we&#39;re all about!
            </p>
          </div>
          <div className="relative">
            <ChairGirl className="relative z-10 cloud-motion " />
            <StarOneScreenTwo className="absolute bottom-44 left-0 " />
            <Ellipse className="absolute top-20 right-32 z-0 " />
          </div>
        </div>
      </div>
      {/* screen four - judging criteria  */}
      <div className="w-full py-20 pt-32 flex relative  border-b-[1px] border-[#ffffff20]">
        {/* <FlareFive className="absolute -bottom-52 left-0 " /> */}
        <FlareSix className="absolute right-0 top-52 " />
        <div className="w-full flex max-[1100px]:flex-col items-center justify-center gap-x-10 ">
          <div className="relative">
            <StandingMan_Woman className="relative z-10 cloud-motion " />
            <Ellipse className="absolute -top-8 left-24 z-0 " />
            <StarOneScreenTwo className="absolute bottom-0 right-0 " />
            <StarOneScreenTwo className="absolute -top-20 left-40 " />
          </div>
          <div className="z-10 flex flex-col gap-y-4 ">
            <SubTitle white="Judging Criteria" purple="Key attributes" />
            {judgingCriteria?.map(({ label, text }, index) => (
              <span key={index} className="flex flex-col py-2 ">
                <p className="w-[600px] max-[1100px]:w-[400px] font-thin text-[14px] max-[1100px]:text-center ">
                  <b className="text-[#FF26B9] font-semibold pr-2 ">{label}</b>
                  {text}
                </p>
              </span>
            ))}
            <div className="w-full flex  max-[1100px]:justify-center ">
              <Button style={{ height: 53, marginTop: 30 }}>Read More</Button>
            </div>
          </div>
        </div>
      </div>
      {/* screen five - faqs  */}
      <div className="w-full py-20 flex relative border-b-[1px] border-[#ffffff20]">
        <div className="w-full flex max-[1100px]:flex-col items-center justify-center gap-x-10 ">
          <div className="z-10 ">
            <div className="relative">
              <SubTitle white="Frequently Ask" purple="Question" />
              <StarOneScreenTwo className="absolute -top-10 -left-10 " />
            </div>
            <p className="w-[400px] font-extralight text-[14px] ">
              We got answers to the questions that you might want to ask about{' '}
              <b className="font-medium">getlinked Hackathon 1.0</b>
            </p>
            <div className="h-[400px] flex flex-col justify-center mt-10 ">
              <div className="h-full py-10 flex flex-col justify-between">
                {faqs?.map((text, index) => (
                  <div
                    onMouseOver={() => setIdx(index)}
                    onMouseOut={() => setIdx(undefined)}
                    key={index}
                    className="flex border-b-[1px] border-[#D434FE] h-[40px] hover:pb-2 transition-all duration-200 font-extralight text-[13px] "
                  >
                    <div className="flex w-full gap-2 items-center justify-between">
                      <p>{text}</p>
                      <p className="text-[#D434FE] text-[18px] cursor-pointer ">
                        {idx === index ? '-' : '+'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative max-[1100px]:mt-20">
            <CloudMan className="relative z-10 w-[700px] cloud-motion " />
            <QuestionMark className="absolute -top-12 left-24 z-0 " />
            <StarOneScreenTwo className="absolute bottom-0 right-0 " />
            <StarOneScreenTwo className="absolute top-24 left-32 " />
          </div>
        </div>
      </div>
      {/* screen five - timeline  */}
      <div className="w-full py-20 flex relative overflow-hidden">
        <StarOneScreenOne className="absolute top-48 left-32 " />
        <StarOneScreenOne className="absolute top-[50%] right-32 " />
        <StarTwoScreenOne className="absolute bottom-20 left-52 " />
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center ">
            <p className={`text-[32px] font-semibold ${clash.className} `}>
              Timeline
            </p>
            <p className="w-[380px] text-center ">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>
          <div className="mt-10 px-24 flex justify-center max-[1100px]:justify-start w-full ">
            <div className="relative flex flex-col gap-y-24 max-[1100px]:gap-y-32 mt-20 ">
              {timeline?.map(({ eventTitle, subtitle, date }, index) => (
                <div key={index} className="w-full flex ">
                  {index % 2 === 0 && (
                    <div className="absolute  min-[1100px]:right-20 max-[1100px]:left-20 -mt-6 max-[1100px]:-mt-24 flex flex-col text-end max-[1100px]:text-start">
                      <p className="text-[18px] text-[#D434FE] font-bold ">
                        {eventTitle}
                      </p>
                      <p className="text-[12px] font-thin text-end max-[1100px]:text-start w-[400px] ">
                        {subtitle}
                      </p>
                    </div>
                  )}
                  <p className="absolute min-[1100px]:right-20 max-[1100px]:left-20 truncate text-[18px] text-[#D434FE] font-bold ">
                    {index % 2 !== 0 && date}
                  </p>
                  <div className="flex flex-col justify-center items-center relative ">
                    <div
                      className={
                        index !== 0
                          ? `absolute bottom-10 bg-[#D434FE] w-[2px] h-20 max-[1100px]:h-28 z-0 `
                          : `absolute bottom-10 bg-[#D434FE] w-[2px] h-20 max-[1100px]:h-20 z-0`
                      }
                    ></div>
                    <div className="circle w-8 h-8 flex items-center justify-center z-10 ">
                      {index + 1}
                    </div>
                  </div>
                  {index % 2 !== 0 && (
                    <div className="absolute left-20 -mt-6 max-[1100px]:-mt-24 flex flex-col text-start">
                      <p className="text-[18px] text-[#D434FE] font-bold ">
                        {eventTitle}
                      </p>
                      <p className="text-[12px] font-thin text-start w-[400px] ">
                        {subtitle}
                      </p>
                    </div>
                  )}
                  <p className="absolute left-20 truncate text-[18px] text-[#D434FE] font-bold ">
                    {index % 2 === 0 && date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* screen six - prizes  */}
      <div className="w-full overflow-y- py-20 flex relative">
        {/* <FlareFive className="absolute -top-40 left-0 " /> */}
        <FlareFour className="absolute right-0 top-0 " />
        <div className="w-full flex max-[1100px]:flex-col justify-evenly max-[1100px]:justify-center px-24 z-10 ">
          <div className="relative mt-32 ">
            <div className="min-[1100px]:pl-36 min-[1100px]:hidden py-2 max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:items-center ">
              <SubTitle white="Prizes and" purple="Rewards" />
              <p className="w-[330px] text-[13px] max-[1100px]:text-center max-[1100px]:mt-3 ">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="w-full flex max-[1100px]:justify-center ">
              <Championship className="cloud-motion" />
            </div>
            <StarOneScreenOne className="absolute -top-32 left-32 " />
            <StarTwoScreenOne className="absolute -botom-32 left-32  " />
          </div>
          <div className="flex flex-col max-[1100px]:items-center ">
            <div className="pl-36 py-2 max-[1100px]:hidden ">
              <SubTitle white="Prizes and" purple="Rewards" />
              <p className="w-[330px] text-[13px] max-[1100px]:text-center ">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="flex gap-x-[20px] pt-48 ">
              <div className="relative bottom-0 hover:bottom-10 transition-all duration-200 ">
                <Silver className="absolute -top-20 left-[17px] cloud-motion " />
                <StarOneScreenOne className="absolute -top-40 " />
                <div className="w-[212px] h-[296px] bg-[#D434FE20] border-[1px] border-[#D434FE] rounded-[4px] flex flex-col items-center justify-end p-8 ">
                  <p className="text-center first-line:text-[20px] first-line:leading-[8px] first-line:font-medium ">
                    2nd
                    <br /> Runner
                  </p>
                  <p className="text-[#D434FE] font-bold text-[22px] ">
                    N300,000
                  </p>
                </div>
              </div>
              <div className="relative mt-5 bottom-0 hover:bottom-10 transition-all duration-200  ">
                <Gold className="absolute -top-40 -right-[42px] cloud-motion " />
                <StarTwoScreenOne className="absolute -bottom-10 -right-10 " />
                <div className="w-[212px] h-[296px] bg-[#903AFF20] border-[1px] border-[#903AFF] rounded-[4px] flex flex-col items-center justify-end p-8 ">
                  <p className="text-center first-line:text-[20px] first-line:leading-[8px] first-line:font-medium ">
                    1st
                    <br /> Runner
                  </p>
                  <p className="text-[#903AFF] font-bold text-[22px] ">
                    N400,000
                  </p>
                </div>
              </div>
              <div className="relative bottom-0 hover:bottom-10 transition-all duration-200  ">
                <Bronze className="absolute -top-20 left-[17px] cloud-motion " />
                <StarOneScreenOne className="absolute -top-20 right-0 " />
                <div className="w-[212px] h-[296px] bg-[#D434FE20] border-[1px] border-[#D434FE] rounded-[4px] flex flex-col items-center justify-end p-8 ">
                  <p className="text-center first-line:text-[20px] first-line:leading-[8px] first-line:font-medium ">
                    3rd
                    <br /> Runner
                  </p>
                  <p className="text-[#D434FE] font-bold text-[22px] ">
                    N150,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* screen seven- partners  */}
      <div className="w-full h-[1080px] py-20 flex relative border-b-[1px] border-[#ffffff20]">
        {/* <FlareFive className="absolute -top-40 left-0 " /> */}
        {/* <FlareSix className="absolute right-0 -bottom-40 " /> */}
        <div className="w-full flex flex-col justify-center ">
          <div className="w-full h-[100px] flex flex-col items-center justify-center z-10 ">
            <p
              className={`text-center text-[22px] font-semibold py-2 ${clash.className} `}
            >
              Partners and Sponsors
            </p>
            <p className="text-center text-[12px] w-[420px] font-thin ">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <div className="px-10 flex justify-center">
            <div className="grid min-[1100px]:grid-cols-3 max-[1100px]:grid-cols-2 border-[1px] border-[#D434FE] rounded-[5px] px-14 max-[700px]:px-0 py-20 mt-10 relative ">
              <StarOneScreenOne className="absolute left-10 -top-10 " />
              <div className="rounded-xl sponsor w-[300px] max-[800px]:w-[230px] h-[150px] flex items-center justify-center relative ">
                <LibertyAssured />
                <HorizLine className="-bottom-[2px] " />
              </div>
              <div className="rounded-xl sponsor w-[300px] max-[800px]:w-[230px] h-[150px] flex items-center justify-center relative ">
                <LibertyPay />
                <StarTwoScreenOne className="absolute right-10 -top-4 " />
                <HorizLine className="-bottom-[2px] " />
                <VertLine className="max-[700px]:hidden max-[1100px]:hidden right-0" />
                <VertLine className="max-[700px]:hidden left-0" />
              </div>
              <div className="rounded-xl sponsor w-[300px] max-[800px]:w-[230px] h-[150px] flex items-center justify-center relative ">
                <Winwise />
                <HorizLine className="-bottom-[2px] " />
              </div>
              <div className="rounded-xl sponsor w-[300px] max-[800px]:w-[230px] h-[150px] flex items-center justify-center relative ">
                <Whispersms />
                <VertLine className="max-[700px]:hidden min-[1100px]:hidden max-[1100px]:left-0" />
                <HorizLine className="min-[1100px]:hidden max-[1100px]:-bottom-[2px] " />
              </div>
              <div className="rounded-xl sponsor w-[300px] max-[800px]:w-[230px] h-[150px] flex items-center justify-center relative ">
                <div className={`${typohoop.className} text-[50px] flex `}>
                  <p>Pay</p>
                  <p className="text-[#00A3FF] ">box</p>
                </div>
                <StarOneScreenOne className="absolute right-10 -bottom-10 " />
                <VertLine className="max-[700px]:hidden max-[1100px]:hidden left-0" />
              </div>
              <div className="rounded-xl sponsor w-[300px] max-[800px]:w-[230px] h-[150px] flex items-center justify-center relative ">
                <div className={`${voces.className} text-[40px] flex gap-1 `}>
                  <p>Vuzual</p>
                  <div>
                    <p className={`text-[#F00] ${volkhov.className} `}>Plus</p>
                    <p className="text-[11px] leading-[1px] ">Design Studios</p>
                  </div>
                </div>
                <VertLine className="max-[700px]:hidden left-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* screen eight- privacy policy  */}
      <div className="w-full overflow-hidden py-20 px-24 flex relative">
        <FlareFive className="absolute -bottom-72  -left-20 " />
        {/* <PadlockMan className="absolute right-32 bottom-10 z-10 " /> */}
        <StarOneScreenOne className="absolute top-32 right-32 " />
        <StarTwoScreenOne className="absolute bottom-20 right-20 " />
        <div className="w-full flex flex-row-reverse max-[1100px]:flex-col-reverse justify-between ">
          <div className="relative">
            <PadlockMan className="z-10 relative" />
            <Security className="absolute right-32 top-12 z-0 " />
          </div>
          <div className="flex text-[13px]">
            <div className="w-full flex flex-col relative ">
              <div className="flex flex-col gap-y-8">
                <SubTitle
                  white="Privacy Policy and"
                  purple="Terms"
                  star={<StarTwoScreenOne className="absolute -top-5 ml-6 " />}
                />
                <p className="text-[#ffffff9f] max-[1100px]:text-center ">
                  Last updated on September 12, 2023
                </p>
                <p className=" max-[1100px]:text-center ">
                  Below are our privacy & policy, which outline a lot of
                  goodies.
                  <br />
                  it’s our aim to always take of our participant
                </p>
              </div>
              <div className="flex flex-col items-center justify-center border-[1px] border-[#D434FE] rounded-[5px] p-14 mt-10 relative ">
                <p className=" min-[1100px]:w-[400px] self-start max-[1100px]:text-center ">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <div className="flex flex-col self-start gap-y-2 mt-8 font-semibold">
                  <p className="text-[#D434FE] ">Licensing Policy</p>
                  <p>Here are terms of our Standard License:</p>
                  <div className="flex font-thin  min-[1100px]:w-[400px] ">
                    <div>
                      <GreenCheck />
                    </div>
                    <p className="ml-4">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </div>
                  <div className="flex font-thin  min-[1100px]:w-[400px] ">
                    <div>
                      <GreenCheck />
                    </div>
                    <p className="ml-4">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </p>
                  </div>
                </div>
                <Button style={{ height: 53, marginTop: 20 }}>Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* screen eight- footer  */}
      <div className="w-full pt-20 pb-5 px-24 flex flex-col justify-between relative">
        <StarOneScreenOne className="absolute top-10 left-28 " />
        <StarTwoScreenOne className="absolute bottom-10 right-20 " />
        <div className="w-full flex max-[1100px]:flex-wrap max-[800px]:flex-col max-[1100px]: justify-between text-[13px]">
          <div className="flex flex-col ">
            <span className={`flex font-bold text-[22px] ${clash.className}`}>
              <p>get</p>
              <p className="text-[#D434FE] ">linked</p>
            </span>
            <p className="text-[12px] w-[400px] max-[800px]:w-[300px] ">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex items-center gap-x-2 mt-20 max-[800px]:mt-10 ">
              <p>Terms of Use</p>
              <div className="w-[2px] h-5 bg-[#D434FE] "></div>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 px-10 max-[800px]:px-0 max-[800px]:mt-10 ">
            <p className="text-[#D434FE] font-semibold ">Useful Links</p>
            <p>Overview</p>
            <p>Timeline</p>
            <p>FAQs</p>
            <p>Register</p>
            <div className="flex items-center gap-x-4">
              <p className="text-[#D434FE] font-semibold ">Follow us</p>
              <Instagram />
              <Twitter />
              <Facebook />
              <Linkedin />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 relative max-[800px]:mt-10 ">
            <StarTwoScreenOne className="absolute -left-20 top-2" />
            <p className="text-[#D434FE] font-semibold ">Contact Us</p>
            <div className="flex gap-x-3">
              <Phone />
              <p>+234 6707653444</p>
            </div>
            <div className="flex gap-x-3">
              <Location />
              <p>
                27,Alara Street
                <br /> Yaba 100012 <br /> Lagos State
              </p>
            </div>
          </div>
        </div>
        <p className="w-full text-center text-[12px] max-[800px]:py-14 ">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </div>
  )
}

const HorizLine = ({ className }: { className?: string }) => (
  <div
    className={`w-[200px] h-[4px] bg-[#D434FE] absolute ${className} `}
  ></div>
)
const VertLine = ({ className }: { className?: string }) => (
  <div
    className={`w-[4px] h-[100px] bg-[#D434FE] absolute ${className} `}
  ></div>
)

const SubTitle = ({
  white,
  purple,
  star,
}: {
  white: string
  purple: string
  star?: JSX.Element
}) => {
  return (
    <div
      className={`flex relative max-[1100px]:justify-center ${clash.className}`}
    >
      <span className="font-semibold text-[32px] leading-[34px] ">
        <p>{white}</p>
        <p className="text-[#D434FE] max-[1100px]:text-center">{purple}</p>
      </span>
      <div>{star}</div>
    </div>
  )
}

const judgingCriteria = [
  {
    label: 'Innovation and Creativity:',
    text: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.',
  },
  {
    label: 'Functionality:',
    text: ' Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.',
  },
  {
    label: 'Impact and Relevance:',
    text: ' Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.',
  },
  {
    label: 'Technical Complexity:',
    text: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.',
  },
  {
    label: 'Adherence to Hackathon Rules:',
    text: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.',
  },
]

const faqs = [
  'Can I work on a project I started before the hackathon?',
  'What happens if I need help during the hackathon?',
  `What happens if I don't have an idea for a project?`,
  'Can I join a team or do I have to come with one?',
  'What happens after the hackathon ends',
  'Can I work on a project I started before the hackathon?',
]

const timeline = [
  {
    eventTitle: 'Hackathon Announcement',
    subtitle:
      'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
    date: 'November 18, 2023',
  },
  {
    eventTitle: 'Teams Registration begins',
    subtitle:
      'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
    date: 'November 18, 2023',
  },
  {
    eventTitle: 'Teams Registration ends',
    subtitle: 'Interested Participants are no longer Allowed to register',
    date: 'November 18, 2023',
  },
  {
    eventTitle: 'Announcement of the accepted teams and ideas',
    subtitle:
      'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
    date: 'November 18, 2023',
  },
  {
    eventTitle: 'Getlinked Hackathon 1.0 Offically Begins',
    subtitle:
      'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    date: 'November 18, 2023',
  },
  {
    eventTitle: 'Demo day',
    subtitle:
      'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
    date: 'November 18, 2023',
  },
]
