import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/app/i18nConfig";
import { useEffect, useState } from "react";

interface Language {
  name: string
  code: string
}

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const LANGUAGE_SELECTOR_ID = 'language-selector';
  const [languages, setLanguages] = useState<Language[]>([]);
  useEffect(() => {
    const setupLanguages = () => {
      const languages = Object.keys(i18n.services.resourceStore.data);
      setLanguages([...(languages.map((code) => {
        const nameGenerator = new Intl.DisplayNames(code, { type: 'language' });
        const displayName = nameGenerator.of(code) ?? `Language(${code.toUpperCase()})`
        return {
          name: displayName,
          code: code
        }
      }))]);
    };
    setupLanguages();
  }, []);
  const selectedLanguage = languages.find(language => language.code === i18n.language);


  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest('button');
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    }
    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick);
    }
  }, []);

  const handleLanguageChange = (e: string) => {
    const newLocale = e;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname);
    } else {
      if (currentPathname) {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }
    }

    router.refresh();
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center gap-1 w-full rounded-full border-inherit shadow-sm p-3 lg:p-3 bg-transparent text-sm lg:text-base font-medium focus:outline-none capitalize"
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
      >
        {selectedLanguage?.name}
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && <div
        className="origin-top-right absolute right-0 w-full mt-1 rounded-lg shadow-lg bg-white"
        role="menu"
        aria-orientation="horizontal"
        aria-labelledby={LANGUAGE_SELECTOR_ID}
      >
        <div className="py-1 flex flex-col items-stretch" role="none">
          {languages.map((language, index) => {
            return (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`${selectedLanguage?.code === language.code
                  ? "bg-gray-100 text-gray-900 font-semibold"
                  : "text-gray-700"
                  } block px-4 py-2 text-sm text-start items-center inline-flex hover:bg-gray-100 ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
                role="menuitem"
              >
                <span className="truncate capitalize">{language.name}</span>
              </button>
            );
          })}
        </div>
      </div>}
    </div>
    // <div>
    //   <select className="p-3 bg-transparent text-white outline-none border border-white rounded-full text-center"
    //     onChange={handleChange} value={currentLocale}>
    //     <option value='en'>English</option>
    //     <option value='es'>Español</option>
    //   </select>
    // </div>
  );
}