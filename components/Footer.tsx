'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-card/50 border-t border-border/50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">Organic Ads Technologies</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            Your trusted partner for comprehensive digital solutions. We specialize in web development,
                            mobile app development, and cutting-edge digital marketing strategies that drive real results.
                        </p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            From stunning websites and powerful mobile apps to advanced messaging solutions (WhatsApp Business API,
                            RCS, Bulk SMS) and AI-powered chatbots, we deliver end-to-end digital transformation for businesses
                            of all sizes.
                        </p>

                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/organicads1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5 text-primary" />
                            </a>
                            <a href="https://www.instagram.com/organicads1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5 text-primary" />
                            </a>
                            <a href="https://www.linkedin.com/company/organicads1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                                <Linkedin className="w-5 h-5 text-primary" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Services</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Mobile App Development</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Digital Marketing</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">WhatsApp Business API</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">RCS Messaging</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Bulk SMS</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Voice Solutions</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Chatbot</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Multi Channel Messaging</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Backend & Cloud</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Social Media Ads</a></li>
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Technologies</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Next.js & React</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">React Native</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">AWS & Cloud</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">SQL & Databases</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Tailwind CSS</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">
                                    Organic Ads Technologies Digital Marketing Company,<br />
                                    Talakadu Subbarao Beedi,<br />
                                    Near Raghavendra Swamy Temple,<br />
                                    Nelamangala, Bangalore, Karnataka, IN 562123
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <a href="tel:+917259404569" className="hover:text-primary transition-colors">
                                    +91 725940 4569
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <a href="tel:+919743504315" className="hover:text-primary transition-colors">
                                    +91 974350 4315
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <a href="mailto:contact@organicads.in" className="hover:text-primary transition-colors">
                                        contact@organicads.in
                                    </a>
                                    <a href="mailto:organicads1@gmail.com" className="hover:text-primary transition-colors">
                                        organicads1@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
                    <p>&copy; {currentYear} Organic Ads Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
