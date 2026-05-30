export const drugInteractionsContent = {
  en: {
    pageTitle: 'Drug Interactions',
    pageSubtitle:
      'Reference guide for patients with Down syndrome and co-morbidities — based on clinical pharmacology data.',

    subMajor: 'Major / Dangerous',
    subModerate: 'Moderate',
    subMinor: 'Minor / Absorption',

    colDrug1: 'Drug 1',
    colDrug2: 'Drug 2',
    colSeverity: 'Severity',
    colEffect: 'Clinical Effect / Mechanism',

    sectionMajor: 'Major / Dangerous Interactions (Avoid or Monitor Strictly)',
    sectionModerate: 'Moderate Interactions (Monitor / Adjust Dose)',
    sectionMinor: 'Minor / Absorption Interactions (Separate Administration)',

    severityMajor: 'Major',
    severityModerate: 'Moderate',
    severityMinor: 'Minor',

    disclaimer:
      'This document is for clinical reference based on standard pharmacological databases. Always consult a healthcare professional before altering medication regimens.',

    majorRows: [
      {
        drug1: 'Methotrexate',
        drug2: 'Amoxicillin / Amoxicillin-clavulanate',
        severity: 'Major',
        effect:
          'Decreased renal clearance of methotrexate → severe methotrexate toxicity (bone marrow suppression).',
      },
      {
        drug1: 'Furosemide',
        drug2: 'Digoxin',
        severity: 'Major',
        effect:
          'Furosemide causes hypokalemia → increased risk of fatal digoxin toxicity (arrhythmia).',
      },
      {
        drug1: 'Methotrexate',
        drug2: 'Furosemide',
        severity: 'Major',
        effect: 'Competition for renal secretion → increased methotrexate levels and toxicity.',
      },
      {
        drug1: 'Propranolol',
        drug2: 'Salbutamol',
        severity: 'Major',
        effect:
          'Propranolol (beta-blocker) blocks salbutamol (beta-agonist) → severe bronchospasm (antagonistic effect).',
      },
    ],

    moderateRows: [
      {
        drug1: 'Sildenafil',
        drug2: 'Propranolol',
        severity: 'Moderate',
        effect: 'Additive hypotensive effect → severe drop in blood pressure, dizziness, or fainting.',
      },
      {
        drug1: 'Fluconazole',
        drug2: 'Digoxin / Propranolol',
        severity: 'Moderate',
        effect:
          'Fluconazole inhibits CYP enzymes → increases levels and toxicity risk of digoxin/propranolol.',
      },
      {
        drug1: 'Furosemide',
        drug2: 'Metformin',
        severity: 'Moderate',
        effect:
          'Dehydration/renal impairment by furosemide → increased risk of lactic acidosis from metformin.',
      },
    ],

    minorRows: [
      {
        drug1: 'Omeprazole / Famotidine',
        drug2: 'Ferrous sulfate',
        severity: 'Minor',
        effect: 'Increased gastric pH reduces iron absorption → decreased iron efficacy.',
      },
      {
        drug1: 'Calcium carbonate',
        drug2: 'Ferrous sulfate',
        severity: 'Minor',
        effect:
          'Calcium competes with iron for absorption → decreased iron efficacy (separate by at least 2 hours).',
      },
      {
        drug1: 'Omeprazole / Famotidine',
        drug2: 'Fluconazole',
        severity: 'Minor',
        effect: 'Decreased stomach acidity can lower fluconazole absorption.',
      },
    ],
  },

  ar: {
    pageTitle: 'تفاعلات الأدوية',
    pageSubtitle:
      'دليل مرجعي لمرضى متلازمة داون والأمراض المصاحبة — وفق بيانات علم الأدوية السريرية.',

    subMajor: 'خطيرة / تجنب',
    subModerate: 'متوسطة',
    subMinor: 'طفيفة / امتصاص',

    colDrug1: 'الدواء 1',
    colDrug2: 'الدواء 2',
    colSeverity: 'الشدة',
    colEffect: 'التأثير السريري / الآلية',

    sectionMajor: 'تفاعلات خطيرة (تجنب أو مراقبة صارمة)',
    sectionModerate: 'تفاعلات متوسطة (مراقبة / تعديل جرعة)',
    sectionMinor: 'تفاعلات طفيفة / امتصاص (فصل مواعيد الإعطاء)',

    severityMajor: 'خطير',
    severityModerate: 'متوسط',
    severityMinor: 'طفيف',

    disclaimer:
      'هذا المستند للمرجع السريري وفق قواعد بيانات دوائية معيارية. استشر دائماً مختصاً رعاية صحية قبل تغيير أي نظام دوائي.',

    majorRows: [
      {
        drug1: 'ميثوتريكسات',
        drug2: 'أموكسيسيلين / أموكسيسيلين-كلافيولانات',
        severity: 'خطير',
        effect: 'انخفاض إفراز كلوي للميثوتريكسات → سمية شديدة (قمع نخاع العظم).',
      },
      {
        drug1: 'فوروسيميد',
        drug2: 'ديجوكسين',
        severity: 'خطير',
        effect: 'نقص بوتاسيوم → زيادة خطر سمية ديجوكسين القاتلة (اضطراب نظم).',
      },
      {
        drug1: 'ميثوتريكسات',
        drug2: 'فوروسيميد',
        severity: 'خطير',
        effect: 'تنافس على الإفراز الكلوي → ارتفاع مستويات الميثوتريكسات والسمية.',
      },
      {
        drug1: 'بروبرانولول',
        drug2: 'سالبوتامول',
        severity: 'خطير',
        effect: 'حاصر بيتا يعاكس ناهض بيتا → تشنج قصبي شديد.',
      },
    ],

    moderateRows: [
      {
        drug1: 'سيلدينافيل',
        drug2: 'بروبرانولول',
        severity: 'متوسط',
        effect: 'انخفاض ضغط إضافي → دوخة أو إغماء.',
      },
      {
        drug1: 'فلوكونازول',
        drug2: 'ديجوكسين / بروبرانولول',
        severity: 'متوسط',
        effect: 'تثبيط إنزيمات CYP → زيادة مستويات وسمية ديجوكسين/بروبرانولول.',
      },
      {
        drug1: 'فوروسيميد',
        drug2: 'ميتفورمين',
        severity: 'متوسط',
        effect: 'جفاف/قصور كلوي → زيادة خطر الحماض اللبني من الميتفورمين.',
      },
    ],

    minorRows: [
      {
        drug1: 'أوميبرازول / فاموتيدين',
        drug2: 'كبريتات الحديدوز',
        severity: 'طفيف',
        effect: 'ارتفاع pH المعدة يقلل امتصاص الحديد.',
      },
      {
        drug1: 'كربونات الكالسيوم',
        drug2: 'كبريتات الحديدوز',
        severity: 'طفيف',
        effect: 'تنافس الكالسيوم مع الحديد — افصل ساعتين على الأقل.',
      },
      {
        drug1: 'أوميبرازول / فاموتيدين',
        drug2: 'فلوكونازول',
        severity: 'طفيف',
        effect: 'انخفاض حموضة المعدة يقلل امتصاص الفلوكونازول.',
      },
    ],
  },
}
