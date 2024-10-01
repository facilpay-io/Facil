import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function GetApp() {
  const { t } = useTranslation();

  return (
    <>
      <div className="AppContainer font-inter relative flex h-[480px] w-[1408px] flex-col justify-between overflow-hidden text-center text-white lg:h-[980px]">
        <div>
          <h1 className="pt-16 text-2xl font-semibold lg:pt-40 lg:text-6xl">
            {t('getApp.title')}
          </h1>
          <p className="p-2 text-base">
            {t('getApp.subtitle2')}
          </p>
        </div>
        <div className="appbuttons inline-block flex items-center justify-center pt-20 lg:pt-20">
          {/* <button className="m-2 rounded-full bg-white p-3 font-medium text-black">
            <FontAwesomeIcon icon={faApple} className="mr-2" />
            {t('getApp.downloadNow')}
          </button>
          <button className="m-2 rounded-full bg-white p-3 font-medium text-black">
            <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
            {t('getApp.comingSoon')}
          </button> */}
        </div>
        <div className="position-relative">
          <div
            id="appbox"
            className="relative z-10 inline-flex items-center justify-center align-bottom"
          >
            <img
              className="phonepad flex w-[101px] lg:w-[341px]"
              alt=""
              src="/centerappl1.png"
            />
            <img
              className="flex w-[164px] lg:w-[400px]"
              alt=""
              src="/centerapp1.png"
            />
            <img
              className="phonepad flex w-[101px] lg:w-[341px] "
              alt=""
              src="/centerappr1.png"
            />
          </div>
          <img
            className="backimage absolute bottom-0  z-0"
            alt=""
            src="/vector1.svg"
            style={{ width: "30%", height: "auto" }}
          />
          <img
            className="backimageRight absolute bottom-0 right-0 z-0"
            alt=""
            src="/vector2.svg"
            style={{ width: "30%", height: "auto" }}
          />
        </div>
      </div>
    </>
  )
}