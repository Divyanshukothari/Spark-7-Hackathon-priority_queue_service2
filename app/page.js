import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-900 bg-opacity-95 relative overflow-hidden">
     
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzFhMWExYSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzMDMwMzAiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-10"></div>

      <div className="max-w-4xl mx-auto z-10 bg-gray-800 bg-opacity-80 p-12 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-500 hover:bg-opacity-90">
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          Welcome to Our Revolutionary Project
        </h1>
        <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
          We're reimagining the way you interact with technology. Our project combines cutting-edge AI with intuitive design to create an experience that's truly transformative.
        </p>
        <Button asChild className="text-lg px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <Link href="/client_fetch">
            <span className="flex items-center">
              Enter your Address
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </Button>
      </div>
      {/* Floating elements for visual interest */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  )
}