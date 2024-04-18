import { faDiscord, faFacebook, faInstagram, faLinkedin, faMedium, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const currentYear = new Date().getFullYear();


export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <>
      <div className="flex flex-wrap pb-16 border-b border-slate-200">
        {/* Create five columns */}
        <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          {/* Column content */}
          <img
            className="w-[30%]lg:w-[40%] h-auto "
            alt=""
            src="/footerlogo.svg"
          />
          <div className=" pt-4">
            <p>
              <img
                className="mb-1 mr-1 inline-flex h-auto w-[%5] lg:w-[10%] "
                alt=""
                src="/envelope.svg"
              />
              <a href="mailto:info@facilpay.io" target="_blank">
                info@facilpay.io
              </a>
            </p>
            <p className="pt-4">
              <img
                className="mb-1 mr-1 inline-flex h-auto w-[%5] lg:w-[10%]"
                alt=""
                src="/phoneicon.svg"
              />
              <a href="tel:7035947188">703.594.7188</a>
            </p>
            <p className="pt-4 text-blue-500">
              <a href="https://twitter.com/facil_pay" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              </a>
              <a
                href="https://www.instagram.com/facilpay.io?igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              </a>
              <a
                href="https://www.instagram.com/facilpay.io?igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              </a>
              <a
                href="https://www.linkedin.com/company/facilbank/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              </a>
              <a
                href="https://discord.com/invite/A63GHnPzpj"
                target="_blank"
              >
                <FontAwesomeIcon icon={faDiscord} className="mr-2" />
              </a>
              <a href="https://medium.com/@facilpay.io" target="_blank">
                <FontAwesomeIcon icon={faMedium} className="mr-2" />
              </a>
              <a href="https://t.me/+A5BpRNiCsVA4MmY5" target="_blank">
                <FontAwesomeIcon icon={faTelegram} className="mr-0" />
              </a>
            </p>
          </div>
        </div>
        <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          <div className=" p-0 pl-4 pr-4">
            <h1 className="pb-4 text-2xl font-semibold">{t('footer.links.title')}</h1>
            <p>
              <a href="/">{t('footer.links.home')}</a>
            </p>
            <p className="pt-2">
              <a href="/aboutus">{t('footer.links.aboutus')}</a>
            </p>
            <p className="pt-2">
              <a href="/services">{t('footer.links.services')}</a>
            </p>
          </div>
        </div>
        <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          <div className=" p-0 pl-4 pr-4">
            <h1 className="pb-4 text-2xl font-semibold">{t('footer.legal.title')}</h1>
            <p>
              <a href="https://www.facilpay.io/terms">
                {t('footer.legal.t&c')}
              </a>
            </p>
            <p className="pt-2">
              <a href="https://www.facilpay.io/privacy"
              >
                {t('footer.legal.privacyPolicy')}
              </a>
            </p>
            <p className="pt-2">
              <a href="https://www.facilpay.io/cookies"
              >
                {t('footer.legal.cookiePolicy')}
              </a></p>
            <p className="pt-2">
              <a href="https://www.facilpay.io/disclaimer">
                {t('footer.legal.disclaimer')}
              </a></p>
          </div>
        </div>
        <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          <div className=" p-0 pl-4 pr-4">
            <h1 className="pb-4 text-2xl font-semibold">{t('footer.product.title')}</h1>
            <p>{t('footer.product.tour')}</p>
            <p className="pt-2">{t('footer.product.liveChat')}</p>
            <p className="pt-2">{t('footer.product.reviews')}</p>
          </div>
        </div>
        <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          <div className=" p-0 pl-4 pr-4">
            <h1 className="pb-4 text-2xl font-semibold">{t('footer.newsletter.title')}</h1>
            <p>{t('footer.newsletter.updates')}</p>
          </div>
          <div className="flex items-center pt-4">
            <input
              type="text"
              className="newsInput flex-grow bg-slate-50 px-4 py-2 outline-none"
              placeholder={t('footer.newsletter.emailInput.placeholder')}
            />
            <button
              type="submit"
              className="newsButton text-md bg-blue-500 px-4 py-2 text-white"
            >
              {t('footer.newsletter.emailInput.submitText')}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 text-center text-xs text-slate-500">
        Ⓒ Copyright {currentYear} Facil Pay inc. {t('footer.allRightsReserved')}
      </div>
    </>
  )
}