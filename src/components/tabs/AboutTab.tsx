import React, { useState } from 'react';
import { Code, Layout, Smartphone, Cloud, Check, ChevronLeft, ChevronRight, Award, FolderCheck, Users, Clock } from 'lucide-react';
import { ProfileData, sampleTestimonials, colorThemes } from '../../data/profileData';

interface AboutTabProps {
  profile: ProfileData;
  themeColor: string;
  onSelectPlan: (planName: string, price: string) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ profile, themeColor, onSelectPlan }) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      desc: 'Modern single-page applications and server-rendered portals built on React 19, Next.js, and TypeScript with rigorous accessibility.',
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'UI/UX Design Systems',
      desc: 'Comprehensive Figma design libraries, design token pipelines, and design consistency across multi-platform teams.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Applications',
      desc: 'Performant cross-platform mobile apps with fluid gestures, responsive offline-first data, and native feel.',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & API Integration',
      desc: 'Robust REST and GraphQL microservices, caching architectures, and continuous deployment workflows.',
    },
  ];

  const milestones = [
    { icon: <Clock className="w-5 h-5" />, value: '10+', label: 'Years Experience' },
    { icon: <FolderCheck className="w-5 h-5" />, value: '140+', label: 'Completed Projects' },
    { icon: <Users className="w-5 h-5" />, value: '42+', label: 'Satisfied Clients' },
    { icon: <Award className="w-5 h-5" />, value: '16', label: 'Honors & Awards' },
  ];

  const pricingPlans = [
    {
      name: 'Starter Sprint',
      price: '$1,250',
      period: 'per milestone',
      features: [
        'Responsive Web UI Design',
        'Frontend Development (React/Tailwind)',
        'Up to 3 Core Pages / Views',
        'Basic SEO & Accessibility Audit',
        '2 Weeks Dedicated Turnaround',
      ],
      popular: false,
    },
    {
      name: 'Full Product MVP',
      price: '$3,800',
      period: 'per project',
      features: [
        'Complete UX Research & Wireframes',
        'Full-Stack Web Application',
        'Design System & Component Library',
        'Database & Authentication Setup',
        'WCAG AA Compliance',
        '4 Weeks Dedicated Support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Scale',
      price: '$7,500+',
      period: 'custom scope',
      features: [
        'Multi-Platform Web & Mobile App',
        'High-Performance Real-Time Microservices',
        'Advanced Analytics & Payment Flows',
        'Team Architecture Mentorship',
        'Dedicated SLA & Priority 24/7',
      ],
      popular: false,
    },
  ];

  const clients = ['STRIPE', 'LINEAR', 'VERCEL', 'SUPABASE', 'FIGMA'];

  return (
    <div className="space-y-12">
      {/* 1. About Me Narrative */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.bioLong}
        </p>
      </div>

      {/* 2. My Services */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Services
          </h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((svc, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-105"
                style={{ backgroundColor: `${activeColor}15`, color: activeColor }}
              >
                {svc.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">
                {svc.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Milestones / Fun Facts */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Milestones & Impact
          </h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-center"
            >
              <div
                className="w-9 h-9 rounded-lg mx-auto mb-2 flex items-center justify-center"
                style={{ backgroundColor: `${activeColor}15`, color: activeColor }}
              >
                {m.icon}
              </div>
              <div className="text-2xl font-black font-heading text-slate-900 dark:text-white">
                {m.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Pricing Plans */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pricing Plans
          </h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl border transition-all ${
                plan.popular
                  ? 'border-2 shadow-lg bg-white dark:bg-slate-800/80'
                  : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
              style={plan.popular ? { borderColor: activeColor } : {}}
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-sm"
                  style={{ backgroundColor: activeColor }}
                >
                  Most Popular
                </span>
              )}
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl font-black font-heading text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  / {plan.period}
                </span>
              </div>
              <hr className="my-4 border-slate-100 dark:border-slate-800" />
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <Check
                      className="w-3.5 h-3.5 mt-0.5 shrink-0"
                      style={{ color: activeColor }}
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectPlan(plan.name, plan.price)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  plan.popular
                    ? 'text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                style={plan.popular ? { backgroundColor: activeColor } : {}}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Testimonials */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3 flex-1">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Testimonials
            </h2>
            <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                setTestimonialIdx((prev) =>
                  prev === 0 ? sampleTestimonials.length - 1 : prev - 1
                )
              }
              aria-label="Previous testimonial"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setTestimonialIdx((prev) =>
                  prev === sampleTestimonials.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Next testimonial"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 relative">
          <p className="text-sm italic leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
            "{sampleTestimonials[testimonialIdx].quote}"
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white"
              style={{ backgroundColor: activeColor }}
            >
              {sampleTestimonials[testimonialIdx].avatar}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {sampleTestimonials[testimonialIdx].name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {sampleTestimonials[testimonialIdx].role}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Clients & Trusted Partners */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Trusted By Teams At
          </h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="h-14 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/30 flex items-center justify-center font-heading font-black tracking-widest text-xs text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
