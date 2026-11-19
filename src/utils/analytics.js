/**
 * Google Analytics 4 (GA4) Integration & Event Dispatcher
 * Measurement ID: G-HCCT6R638G
 * Tracks healthcare patient enquiry events and SPA route changes
 * without logging PII or protected health information.
 */

export const GA_MEASUREMENT_ID = 'G-HCCT6R638G';

/**
 * Tracks SPA route changes on client-side React Router navigation.
 */
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: title || document.title
    });
  } else if (process.env.NODE_ENV === 'development') {
    console.log(`[GA4 Page View] ${path} - ${title || document.title}`);
  }
};

/**
 * Generic event dispatcher
 */
export const trackGAEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else if (process.env.NODE_ENV === 'development') {
    console.log(`[GA4 Event Audit] ${eventName}:`, eventParams);
  }
};

// Healthcare-specific event handlers
export const trackCallClick = (phoneNumber, locationLabel = 'global_header') => {
  trackGAEvent('click_to_call', {
    phone_number: phoneNumber,
    source_location: locationLabel
  });
};

export const trackWhatsAppClick = (sourceLocation = 'floating_button') => {
  trackGAEvent('whatsapp_enquiry_click', {
    source_location: sourceLocation
  });
};

export const trackAppointmentSubmit = (doctorSpecialty = 'General') => {
  trackGAEvent('appointment_form_submission', {
    specialty_selected: doctorSpecialty
  });
};

export const trackDoctorProfileView = (doctorName, doctorSlug, specialty) => {
  trackGAEvent('doctor_profile_view', {
    doctor_name: doctorName,
    doctor_slug: doctorSlug,
    specialty: specialty
  });
};

export const trackDirectionsClick = () => {
  trackGAEvent('directions_click', {
    destination: '1st Avenue, Indira Nagar, Adyar, Chennai'
  });
};
