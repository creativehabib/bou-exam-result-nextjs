import React from 'react'
import { Bell, Megaphone} from 'lucide-react';

const Notice = () => {
  return (
    <div>
        <div className="mb-8 overflow-hidden" data-v-2fd469dd="">
          <div className="bg-cyan-50 border-cyan-200 rounded-lg shadow-sm" data-v-2fd469dd="">
            <div className="py-2 px-4" data-v-2fd469dd="">
              <div className="flex items-center" data-v-2fd469dd="">
                <Bell size={24} className='text-cyan-500 mr-2 flex-shrink-0'/>
                <div className="overflow-hidden flex-grow" data-v-2fd469dd="">
                  <div className="animate-marquee-horizontal whitespace-nowrap" data-v-2fd469dd="">
                    <span className="inline-flex items-center mx-4 text-gray-700" data-v-2fd469dd="">
                      <Megaphone className='h-4 w-4 mr-1'/>
                      BOU exam result site is up!!!
                    </span>
                    <span className="inline-flex items-center mx-4 text-gray-700" data-v-2fd469dd="">
                      <Megaphone className='h-4 w-4 mr-1'/>
                      HSC exam-2024 result has been published!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Notice