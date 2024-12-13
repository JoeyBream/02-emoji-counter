import React from 'react';
import { Github } from 'lucide-react';
import EmojiCounter from './components/EmojiCounter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-indigo-600">EmojiCount</div>
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20 sm:py-32">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Count with Joy 
              <span className="text-indigo-600">✨</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Experience the simple pleasure of counting with delightful animations. 
              Each click brings a burst of celebration!
            </p>
            
            <div className="flex justify-center mb-16">
              <EmojiCounter />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Optimized for performance and smooth animations</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold mb-2">Beautiful Design</h3>
                <p className="text-gray-600">Clean and modern interface that's a joy to use</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl mb-4">🎉</div>
                <h3 className="text-lg font-semibold mb-2">Fun Interactions</h3>
                <p className="text-gray-600">Delightful animations with every interaction</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            Made with ❤️ using React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;