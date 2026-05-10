/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Star, 
  ShieldCheck, 
  Wrench, 
  ThumbsUp, 
  Search, 
  MessageCircle,
  ChevronUp,
  Settings,
  Battery,
  Lightbulb,
  Crosshair,
  Wind
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { title: 'טיפול שוטף', icon: <Settings className="w-8 h-8" /> },
    { title: 'תחזוקת בלמים', icon: <ShieldCheck className="w-8 h-8" /> },
    { title: 'כיוון והחלפת פנסים', icon: <Lightbulb className="w-8 h-8" /> },
    { title: 'כיוון פרונט וגיאומטריה', icon: <Crosshair className="w-8 h-8" /> },
    { title: 'מיזוג אוויר', icon: <Wind className="w-8 h-8" /> },
    { title: 'חשמל רכב', icon: <Battery className="w-8 h-8" /> },
    { title: 'בדיקות כלליות', icon: <Search className="w-8 h-8" /> },
    { title: 'אבחון ותיקון תקלות', icon: <Wrench className="w-8 h-8" /> },
  ];

  const reviews = [
    {
      name: 'אורנית',
      text: '"ממליצה בחום. ישרים, אמינים ומקצועים! אהרון בדק באופן יסודי, עשה סיבוב עם הרכב, ולאחר שלא מצא בעיה — לא הסכים בשום פנים לקבל תשלום. מדהים שיש עוד אנשים כאלה."',
    },
    {
      name: 'סיון',
      text: '"אבי הוא איש המקצוע הכי מקצועי, מנוסה, הגון וישר שיצא לי לפגוש — מה שממש לא מובן מאליו בתחום. זו כנראה הסיבה שהמוסך עמוס תמיד."',
    },
    {
      name: 'יעקב',
      text: '"החלפתי מולטיאייר, פנסים קדמיים ועוד לאלפא מיטו — עבודה טובה במעט זמן ובחיסכון משמעותי לעומת הצעות אחרות."',
    }
  ];

  const features = [
    { title: 'יושרה ואמינות', desc: 'אצלנו לא מתקנים מה שלא צריך. שקיפות מלאה מול הלקוח.', icon: <ShieldCheck className="w-10 h-10 text-brand-gold" /> },
    { title: 'מקצועיות ללא פשרות', desc: 'צוות מנוסה עם ידע טכני רחב באיתור ופתרון תקלות.', icon: <Wrench className="w-10 h-10 text-brand-gold" /> },
    { title: 'מחירים הוגנים', desc: 'חיסכון משמעותי ללקוח ללא התפשרות על איכות החלקים והעבודה.', icon: <ThumbsUp className="w-10 h-10 text-brand-gold" /> },
    { title: 'אבחון יסודי', desc: 'בדיקה מקיפה ונסיעת מבחן כדי להבטיח שהרכב תקין ובטוח.', icon: <Search className="w-10 h-10 text-brand-gold" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans" dir="rtl">
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-brand-blue/95 backdrop-blur-sm shadow-lg py-4 text-white'}`}>
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
              מוסך התלתן
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className={`hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>ראשי</a>
            <a href="#about" className={`hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>למה אנחנו</a>
            <a href="#services" className={`hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>שירותים</a>
            <a href="#reviews" className={`hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>המלצות</a>
            <a href="#contact" className={`hover:text-brand-gold transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>צור קשר</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <a href="tel:039246701" className="flex items-center gap-2 font-bold text-lg text-brand-gold hover:text-orange-400 transition-colors" dir="ltr">
               <Phone className="w-5 h-5" />
               03-924-6701
             </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="תפריט">
            <Menu className={`w-7 h-7 ${isScrolled ? 'text-brand-blue' : 'text-white'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-brand-blue text-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-4">
              <span className="text-2xl font-bold">מוסך התלתן</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-xl">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>ראשי</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>למה אנחנו</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>שירותים</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>המלצות</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>צור קשר</a>
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
              <a href="tel:039246701" className="flex items-center justify-center gap-3 bg-brand-gold text-brand-blue font-bold py-4 rounded-xl text-xl" dir="ltr">
                <Phone className="w-6 h-6" />
                03-924-6701
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-blue relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1 bg-white/10 rounded-full px-4 py-1.5 mb-6 text-brand-gold font-medium text-sm backdrop-blur-sm border border-white/10">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <span className="text-white mr-2">4.9 בגוגל מתוך 116 ביקורות</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              המוסך שלכם בפתח תקווה <br className="hidden md:block"/>
              <span className="text-brand-gold">שירות ברמה אחרת</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
              מוסך התלתן, בהנהלת אבי ואהרון, מביא סטנדרט חדש של אמינות ומקצועיות לטיפול ברכב שלכם. בואו להצטרף למאות לקוחות מרוצים.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:039246701" className="bg-brand-gold hover:bg-orange-400 text-brand-blue font-bold px-8 py-4 rounded-lg flex justify-center items-center gap-3 transition-colors text-lg shadow-lg shadow-brand-gold/20">
                <Phone className="w-5 h-5" />
                <span>התקשרו עכשיו</span>
              </a>
              <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-lg flex justify-center items-center transition-colors text-lg">
                הגעה ושעות פתיחה
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">למה לבחור בנו?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              אצלנו האמינות קודמת לכל. קראו מה הופך את מוסך התלתן למקום שחוזרים אליו שוב ושוב.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
         <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">השירותים שלנו</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              מעטפת מלאה לרכב שלך תחת קורת גג אחת, עם הציוד והידע המתקדמים ביותר.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-gold/50 hover:bg-slate-100/80 transition-all flex flex-col items-center text-center cursor-default"
              >
                <div className="text-brand-blue group-hover:text-brand-gold transition-colors mb-4 bg-white p-4 rounded-full shadow-sm">
                  {service.icon}
                </div>
                <h3 className="font-bold text-brand-blue md:text-lg">{service.title}</h3>
              </motion.div>
            ))}
          </div>
         </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-brand-blue text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">מה הלקוחות שלנו אומרים?</h2>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl">4.9</span>
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-white/70 mr-2 text-sm">דירוג Google (116 ביקורות)</span>
              </div>
            </div>
            
            <a href="https://maps.google.com/?cid=SOMELINK" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-orange-400 font-medium flex items-center gap-1 transition-colors">
              לכל הביקורות בגוגל &larr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative"
              >
                <div className="text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 inline-block fill-current mr-1" />)}
                </div>
                <p className="text-white/90 leading-relaxed font-light mb-6">
                  {review.text}
                </p>
                <div className="flex items-center gap-3 mt-auto font-bold text-white">
                  <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                    {review.name.charAt(0)}
                  </div>
                  {review.name}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row gap-12">
          
          {/* Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">איך מגיעים אלינו?</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/5 p-3 rounded-full text-brand-blue mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">כתובת המוסך</h4>
                  <p className="text-slate-600">היצירה 17, פתח תקווה</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/5 p-3 rounded-full text-brand-blue mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">טלפון להתקשרות</h4>
                  <a href="tel:039246701" className="text-brand-blue font-bold text-xl hover:text-brand-gold transition-colors inline-block mt-1" dir="ltr">03-924-6701</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/5 p-3 rounded-full text-brand-blue mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-slate-900 text-lg mb-3">שעות פעילות</h4>
                  <table className="w-full max-w-sm text-sm text-slate-600">
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 font-medium">ימים א׳ - ה׳</td>
                        <td className="py-2 text-left" dir="ltr">08:00 - 17:00</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium bg-slate-100/50 rounded-r">יום ו׳ וערבי חג</td>
                        <td className="py-2 text-left bg-slate-100/50 rounded-l" dir="ltr">08:00 - 13:00</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-slate-400">שבת</td>
                        <td className="py-2 text-left text-slate-400">סגור</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue text-white p-6 rounded-xl flex items-center justify-between shadow-lg">
               <div>
                 <h4 className="font-bold text-lg mb-1">אהרון ואבי מחכים לכם</h4>
                 <p className="text-white/80 text-sm">התקשרו עכשיו לייעוץ ללא התחייבות</p>
               </div>
               <a href="tel:039246701" className="bg-brand-gold hover:bg-orange-400 text-brand-blue w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                 <Phone className="w-6 h-6" />
               </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.0528294403326!2d34.863158076615554!3d32.095039273934335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4abb24220791%3A0xe54fb7973c528f87!2z15TXmdek15nXqNeUIDE3LCDYpNeq15cg16rXptek15XXlA!5e0!3m2!1siw!2sil!4v1715426000000!5m2!1siw!2sil" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0"
               title="מפת הגעה למוסך התלתן"
             ></iframe>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-center border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="font-bold text-white text-xl mb-4">מוסך התלתן</div>
          <p className="mb-6 max-w-sm mx-auto text-sm">
            מוסך פרטי ומקצועי בפתח תקווה הדוגל בשקיפות, הגינות ושירות מעולה.
          </p>
          <div className="flex justify-center gap-6 mb-8 text-sm">
            <a href="#home" className="hover:text-white transition-colors">ראשי</a>
            <a href="#about" className="hover:text-white transition-colors">למה לבחור בנו</a>
            <a href="#services" className="hover:text-white transition-colors">שירותים</a>
            <a href="#contact" className="hover:text-white transition-colors">צור קשר</a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} מוסך התלתן. כל הזכויות שמורות. נבנה באהבה עבור שירות אמין.
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a 
          href="https://wa.me/972580000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          aria-label="שלח הודעה בוואטסאפ"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ms-1"
              aria-label="חזור למעלה"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
