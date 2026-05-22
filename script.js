
  // ===== THEME TOGGLE =====
  let isDark = true;
  function toggleTheme() {
    isDark = !isDark;
    document.body.classList.toggle('light-mode', !isDark);
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  // restore saved theme
  (function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      isDark = false;
      document.body.classList.add('light-mode');
      const icon = document.getElementById('themeIcon');
      if (icon) icon.className = 'fas fa-sun';
    }
  })();

  // ===== LOADING =====
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loading-screen').classList.add('hidden');
    }, 1800);
  });
 
  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    // scroll to top button
    const btn = document.getElementById('scrollTop');
    if (window.scrollY > 300) btn.classList.add('visible');
    else btn.classList.remove('visible');
    // reveal animations
    revealOnScroll();
  });
 
  // ===== SCROLL TO SECTION =====
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
 
  // ===== SCROLL TO TOP =====
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
  // ===== MOBILE MENU =====
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
  }
 
  // ===== REVEAL ANIMATIONS =====
  function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  }
  revealOnScroll();
 
  // ===== POPUP =====
  function openPopup(pkgName, pkgPrice) {
    document.getElementById('popupOverlay').classList.add('active');
    const select = document.getElementById('clientPkg');
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.startsWith(pkgName)) {
        select.selectedIndex = i;
        break;
      }
    }
    document.body.style.overflow = 'hidden';
  }
 
  function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }
 
  function closePopupOut(e) {
    if (e.target === document.getElementById('popupOverlay')) closePopup();
  }
 
  function sendWhatsApp() {
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const pkg = document.getElementById('clientPkg').value;
    if (!name || !phone) {
      alert(currentLang === 'ar' ? 'يرجى إدخال الاسم ورقم الهاتف' : 'Please enter your name and phone number');
      return;
    }
    const msg = currentLang === 'ar'
      ? `مرحباً،\nأريد الاستفسار عن الحجز\n\nاسم العميل: ${name}\nرقم الهاتف: ${phone}\nالباقة المختارة: ${pkg}`
      : `Hello,\nI'd like to book a package\n\nClient Name: ${name}\nPhone: ${phone}\nSelected Package: ${pkg}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/201004280071?text=${encoded}`, '_blank');
    closePopup();
  }
 
  // ===== LANGUAGE TOGGLE =====
  let currentLang = 'ar';
  const translations = {
    ar: {
      lang: 'ar', dir: 'rtl',
      langBtn: 'English', langBtnM: 'English',
      logoMain: 'مؤسسة صلاح خلف', logoSub: 'للرحلات والتوريدات العمومية',
      nav1:'الرئيسية',nav2:'من نحن',nav3:'الباقات',nav4:'الاحتفالات والجوائز',nav5:'معرض الصور',nav6:'آراء العملاء',nav7:'تواصل معنا',
      mnav1:'الرئيسية',mnav2:'من نحن',mnav3:'الباقات',mnav4:'الاحتفالات والجوائز',mnav5:'معرض الصور',mnav6:'آراء العملاء',mnav7:'تواصل معنا',
      heroBadge:'رحلات الحج والعمرة المميزة',
      heroTitle:'مؤسسة <span>صلاح خلف</span><br>للرحلات وحجز التذاكر',
      heroSubtitle:'حلمك للعمرة أصبح حقيقة وسفرك مضمون بإذن الله',
      heroDesc:'نقدم لكم أرقى خدمات الحج والعمرة بأعلى معايير الجودة والراحة، لتكون رحلتكم الإيمانية تجربة لا تُنسى مليئة بالطمأنينة والبركة.',
      heroBtn1:'احجز رحلتك الآن',heroBtn2:'تعرف علينا',
      stat1:'معتمر ومعتمرة',stat2:'باقات متنوعة',stat3:'رضا العملاء',
      scrollHint:'انزل لاستكشاف المزيد',
      aboutTitle:'مؤسسة <span>صلاح خلف</span><br>للرحلات وحجز التذاكر والتوريدات العمومية',
      aboutP1:'نسعى لتقديم أفضل خدمات الحج والعمرة بأعلى درجات الراحة والتنظيم، لنمنح عملاءنا رحلة إيمانية مميزة مليئة بالطمأنينة والخدمة الممتازة.',
      aboutP2:'مؤسسة تجمع بين الخبرة الطويلة والأمانة والاحترافية في تنظيم رحلات الحج والعمرة، مع الحرص الكامل على راحتكم وسلامتكم في كل خطوة من خطوات الرحلة المقدسة.',
      af1:'سفر مضمون وآمن بإذن الله',af2:'خدمة متميزة على أعلى مستوى',af3:'متابعة مستمرة طوال الرحلة',af4:'تسهيلات ميسرة تناسب الجميع',
      pkgTitle:'اختر <span>باقتك</span> المناسبة',
      pkgName1:'باقة 1',pkgName2:'باقة 2',pkgName3:'باقة 3',
      pkgCurr1:'جنيه',pkgCurr2:'جنيه',pkgCurr3:'جنيه',
      pkgDetail1:'كل شهر لمدة 36 شهر',pkgDetail2:'كل شهر لمدة 18 شهر',pkgDetail3:'تدفع مقدم والباقي تقسيط',
      featBadge:'الأكثر طلباً',
      pkgFeatTitle:'مميزات جميع الباقات',
      pf1:'تسهيلات ميسرة تناسب الجميع',pf2:'سفرك مضمون بإذن الله',pf3:'خدمات متميزة وإقامة مريحة',pf4:'تنظيم متكامل من البداية للنهاية',
      celebTitle:'الاحتفالات <span>والجوائز</span>',
      galTitle:'معرض الصور',
      testiTitle:'آراء عملائنا',
      t1text:'تجربة رائعة ولا تُنسى، التنظيم كان على أعلى مستوى والخدمة ممتازة من البداية للنهاية. أنصح الجميع بالسفر مع مؤسسة صلاح خلف.',
      t2text:'الحمد لله أديت العمرة بفضل الله ثم بفضل هذه المؤسسة المتميزة. كل شيء كان منظماً ومريحاً، والمعاملة كانت أكثر من رائعة.',
      t3text:'نظام التقسيط سهّل عليّ كثيراً وحقق حلمي في زيارة بيت الله. الأمانة والصدق من أهم ما يميز هذه المؤسسة العريقة.',
      t1name:' أحمد مصطفى',t1loc:'الأسكندرية',t2name:'فاطمة علي',t2loc:'الإسكندرية',t3name:'محمد حسين',t3loc:'الأسكندرية',
      ctTitle:'نحن هنا <span>لمساعدتك</span>',
      ctDesc:'تواصل معنا الآن واحجز رحلتك المباركة. فريقنا جاهز للرد على جميع استفساراتك وتسهيل إجراءات سفرك بإذن الله.',
      waBtnText:'تواصل عبر واتساب',
      popupTitle:'احجز رحلتك الآن',popupSub:'أدخل بياناتك وسنتواصل معك في أقرب وقت',
      popupLabelName:'اسم العميل',popupLabelPhone:'رقم الهاتف',popupLabelPkg:'الباقة المختارة',
      popupSubmitBtn:'إرسال الطلب عبر واتساب',
      fl1:'الرئيسية',fl2:'من نحن',fl3:'الباقات',fl4:'معرض الصور',fl5:'تواصل معنا',
    },
    en: {
      lang: 'en', dir: 'ltr',
      langBtn: 'العربية', langBtnM: 'العربية',
      logoMain: 'Salah Khalaf Foundation', logoSub: 'Travel & General Supplies',
      nav1:'Home',nav2:'About',nav3:'Packages',nav4:'Celebrations',nav5:'Gallery',nav6:'Reviews',nav7:'Contact',
      mnav1:'Home',mnav2:'About',mnav3:'Packages',mnav4:'Celebrations',mnav5:'Gallery',mnav6:'Reviews',mnav7:'Contact',
      heroBadge:'Hajj & Umrah Premium Trips',
      heroTitle:'<span>Salah Khalaf</span> Foundation<br>Travel & Ticketing',
      heroSubtitle:'Your Umrah dream is now a reality — your journey is guaranteed by Allah\'s will',
      heroDesc:'We offer premium Hajj and Umrah services with the highest standards of quality and comfort, ensuring a memorable spiritual journey filled with peace and blessings.',
      heroBtn1:'Book Your Trip Now',heroBtn2:'Learn About Us',
      stat1:'Pilgrims Served',stat2:'Packages',stat3:'Client Satisfaction',
      scrollHint:'Scroll to explore more',
      aboutTitle:'<span>Salah Khalaf</span> Foundation<br>Travel, Ticketing & General Supplies',
      aboutP1:'We strive to deliver the best Hajj and Umrah services with the highest levels of comfort and organization, granting our clients a distinguished spiritual journey filled with peace and excellent service.',
      aboutP2:'A foundation that combines long experience, integrity, and professionalism in organizing Hajj and Umrah trips, with full care for your comfort and safety at every step of the sacred journey.',
      af1:'Safe & guaranteed travel by Allah\'s will',af2:'Distinguished service at the highest level',af3:'Continuous follow-up throughout the trip',af4:'Flexible payment options for everyone',
      pkgTitle:'Choose Your <span>Package</span>',
      pkgName1:'Package 1',pkgName2:'Package 2',pkgName3:'Package 3',
      pkgCurr1:'EGP',pkgCurr2:'EGP',pkgCurr3:'EGP',
      pkgDetail1:'Per month for 36 months',pkgDetail2:'Per month for 18 months',pkgDetail3:'Pay deposit, rest in installments',
      featBadge:'Most Popular',
      pkgFeatTitle:'All Packages Include',
      pf1:'Flexible payment options for everyone',pf2:'Travel guaranteed by Allah\'s will',pf3:'Distinguished services & comfortable stay',pf4:'Complete organization from start to finish',
      celebTitle:'Celebrations <span>& Awards</span>',
      galTitle:'Photo Gallery',
      testiTitle:'Client Reviews',
      t1text:'An amazing and unforgettable experience. The organization was top-notch and the service was excellent from start to finish. I highly recommend Salah Khalaf Foundation.',
      t2text:'Alhamdulillah I performed Umrah thanks to Allah and this outstanding foundation. Everything was organized and comfortable, and the treatment was more than wonderful.',
      t3text:'The installment system made it much easier for me and fulfilled my dream of visiting the House of Allah. Integrity and honesty are what distinguish this esteemed foundation.',
      t1name:'Ahmed Mohamed',t1loc:'Alexandria',t2name:'Fatima Ali',t2loc:'Alexandria',t3name:'Mohamed Hussein',t3loc:'Alexandria',
      ctTitle:'We Are Here to <span>Help You</span>',
      ctDesc:'Contact us now and book your blessed journey. Our team is ready to answer all your inquiries and facilitate your travel arrangements, by Allah\'s will.',
      waBtnText:'Contact via WhatsApp',
      popupTitle:'Book Your Trip Now',popupSub:'Enter your details and we will contact you shortly',
      popupLabelName:'Client Name',popupLabelPhone:'Phone Number',popupLabelPkg:'Selected Package',
      popupSubmitBtn:'Send Request via WhatsApp',
      fl1:'Home',fl2:'About',fl3:'Packages',fl4:'Gallery',fl5:'Contact',
    }
  };
 
  function toggleLang() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyTranslation(translations[currentLang]);
  }
 
  function applyTranslation(t) {
    const html = document.documentElement;
    html.lang = t.lang;
    html.dir = t.dir;
 
    const ids = [
      'langBtn','langBtnMobile','logoMain','logoSub',
      'nav1','nav2','nav3','nav4','nav5','nav6','nav7',
      'mnav1','mnav2','mnav3','mnav4','mnav5','mnav6','mnav7',
      'heroBadge','heroSubtitle','heroDesc','scrollHint',
      'stat1','stat2','stat3',
      'af1','af2','af3','af4',
      'pkgCurr1','pkgCurr2','pkgCurr3',
      'pkgDetail1','pkgDetail2','pkgDetail3',
      'featBadge','pkgFeatTitle',
      'pf1','pf2','pf3','pf4',
      'galTitle','testiTitle',
      't1text','t2text','t3text',
      't1name','t1loc','t2name','t2loc','t3name','t3loc',
      'ctDesc','waBtnText',
      'popupTitle','popupSub','popupLabelName','popupLabelPhone','popupLabelPkg','popupSubmitBtn',
      'fl1','fl2','fl3','fl4','fl5',
    ];
 
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el && t[id] !== undefined) el.textContent = t[id];
    });
 
    // innerHTML for elements with spans
    const htmlIds = ['heroTitle','aboutTitle','pkgTitle','pkgName1','pkgName2','pkgName3','celebTitle','ctTitle'];
    htmlIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && t[id] !== undefined) el.innerHTML = t[id];
    });
 
    // hero btn
    const hb1 = document.getElementById('heroBtn1');
    if (hb1) hb1.innerHTML = `<i class="fas fa-kaaba" style="margin-${t.dir==='rtl'?'left':'right'}:8px"></i> ${t.heroBtn1}`;
    const hb2 = document.getElementById('heroBtn2');
    if (hb2) hb2.textContent = t.heroBtn2;
 
    // Update popup select options
    const sel = document.getElementById('clientPkg');
    if (sel) {
      sel.innerHTML = `
        <option value="${t.pkgName1} - 1000 ${t.pkgCurr1}">${t.pkgName1} — 1000 ${t.pkgCurr1}</option>
        <option value="${t.pkgName2} - 2000 ${t.pkgCurr2}">${t.pkgName2} — 2000 ${t.pkgCurr2}</option>
        <option value="${t.pkgName3} - 30000 ${t.pkgCurr3}">${t.pkgName3} — 30000 ${t.pkgCurr3}</option>
      `;
    }
 
    // clientName placeholder
    const inp = document.getElementById('clientName');
    if (inp) inp.placeholder = t.lang === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name';
    const inp2 = document.getElementById('clientPhone');
    if (inp2) inp2.placeholder = t.lang === 'ar' ? '01xxxxxxxxx' : '01xxxxxxxxx';
  }
