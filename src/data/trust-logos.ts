/** Partner & integration marks for the homepage trust strip (SVG under /public). */
export type TrustLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
};

export const trustLogos: TrustLogo[] = [
  { id: "aws", name: "Amazon Web Services", src: "/images/trust/aws.svg", width: 56 },
  { id: "cloudflare", name: "Cloudflare", src: "/images/trust/cloudflare.svg", width: 56 },
  { id: "google", name: "Google", src: "/images/trust/google.svg", width: 56 },
  { id: "gmail", name: "Gmail", src: "/images/trust/gmail.svg", width: 56 },
  { id: "microsoft", name: "Microsoft", src: "/images/trust/microsoft.svg", width: 56 },
  { id: "meta", name: "Meta", src: "/images/trust/meta.svg", width: 56 },
  { id: "sendgrid", name: "SendGrid", src: "/images/trust/sendgrid.svg", width: 56 },
  { id: "mailgun", name: "Mailgun", src: "/images/trust/mailgun.svg", width: 56 },
  { id: "sparkpost", name: "SparkPost", src: "/images/trust/sparkpost.svg", width: 56 },
  { id: "salesforce", name: "Salesforce", src: "/images/trust/salesforce.svg", width: 56 },
  { id: "mailchimp", name: "Mailchimp", src: "/images/trust/mailchimp.svg", width: 56 },
  { id: "hubspot", name: "HubSpot", src: "/images/trust/hubspot.svg", width: 56 },
  { id: "zendesk", name: "Zendesk", src: "/images/trust/zendesk.svg", width: 56 },
  { id: "brevo", name: "Brevo", src: "/images/trust/brevo.svg", width: 56 },
];
