export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  key: "wifi" | "cctv" | "fibre" | "smart-home" | "equipment";
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};
