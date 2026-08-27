export type TeamMember = {
  name: string;
  title: string;
  chapter: "US" | "India";
};

export const team: TeamMember[] = [
  { name: "Alka Madan", title: "Founder", chapter: "US" },
  { name: "Nancy Tobesman", title: "Vice President", chapter: "US" },
  { name: "Ebun Fapunda", title: "Community Outreach Executive", chapter: "US" },
  { name: "JD Sanders", title: "HR Consultant", chapter: "US" },
  { name: "Susmita Bhattacharya", title: "Advisory Board", chapter: "US" },
  { name: "Hubert Rampersad", title: "Advisory Board", chapter: "US" },
  { name: "Mark L. Wolf", title: "Advisory Board", chapter: "US" },
  { name: "Usha Gauba", title: "Community Outreach Director", chapter: "India" },
  { name: "Disha Raicha", title: "Board of Director", chapter: "India" },
  { name: "Chinmay Patkar", title: "Head of Social Media", chapter: "India" },
];
