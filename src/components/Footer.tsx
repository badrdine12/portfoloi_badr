import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-background-light border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {currentYear} <span className="text-gradient font-semibold">Badr Eddine Binoua</span>. Tous droits réservés.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="mailto:badrbinoua07@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-glow hover:scale-110 transition-all z-40"
        aria-label="Retour en haut"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
