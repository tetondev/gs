import React from 'react'
import PropTypes from 'prop-types'

const Send = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Phone = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M22.001 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.501 19.501 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.111 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.338 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Hamburger = ({ scale, color }) => (
  <svg
    width="35"
    height="14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path stroke={color} strokeWidth="2" d="M0 1h35M0 13h35" />
  </svg>
)
const Email = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 6l-10 7L2 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const Download = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Dalla = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const CloseX = ({ scale, color }) => (
  <svg
    width="22"
    height="22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path stroke={color} strokeWidth="2" d="M1.293 20.293L20.516 1.07M1.293 1.707l19.223 19.224" />
  </svg>
)
const ChevronsRight = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path d="M13 17l5-5-5-5M6 17l5-5-5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ChevronRight = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path d="M9 17.5l5-5-5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const Checkmark = ({ scale, color }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M16.667 5l-9.166 9.167L3.334 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Barchart = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path d="M12 20V10M18 20V4M6 20v-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const Award = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ArrowRight = ({ scale, color }) => (
  <svg
    width="27"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M16.375 18.333L25 10l-8.625-8.333M2 10h23"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Activity = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const Search = ({ scale, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)
const Star = ({ scale, color }) => (
  <svg
    width="11"
    height="11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M8.846 2.346l-6.5 6.5M2.346 2.346l6.5 6.5M10.192 5.596H1M5.596 1v9.192"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Fax = ({ scale, color }) => (
  <svg
    width="22"
    height="27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M19 21.25a.75.75 0 0 0 0 1.5v-1.5zm-16 1.5a.75.75 0 0 0 0-1.5v1.5zm18-7a.75.75 0 0 0 0-1.5v1.5zm-20-1.5a.75.75 0 0 0 0 1.5v-1.5zm2-6.5a.75.75 0 0 0 0 1.5v-1.5zm2 1.5a.75.75 0 0 0 0-1.5v1.5zm2-1.5a.75.75 0 0 0 0 1.5v-1.5zm2 1.5a.75.75 0 0 0 0-1.5v1.5zm-2-6a.75.75 0 0 0 0 1.5v-1.5zm7 1.5a.75.75 0 0 0 0-1.5v1.5zm-7 13.5a.75.75 0 0 0 0 1.5v-1.5zm8 1.5a.75.75 0 0 0 0-1.5v1.5zm-8 .5a.75.75 0 0 0 0 1.5v-1.5zm4 1.5a.75.75 0 0 0 0-1.5v1.5zm-8-12a.75.75 0 0 0 0 1.5v-1.5zm2 1.5a.75.75 0 0 0 0-1.5v1.5zm2-1.5a.75.75 0 0 0 0 1.5v-1.5zm2 1.5a.75.75 0 0 0 0-1.5v1.5zm-6 .5a.75.75 0 0 0 0 1.5v-1.5zm2 1.5a.75.75 0 0 0 0-1.5v1.5zM3.75 20a.75.75 0 0 0-1.5 0h1.5zM3 24h-.75v.75H3V24zm2.75-9a.75.75 0 0 0-1.5 0h1.5zM5 26h-.75v.75H5V26zm14.75-6a.75.75 0 0 0-1.5 0h1.5zM19 24v.75h.75V24H19zM7 11.75a.75.75 0 0 0 0 1.5v-1.5zm2 1.5a.75.75 0 0 0 0-1.5v1.5zm-4 11.5a.75.75 0 0 0 0-1.5v1.5zm12-1.5a.75.75 0 0 0 0 1.5v-1.5zM5 1V.25h-.75V1H5zm-.75 5a.75.75 0 0 0 1.5 0h-1.5zm13.5 9a.75.75 0 0 0-1.5 0h1.5zM17 26v.75h.75V26H17zm-.75-20a.75.75 0 0 0 1.5 0h-1.5zM17 1h.75V.25H17V1zM3 6.75h16v-1.5H3v1.5zm16 0c.686 0 1.25.564 1.25 1.25h1.5A2.756 2.756 0 0 0 19 5.25v1.5zM20.25 8v12h1.5V8h-1.5zm0 12c0 .686-.564 1.25-1.25 1.25v1.5A2.756 2.756 0 0 0 21.75 20h-1.5zM3 21.25c-.686 0-1.25-.564-1.25-1.25H.25A2.756 2.756 0 0 0 3 22.75v-1.5zM1.75 20V8H.25v12h1.5zm0-12c0-.686.564-1.25 1.25-1.25v-1.5A2.756 2.756 0 0 0 .25 8h1.5zM21 14.25H1v1.5h20v-1.5zm-18-5h2v-1.5H3v1.5zm4 0h2v-1.5H7v1.5zm0-4.5h7v-1.5H7v1.5zm0 15h8v-1.5H7v1.5zm0 2h4v-1.5H7v1.5zm-4-10.5h2v-1.5H3v1.5zm4 0h2v-1.5H7v1.5zm-4 2h2v-1.5H3v1.5zM2.25 20v4h1.5v-4h-1.5zm2-5v11h1.5V15h-1.5zm14 5v4h1.5v-4h-1.5zM7 13.25h2v-1.5H7v1.5zm-4 11.5h2v-1.5H3v1.5zm14 0h2v-1.5h-2v1.5zm.25-13.25a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5zM4.25 1v5h1.5V1h-1.5zm12 14v11h1.5V15h-1.5zm1.5-9V1h-1.5v5h1.5zM17 .25H5v1.5h12V.25zM5 26.75h12v-1.5H5v1.5z"
      fill={color}
    />
  </svg>
)
const Logo = ({ scale }) => (
  <svg
    width="372"
    height="59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M127.52 18.8v.68c2.28 0 3.4.2 3.4 5.64 0 3.88-.64 4.56-5.32 4.56-4.48 0-6.72-2.76-6.72-13.76s2.16-13.76 6.72-13.76c4.76 0 7.4 2.04 8.56 8.28h1.36l.28-6.84c-2.48-1.64-6.04-2.12-10.2-2.12-8.64 0-14.04 6.48-14.04 14.44 0 7.96 5.4 14.44 14.04 14.44 4.28 0 7.96-.72 10.44-1.68 0-8.44.52-9.2 2.76-9.2v-.68h-11.28zm44.125-16.96h-12.08v.68c5.52-.04 5.44 6 5.44 6V20.4c0 5.04-3.56 7.56-6.6 7.56-3.8 0-6.72-2.8-6.72-7.52V6.04c0-2.88 2-3.52 3.72-3.52v-.68h-12.72v.68c1.76 0 3.2 1.08 3.2 3.52v14.12c0 6.52 4.48 10.2 9.92 10.2 3.52 0 9.88-1.4 9.88-9.96V8.52s-.08-6.04 5.96-6v-.68zm24.469 24.56s-.36-1.04-10.16-24.56h-.68l-6.92 18.24c-3.92 9.48-4.92 9.16-5.96 9.24V30h9.84v-.68c-6.32.32-3.84-7.2-3.84-7.2h9.48l1.2 2.92s2.08 4.28-1.04 4.28V30h11.44v-.68c-1.04-.08-2 .28-3.36-2.92zm-17.6-4.96l4.36-11.68 4.76 11.68h-9.12zm48.08 3.96c-1.96-7.2-5.16-8.96-7.76-8.68 4.76-.56 7.8-2.36 7.8-7.24 0-6.68-5.6-7.64-13.56-7.64h-9.92v.68c1.76 0 2.88 1.08 2.88 3.56v19.08c0 2.72-1.16 4.16-2.88 4.16V30h11.64v-.68c-1.68 0-2.96-1.44-2.96-4.16v-8h1.88s3.68 0 5 4.12c2.8 8.68 1.76 8.68 8.88 8.72h3.68v-.68c-1.04-.08-3.88-.88-4.68-3.92zm-13.52-8.92h-1.24V2.52h1.24c3.88 0 7.04 0 7.04 6.96s-3.16 7-7.04 7zm45.262 9.92s-.36-1.04-10.16-24.56h-.68l-6.92 18.24c-3.92 9.48-4.92 9.16-5.96 9.24V30h9.84v-.68c-6.32.32-3.84-7.2-3.84-7.2h9.48l1.2 2.92s2.08 4.28-1.04 4.28V30h11.44v-.68c-1.04-.08-2 .28-3.36-2.92zm-17.6-4.96l4.36-11.68 4.76 11.68h-9.12zm44.72-19.6v.68c5.52-.04 5.48 9.48 5.48 9.48v9.72l-16.12-19.88h-9.8v.68c1.04.08 2.2-.36 4.76 2.84l1.56 1.96V19.8s.04 9.52-6 9.52V30h12.16v-.68c-5.52 0-5.48-9.52-5.48-9.52V8.04L289.496 30h2.12V12s-.08-9.52 5.96-9.48v-.68h-12.12zm15.954 0v8.04h.68c.32-7.16 8.8-7.36 8.8-7.36h.76v22.64c0 2.72-1.72 4.16-3.4 4.16V30h12.6v-.68c-1.68 0-3.4-1.44-3.4-4.16V2.52h.76s8.52.2 8.84 7.36h.68V1.84h-26.32zm47.89 0v.68c5.76 0 2.2 8.16 2.2 8.16l-2.68 5.56-5.64-9.2c-2.72-4.6.08-4.56.92-4.56v-.64h-12.76v.64c1 0 2.52.12 4.28 3.16 0 0 1.92 2.92 7.8 13.32v6.2c0 2.72-1.72 4.16-3.4 4.16V30h12.6v-.68c-1.68 0-3.4-1.44-3.4-4.16v-8.24l2.64-5.56c4.48-8.76 8.4-8.84 9.44-8.84v-.68h-12zM124.475 56.175c1.025-1.725.875-4.525-2.5-6.75l-4.275-2.8c-4.025-2.6-1.425-6.175 1.275-6.175 4.25 0 4.95 2.05 5.05 5.1h.3v-4.2s-2.05-1.175-5.35-1.175c-3.25 0-4.475 1.95-4.475 1.95-1.85 3.1.9 5.225 2.7 6.475l4.275 2.825c2.875 2 2.525 6.525-1.825 6.525-4.15 0-5.125-2.05-5.25-5.875h-.25v4.8s1.825 1.35 5.5 1.35c3.8 0 4.825-2.05 4.825-2.05zm18.199-6.85c0 6.875-2.725 8.625-5.675 8.625-2.975 0-5.725-1.75-5.725-8.625 0-6.85 2.75-8.875 5.725-8.875 2.95 0 5.675 2.025 5.675 8.875zm2.2 0c0-4.95-2.375-9.15-7.875-9.15s-7.875 4.2-7.875 9.15c0 4.975 2.375 8.9 7.875 8.9s7.875-3.925 7.875-8.9zm15.414 3.25c-.225 5.15-3.275 5.175-7.3 5.15h-.9v-14.85c0-1.8.525-2.225 1.6-2.225v-.25h-4.95v.25c1.075 0 1.375.55 1.375 2.075V55.15c0 1.7-.1 2.575-1.175 2.575V58h11.6v-5.425h-.25zm11.445 5.65c3.525 0 6.05-2.025 6.025-6.075v-6.475c0-3.55-.1-5 2.925-5V40.4h-5.95v.275c2.65 0 2.75 1.45 2.75 5v6.475c0 3.25-1.825 5.15-4.7 5.15-2.9 0-4.75-1.8-4.75-5v-9.425c0-2.05.75-2.2 1.825-2.2V40.4h-5.375v.275c1.1 0 1.65.375 1.65 2.15v9.25c0 4.075 2.45 6.15 5.6 6.15zM183.098 40.4v4.1h.25c.05-3.825 3.025-3.85 4.175-3.85h1.975v15.225c0 1.625-.6 1.85-1.65 1.85V58h5.2v-.275c-1.05 0-1.65-.225-1.65-1.85V40.65h1.975c.525 0 4.125.025 4.175 3.85h.275v-4.1h-14.725zm17.924 0v.25c1.1 0 1.575.3 1.575 1.85v13c0 1.7-.5 2.225-1.575 2.225V58h5.15v-.275c-1.05 0-1.55-.525-1.55-2.225v-13c0-1.55.475-1.85 1.55-1.85v-.25h-5.15zm22.15 8.925c0 6.875-2.725 8.625-5.675 8.625-2.975 0-5.725-1.75-5.725-8.625 0-6.85 2.75-8.875 5.725-8.875 2.95 0 5.675 2.025 5.675 8.875zm2.2 0c0-4.95-2.375-9.15-7.875-9.15s-7.875 4.2-7.875 9.15c0 4.975 2.375 8.9 7.875 8.9s7.875-3.925 7.875-8.9zm14.814-8.925v.25c3.2 0 3.2 2.425 3.2 5.9v8.55l-11.175-14.7h-3.875v.25c.65.05 1.375-.05 2.975 1.95l1.05 1.375V51.8c0 3.375-.025 5.925-3.55 5.925V58h7.05v-.275c-3.225 0-3.225-2.6-3.225-5.925v-7.5l10.5 13.7h.525V46.55c0-3.475-.075-5.9 3.45-5.9v-.25h-6.925zm20.312 15.775c1.025-1.725.875-4.525-2.5-6.75l-4.275-2.8c-4.025-2.6-1.425-6.175 1.275-6.175 4.25 0 4.95 2.05 5.05 5.1h.3v-4.2s-2.05-1.175-5.35-1.175c-3.25 0-4.475 1.95-4.475 1.95-1.85 3.1.9 5.225 2.7 6.475l4.275 2.825c2.875 2 2.525 6.525-1.825 6.525-4.15 0-5.125-2.05-5.25-5.875h-.25v4.8s1.825 1.35 5.5 1.35c3.8 0 4.825-2.05 4.825-2.05zm23.729-3.6c-.225 5.15-3.275 5.175-7.3 5.15h-.9v-14.85c0-1.8.525-2.225 1.6-2.225v-.25h-4.95v.25c1.075 0 1.375.55 1.375 2.075V55.15c0 1.7-.1 2.575-1.175 2.575V58h11.6v-5.425h-.25zm16.295 0c-.225 5.15-3.275 5.175-7.3 5.15h-.9v-14.85c0-1.8.525-2.225 1.6-2.225v-.25h-4.95v.25c1.075 0 1.375.55 1.375 2.075V55.15c0 1.7-.1 2.575-1.175 2.575V58h11.6v-5.425h-.25zm18.67.275c-.15 4.35-3.725 5.1-5.25 5.1-2.45 0-6.125-.675-6.125-8.75 0-7.9 3.6-8.75 6.125-8.75 1.6 0 4.9.575 5.25 5.075h.275l.25-3.825c-1.575-1.275-3.2-1.525-5.775-1.525-5.1 0-8.675 3.075-8.675 9.025 0 5.85 3.575 9.025 8.675 9.025 2.675 0 3.925-.325 5.775-1.55l-.25-3.825h-.275z"
      fill="#fff"
    />
    <path fill="#0AA0EF" d="M0 0h47v58H0z" />
    <path fill="#E68917" d="M47 0h47v58H47z" />
    <path
      d="M5.345 30.025c0-4.07.77-7.608 2.31-10.615 1.577-3.007 3.832-5.317 6.765-6.93 2.97-1.613 6.472-2.42 10.505-2.42 2.31 0 4.382.238 6.215.715a29.821 29.821 0 0 1 5.39 1.98v6.765h-.22c-1.283-.77-2.878-1.412-4.785-1.925-1.87-.55-3.887-.825-6.05-.825-8.323 0-12.485 4.382-12.485 13.145 0 4.29.99 7.535 2.97 9.735 1.98 2.2 4.877 3.3 8.69 3.3 3.08 0 5.372-.642 6.875-1.925V35.25h-7.26V29.2h14.52v15.675c-2.933 1.797-5.463 3.043-7.59 3.74-2.127.697-4.382 1.045-6.765 1.045-4.033 0-7.48-.807-10.34-2.42-2.86-1.613-5.042-3.887-6.545-6.82-1.467-2.97-2.2-6.435-2.2-10.395zM70.545 49.66c-2.053 0-4.235-.275-6.545-.825a34.44 34.44 0 0 1-6.545-2.255v-7.04c4.767 2.567 9.02 3.85 12.76 3.85 1.87 0 3.373-.403 4.51-1.21 1.173-.807 1.76-1.943 1.76-3.41 0-1.027-.33-1.888-.99-2.585-.623-.733-1.412-1.32-2.365-1.76-.953-.477-2.31-1.045-4.07-1.705-2.383-.88-4.327-1.723-5.83-2.53-1.503-.807-2.787-1.943-3.85-3.41-1.063-1.503-1.595-3.428-1.595-5.775 0-3.447 1.192-6.123 3.575-8.03 2.383-1.943 5.647-2.915 9.79-2.915 1.943 0 3.85.22 5.72.66 1.87.403 3.593 1.008 5.17 1.815v6.875c-3.703-2.053-7.278-3.08-10.725-3.08-1.907 0-3.41.348-4.51 1.045-1.063.66-1.595 1.613-1.595 2.86 0 1.247.55 2.237 1.65 2.97 1.137.697 2.878 1.467 5.225 2.31 2.457.917 4.473 1.797 6.05 2.64 1.577.843 2.933 2.072 4.07 3.685 1.173 1.577 1.797 3.63 1.87 6.16 0 3.63-1.228 6.49-3.685 8.58-2.457 2.053-5.738 3.08-9.845 3.08z"
      fill="#fff"
    />
  </svg>
)

function Svg({ icon = 'ChevronRight', scale = 1, color = 'var(--orange-color)' } = {}) {
  const components = {
    Send,
    Phone,
    Hamburger,
    Email,
    Download,
    Dalla,
    CloseX,
    ChevronsRight,
    ChevronRight,
    Checkmark,
    Barchart,
    Award,
    ArrowRight,
    Activity,
    Fax,
    Logo,
    Star,
    Search,
  }

  const Icon = components[icon]
  return <Icon scale={scale} color={color} />
}

Svg.propTypes = {
  /** Transform scale value */
  scale: PropTypes.number,
  /** Color of SVG */
  color: PropTypes.string,
  /** Name of SVG Icon to use */
  icon: PropTypes.string.isRequired,
}

Svg.defaultProps = {
  scale: 1,
  color: 'var(--orange-color)',
  icon: 'ChevronRight',
}

export default Svg
