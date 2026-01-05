import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_CONFIG } from "@shared/config";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">H</span>
              </div>
              <div>
                <h3 className="font-black text-lg">{COMPANY_CONFIG.name}</h3>
                <p className="text-xs opacity-90">{COMPANY_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              {COMPANY_CONFIG.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Szolgáltatások</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#services" className="hover:text-secondary transition-colors">Teljes autófóliázás</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Ablak fóliázás</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Részleges burkolás</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Elérhetőség</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nyitvatartás</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex justify-between">
                <span>H-P:</span>
                <span>{COMPANY_CONFIG.businessHours.mondayToFriday}</span>
              </div>
              <div className="flex justify-between">
                <span>Szombat:</span>
                <span>{COMPANY_CONFIG.businessHours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Vasárnap:</span>
                <span>{COMPANY_CONFIG.businessHours.sunday}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} {COMPANY_CONFIG.name}. {COMPANY_CONFIG.tagline}ként a LLumar® prémium termékeket használunk.</p>
        </div>
      </div>
    </footer>
  );
}
