/** @typedef {'home' | 'genetics' | 'medical' | 'medication' | 'interactions' | 'tips' | 'awareness' | 'references' | 'contact'} Page */
/** @typedef {'en' | 'ar'} Language */

export const translations = {
  en: {
    home: 'Home',
    genetics: 'Genetics',
    medical: 'Medical',
    medication: 'Pharmaceuticals & Dosing',
    interactions: 'Drug Interactions',
    tips: 'Life Tips',
    awareness: 'Awareness',
    references: 'References',
    contact: 'Contact Us',
    introLabel: 'Introduction',
    introTitle: "Understanding Down's Syndrome",
    whoWeAreLabel: 'Who We Are',
    whoWeAreTitle: 'Downs Hearts',
    whoWeAreText:
      'We are a community dedicated to awareness, support, and love for children and families affected by Down syndrome. This website offers clear, compassionate information to help you understand the condition and navigate care with confidence.',
    whoTheyAreTitle: "Who're Down's syndrome?",
    whoTheyArePoints: [
      'Down syndrome is a naturally occurring genetic condition caused by having an extra copy of chromosome 21. Instead of the typical 46 chromosomes, a person with Down syndrome has 47. It is one of the most common genetic conditions in the world, occurring naturally across all races, ethnicities, and socioeconomic backgrounds.',
      'The condition is named after Dr. John Langdon Down, the British physician who first comprehensively described it in 1866.',
    ],
    whyTitle: 'Why Does It Happen?',
    whyPoints: [
      'Our bodies are built from cells, and inside those cells are chromosomes—the genetic "instruction manuals" that tell our bodies how to grow. Typically, a baby inherits 23 chromosomes from their mother and 23 from their father, for a total of 46.',
      'In Down syndrome, a random error occurs during the very early development of the egg or sperm, resulting in an extra, third copy of chromosome 21. This is why the condition is also medically known as Trisomy 21 (tri meaning three, somy meaning chromosomes).',
      'This is a completely random genetic event; it is not caused by anything the parents did or didn\'t do before or during pregnancy.',
    ],
  },
  ar: {
    home: 'الرئيسية',
    genetics: 'الوراثة',
    medical: 'الطبي',
    medication: 'الأدوية والجرعات',
    interactions: 'تفاعلات الأدوية',
    tips: 'نصائح الحياة',
    awareness: 'التوعية',
    references: 'المراجع',
    contact: 'تواصل معنا',
    introLabel: 'مقدمة',
    introTitle: 'فهم متلازمة داون',
    whoWeAreLabel: 'من نحن',
    whoWeAreTitle: 'قلوب داون',
    whoWeAreText:
      'نحن مجتمع مخصص للتوعية والدعم والحب للأطفال والعائلات المتأثرة بمتلازمة داون. يقدم هذا الموقع معلومات واضحة ومتعاطفة لمساعدتك على فهم الحالة والتعامل مع الرعاية بثقة.',
    whoTheyAreTitle: 'ما هي متلازمة داون؟',
    whoTheyArePoints: [
      'متلازمة داون هي حالة وراثية تحدث بشكل طبيعي بسبب وجود نسخة إضافية من الكروموسوم 21. بدلاً من 46 كروموسوماً المعتادة، يمتلك الشخص 47. وهي من أكثر الحالات الوراثية شيوعاً في العالم، وتحدث بشكل طبيعي بين جميع الأعراق والخلفيات الاجتماعية.',
      'سُميت الحالة على اسم الدكتور جون لانغدون داون، الطبيب البريطاني الذي وصفها بشكل شامل لأول مرة عام 1866.',
    ],
    whyTitle: 'لماذا تحدث؟',
    whyPoints: [
      'أجسامنا مبنية من خلايا، وداخل هذه الخلايا كروموسومات — "دليل التعليمات" الوراثي الذي يوجه نمو الجسم. عادةً يرث الطفل 23 كروموسوماً من الأم و23 من الأب، أي 46 في المجموع.',
      'في متلازمة داون، يحدث خطأ عشوائي في مرحلة مبكرة جداً من تكوين البويضة أو الحيوان المنوي، فينتج نسخة ثالثة إضافية من الكروموسوم 21. لذلك تُعرف طبياً باسم ثلاثية 21 (ثلاث نسخ من الكروموسوم 21).',
      'هذا حدث وراثي عشوائي بالكامل؛ ولا ينتج عن أي شيء فعله الوالدان أو لم يفعلوه قبل أو أثناء الحمل.',
    ],
  },
}

export const PAGE_PATHS = {
  home: '/',
  genetics: '/genetics',
  medical: '/medical',
  medication: '/medication',
  interactions: '/drug-interactions',
  tips: '/tips',
  awareness: '/awareness',
  references: '/references',
  contact: '/contact',
}

/** @param {string} pathname */
export function pathnameToPage(pathname) {
  const entry = Object.entries(PAGE_PATHS).find(([, path]) => path === pathname)
  return entry ? /** @type {Page} */ (entry[0]) : 'home'
}
