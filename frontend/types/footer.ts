interface FooterSection {
  company_info: {
    title: string;
    field1_label: string;
    field1_url: string | null;
    field2_label: string;
    field2_url: string | null;
    field3_label: string;
    field3_url: string | null;
    field4_label: string;
    field4_url: string | null;
  };
}

export interface Footer {
  company_info: FooterSection;
  categories_links: FooterSection;
  support_links: FooterSection;
}
