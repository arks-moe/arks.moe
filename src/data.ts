export interface Link {
  label: string;
  sub: string;
  url: string;
  target: string;
}

export const links: {
  header: string;
  links: Link[];
}[] = [
  {
    header: "tools",
    links: [
      {
        label: "Global GP Trees",
        url: "/gpid",
        sub: "Schedule for Gold/Rainbow GP Trees",
        target: "_self",
      },
    ],
  },
  {
    header: "official sites",
    links: [
      {
        label: "PSO2:NGS Official Player Site",
        url: "https://pso2.com/players/",
        sub: "Global Official Site",
        target: "_blank",
      },
      {
        label: "PSO2:NGS Official Twitter",
        url: "https://twitter.com/play_pso2",
        sub: "@play_pso2",
        target: "_blank",
      },
      {
        label: "PSO2:NGS Maintenance Updates Twitter",
        url: "https://twitter.com/NGSMaintenance",
        sub: "@NGSMaintenance",
        target: "_blank",
      },
    ],
  },
  {
    header: "guides",
    links: [
      {
        label: "PSO2:NGS Arks-Visiphone Wiki",
        url: "https://pso2na.arks-visiphone.com/wiki/Portal:New_Genesis",
        sub: "English Game Wiki",
        target: "_blank",
      },
      {
        label: "RoboArks NGS Game Guide",
        url: "https://pso2roboarks.jp/ngs/",
        sub: "General Information Hub (Japanese)",
        target: "_blank",
      },
      {
        label: `Mille's Corner`,
        sub: `@mille_pso2's central website for all the funny math she does.`,
        url: "https://mille.arks.moe/",
        target: "_blank",
      },
    ],
  },
  {
    header: "misc",
    links: [
      {
        label: "Arks-Layer Global",
        url: "https://na.arks-layer.com/",
        sub: "PSO2 Tweaker and other tools",
        target: "_blank",
      },
    ],
  },
];
