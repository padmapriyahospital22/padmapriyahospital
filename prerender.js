import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { doctorsData, hospitalInfo } from './src/data/hospitalData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error("dist/index.html not found. Run vite build first!");
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

const pages = [
  {
    path: '/',
    title: 'Sri Padmapriya Hospital | Multispeciality Hospital in Adyar, Chennai',
    desc: 'Sri Padmapriya Hospital Pvt. Ltd. is a trusted multispeciality hospital in Indira Nagar, Adyar, Chennai since 2001. Expert consultations in Gynaecology, General Surgery, Orthopaedics, Neurology & Diagnostics. Call 044-24420091 or 6381907621.',
    h1: 'Sri Padmapriya Hospital Adyar, Chennai',
    bodyText: 'Compassionate Care. Trusted Expertise. Better Health. Specialist Outpatient Consultations, 24/7 Outpatient & Reception Desk, 24/7 Emergency & Casualty Services, Diagnostics and Advanced Surgery in Indira Nagar, Adyar, Chennai.'
  },
  {
    path: '/about',
    title: 'About Us | Sri Padmapriya Hospital, Adyar, Chennai',
    desc: 'Established in 2001 in Indira Nagar, Adyar, Chennai, Sri Padmapriya Hospital provides dedicated outpatient specialist consultations, diagnostic services, and focused inpatient clinical care.',
    h1: 'About Sri Padmapriya Hospital',
    bodyText: 'Established in 2001 in Indira Nagar, Adyar, Sri Padmapriya Hospital provides dedicated patient care, surgical facilities, ICU, and senior consultant clinics.'
  },
  {
    path: '/doctors',
    title: 'Our Specialist Doctors in Adyar, Chennai | Sri Padmapriya Hospital',
    desc: 'Meet the specialist doctors at Sri Padmapriya Hospital, Adyar, Chennai. Explore medical specialties, doctor qualifications and appointment information.',
    h1: 'Consultant Physicians & Surgeons',
    bodyText: 'Meet our panel of 20 verified medical and surgical specialists practicing across 9 clinical departments at Sri Padmapriya Hospital, Adyar.'
  },
  {
    path: '/specialities',
    title: 'Medical Specialties & Clinical Departments in Adyar | Padmapriya Hospital',
    desc: 'Comprehensive healthcare specialties in Adyar, Chennai: Obstetrics & Gynaecology, General & Laparoscopic Surgery, Orthopaedics, Neurology, ENT, Dermatology, and Pulmonology.',
    h1: 'Specialties & Medical Care',
    bodyText: 'Clinical departments supported by qualified consultant surgeons, outpatient suites, and diagnostic support in Adyar, Chennai.'
  },
  {
    path: '/facilities',
    title: 'Hospital Facilities & Diagnostic Services | Padmapriya Hospital Adyar',
    desc: 'Modern clinical infrastructure at Padmapriya Hospital, Adyar: Operation Theatres, Intensive Care Unit (ICU), Ultrasound, Digital X-Ray, Clinical Pathology, and Inpatient Deluxe Rooms.',
    h1: 'Diagnostic Services & Infrastructure',
    bodyText: 'Modern clinical infrastructure at Sri Padmapriya Hospital: Operation Theatres, Intensive Care Unit, Ultrasound, Digital X-Ray, and Pathology Lab.'
  },
  {
    path: '/patient-info',
    title: 'Patient Care Guidelines & Visitor Info | Padmapriya Hospital Adyar',
    desc: 'Patient guidelines for OPD visits, admission process, visitor hours, and diagnostic protocols at Sri Padmapriya Hospital, Indira Nagar, Adyar, Chennai.',
    h1: 'Hospital Guidelines & Protocols',
    bodyText: 'Patient care guidelines, admission checklists, visitor policies, and hospital timings for patients and family members.'
  },
  {
    path: '/appointment',
    title: 'Book Doctor Appointment Online | Padmapriya Hospital Adyar',
    desc: 'Book your specialist doctor consultation at Sri Padmapriya Hospital, Indira Nagar, Adyar, Chennai. Fast online token booking and front desk telephone assistance.',
    h1: 'Specialist Consultation Enquiry',
    bodyText: 'Schedule your appointment with our specialist physicians and surgeons at Sri Padmapriya Hospital, Adyar. Call 044-24420091 or 6381907621.'
  },
  {
    path: '/contact',
    title: 'Contact & Location Directions | Padmapriya Hospital Adyar, Chennai',
    desc: 'Visit Sri Padmapriya Hospital at 1st Avenue, Indira Nagar, Adyar, Chennai - 600020. Phone: 044-24420091, 044-24450878. 24/7 Helpline: 6381907621.',
    h1: 'Hospital Location & Contact',
    bodyText: 'Sri Padmapriya Hospital is located at 1st Avenue, Indira Nagar, Adyar, Chennai 600020. Phone: 044-24420091, 044-24450878. 24/7 Helpline: 6381907621.'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Sri Padmapriya Hospital Adyar',
    desc: 'Patient Privacy Policy and Information Governance at Sri Padmapriya Hospital Pvt. Ltd., Indira Nagar, Adyar, Chennai.',
    h1: 'Patient Privacy Policy',
    bodyText: 'Information governance and patient privacy commitments of Sri Padmapriya Hospital Pvt. Ltd., Adyar, Chennai.'
  },
  {
    path: '/terms',
    title: 'Terms of Use & Medical Disclaimer | Sri Padmapriya Hospital',
    desc: 'Website terms, medical disclaimer, and enquiry policies for Sri Padmapriya Hospital Pvt. Ltd., Adyar, Chennai.',
    h1: 'Terms of Use & Medical Disclaimer',
    bodyText: 'Terms of use, clinical disclaimers, and hospital website notices for Sri Padmapriya Hospital Pvt. Ltd.'
  }
];

// Add all approved doctors
doctorsData.forEach(doc => {
  const primary = doc.speciality ? doc.speciality.split('|')[0].trim() : 'Specialist';
  pages.push({
    path: `/doctors/${doc.slug}`,
    title: `${doc.name} – ${primary} in Adyar, Chennai | Sri Padmapriya Hospital`,
    desc: `Consult ${doc.name}, ${primary} at Sri Padmapriya Hospital, Adyar, Chennai. View qualifications, consultation timings (${doc.schedule}) and appointment information.`,
    h1: doc.name,
    bodyText: `${doc.name} (${doc.qualifications}) is a ${doc.title} specializing in ${doc.speciality} at Sri Padmapriya Hospital, Adyar, Chennai. Consultation timings: ${doc.schedule}. Consultation fee: ${doc.opdFee || 'Available upon inquiry'}.`,
    isDoctorProfile: true
  });
});

console.log(`Generating static HTML prerenders for ${pages.length} routes...`);

pages.forEach(page => {
  const canonicalUrl = `https://www.padmapriyahospital.com${page.path === '/' ? '/' : page.path}`;
  
  let html = baseHtml;

  // Privacy hardening for initial HTML GA4 config on doctor profiles
  if (page.isDoctorProfile) {
    html = html.replace(
      /gtag\('config',\s*'G-HCCT6R638G',\s*\{[\s\S]*?\}\);/,
      `gtag('config', 'G-HCCT6R638G', {
        page_path: '/doctors/profile',
        page_title: 'Doctor Profile | Sri Padmapriya Hospital',
        page_location: 'https://www.padmapriyahospital.com/doctors/profile'
      });`
    );
  }
  
  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
  
  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${page.desc}" />`
  );
  
  // Replace Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  
  // Replace Open Graph Tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${page.desc}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  
  // Replace Twitter Tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${page.desc}" />`
  );

  // Inject initial crawlable text into <div id="root"> for non-JS web crawlers
  const initialContent = `
    <div id="prerender-fallback" style="padding: 20px; font-family: sans-serif; max-width: 800px; margin: 0 auto;">
      <h1>${page.h1}</h1>
      <p>${page.bodyText}</p>
    </div>
  `;
  
  html = html.replace('<div id="root"></div>', `<div id="root">${initialContent}</div>`);

  // Determine output file path
  let targetFile;
  if (page.path === '/') {
    targetFile = path.join(distDir, 'index.html');
  } else {
    const routeDir = path.join(distDir, page.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    targetFile = path.join(routeDir, 'index.html');
  }

  fs.writeFileSync(targetFile, html, 'utf8');
});

console.log();
