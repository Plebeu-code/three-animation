/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react'
import icon_bayz from "../../images/icon_bayz.png"


export default function HeroPage() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-center py-6">
                <div className="flex justify-start">
                  <a href="#" >
                    <img className="w-auto h-10" src={icon_bayz} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>

      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className=" px-8">
            <h1 className=" tracking-tight font-extrabold text-gray-900 text-5xl">
              <span className="block">Using three JS</span> <span className="block text-indigo-600">dev PLEBEU</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto  text-gray-500 text-xl">
            testing testing testingtestingtesting testing testing testing testing testing testing testing v testing v v testing v testing testingtestingtestingtesting.
            </p>
            <div className="mt-10 flex justify-center">
              <div className=" rounded-md shadow mt-0 ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  started
                </a>
              </div>
              <div className=" rounded-md shadow mt-0 ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-72">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://wallpaperaccess.com/full/6329159.png"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
