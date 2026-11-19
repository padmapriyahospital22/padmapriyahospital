import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Check } from 'lucide-react';
import { doctorsData } from '../data/hospitalData';
import AppointmentForm from '../components/AppointmentForm';
import SEOHead from '../components/SEOHead';
import { trackDoctorProfileView } from '../utils/analytics';

export default function DoctorProfile() {
  const { slug } = useParams();
  const doctor = doctorsData.find(d => d.slug === slug);

  useEffect(() => {
    if (doctor) {
      trackDoctorProfileView();
    }
  }, [doctor]);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  // Clean primary specialty label
  const primarySpecialty = doctor.speciality ? doctor.speciality.split('|')[0].trim() : 'Specialist';

  // Enhanced Physician Schema.org JSON-LD structured data with BreadcrumbList
  const physicianSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `https://www.padmapriyahospital.com/doctors/${doctor.slug}#physician`,
        "name": doctor.name,
        "jobTitle": doctor.title,
        "description": doctor.experienceSummary || `Consult ${doctor.name}, ${primarySpecialty} at Sri Padmapriya Hospital, Adyar, Chennai.`,
        "url": `https://www.padmapriyahospital.com/doctors/${doctor.slug}`,
        "image": doctor.photo ? `https://www.padmapriyahospital.com${doctor.photo}` : "https://www.padmapriyahospital.com/images/brand/official_hospital_logo.png",
        "medicalSpecialty": primarySpecialty,
        "medicalSpecialtyDescription": doctor.speciality,
        ...(doctor.qualifications && { "alumniOf": doctor.qualifications }),
        ...(doctor.isRegistrationVerified && doctor.registrationNumber ? { "identifier": doctor.registrationNumber } : {}),
        "worksFor": {
          "@type": "Hospital",
          "@id": "https://www.padmapriyahospital.com/#hospital",
          "name": "Sri Padmapriya Hospital Pvt. Ltd.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Avenue, Indira Nagar",
            "addressLocality": "Adyar",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600020",
            "addressCountry": "IN"
          },
          "telephone": "+91-44-24420091"
        }
      },
      {
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
            "name": "Doctors",
            "item": "https://www.padmapriyahospital.com/doctors"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": doctor.name,
            "item": `https://www.padmapriyahospital.com/doctors/${doctor.slug}`
          }
        ]
      }
    ]
  };

  const seoTitle = `${doctor.name} – ${primarySpecialty} in Adyar, Chennai | Sri Padmapriya Hospital`;
  const seoDescription = `Consult ${doctor.name}, ${primarySpecialty} at Sri Padmapriya Hospital, Adyar, Chennai. View qualifications, consultation timings (${doctor.schedule}) and appointment information.`;

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/doctors/${doctor.slug}`}
        ogImage={doctor.photo || '/images/brand/official_hospital_logo.png'}
        ogType="profile"
        schemaJson={physicianSchema}
      />
      
      {/* Breadcrumb */}
      <div>
        <Link 
          to="/doctors" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#69636E] hover:text-[#78266F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Our Doctors</span>
        </Link>
      </div>

      {/* Main Profile Layout */}
      <div className="bg-white rounded-md border border-[#E5E1E7] p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4:5 White Background Portrait */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-xs aspect-4/5 rounded-md border border-[#E5E1E7] p-3 bg-white flex items-center justify-center">
              {doctor.photo ? (
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-contain object-bottom"
                />
              ) : (
                <div className="text-center text-[#69636E] text-xs">
                  Portrait Pending
                </div>
              )}
            </div>

            <div className="mt-3 w-full max-w-xs p-3 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] text-center">
              <span className="text-[11px] font-semibold text-[#69636E] uppercase tracking-wider block">
                OPD Consultation Fee
              </span>
              <span className="text-base font-bold text-[#78266F] mt-0.5 block">
                {doctor.opdFee || "Pending Confirmation"}
              </span>
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#155943]">
                {doctor.title}
              </span>
              {doctor.hospitalDesignation && (
                <span className="block text-[11px] font-bold text-[#78266F] uppercase tracking-wider mt-0.5">
                  {doctor.hospitalDesignation}
                </span>
              )}

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-0.5">
                {doctor.name}
              </h1>

              <p className="text-xs sm:text-sm font-medium text-[#69636E] mt-0.5">
                {doctor.qualifications}
              </p>

              <div className="text-xs font-bold text-[#78266F] mt-2">
                Specialty: {doctor.speciality}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#24212A] leading-relaxed">
              {doctor.experienceSummary}
            </p>

            {/* Special Training / Professional Degrees */}
            {doctor.qualificationsList && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Qualifications & Degrees
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#24212A]">
                  {doctor.qualificationsList.map((qual, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0" />
                      <span>{qual}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.degreesList && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Professional Degrees & Medical Education
                </h3>
                <div className="space-y-1.5 text-xs text-[#24212A]">
                  {doctor.degreesList.map((deg, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0 mt-0.5" />
                      <span>{deg}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.specialTraining && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Special Training & Advanced Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#24212A]">
                  {doctor.specialTraining.map((st, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.teachingExperience && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Teaching & Academic Experience
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#24212A]">
                  {doctor.teachingExperience.map((exp, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.experienceDetails && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Clinical Experience & Background
                </h3>
                <div className="space-y-1.5 text-xs text-[#24212A]">
                  {doctor.experienceDetails.map((det, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0 mt-0.5" />
                      <span>{det}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.specialInterests && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Areas of Clinical Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#24212A]">
                  {doctor.specialInterests.map((interest, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.academicResearch && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Academic & Research Excellence
                </h3>
                <div className="space-y-1.5 text-xs text-[#24212A]">
                  {doctor.academicResearch.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.memberships && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Professional Memberships & Affiliations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#24212A]">
                  {doctor.memberships.map((mem, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#78266F] shrink-0" />
                      <span>{mem}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {doctor.awards && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Awards & Honours
                </h3>
                <div className="space-y-1.5 text-xs text-[#24212A]">
                  {doctor.awards.map((aw, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 font-semibold">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{aw}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] space-y-1 text-xs">
              <div className="font-bold text-[#24212A] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#78266F]" />
                <span>Consultation Timings</span>
              </div>
              <p className="text-[#24212A] font-semibold">{doctor.schedule}</p>
              <p className="text-[#69636E] text-[11px]">
                Hospital front desk verifies consultation schedules prior to clinical visit.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Embedded Appointment Form for this Doctor */}
      <div className="max-w-2xl mx-auto">
        <AppointmentForm defaultDoctor={doctor.name} />
      </div>

    </div>
  );
}
