import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import SEOHead from '../components/SEOHead';

export default function About() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SEOHead
        title="About Us | Sri Padmapriya Hospital, Adyar, Chennai"
        description="Established in 2001 in Indira Nagar, Adyar, Chennai, Sri Padmapriya Hospital provides dedicated outpatient specialist consultations, diagnostic services, and focused inpatient clinical care."
        canonicalPath="/about"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Sri Padmapriya Hospital Pvt. Ltd.",
          "description": "Established in 2001 in Indira Nagar, Adyar, Chennai, providing multispeciality clinical care.",
          "url": "https://www.padmapriyahospital.com/about",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.padmapriyahospital.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.padmapriyahospital.com/about"
              }
            ]
          }
        }}
      />
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          WELCOME TO PADMAPRIYA HOSPITAL, ADYAR
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          A Legacy of Care, A New Era of Excellence
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-3xl leading-relaxed">
          For over 25 years, Padmapriya Hospital has been a trusted name in healthcare, located in the prime heart of Adyar, Chennai. Situated at 1st Avenue, Indira Nagar, we have been serving generations of families with compassion and clinical excellence.
        </p>
      </div>

      {/* Hospital History & New Management */}
      <div className="bg-[#FAF9FB] rounded-md border border-[#E5E1E7] p-6 sm:p-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#155943]">
          Hospital History & New Commitment
        </span>
        <h2 className="text-xl font-bold text-[#24212A]">
          Over 25 Years of Dedicated Community Service
        </h2>
        <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed">
          Situated at 1st Avenue, Indira Nagar, Adyar, Chennai, Sri Padmapriya Hospital has been a healthcare pillar for more than two and a half decades. Now, under new management, we have renewed our commitment to providing comprehensive, affordable, and advanced medical care.
        </p>
        <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed">
          The hospital is led by <strong className="text-[#24212A]">Dr. Kanmani Ganesh</strong>, Senior Gynaecologist and <strong className="text-[#24212A]">Dr. Gokulakrishnan</strong>, Critical Care Consultant, bringing together expertise in women's health and critical care to serve our community better.
        </p>
      </div>

      {/* Leadership Row */}
      <div>
        <h2 className="text-lg font-bold text-[#24212A] mb-4">
          Hospital Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md border border-[#E5E1E7] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
              Clinical Leadership — Women's Health
            </span>
            <h3 className="text-base font-bold text-[#24212A]">
              Dr. Kanmani Ganesh
            </h3>
            <p className="text-xs font-semibold text-[#155943]">
              Senior Gynaecologist & Chief Consultant
            </p>
            <p className="text-xs text-[#69636E] leading-relaxed pt-1">
              Guiding comprehensive obstetrics, fertility care, advanced laparoscopic surgeries, and high-risk pregnancy management with over 24 years of teaching and surgical expertise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md border border-[#E5E1E7] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#155943]">
              Critical Care & Emergency Leadership
            </span>
            <h3 className="text-base font-bold text-[#24212A]">
              Dr. Gokulakrishnan
            </h3>
            <p className="text-xs font-semibold text-[#78266F]">
              Critical Care Consultant
            </p>
            <p className="text-xs text-[#69636E] leading-relaxed pt-1">
              Overseeing 24/7 ICU supervision, round-the-clock emergency casualty stabilization, and multidisciplinary critical care monitoring for medical and surgical inpatients.
            </p>
          </div>
        </div>
      </div>

      {/* 24/7 Emergency & Casualty Banner */}
      <div className="bg-rose-50 border border-rose-200 rounded-md p-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
            24/7 Emergency & Casualty Services
          </span>
        </div>
        <h3 className="text-lg font-bold text-rose-950">
          Round-the-Clock Emergency Care & Casualty Support
        </h3>
        <p className="text-xs sm:text-sm text-rose-900 leading-relaxed max-w-3xl">
          At Sri Padmapriya Hospital, our 24/7 Emergency & Casualty Services provide immediate triage, trauma response, emergency surgical care, and intensive care backup whenever you need it.
        </p>
        <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-bold">
          <span className="text-rose-950">24/7 Helpline: {hospitalInfo.contact.emergencyContact}</span>
          <span className="text-rose-800">Landlines: 044-24420091 / 044-24450878</span>
        </div>
      </div>

      {/* Vision & Mission Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-[#FAF9FB] p-6 rounded-md border border-[#E5E1E7] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#78266F]">
            Our Vision (நோக்கம்)
          </span>
          <p className="text-base font-bold text-[#24212A] leading-snug">
            "{hospitalInfo.vision.english}"
          </p>
          <p className="text-xs text-[#69636E] pt-2 border-t border-[#E5E1E7]">
            {hospitalInfo.vision.tamil}
          </p>
        </div>

        <div className="bg-[#FAF9FB] p-6 rounded-md border border-[#E5E1E7] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155943]">
            Our Mission (குறிக்கோள்)
          </span>
          <p className="text-base font-bold text-[#24212A] leading-snug">
            "{hospitalInfo.mission.english}"
          </p>
          <p className="text-xs text-[#69636E] pt-2 border-t border-[#E5E1E7]">
            {hospitalInfo.mission.tamil}
          </p>
        </div>

      </div>

      {/* Clinical Approach & Leadership */}
      <div className="bg-white rounded-md border border-[#E5E1E7] p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-[#24212A]">
          Clinical Principles & Patient Care
        </h2>
        <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed">
          The hospital operates with a patient-first focus. We ensure that every patient receives individual medical attention from qualified, certified medical specialists.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#24212A]">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>Consultant outpatient suites for dedicated clinical consultations</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>In-house diagnostic services including ultrasound and clinical lab</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>24/7 Operation theatre complex for general, gynaecological & emergency surgeries</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>Convenient central location in Indira Nagar, Adyar</span>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E5E1E7]">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#78266F] hover:underline"
          >
            <span>Meet Our Consulting Doctors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
