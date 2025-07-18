export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
        <div className="w-12 h-12 rounded-full border-4 border-akiba-pink-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  )
}
