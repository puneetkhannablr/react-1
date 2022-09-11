import React from "react";
import MonitorHeartTwoToneIcon from "@mui/icons-material/MonitorHeartTwoTone";
import AppsTwoToneIcon from "@mui/icons-material/AppsTwoTone";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
export const sidebarlist = [
  {
    title: "home",
    link: "/",
    icon: <MonitorHeartTwoToneIcon></MonitorHeartTwoToneIcon>,
  },
  {
    title: "components",
    link: "/components",
    icon: <AppsTwoToneIcon></AppsTwoToneIcon>,
  },
  {
    title: "stats",
    link: "/stats",
    icon: <QueryStatsRoundedIcon></QueryStatsRoundedIcon>,
  },
];
