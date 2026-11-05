import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';
import { ProfileData, colorThemes } from '../../data/profileData';

interface ContactTabProps {
  profile: ProfileData;
  themeColor: string;
}

export const ContactTab: React.FC<ContactTabProps> = ({ profile, themeColor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Have an upcoming project, design collaboration, or technical inquiry? Let's connect.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/30 flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${activeColor}15`, color: activeColor }}
          >
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Direct Email</div>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-bold text-slate-900 dark:text-white hover:underline mt-0.5 block break-all"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/30 flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${activeColor}15`, color: activeColor }}
          >
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Phone Number</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
              {profile.phone}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/30 flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${activeColor}15`, color: activeColor }}
          >
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Location</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
              {profile.location}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/30 flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${activeColor}15`, color: activeColor }}
          >
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Current Timezone</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
              Pacific Time (PT) · UTC-8
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Location Map Visual Split */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form Column (3 cols) */}
        <div className="lg:col-span-3 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" style={{ color: activeColor }} />
            <span>Send a Message</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Typically responds within 24 business hours.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                Thank you for reaching out. Ryan has received your inquiry and will follow up shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold underline text-emerald-800 dark:text-emerald-300 pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs text-rose-600 dark:text-rose-400">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Consultation / Q2 Development"
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me a bit about your project goals, timelines, and scope..."
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white shadow-md flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: activeColor }}
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Studio Location Map Visual (2 cols) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-2">
              <Globe className="w-4 h-4" style={{ color: activeColor }} />
              <span>Studio Headquarters</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Located in the heart of San Francisco’s tech and design district. Available for local in-person design sessions or worldwide remote engagements.
            </p>

            {/* Stylized Visual Map Representation */}
            <div className="relative h-40 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 flex items-center justify-center">
              {/* Subtle grid lines mimicking map */}
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <div className="relative text-center p-4">
                <div
                  className="w-10 h-10 rounded-full mx-auto flex items-center justify-center text-white shadow-lg animate-bounce"
                  style={{ backgroundColor: activeColor }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white mt-2">
                  San Francisco, CA
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  37.7749° N, 122.4194° W
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Status:</span>
            <span className="font-semibold text-emerald-500">Available for Contract</span>
          </div>
        </div>
      </div>
    </div>
  );
};
