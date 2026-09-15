import { BUSINESS_INFO } from '../data/salonData';

export function isSalonOpenNow(): { isOpen: boolean; statusText: string } {
  try {
    // Get London current time
    const now = new Date();
    const londonTimeStr = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/London',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    
    const [hours, minutes] = londonTimeStr.split(':').map(Number);
    const currentDecimal = hours + minutes / 60;
    
    const isOpen = currentDecimal >= BUSINESS_INFO.openingHours.openHour && currentDecimal < BUSINESS_INFO.openingHours.closeHour;
    
    if (isOpen) {
      return {
        isOpen: true,
        statusText: `Open now until 8:00 PM (London time)`,
      };
    } else {
      return {
        isOpen: false,
        statusText: `Opens daily at 11:00 AM (London time)`,
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Daily • 11:00 AM – 8:00 PM',
    };
  }
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // account for sticky header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
