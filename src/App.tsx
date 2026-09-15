import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import QuickInfoBar from './components/QuickInfoBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TransformationSlider from './components/TransformationSlider';
import FeaturedExperience from './components/FeaturedExperience';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import EnquiryModal from './components/EnquiryModal';
import { ServiceItem } from './types';
import { scrollToSection } from './utils/salonUtils';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenEnquiry = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDirections = () => {
    scrollToSection('location');
  };

  return (
    <ThemeProvider>
      <div
        className="min-h-screen font-sans antialiased selection:opacity-90 transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
        }}
      >
        {/* 1. Steady Navigation Header with Theme Switcher */}
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        <main>
          {/* 2. Hero Section with Animated Headline & Image Hover Previews */}
          <Hero onOpenDirectionsModal={handleOpenDirections} />

          {/* 3. Infinite Animated Luxury Editorial Ticker */}
          <MarqueeTicker />

          {/* 4. Trust / Quick Information Bar */}
          <QuickInfoBar />

          {/* 5. Heritage & Salon Craft Section */}
          <AboutSection />

          {/* 6. Curated Services Menu with Image Hover Zoom & Filters */}
          <ServicesSection onSelectService={handleOpenEnquiry} />

          {/* 7. Interactive Hair Transformation (Before & After) Slider */}
          <TransformationSlider onOpenEnquiry={() => handleOpenEnquiry()} />

          {/* 8. Featured Experience */}
          <FeaturedExperience />

          {/* 9. Why Choose Us */}
          <WhyChooseUs />

          {/* 10. Editorial Gallery & Portfolio */}
          <GallerySection />

          {/* 11. Customer Reviews (Google Verified) */}
          <ReviewsSection />

          {/* 12. Location Section with Embedded Map */}
          <LocationSection />

          {/* 13. Final Contact CTA */}
          <ContactCTA />
        </main>

        {/* 14. Footer */}
        <Footer />

        {/* Fixed Mobile Bottom Bar */}
        <MobileBottomBar onOpenDirections={handleOpenDirections} />

        {/* Interactive Service Enquiry Modal */}
        <EnquiryModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </ThemeProvider>
  );
}
