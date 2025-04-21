import { faDiscord, faFacebook, faInstagram, faLinkedin, faMedium, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useState, FormEvent } from 'react';
// import { supabase } from '../../../supabaseClient';
import { toast, ToastContainer } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation('footer');
  // const [email, setEmail] = useState<string>('');

  // const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     // Insert the email into the 'newsletter_emails' table
  //     const { error } = await supabase
  //       .from('newsletter_emails')
  //       .insert([{ email }]);

  //     if (error) {
  //       // Check if the error is related to unique constraint violation
  //       if (error.message.includes("duplicate key")) {
  //         toast.warn(t('This email is already subscribed!'), {
  //           position: "bottom-right",
  //           autoClose: 3000,
  //         });
  //       } else {
  //         throw error;
  //       }
  //     } else {
  //       // Success message on successful submission
  //       toast.success(t('Thank you for subscribing!'), {
  //         position: "top-right",
  //         autoClose: 3000,
  //       });
  //       setEmail(''); // Clear the input field after submission
  //     }
  //   } catch (error: any) {
  //     toast.error(t('Sorry, something went wrong. Please try again!'), {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });
  //     console.error("Error adding email: ", error.message);
  //   }
  // };

  return (
    <>
     <ToastContainer />
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
              <a href="mailto:ai@facilpay.io" target="_blank">
                ai@facilpay.io
              </a>
            </p>
            <p className="pt-4">
              <img
                className="mb-1 mr-1 inline-flex h-auto w-[%5] lg:w-[10%]"
                alt=""
                src="/phoneicon.svg"
              />
              <a href="tel:2898046855">289.804.6855</a>
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
            <p className="text-sm hover:underline">
              <a href="/">{t('footer.links.home')}</a>
            </p>
            <p className="pt-2 text-sm hover:underline">
              <a href="/aboutus">{t('footer.links.aboutus')}</a>
            </p>
            <p className="pt-2 text-sm hover:underline">
              <a href="/services">{t('footer.links.services')}</a>
            </p>
          </div>
        </div>
        <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          <div className=" p-0 pl-4 pr-4">
            <h1 className="pb-4 text-2xl font-semibold">{t('footer.legal.title')}</h1>
            <p className="whitespace-nowrap text-sm hover:underline">
              <a href="https://www.facilpay.io/terms">
                {t('footer.legal.t&c')}
              </a>
            </p>
            <p className="pt-2 text-sm hover:underline">
              <a href="https://www.facilpay.io/privacy"
              >
                {t('footer.legal.privacyPolicy')}
              </a>
            </p>
            <p className="pt-2 text-sm hover:underline">
              <a href="https://www.facilpay.io/cookies"
              >
                {t('footer.legal.cookiePolicy')}
              </a></p>
            <p className="pt-2 text-sm hover:underline">
              <a href="https://www.facilpay.io/disclaimer">
                {t('footer.legal.disclaimer')}
              </a></p>
          </div>
        </div>
        {/* <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          <div className=" p-0 pl-4 pr-4">
            <h1 className="pb-4 text-2xl font-semibold">{t('footer.product.title')}</h1>
            <p>{t('footer.product.tour')}</p>
            <p className="pt-2">{t('footer.product.liveChat')}</p>
            <p className="pt-2">{t('footer.product.reviews')}</p>
          </div>
        </div> */}
        <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-2/5">
          <div className=" p-0 pl-4 pr-4">
            <h1 className="pb-4 text-2xl font-semibold">{t('footer.newsletter.title')}</h1>
            <p>{t('footer.newsletter.updates')}</p> 
          </div>

          {/* Newsletter form */}
{/*         <form onSubmit={handleEmailSubmit} className="flex items-center pt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsInput flex-grow bg-slate-50 px-4 py-2 outline-none border-blue-50 border"
            placeholder={t('footer.newsletter.emailInput.placeholder')}
            required
          />
          <button
            type="submit"
            className="newsButton text-md bg-blue-500 px-4 py-2 text-white"
          >
            {t('footer.newsletter.emailInput.submitText')}
          </button>
        </form> */}
        </div>
      </div>

      <div className="pt-8 pb-4 text-center text-xs text-slate-500">
        Ⓒ Copyright {currentYear} Facil Pay inc. {t('footer.allRightsReserved')}
      </div>
    </>
  )
}
