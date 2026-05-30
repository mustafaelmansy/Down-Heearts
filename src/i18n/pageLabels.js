import { translations } from './translations'
import { homeContent } from './homeContent'
import { geneticsContent } from './geneticsContent'
import { medicalContent } from './medicalContent'
import { medicationContent } from './medicationContent'
import { drugInteractionsContent } from './drugInteractionsContent'
import { tipsContent } from './tipsContent'
import { awarenessContent } from './awarenessContent'
import { referencesContent } from './referencesContent'

/** @param {'en' | 'ar'} language */
export function getPageLabels(language) {
  return {
    ...translations[language],
    ...homeContent[language],
    ...geneticsContent[language],
    ...medicalContent[language],
    ...medicationContent[language],
    ...drugInteractionsContent[language],
    ...tipsContent[language],
    ...awarenessContent[language],
    ...referencesContent[language],
  }
}
