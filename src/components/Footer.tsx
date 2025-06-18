import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'Prakriti Quiz', href: '#' },
      { name: 'Upload Diagnosis', href: '#' },
      { name: 'Lifestyle Tracker', href: '#' },
      { name: 'AyuPlan Generator', href: '#' },
      { name: 'AyurGPT Chat', href: '#' },
    ],
    resources: [
      { name: 'Ayurveda Guide', href: '#' },
      { name: 'Dosha Explained', href: '#' },
      { name: 'Wellness Blog', href: '#' },
      { name: 'Research Papers', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Vaidyas', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-ayurveda-earth/5 to-ayurveda-sage/10 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6 lg:mx-auto text-left">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold gradient-text">Ayunova</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Bridging ancient Ayurvedic wisdom with modern AI technology to create personalized wellness solutions for the modern world.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hello@ayunova.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Platform</h4>
              <ul className="space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Ayunova. All rights reserved. Made with 💚 for your wellness.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">All systems operational</span>
              </div>
              
              <div className="text-xs text-muted-foreground">
                🌿 Powered by AI & Ancient Wisdom
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
