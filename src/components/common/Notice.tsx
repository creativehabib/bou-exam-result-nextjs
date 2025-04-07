import React from 'react'
import { Bell, Megaphone} from 'lucide-react';

const Notice = () => {
  return (
    <div>
        <div className="mb-8 bg-cyan-50 border-cyan-200 shadow-sm border-y border-y-cyan-200 px-4 overflow-hidden mt-4" data-v-2fd469dd="">
          <div className="" data-v-2fd469dd="">
            <div className="py-1" data-v-2fd469dd="">
              <div className="flex items-center" data-v-2fd469dd="">
                {/* <Bell size={24} className='text-cyan-500 mr-2 flex-shrink-0'/> */}
                <div className="overflow-hidden flex-grow" data-v-2fd469dd="">
                  <div className="animate-marquee-horizontal whitespace-nowrap" data-v-2fd469dd="">
                  <span className="inline-flex items-center mx-4 text-gray-700" data-v-2fd469dd="">
                      <Megaphone className='h-4 w-4 mr-1'/>
                      বিএজিএড প্রোগ্রামের ২২২ টার্মের বিষয়ভিত্তিক ও চূড়ান্ত ফলাফল প্রকাশিত হয়েছে!
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