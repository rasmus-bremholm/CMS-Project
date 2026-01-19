export interface ContactPage {
  id: number;
  locale: "sv" | "en";
  hero: {
    title: string;
    subtitle: string;
  };
  contact_form: {
    title: string;
    name_label: string;
    email_label: string;
    subject_label: string;
    message_label: string;
    button_label: string;
  };
  contact_information: {
    title: string;
    subtitle: string;
  };
}
