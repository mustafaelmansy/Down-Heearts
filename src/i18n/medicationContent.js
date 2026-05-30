export const medicationContent = {
  en: {
    pageTitle: 'Pharmaceuticals & Dose Adjustment',
    pageSubtitle:
      'Reference guide for common medications in Down syndrome — usual doses and adjustments for renal, hepatic, and cardiac considerations.',
    disclaimer:
      'This information is for education only. Always follow your physician or pharmacist’s instructions.',

    subDental: 'Dental & Periodontal',
    subCognitive: 'Cognitive & Alzheimer’s',
    subThyroid: 'Thyroid Disorders',
    subHeart: 'Heart & Pulmonary HTN',
    subRespiratory: 'Respiratory',
    subDermatologic: 'Dermatologic',
    subObesity: 'Obesity & Metabolic',
    subGi: 'Gastrointestinal',
    subVitamins: 'Vitamin D & Iron',

    colDrug: 'Drug',
    colUsualDose: 'Usual Dose',
    colAdjustment: 'Dose Adjustment',

    sectionDental: 'Dental & Periodontal Disease',
    sectionCognitive: "Cognitive Decline, Seizures & Alzheimer's Disease",
    sectionThyroid: 'Hypothyroidism & Hyperthyroidism',
    sectionHeart: 'Heart Conditions & Pulmonary Hypertension',
    sectionRespiratory: 'Respiratory Conditions',
    sectionDermatologic: 'Dermatologic Conditions',
    sectionObesity: 'Obesity & Metabolic Disorders',
    sectionGi: 'Gastrointestinal Disorders',
    sectionVitamins: 'Vitamin D Deficiency & Iron Deficiency',

    dentalRows: [
      {
        drug: 'Chlorhexidine mouthwash',
        usual: 'Children >6 yrs: 10 mL BID\nAdults: 15 mL BID',
        adjustment: 'No major adjustment',
      },
      {
        drug: 'Amoxicillin',
        usual: '20–40 mg/kg/day divided q8h\nAdults: 500 mg q8h',
        adjustment: 'Reduce in severe renal impairment',
      },
      {
        drug: 'Azithromycin',
        usual: '10 mg/kg day 1 then 5 mg/kg/day',
        adjustment: 'Usually no renal adjustment',
      },
    ],

    cognitiveRows: [
      {
        drug: 'Levetiracetam',
        usual: '10 mg/kg BID → max 60 mg/kg/day',
        adjustment: 'Reduce in renal impairment',
      },
      {
        drug: 'Valproate',
        usual: '10–15 mg/kg/day',
        adjustment: 'Avoid / severe caution in liver disease',
      },
      {
        drug: 'Donepezil',
        usual: '5–10 mg/day',
        adjustment: 'No significant renal adjustment',
      },
      {
        drug: 'Memantine',
        usual: '5–20 mg/day',
        adjustment: 'Reduce if CrCl <30 mL/min',
      },
    ],

    thyroidRows: [
      {
        drug: 'Levothyroxine',
        usual: 'Neonates: 10–15 mcg/kg/day\nAdults: 1.6 mcg/kg/day',
        adjustment: 'Start lower in elderly / cardiac disease',
      },
      {
        drug: 'Methimazole',
        usual: '0.2–0.5 mg/kg/day',
        adjustment: 'Use cautiously in hepatic impairment',
      },
      {
        drug: 'Propranolol',
        usual: '0.5–2 mg/kg/day',
        adjustment: 'Reduce in severe liver disease',
      },
    ],

    heartRows: [
      {
        drug: 'Furosemide',
        usual: '1–2 mg/kg/dose',
        adjustment: 'Monitor renal function and electrolytes',
      },
      {
        drug: 'Spironolactone',
        usual: '1–3 mg/kg/day',
        adjustment: 'Avoid in hyperkalemia',
      },
      {
        drug: 'Digoxin',
        usual: '5–10 mcg/kg/day maintenance',
        adjustment: 'Reduce dose in renal impairment',
      },
      {
        drug: 'Sildenafil',
        usual: '0.5–2 mg/kg q6h',
        adjustment: 'Use cautiously in hepatic impairment',
      },
    ],

    respiratoryRows: [
      {
        drug: 'Amoxicillin-clavulanate',
        usual: '45–90 mg/kg/day',
        adjustment: 'Adjust in renal impairment',
      },
      {
        drug: 'Ceftriaxone',
        usual: '50–100 mg/kg/day',
        adjustment: 'Usually no adjustment unless severe renal + hepatic failure',
      },
      {
        drug: 'Salbutamol',
        usual: '0.15 mg/kg nebulized',
        adjustment: 'Use cautiously in cardiac disease',
      },
      {
        drug: 'Budesonide',
        usual: '0.25–1 mg/day nebulized',
        adjustment: 'No major adjustment',
      },
    ],

    dermatologicRows: [
      {
        drug: 'Ketoconazole shampoo',
        usual: 'Twice weekly',
        adjustment: 'No major adjustment',
      },
      {
        drug: 'Hydrocortisone cream',
        usual: '1–2 times daily',
        adjustment: 'Avoid prolonged use',
      },
      {
        drug: 'Fluconazole',
        usual: '3–6 mg/kg/day',
        adjustment: 'Reduce 50% if CrCl <50',
      },
      {
        drug: 'Methotrexate',
        usual: '7.5–25 mg weekly',
        adjustment: 'Avoid in severe renal impairment',
      },
    ],

    obesityRows: [
      {
        drug: 'Orlistat',
        usual: '120 mg TID',
        adjustment: 'No major renal adjustment',
      },
      {
        drug: 'Metformin',
        usual: '500 mg daily → max 2000 mg/day',
        adjustment: 'Contraindicated if eGFR <30',
      },
    ],

    giRows: [
      {
        drug: 'Omeprazole',
        usual: '0.7–3.5 mg/kg/day',
        adjustment: 'No major adjustment',
      },
      {
        drug: 'Famotidine',
        usual: '0.5 mg/kg BID',
        adjustment: 'Reduce 50% if CrCl <50',
      },
      {
        drug: 'Lactulose',
        usual: '1–3 mL/kg/day',
        adjustment: 'No major adjustment',
      },
      {
        drug: 'PEG',
        usual: '0.4–1 g/kg/day',
        adjustment: 'No major adjustment',
      },
    ],

    vitaminRows: [
      {
        drug: 'Vitamin D3',
        usual: '1000–2000 IU/day',
        adjustment: 'Monitor calcium levels',
      },
      {
        drug: 'Calcium carbonate',
        usual: '500–1200 mg/day',
        adjustment: 'Adjust in renal disease',
      },
      {
        drug: 'Ferrous sulfate',
        usual: '3–6 mg/kg/day elemental iron',
        adjustment: 'Monitor GI side effects',
      },
    ],
  },

  ar: {
    pageTitle: 'الأدوية وتعديل الجرعات',
    pageSubtitle:
      'دليل مرجعي للأدوية الشائعة في متلازمة داون — الجرعات المعتادة والتعديلات حسب الكلى والكبد والقلب.',
    disclaimer: 'هذه المعلومات للتوعية فقط. اتبع دائماً تعليمات الطبيب أو الصيدلي.',

    subDental: 'الأسنان واللثة',
    subCognitive: 'المعرفي وآلزهايمر',
    subThyroid: 'اضطرابات الغدة الدرقية',
    subHeart: 'القلب وارتفاع ضغط الرئة',
    subRespiratory: 'التنفسي',
    subDermatologic: 'الجلدي',
    subObesity: 'السمنة والأيض',
    subGi: 'الهضمي',
    subVitamins: 'فيتامين D والحديد',

    colDrug: 'الدواء',
    colUsualDose: 'الجرعة المعتادة',
    colAdjustment: 'تعديل الجرعة',

    sectionDental: 'أمراض الأسنان واللثة',
    sectionCognitive: 'التراجع المعرفي والنوبات وآلزهايمر',
    sectionThyroid: 'قصور وفرط الغدة الدرقية',
    sectionHeart: 'أمراض القلب وارتفاع ضغط الرئة',
    sectionRespiratory: 'الحالات التنفسية',
    sectionDermatologic: 'الحالات الجلدية',
    sectionObesity: 'السمنة واضطرابات الأيض',
    sectionGi: 'اضطرابات الجهاز الهضمي',
    sectionVitamins: 'نقص فيتامين D والحديد',

    dentalRows: [
      {
        drug: 'غسول كلورهيكسيدين',
        usual: 'أطفال >6 سنوات: 10 مل مرتين يومياً\nبالغون: 15 مل مرتين يومياً',
        adjustment: 'لا تعديل جوهري',
      },
      {
        drug: 'أموكسيسيلين',
        usual: '20–40 مجم/كجم/يوم مقسمة كل 8 ساعات\nبالغون: 500 مجم كل 8 ساعات',
        adjustment: 'تقليل عند قصور كلوي شديد',
      },
      {
        drug: 'أزيثروميسين',
        usual: '10 مجم/كجم اليوم الأول ثم 5 مجم/كجم/يوم',
        adjustment: 'عادة لا تعديل كلوي',
      },
    ],

    cognitiveRows: [
      {
        drug: 'ليفيتيراسيتام',
        usual: '10 مجم/كجم مرتين يومياً — حد أقصى 60 مجم/كجم/يوم',
        adjustment: 'تقليل عند قصور كلوي',
      },
      {
        drug: 'فالبروات',
        usual: '10–15 مجم/كجم/يوم',
        adjustment: 'تجنب / حذر شديد في مرض كبد',
      },
      {
        drug: 'دونيبيزيل',
        usual: '5–10 مجم/يوم',
        adjustment: 'لا تعديل كلوي مهم',
      },
      {
        drug: 'ميمانتين',
        usual: '5–20 مجم/يوم',
        adjustment: 'تقليل إذا CrCl <30 مل/دقيقة',
      },
    ],

    thyroidRows: [
      {
        drug: 'ليفوثيروكسين',
        usual: 'حديثو الولادة: 10–15 ميكروغرام/كجم/يوم\nبالغون: 1.6 ميكروغرام/كجم/يوم',
        adjustment: 'بداية أقل لدى كبار السن / مرض قلب',
      },
      {
        drug: 'ميثيمازول',
        usual: '0.2–0.5 مجم/كجم/يوم',
        adjustment: 'بحذر عند قصور كبد',
      },
      {
        drug: 'بروبرانولول',
        usual: '0.5–2 مجم/كجم/يوم',
        adjustment: 'تقليل عند مرض كبد شديد',
      },
    ],

    heartRows: [
      {
        drug: 'فوروسيميد',
        usual: '1–2 مجم/كجم/جرعة',
        adjustment: 'مراقبة وظائف الكلى والأملاح',
      },
      {
        drug: 'سبيرونولاكتون',
        usual: '1–3 مجم/كجم/يوم',
        adjustment: 'تجنب عند فرط بوتاسيوم الدم',
      },
      {
        drug: 'ديجوكسين',
        usual: '5–10 ميكروغرام/كجم/يوم صيانة',
        adjustment: 'تقليل الجرعة عند قصور كلوي',
      },
      {
        drug: 'سيلدينافيل',
        usual: '0.5–2 مجم/كجم كل 6 ساعات',
        adjustment: 'بحذر عند قصور كبد',
      },
    ],

    respiratoryRows: [
      {
        drug: 'أموكسيسيلين-كلافيولانات',
        usual: '45–90 مجم/كجم/يوم',
        adjustment: 'تعديل عند قصور كلوي',
      },
      {
        drug: 'سيفترياكسون',
        usual: '50–100 مجم/كجم/يوم',
        adjustment: 'عادة لا تعديل إلا عند فشل كلوي+كبدي شديد',
      },
      {
        drug: 'سالبوتامول',
        usual: '0.15 مجم/كجم استنشاق',
        adjustment: 'بحذر عند مرض قلب',
      },
      {
        drug: 'بوديسونيد',
        usual: '0.25–1 مجم/يوم استنشاق',
        adjustment: 'لا تعديل جوهري',
      },
    ],

    dermatologicRows: [
      {
        drug: 'شامبو كيتوكونازول',
        usual: 'مرتين أسبوعياً',
        adjustment: 'لا تعديل جوهري',
      },
      {
        drug: 'كريم هيدروكورتيزون',
        usual: '1–2 مرة يومياً',
        adjustment: 'تجنب الاستخدام المطول',
      },
      {
        drug: 'فلوكونازول',
        usual: '3–6 مجم/كجم/يوم',
        adjustment: 'تقليل 50% إذا CrCl <50',
      },
      {
        drug: 'ميثوتريكسات',
        usual: '7.5–25 مجم أسبوعياً',
        adjustment: 'تجنب عند قصور كلوي شديد',
      },
    ],

    obesityRows: [
      {
        drug: 'أورليستات',
        usual: '120 مجم 3 مرات يومياً',
        adjustment: 'لا تعديل كلوي جوهري',
      },
      {
        drug: 'ميتفورمين',
        usual: '500 مجم يومياً — حد أقصى 2000 مجم/يوم',
        adjustment: 'موانع إذا eGFR <30',
      },
    ],

    giRows: [
      {
        drug: 'أوميبرازول',
        usual: '0.7–3.5 مجم/كجم/يوم',
        adjustment: 'لا تعديل جوهري',
      },
      {
        drug: 'فاموتيدين',
        usual: '0.5 مجم/كجم مرتين يومياً',
        adjustment: 'تقليل 50% إذا CrCl <50',
      },
      {
        drug: 'لاكتولوز',
        usual: '1–3 مل/كجم/يوم',
        adjustment: 'لا تعديل جوهري',
      },
      {
        drug: 'PEG',
        usual: '0.4–1 جم/كجم/يوم',
        adjustment: 'لا تعديل جوهري',
      },
    ],

    vitaminRows: [
      {
        drug: 'فيتامين D3',
        usual: '1000–2000 وحدة دولية/يوم',
        adjustment: 'مراقبة الكالسيوم',
      },
      {
        drug: 'كربونات الكالسيوم',
        usual: '500–1200 مجم/يوم',
        adjustment: 'تعديل عند مرض كلوي',
      },
      {
        drug: 'كبريتات الحديدوز',
        usual: '3–6 مجم/كجم/يوم حديد عنصري',
        adjustment: 'مراقبة أعراض هضمية',
      },
    ],
  },
}
