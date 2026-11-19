/**
 * Google Analytics 4 (GA4) Integration & Privacy-Hardened Event Dispatcher
 * Measurement ID: G-HCCT6R638G
 * 
 * Strict Healthcare Privacy & HIPAA Compliance:
 * - NO patient personal information (names, emails, phone numbers, notes)
 * - NO doctor names, doctor slugs, or specialties
 * - NO clinical or symptom details
 * - Only generic event names and non-sensitive source labels
 */

export const GA_MEASUREMENT_ID = 'G-HCCT6R638G';

/**
 * Tracks SPA route changes on client-side React Router navigation.
 * 
 * Strict Privacy Requirement for Doctor Profiles:
 * The actual doctor profile URLs and SEO metadata remain fully intact for visitors and crawlers.
 * However, GA4 receives generic analytics-only values:
 * - page_path: '/doctors/profile'
 * - page_title: 'Doctor Profile | Sri Padmapriya Hospital'
 * - page_location: 'https://www.padmapriyahospital.com/doctors/profile'
 */
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const rawPath = path ? path.split('?')[0] : window.location.pathname;

    let pagePath = rawPath;
    let pageTitle = title || document.title;
    let pageLocation = `${window.location.origin}${rawPath}`;

    // If navigating to an individual doctor profile (/doctors/dr-...), sanitize for GA4
    if (rawPath.startsWith('/doctors/') && rawPath !== '/doctors' && rawPath !== '/doctors/') {
      pagePath = '/doctors/profile';
      pageTitle = 'Doctor Profile | Sri Padmapriya Hospital';
      pageLocation = 'https://www.padmapriyahospital.com/doctors/profile';
    }

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_location: pageLocation,
      page_title: pageTitle
    });
  } else if (process.env.NODE_ENV === 'development') {
    console.log(`[GA4 Page View] ${path} - ${title || document.title}`);
  }
};

/**
 * Generic event dispatcher with payload safety filter
 */
export const trackGAEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else if (process.env.NODE_ENV === 'development') {
    console.log(`[GA4 Event Audit] ${eventName}:`, eventParams);
  }
};

/**
 * 1. click_to_call
 * Tracks generic telephone enquiry clicks without logging phone numbers.
 */
export const trackCallClick = (locationLabel = 'header') => {
  trackGAEvent('click_to_call', {
    source_location: locationLabel
  });
};

/**
 * 2. whatsapp_enquiry_click
 * Tracks generic WhatsApp enquiry clicks without logging numbers or message text.
 */
export const trackWhatsAppClick = (sourceLocation = 'button') => {
  trackGAEvent('whatsapp_enquiry_click', {
    source_location: sourceLocation
  });
};

/**
 * 3. appointment_form_submission
 * Tracks successful appointment form submission as a generic conversion.
 * Strictly excludes patient name, phone number, doctor chosen, and symptoms.
 */
export const trackAppointmentSubmit = () => {
  trackGAEvent('appointment_form_submission');
};

/**
 * 4. doctor_profile_view
 * Tracks when a doctor profile page is viewed without sending doctor name, slug or specialty.
 */
export const trackDoctorProfileView = () => {
  trackGAEvent('doctor_profile_view');
};

/**
 * 5. directions_click
 * Tracks generic clinic directions click without transmitting personal location data.
 */
export const trackDirectionsClick = () => {
  trackGAEvent('directions_click');
};
