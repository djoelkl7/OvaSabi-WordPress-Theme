import React, { useState, useEffect } from 'react';
import { Download, Send, Github, Linkedin, Twitter, Dribbble, MapPin, Mail, Phone, Calendar, Briefcase } from 'lucide-react';
import { ProfileData, colorThemes } from '../data/profileData';

interface ProfileCardProps {
  profile: ProfileData;
  themeColor: string;
  onDownloadCV: () => void;
  onContactClick: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  themeColor,
  onDownloadCV,
  onContactClick,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = profile.roles[roleIndex % profile.roles.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, profile.roles]);

  return (
    <div className="w-full lg:w-[380px] shrink-0 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl dark:shadow-2xl transition-all duration-300">
      {/* Banner Cover Image with Gradient Scrim */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-800">
        <img
          src={profile.bannerUrl}
          alt="Banner cover"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
      </div>

      {/* Avatar Container with Overlap */}
      <div className="relative px-6 pb-6 text-center">
        <div className="relative -mt-20 mb-4 inline-block">
          <div className="w-32 h-32 rounded-2xl p-1 bg-white dark:bg-slate-900 shadow-xl overflow-hidden mx-auto border-2 border-slate-100 dark:border-slate-800">
            <img
              src={profile.avatarUrl}
              alt={profile.fullName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Active Status Badge Indicator */}
          <span
            className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500 shadow-sm"
            title="Available for projects"
          />
        </div>

        {/* Name and Animated Role */}
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {profile.fullName}
        </h1>
        <div className="h-6 mt-1 flex items-center justify-center">
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color: activeColor }}
          >
            {displayedText}
            <span className="inline-block w-0.5 h-4 ml-0.5 align-middle bg-current animate-pulse" />
          </span>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 dark:text-slate-400">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter Profile"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble Profile"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Dribbble className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <hr className="my-5 border-slate-100 dark:border-slate-800" />

        {/* Key Info Meta Table */}
        <div className="space-y-2.5 text-xs text-left">
          <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Age
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200">{profile.age}</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Residence
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200">{profile.residence}</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" /> Freelance
            </span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Email
            </span>
            <a href={`mailto:${profile.email}`} className="font-medium text-slate-800 dark:text-slate-200 hover:underline truncate max-w-[170px]">
              {profile.email}
            </a>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> Phone
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200">{profile.phone}</span>
          </div>
        </div>

        {/* Dual Action Buttons at Base of vCard */}
        <div className="grid grid-cols-2 gap-2 mt-6">
          <button
            onClick={onDownloadCV}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-xs text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD CV</span>
          </button>
          <button
            onClick={onContactClick}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-semibold text-xs text-white shadow-md transition-opacity hover:opacity-90"
            style={{ backgroundColor: activeColor }}
          >
            <Send className="w-3.5 h-3.5" />
            <span>CONTACT ME</span>
          </button>
        </div>
      </div>
    </div>
  );
};
