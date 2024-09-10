'use client'

import { useState, useEffect, useRef } from 'react'

export default function DarkPDFViewer() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const viewerRef = useRef(null) // Create a reference for the main container

  useEffect(() => {
    setLoading(true)
    setError(null)

    // Simulate loading delay (optional)
    const timer = setTimeout(() => {
      setLoading(false)
      enterFullScreen() // Trigger fullscreen when loading finishes
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Function to enter full screen
  const enterFullScreen = () => {
    const element = viewerRef.current // Get the main container reference
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen()
    }
  }

  return (
    <div
      ref={viewerRef} // Attach the ref to the main container
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl p-6 w-full max-w-4xl z-10">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-100">PDF Viewer</h1>

        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100"></div>
          </div>
        )}

        {!loading && (
          <iframe
            src="https://gateway.pinata.cloud/ipfs/QmSXkKWF9HaejJWQ5M1tPbz985BnuMNYjKHQpwLi6XMcve"
            title="PDF Document"
            className="rounded-lg shadow-lg"
            style={{ width: '100%', height: '100vh' }}
            frameBorder="0"
            onLoad={() => setLoading(false)}
            onError={() => setError('Failed to load PDF.')}
          />
        )}

        {error && (
          <div className="text-red-300 text-center bg-red-900 bg-opacity-50 p-4 rounded-lg mt-4">{error}</div>
        )}
      </div>
    </div>
  )
}


