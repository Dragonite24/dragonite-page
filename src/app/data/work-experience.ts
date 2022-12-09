type JobsT = {
  company: string
  title: string
  period: string
  did: string[]
}

export const JOBS: JobsT[] = [
  {
    company: 'LANBilling',
    title: 'Web-developer (Ext.JS, PHP)',
    period: '2020 - 2021',
    did: [
      'Developed and maintained the administrative interface of the billing system for charging Internet, telephony, television and other services. Implemented new functionality and supported the old one, bugfixes, layout;',
      'Stack: JS (Ext.JS), PHP (yii2), linux.'
    ]
  },
  {
    company: 'CodeItUp',
    title: 'React-Developer (TypeScript, Redux)',
    period: '2021 - still',
    did: [
      'React-developer, outsource/outstaff development. I am developing new products, refining old ones (landing pages, federal projects, customer sites);',
      'Stack: TypeScript (ReactJS), SASS (SCSS), styled-components (atomic design methodology), BEM, redux (RTX-Query, redux-saga, redux-thunk), redux-form, formik, prettier'
    ]
  }
]
