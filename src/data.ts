interface Link {
  label: string;
  sub?: string;
  url: string;
}

export const links: {
  header: string;
  links: Link[];
}[] = [
  {
    header: "Official Sites",
    links: [
      {
        label: "PSO2:NGS Official Player Site",
        url: "https://pso2.com/players/",
        sub: 'Global Official Site'
      },
      {
        label: "PSO2:NGS Official Twitter",
        url: "https://twitter.com/play_pso2",
        sub: '@play_pso2'
      },
      {
        label: "PSO2:NGS Maintenance Updates Twitter",
        url: "https://twitter.com/NGSMaintenance",
        sub: '@NGSMaintenance'
      },

    ],
  },
  {
    header: "Guides",
    links: [
      {
        label: "PSO2:NGS Arks-Visiphone Wiki",
        url: "https://pso2na.arks-visiphone.com/wiki/Portal:New_Genesis",
        sub: "English Game Wiki"
      },
      {
        label: "RoboArks NGS Game Guide",
        url: "https://pso2roboarks.jp/ngs/",
        sub: "General Information Hub (Japanese)",
      },
      {
        label: `Mille's Corner`,
        sub: `@mille_pso2's central website for all the funny math she does.`,
        url: "https://mille.arks.moe/",
      },
    ],
  },
  {
    header: "Misc",
    links: [
      {
        label: "Arks-Layer Global",
        url: "https://na.arks-layer.com/",
        sub: "PSO2 Tweaker and other tools",
      },
    ],
  },
];
