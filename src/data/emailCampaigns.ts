export interface EmailCampaign {
  id: string;
  title: string;
  description: string;
  recipients: string[];
  cc?: string[];
  subject: string;
  /**
   * Optional deadline in YYYY-MM-DD format (treated as end-of-day 11:59 PM local time)
   * or full ISO timestamp (e.g. "2026-12-15T17:00:00-05:00").
   * Campaigns are sorted with the soonest deadline first, and automatically hidden once passed.
   */
  deadline?: string;
  placeholder?: string;
}

/**
 * Active email campaigns displayed on the /gmail-generator page.
 * Add, edit, or remove campaigns below to update the page.
 */
export const EMAIL_CAMPAIGNS: EmailCampaign[] = [
  {
    id: 'parking-minimum-council-vote',
    title: 'City Council Vote: Remove Parking Minimums in Boston',
    description:
      'The Boston City Council is voting on a proposal to remove parking minimums for new residential developments in the city. This change would allow developers and property owners to build more housing without being required to include an arbitrary number of parking spaces, which is a factor in driving up costs and limiting housing availability. Send a quick note to our at-large City Councilors urging them to support this proposal and help make Boston more affordable and accessible. If you want, add your district councilor as well!',
    recipients: [
      'Ruthzee.Louijeune@boston.gov',
      'Julia.Mejia@boston.gov',
      'Erin.Murphy@boston.gov',
      'Henry.Santana@boston.gov',
    ],
    cc: [''],
    subject: 'Support Eliminating Parking Minimums in Boston',
    deadline: '2026-11-17',
    placeholder: 'Write your email here... Share where you live why this issue matters to you.',
  },
  {
    id: 'jackson-mann-feedback',
    title: 'Jackson Mann Housing Proposal Feedback',
    description:
      'The City of Boston is accepting public feedback on their latest proposal for the Jackson Mann Community Center that includes housing on one of the parcels on site. The city needs more feedback from residents who support this plan to ensure they can move forward and get this project built. Send a quick note to the city to let them know you support this proposal and want to see it move forward!',
    recipients: ['francis.mendozamccarthy@boston.gov'],
    cc: ['liz.breadon@boston.gov'],
    subject: 'Support the Jackson Mann Community Center + Housing Proposal',
    deadline: '2026-11-17',
    placeholder: 'Write your email here... Share where you live why this issue matters to you.',
  },
];
