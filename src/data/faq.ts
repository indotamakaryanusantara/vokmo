export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaq: FaqItem[] = [
  {
    question: "Mengapa email broadcast saya sering masuk spam?",
    answer:
      "Biasanya kombinasi reputasi domain/IP, alignment header, konten, dan throttling. Kami audit DNS, autentikasi, serta perilaku SMTP lalu merancang warmup dan segmentasi agar sinyal reputasi membaik.",
  },
  {
    question: "Apakah VOKMO mengelola server MailWizz sendiri?",
    answer:
      "Ya. Kami optimasi stack MailWizz pada AlmaLinux/Plesk, queue workers, bounce handling, dan integrasi SMTP relay agar kampanye besar tetap stabil tanpa overload node.",
  },
  {
    question: "Berapa lama implementasi DMARC penuh?",
    answer:
      "Tergantung kompleksitas subdomain dan volume pengirim. Umumnya dimulai dari monitoring p=none, analisis aggregate reports, lalu transisi bertahap ke quarantine/reject dengan mitigasi false positive.",
  },
];
