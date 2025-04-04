import React from "react";
import "./styles.css";
import downArrow from "@/assets/downArrow.svg";
import chart from "@/assets/chart.svg";
import blinkit from "@/assets/blinkit.svg";
import zepto from "@/assets/zepto.svg";
import instamart from "@/assets/instamart.svg";
import dateIcon from "@/assets/date.svg";
import Image from "next/image";
import { Switch } from "@mui/material";

export default function Header() {
  return (
    <div className="dashboard-header">
      <div className="headings">
        <h1 className="dashboard-title">Quick Commerce</h1>
        <div className="date-range-container">
          <div className="date-range-selector">
            <span className="calendar-icon">
              <Image src={chart} alt="chart" className="date-icon" />
            </span>
            <Switch defaultChecked size="small" />
          </div>
          <div className="date-range-selector">
            <span className="calendar-icon">
              <Image src={dateIcon} alt="dateIcon" className="date-icon" />
            </span>
            <span className="date-range">Aug 01, 024 - Aug 03, 2024</span>
            <Image src={downArrow} alt="downIcon" className="dropdown-icon" />
          </div>
        </div>
      </div>
      <div className="header-brand">
         <div className="brand-btn active">
              <Image src={blinkit} alt="blinkit" className="brand-img" />
              Blinkit
          </div>
         <div className="brand-btn">
              <Image src={zepto} alt="zepto" className="brand-img" />
              Zepto
          </div>
         <div className="brand-btn">
              <Image src={instamart} alt="instamart" className="brand-img" />
              Instamart
          </div>
      </div>
    </div>
  );
}
