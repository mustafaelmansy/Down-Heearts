/** @typedef {{ id: string, labelKey: string }} NavChild */
/** @typedef {{ id: string, labelKey: string, path: string, children?: NavChild[] }} NavItem */

/** @type {NavItem[]} */
export const NAV_ITEMS = [
  {
    id: 'home',
    labelKey: 'home',
    path: '/',
    children: [
      { id: 'who-we-are', labelKey: 'subWhoWeAre' },
      { id: 'who-are-downs', labelKey: 'subWhoDowns' },
      { id: 'why-happens', labelKey: 'subWhy' },
      { id: 'subtypes', labelKey: 'subSubtypes' },
      { id: 'clinical-degrees', labelKey: 'subClinicalDegrees' },
      { id: 'classification', labelKey: 'subClassification' },
      { id: 'cytogenetic', labelKey: 'subCytogenetic' },
      { id: 'functional-degrees', labelKey: 'subFunctional' },
    ],
  },
  {
    id: 'genetics',
    labelKey: 'genetics',
    path: '/genetics',
    children: [
      { id: 'symptoms-shape', labelKey: 'subSymptoms' },
      { id: 'shape-characteristics', labelKey: 'subShape' },
      { id: 'diagnose-overview', labelKey: 'subDiagnose' },
      { id: 'prenatal-screening', labelKey: 'subScreening' },
      { id: 'prenatal-diagnostic', labelKey: 'subDiagnostic' },
      { id: 'postnatal-diagnosis', labelKey: 'subPostnatal' },
      { id: 'identify-type-egypt', labelKey: 'subTypeEgypt' },
    ],
  },
  {
    id: 'questions',
    labelKey: 'questions',
    path: '/questions',
    children: [{ id: 'second-trimester', labelKey: 'subSecondTrimester' }],
  },
  {
    id: 'medical',
    labelKey: 'medical',
    path: '/medical',
    children: [
      { id: 'dentistry', labelKey: 'subDentistry' },
      { id: 'cognitive', labelKey: 'subCognitive' },
      { id: 'endocrine', labelKey: 'subEndocrine' },
      { id: 'heart', labelKey: 'subHeart' },
      { id: 'lung', labelKey: 'subLung' },
      { id: 'dermatoses', labelKey: 'subDermatoses' },
      { id: 'obesity', labelKey: 'subObesity' },
      { id: 'gastrointestinal', labelKey: 'subGastrointestinal' },
    ],
  },
  {
    id: 'medication',
    labelKey: 'medication',
    path: '/medication',
    children: [
      { id: 'dental-periodontal', labelKey: 'subDental' },
      { id: 'cognitive-alzheimer', labelKey: 'subCognitive' },
      { id: 'thyroid', labelKey: 'subThyroid' },
      { id: 'heart-pulmonary', labelKey: 'subHeart' },
      { id: 'respiratory', labelKey: 'subRespiratory' },
      { id: 'dermatologic', labelKey: 'subDermatologic' },
      { id: 'obesity-metabolic', labelKey: 'subObesity' },
      { id: 'gastrointestinal', labelKey: 'subGi' },
      { id: 'vitamins-iron', labelKey: 'subVitamins' },
    ],
  },
  {
    id: 'interactions',
    labelKey: 'interactions',
    path: '/drug-interactions',
    children: [
      { id: 'major-interactions', labelKey: 'subMajor' },
      { id: 'moderate-interactions', labelKey: 'subModerate' },
      { id: 'minor-interactions', labelKey: 'subMinor' },
    ],
  },
  {
    id: 'tips',
    labelKey: 'tips',
    path: '/tips',
    children: [
      { id: 'healthcare', labelKey: 'subHealthcare' },
      { id: 'communication', labelKey: 'subCommunication' },
      { id: 'education', labelKey: 'subEducation' },
      { id: 'physical-activity', labelKey: 'subPhysical' },
      { id: 'routines', labelKey: 'subRoutines' },
      { id: 'independence', labelKey: 'subIndependence' },
      { id: 'emotional-support', labelKey: 'subEmotional' },
      { id: 'positive-communication', labelKey: 'subPositive' },
      { id: 'therapies', labelKey: 'subTherapies' },
      { id: 'employment', labelKey: 'subEmployment' },
      { id: 'conclusion', labelKey: 'subConclusion' },
    ],
  },
  {
    id: 'references',
    labelKey: 'references',
    path: '/references',
    children: [
      { id: 'medical-clinical', labelKey: 'subMedical' },
      { id: 'awareness-community', labelKey: 'subAwareness' },
      { id: 'general-resources', labelKey: 'subGeneral' },
      { id: 'academic-citations', labelKey: 'subCitations' },
    ],
  },
  { id: 'contact', labelKey: 'contact', path: '/contact' },
]

/** @param {string} pathname */
export function getNavItemForPath(pathname) {
  if (pathname === '/') return NAV_ITEMS[0]
  return NAV_ITEMS.find((item) => item.path === pathname)
}
