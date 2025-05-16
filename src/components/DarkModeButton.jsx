export default function DarkModeButton({ isDark, setIsDark }) {
  return (
    <button
      onClick={setIsDark}
      className='w-14 h-7 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-600 transition-colors'
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
