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
      'Development of new functionality for the administrative interface of the billing system',
      'Support and implementation of functionality in the client part'
    ]
  },
  {
    company: 'CodeItUp',
    title: 'React-Developer (TypeScript, Redux)',
    period: '2021 - still',
    did: [
      'Development of a business card website',
      'Website (marketplace) development',
      'Individual development plan (junior+, middle)'
    ]
  }
]
