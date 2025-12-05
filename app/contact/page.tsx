import { Navigation } from '@/components/molecules/Navigation';
import { ContactForm } from '@/components/organisms/ContactForm';
import { contactInfo } from '@/data/contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative min-h-screen">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              Send me a message and I&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 sm:p-12 mb-12 animate-slide-up">
            <ContactForm />
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-600 mb-6 text-lg">
              Or reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group px-6 py-3 glass-effect rounded-full text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                {contactInfo.email}
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="group px-6 py-3 glass-effect rounded-full text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                {contactInfo.phone}
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 glass-effect rounded-full text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                LinkedIn
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 glass-effect rounded-full text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Zaman Ishtiyaq. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

