import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import { clinicalSpecialties } from '../data/hospitalData';
import { SpecialtyIcon } from '../components/SpecialtyIcon';
import SEOHead from '../components/SEOHead';

export default function Specialities() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <SEOHead
        title="Medical Specialties & Clinical Departments in Adyar | Padmapriya Hospital"
        description="Comprehensive healthcare specialties in Adyar, Chennai: Obstetrics & Gynaecology, General & Laparoscopic Surgery, Orthopaedics, Neurology, ENT, Dermatology, and Pulmonology."
        canonicalPath="/specialities"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Clinical Specialties & Departments | Sri Padmapriya Hospital",
          "description": "Comprehensive healthcare departments in Adyar, Chennai supported by qualified consultant surgeons.",
          "url": "https://www.padmapriyahospital.com/specialities",
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
                "name": "Specialities",
                "item": "https://www.padmapriyahospital.com/specialities"
              }
            ]
          }
        }}
      />
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          CLINICAL SERVICES & SPECIALTIES
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          Specialties & Advanced Medical Care
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-3xl leading-relaxed">
          Comprehensive healthcare departments supported by qualified consultant surgeons, modern outpatient suites, 24/7 ICU monitoring, and advanced surgical technology in Adyar, Chennai.
        </p>
      </div>

      {/* Dedicated 24/7 Emergency & Casualty Section */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-950 text-white rounded-lg p-6 sm:p-8 shadow-sm border border-rose-700/50 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
            Dedicated Critical Care & Emergency Unit
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
          24/7 Emergency & Casualty Services
        </h2>
        <p className="text-xs sm:text-sm text-rose-100 leading-relaxed max-w-3xl">
          At Sri Padmapriya Hospital, our round-the-clock emergency casualty and surgical teams provide immediate trauma care, emergency triage, acute medical stabilization, and intensive care coverage 24 hours a day, 7 days a week.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
          <a
            href="tel:6381907621"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white hover:bg-rose-50 text-rose-900 transition-colors shadow-xs"
          >
            <span>Emergency Helpline: +91 63819 07621</span>
          </a>
          <span className="text-rose-200">Hospital Landlines: 044-24420091 / 044-24450878</span>
        </div>
      </div>

      {/* Core Specialties Highlight Overview */}
      <div className="bg-[#FAF9FB] rounded-lg border border-[#E5E1E7] p-6 space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#155943]">
          Key Centres of Clinical Excellence
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-[#24212A]">
          <div className="p-3 bg-white rounded border border-[#E5E1E7] space-y-1">
            <h3 className="font-bold text-[#78266F]">Women's Health, Fertility & Obstetrics</h3>
            <p className="text-[#69636E]">A centre of excellence for safe deliveries, high-risk pregnancy care, fertility treatments and complete gynaecological services.</p>
          </div>
          <div className="p-3 bg-white rounded border border-[#E5E1E7] space-y-1">
            <h3 className="font-bold text-[#155943]">Advanced Surgeries</h3>
            <p className="text-[#69636E]">Major surgeries, including open and laparoscopic (key-hole) surgeries, with modern technology and expert care.</p>
          </div>
          <div className="p-3 bg-white rounded border border-[#E5E1E7] space-y-1">
            <h3 className="font-bold text-[#78266F]">Multispecialty & Critical Care</h3>
            <p className="text-[#69636E]">Admission and management of general medical and surgical patients with round-the-clock monitoring under Dr. Gokulakrishnan.</p>
          </div>
          <div className="p-3 bg-white rounded border border-[#E5E1E7] space-y-1">
            <h3 className="font-bold text-[#155943]">Oncology Services</h3>
            <p className="text-[#69636E]">Dedicated oncologist available for screening, early diagnosis, and surgical cancer treatment.</p>
          </div>
          <div className="p-3 bg-white rounded border border-[#E5E1E7] space-y-1">
            <h3 className="font-bold text-[#78266F]">Orthopaedics</h3>
            <p className="text-[#69636E]">Dedicated Orthopaedic Surgeon for trauma, fractures, joint care, and bone health.</p>
          </div>
          <div className="p-3 bg-white rounded border border-[#E5E1E7] space-y-1">
            <h3 className="font-bold text-[#155943]">Medical Gastroenterology</h3>
            <p className="text-[#69636E]">Comprehensive digestive health, liver care, capsule endoscopy, ERCP, and therapeutic endoscopic procedures.</p>
          </div>
        </div>
      </div>

      {/* Specialties Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinicalSpecialties.map((spec) => (
          <div
            key={spec.id}
            className="bg-white rounded-md border border-[#E5E1E7] p-6 space-y-4 hover:border-[#78266F] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] flex items-center justify-center mb-3">
                <SpecialtyIcon name={spec.icon} className="w-5 h-5 text-[#78266F]" />
              </div>

              <h2 className="text-lg font-bold text-[#24212A] mb-1">
                {spec.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed">
                {spec.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E1E7] flex items-center justify-between">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs font-semibold transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire For This Specialty</span>
              </Link>

              <Link
                to="/doctors"
                className="text-xs font-semibold text-[#155943] hover:underline inline-flex items-center gap-1"
              >
                <span>View Doctors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
