import React from 'react'

const Footer = () => {
  return (
      <footer className="border-t border-slate-200 bg-white/75 backdrop-blur-sm mt-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <p className="text-sm text-slate-600">© Bangladesh Open University.</p>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-slate-600"> Development &amp; maintenance by: 
                <a className="text-sm text-blue-800 font-bold hover:text-blue-700 hover:underline" href="https://facebook.com/creativehabibs" target="_blank" title="Habibur Rahaman"> Habibur Rahaman</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer