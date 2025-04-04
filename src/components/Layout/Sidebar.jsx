'use client'
import React, { useState } from "react";
import "./styles.css";
import logo1 from "@/assets/logo1.svg";
import logo2 from "@/assets/logo2.svg";
import logo3 from "@/assets/logo3.svg";
import arrow from "@/assets/arrow.svg";
import avatar from "@/assets/person.svg";
import home from "@/assets/home.svg";
import channel from "@/assets/channel.svg";
import creative from "@/assets/creative.svg";
import plusIcon from "@/assets/plusIcon.svg";
import dropdown from "@/assets/dropdown.svg";
import downArrow from "@/assets/downArrow.svg";
import help from "@/assets/help.svg";
import setting from "@/assets/setting.svg";
import Image from "next/image";

function Sidebar() {
  const [show, setShow] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Image src={logo1} alt="Logo1" className="sidebar-header-logo" />
        <div className="brand-select">
          <div className="inner_b_container">
            <div>
              <span className="b_span">SS</span>
              Test_brand
            </div>
            <Image src={dropdown} alt="dropdown" className="dropdown" />
          </div>
        </div>
        <Image src={arrow} alt="arrow" className="arrow" />
      </div>
      <div className="sidebar-container">
        <div className="sidebar-container1">
          <div>
            <button className="brand-logo">
              <Image src={logo2} alt="Logo2" className="logo" />
            </button>
            <button className="brand-logo">
              <Image src={logo3} alt="Logo3" className="log" />
            </button>
            <button className="brand-logo">
              <Image src={plusIcon} alt="plusIcon" className="logo" />
            </button>
          </div>
          <div className="avatar-container">
            <div className="avatar-logo">
              <Image src={avatar} alt="Logo3" className="avatarImg" />
            </div>
            <button className="person-logo">
              <p className="">SS</p>
            </button>
          </div>
        </div>
        <div className="sidebar-container2">
          <div className="menu-items">
            <div className="menu-item">
              <Image src={home} alt="home" className="menu-icon" />
              <span>Overview</span>
            </div>
            <div className="menu-channel-item" onClick={() => setShow(!show)}>
              <div className="menu-item-content">
                <Image src={channel} alt="channel" className="menu-icon" />
                <div>Channels</div>
              </div>
              <div>
                <Image src={downArrow} alt="channel" className="menu-icon" />
              </div>
              {/* Submenu, can be another component or hidden div */}
            </div>
            {show && (
              <div className="inner-menu-items">
                <div className="menu-item1">
                  <span>Meta Ads</span>
                </div>
                <div className="menu-item1">
                  <span>Google Ads</span>
                </div>
                <div className="menu-item1 active">
                  <span>Quick Commerce</span>
                </div>
              </div>
            )}
            <div className="menu-item">
              <Image src={creative} alt="channel" className="menu-icon" />
              <span>Creatives</span>
            </div>
          </div>
            <div className="sidebar-footer">
              <div className="menu-item">
                <Image src={help} alt="channel" className="menu-icon" />
                <span> Help</span>
              </div>
              <div className="menu-item">
                <Image src={setting} alt="channel" className="menu-icon" />
                <span> Settings</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
