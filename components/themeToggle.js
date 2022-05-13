
import { useDarkMode } from '../hooks/useDarkMode'
// import { useDarkMode } from '@/hooks/useDarkMode'
import { useAnalyticsEvent } from '../hooks/useAnalytics'

export function ThemeToggle({ className }) {
  const [isDark, setIsDark] = useDarkMode()
  const { trackCustomEvent } = useAnalyticsEvent()


  return (
 
    <>
       <button
        aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
        title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
        onClick={() => {
          setIsDark(!isDark)
          trackCustomEvent({ eventName: 'toggle-theme' })
        }}
        className={`${className} h-full flex justify-center items-center gap-2 group`}
      >
           <div className="wrap form-check-input appearance-none w-[30px]  rounded-full float-left h-[17px] align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm relative ">
            <input className='opacity-0 w-0 h-0' type="checkbox" />
            <span className={`absolute h-[13px] w-[13px] top-[2px]  ${isDark ? 'translate-x-[13px]' :  ''} left-[2px] rounded-full bg-custom-primary transition-transform`}></span>
          </div>
          <span className='font-gaegu uppercase text-custom-secondary group-hover:text-custom-accent'>Toggle {isDark ? <span>light</span> :  <span>dark</span>} mode</span>
      </button>


    
    </>

    
  )
}