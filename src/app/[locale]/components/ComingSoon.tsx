import Link from "next/link"
import Image from "next/image"
import { faXTwitter, faDiscord, faMedium, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fade } from "react-awesome-reveal"

export default function ComingSoon() {
    const socials = [
        {
            name: "X",
            link: "https://x.com/facil_pay",
            icon: faXTwitter
        },
        {
            name: "Telegram",
            link: "https://t.me/facil_pay",
            icon: faTelegram
        },
        {
            name: "Medium",
            link: "https://medium.com/@facilpay.io",
            icon: faMedium
        },
        {
            name: "Discord",
            link: "https://discord.com/invite/A63GHnPzpj",
            icon: faDiscord
        }
    ]

    const Info = ({ className }: { className?: string }) => {
        return (
            <div className={className}>
                <div className="flex flex-col items-center text-center mx-4 gap-10">
                    <div className="flex flex-col items-center text-center gap-3">
                        <h4 className="text-sm xl:text-base text-[#A3A3A3]">Our new site is</h4>
                        <h3 className="text-6xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-semibold uppercase sm:tracking-wider bg-[linear-gradient(357.82deg,_#B8B8B8_1.46%,_#FFFFFF_80.78%)] bg-clip-text text-transparent">Coming<br />Soon</h3>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3 md:gap-5">
                        <h5 className="text-sm xl:text-base text-[#A3A3A3]">Stay Connected:</h5>
                        <div className="grid grid-cols-4 justify-center items-center gap-3 md:gap-5">
                            {
                                socials.map((social, index) => {
                                    return (
                                        <Link key={index} href={social.link} target="_blank" className="w-12 h-12 flex justify-center items-center p-1 md:p-3 rounded-xl bg-gray-800 hover:bg-grey-400 md:hover:p-2 transition-all duration-300">
                                            <FontAwesomeIcon className=" w-4 h-4 md:w-8 md:h-8 text-white text-lg" icon={social.icon} />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#080808] h-screen" >
            <div className="fixed z-[1] pl-4 pt-6 sm:pl-4 xl:pl-12 xl:pt-12 opacity-80">
                <Image src={'/logov1.png'} alt="Description" width={86} height={64} />
            </div>
            <div className="relative h-full">
                {/* Mobile Background */}
                <div className="md:hidden fixed min-w-[150%] left-1/2 -translate-x-[50%] overflow-clip inset-0 blur-[30px] bg-[radial-gradient(50.5%_30.5%_at_50%_76.5%,_#FFFFFF_4.23%,_#CEE5E9_12.07%,_#9CD3E7_38.94%,_#669ED4_50%,_rgba(22,76,158,0.8)_60.1%,_#0B1B33_77.4%,_#080808_100%)] opacity-[88%]"></div>
                <div className="md:hidden fixed min-w-[150%] left-1/2 -translate-x-[50%] overflow-clip inset-0 blur-[30px] bg-[radial-gradient(50.5%_30.5%_at_50%_76.5%,_#FFFFFF_4.23%,_#CEE5E9_12.07%,_#50D0FF_38.94%,_#1E80DE_50%,_#003D99_60.1%,_#0A192E_77.4%,_rgba(8,8,8,0)_100%)] opacity-[88%]"></div>

                {/* Tablet Background */}
                <div className="hidden md:block lg:hidden fixed min-w-[150%] left-1/2 -translate-x-[50%] overflow-clip inset-0 blur-[30px] bg-[radial-gradient(50.5%_30.5%_at_50%_60.5%,_#FFFFFF_4.23%,_#CEE5E9_12.07%,_#9CD3E7_38.94%,_#669ED4_50%,_rgba(22,76,158,0.8)_60.1%,_#0B1B33_77.4%,_#080808_100%)] opacity-[88%]"></div>
                <div className="hidden md:block lg:hidden fixed min-w-[150%] left-1/2 -translate-x-[50%] overflow-clip inset-0 blur-[30px] bg-[radial-gradient(50.5%_30.5%_at_50%_60.5%,_#FFFFFF_4.23%,_#CEE5E9_12.07%,_#50D0FF_38.94%,_#1E80DE_50%,_#003D99_60.1%,_#0A192E_77.4%,_rgba(8,8,8,0)_100%)] opacity-[88%]"></div>


                {/* Desktop Backgrounds */}
                <div className="hidden lg:block fixed min-w-[120%] left-1/2 -translate-x-[50%] inset-0 blur-[80px] bg-[radial-gradient(45.5%_53.5%_at_50%_43.5%,_#FFFFFF_8.23%,_#CEE5E9_15.07%,_#9CD3E7_42.94%,_#669ED4_50%,_rgba(22,76,158,0.8)_60.1%,_#0B1B33_77.4%,_#080808_100%)] opacity-[88%]"></div>
                <div className="hidden lg:block fixed min-w-[120%] left-1/2 -translate-x-[50%] inset-0 blur-[80px] bg-[radial-gradient(45.5%_53.5%_at_50%_43.5%,_#FFFFFF_8.23%,_#CEE5E9_15.07%,_#50D0FF_42.94%,_#1E80DE_50%,_#003D99_60.1%,_#0A192E_77.4%,_rgba(8,8,8,0)_100%)] opacity-[88%]"></div>


                <Image src="/coming_soon/background.png" width={500} height={600} alt="phone_banner" className="absolute inset-0 w-full h-full object-cover opacity-[5%] md:opacity-[3%]" />


                <div className="flex flex-col md:gap-12 h-full ">
                    <Info className="lg:hidden pt-32 sm:pt-24 md:pt-12 z-[1]" />
                    <div className="relative h-full w-full flex flex-col justify-end">

                        <Fade triggerOnce direction="up">

                            <div className="relative mx-auto w-full max-w-screen-[600px] md:max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg">
                                <div className="absolute left-1/2 -translate-x-[50%] h-[180px] -top-[15px] max-w-[300px]  md:max-w-screen-xs lg:max-w-screen-sm w-full mix-blend-hard-light opacity-[80%] rounded-[50%/25%]">
                                    <div className="absolute inset-0 w-[90%] left-1/2 -translate-x-[50%] h-full bg-[radial-gradient(53.5%_53.5%_at_50%_46.5%,_#49BFE5_13.94%,_rgba(73,191,229,0)_97.12%)] rounded-[50%/25%] blur-[50px]"></div>
                                    <div className="absolute inset-0 h-full w-[90%] left-1/2 -translate-x-[50%] bg-[radial-gradient(53.5%_53.5%_at_50%_46.5%,_#005CDC_13.94%,_rgba(73,191,229,0)_97.12%)] rounded-[50%/25%]  blur-[50px]"></div>
                                    <div className="absolute top-[12px] bottom-[8px] h-[70%] w-[87%] left-1/2 -translate-x-[50%] bg-[radial-gradient(53.5%_53.5%_at_50%_46.5%,_#FFFFFF_1.44%,_rgba(255,255,255,0)_97.12%)] rounded-[50%/25%] blur-[50px]"></div>
                                    <div className="absolute top-[12px] bottom-[8px] h-[60%] w-[87%] left-1/2 -translate-x-[50%] bg-[radial-gradient(53.5%_53.5%_at_50%_46.5%,_#FFFFFF_1.44%,_rgba(255,255,255,0)_97.12%)] rounded-[50%/25%] blur-[50px]"></div>
                                    <div className="absolute top-[12px] bottom-[8px] h-[60%] w-[51%] left-1/2 -translate-x-[50%]  bg-[radial-gradient(53.5%_53.5%_at_50%_46.5%,_#FFFFFF_1.44%,_rgba(255,255,255,0)_97.12%)]  rounded-[50%/25%] blur-[50px]"></div>

                                    <div className="absolute bg-white top-[14%] w-full h-[46%] mix-blend-hard-light rounded-[50%/25%] blur-[20px]"></div>
                                    <div className="absolute bg-white top-[12%] w-[74%] h-[54%] left-1/2 -translate-x-[50%] rounded-[50%/25%] mix-blend-hard-light blur-[50px]"></div>
                                    <div className="absolute bg-white top-[10%] w-[79%] h-[27%] left-1/2 -translate-x-[50%] rounded-[50%/25%] mix-blend-hard-light blur-[20px]"></div>
                                </div>

                                <Image src="/coming_soon/xrp.png" width={500} height={600} alt="phone_banner" className="hidden lg:block absolute w-[170.6891px] h-[200.3442px] top-[16px] left-[12px] lg:-left-[64px] lg:top-0 object-cover blur-[3px] opacity-[70%] animate-float-delayed" />

                                <Image src="/coming_soon/usdc.png" width={500} height={600} alt="phone_banner" className="hidden lg:block absolute w-[170.6891px] h-[200.3442px] top-[30%] lg:-right-[100px] xl:-right-[200px] object-cover opacity-[70%] animate-float-delayed" />

                                <div className="absolute inset-0 md:-left-[24px] md:-right-[24px] -top-[54px] h-[90%]">

                                    <div className="absolute w-[150.6891px] h-[160.3442px] top-[89px] -left-[24px]  opacity-80 mix-blend-luminosity blur-[3.6149508953px]"></div>

                                    <div className="absolute mix-blend-overlay top-[50%] -translate-y-[50%] left-1/2 -translate-x-[50%] w-[43%] h-[68%] opacity-[40%] bg-[radial-gradient(50%_50%_at_50%_50%,_#FFFFFF_0%,_rgba(217,221,237,0)_100%)] blur-[50px]"></div>

                                    <div className="absolute bg-[#D9DDED]/20 mix-blend-overlay top-[50%] -translate-y-[50%] left-1/2 -translate-x-[50%] w-[43%] h-[68%] blur-[50px]"></div>

                                    <div className="absolute bg-[#D9DDED]/5- mix-blend-overlay top-0 left-1/2 -translate-x-[60%] w-[29%] h-[32%]  blur-[50px]"></div>

                                    <div className="absolute bg-[#D9DDED]/50 mix-blend-overlay bottom-0 right-0 w-[49%] h-[74%]  blur-[50px]"></div>

                                    <div className="absolute bg-[#D9DDED]/50 mix-blend-overlay bottom-0 left-0 w-[49%] h-[74%] blur-[50px]"></div>

                                </div>

                                {/* Phone */}
                                <div className="relative px-[32px] md:px-0 inset-0 w-full h-full">
                                    <Image src="/coming_soon/iPhone.png" width={500} height={600} alt="phone_banner" className="block min-w-full w-full max-w-full h-full object-cover mix-blend-luminosity" />

                                    <div className="absolute bottom-0 pt-[8px] sm:pt-[12px] md:pt-[24px] lg:pt-[28px] 2xl:pt-[38px] left-[40px] right-[40px] sm:left-[48px] sm:right-[48px] md:left-[29px] md:right-[30px] lg:left-[32px] lg:right-[32px] 2xl:left-[47px] 2xl:right-[48px] h-full">
                                        <div className="hidden lg:block h-full rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[80px] lg:rounded-t-[110px] 2xl:rounded-t-[136px] 3xl:rounded-t-[180px] bg-[linear-gradient(180deg,_#080A0D_-5.85%,_#182E50_30.58%,_#080808_60.46%)] ">
                                            <div className="pt-[20px] h-full xl:pt-[40px] 2xl:pt-[80px]">
                                                <Info className="w-full" />
                                            </div>
                                        </div>
                                        <div className="lg:hidden relative h-full w-full">
                                            <Image src="/coming_soon/app_screenshot.png" alt="app_screenshot" width={300} height={600} className="w-full h-full object-cover object-[0%_0%]  rounded-t-[32px] sm:rounded-t-[48px]" />
                                            <div className="absolute h-[100%] w-full -bottom-[24px] bg-[linear-gradient(360deg,_#080808_20.71%,_rgba(8,8,8,0)_80%)]">

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* End Phone */}

                                <Image src="/coming_soon/eth.png" width={500} height={600} alt="phone_banner" className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[150px] xl:w-[170.6891px] xl:h-[200.3442px] bottom-[20%] sm:bottom-0 md:top-[55%] xl:top-[60%] left-[0px] sm:left-[12px] md:-left-[40px] xl:-left-[200px] object-cover opacity-[70%] animate-float" />

                            </div>
                        </Fade>


                        <div className="absolute h-[20%] md:h-[24%] w-full -bottom-[24px] bg-[linear-gradient(360deg,_#080808_33.71%,_rgba(8,8,8,0)_100%)]">

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}