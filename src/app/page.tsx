'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTruck, FaUsers, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        {/* Truck Image */}
        <div className="absolute inset-0 z-0">
          <div className="hero-overlay"></div>
          <Image
            src="/truck-hero.png"
            alt="ShodExpress Truck on Highway"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              <span className="hero-highlight">Reliable</span> Transportation Services
            </h1>
            <p className="hero-description">
              ShodExpress LLC provides cost-effective and reliable transportation solutions
              for businesses across the United States.
            </p>
            <div className="hero-buttons">
              <Link href="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title section-title-primary">Our Services</h2>
          <p className="section-description">
            We offer a comprehensive range of transportation solutions to meet your business needs,
            with a focus on reliability, efficiency, and customer satisfaction.
          </p>

          <div className="grid grid-cols-3">
            <ServiceCard
              icon={<FaTruck size={36} />}
              title="Freight Transportation"
              description="Full-service freight transportation across all 48 contiguous states with flexible scheduling options."
              isHighlighted={true}
            />
            <ServiceCard
              icon={<FaMapMarkedAlt size={36} />}
              title="Route Optimization"
              description="Advanced route planning to minimize delivery times and maximize efficiency for your cargo."
            />
            <ServiceCard
              icon={<FaUsers size={36} />}
              title="Dedicated Team"
              description="Professional drivers and logistics specialists committed to the safe delivery of your goods."
              isHighlighted={true}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'relative', height: '400px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <Image
                  src="/images/team.jpg"
                  alt="ShodExpress Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title section-title-primary" style={{ textAlign: 'left' }}>Our Story</h2>
              <p style={{ color: 'var(--gray-700)', marginBottom: '1rem' }}>
                Founded in 2023, SHOD EXPRESS LLC was established by a group of trucking industry
                veterans who saw an opportunity to provide a higher level of service to clients.
                Starting with just three trucks and a commitment to excellence, we've grown to become
                a trusted name in the transportation industry.
              </p>
              <p style={{ color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                Our team is made up of experienced drivers, logistics experts, and customer service
                professionals who are dedicated to providing the best possible service to our clients.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section section-primary">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title section-title-white">Ready to Work With Us?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
              Contact us today to learn more about our services and how we can help your business.
            </p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
              <a
                href="https://intelliapp.driverapponline.com/c/shodexpressllc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: 'transparent', border: '2px solid white' }}
              >
                Apply to Drive
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title section-title-primary">What Our Clients Say</h2>
          <div className="grid grid-cols-3" style={{ marginTop: '3rem' }}>
            <TestimonialCard
              quote="ShodExpress has been a reliable partner for our business for the past year. Their drivers are professional and always on time."
              author="John Smith"
              position="Logistics Manager, ABC Company"
            />
            <TestimonialCard
              quote="We've been working with ShodExpress for our shipping needs and they've consistently delivered excellent service."
              author="Sarah Johnson"
              position="Operations Director, XYZ Corp"
              isHighlighted={true}
            />
            <TestimonialCard
              quote="Their team goes above and beyond to ensure our cargo arrives safely and on schedule. Highly recommended!"
              author="Michael Brown"
              position="Supply Chain Manager, 123 Industries"
            />
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="section section-primary" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Ready to get started?</h2>
              <p style={{ color: 'var(--gray-200)' }}>
                Contact us now for a free quote on your transportation needs.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="tel:+15134400406"
                className="btn btn-secondary"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FaPhone /> +1 (513) 440-0406
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Card components
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const ServiceCard = ({ icon, title, description, isHighlighted = false }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`card ${isHighlighted ? 'card-highlight' : ''}`}
    >
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  isHighlighted?: boolean;
}

const TestimonialCard = ({ quote, author, position, isHighlighted = false }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`testimonial ${isHighlighted ? 'testimonial-highlight' : ''}`}
    >
      <p className="testimonial-quote">"{quote}"</p>
      <div>
        <p className="testimonial-author">{author}</p>
        <p className="testimonial-position">{position}</p>
      </div>
    </motion.div>
  );
};

export default HomePage; 