import React from 'react';

import Form from './Form';

const ACC1002 = {
  code: "ACC1002",
  name: "Financial Accounting",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ACC1002X = {
  code: "ACC1002X",
  name: "Financial Accounting",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ACC1701 = {
  code: "ACC1701",
  name: "Accounting for Decision Makers",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ACC1701X = {
  code: "ACC1701X",
  name: "Accounting for Decision Makers",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BH1002 = {
  code: "BH1002",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BH1002E = {
  code: "BH1002E",
  name: "",
  mc: 4,
  equivalent: BH1002,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BH1003 = {
  code: "BH1003",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BH1005 = {
  code: "BH1005",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BH2004 = {
  code: "BH2004",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BH3118 = {
  code: "BH3118",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BH3214 = {
  code: "BH3214",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BK1003 = {
  code: "BK1003",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BK1008 = {
  code: "BK1008",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BK2003 = {
  code: "BK2003",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BK2004 = {
  code: "BK2004",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BN2203 = {
  code: "BN2203",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BN2102 = {
  code: "BN2102",
  name: "BioEngineering Data Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const BN2401 = {
  code: "BN2401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BN3101 = {
  code: "BN3101",
  name: "Biomedical Engineering Design",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BN4101 = {
  code: "BN4101",
  name: "B.Eng. Dissertation",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BN4101R = {
  code: "BN4101R",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BSE3701 = {
  code: "BSE3701",
  name: "Macroeconomic Principles in the Global Economy",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BSE3703 = {
  code: "BSE3703",
  name: "Econometrics for Business I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BSE4711 = {
  code: "BSE4711",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BSP1005 = {
  code: "BSP1005",
  name: "Managerial Economics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BSP1703 = {
  code: "BSP1703",
  name: "Managerial Economics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BSP1707 = {
  code: "BSP1707",
  name: "Managerial Economics: Exposure",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const BSP2001 = {
  code: "BSP2001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BSP2701 = {
  code: "BSP2701",
  name: "Global Economy",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT1101 = {
  code: "BT1101",
  name: "Introduction to Business Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT2010 = {
  code: "BT2010",
  name: "",
  mc: 6,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BT2101 = {
  code: "BT2101",
  name: "Decision Making Methods and Tools",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT2102 = {
  code: "BT2102",
  name: "Data Management and Visualisation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT3101 = {
  code: "BT3101",
  name: "Business Analytics Capstone Project",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT3102 = {
  code: "BT3102",
  name: "Computational Methods for Business Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT3103 = {
  code: "BT3103",
  name: "Application Systems Development for Business Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT4010 = {
  code: "BT4010",
  name: "Business Analytics Internship Programme",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT4011 = {
  code: "BT4011",
  name: "",
  mc: 14,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BT4012 = {
  code: "BT4012",
  name: "Fraud Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const BT4013 = {
  code: "BT4013",
  name: "Analytics for Capital Market Trading and Investment",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const BT4014 = {
  code: "BT4014",
  name: "Analytics Driven Design of Adaptive Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const BT4015 = {
  code: "BT4015",
  name: "Geospatial Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const BT4016 = {
  code: "BT4016",
  name: "Risk Analytics for Financial Services",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const BT4101 = {
  code: "BT4101",
  name: "B.SC. (Business Analytics) Dissertation",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT4103 = {
  code: "BT4103",
  name: "Business Analytics Capstone Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT4211 = {
  code: "BT4211",
  name: "Data-Driven Marketing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const BT4212 = {
  code: "BT4212",
  name: "Search Engine Optimization and Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const BT4221 = {
  code: "BT4221",
  name: "Big Data Techniques and Technologies",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const BT4222 = {
  code: "BT4222",
  name: "Mining Web Data for Business Insights",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const BT4240 = {
  code: "BT4240",
  name: "Machine Learning for Predictive Data Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const BT5110 = {
  code: "BT5110",
  name: "Data Management and Warehousing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const BZ1002 = {
  code: "BZ1002",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BZ1002E = {
  code: "BZ1002E",
  name: "",
  mc: 4,
  equivalent: BZ1002,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BZ1003 = {
  code: "BZ1003",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BZ1005 = {
  code: "BZ1005",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BZ2004 = {
  code: "BZ2004",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const BZ3305 = {
  code: "BZ3305",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CE1402 = {
  code: "CE1402",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CE2407 = {
  code: "CE2407",
  name: "Engineering & Uncertainty Analyses",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CE4104 = {
  code: "CE4104",
  name: "B. Eng. Dissertation",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CG1111 = {
  code: "CG1111",
  name: "Engineering Principles and Practice I",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CG1112 = {
  code: "CG1112",
  name: "Engineering Principles and Practice II",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CG1108 = {
  code: "CG1108",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CG1413 = {
  code: "CG1413",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CG2007 = {
  code: "CG2007",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CG2023 = {
  code: "CG2023",
  name: "Signals and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CG2027 = {
  code: "CG2027",
  name: "Transistor-level Digital Circuits",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CG2028 = {
  code: "CG2028",
  name: "Computer Organization",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CG2271 = {
  code: "CG2271",
  name: "Real-Time Operating Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CG3002 = {
  code: "CG3002",
  name: "",
  mc: 8,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CG3207 = {
  code: "CG3207",
  name: "Computer Architecture",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CG4001 = {
  code: "CG4001",
  name: "B.Eng. Dissertation",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const CG4002 = {
  code: "CG4002",
  name: "Computer Engineering Cpastone Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CG4003 = {
  code: "CG4003",
  name: "Advanced Project and Internship",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CM1417 = {
  code: "CM1417",
  name: "Fundamentals of Chemistry",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CM1417X = {
  code: "CM1417X",
  name: "Fundamentals of Chemistry",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: true,
  st2: false
};
const CN1111 = {
  code: "CN1111",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CN2101 = {
  code: "CN2101",
  name: "Material and Energy Balances",
  mc: 3,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN2108 = {
  code: "CN2108",
  name: "Chemical Engineering Process Laboratory I",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN2116 = {
  code: "CN2116",
  name: "Chemical Kinetics & Reactor Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN2121 = {
  code: "CN2121",
  name: "Chemical Engineering Thermodynamics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN2122 = {
  code: "CN2122",
  name: "Fluid Mechanics",
  mc: 5,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN2122A = {
  code: "CN2122A",
  name: "Fluid Mechanics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN2125 = {
  code: "CN2125",
  name: "Heat & Mass Transfer",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN2401 = {
  code: "CN2401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CN3101 = {
  code: "CN3101",
  name: "Chemical Engineering Process Lab I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN3108 = {
  code: "CN3108",
  name: "Chemical Engineering Process Laboratory II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN3121 = {
  code: "CN3121",
  name: "Process Dynamics & Control",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN3124 = {
  code: "CN3124",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CN3132 = {
  code: "CN3132",
  name: "Separation Processes",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN3135 = {
  code: "CN3135",
  name: "Process Safety, Health and Environment",
  mc: 3,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN3411 = {
  code: "CN3411",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CN3421 = {
  code: "CN3421",
  name: "Process Modeling And Numerical Simulation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CN4118 = {
  code: "CN4118",
  name: "B.Eng. Dissertation",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: true
};
const CN4118R = {
  code: "CN4118R",
  name: "B.Eng. Dissertation",
  mc: 10,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: true
};
const CN4217 = {
  code: "CN4217",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CP3106 = {
  code: "CP3106",
  name: "Independent Project",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CP3200 = {
  code: "CP3200",
  name: "",
  mc: 6,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CP3208 = {
  code: "CP3208",
  name: "Undergraduate Research in Computing I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CP3209 = {
  code: "CP3209",
  name: "Undergraduate Research in Computing",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CP3880 = {
  code: "CP3880",
  name: "Advanced Technology Attachment Programme",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CP4101 = {
  code: "CP4101",
  name: "B.Comp. Dissertation",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CP4106 = {
  code: "CP4106",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1010 = {
  code: "CS1010",
  name: "Programming Methodology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS1010S = {
  code: "CS1010S",
  name: "Programming Methodology",
  mc: 4,
  equivalent: CS1010,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS1010X = {
  code: "CS1010X",
  name: "Programming Methodology",
  mc: 4,
  equivalent: CS1010,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS1010J = {
  code: "CS1010J",
  name: "Programming Methodology",
  mc: 4,
  equivalent: CS1010,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS1010E = {
  code: "CS1010E",
  name: "Programming Methodology",
  mc: 4,
  equivalent: CS1010,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS1010XCP = {
  code: "CS1010XCP",
  name: "",
  mc: 4,
  equivalent: CS1010,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1010FC = {
  code: "CS1010FC",
  name: "",
  mc: 4,
  equivalent: CS1010,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1020 = {
  code: "CS1020",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1020E = {
  code: "CS1020E",
  name: "",
  mc: 4,
  equivalent: CS1020,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1101 = {
  code: "CS1101",
  name: "",
  mc: 4,
  equivalent: CS1010,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1101C = {
  code: "CS1101C",
  name: "",
  mc: 4,
  equivalent: CS1010,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1101S = {
  code: "CS1101S",
  name: "Programming Methodology",
  mc: 4,
  equivalent: CS1010,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS1104 = {
  code: "CS1104",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS1231 = {
  code: "CS1231",
  name: "Discrete Structures",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS1231S = {
  code: "CS1231S",
  name: "Discrete Structures",
  mc: 4,
  equivalent: CS1231,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS1304 = {
  code: "CS1304",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2010 = {
  code: "CS2010",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2020 = {
  code: "CS2020",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2023 = {
  code: "CS2023",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2030 = {
  code: "CS2030",
  name: "Programming Methodology II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2030S = {
  code: "CS2030S",
  name: "Programming Methodology II",
  mc: 4,
  equivalent: CS2030,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2040 = {
  code: "CS2040",
  name: "Data Structures and Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2040C = {
  code: "CS2040C",
  name: "Data Structures and Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2040S = {
  code: "CS2040S",
  name: "Data Structures and Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2100 = {
  code: "CS2100",
  name: "Computer Organisation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2101 = {
  code: "CS2101",
  name: "Effective Communication for Computing Professionals",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2102 = {
  code: "CS2102",
  name: "Database Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2102S = {
  code: "CS2102S",
  name: "",
  mc: 4,
  equivalent: CS2102,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2103 = {
  code: "CS2103",
  name: "Software Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2103T = {
  code: "CS2103T",
  name: "Software Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2104 = {
  code: "CS2104",
  name: "Programming Language Concepts",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS2105 = {
  code: "CS2105",
  name: "Introduction to Computer Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2106 = {
  code: "CS2106",
  name: "Introduction to Operating Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2107 = {
  code: "CS2107",
  name: "Introduction to Information Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2108 = {
  code: "CS2108",
  name: "Introduction to Media Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS2113 = {
  code: "CS2113",
  name: "Software Engineering & Object-Oriented Programming",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2113T = {
  code: "CS2113T",
  name: "Software ENgineering & Object-Oriented Programming",
  mc: 4,
  equivalent: CS2113,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS2220 = {
  code: "CS2220",
  name: "Introduction to Computational Biology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS2251 = {
  code: "CS2251",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2301 = {
  code: "CS2301",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2305S = {
  code: "CS2305S",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS2309 = {
  code: "CS2309",
  name: "CS Research Methodology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS3103 = {
  code: "CS3103",
  name: "Computer Networks Practice",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS3201 = {
  code: "CS3201",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3202 = {
  code: "CS3202",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3203 = {
  code: "CS3203",
  name: "Software Engineering Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS3205 = {
  code: "CS3205",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3208 = {
  code: "CS3208",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3210 = {
  code: "CS3210",
  name: "Parallel Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS3211 = {
  code: "CS3211",
  name: "Parallel and Concurrent Programming",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3213 = {
  code: "CS3213",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3214 = {
  code: "CS3214",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3215 = {
  code: "CS3215",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3216 = {
  code: "CS3216",
  name: "Software Product Engineering for Digital Markets",
  mc: 5,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS3217 = {
  code: "CS3217",
  name: "Software Engineering on Modern Application Platforms",
  mc: 5,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3219 = {
  code: "CS3219",
  name: "Software Engineering Principles and Patterns",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS3220 = {
  code: "CS3220",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3223 = {
  code: "CS3223",
  name: "Database Systems Implementation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3226 = {
  code: "CS3226",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3230 = {
  code: "CS3230",
  name: "Design and Analysis of Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS3233 = {
  code: "CS3233",
  name: "Competitive Programming",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3234 = {
  code: "CS3234",
  name: "Logic for Proofs and Programs",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3235 = {
  code: "CS3235",
  name: "Computer Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS3236 = {
  code: "CS3236",
  name: "Introduction to Information Theory",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3237 = {
  code: "CS3237",
  name: "Introduction to Internet of Things",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS3240 = {
  code: "CS3240",
  name: "Interaction Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS3241 = {
  code: "CS3241",
  name: "Computer Graphics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS3242 = {
  code: "CS3242",
  name: "3D Modeling and Animation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3243 = {
  code: "CS3243",
  name: "Introduction to Artificial Intelligence",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS3244 = {
  code: "CS3244",
  name: "Machine Learning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS3245 = {
  code: "CS3245",
  name: "Information Retrieval",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3246 = {
  code: "CS3246",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3247 = {
  code: "CS3247",
  name: "Game Development",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3249 = {
  code: "CS3249",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3252 = {
  code: "CS3252",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3254 = {
  code: "CS3254",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3261 = {
  code: "CS3261",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3281 = {
  code: "CS3281",
  name: "Thematic Systems Project I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3282 = {
  code: "CS3282",
  name: "Thematic Systems Project II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS3283 = {
  code: "CS3283",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS3284 = {
  code: "CS3284",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4101 = {
  code: "CS4101",
  name: "",
  mc: 12,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4201 = {
  code: "CS4201",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4203 = {
  code: "CS4203",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4211 = {
  code: "CS4211",
  name: "Formal Methods for Software Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4212 = {
  code: "CS4212",
  name: "Compiler Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4215 = {
  code: "CS4215",
  name: "Programming Language Implementation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4216 = {
  code: "CS4216",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4218 = {
  code: "CS4218",
  name: "Software Testing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4220 = {
  code: "CS4220",
  name: "Knowledge Discovery Methods in Bioinformatics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4221 = {
  code: "CS4221",
  name: "Database Applications Design and Tuning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4222 = {
  code: "CS4222",
  name: "Wireless Networking",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4223 = {
  code: "CS4223",
  name: "Multi-core Architectures",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4224 = {
  code: "CS4224",
  name: "Distributed Databases",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4225 = {
  code: "CS4225",
  name: "Big Data SYstems for Data Science",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS4226 = {
  code: "CS4226",
  name: "Internet Architecture",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4230 = {
  code: "CS4230",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4231 = {
  code: "CS4231",
  name: "Parallel and Distributed Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4232 = {
  code: "CS4232",
  name: "Theory of Computation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4234 = {
  code: "CS4234",
  name: "Optimisation Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4236 = {
  code: "CS4236",
  name: "Cryptography Theory and Practice",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4238 = {
  code: "CS4238",
  name: "Computer Security Practice",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS4239 = {
  code: "CS4239",
  name: "Software Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4240 = {
  code: "CS4240",
  name: "Interaction Design for Vitrual and Augmented Reality",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4242 = {
  code: "CS4242",
  name: "Social Media Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4243 = {
  code: "CS4243",
  name: "Computer Vision and Pattern Recognition",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4244 = {
  code: "CS4244",
  name: "Knowledge Representation and Reasoning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4246 = {
  code: "CS4246",
  name: "AI Planning and Decision Making",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS4247 = {
  code: "CS4247",
  name: "Graphics Rendering Techniques",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4248 = {
  code: "CS4248",
  name: "Natural Language Processing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS4249 = {
  code: "CS4249",
  name: "Phenomena and Theories of Human-Computer Interaction",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4257 = {
  code: "CS4257",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4259 = {
  code: "CS4259",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4261 = {
  code: "CS4261",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4268 = {
  code: "CS4268",
  name: "Quantum Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4269 = {
  code: "CS4269",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4276 = {
  code: "CS4276",
  name: "IoT Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4277 = {
  code: "CS4277",
  name: "3D Computer Vision",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4278 = {
  code: "CS4278",
  name: "Intelligent Robots: Algorithms and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4330 = {
  code: "CS4330",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4342 = {
  code: "CS4342",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4344 = {
  code: "CS4344",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS4347 = {
  code: "CS4347",
  name: "Sound and Music Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS4350 = {
  code: "CS4350",
  name: "Game Development Project",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS4351 = {
  code: "CS4351",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5212 = {
  code: "CS5212",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5214 = {
  code: "CS5214",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5215 = {
  code: "CS5215",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5218 = {
  code: "CS5218",
  name: "Principles and Practice of Program Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5219 = {
  code: "CS5219",
  name: "Automated Software Validation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5222 = {
  code: "CS5222",
  name: "Advanced Computer Architecture",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5223 = {
  code: "CS5223",
  name: "Distributed Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS5224 = {
  code: "CS5224",
  name: "Cloud Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5226 = {
  code: "CS5226",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5228 = {
  code: "CS5228",
  name: "Knowledge Discovery and Data Mining",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS5229 = {
  code: "CS5229",
  name: "Advanced Computer Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5230 = {
  code: "CS5230",
  name: "Computational Complexity",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5231 = {
  code: "CS5231",
  name: "Systems Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5232 = {
  code: "CS5232",
  name: "Formal Specification and Design Techniques",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5233 = {
  code: "CS5233",
  name: "Simulation and Modelling Techniques",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5234 = {
  code: "CS5234",
  name: "Algorithms at Scale",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5236 = {
  code: "CS5236",
  name: "Advanced Automata Theory",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5237 = {
  code: "CS5237",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5238 = {
  code: "CS5238",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5239 = {
  code: "CS5239",
  name: "Computer System Performance Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5240 = {
  code: "CS5240",
  name: "Theoretical Foundations in MultiMedia",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5241 = {
  code: "CS5241",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5242 = {
  code: "CS5242",
  name: "Neural Networks and Deep Learning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS5246 = {
  code: "CS5246",
  name: "Text Mining",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5248 = {
  code: "CS5248",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5250 = {
  code: "CS5250",
  name: "Advanced Operating Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5260 = {
  code: "CS5260",
  name: "Neural Networks and Deep Learning II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5270 = {
  code: "CS5270",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5272 = {
  code: "CS5272",
  name: "Embedded Software Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5321 = {
  code: "CS5321",
  name: "Network Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5322 = {
  code: "CS5322",
  name: "Database Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5330 = {
  code: "CS5330",
  name: "Randomized Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5331 = {
  code: "CS5331",
  name: "Web Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5332 = {
  code: "CS5332",
  name: "Biometric Authentication",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5339 = {
  code: "CS5339",
  name: "Theory and Algorithms for Machine Learning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5340 = {
  code: "CS5340",
  name: "Uncertainty Modelling in AI",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS5343 = {
  code: "CS5343",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS5344 = {
  code: "CS5344",
  name: "Big-Data Analytics Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5346 = {
  code: "CS5346",
  name: "Information Visualisation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5421 = {
  code: "CS5421",
  name: "Database Applications Design and Tuning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5422 = {
  code: "CS5422",
  name: "Wireless Networking",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5424 = {
  code: "CS5424",
  name: "Distributed Databases",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5425 = {
  code: "CS5425",
  name: "Big Data Systems for Data Science",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS5439 = {
  code: "CS5439",
  name: "Software Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5446 = {
  code: "CS5446",
  name: "AI Planning and Decision Making",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS5476 = {
  code: "CS5476",
  name: "IoT Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS5477 = {
  code: "CS5477",
  name: "3D Computer Vision",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS5478 = {
  code: "CS5478",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const CS6101 = {
  code: "CS6101",
  name: "Exploration of Computer Science Research",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const CS6203 = {
  code: "CS6203",
  name: "Adavanced Topics in Database Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS6207 = {
  code: "CS6207",
  name: "Advanced Natural Language Processing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS6208 = {
  code: "CS6208",
  name: "Advanced Topics in Artificial Intelligence",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS6210 = {
  code: "CS6210",
  name: "The Art of Computer Science Research",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS6211 = {
  code: "CS6211",
  name: "Analytical Performance Modelling for Computer Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS6213 = {
  code: "CS6213",
  name: "Special Topics in Distributed Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS6215 = {
  code: "CS6215",
  name: "Advanced Topics in Program Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS6219 = {
  code: "CS6219",
  name: "Advanced Topics in Computer Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS6231 = {
  code: "CS6231",
  name: "Advanced Topics in Security and Privacy",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS6234 = {
  code: "CS6234",
  name: "Advanced Algorithms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS6240 = {
  code: "CS6240",
  name: "Multimedia Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const CS6244 = {
  code: "CS6244",
  name: "Advanced Topics in Robotics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const CS6283 = {
  code: "CS6283",
  name: "Topics in Computer Science: Trustworthy Machine Learning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DAO1704 = {
  code: "DAO1704",
  name: "Decision Analytics using Spreadsheets",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DAO1704X = {
  code: "DAO1704X",
  name: "Decision Analytics using Spreadsheets",
  mc: 4,
  equivalent: DAO1704,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DAO2702 = {
  code: "DAO2702",
  name: "Programming for Business Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DBA3701 = {
  code: "DBA3701",
  name: "Introduction to Optimization",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DBA3711 = {
  code: "DBA3711",
  name: "Stochastic Models in Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DBA3712 = {
  code: "DBA3712",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const DBA3803 = {
  code: "DBA3803",
  name: "Predictive Analytics in Business",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DBA4811 = {
  code: "DBA4811",
  name: "Analytical Tools for Consulting",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DMS1401MA = {
  code: "DMS1401MA",
  name: "Design Your Own Module",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const DSA1101 = {
  code: "DSA1101",
  name: "Introduction to Data Science",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DSA2101 = {
  code: "DSA2101",
  name: "Essential Data Analytics Tools: Data Visualisation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSA2102 = {
  code: "DSA2102",
  name: "Essential Data Analytics Tools: Numerical Computation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSA3101 = {
  code: "DSA3101",
  name: "Data Science in Practice",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DSA3102 = {
  code: "DSA3102",
  name: "Essential Data Analytics Tools: Convex Optimisation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DSA4211 = {
  code: "DSA4211",
  name: "High-Dimensional Statistical Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DSA4212 = {
  code: "DSA4212",
  name: "Optimisation for Large-Scale Data-Driven Inference",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const DSA4199 = {
  code: "DSA4199",
  name: "Honours Project in Data Science and Analytics",
  mc: 16,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSA4264 = {
  code: "DSA4264",
  name: "Sense-making Case Analysis: Public Policy and Society",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DSA4264A = {
  code: "DSA4264A",
  name: "",
  mc: 4,
  equivalent: DSA4264,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const DSA4264B = {
  code: "DSA4264B",
  name: "",
  mc: 4,
  equivalent: DSA4264,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const DSA4266 = {
  code: "DSA4266",
  name: "Sense-making Case Analysis: Science and Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const DSA4266A = {
  code: "DSA4266A",
  name: "",
  mc: 4,
  equivalent: DSA4266,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const DSA4266B = {
  code: "DSA4266B",
  name: "",
  mc: 4,
  equivalent: DSA4266,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const DSA4299 = {
  code: "DSA4299",
  name: "Applied Project in Data Science and Analytics",
  mc: 16,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSA5101 = {
  code: "DSA5101",
  name: "Introduction to Big Data for Industry",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DSA5102 = {
  code: "DSA5102",
  name: "Foundations of Machine Learning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const DSA5201 = {
  code: "DSA5201",
  name: "DSML Industry Consulting and Applications Project",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: false
};
const DSA5202 = {
  code: "DSA5202",
  name: "Advanced Topics in Machine Learning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const DSC1007 = {
  code: "DSC1007",
  name: "Business Analytics - Models & Decisions",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSC1007X = {
  code: "DSC1007X",
  name: "Business Analytics - Models & Decisions",
  mc: 4,
  equivalent: DSC1007,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSC2008 = {
  code: "DSC2008",
  name: "Business Analytics - Data & Decisions",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSC3214 = {
  code: "DSC3214",
  name: "Introduction To Optimisation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSC3215 = {
  code: "DSC3215",
  name: "Stochastic Models In Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSC3216 = {
  code: "DSC3216",
  name: "Predictive Analytics in Business",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSC4213 = {
  code: "DSC4213",
  name: "Analytical Tools for Consulting",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const DSN3701 = {
  code: "DSN3701",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EC1101E = {
  code: "EC1101E",
  name: "Introduction to Economic Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC1301 = {
  code: "EC1301",
  name: "Principles of Economics",
  mc: 4,
  equivalent: EC1101E,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC2101 = {
  code: "EC2101",
  name: "Microeconomic Analysis I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC2102 = {
  code: "EC2102",
  name: "Macroeconomic Analysis I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC2104 = {
  code: "EC2104",
  name: "Quantitative Methods for Economic Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC2204 = {
  code: "EC2204",
  name: "Financial Accounting for Economists",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC2210 = {
  code: "EC2210",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EC2231 = {
  code: "EC2231",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EC2303 = {
  code: "EC2303",
  name: "Foundations for Econometrics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC3101 = {
  code: "EC3101",
  name: "Microeconomics Analysis II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC3102 = {
  code: "EC3102",
  name: "Macroeconomics Analysis II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC3209 = {
  code: "EC3209",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EC3212 = {
  code: "EC3212",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EC3230 = {
  code: "EC3230",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EC3303 = {
  code: "EC3303",
  name: "Econometrics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC3312 = {
  code: "EC3312",
  name: "Game Theory & Applications to Economics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EC3333 = {
  code: "EC3333",
  name: "Financial Economics I",
  mc: 5,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC4301 = {
  code: "EC4301",
  name: "Microeconomics Analysis III",
  mc: 5,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EC5104 = {
  code: "EC5104",
  name: "Mathematics for Economists",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EC5104R = {
  code: "EC5104R",
  name: "Mathematics for Economists",
  mc: 5,
  equivalent: EC5104,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EC5210 = {
  code: "EC5210",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EC5311 = {
  code: "EC5311",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE1002 = {
  code: "EE1002",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE1111 = {
  code: "EE1111",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE1111A = {
  code: "EE1111A",
  name: "Electrical Engineering Principles and Practice I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE1111B = {
  code: "EE1111B",
  name: "",
  mc: 4,
  equivalent: EE1111,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE1112 = {
  code: "EE1112",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE1401 = {
  code: "EE1401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE1461 = {
  code: "EE1461",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2004 = {
  code: "EE2004",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2004E = {
  code: "EE2004E",
  name: "",
  mc: 4,
  equivalent: EE2004,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2005E = {
  code: "EE2005E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2006E = {
  code: "EE2006E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2007 = {
  code: "EE2007",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2007E = {
  code: "EE2007E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2009E = {
  code: "EE2009E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2010 = {
  code: "EE2010",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2010E = {
  code: "EE2010E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2011 = {
  code: "EE2011",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2011E = {
  code: "EE2011E",
  name: "Engineering Electromagnetics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE2012 = {
  code: "EE2012",
  name: "Analytical Methods in Electrical and Computer Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2012A = {
  code: "EE2012A",
  name: "Analytical Methods in Electrical and Computer Engineering",
  mc: 4,
  equivalent: EE2012,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2020 = {
  code: "EE2020",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2020E = {
  code: "EE2020E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2021 = {
  code: "EE2021",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2021E = {
  code: "EE2021E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2023 = {
  code: "EE2023",
  name: "Signals and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2023E = {
  code: "EE2023E",
  name: "Signals and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE2024 = {
  code: "EE2024",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2024E = {
  code: "EE2024E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2025 = {
  code: "EE2025",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2026 = {
  code: "EE2026",
  name: "Digital Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2027 = {
  code: "EE2076",
  name: "Electronic Circuits",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2028 = {
  code: "EE2028",
  name: "Microcontroller Programming and Interfacing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2028A = {
  code: "EE2028A",
  name: "C Programming",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2029 = {
  code: "EE2029",
  name: "Introduction to Electrical Energy Systems",
  mc: 3,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE2111A = {
  code: "EE2111A",
  name: "Electrical Engineering Principles and Practice II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE2231 = {
  code: "EE2231",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE2401 = {
  code: "EE2401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3001 = {
  code: "EE3001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3001E = {
  code: "EE3001E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3002 = {
  code: "EE3002",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3031 = {
  code: "EE3031",
  name: "Innovation & Enterprise I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE3031E = {
  code: "EE3031E",
  name: "Innovation & Enterprise I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE3032 = {
  code: "EE3032",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3103 = {
  code: "EE3103",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3103E = {
  code: "EE3103E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3104C = {
  code: "EE3104C",
  name: "Introduction to RF and Microwave Systems & Circuits",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE3104E = {
  code: "EE3104E",
  name: "Intro to RF and Microwave Sys & Circuits",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE3131C = {
  code: "EE3131C",
  name: "Communication Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE3131E = {
  code: "EE3131E",
  name: "Communication Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE3204 = {
  code: "EE3204",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3204E = {
  code: "EE3204E",
  name: "",
  mc: 4,
  equivalent: EE3204,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3206 = {
  code: "EE3206",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3206E = {
  code: "EE3206E",
  name: "",
  mc: 4,
  equivalent: EE3206,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3207 = {
  code: "EE3207",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3207E = {
  code: "EE3207E",
  name: "Computer Architecture",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE3208 = {
  code: "EE3208",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3302 = {
  code: "EE3302",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3302E = {
  code: "EE3302E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3305 = {
  code: "EE3305",
  name: "Robotic System Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE3331C = {
  code: "EE3331C",
  name: "Feedback Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE3331E = {
  code: "EE3331E",
  name: "Feedback Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE3406 = {
  code: "EE3406",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3407 = {
  code: "EE3407",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3407E = {
  code: "EE3407E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3408 = {
  code: "EE3408",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3408C = {
  code: "EE3408C",
  name: "Integrated Analog Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE3408E = {
  code: "EE3408E",
  name: "Integrated Analog Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE3409 = {
  code: "EE3409",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3431C = {
  code: "EE3431C",
  name: "Microelectronics Materials and Devices",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE3501E = {
  code: "EE3501E",
  name: "Power Electronics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE3506C = {
  code: "EE3506C",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE3731C = {
  code: "EE3731C",
  name: "Signal Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE3801 = {
  code: "EE3801",
  name: "Data Engineering Principles",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4001 = {
  code: "EE4001",
  name: "B.Eng. Dissertation",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const EE4002D = {
  code: "EE4002D",
  name: "Design Capstone",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const EE4002R = {
  code: "EE4002R",
  name: "Research Capstone",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const EE4031 = {
  code: "EE4031",
  name: "Intellectual Property: Harnessing Innovation",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4032 = {
  code: "EE4032",
  name: "Blockchain Engineering",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4101 = {
  code: "EE4101",
  name: "RF Communications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4101E = {
  code: "EE4101E",
  name: "Radio-Frequency (RF) Communications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4103 = {
  code: "EE4103",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4104 = {
  code: "EE4104",
  name: "Microwave Circuits & Devices",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4112 = {
  code: "EE4112",
  name: "Radio Frequency Design and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4112E = {
  code: "EE4112E",
  name: "Radio Frequency Design and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4204 = {
  code: "EE4204",
  name: "Computer Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE4204E = {
  code: "EE4204E",
  name: "Computer Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4205 = {
  code: "EE4205",
  name: "Quantum Communication and Cryptography",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4210 = {
  code: "EE4210",
  name: "Network Protocols and Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4210E = {
  code: "EE4210E",
  name: "Network Protocols and Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4211 = {
  code: "EE4211",
  name: "Data Science for the Internet of Things",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4212 = {
  code: "EE4212",
  name: "Computer Vision",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4214 = {
  code: "EE4214",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4214E = {
  code: "EE4214E",
  name: "Real-Time Embedded Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4218 = {
  code: "EE4218",
  name: "Embedded Hardware System Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4302 = {
  code: "EE4302",
  name: "Advanced Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: true,
  st2: false
};
const EE4303 = {
  code: "EE4303",
  name: "Industrial Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4303E = {
  code: "EE4303E",
  name: "Industrial Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4305 = {
  code: "EE4305",
  name: "Fuzzy/Neural Systems for Intelligent Robotics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4306 = {
  code: "EE4306",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4307 = {
  code: "EE4307",
  name: "Control Systems Design And Simulation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4308 = {
  code: "EE4308",
  name: "Autonomous Robot Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4401 = {
  code: "EE4401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4407 = {
  code: "EE4407",
  name: "Analog Electronics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4407E = {
  code: "EE4407E",
  name: "Analog Electronics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4408E = {
  code: "EE4408E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4409 = {
  code: "EE4409",
  name: "Modern Microelectronic Devices & Sensors",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4411 = {
  code: "EE4411",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4411E = {
  code: "EE4411E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4412E = {
  code: "EE4412E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4415 = {
  code: "EE4415",
  name: "Integrated Digital Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4415E = {
  code: "EE4415E",
  name: "Integrated Digital Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4432 = {
  code: "EE4432",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4433 = {
  code: "EE4433",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4434 = {
  code: "EE4434",
  name: "Integrated Circuit Technology, Design and Testing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4435 = {
  code: "EE4435",
  name: "Modern Transistors and Memory Devices",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4435E = {
  code: "EE4435E",
  name: "Modern Transistors and Memory Devices",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4436 = {
  code: "EE4436",
  name: "Fabrication Process Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4436E = {
  code: "EE4436E",
  name: "Fabrication Process Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4437 = {
  code: "EE4437",
  name: "Photonics - Principles and Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4438 = {
  code: "EE4438",
  name: "Solar Cells and Modules",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4501 = {
  code: "EE4501",
  name: "Power System Management And Protection",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4502 = {
  code: "EE4502",
  name: "Electric Drives & Control",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4503 = {
  code: "EE4503",
  name: "Power Electronics for Sustainable Energy Technologies",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4505 = {
  code: "EE4505",
  name: "Power Semiconductor Devices & ICs",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: false,
  st1: true,
  st2: false
};
const EE4511 = {
  code: "EE4511",
  name: "Renewable Generation and Smart Grid",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4603 = {
  code: "EE4603",
  name: "Biomedical Imaging Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE4604 = {
  code: "EE4604",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE4704 = {
  code: "EE4704",
  name: "Image Processing and Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE4802 = {
  code: "EE4802",
  name: "Learning from Data",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5001 = {
  code: "EE5001",
  name: "Independent Study Module I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE5002 = {
  code: "EE5002",
  name: "Independent Study Module II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE5003 = {
  code: "EE5003",
  name: "Electrical Engineering Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE5020 = {
  code: "EE5020",
  name: "Data Science for Internet of Things",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5022 = {
  code: "EE5022",
  name: "Cyber Security for Internet of Things",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5023 = {
  code: "EE5023",
  name: "Wireless Networks",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5024 = {
  code: "EE5024",
  name: "IoT Sensor Networks",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5025 = {
  code: "EE5025",
  name: "Intellectual Property: Innovations in IoT",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5026 = {
  code: "EE5026",
  name: "Machine Learning for Data Analytics",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5027 = {
  code: "EE5027",
  name: "",
  mc: 2,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5060 = {
  code: "EE5060",
  name: "Sensors and Instrumentation for Automation",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5061 = {
  code: "EE5061",
  name: "Industrial Control and Programming",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5062 = {
  code: "EE5062",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5064 = {
  code: "EE5064",
  name: "Dynamics and Control of Robot Manipulators",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5101 = {
  code: "EE5101",
  name: "Linear Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5101R = {
  code: "EE5101R",
  name: "",
  mc: 4,
  equivalent: EE5101,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5103 = {
  code: "EE5103",
  name: "Computer Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5103R = {
  code: "EE5103R",
  name: "",
  mc: 4,
  equivalent: EE5103,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5104 = {
  code: "EE5104",
  name: "Adaptive Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5106 = {
  code: "EE5106",
  name: "Advanced Robotics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5106R = {
  code: "EE5106R",
  name: "",
  mc: 4,
  equivalent: EE5106,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5110 = {
  code: "EE5110",
  name: "Special Topics in Automation and Control",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5111 = {
  code: "EE5111",
  name: "Selected Topics in Industrial Control & Instrumentation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5132 = {
  code: "EE5132",
  name: "Wireless and Sensor Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5134 = {
  code: "EE5134",
  name: "Optical Communications and Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5135 = {
  code: "EE5135",
  name: "Digital Communications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5137 = {
  code: "EE5137",
  name: "Stochastic Processes",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5137R = {
  code: "EE5137R",
  name: "",
  mc: 4,
  equivalent: EE5137,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5138 = {
  code: "EE5138",
  name: "Optimization for Electrical Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5138R = {
  code: "EE5138R",
  name: "",
  mc: 4,
  equivalent: EE5138,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5139 = {
  code: "EE5139",
  name: "Information Theory for Communication Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5139R = {
  code: "EE5139R",
  name: "",
  mc: 4,
  equivalent: EE5139,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5202 = {
  code: "EE5202",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5303 = {
  code: "EE5303",
  name: "Microwave Electronics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5303R = {
  code: "EE5303R",
  name: "",
  mc: 4,
  equivalent: EE5303,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5306 = {
  code: "EE5306",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5308 = {
  code: "EE5308",
  name: "Antenna Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5308R = {
  code: "EE5308R",
  name: "",
  mc: 4,
  equivalent: EE5308,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5310 = {
  code: "EE5310",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5406 = {
  code: "EE5406",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5431 = {
  code: "EE5431",
  name: "Fundamentals of Nanoelectronics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5431R = {
  code: "EE5431R",
  name: "",
  mc: 4,
  equivalent: EE5431,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5432R = {
  code: "EE5432R",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5434 = {
  code: "EE5434",
  name: "Microelectronic Processes and Integration",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE5439 = {
  code: "EE5439",
  name: "Micro/Nano Electromechanical Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5440 = {
  code: "EE5440",
  name: "Magnetic Data Storage for Big Data",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5502 = {
  code: "EE5502",
  name: "Mos Devices",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5507 = {
  code: "EE5507",
  name: "Analog Integrated Circuits Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5507R = {
  code: "EE5507R",
  name: "",
  mc: 4,
  equivalent: EE5507,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5508 = {
  code: "EE5508",
  name: "Semiconductor Fundamentals",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE5515 = {
  code: "EE5515",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5516 = {
  code: "EE5516",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5517 = {
  code: "EE5517",
  name: "Optical Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5518 = {
  code: "EE5518",
  name: "VIsi Digital Circuit Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5518R = {
  code: "EE5518R",
  name: "",
  mc: 4,
  equivalent: EE5518,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5520 = {
  code: "EE5520",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5666 = {
  code: "EE5666",
  name: "Industrial Attachment",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EE5701 = {
  code: "EE5701",
  name: "High Voltage Testing and Switchgear",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5702 = {
  code: "EE5702",
  name: "Advanced Power System Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5702R = {
  code: "EE5702R",
  name: "",
  mc: 4,
  equivalent: EE5702,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5703 = {
  code: "EE5703",
  name: "Industrial Drives",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5703R = {
  code: "EE5703R",
  name: "",
  mc: 4,
  equivalent: EE5703,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5711 = {
  code: "EE5711",
  name: "Power Electronic Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5711R = {
  code: "EE5711R",
  name: "",
  mc: 4,
  equivalent: EE5711,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5731 = {
  code: "EE5731",
  name: "Visual Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5731R = {
  code: "EE5731R",
  name: "",
  mc: 4,
  equivalent: EE5731,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5801 = {
  code: "EE5801",
  name: "Electromagnetic Compatibility",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5831 = {
  code: "EE5831",
  name: "Electromagnetic Wave Theory",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5831R = {
  code: "EE5831R",
  name: "",
  mc: 4,
  equivalent: EE5831,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5902 = {
  code: "EE5902",
  name: "Multiprocessor Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5902R = {
  code: "EE5902R",
  name: "",
  mc: 4,
  equivalent: EE5902,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5903 = {
  code: "EE5903",
  name: "Real-Time Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5904 = {
  code: "EE5904",
  name: "Neural Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE5904R = {
  code: "EE5904R",
  name: "",
  mc: 4,
  equivalent: EE5904,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5907 = {
  code: "EE5907",
  name: "Pattern Recognition",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE5912 = {
  code: "EE5912",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5913 = {
  code: "EE5913",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE5934 = {
  code: "EE5934",
  name: "Deep Learning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE6104 = {
  code: "EE6104",
  name: "Adaptive Control Systems (Advanced)",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE6110 = {
  code: "EE6110",
  name: "Special Topics in Automation and Control (Advanced)",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE6111 = {
  code: "EE6111",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE6134 = {
  code: "EE6134",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE6135 = {
  code: "EE6135",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE6138 = {
  code: "EE6138",
  name: "Optimization for Electrical Engineering (Advanced)",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EE6310 = {
  code: "EE6310",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE6439 = {
  code: "EE6439",
  name: "Micro/Nano Electromechanical Systems (Advanced)",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EE6904 = {
  code: "EE6904",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EE6934 = {
  code: "EE6934",
  name: "Deep Learning (Advanced)",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const EG1109 = {
  code: "EG1109",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG1109FC = {
  code: "EG1109FC",
  name: "",
  mc: 4,
  equivalent: EG1109,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG1111 = {
  code: "EG1111",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG1112 = {
  code: "EG1112",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG1401 = {
  code: "EG1401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG1402 = {
  code: "EG1402",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG1413 = {
  code: "EG1413",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG1422 = {
  code: "EG1422",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG2401 = {
  code: "EG2401",
  name: "Engineering Professionalism",
  mc: 3,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EG2401A = {
  code: "EG2401A",
  name: "Engineering Professionalism",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EG3301 = {
  code: "EG3301",
  name: "",
  mc: 12,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG3301R = {
  code: "EG3301R",
  name: "DCP Project",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EG3601 = {
  code: "EG3601",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG3602 = {
  code: "EG3602",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG3611 = {
  code: "EG3611",
  name: "Industrial Attachment",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const EG3611A = {
  code: "EG3611A",
  name: "Industrial Attachment",
  mc: 10,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const EG3612 = {
  code: "EG3612",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const EG4301 = {
  code: "EG4301",
  name: "DCP Dissertation",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ENV1202 = {
  code: "ENV1202",
  name: "Communications for Environmental Studies",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ES1000 = {
  code: "ES1000",
  name: "Foundation Academic English",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ES1102 = {
  code: "ES1102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ES1103 = {
  code: "ES1103",
  name: "English for Academic Purposes",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: false
};
const ES1501 = {
  code: "ES1501",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ES1501A = {
  code: "ES1501A",
  name: "",
  mc: 4,
  equivalent: ES1501,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ES1501B = {
  code: "ES1501B",
  name: "",
  mc: 4,
  equivalent: ES1501,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ES1501C = {
  code: "ES1501C",
  name: "",
  mc: 4,
  equivalent: ES1501,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ES1531 = {
  code: "ES1531",
  name: "Critical Thinking And Writing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ES1541 = {
  code: "ES1541",
  name: "Exploring Science Communication through Popular Science",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ES1601 = {
  code: "ES1601",
  name: "Professional and Academic Communication",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ES2002 = {
  code: "ES2002",
  name: "Business Communication for Leaders (BBA)",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ES2007D = {
  code: "ES2007D",
  name: "Professional Communication",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ES2331 = {
  code: "ES2331",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ES2531 = {
  code: "ES2531",
  name: "Critical Thinking And Writing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ES2660 = {
  code: "ES2660",
  name: "Communicating in the Information Age",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ESE4501 = {
  code: "ESE4501",
  name: "Design Project",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ESE4502 = {
  code: "ESE4502",
  name: "",
  mc: 12,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ESE4502R = {
  code: "ESE4502R",
  name: "B.Eng. Dissertation",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ESP2104 = {
  code: "ESP2104",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ESP3901 = {
  code: "ESP3901",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ESP3902 = {
  code: "ESP3902",
  name: "Major Design Project I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ESP3903 = {
  code: "ESP3903",
  name: "Major Design Project 2",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ESP4901 = {
  code: "ESP4901",
  name: "Research Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FAS1101 = {
  code: "FAS1101",
  name: "Writing Academically: Arts and Social Sciences",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FE5105 = {
  code: "FE5105",
  name: "Corporate Financing and Risk",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: false,
  st1: false,
  st2: true
};
const FIN2004 = {
  code: "FIN2004",
  name: "Finance",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN2004X = {
  code: "FIN2004X",
  name: "Finance",
  mc: 4,
  equivalent: FIN2004,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN2704 = {
  code: "FIN2704",
  name: "Finance",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN2704X = {
  code: "FIN2704X",
  name: "Finance",
  mc: 4,
  equivalent: FIN2704,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3101 = {
  code: "FIN3101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3102 = {
  code: "FIN3102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3103 = {
  code: "FIN3103",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3117 = {
  code: "FIN3117",
  name: "Bank Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3118 = {
  code: "FIN3118",
  name: "Financial Risk Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3701 = {
  code: "FIN3701",
  name: "Corporate Finance",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3701A = {
  code: "FIN3701A",
  name: "Corporate Finance",
  mc: 4,
  equivalent: FIN3701,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3701B = {
  code: "FIN3701B",
  name: "Corporate Finance",
  mc: 4,
  equivalent: FIN3701,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3701C = {
  code: "FIN3701C",
  name: "Corporate Finance",
  mc: 4,
  equivalent: FIN3701,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3702 = {
  code: "FIN3702",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3703 = {
  code: "FIN3703",
  name: "Financial Markets",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3703A = {
  code: "FIN3703A",
  name: "Financial Markets",
  mc: 4,
  equivalent: FIN3703,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3703B = {
  code: "FIN3703B",
  name: "Financial Markets",
  mc: 4,
  equivalent: FIN3703,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN3703C = {
  code: "FIN3703C",
  name: "Financial Markets",
  mc: 4,
  equivalent: FIN3703,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3713 = {
  code: "FIN3713",
  name: "Bank Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const FIN3714 = {
  code: "FIN3714",
  name: "Financial Risk Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const FIN4112F = {
  code: "FIN4112F",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FIN4112G = {
  code: "FIN4112G",
  name: "SIF: Private Equity",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN4112L = {
  code: "FIN4112L",
  name: "SIF: Family Business & Wealth Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const FIN4711 = {
  code: "FIN4711",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FIN4761A = {
  code: "FIN4761A",
  name: "SIF: Private Equity",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const FIN4761D = {
  code: "FIN4761D",
  name: "SIF: Family Business & Wealth Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const FMS1203M = {
  code: "FMS1203M",
  name: "FS: The Mathematics of Infinity",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FNA1002 = {
  code: "FNA1002",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FNA1002E = {
  code: "FNA1002E",
  name: "",
  mc: 4,
  equivalent: FNA1002,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FNA1002X = {
  code: "FNA1002X",
  name: "",
  mc: 4,
  equivalent: FNA1002,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FNA2004 = {
  code: "FNA2004",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FNA3102 = {
  code: "FNA3102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FNA3117 = {
  code: "FNA3117",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const FNA3118 = {
  code: "FNA3118",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const GEK1531 = {
  code: "GEK1531",
  name: "Cyber Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GEK1549 = {
  code: "GEK1549",
  name: "Critical Thinking And Writing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GEK1901 = {
  code: "GEK1901",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const GEM1536 = {
  code: "GEM1536",
  name: "Darwin and Evolution",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GEM1917 = {
  code: "GEM1917",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const GEQ1000 = {
  code: "GEQ1000",
  name: "Asking Questions",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GEQ1000H = {
  code: "GEQ1000H",
  name: "Asking Questions",
  mc: 4,
  equivalent: GEQ1000,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GEQ1917 = {
  code: "GEQ1917",
  name: "Understanding and Critiquing Sustainability",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GER1000 = {
  code: "GER1000",
  name: "Quantitative Reasoning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GER1000H = {
  code: "GER1000H",
  name: "Quantitative Reasoning",
  mc: 4,
  equivalent: GER1000,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GET1004 = {
  code: "GET1004",
  name: "Cyber Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GET1006 = {
  code: "GET1006",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const GET1020 = {
  code: "GET1020",
  name: "Darwin and Evolution",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GET1021 = {
  code: "GET1021",
  name: "Critical Thinking And Writing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GET1023 = {
  code: "GET1023",
  name: "Thinking Like An Economist",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const GM1302 = {
  code: "GM1302",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const GM3310 = {
  code: "GM3310",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IC2231 = {
  code: "IC2231",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IC3243 = {
  code: "IC3243",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IE1112 = {
  code: "IE1112",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IE2100 = {
  code: "IE2100",
  name: "Probability Models With Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IE2110 = {
  code: "IE2110",
  name: "Operations Research I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IE3100M = {
  code: "IE3100M",
  name: "System Design Project",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IE3120 = {
  code: "IE3120",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IE4100 = {
  code: "IE4100",
  name: "",
  mc: 12,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IE4100R = {
  code: "IE4100R",
  name: "B.Eng. Dissertation",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IE4102 = {
  code: "IE4102",
  name: "Independent Study Module",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IE4210 = {
  code: "IE4210",
  name: "Operations Research II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IEM1201 = {
  code: "IEM1201",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IFS2200 = {
  code: "IFS2200",
  name: "Information Security Immersion Programme",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IFS4101 = {
  code: "IFS4101",
  name: "Legal Aspects of Information Security",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IFS4102 = {
  code: "IFS4102",
  name: "Digital Forensics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IFS4103 = {
  code: "IFS4103",
  name: "Pnetration Testing Practice",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IFS4201 = {
  code: "IFS4201",
  name: "Information Security Industry Capstone Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IFS4202 = {
  code: "IFS4202",
  name: "Information Security Practicum Programme",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IFS4205 = {
  code: "IFS4205",
  name: "Information Security Capstone Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS1103 = {
  code: "IS1103",
  name: "Ethics in Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS1103X = {
  code: "IS1103X",
  name: "",
  mc: 4,
  equivalent: IS1103,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS1103FC = {
  code: "IS1103FC",
  name: "",
  mc: 4,
  equivalent: IS1103,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS1105 = {
  code: "IS1105",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS2101 = {
  code: "IS2101",
  name: "Business and Technical Communication",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS2102 = {
  code: "IS2102",
  name: "Enterprise Systems Architecture and Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS2103 = {
  code: "IS2103",
  name: "Enterprise Systems Server-side Design and Development",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS2150 = {
  code: "IS2150",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS3101 = {
  code: "IS3101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS3102 = {
  code: "IS3102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS3103 = {
  code: "IS3103",
  name: "Information Systems Leadership and Communication",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS3106 = {
  code: "IS3106",
  name: "Enterprise Systems Interface Design and Development",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS3150 = {
  code: "IS3150",
  name: "Digital Media Marketing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS3221 = {
  code: "IS3221",
  name: "ERP Systems with Analytics Solutions",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS3240 = {
  code: "IS3240",
  name: "Digital Platform Strategy and Architecture",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS3251 = {
  code: "IS3251",
  name: "Principles of Technology Entrepreneurship",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS3261 = {
  code: "IS3261",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS4010 = {
  code: "IS4010",
  name: "Industry Internship Programme",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS4100 = {
  code: "IS4100",
  name: "IT Project Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS4102 = {
  code: "IS4102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS4103 = {
  code: "IS4103",
  name: "Information Systems Capstone Project",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS4150 = {
  code: "IS4150",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS4151 = {
  code: "IS4151",
  name: "Pervasive Technology Solutions and Development",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS4152 = {
  code: "IS4152",
  name: "Affective Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS4204 = {
  code: "IS4204",
  name: "IT Governance",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS4228 = {
  code: "IS4228",
  name: "Information Technologies in Financial Services",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS4231 = {
  code: "IS4231",
  name: "Information Security Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS4233 = {
  code: "IS4233",
  name: "Legal Aspects of Information Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IS4234 = {
  code: "IS4234",
  name: "Compliance and Regulation Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS4240 = {
  code: "IS4240",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS4241 = {
  code: "IS4241",
  name: "Social Media Network Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS4242 = {
  code: "IS4242",
  name: "Intelligent Systems and Techniques",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS4243 = {
  code: "IS4243",
  name: "Information Systems Consulting",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS4250 = {
  code: "IS4250",
  name: "IT-enabled Healthcare Solutioning",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS4261 = {
  code: "IS4261",
  name: "Designing IT-enabled Business Innovations",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS4301 = {
  code: "IS4301",
  name: "Agile IT with DevOps",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IS4302 = {
  code: "IS4302",
  name: "Blockchain and Distributed Ledger Technologies",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS4303 = {
  code: "IS4303",
  name: "IT-mediated financial solutions and platforms",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS5002 = {
  code: "IS5002",
  name: "Digital Transformation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS5110 = {
  code: "IS5110",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IS5128 = {
  code: "IS5128",
  name: "Digital Innovation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IS5451 = {
  code: "IS5451",
  name: "Pervasive Technology Solutions and Development",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const IT1001 = {
  code: "IT1001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IT1002 = {
  code: "IT1002",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IT1006 = {
  code: "IT1006",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IT1007 = {
  code: "IT1007",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IT2001 = {
  code: "IT2001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const IT2002 = {
  code: "IT2002",
  name: "Database Technology and Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const IT3010 = {
  code: "IT3010",
  name: "Data Management for Business Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const IT3011 = {
  code: "IT3011",
  name: "Introduction to Machine Learning and Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const LSM1101 = {
  code: "LSM1101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const LSM1102 = {
  code: "LSM1102",
  name: "Molecular Genetics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const LSM1105 = {
  code: "LSM1105",
  name: "Evolutionary Biology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const LSM1106 = {
  code: "LSM1106",
  name: "Molecular Cell Biology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const LSM1301 = {
  code: "LSM1301",
  name: "General Biology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const LSM1301X = {
  code: "LSM1301X",
  name: "",
  mc: 4,
  equivalent: LSM1301,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const LSM1401 = {
  code: "LSM1401",
  name: "Fundamentals of Biochemistry",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const LSM2241 = {
  code: "LSM2241",
  name: "Introductory Bioinformatics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA1100 = {
  code: "MA1100",
  name: "Basic Discrete Mathematics",
  mc: 4,
  equivalent: CS1231,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA1101 = {
  code: "MA1101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1101R = {
  code: "MA1101R",
  name: "Linear Algebra I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1102 = {
  code: "MA1102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1102R = {
  code: "MA1102R",
  name: "Calculus",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1104 = {
  code: "MA1104",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1104S = {
  code: "MA1104S",
  name: "",
  mc: 4,
  equivalent: MA1104,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1301 = {
  code: "MA1301",
  name: "Introductory Mathematics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1301FC = {
  code: "MA1301FC",
  name: "",
  mc: 4,
  equivalent: MA1301,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1301X = {
  code: "MA1301X",
  name: "Introductory Mathematics",
  mc: 4,
  equivalent: MA1301,
  offered: true,
  sem1: false,
  sem2: true,
  st1: true,
  st2: false
};
const MA1306 = {
  code: "MA1306",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1311 = {
  code: "MA1311",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1312 = {
  code: "MA1312",
  name: "Calculus with Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA1421 = {
  code: "MA1421",
  name: "Basic Applied Mathematics for Sciences",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA1505 = {
  code: "MA1505",
  name: "Mathematics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1505C = {
  code: "MA1505C",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1506 = {
  code: "MA1506",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1507 = {
  code: "MA1507",
  name: "Advanced Calculus",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA1508 = {
  code: "MA1508",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA1508E = {
  code: "MA1508E",
  name: "Linear Algebra for Engineering",
  mc: 4,
  equivalent: MA1508,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1511 = {
  code: "MA1511",
  name: "Engineering Calculus",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1512 = {
  code: "MA1512",
  name: "Differential Equations for Engineering",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1513 = {
  code: "MA1513",
  name: "Linear Algebra with Differential Equations",
  mc: 2,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA1521 = {
  code: "MA1521",
  name: "Calculus for Computing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA2101 = {
  code: "MA2101",
  name: "Linear Algebra II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA2101S = {
  code: "MA2101S",
  name: "Linear Algebra II (S)",
  mc: 5,
  equivalent: MA2101,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA2101H = {
  code: "MA2101H",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2104 = {
  code: "MA2104",
  name: "Multivariable Calculus",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA2108 = {
  code: "MA2108",
  name: "Mathematical Analysis I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA2108S = {
  code: "MA2108S",
  name: "Mathematical Analysis I (S)",
  mc: 5,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA2118 = {
  code: "MA2118",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2118H = {
  code: "MA2118H",
  name: "",
  mc: 4,
  equivalent: MA2118,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2201 = {
  code: "MA2201",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2202 = {
  code: "MA2202",
  name: "Algebra I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA2202S = {
  code: "MA2202S",
  name: "Algebra I (S)",
  mc: 5,
  equivalent: MA2202,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA2203 = {
  code: "MA2203",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2205 = {
  code: "MA2205",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2206 = {
  code: "MA2206",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2208 = {
  code: "MA2208",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2213 = {
  code: "MA2213",
  name: "Numerical Analysis I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA2214 = {
  code: "MA2214",
  name: "Combinatorics and Graphs I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA2215 = {
  code: "MA2215",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2216 = {
  code: "MA2216",
  name: "Probability",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA2219 = {
  code: "MA2219",
  name: "Introduction to Geometry",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA2221 = {
  code: "MA2221",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2222 = {
  code: "MA2222",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2288 = {
  code: "MA2288",
  name: "Basic UROPS in Mathematics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const MA2289 = {
  code: "MA2289",
  name: "Basic UROPS in Mathematics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const MA2311 = {
  code: "MA2311",
  name: "Techniques in Advanced Calculus",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA2312 = {
  code: "MA2312",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA2501 = {
  code: "MA2501",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3110 = {
  code: "MA3110",
  name: "Mathematical Analysis II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA3110S = {
  code: "MA3110S",
  name: "Mathematical Analysis II",
  mc: 5,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3111 = {
  code: "MA3111",
  name: "Complex Analysis I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA3111S = {
  code: "MA3111S",
  name: "Complex Analysis I (S)",
  mc: 5,
  equivalent: MA3111,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA3201 = {
  code: "MA3201",
  name: "Algebra II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA3205 = {
  code: "MA3205",
  name: "Set Theory",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3207H = {
  code: "MA3207H",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3209 = {
  code: "MA3209",
  name: "Mathematical Analysis III",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3210 = {
  code: "MA3210",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3211 = {
  code: "MA3211",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3211S = {
  code: "MA3211S",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3213 = {
  code: "MA3213",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3215 = {
  code: "MA3215",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3218 = {
  code: "MA3218",
  name: "Applied Algebra",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3219 = {
  code: "MA3219",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3220 = {
  code: "MA3220",
  name: "Ordinary Differential Equations",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3227 = {
  code: "MA3227",
  name: "Numerical Analysis II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA3233 = {
  code: "MA3233",
  name: "Combinatorics and Graphs II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA3235 = {
  code: "MA3235",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3236 = {
  code: "MA3236",
  name: "Non-Linear Programming",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3237 = {
  code: "MA3237",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3238 = {
  code: "MA3238",
  name: "Stochastic Processes I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA3239 = {
  code: "MA3239",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3245 = {
  code: "MA3245",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3250 = {
  code: "MA3250",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3251 = {
  code: "MA3251",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3252 = {
  code: "MA3252",
  name: "Linear and Network Optimisation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA3259 = {
  code: "MA3259",
  name: "Mathematical Methods in Genomics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA3264 = {
  code: "MA3264",
  name: "Mathematical Modelling",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3265 = {
  code: "MA3265",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA3269 = {
  code: "MA3269",
  name: "Mathematical Finance I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA3288 = {
  code: "MA3288",
  name: "Advanced UROPS in Mathematics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const MA3289 = {
  code: "MA3289",
  name: "Advanced UROPS in Mathematics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const MA3501 = {
  code: "MA3501",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA4199 = {
  code: "MA4199",
  name: "Honours Project in Mathematics",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MA4203 = {
  code: "MA4203",
  name: "Galois Theory",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4207 = {
  code: "MA4207",
  name: "Mathematical Logic",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4211 = {
  code: "MA4211",
  name: "Functional Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4221 = {
  code: "MA4221",
  name: "Partial Differential Equations",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4229 = {
  code: "MA4229",
  name: "Approximation Theory",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4230 = {
  code: "MA4230",
  name: "Matrix Computation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4235 = {
  code: "MA4235",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA4251 = {
  code: "MA4251",
  name: "Stochastic Processes II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4254 = {
  code: "MA4254",
  name: "Discrete Optimization",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4255 = {
  code: "MA4255",
  name: "Numerical Methods in Differential Equations",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4257 = {
  code: "MA4257",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA4260 = {
  code: "MA4260",
  name: "Stochastic Operations Research",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4261 = {
  code: "MA4261",
  name: "Coding and Cryptography",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4262 = {
  code: "MA4262",
  name: "Measure and Integration",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4264 = {
  code: "MA4264",
  name: "Game Theory",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4266 = {
  code: "MA4266",
  name: "Topology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4268 = {
  code: "MA4268",
  name: "Mathematics for Visual Data Processing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4269 = {
  code: "MA4269",
  name: "Mathematical Finance II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4269A = {
  code: "MA4269A",
  name: "Mathematical Finance II",
  mc: 4,
  equivalent: MA4269,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4270 = {
  code: "MA4270",
  name: "Data Modelling and Computation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MA4271 = {
  code: "MA4271",
  name: "Differential Geometry of Curves and Surfaces",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA4273 = {
  code: "MA4273",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MA5245 = {
  code: "MA5245",
  name: "Advanced Financial Mathematics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MA5248 = {
  code: "MA5248",
  name: "Stochastic Analysis in Mathematical Finance",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MCH5103 = {
  code: "MCH5103",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MCH5201 = {
  code: "MCH5201",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MCH5202 = {
  code: "MCH5202",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MCH5203 = {
  code: "MCH5203",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MCH5205 = {
  code: "MCH5205",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MCH5209 = {
  code: "MCH5209",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ME1102 = {
  code: "ME1102",
  name: "Engineering Principles and Practice I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ME2104 = {
  code: "ME2104",
  name: "Engineering Principles and Practice II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ME2134 = {
  code: "ME2134",
  name: "Fluid Mechanics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ME2142 = {
  code: "ME2142",
  name: "Feedback Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ME2142E = {
  code: "ME2142E",
  name: "Feedback Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ME2492 = {
  code: "ME2492",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ME3101 = {
  code: "ME3101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ME3102 = {
  code: "ME3102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ME3291 = {
  code: "ME3291",
  name: "Numerical Methods In Engineering",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ME4101 = {
  code: "ME4101",
  name: "Bachelor Of Engineering Dissertation",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const ME4101A = {
  code: "ME4101A",
  name: "Bachelor Of Engineering Dissertation",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: true,
  st2: true
};
const ME4233 = {
  code: "ME4233",
  name: "Computational Methods In Fluid Mechanics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ME4246 = {
  code: "ME4246",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ME4501 = {
  code: "ME4501",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ME5401 = {
  code: "ME5401",
  name: "Linear Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ME5402 = {
  code: "ME5402",
  name: "Advanced Robotics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ME5403 = {
  code: "ME5403",
  name: "Computer Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ME5404 = {
  code: "ME5404",
  name: "Neural Networks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MKT1003 = {
  code: "MKT1003",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MKT1003A = {
  code: "MKT1003A",
  name: "Principles of Marketing",
  mc: 4,
  equivalent: MKT1003,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MKT1003B = {
  code: "MKT1003B",
  name: "Principles of Marketing",
  mc: 4,
  equivalent: MKT1003,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MKT1003C = {
  code: "MKT1003C",
  name: "Principles of Marketing",
  mc: 4,
  equivalent: MKT1003,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MKT1003D = {
  code: "MKT1003D",
  name: "Principles of Marketing",
  mc: 4,
  equivalent: MKT1003,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MKT1003X = {
  code: "MKT1003X",
  name: "Principles of Marketing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MKT1705 = {
  code: "MKT1705",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MKT1705A = {
  code: "MKT1705A",
  name: "Principles of Marketing",
  mc: 4,
  equivalent: MKT1705,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MKT1705X = {
  code: "MKT1705X",
  name: "Principles of Marketing",
  mc: 4,
  equivalent: MKT1705,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MKT2401 = {
  code: "MKT2401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MKT4415C = {
  code: "MKT4415C",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MKT4420 = {
  code: "MKT4420",
  name: "Marketing Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MKT4812 = {
  code: "MKT4812",
  name: "Marketing Analytics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MLE1001 = {
  code: "MLE1001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MLE1002 = {
  code: "MLE1002",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MLE1101 = {
  code: "MLE1101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MLE1111 = {
  code: "MLE1111",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MLE2101 = {
  code: "MLE2101",
  name: "Introduction to Structure of Materials",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MLE2102 = {
  code: "MLE2102",
  name: "Thermodynamics and Phase Diagrams",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MLE2103 = {
  code: "MLE2103",
  name: "Phase Transformation and Kinetics",
  mc: 3,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MLE2104 = {
  code: "MLE2104",
  name: "Mechanical Properties of Materials",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MLE2105 = {
  code: "MLE2105",
  name: "Electronic Properties of Materials",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MLE3101 = {
  code: "MLE3101",
  name: "Materials Characterization Laboratory",
  mc: 3,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const MLE3103 = {
  code: "MLE3103",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MLE3105 = {
  code: "MLE3105",
  name: "Dielectric and Magnetic Materials",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MLE4101 = {
  code: "MLE4101",
  name: "B.Eng. Dissertation",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MLE4101A = {
  code: "MLE4101A",
  name: "B.Eng. Dissertation",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MLE4101N = {
  code: "MLE4101N",
  name: "",
  mc: 6,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MLE4102 = {
  code: "MLE4102",
  name: "Design Project",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const MNO2706 = {
  code: "MNO2706",
  name: "Business Communication for Leaders (ACC)",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const MQ2101 = {
  code: "MQ2101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MQ2102 = {
  code: "MQ2102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MQ2201 = {
  code: "MQ2201",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MQ2202 = {
  code: "MQ2202",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MQ2203 = {
  code: "MQ2203",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MQ2204 = {
  code: "MQ2204",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MQ3201 = {
  code: "MQ3201",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MQ3202 = {
  code: "MQ3202",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MT4003 = {
  code: "MT4003",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MT5001 = {
  code: "MT5001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const MT5010 = {
  code: "MT5010",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const NM1101E = {
  code: "NM1101E",
  name: "Communications, New Media and Society",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const NM1101X = {
  code: "NM1101X",
  name: "Communications, New Media and Society",
  mc: 4,
  equivalent: NM1101E,
  offered: true,
  sem1: false,
  sem2: true,
  st1: true,
  st2: false
};
const NM1101FC = {
  code: "NM1101FC",
  name: "",
  mc: 4,
  equivalent: NM1101E,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const NM2207 = {
  code: "NM2207",
  name: "Computational Media Literacy",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const NM2207Y = {
  code: "NM2207Y",
  name: "",
  mc: 4,
  equivalent: NM2207,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const NM2213 = {
  code: "NM2213",
  name: "Introduction to Human-Computer Interaction Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const NM2216 = {
  code: "NM2216",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const NM3209 = {
  code: "NM3209",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const NM3216 = {
  code: "NM3216",
  name: "Game Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC1141 = {
  code: "PC1141",
  name: "Introduction to Classical Mechanics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC1142 = {
  code: "PC1142",
  name: "Introduction to Thermodynamics and Optics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC1143 = {
  code: "PC1143",
  name: "Introduction to Electricity & Magnetism",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PC1144 = {
  code: "PC1144",
  name: "Introduction to Modern Physics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PC1221 = {
  code: "PC1221",
  name: "Fundamentals of Physics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const PC1221X = {
  code: "PC1221X",
  name: "",
  mc: 4,
  equivalent: PC1221,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC1221FC = {
  code: "PC1221FC",
  name: "",
  mc: 4,
  equivalent: PC1221,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC1222 = {
  code: "PC1222",
  name: "Fundamentals of Physics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const PC1222X = {
  code: "PC1222X",
  name: "",
  mc: 4,
  equivalent: PC1222,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC1431 = {
  code: "PC1431",
  name: "Physics IE",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const PC1431X = {
  code: "PC1431X",
  name: "",
  mc: 4,
  equivalent: PC1431,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC1431FC = {
  code: "PC1431FC",
  name: "",
  mc: 4,
  equivalent: PC1431,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC1432 = {
  code: "PC1432",
  name: "Physics IIE",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const PC1432X = {
  code: "PC1432X",
  name: "",
  mc: 4,
  equivalent: PC1432,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC1433 = {
  code: "PC1433",
  name: "Mechanics and Waves",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC2020 = {
  code: "PC2020",
  name: "Electromagnetics for Electrical Engineers",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const PC2130 = {
  code: "PC2130",
  name: "Quantum Mechanics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PC2130B = {
  code: "PC2130B",
  name: "Applied Quantum Physics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PC2131 = {
  code: "PC2131",
  name: "Electricity & Magnetism I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC2132 = {
  code: "PC2132",
  name: "Classical Mechanics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC2133 = {
  code: "PC2133",
  name: "Applied Solid State Physics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PC2134 = {
  code: "PC2134",
  name: "Mathematical Mtds in Physics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const PC2174 = {
  code: "PC2174",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC2232 = {
  code: "PC2232",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PC3130 = {
  code: "PC3130",
  name: "Quantum Mechanics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC3231 = {
  code: "PC3231",
  name: "Electricity & Magnetism II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC3235 = {
  code: "PC3235",
  name: "Solid State Physics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC3236 = {
  code: "PC3236",
  name: "Computational Methods in Physics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PC3238 = {
  code: "PC3238",
  name: "Fluid Dynamics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC3274 = {
  code: "PC3274",
  name: "Mathematical Methods in Physics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PC4240 = {
  code: "PC4240",
  name: "Solid State Physics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC4248 = {
  code: "PC4248",
  name: "General Relativity",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const PC4274 = {
  code: "PC4274",
  name: "Mathematical Methods in Physics III",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const PR1111A = {
  code: "PR1111A",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PR1140 = {
  code: "PR1140",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PR2103 = {
  code: "PR2103",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const PR4201 = {
  code: "PR4201",
  name: "Pharmaceutical Marketing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const QF2101 = {
  code: "QF2101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const QF3101 = {
  code: "QF3101",
  name: "Investment Instruments: Theory and Computation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const QF4102 = {
  code: "QF4102",
  name: "Financial Modelling and Computation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const QF4102A = {
  code: "QF4102A",
  name: "Financial Modelling and Computation",
  mc: 4,
  equivalent: QF4102,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const QF4199 = {
  code: "QF4199",
  name: "Honours Project in Quantitative Finance",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const QF5210 = {
  code: "QF5210",
  name: "Financial Time Series: Theory and Computation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const QF5210A = {
  code: "QF5210A",
  name: "Financial Time Series: Theory and Computation",
  mc: 4,
  equivalent: QF5210,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const RE1704 = {
  code: "RE1704",
  name: "Principles of Real Estate Economics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const RE2106 = {
  code: "RE2106",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const RE3104 = {
  code: "RE3104",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const RE3701 = {
  code: "RE3701",
  name: "Real Estate Investment Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const RE3704 = {
  code: "RE3704",
  name: "Real Estate Marketing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const RE3801 = {
  code: "RE3801",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const RE3807 = {
  code: "RE3807",
  name: "Corporate Finance for Real Estate",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const SA4101 = {
  code: "SA4101",
  name: "Software Analysis and Design",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SA4102 = {
  code: "SA4102",
  name: "Enterprise Solutions Design and Development",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SA4104 = {
  code: "SA4104",
  name: "Digital Product Management",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SA4105 = {
  code: "SA4105",
  name: "Web Application Development",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SA4106 = {
  code: "SA4106",
  name: "AD Project",
  mc: 6,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SA4107 = {
  code: "SA4107",
  name: "Industrial Attachment Project",
  mc: 12,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SA4108 = {
  code: "SA4108",
  name: "Mobile Application Development",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SG5233 = {
  code: "SG5233",
  name: "Internet of Things Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const SMA5508 = {
  code: "SMA5508",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const SP1202 = {
  code: "SP1202",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const SP1203 = {
  code: "SP1203",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const SP1541 = {
  code: "SP1541",
  name: "Exploring Science Communication through Popular Science",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const SP2171 = {
  code: "SP2171",
  name: "Discovering Science",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ST1131 = {
  code: "ST1131",
  name: "Introduction to Statistics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ST1131A = {
  code: "ST1131A",
  name: "",
  mc: 4,
  equivalent: ST1131,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ST1232 = {
  code: "ST1232",
  name: "Statistics for Life Sciences",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ST2131 = {
  code: "ST2131",
  name: "Probability",
  mc: 4,
  equivalent: MA2216,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ST2132 = {
  code: "ST2132",
  name: "Mathematical Statistics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ST2236 = {
  code: "ST2236",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ST2334 = {
  code: "ST2334",
  name: "Probability and Statistics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ST2335 = {
  code: "ST2335",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ST3131 = {
  code: "ST3131",
  name: "Regression Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ST3232 = {
  code: "ST3232",
  name: "Design & Analysis of Experiments",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ST3233 = {
  code: "ST3233",
  name: "Applied Time Series Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ST3236 = {
  code: "ST3236",
  name: "Stochastic Processes I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const ST3239 = {
  code: "ST3239",
  name: "Survey Methodology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ST3240 = {
  code: "ST3240",
  name: "Multivariate Statistical Analysis",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ST3247 = {
  code: "ST3247",
  name: "Simulation",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ST3248 = {
  code: "ST3248",
  name: "Statistical Learning I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ST4231 = {
  code: "ST4231",
  name: "Computer Intensive Statistical Methods",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ST4233 = {
  code: "ST4233",
  name: "Linear Models",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ST4234 = {
  code: "ST4234",
  name: "Bayesian Statistics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ST4238 = {
  code: "ST4238",
  name: "Stochastic Processes II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const ST4240 = {
  code: "ST4240",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const ST4245 = {
  code: "ST4245",
  name: "Statistical Methods for Finance",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const ST4248 = {
  code: "ST4248",
  name: "Statistical Learning II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TC1402 = {
  code: "TC1402",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TC2401 = {
  code: "TC2401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TCE2407 = {
  code: "TCE2407",
  name: "Engineering & Uncertainty Analyses",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: false,
  st1: true,
  st2: false
};
const TCE4104 = {
  code: "TCE4104",
  name: "BTech Dissertation",
  mc: 8,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TD5103 = {
  code: "TD5103",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TD5180A = {
  code: "TD5180A",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TD5241 = {
  code: "TD5241",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TE1122 = {
  code: "TE1122",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TE2002 = {
  code: "TE2002",
  name: "Engineering Mathematics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TE2003 = {
  code: "TE2003",
  name: "Advanced Mathematics for Engineers",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TE2101 = {
  code: "TE2101",
  name: "Programming Methodology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TE2102 = {
  code: "TE2102",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TE2401 = {
  code: "TE2401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE2002 = {
  code: "TEE2002",
  name: "Engineering Mathematics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TEE2003 = {
  code: "TEE2003",
  name: "Advanced Mathematics for Engineers",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TEE2011 = {
  code: "TEE2011",
  name: "Engineering Electromagnetics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE2020 = {
  code: "TEE2020",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE2021 = {
  code: "TEE2021",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE2023 = {
  code: "TEE2023",
  name: "Signals and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE2024 = {
  code: "TEE2024",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE2026 = {
  code: "TEE2026",
  name: "Digital Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE2027 = {
  code: "TEE2027",
  name: "Electronic Circuits",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE2028 = {
  code: "TEE2028",
  name: "Microcontroller Programming and Interfacing",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE2101 = {
  code: "TEE2101",
  name: "Programming Methodology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TEE3031 = {
  code: "TEE3031",
  name: "Innovation & Enterprise I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE3104 = {
  code: "TEE3104",
  name: "Intro to RF and Microwave Sys & Circuits",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE3131 = {
  code: "TEE3131",
  name: "Communication Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE3204 = {
  code: "TEE3204",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE3206 = {
  code: "TEE3206",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE3207 = {
  code: "TEE3207",
  name: "Computer Architecture",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE3302 = {
  code: "TEE3302",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE3331 = {
  code: "TEE3331",
  name: "Feedback Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TEE3407 = {
  code: "TEE3407",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TEE3408 = {
  code: "TEE3408",
  name: "Integrated Analog Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE3501 = {
  code: "TEE3501",
  name: "Power Electronics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE4101 = {
  code: "TEE4101",
  name: "Radio-Frequency (RF) Communications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE4112 = {
  code: "TEE4112",
  name: "Radio Frequency Design and Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE4204 = {
  code: "TEE4204",
  name: "Computer Netwroks",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE4210 = {
  code: "TEE4210",
  name: "Network Protocols and Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE4214 = {
  code: "TEE4214",
  name: "Real-Time Embedded Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE4303 = {
  code: "TEE4303",
  name: "Industrial Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE4407 = {
  code: "TEE4407",
  name: "Analog Electronics",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE4415 = {
  code: "TEE4415",
  name: "Integrated Digital Design",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TEE4435 = {
  code: "TEE4435",
  name: "Modern Transistors and Memory Devices",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE4436 = {
  code: "TEE4436",
  name: "Fabrication Process Technology",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TEE4704 = {
  code: "TEE4704",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TG1401 = {
  code: "TG1401",
  name: "Engineering Mathematics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TIC1001 = {
  code: "TIC1001",
  name: "Introduction to Computing and Programming I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TIC1002 = {
  code: "TIC1002",
  name: "Introduction to Computing and Programming II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TIC2401 = {
  code: "TIC2401",
  name: "Introduction to Computer Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TIC2501 = {
  code: "TIC2501",
  name: "Computer Netwroks and Applications",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const TM1401 = {
  code: "TM1401",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TM1402 = {
  code: "TM1402",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TM2401 = {
  code: "TM2401",
  name: "Engineering Mathematics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TM3142 = {
  code: "TM3142",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TM4209 = {
  code: "TM4209",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TME2142 = {
  code: "TME2142",
  name: "Feedback Control Systems",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const TME2401 = {
  code: "TME2401",
  name: "Engineering Mathematics II",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TME4209 = {
  code: "TME4209",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const TR3001 = {
  code: "TR3001",
  name: "New Product Development",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const TTG1401 = {
  code: "TTG1401",
  name: "Engineering Mathematics I",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTC1102B = {
  code: "UTC1102B",
  name: "Junior Seminar: The Darwinian Revolution",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102C = {
  code: "UTC1102C",
  name: "Junior Seminar: Fakes",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102E = {
  code: "UTC1102E",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102G = {
  code: "UTC1102G",
  name: "Junior Seminar: Proof: What’s Truth got to do with it?",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102H = {
  code: "UTC1102H",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102M = {
  code: "UTC1102M",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102N = {
  code: "UTC1102N",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102P = {
  code: "UTC1102P",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102R = {
  code: "UTC1102R",
  name: "Junior Seminar: Green Capitalism: A Critical Engagement",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102S = {
  code: "UTC1102S",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102U = {
  code: "UTC1102U",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1102V = {
  code: "UTC1102V",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1112A = {
  code: "UTC1112A",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1112B = {
  code: "UTC1112B",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1112F = {
  code: "UTC1112F",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1112G = {
  code: "UTC1112G",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1113 = {
  code: "UTC1113",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1114 = {
  code: "UTC1114",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1115 = {
  code: "UTC1115",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1116 = {
  code: "UTC1116",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1117 = {
  code: "UTC1117",
  name: "Junior Seminar: Radiation and Society",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1118 = {
  code: "UTC1118",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1119 = {
  code: "UTC1119",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC1120 = {
  code: "UTC1120",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC2101 = {
  code: "UTC2101",
  name: "Time and Life",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC2102 = {
  code: "UTC2102",
  name: "Climate Change",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC2107 = {
  code: "UTC2107",
  name: "Senior Seminar: Negotiating in a Complex World",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTC2108 = {
  code: "UTC2108",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC2109 = {
  code: "UTC2109",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC2111 = {
  code: "UTC2111",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTC2113 = {
  code: "UTC2113",
  name: "Gaming Life",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTS2100 = {
  code: "UTS2100",
  name: "Intelligence and Singapore Society",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTS2101 = {
  code: "UTS2101",
  name: "Biomedicine and Singapore Society",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTS2105 = {
  code: "UTS2105",
  name: "Singapore as \'Model\' City?",
  mc: 4,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTS2109 = {
  code: "UTS2109",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTS2114 = {
  code: "UTS2114",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTW1001 = {
  code: "UTW1001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTW1001A = {
  code: "UTW1001A",
  name: "Identities and Ideas in Modern Market-Driven Societies",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTW1001B = {
  code: "UTW1001B",
  name: "What is a nation? Texts, images and national identity",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const UTW1001C = {
  code: "UTW1001C",
  name: "At the Edges of the Law: Ethics, Morality and Society",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTW1001D = {
  code: "UTW1001D",
  name: "Self, Society, and the Digital Tsunami era",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTW1001E = {
  code: "UTW1001E",
  name: "From Human to \'Posthuman\'",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTW1001F = {
  code: "UTW1001F",
  name: "The Internationalisation of Higher Education: Impact and Challenges",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTW1001G = {
  code: "UTW1001G",
  name: "Human Behaviours: How do \'I\' fit in this Social World?",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTW1001H = {
  code: "UTW1001H",
  name: "Eating Right(s): The Politics of Food",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTW1001S = {
  code: "UTW1001S",
  name: "Women in Film",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const UTW1001W = {
  code: "UTW1001W",
  name: "The Online Politician: The Use of Social Media in Political Communication",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const UTW1001Z = {
  code: "UTW1001Z",
  name: "Colour: Theory, meaning and practice",
  mc: 4,
  equivalent: UTW1001,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const UTW2001 = {
  code: "UWCW2001",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const UTW2001H = {
  code: "UTW2001H",
  name: "RISK and Popular Culture",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: false,
  sem2: true,
  st1: false,
  st2: false
};
const UTW2001J = {
  code: "UTW2001J",
  name: "Blood, Death and Desire, Interpreting the Vampire",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTW2001M = {
  code: "UTW2001M",
  name: "Sport and Socialization",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTW2001P = {
  code: "UTW2001P",
  name: "Science Fiction and Empire",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTW2001Q = {
  code: "UTW2001Q",
  name: "\'What\'s in a word?\' Meaning across cultures",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTW2001R = {
  code: "UTW2001R",
  name: "Discourse, Citizenship, and Society",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const UTW2001W = {
  code: "UTW2001W",
  name: "Alter ego / authentic self? Online political identities",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UTW2001Z = {
  code: "UTW2001Z",
  name: "The Semiotics of Colour",
  mc: 4,
  equivalent: UTW2001,
  offered: true,
  sem1: true,
  sem2: false,
  st1: false,
  st2: false
};
const UWC2101 = {
  code: "UWC2101",
  name: "",
  mc: 4,
  equivalent: null,
  offered: false,
  sem1: false,
  sem2: false,
  st1: false,
  st2: false
};
const WR1401 = {
  code: "WR1401",
  name: "Workplace Readiness",
  mc: 0,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};
const XFS4199M = {
  code: "XFS4199M",
  name: "Integrated Honours Project",
  mc: 15,
  equivalent: null,
  offered: true,
  sem1: true,
  sem2: true,
  st1: false,
  st2: false
};


let moduleMap = {};
moduleMap["ACC1002"] = ACC1002;
moduleMap["ACC1002X"] = ACC1002X;
moduleMap["ACC1701"] = ACC1701;
moduleMap["ACC1701X"] = ACC1701X;
moduleMap["BH1002"] = BH1002;
moduleMap["BH1002E"] = BH1002E;
moduleMap["BH1003"] = BH1003;
moduleMap["BH1005"] = BH1005;
moduleMap["BH2004"] = BH2004;
moduleMap["BH3118"] = BH3118;
moduleMap["BH3214"] = BH3214;
moduleMap["BK1003"] = BK1003;
moduleMap["BK1008"] = BK1008;
moduleMap["BK2003"] = BK2003;
moduleMap["BK2004"] = BK2004;
moduleMap["BN2102"] = BN2102;
moduleMap["BN2203"] = BN2203;
moduleMap["BN2401"] = BN2401;
moduleMap["BN3101"] = BN3101;
moduleMap["BN4101"] = BN4101;
moduleMap["BN4101R"] = BN4101R;
moduleMap["BSE3701"] = BSE3701;
moduleMap["BSE3703"] = BSE3703;
moduleMap["BSE4711"] = BSE4711;
moduleMap["BSP1005"] = BSP1005;
moduleMap["BSP1703"] = BSP1703;
moduleMap["BSP1707"] = BSP1707;
moduleMap["BSP2001"] = BSP2001;
moduleMap["BSP2701"] = BSP2701;
moduleMap["BT1101"] = BT1101;
moduleMap["BT2010"] = BT2010;
moduleMap["BT2101"] = BT2101;
moduleMap["BT2102"] = BT2102;
moduleMap["BT3101"] = BT3101;
moduleMap["BT3102"] = BT3102;
moduleMap["BT3103"] = BT3103;
moduleMap["BT4010"] = BT4010;
moduleMap["BT4011"] = BT4011;
moduleMap["BT4012"] = BT4012;
moduleMap["BT4013"] = BT4013;
moduleMap["BT4014"] = BT4014;
moduleMap["BT4015"] = BT4015;
moduleMap["BT4016"] = BT4016;
moduleMap["BT4101"] = BT4101;
moduleMap["BT4103"] = BT4103;
moduleMap["BT4211"] = BT4211;
moduleMap["BT4212"] = BT4212;
moduleMap["BT4221"] = BT4221;
moduleMap["BT4222"] = BT4222;
moduleMap["BT4240"] = BT4240;
moduleMap["BT5110"] = BT5110;
moduleMap["BZ1002"] = BZ1002;
moduleMap["BZ1002E"] = BZ1002E;
moduleMap["BZ1003"] = BZ1003;
moduleMap["BZ1005"] = BZ1005;
moduleMap["BZ2004"] = BZ2004;
moduleMap["BZ3305"] = BZ3305;
moduleMap["CE1402"] = CE1402;
moduleMap["CE2407"] = CE2407;
moduleMap["CE4104"] = CE4104;
moduleMap["CG1108"] = CG1108;
moduleMap["CG1111"] = CG1111;
moduleMap["CG1112"] = CG1112;
moduleMap["CG1413"] = CG1413;
moduleMap["CG2007"] = CG2007;
moduleMap["CG2023"] = CG2023;
moduleMap["CG2027"] = CG2027;
moduleMap["CG2028"] = CG2028;
moduleMap["CG2271"] = CG2271;
moduleMap["CG3002"] = CG3002;
moduleMap["CG3207"] = CG3207;
moduleMap["CG4001"] = CG4001;
moduleMap["CG4002"] = CG4002;
moduleMap["CG4003"] = CG4003;
moduleMap["CM1417"] = CM1417;
moduleMap["CM1417X"] = CM1417X;
moduleMap["CN1111"] = CN1111;
moduleMap["CN2101"] = CN2101;
moduleMap["CN2108"] = CN2108;
moduleMap["CN2116"] = CN2116;
moduleMap["CN2121"] = CN2121;
moduleMap["CN2122"] = CN2122;
moduleMap["CN2122A"] = CN2122A;
moduleMap["CN2125"] = CN2125;
moduleMap["CN2401"] = CN2401;
moduleMap["CN3101"] = CN3101;
moduleMap["CN3108"] = CN3108;
moduleMap["CN3121"] = CN3121;
moduleMap["CN3124"] = CN3124;
moduleMap["CN3132"] = CN3132;
moduleMap["CN3135"] = CN3135;
moduleMap["CN3411"] = CN3411;
moduleMap["CN3421"] = CN3421;
moduleMap["CN4118"] = CN4118;
moduleMap["CN4118R"] = CN4118R;
moduleMap["CN4217"] = CN4217;
moduleMap["CP3106"] = CP3106;
moduleMap["CP3200"] = CP3200;
moduleMap["CP3208"] = CP3208;
moduleMap["CP3209"] = CP3209;
moduleMap["CP3880"] = CP3880;
moduleMap["CP4101"] = CP4101;
moduleMap["CP4106"] = CP4106;
moduleMap["CS1010"] = CS1010;
moduleMap["CS1010S"] = CS1010S;
moduleMap["CS1010X"] = CS1010X;
moduleMap["CS1010J"] = CS1010J;
moduleMap["CS1010E"] = CS1010E;
moduleMap["CS1010XCP"] = CS1010XCP;
moduleMap["CS1010FC"] = CS1010FC;
moduleMap["CS1020"] = CS1020;
moduleMap["CS1020E"] = CS1020E;
moduleMap["CS1101"] = CS1101;
moduleMap["CS1101C"] = CS1101C;
moduleMap["CS1101S"] = CS1101S;
moduleMap["CS1104"] = CS1104;
moduleMap["CS1231"] = CS1231;
moduleMap["CS1231S"] = CS1231S;
moduleMap["CS1304"] = CS1304;
moduleMap["CS2010"] = CS2010;
moduleMap["CS2020"] = CS2020;
moduleMap["CS2023"] = CS2023;
moduleMap["CS2030"] = CS2030;
moduleMap["CS2030S"] = CS2030S;
moduleMap["CS2040"] = CS2040;
moduleMap["CS2040C"] = CS2040C;
moduleMap["CS2040S"] = CS2040S;
moduleMap["CS2100"] = CS2100;
moduleMap["CS2101"] = CS2101;
moduleMap["CS2102"] = CS2102;
moduleMap["CS2102S"] = CS2102S;
moduleMap["CS2103"] = CS2103;
moduleMap["CS2103T"] = CS2103T;
moduleMap["CS2104"] = CS2104;
moduleMap["CS2105"] = CS2105;
moduleMap["CS2106"] = CS2106;
moduleMap["CS2107"] = CS2107;
moduleMap["CS2108"] = CS2108;
moduleMap["CS2113"] = CS2113;
moduleMap["CS2113T"] = CS2113T;
moduleMap["CS2220"] = CS2220;
moduleMap["CS2251"] = CS2251;
moduleMap["CS2301"] = CS2301;
moduleMap["CS2305S"] = CS2305S;
moduleMap["CS3103"] = CS3103;
moduleMap["CS3201"] = CS3201;
moduleMap["CS3202"] = CS3202;
moduleMap["CS3203"] = CS3203;
moduleMap["CS3205"] = CS3205;
moduleMap["CS3208"] = CS3208;
moduleMap["CS3210"] = CS3210;
moduleMap["CS3211"] = CS3211;
moduleMap["CS3213"] = CS3213;
moduleMap["CS3214"] = CS3214;
moduleMap["CS3215"] = CS3215;
moduleMap["CS3216"] = CS3216;
moduleMap["CS3217"] = CS3217;
moduleMap["CS3219"] = CS3219;
moduleMap["CS3220"] = CS3220;
moduleMap["CS3223"] = CS3223;
moduleMap["CS3226"] = CS3226;
moduleMap["CS3230"] = CS3230;
moduleMap["CS3233"] = CS3233;
moduleMap["CS3234"] = CS3234;
moduleMap["CS3235"] = CS3235;
moduleMap["CS3236"] = CS3236;
moduleMap["CS3237"] = CS3237;
moduleMap["CS3240"] = CS3240;
moduleMap["CS3241"] = CS3241;
moduleMap["CS3242"] = CS3242;
moduleMap["CS3243"] = CS3243;
moduleMap["CS3244"] = CS3244;
moduleMap["CS3245"] = CS3245;
moduleMap["CS3246"] = CS3246;
moduleMap["CS3247"] = CS3247;
moduleMap["CS3249"] = CS3249;
moduleMap["CS3252"] = CS3252;
moduleMap["CS3254"] = CS3254;
moduleMap["CS3261"] = CS3261;
moduleMap["CS3281"] = CS3281;
moduleMap["CS3282"] = CS3282;
moduleMap["CS3283"] = CS3283;
moduleMap["CS3284"] = CS3284;
moduleMap["CS4101"] = CS4101;
moduleMap["CS4201"] = CS4201;
moduleMap["CS4203"] = CS4203;
moduleMap["CS4211"] = CS4211;
moduleMap["CS4212"] = CS4212;
moduleMap["CS4215"] = CS4215;
moduleMap["CS4216"] = CS4216;
moduleMap["CS4218"] = CS4218;
moduleMap["CS4220"] = CS4220;
moduleMap["CS4221"] = CS4221;
moduleMap["CS4222"] = CS4222;
moduleMap["CS4224"] = CS4224;
moduleMap["CS4225"] = CS4225;
moduleMap["CS4226"] = CS4226;
moduleMap["CS4230"] = CS4230;
moduleMap["CS4231"] = CS4231;
moduleMap["CS4232"] = CS4232;
moduleMap["CS4234"] = CS4234;
moduleMap["CS4236"] = CS4236;
moduleMap["CS4238"] = CS4238;
moduleMap["CS4239"] = CS4239;
moduleMap["CS4240"] = CS4240;
moduleMap["CS4242"] = CS4242;
moduleMap["CS4243"] = CS4243;
moduleMap["CS4244"] = CS4244;
moduleMap["CS4246"] = CS4246;
moduleMap["CS4247"] = CS4247;
moduleMap["CS4248"] = CS4248;
moduleMap["CS4249"] = CS4249;
moduleMap["CS4257"] = CS4257;
moduleMap["CS4259"] = CS4259;
moduleMap["CS4261"] = CS4261;
moduleMap["CS4268"] = CS4268;
moduleMap["CS4269"] = CS4269;
moduleMap["CS4276"] = CS4276;
moduleMap["CS4277"] = CS4277;
moduleMap["CS4278"] = CS4278;
moduleMap["CS4330"] = CS4330;
moduleMap["CS4342"] = CS4342;
moduleMap["CS4344"] = CS4344;
moduleMap["CS4347"] = CS4347;
moduleMap["CS4350"] = CS4350;
moduleMap["CS4351"] = CS4351;
moduleMap["CS5212"] = CS5212;
moduleMap["CS5214"] = CS5214;
moduleMap["CS5215"] = CS5215;
moduleMap["CS5218"] = CS5218;
moduleMap["CS5219"] = CS5219;
moduleMap["CS5222"] = CS5222;
moduleMap["CS5223"] = CS5223;
moduleMap["CS5224"] = CS5224;
moduleMap["CS5226"] = CS5226;
moduleMap["CS5228"] = CS5228;
moduleMap["CS5229"] = CS5229;
moduleMap["CS5230"] = CS5230;
moduleMap["CS5231"] = CS5231;
moduleMap["CS5232"] = CS5232;
moduleMap["CS5233"] = CS5233;
moduleMap["CS5234"] = CS5234;
moduleMap["CS5236"] = CS5236;
moduleMap["CS5237"] = CS5237;
moduleMap["CS5238"] = CS5238;
moduleMap["CS5239"] = CS5239;
moduleMap["CS5240"] = CS5240;
moduleMap["CS5241"] = CS5241;
moduleMap["CS5242"] = CS5242;
moduleMap["CS5246"] = CS5246;
moduleMap["CS5248"] = CS5248;
moduleMap["CS5250"] = CS5250;
moduleMap["CS5260"] = CS5260;
moduleMap["CS5270"] = CS5270;
moduleMap["CS5272"] = CS5272;
moduleMap["CS5321"] = CS5321;
moduleMap["CS5322"] = CS5322;
moduleMap["CS5330"] = CS5330;
moduleMap["CS5331"] = CS5331;
moduleMap["CS5332"] = CS5332;
moduleMap["CS5339"] = CS5339;
moduleMap["CS5340"] = CS5340;
moduleMap["CS5343"] = CS5343;
moduleMap["CS5344"] = CS5344;
moduleMap["CS5346"] = CS5346;
moduleMap["CS5421"] = CS5421;
moduleMap["CS5422"] = CS5422;
moduleMap["CS5424"] = CS5424;
moduleMap["CS5439"] = CS5439;
moduleMap["CS5425"] = CS5425;
moduleMap["CS5446"] = CS5446;
moduleMap["CS5476"] = CS5476;
moduleMap["CS5477"] = CS5477;
moduleMap["CS5478"] = CS5478;
moduleMap["CS6101"] = CS6101;
moduleMap["CS6203"] = CS6203;
moduleMap["CS6207"] = CS6207;
moduleMap["CS6208"] = CS6208;
moduleMap["CS6210"] = CS6210;
moduleMap["CS6211"] = CS6211;
moduleMap["CS6213"] = CS6213;
moduleMap["CS6215"] = CS6215;
moduleMap["CS6219"] = CS6219;
moduleMap["CS6231"] = CS6231;
moduleMap["CS6234"] = CS6234;
moduleMap["CS6240"] = CS6240;
moduleMap["CS6244"] = CS6244;
moduleMap["CS6283"] = CS6283;
moduleMap["DAO1704"] = DAO1704;
moduleMap["DAO1704X"] = DAO1704X;
moduleMap["DAO2702"] = DAO2702;
moduleMap["DBA3701"] = DBA3701;
moduleMap["DBA3711"] = DBA3711;
moduleMap["DBA3712"] = DBA3712;
moduleMap["DBA3803"] = DBA3803;
moduleMap["DBA4811"] = DBA4811;
moduleMap["DMS1401MA"] = DMS1401MA;
moduleMap["DSA1101"] = DSA1101;
moduleMap["DSA2101"] = DSA2101;
moduleMap["DSA2102"] = DSA2102;
moduleMap["DSA3101"] = DSA3101;
moduleMap["DSA3102"] = DSA3102;
moduleMap["DSA4199"] = DSA4199;
moduleMap["DSA4211"] = DSA4211;
moduleMap["DSA4212"] = DSA4212;
moduleMap["DSA4264"] = DSA4264;
moduleMap["DSA4264A"] = DSA4264A;
moduleMap["DSA4264B"] = DSA4264B;
moduleMap["DSA4266"] = DSA4266;
moduleMap["DSA4266A"] = DSA4266A;
moduleMap["DSA4266B"] = DSA4266B;
moduleMap["DSA4299"] = DSA4299;
moduleMap["DSA5101"] = DSA5101;
moduleMap["DSA5102"] = DSA5102;
moduleMap["DSA5201"] = DSA5201;
moduleMap["DSA5202"] = DSA5202;
moduleMap["DSC1007"] = DSC1007;
moduleMap["DSC1007X"] = DSC1007X;
moduleMap["DSC2008"] = DSC2008;
moduleMap["DSC3214"] = DSC3214;
moduleMap["DSC3215"] = DSC3215;
moduleMap["DSC3216"] = DSC3216;
moduleMap["DSC4213"] = DSC4213;
moduleMap["DSN3701"] = DSN3701;
moduleMap["EC1101E"] = EC1101E;
moduleMap["EC1301"] = EC1301;
moduleMap["EC2101"] = EC2101;
moduleMap["EC2102"] = EC2102;
moduleMap["EC2104"] = EC2104;
moduleMap["EC2204"] = EC2204;
moduleMap["EC2210"] = EC2210;
moduleMap["EC2231"] = EC2231;
moduleMap["EC2303"] = EC2303;
moduleMap["EC3101"] = EC3101;
moduleMap["EC3102"] = EC3102;
moduleMap["EC3209"] = EC3209;
moduleMap["EC3212"] = EC3212;
moduleMap["EC3230"] = EC3230;
moduleMap["EC3303"] = EC3303;
moduleMap["EC3312"] = EC3312;
moduleMap["EC3333"] = EC3333;
moduleMap["EC4301"] = EC4301;
moduleMap["EC5104"] = EC5104;
moduleMap["EC5104R"] = EC5104R;
moduleMap["EC5210"] = EC5210;
moduleMap["EC5311"] = EC5311;
moduleMap["EE1002"] = EE1002;
moduleMap["EE1111"] = EE1111;
moduleMap["EE1111A"] = EE1111A;
moduleMap["EE1111B"] = EE1111B;
moduleMap["EE1112"] = EE1112;
moduleMap["EE1401"] = EE1401;
moduleMap["EE1461"] = EE1461;
moduleMap["EE2004"] = EE2004;
moduleMap["EE2004E"] = EE2004E;
moduleMap["EE2005E"] = EE2005E;
moduleMap["EE2006E"] = EE2006E;
moduleMap["EE2007"] = EE2007;
moduleMap["EE2007E"] = EE2007E;
moduleMap["EE2009E"] = EE2009E;
moduleMap["EE2010"] = EE2010;
moduleMap["EE2010E"] = EE2010E;
moduleMap["EE2011"] = EE2011;
moduleMap["EE2011E"] = EE2011E;
moduleMap["EE2012"] = EE2012;
moduleMap["EE2012A"] = EE2012A;
moduleMap["EE2020"] = EE2020;
moduleMap["EE2020E"] = EE2020E;
moduleMap["EE2021"] = EE2021;
moduleMap["EE2021E"] = EE2021E;
moduleMap["EE2023"] = EE2023;
moduleMap["EE2023E"] = EE2023E;
moduleMap["EE2024"] = EE2024;
moduleMap["EE2024E"] = EE2024E;
moduleMap["EE2025"] = EE2025;
moduleMap["EE2026"] = EE2026;
moduleMap["EE2027"] = EE2027;
moduleMap["EE2028"] = EE2028;
moduleMap["EE2028A"] = EE2028A;
moduleMap["EE2029"] = EE2029;
moduleMap["EE2111A"] = EE2111A;
moduleMap["EE2231"] = EE2231;
moduleMap["EE2401"] = EE2401;
moduleMap["EE3001"] = EE3001;
moduleMap["EE3001E"] = EE3001E;
moduleMap["EE3002"] = EE3002;
moduleMap["EE3031"] = EE3031;
moduleMap["EE3031E"] = EE3031E;
moduleMap["EE3032"] = EE3032;
moduleMap["EE3103"] = EE3103;
moduleMap["EE3103E"] = EE3103E;
moduleMap["EE3104C"] = EE3104C;
moduleMap["EE3104E"] = EE3104E;
moduleMap["EE3131C"] = EE3131C;
moduleMap["EE3131E"] = EE3131E;
moduleMap["EE3204"] = EE3204;
moduleMap["EE3204E"] = EE3204E;
moduleMap["EE3206"] = EE3206;
moduleMap["EE3206E"] = EE3206E;
moduleMap["EE3207"] = EE3207;
moduleMap["EE3207E"] = EE3207E;
moduleMap["EE3208"] = EE3208;
moduleMap["EE3302"] = EE3302;
moduleMap["EE3302E"] = EE3302E;
moduleMap["EE3305"] = EE3305;
moduleMap["EE3331C"] = EE3331C;
moduleMap["EE3331E"] = EE3331E;
moduleMap["EE3406"] = EE3406;
moduleMap["EE3407"] = EE3407;
moduleMap["EE3407E"] = EE3407E;
moduleMap["EE3408"] = EE3408;
moduleMap["EE3408C"] = EE3408C;
moduleMap["EE3408E"] = EE3408E;
moduleMap["EE3409"] = EE3409;
moduleMap["EE3431C"] = EE3431C;
moduleMap["EE3501E"] = EE3501E;
moduleMap["EE3506C"] = EE3506C;
moduleMap["EE3731C"] = EE3731C;
moduleMap["EE3801"] = EE3801;
moduleMap["EE4001"] = EE4001;
moduleMap["EE4002D"] = EE4002D;
moduleMap["EE4002R"] = EE4002R;
moduleMap["EE4031"] = EE4031;
moduleMap["EE4032"] = EE4032;
moduleMap["EE4101"] = EE4101;
moduleMap["EE4101E"] = EE4101E;
moduleMap["EE4103"] = EE4103;
moduleMap["EE4104"] = EE4104;
moduleMap["EE4112"] = EE4112;
moduleMap["EE4112E"] = EE4112E;
moduleMap["EE4204"] = EE4204;
moduleMap["EE4204E"] = EE4204E;
moduleMap["EE4205"] = EE4205;
moduleMap["EE4210"] = EE4210;
moduleMap["EE4210E"] = EE4210E;
moduleMap["EE4211"] = EE4211;
moduleMap["EE4212"] = EE4212;
moduleMap["EE4214"] = EE4214;
moduleMap["EE4214E"] = EE4214E;
moduleMap["EE4218"] = EE4218;
moduleMap["EE4302"] = EE4302;
moduleMap["EE4303"] = EE4303;
moduleMap["EE4303E"] = EE4303E;
moduleMap["EE4305"] = EE4305;
moduleMap["EE4306"] = EE4306;
moduleMap["EE4307"] = EE4307;
moduleMap["EE4308"] = EE4308;
moduleMap["EE4401"] = EE4401;
moduleMap["EE4407"] = EE4407;
moduleMap["EE4407E"] = EE4407E;
moduleMap["EE4408E"] = EE4408E;
moduleMap["EE4409"] = EE4409;
moduleMap["EE4411"] = EE4411;
moduleMap["EE4411E"] = EE4411E;
moduleMap["EE4412E"] = EE4412E;
moduleMap["EE4415"] = EE4415;
moduleMap["EE4415E"] = EE4415E;
moduleMap["EE4432"] = EE4432;
moduleMap["EE4433"] = EE4433;
moduleMap["EE4434"] = EE4434;
moduleMap["EE4435"] = EE4435;
moduleMap["EE4435E"] = EE4435E;
moduleMap["EE4436"] = EE4436;
moduleMap["EE4436E"] = EE4436E;
moduleMap["EE4437"] = EE4437;
moduleMap["EE4438"] = EE4438;
moduleMap["EE4501"] = EE4501;
moduleMap["EE4502"] = EE4502;
moduleMap["EE4503"] = EE4503;
moduleMap["EE4505"] = EE4505;
moduleMap["EE4511"] = EE4511;
moduleMap["EE4603"] = EE4603;
moduleMap["EE4604"] = EE4604;
moduleMap["EE4704"] = EE4704;
moduleMap["EE4802"] = EE4802;
moduleMap["EE5001"] = EE5001;
moduleMap["EE5002"] = EE5002;
moduleMap["EE5003"] = EE5003;
moduleMap["EE5020"] = EE5020;
moduleMap["EE5022"] = EE5022;
moduleMap["EE5023"] = EE5023;
moduleMap["EE5024"] = EE5024;
moduleMap["EE5026"] = EE5026;
moduleMap["EE5027"] = EE5027;
moduleMap["EE5060"] = EE5060;
moduleMap["EE5061"] = EE5061;
moduleMap["EE5062"] = EE5062;
moduleMap["EE5064"] = EE5064;
moduleMap["EE5101"] = EE5101;
moduleMap["EE5101R"] = EE5101R;
moduleMap["EE5103"] = EE5103;
moduleMap["EE5103R"] = EE5103R;
moduleMap["EE5104"] = EE5104;
moduleMap["EE5106"] = EE5106;
moduleMap["EE5106R"] = EE5106R;
moduleMap["EE5110"] = EE5110;
moduleMap["EE5111"] = EE5111;
moduleMap["EE5132"] = EE5132;
moduleMap["EE5134"] = EE5134;
moduleMap["EE5135"] = EE5135;
moduleMap["EE5137"] = EE5137;
moduleMap["EE5137R"] = EE5137R;
moduleMap["EE5138"] = EE5138;
moduleMap["EE5138R"] = EE5138R;
moduleMap["EE5139"] = EE5139;
moduleMap["EE5139R"] = EE5139R;
moduleMap["EE5202"] = EE5202;
moduleMap["EE5303"] = EE5303;
moduleMap["EE5303R"] = EE5303R;
moduleMap["EE5306"] = EE5306;
moduleMap["EE5308"] = EE5308;
moduleMap["EE5308R"] = EE5308R;
moduleMap["EE5310"] = EE5310;
moduleMap["EE5406"] = EE5406;
moduleMap["EE5431"] = EE5431;
moduleMap["EE5431R"] = EE5431R;
moduleMap["EE5432R"] = EE5432R;
moduleMap["EE5434"] = EE5434;
moduleMap["EE5439"] = EE5439;
moduleMap["EE5440"] = EE5440;
moduleMap["EE5502"] = EE5502;
moduleMap["EE5507"] = EE5507;
moduleMap["EE5507R"] = EE5507R;
moduleMap["EE5508"] = EE5508;
moduleMap["EE5515"] = EE5515;
moduleMap["EE5516"] = EE5516;
moduleMap["EE5517"] = EE5517;
moduleMap["EE5518"] = EE5518;
moduleMap["EE5518R"] = EE5518R;
moduleMap["EE5520"] = EE5520;
moduleMap["EE5666"] = EE5666;
moduleMap["EE5701"] = EE5701;
moduleMap["EE5702"] = EE5702;
moduleMap["EE5702R"] = EE5702R;
moduleMap["EE5703"] = EE5703;
moduleMap["EE5703R"] = EE5703R;
moduleMap["EE5711"] = EE5711;
moduleMap["EE5711R"] = EE5711R;
moduleMap["EE5731"] = EE5731;
moduleMap["EE5731R"] = EE5731R;
moduleMap["EE5801"] = EE5801;
moduleMap["EE5831"] = EE5831;
moduleMap["EE5831R"] = EE5831R;
moduleMap["EE5902"] = EE5902;
moduleMap["EE5902R"] = EE5902R;
moduleMap["EE5903"] = EE5903;
moduleMap["EE5904"] = EE5904;
moduleMap["EE5904R"] = EE5904R;
moduleMap["EE5907"] = EE5907;
moduleMap["EE5912"] = EE5912;
moduleMap["EE5913"] = EE5913;
moduleMap["EE5934"] = EE5934;
moduleMap["EE6104"] = EE6104;
moduleMap["EE6110"] = EE6110;
moduleMap["EE6111"] = EE6111;
moduleMap["EE6134"] = EE6134;
moduleMap["EE6135"] = EE6135;
moduleMap["EE6138"] = EE6138;
moduleMap["EE6310"] = EE6310;
moduleMap["EE6439"] = EE6439;
moduleMap["EE6904"] = EE6904;
moduleMap["EE6934"] = EE6934;
moduleMap["EG1109"] = EG1109;
moduleMap["EG1109FC"] = EG1109FC;
moduleMap["EG1111"] = EG1111;
moduleMap["EG1112"] = EG1112;
moduleMap["EG1401"] = EG1401;
moduleMap["EG1402"] = EG1402;
moduleMap["EG1413"] = EG1413;
moduleMap["EG1422"] = EG1422;
moduleMap["EG2401"] = EG2401;
moduleMap["EG2401A"] = EG2401A;
moduleMap["EG3301"] = EG3301;
moduleMap["EG3301R"] = EG3301R;
moduleMap["EG3601"] = EG3601;
moduleMap["EG3611"] = EG3611;
moduleMap["EG3611A"] = EG3611A;
moduleMap["EG3612"] = EG3612;
moduleMap["EG4301"] = EG4301;
moduleMap["ENV1202"] = ENV1202;
moduleMap["ES1000"] = ES1000;
moduleMap["ES1102"] = ES1102;
moduleMap["ES1103"] = ES1103;
moduleMap["ES1501"] = ES1501;
moduleMap["ES1501"] = ES1501;
moduleMap["ES1501A"] = ES1501A;
moduleMap["ES1501B"] = ES1501B;
moduleMap["ES1501C"] = ES1501C;
moduleMap["ES1531"] = ES1531;
moduleMap["ES1541"] = ES1541;
moduleMap["ES1601"] = ES1601;
moduleMap["ES2002"] = ES2002;
moduleMap["ES2007D"] = ES2007D;
moduleMap["ES2331"] = ES2331;
moduleMap["ES2531"] = ES2531;
moduleMap["ES2660"] = ES2660;
moduleMap["ESE4501"] = ESE4501;
moduleMap["ESE4502"] = ESE4502;
moduleMap["ESE4502R"] = ESE4502R;
moduleMap["ESP2104"] = ESP2104;
moduleMap["ESP3901"] = ESP3901;
moduleMap["ESP3902"] = ESP3902;
moduleMap["ESP3903"] = ESP3903;
moduleMap["ESP4901"] = ESP4901;
moduleMap["FAS1101"] = FAS1101;
moduleMap["FE5105"] = FE5105;
moduleMap["FIN2004"] = FIN2004;
moduleMap["FIN2004X"] = FIN2004X;
moduleMap["FIN2704"] = FIN2704;
moduleMap["FIN2704X"] = FIN2704X;
moduleMap["FIN3101"] = FIN3101;
moduleMap["FIN3102"] = FIN3102;
moduleMap["FIN3103"] = FIN3103;
moduleMap["FIN3117"] = FIN3117;
moduleMap["FIN3118"] = FIN3118;
moduleMap["FIN3701"] = FIN3701;
moduleMap["FIN3701A"] = FIN3701A;
moduleMap["FIN3701B"] = FIN3701B;
moduleMap["FIN3701C"] = FIN3701C;
moduleMap["FIN3702"] = FIN3702;
moduleMap["FIN3703"] = FIN3703;
moduleMap["FIN3703A"] = FIN3703A;
moduleMap["FIN3703B"] = FIN3703B;
moduleMap["FIN3703C"] = FIN3703C;
moduleMap["FIN3713"] = FIN3713;
moduleMap["FIN3714"] = FIN3714;
moduleMap["FIN4112F"] = FIN4112F;
moduleMap["FIN4112G"] = FIN4112G;
moduleMap["FIN4112L"] = FIN4112L;
moduleMap["FIN4711"] = FIN4711;
moduleMap["FIN4761A"] = FIN4761A;
moduleMap["FIN4761D"] = FIN4761D;
moduleMap["FNA1002"] = FNA1002;
moduleMap["FNA1002E"] = FNA1002E;
moduleMap["FNA1002X"] = FNA1002X;
moduleMap["FNA2004"] = FNA2004;
moduleMap["FNA3102"] = FNA3102;
moduleMap["FNA3117"] = FNA3117;
moduleMap["FNA3118"] = FNA3118;
moduleMap["FMS1203M"] = FMS1203M;
moduleMap["GEK1531"] = GEK1531;
moduleMap["GEK1549"] = GEK1549;
moduleMap["GEK1901"] = GEK1901;
moduleMap["GEM1536"] = GEM1536;
moduleMap["GEM1917"] = GEM1917;
moduleMap["GEQ1000"] = GEQ1000;
moduleMap["GEQ1000H"] = GEQ1000H;
moduleMap["GEQ1917"] = GEQ1917;
moduleMap["GER1000"] = GER1000;
moduleMap["GER1000H"] = GER1000H;
moduleMap["GET1004"] = GET1004;
moduleMap["GET1006"] = GET1006;
moduleMap["GET1020"] = GET1020;
moduleMap["GET1021"] = GET1021;
moduleMap["GET1023"] = GET1023;
moduleMap["GM1302"] = GM1302;
moduleMap["GM3310"] = GM3310;
moduleMap["IC2231"] = IC2231;
moduleMap["IC3243"] = IC3243;
moduleMap["IE1112"] = IE1112;
moduleMap["IE2100"] = IE2100;
moduleMap["IE2110"] = IE2110;
moduleMap["IE3100M"] = IE3100M;
moduleMap["IE3120"] = IE3120;
moduleMap["IE4100"] = IE4100;
moduleMap["IE4100R"] = IE4100R;
moduleMap["IE4102"] = IE4102;
moduleMap["IE4210"] = IE4210;
moduleMap["IEM1201"] = IEM1201;
moduleMap["IFS2200"] = IFS2200;
moduleMap["IFS4101"] = IFS4101;
moduleMap["IFS4102"] = IFS4102;
moduleMap["IFS4103"] = IFS4103;
moduleMap["IFS4201"] = IFS4201;
moduleMap["IFS4202"] = IFS4202;
moduleMap["IFS4205"] = IFS4205;
moduleMap["IS1103"] = IS1103;
moduleMap["IS1103X"] = IS1103X;
moduleMap["IS1103FC"] = IS1103FC;
moduleMap["IS1105"] = IS1105;
moduleMap["IS2101"] = IS2101;
moduleMap["IS2102"] = IS2102;
moduleMap["IS2103"] = IS2103;
moduleMap["IS2150"] = IS2150;
moduleMap["IS3101"] = IS3101;
moduleMap["IS3102"] = IS3102;
moduleMap["IS3103"] = IS3103;
moduleMap["IS3106"] = IS3106;
moduleMap["IS3150"] = IS3150;
moduleMap["IS3221"] = IS3221;
moduleMap["IS3240"] = IS3240;
moduleMap["IS3251"] = IS3251;
moduleMap["IS3261"] = IS3261;
moduleMap["IS4010"] = IS4010;
moduleMap["IS4100"] = IS4100;
moduleMap["IS4102"] = IS4102;
moduleMap["IS4103"] = IS4103;
moduleMap["IS4150"] = IS4150;
moduleMap["IS4151"] = IS4151;
moduleMap["IS4152"] = IS4152;
moduleMap["IS4204"] = IS4204;
moduleMap["IS4228"] = IS4228;
moduleMap["IS4231"] = IS4231;
moduleMap["IS4233"] = IS4233;
moduleMap["IS4234"] = IS4234;
moduleMap["IS4240"] = IS4240;
moduleMap["IS4241"] = IS4241;
moduleMap["IS4242"] = IS4242;
moduleMap["IS4243"] = IS4243;
moduleMap["IS4250"] = IS4250;
moduleMap["IS4261"] = IS4261;
moduleMap["IS4301"] = IS4301;
moduleMap["IS4302"] = IS4302;
moduleMap["IS4303"] = IS4303;
moduleMap["IS5002"] = IS5002;
moduleMap["IS5110"] = IS5110;
moduleMap["IS5128"] = IS5128;
moduleMap["IS5451"] = IS5451;
moduleMap["IT1001"] = IT1001;
moduleMap["IT1002"] = IT1002;
moduleMap["IT1006"] = IT1006;
moduleMap["IT1007"] = IT1007;
moduleMap["IT2001"] = IT2001;
moduleMap["IT2002"] = IT2002;
moduleMap["IT3010"] = IT3010;
moduleMap["IT3011"] = IT3011;
moduleMap["LSM1101"] = LSM1101;
moduleMap["LSM1102"] = LSM1102;
moduleMap["LSM1105"] = LSM1105;
moduleMap["LSM1106"] = LSM1106;
moduleMap["LSM1301"] = LSM1301;
moduleMap["LSM1301X"] = LSM1301X;
moduleMap["LSM1401"] = LSM1401;
moduleMap["LSM2241"] = LSM2241;
moduleMap["MA1100"] = MA1100;
moduleMap["MA1101"] = MA1101;
moduleMap["MA1101R"] = MA1101R;
moduleMap["MA1102"] = MA1102;
moduleMap["MA1102R"] = MA1102R;
moduleMap["MA1104"] = MA1104;
moduleMap["MA1104S"] = MA1104S;
moduleMap["MA1301"] = MA1301;
moduleMap["MA1301X"] = MA1301X;
moduleMap["MA1301FC"] = MA1301FC;
moduleMap["MA1306"] = MA1306;
moduleMap["MA1311"] = MA1311;
moduleMap["MA1312"] = MA1312;
moduleMap["MA1421"] = MA1421;
moduleMap["MA1505"] = MA1505;
moduleMap["MA1505C"] = MA1505C;
moduleMap["MA1506"] = MA1506;
moduleMap["MA1507"] = MA1507;
moduleMap["MA1508"] = MA1508;
moduleMap["MA1508E"] = MA1508E;
moduleMap["MA1511"] = MA1511;
moduleMap["MA1512"] = MA1512;
moduleMap["MA1513"] = MA1513;
moduleMap["MA1521"] = MA1521;
moduleMap["MA2101"] = MA2101;
moduleMap["MA2101S"] = MA2101S;
moduleMap["MA2101H"] = MA2101H;
moduleMap["MA2104"] = MA2104;
moduleMap["MA2108"] = MA2108;
moduleMap["MA2108S"] = MA2108S;
moduleMap["MA2118"] = MA2118;
moduleMap["MA2118H"] = MA2118H;
moduleMap["MA2201"] = MA2201;
moduleMap["MA2202"] = MA2202;
moduleMap["MA2202S"] = MA2202S;
moduleMap["MA2203"] = MA2203;
moduleMap["MA2205"] = MA2205;
moduleMap["MA2206"] = MA2206;
moduleMap["MA2208"] = MA2208;
moduleMap["MA2213"] = MA2213;
moduleMap["MA2214"] = MA2214;
moduleMap["MA2215"] = MA2215;
moduleMap["MA2216"] = MA2216;
moduleMap["MA2219"] = MA2219;
moduleMap["MA2221"] = MA2221;
moduleMap["MA2222"] = MA2222;
moduleMap["MA2288"] = MA2288;
moduleMap["MA2289"] = MA2289;
moduleMap["MA2311"] = MA2311;
moduleMap["MA2312"] = MA2312;
moduleMap["MA2501"] = MA2501;
moduleMap["MA3110"] = MA3110;
moduleMap["MA3110S"] = MA3110S;
moduleMap["MA3111"] = MA3111;
moduleMap["MA3111S"] = MA3111S;
moduleMap["MA3201"] = MA3201;
moduleMap["MA3205"] = MA3205;
moduleMap["MA3207H"] = MA3207H;
moduleMap["MA3209"] = MA3209;
moduleMap["MA3210"] = MA3210;
moduleMap["MA3211"] = MA3211;
moduleMap["MA3211S"] = MA3211S;
moduleMap["MA3213"] = MA3213;
moduleMap["MA3215"] = MA3215;
moduleMap["MA3218"] = MA3218;
moduleMap["MA3219"] = MA3219;
moduleMap["MA3220"] = MA3220;
moduleMap["MA3227"] = MA3227;
moduleMap["MA3233"] = MA3233;
moduleMap["MA3235"] = MA3235;
moduleMap["MA3236"] = MA3236;
moduleMap["MA3237"] = MA3237;
moduleMap["MA3238"] = MA3238;
moduleMap["MA3239"] = MA3239;
moduleMap["MA3245"] = MA3245;
moduleMap["MA3250"] = MA3250;
moduleMap["MA3251"] = MA3251;
moduleMap["MA3252"] = MA3252;
moduleMap["MA3259"] = MA3259;
moduleMap["MA3264"] = MA3264;
moduleMap["MA3265"] = MA3265;
moduleMap["MA3269"] = MA3269;
moduleMap["MA3288"] = MA3288;
moduleMap["MA3289"] = MA3289;
moduleMap["MA3501"] = MA3501;
moduleMap["MA4199"] = MA4199;
moduleMap["MA4203"] = MA4203;
moduleMap["MA4207"] = MA4207;
moduleMap["MA4211"] = MA4211;
moduleMap["MA4221"] = MA4221;
moduleMap["MA4229"] = MA4229;
moduleMap["MA4230"] = MA4230;
moduleMap["MA4235"] = MA4235;
moduleMap["MA4251"] = MA4251;
moduleMap["MA4254"] = MA4254;
moduleMap["MA4255"] = MA4255;
moduleMap["MA4257"] = MA4257;
moduleMap["MA4260"] = MA4260;
moduleMap["MA4261"] = MA4261;
moduleMap["MA4262"] = MA4262;
moduleMap["MA4264"] = MA4264;
moduleMap["MA4266"] = MA4266;
moduleMap["MA4268"] = MA4268;
moduleMap["MA4269"] = MA4269;
moduleMap["MA4269A"] = MA4269A;
moduleMap["MA4270"] = MA4270;
moduleMap["MA4271"] = MA4271;
moduleMap["MA4273"] = MA4273;
moduleMap["MA5245"] = MA5245;
moduleMap["MA5248"] = MA5248;
moduleMap["MCH5103"] = MCH5103;
moduleMap["MCH5201"] = MCH5201;
moduleMap["MCH5202"] = MCH5202;
moduleMap["MCH5203"] = MCH5203;
moduleMap["MCH5205"] = MCH5205;
moduleMap["MCH5209"] = MCH5209;
moduleMap["ME1102"] = ME1102;
moduleMap["ME2104"] = ME2104;
moduleMap["ME2134"] = ME2134;
moduleMap["ME2142"] = ME2142;
moduleMap["ME2142E"] = ME2142E;
moduleMap["ME2492"] = ME2492;
moduleMap["ME3101"] = ME3101;
moduleMap["ME3102"] = ME3102;
moduleMap["ME3291"] = ME3291;
moduleMap["ME4101"] = ME4101;
moduleMap["ME4101A"] = ME4101A;
moduleMap["ME4233"] = ME4233;
moduleMap["ME4246"] = ME4246;
moduleMap["ME4501"] = ME4501;
moduleMap["ME5401"] = ME5401;
moduleMap["ME5402"] = ME5402;
moduleMap["ME5403"] = ME5403;
moduleMap["ME5404"] = ME5404;
moduleMap["MKT1003"] = MKT1003;
moduleMap["MKT1003A"] = MKT1003A;
moduleMap["MKT1003B"] = MKT1003B;
moduleMap["MKT1003C"] = MKT1003C;
moduleMap["MKT1003D"] = MKT1003D;
moduleMap["MKT1003X"] = MKT1003X;
moduleMap["MKT1705"] = MKT1705;
moduleMap["MKT1705A"] = MKT1705A;
moduleMap["MKT1705X"] = MKT1705X;
moduleMap["MKT2401"] = MKT2401;
moduleMap["MKT4415C"] = MKT4415C;
moduleMap["MKT4420"] = MKT4420;
moduleMap["MKT4812"] = MKT4812;
moduleMap["MLE1001"] = MLE1001;
moduleMap["MLE1002"] = MLE1002;
moduleMap["MLE1101"] = MLE1101;
moduleMap["MLE1111"] = MLE1111;
moduleMap["MLE2101"] = MLE2101;
moduleMap["MLE2102"] = MLE2102;
moduleMap["MLE2103"] = MLE2103;
moduleMap["MLE2104"] = MLE2104;
moduleMap["MLE2105"] = MLE2105;
moduleMap["MLE3101"] = MLE3101;
moduleMap["MLE3103"] = MLE3103;
moduleMap["MLE3105"] = MLE3105;
moduleMap["MLE4101"] = MLE4101;
moduleMap["MLE4101A"] = MLE4101A;
moduleMap["MLE4101N"] = MLE4101N;
moduleMap["MLE4102"] = MLE4102;
moduleMap["MNO2706"] = MNO2706;
moduleMap["MQ2101"] = MQ2101;
moduleMap["MQ2102"] = MQ2102;
moduleMap["MQ2201"] = MQ2201;
moduleMap["MQ2202"] = MQ2202;
moduleMap["MQ2203"] = MQ2203;
moduleMap["MQ2204"] = MQ2204;
moduleMap["MQ3202"] = MQ3202;
moduleMap["MQ3201"] = MQ3201;
moduleMap["MT4003"] = MT4003;
moduleMap["MT5001"] = MT5001;
moduleMap["MT5010"] = MT5010;
moduleMap["NM1101E"] = NM1101E;
moduleMap["NM1101X"] = NM1101X;
moduleMap["NM1101FC"] = NM1101FC;
moduleMap["NM2207"] = NM2207;
moduleMap["NM2207Y"] = NM2207Y;
moduleMap["NM2213"] = NM2213;
moduleMap["NM2216"] = NM2216;
moduleMap["NM3209"] = NM3209;
moduleMap["NM3216"] = NM3216;
moduleMap["PC1141"] = PC1141;
moduleMap["PC1142"] = PC1142;
moduleMap["PC1143"] = PC1143;
moduleMap["PC1144"] = PC1144;
moduleMap["PC1221"] = PC1221;
moduleMap["PC1221X"] = PC1221X;
moduleMap["PC1221FC"] = PC1221FC;
moduleMap["PC1222"] = PC1222;
moduleMap["PC1222X"] = PC1222X;
moduleMap["PC1431"] = PC1431;
moduleMap["PC1431X"] = PC1431X;
moduleMap["PC1431FC"] = PC1431FC;
moduleMap["PC1432"] = PC1432;
moduleMap["PC1432X"] = PC1432X;
moduleMap["PC1433"] = PC1433;
moduleMap["PC2020"] =  PC2020;
moduleMap["PC2130"] =  PC2130;
moduleMap["PC2130B"] =  PC2130B;
moduleMap["PC2131"] =  PC2131;
moduleMap["PC2132"] =  PC2132;
moduleMap["PC2133"] =  PC2133;
moduleMap["PC2134"] =  PC2134;
moduleMap["PC2174"] = PC2174;
moduleMap["PC2232"] =  PC2232;
moduleMap["PC3130"] =  PC3130;
moduleMap["PC3231"] =  PC3231;
moduleMap["PC3235"] =  PC3235;
moduleMap["PC3236"] =  PC3236;
moduleMap["PC3238"] =  PC3238;
moduleMap["PC3274"] =  PC3274;
moduleMap["PC4240"] =  PC4240;
moduleMap["PC4248"] =  PC4248;
moduleMap["PC4274"] =  PC4274;
moduleMap["PR1111A"] = PR1111A;
moduleMap["PR1140"] = PR1140;
moduleMap["PR2103"] = PR2103;
moduleMap["PR4201"] = PR4201;
moduleMap["QF2101"] = QF2101;
moduleMap["QF3101"] = QF3101;
moduleMap["QF4102"] = QF4102;
moduleMap["QF4102A"] = QF4102A;
moduleMap["QF4199"] = QF4199;
moduleMap["QF5210"] = QF5210;
moduleMap["QF5210A"] = QF5210A;
moduleMap["RE1704"] = RE1704;
moduleMap["RE2106"] = RE2106;
moduleMap["RE3104"] = RE3104;
moduleMap["RE3701"] = RE3701;
moduleMap["RE3704"] = RE3704;
moduleMap["RE3801"] = RE3801;
moduleMap["RE3807"] = RE3807;
moduleMap["SA4101"] = SA4101;
moduleMap["SA4102"] = SA4102;
moduleMap["SA4104"] = SA4104;
moduleMap["SA4105"] = SA4105;
moduleMap["SA4106"] = SA4106;
moduleMap["SA4107"] = SA4107;
moduleMap["SA4108"] = SA4108;
moduleMap["SG5233"] = SG5233;
moduleMap["SMA5508"] = SMA5508;
moduleMap["SP1202"] = SP1202;
moduleMap["SP1203"] = SP1203;
moduleMap["SP1541"] = SP1541;
moduleMap["SP2171"] = SP2171;
moduleMap["ST1131"] = ST1131;
moduleMap["ST1131A"] = ST1131A;
moduleMap["ST1232"] = ST1232;
moduleMap["ST2131"] = ST2131;
moduleMap["ST2132"] = ST2132;
moduleMap["ST2236"] = ST2236;
moduleMap["ST2334"] = ST2334;
moduleMap["ST2335"] = ST2335;
moduleMap["ST3131"] = ST3131;
moduleMap["ST3232"] = ST3232;
moduleMap["ST3233"] = ST3233;
moduleMap["ST3236"] = ST3236;
moduleMap["ST3239"] = ST3239;
moduleMap["ST3240"] = ST3240;
moduleMap["ST3247"] = ST3247;
moduleMap["ST3248"] = ST3248;
moduleMap["ST4231"] = ST4231;
moduleMap["ST4233"] = ST4233;
moduleMap["ST4234"] = ST4234;
moduleMap["ST4238"] = ST4238;
moduleMap["ST4240"] = ST4240;
moduleMap["ST4245"] = ST4245;
moduleMap["ST4248"] = ST4248;
moduleMap["TC1402"] = TC1402;
moduleMap["TC2401"] = TC2401;
moduleMap["TCE2407"] = TCE2407;
moduleMap["TCE4104"] = TCE4104;
moduleMap["TD5103"] = TD5103;
moduleMap["TD5180A"] = TD5180A;
moduleMap["TD5241"] = TD5241;
moduleMap["TE1122"] = TE1122;
moduleMap["TE2002"] = TE2002;
moduleMap["TE2003"] = TE2003;
moduleMap["TE2101"] = TE2101;
moduleMap["TE2102"] = TE2102;
moduleMap["TE2401"] = TE2401;
moduleMap["TEE2002"] = TEE2002;
moduleMap["TEE2003"] = TEE2003;
moduleMap["TEE2011"] = TEE2011;
moduleMap["TEE2020"] = TEE2020;
moduleMap["TEE2021"] = TEE2021;
moduleMap["TEE2023"] = TEE2023;
moduleMap["TEE2024"] = TEE2024;
moduleMap["TEE2026"] = TEE2026;
moduleMap["TEE2027"] = TEE2027;
moduleMap["TEE2028"] = TEE2028;
moduleMap["TEE2101"] = TEE2101;
moduleMap["TEE3031"] = TEE3031;
moduleMap["TEE3104"] = TEE3104;
moduleMap["TEE3131"] = TEE3131;
moduleMap["TEE3204"] = TEE3204;
moduleMap["TEE3206"] = TEE3206;
moduleMap["TEE3207"] = TEE3207;
moduleMap["TEE3302"] = TEE3302;
moduleMap["TEE3331"] = TEE3331;
moduleMap["TEE3407"] = TEE3407;
moduleMap["TEE3408"] = TEE3408;
moduleMap["TEE3501"] = TEE3501;
moduleMap["TEE4101"] = TEE4101;
moduleMap["TEE4112"] = TEE4112;
moduleMap["TEE4204"] = TEE4204;
moduleMap["TEE4210"] = TEE4210;
moduleMap["TEE4214"] = TEE4214;
moduleMap["TEE4303"] = TEE4303;
moduleMap["TEE4407"] = TEE4407;
moduleMap["TEE4415"] = TEE4415;
moduleMap["TEE4435"] = TEE4435;
moduleMap["TEE4436"] = TEE4436;
moduleMap["TEE4704"] = TEE4704;
moduleMap["TG1401"] = TG1401;
moduleMap["TIC1001"] = TIC1001;
moduleMap["TIC1002"] = TIC1002;
moduleMap["TIC2401"] = TIC2401;
moduleMap["TIC2501"] = TIC2501;
moduleMap["TM1401"] = TM1401;
moduleMap["TM1402"] = TM1402;
moduleMap["TM2401"] = TM2401;
moduleMap["TM3142"] = TM3142;
moduleMap["TM4209"] = TM4209;
moduleMap["TME2142"] = TME2142;
moduleMap["TME2401"] = TME2401;
moduleMap["TME4209"] = TME4209;
moduleMap["TR3001"] = TR3001;
moduleMap["TTG1401"] = TTG1401;
moduleMap["UTC1102B"] = UTC1102B;
moduleMap["UTC1102C"] = UTC1102C;
moduleMap["UTC1102E"] = UTC1102E;
moduleMap["UTC1102G"] = UTC1102G;
moduleMap["UTC1102H"] = UTC1102H;
moduleMap["UTC1102M"] = UTC1102M;
moduleMap["UTC1102N"] = UTC1102N;
moduleMap["UTC1102P"] = UTC1102P;
moduleMap["UTC1102R"] = UTC1102R;
moduleMap["UTC1102S"] = UTC1102S;
moduleMap["UTC1102U"] = UTC1102U;
moduleMap["UTC1102V"] = UTC1102V;
moduleMap["UTC1112A"] = UTC1112A;
moduleMap["UTC1112B"] = UTC1112B;
moduleMap["UTC1112F"] = UTC1112F;
moduleMap["UTC1112G"] = UTC1112G;
moduleMap["UTC1113"] = UTC1113;
moduleMap["UTC1114"] = UTC1114;
moduleMap["UTC1115"] = UTC1115;
moduleMap["UTC1116"] = UTC1116;
moduleMap["UTC1117"] = UTC1117;
moduleMap["UTC1118"] = UTC1118;
moduleMap["UTC1119"] = UTC1119;
moduleMap["UTC1120"] = UTC1120;
moduleMap["UTC2101"] = UTC2101;
moduleMap["UTC2102"] = UTC2102;
moduleMap["UTC2107"] = UTC2107;
moduleMap["UTC2108"] = UTC2108;
moduleMap["UTC2109"] = UTC2109;
moduleMap["UTC2111"] = UTC2111;
moduleMap["UTC2113"] = UTC2113;
moduleMap["UTS2100"] = UTS2100;
moduleMap["UTS2101"] = UTS2101;
moduleMap["UTS2105"] = UTS2105;
moduleMap["UTS2109"] = UTS2109;
moduleMap["UTS2114"] = UTS2114;
moduleMap["UTW1001"] = UTW1001;
moduleMap["UTW1001A"] = UTW1001A;
moduleMap["UTW1001B"] = UTW1001B;
moduleMap["UTW1001C"] = UTW1001C;
moduleMap["UTW1001D"] = UTW1001D;
moduleMap["UTW1001E"] = UTW1001E;
moduleMap["UTW1001F"] = UTW1001F;
moduleMap["UTW1001G"] = UTW1001G;
moduleMap["UTW1001H"] = UTW1001H;
moduleMap["UTW1001S"] = UTW1001S;
moduleMap["UTW1001W"] = UTW1001W;
moduleMap["UTW1001Z"] = UTW1001Z;
moduleMap["UTW2001"] = UTW2001;
moduleMap["UTW2001H"] = UTW2001H;
moduleMap["UTW2001J"] = UTW2001J;
moduleMap["UTW2001M"] = UTW2001M;
moduleMap["UTW2001P"] = UTW2001P;
moduleMap["UTW2001Q"] = UTW2001Q;
moduleMap["UTW2001R"] = UTW2001R;
moduleMap["UTW2001W"] = UTW2001W;
moduleMap["UTW2001Z"] = UTW2001Z;
moduleMap["UWC2101"] = UWC2101;
moduleMap["WR1401"] = WR1401;
moduleMap["XFS4199M"] = XFS4199M;

let prerequisitesMap = {};
prerequisitesMap["BSE3701"] = [[BSP1703, BSP2701], [BSP1707, BSP2701], [EC1301, BSP2701]];
prerequisitesMap["BSE3703"] = [[BSP1703], [BSP1707], [EC1101E], [EC1301]];
prerequisitesMap["BSP2701"] = [[BSP1703], [BSP1707], [EC1101E], [EC1301]];
prerequisitesMap["BT2101"] = [[CS1010, MA1521, BT1101], [CS1010, MA1102R, BT1101]];
prerequisitesMap["BT2102"] = [[CS1010, BT1101]];
prerequisitesMap["BT3101"] = [[BT2101, BT2102, IS2101]];
prerequisitesMap["BT3102"] = [[BT2101, CS1010], [BT2101, CS2020], [BT2101, CS2030], [BT2101, CS2103], [BT2101, CS2103T], [BT2101, CS2113]];
prerequisitesMap["BT3103"] = [[BT2102]];
prerequisitesMap["BT4010"] = [[BT2010]];
prerequisitesMap["BT4012"] = [[BT3102]];
prerequisitesMap["BT4013"] = [[BT3102]];
prerequisitesMap["BT4014"] = [[BT2102]];
prerequisitesMap["BT4015"] = [[MA2216, BT2101, BT2102, CS2010], [MA2216, BT2101, BT2102, CS2040], [MA2216, BT2101, BT2102, CS2040S], [MA2216, BT2101, BT2102, CS2040C], [ST2334, BT2101, BT2102, CS2010], [ST2334, BT2101, BT2102, CS2040], [ST2334, BT2101, BT2102, CS2040S], [ST2334, BT2101, BT2102, CS2040C]];
prerequisitesMap["BT4016"] = [[BT2101, BT2102]];
prerequisitesMap["BT4102"] = [[BT3102, BT3103, IS2101]];
prerequisitesMap["BT4211"] = [[MKT1705, BT2101, BT2102], [MKT1705, DBA3803, IT3010]];
prerequisitesMap["BT4212"] = [[CS1010, BT2101], [DAO2702, DBA3803]];
prerequisitesMap["BT4221"] = [[CS1010, BT2101, BT2102], [DAO2702, DBA3803, IT3010]];
prerequisitesMap["BT4222"] = [[CS1010, BT2101, BT2102], [DAO2702, DBA3803, IT3010]];
prerequisitesMap["BT4240"] = [[MA1311, MA1521, BT2101], [MA1311, MA1102R, BT2101], [MA1101R, MA1521, BT2101], [MA1101R, MA1102R, BT2101]];
prerequisitesMap["CE2407"] = [[MA1505, MA1506]];
prerequisitesMap["CG1112"] = [[CS1010, CG1111]];
prerequisitesMap["CG2023"] = [[MA1506], [MA1512]];
prerequisitesMap["CG2027"] = [[CG1111], [CG1108], [EG1112]];
prerequisitesMap["CG2028"] = [[CS1010, EE2026]];
prerequisitesMap["CG2271"] = [[CS1020], [CS2040], [CS2040C], [CS2040S]];
prerequisitesMap["CG3207"] = [[EE2024], [CG2028], [EE2028]];
prerequisitesMap["CG4002"] = [[CG2028, CG2271, CS2113]];
prerequisitesMap["CN2108"] = [[CN2121, CN2122, LSM1401]];
prerequisitesMap["CN2122"] = [[MA1505, MA1506], [MA1511, MA1512]];
prerequisitesMap["CN2122A"] = [[PC1221, PC1222, MA1511, MA1512]];
prerequisitesMap["CN3101"] = [[CN2116, CN2121, CN2122, CN2125]];
prerequisitesMap["CN3108"] = [[CN2108, CN2116, CN2125]];
prerequisitesMap["CN3121"] = [[MA1505], [MA1511, MA1512, MA1513]];
prerequisitesMap["CN3132"] = [[CN1111, CN2125], [CN2101, CN2121, CN2125]];
prerequisitesMap["CN3135"] = [[CN2121, CN2122, CN2122A]];
prerequisitesMap["CN3421"] = [[MA1505, MA1506], [MA1511, MA1512, MA1513]];
prerequisitesMap["CN4118"] = [[CN3101, CN3121, CN3132, CN3135, CN3421, CN3108]];
prerequisitesMap["CN4118R"] = [[CN3108, CN3121, CN3124, CN3132, CN3135], [CN3108, CN3121, CN3124, CN3132, CN3421], [CN3108, CN3121, CN3124, CN3135, CN3421], [CN3108, CN3121, CN3132, CN3135, CN3421], [CN3108, CN3124, CN3132, CN3135, CN3421]];
prerequisitesMap["CP3106"] = [[CS2102, CS2105, CS3214], [CS2102, CS2105, CS3215], [IS3102], [IS4102], [CS3201], [CS3281], [CS4201], [CS4203]];
prerequisitesMap["CP3880"] = [[IS2101, CS2103], [IS2101, CS2103T], [IS2101, IS2103], [IS2101, IS2150], [IS2101, BT2101], [CS2101, CS2103], [CS2101, CS2103T], [CS2101, IS2103], [CS2101, IS2150], [CS2101, BT2101]];
prerequisitesMap["CS1231"] = [[MA1301]];
prerequisitesMap["CS2030"] = [[CS1010]];
prerequisitesMap["CS2040"] = [[CS1010]];
prerequisitesMap["CS2040C"] = [[CS1010]];
prerequisitesMap["CS2040S"] = [[CS1231, CS1010]];
prerequisitesMap["CS2100"] = [[CS1010]];
prerequisitesMap["CS2101"] = [[ES1103]];
prerequisitesMap["CS2102"] = [[CS1020, CS1231], [CS2020, CS1231], [CS2030, CS1231], [CS2040, CS1231]];
prerequisitesMap["CS2103"] = [[CS1020], [CS2020], [CS2030, CS2040], [CS2030, CS2040C], [CS2030, CS2040S]];
prerequisitesMap["CS2103T"] = [[CS1020], [CS2020], [CS2030, CS2040], [CS2030, CS2040C], [CS2030, CS2040S]];
prerequisitesMap["CS2104"] = [[CS1020], [CS2020], [CS2030], [CS2113]];
prerequisitesMap["CS2105"] = [[CS1020], [CS2020], [CS2040], [CS2040C], [CS2040S]];
prerequisitesMap["CS2106"] = [[CS2100], [EE2007], [EE2024], [EE2028]];
prerequisitesMap["CS2107"] = [[CS1010]];
prerequisitesMap["CS2108"] = [[CS1020], [CS2020], [CS2040], [CS2040C], [CS2040S]];
prerequisitesMap["CS2113"] = [[CS2040C], [CS2030, CS2040], [CS2030, CS2040S]];
prerequisitesMap["CS2220"] = [[CS1020], [CS2020], [CS2040], [CS2040S], [CS2040C]];
prerequisitesMap["CS2309"] = [[CS2010, CS1231], [CS2020, CS1231], [CS2030, CS2040, CS1231], [CS2030, CS2040C, CS1231], [CS2030, CS2040S, CS1231], [CS2113, CS2040, CS1231], [CS2113, CS2040C, CS1231], [CS2113, CS2040S, CS1231]];
prerequisitesMap["CS3103"] = [[CS2105], [EE3204], [EE4204]];
prerequisitesMap["CS3203"] = [[CS2103], [CS2103T], [CS2113]];
prerequisitesMap["CS3210"] = [[CS2100], [CG2007], [CG2028], [EE2024], [EE2028]];
prerequisitesMap["CS3211"] = [[CS2106], [CG2271]];
prerequisitesMap["CS3216"] = [[CS2103], [CS2103T]];
prerequisitesMap["CS3217"] = [[CS2103], [CS2103T]];
prerequisitesMap["CS3219"] = [[CS2103], [CS2103T]];
prerequisitesMap["CS3223"] = [[CS2010, CS2102], [CS2020, CS2102], [CS2040, CS2102], [CS2040S, CS2102], [CS2040C, CS2102], [CS2010, IT2002], [CS2020, IT2002], [CS2040, IT2002], [CS2040C, IT2002], [CS2040S, IT2002]];
prerequisitesMap["CS3230"] = [[CS2010, CS1231], [CS2020, CS1231], [CS2040, CS1231], [CS2040C, CS1231], [CS2040S, CS1231]];
prerequisitesMap["CS3233"] = [[CS2010], [CS2020], [CS2030, CS2040], [CS2030, CS2040C], [CS2030, CS2040S]];
prerequisitesMap["CS3234"] = [[CS1231]];
prerequisitesMap["CS3235"] = [[CS2105, CS2106, CS2107], [CS2105, CG2271, CS2107], [EE3204, CS2106, CS2107], [EE3204, CG2271, CS2107], [EE4204, CS2106, CS2107], [EE4204, CG2271, CS2107]];
prerequisitesMap["CS3236"] = [[CS1231, EE2012], [CS1231, MA2216], [CS1231, ST2334]];
prerequisitesMap["CS3237"] = [[CS1010, CG2028], [CS1010, CS2100], [CS1010, EE2024], [CS1010, EE2028]];
prerequisitesMap["CS3240"] = [[CS1020], [CS2020], [CS2030], [CS2113], [NM3209], [NM2207]];
prerequisitesMap["CS3241"] = [[CS2010], [CS2020], [CS2030, CS2040], [CS2030, CS2040S], [CS2030, CS2040C], [CS2113, CS2040], [CS2113, CS2040S], [CS2113, CS2040C]];
prerequisitesMap["CS3242"] = [[CS3241, PC1221, MA1101R, MA1102R], [CS3241, PC1221, MA1101R, MA1505], [CS3241, PC1221, MA1101R, MA1507], [CS3241, PC1221, MA1101R, MA1511, MA1512], [CS3241, PC1221, MA1101R, MA1521], [CS3241, PC1221, MA1311, MA1102R], [CS3241, PC1221, MA1311, MA1505], [CS3241, PC1221, MA1311, MA1507], [CS3241, PC1221, MA1311, MA1511, MA1512], [CS3241, PC1221, MA1311, MA1521], [CS3241, PC1221, MA1508, MA1102R], [CS3241, PC1221, MA1508, MA1505], [CS3241, PC1221, MA1508, MA1507], [CS3241, PC1221, MA1508, MA1511, MA1512], [CS3241, PC1221, MA1508, MA1521], [CS3241, PC1221, MA1513, MA1102R], [CS3241, PC1221, MA1513, MA1505], [CS3241, PC1221, MA1513, MA1507], [CS3241, PC1221, MA1513, MA1511, MA1512], [CS3241, PC1221, MA1513, MA1521]];
prerequisitesMap["CS3243"] = [[CS2010, CS1231], [CS2020, CS1231], [CS2040, CS1231], [CS2040S, CS1231], [CS2040C, CS1231]];
prerequisitesMap["CS3244"] = [[CS2010, MA1101R, MA1102R, EE2012], [CS2010, MA1101R, MA1102R, MA2216], [CS2010, MA1101R, MA1102R, ST2334], [CS2010, MA1101R, MA1505, EE2012], [CS2010, MA1101R, MA1505, MA2216], [CS2010, MA1101R, MA1505, ST2334], [CS2010, MA1101R, MA1507, EE2012], [CS2010, MA1101R, MA1507, MA2216], [CS2010, MA1101R, MA1507, ST2334], [CS2010, MA1101R, MA1511, MA1512, EE2012], [CS2010, MA1101R, MA1511, MA1512, MA2216], [CS2010, MA1101R, MA1511, MA1512, ST2334], [CS2010, MA1101R, MA1521, EE2012], [CS2010, MA1101R, MA1521, MA2216], [CS2010, MA1101R, MA1521, ST2334], [CS2010, MA1311, MA1102R, EE2012], [CS2010, MA1311, MA1102R, MA2216], [CS2010, MA1311, MA1102R, ST2334], [CS2010, MA1311, MA1505, EE2012], [CS2010, MA1311, MA1505, MA2216], [CS2010, MA1311, MA1505, ST2334], [CS2010, MA1311, MA1507, EE2012], [CS2010, MA1311, MA1507, MA2216], [CS2010, MA1311, MA1507, ST2334], [CS2010, MA1311, MA1511, MA1512, EE2012], [CS2010, MA1311, MA1511, MA1512, MA2216], [CS2010, MA1311, MA1511, MA1512, ST2334], [CS2010, MA1311, MA1521, EE2012], [CS2010, MA1311, MA1521, MA2216], [CS2010, MA1311, MA1521, ST2334], [CS2010, MA1508, MA1102R, EE2012], [CS2010, MA1508, MA1102R, MA2216], [CS2010, MA1508, MA1102R, ST2334], [CS2010, MA1508, MA1505, EE2012], [CS2010, MA1508, MA1505, MA2216], [CS2010, MA1508, MA1505, ST2334], [CS2010, MA1508, MA1507, EE2012], [CS2010, MA1508, MA1507, MA2216], [CS2010, MA1508, MA1507, ST2334], [CS2010, MA1508, MA1511, MA1512, EE2012], [CS2010, MA1508, MA1511, MA1512, MA2216], [CS2010, MA1508, MA1511, MA1512, ST2334], [CS2010, MA1508, MA1521, EE2012], [CS2010, MA1508, MA1521, MA2216], [CS2010, MA1508, MA1521, ST2334], [CS2010, MA1513, MA1102R, EE2012], [CS2010, MA1513, MA1102R, MA2216], [CS2010, MA1513, MA1102R, ST2334], [CS2010, MA1513, MA1505, EE2012], [CS2010, MA1513, MA1505, MA2216], [CS2010, MA1513, MA1505, ST2334], [CS2010, MA1513, MA1507, EE2012], [CS2010, MA1513, MA1507, MA2216], [CS2010, MA1513, MA1507, ST2334], [CS2010, MA1513, MA1511, MA1512, EE2012], [CS2010, MA1513, MA1511, MA1512, MA2216], [CS2010, MA1513, MA1511, MA1512, ST2334], [CS2010, MA1513, MA1521, EE2012], [CS2010, MA1513, MA1521, MA2216], [CS2010, MA1513, MA1521, ST2334], [CS2020, MA1101R, MA1102R, EE2012], [CS2020, MA1101R, MA1102R, MA2216], [CS2020, MA1101R, MA1102R, ST2334], [CS2020, MA1101R, MA1505, EE2012], [CS2020, MA1101R, MA1505, MA2216], [CS2020, MA1101R, MA1505, ST2334], [CS2020, MA1101R, MA1507, EE2012], [CS2020, MA1101R, MA1507, MA2216], [CS2020, MA1101R, MA1507, ST2334], [CS2020, MA1101R, MA1511, MA1512, EE2012], [CS2020, MA1101R, MA1511, MA1512, MA2216], [CS2020, MA1101R, MA1511, MA1512, ST2334], [CS2020, MA1101R, MA1521, EE2012], [CS2020, MA1101R, MA1521, MA2216], [CS2020, MA1101R, MA1521, ST2334], [CS2020, MA1311, MA1102R, EE2012], [CS2020, MA1311, MA1102R, MA2216], [CS2020, MA1311, MA1102R, ST2334], [CS2020, MA1311, MA1505, EE2012], [CS2020, MA1311, MA1505, MA2216], [CS2020, MA1311, MA1505, ST2334], [CS2020, MA1311, MA1507, EE2012], [CS2020, MA1311, MA1507, MA2216], [CS2020, MA1311, MA1507, ST2334], [CS2020, MA1311, MA1511, MA1512, EE2012], [CS2020, MA1311, MA1511, MA1512, MA2216], [CS2020, MA1311, MA1511, MA1512, ST2334], [CS2020, MA1311, MA1521, EE2012], [CS2020, MA1311, MA1521, MA2216], [CS2020, MA1311, MA1521, ST2334], [CS2020, MA1508, MA1102R, EE2012], [CS2020, MA1508, MA1102R, MA2216], [CS2020, MA1508, MA1102R, ST2334], [CS2020, MA1508, MA1505, EE2012], [CS2020, MA1508, MA1505, MA2216], [CS2020, MA1508, MA1505, ST2334], [CS2020, MA1508, MA1507, EE2012], [CS2020, MA1508, MA1507, MA2216], [CS2020, MA1508, MA1507, ST2334], [CS2020, MA1508, MA1511, MA1512, EE2012], [CS2020, MA1508, MA1511, MA1512, MA2216], [CS2020, MA1508, MA1511, MA1512, ST2334], [CS2020, MA1508, MA1521, EE2012], [CS2020, MA1508, MA1521, MA2216], [CS2020, MA1508, MA1521, ST2334], [CS2020, MA1513, MA1102R, EE2012], [CS2020, MA1513, MA1102R, MA2216], [CS2020, MA1513, MA1102R, ST2334], [CS2020, MA1513, MA1505, EE2012], [CS2020, MA1513, MA1505, MA2216], [CS2020, MA1513, MA1505, ST2334], [CS2020, MA1513, MA1507, EE2012], [CS2020, MA1513, MA1507, MA2216], [CS2020, MA1513, MA1507, ST2334], [CS2020, MA1513, MA1511, MA1512, EE2012], [CS2020, MA1513, MA1511, MA1512, MA2216], [CS2020, MA1513, MA1511, MA1512, ST2334], [CS2020, MA1513, MA1521, EE2012], [CS2020, MA1513, MA1521, MA2216], [CS2020, MA1513, MA1521, ST2334], [CS2040, MA1101R, MA1102R, EE2012], [CS2040, MA1101R, MA1102R, MA2216], [CS2040, MA1101R, MA1102R, ST2334], [CS2040, MA1101R, MA1505, EE2012], [CS2040, MA1101R, MA1505, MA2216], [CS2040, MA1101R, MA1505, ST2334], [CS2040, MA1101R, MA1507, EE2012], [CS2040, MA1101R, MA1507, MA2216], [CS2040, MA1101R, MA1507, ST2334], [CS2040, MA1101R, MA1511, MA1512, EE2012], [CS2040, MA1101R, MA1511, MA1512, MA2216], [CS2040, MA1101R, MA1511, MA1512, ST2334], [CS2040, MA1101R, MA1521, EE2012], [CS2040, MA1101R, MA1521, MA2216], [CS2040, MA1101R, MA1521, ST2334], [CS2040, MA1311, MA1102R, EE2012], [CS2040, MA1311, MA1102R, MA2216], [CS2040, MA1311, MA1102R, ST2334], [CS2040, MA1311, MA1505, EE2012], [CS2040, MA1311, MA1505, MA2216], [CS2040, MA1311, MA1505, ST2334], [CS2040, MA1311, MA1507, EE2012], [CS2040, MA1311, MA1507, MA2216], [CS2040, MA1311, MA1507, ST2334], [CS2040, MA1311, MA1511, MA1512, EE2012], [CS2040, MA1311, MA1511, MA1512, MA2216], [CS2040, MA1311, MA1511, MA1512, ST2334], [CS2040, MA1311, MA1521, EE2012], [CS2040, MA1311, MA1521, MA2216], [CS2040, MA1311, MA1521, ST2334], [CS2040, MA1508, MA1102R, EE2012], [CS2040, MA1508, MA1102R, MA2216], [CS2040, MA1508, MA1102R, ST2334], [CS2040, MA1508, MA1505, EE2012], [CS2040, MA1508, MA1505, MA2216], [CS2040, MA1508, MA1505, ST2334], [CS2040, MA1508, MA1507, EE2012], [CS2040, MA1508, MA1507, MA2216], [CS2040, MA1508, MA1507, ST2334], [CS2040, MA1508, MA1511, MA1512, EE2012], [CS2040, MA1508, MA1511, MA1512, MA2216], [CS2040, MA1508, MA1511, MA1512, ST2334], [CS2040, MA1508, MA1521, EE2012], [CS2040, MA1508, MA1521, MA2216], [CS2040, MA1508, MA1521, ST2334], [CS2040, MA1513, MA1102R, EE2012], [CS2040, MA1513, MA1102R, MA2216], [CS2040, MA1513, MA1102R, ST2334], [CS2040, MA1513, MA1505, EE2012], [CS2040, MA1513, MA1505, MA2216], [CS2040, MA1513, MA1505, ST2334], [CS2040, MA1513, MA1507, EE2012], [CS2040, MA1513, MA1507, MA2216], [CS2040, MA1513, MA1507, ST2334], [CS2040, MA1513, MA1511, MA1512, EE2012], [CS2040, MA1513, MA1511, MA1512, MA2216], [CS2040, MA1513, MA1511, MA1512, ST2334], [CS2040, MA1513, MA1521, EE2012], [CS2040, MA1513, MA1521, MA2216], [CS2040, MA1513, MA1521, ST2334], [CS2040S, MA1101R, MA1102R, EE2012], [CS2040S, MA1101R, MA1102R, MA2216], [CS2040S, MA1101R, MA1102R, ST2334], [CS2040S, MA1101R, MA1505, EE2012], [CS2040S, MA1101R, MA1505, MA2216], [CS2040S, MA1101R, MA1505, ST2334], [CS2040S, MA1101R, MA1507, EE2012], [CS2040S, MA1101R, MA1507, MA2216], [CS2040S, MA1101R, MA1507, ST2334], [CS2040S, MA1101R, MA1511, MA1512, EE2012], [CS2040S, MA1101R, MA1511, MA1512, MA2216], [CS2040S, MA1101R, MA1511, MA1512, ST2334], [CS2040S, MA1101R, MA1521, EE2012], [CS2040S, MA1101R, MA1521, MA2216], [CS2040S, MA1101R, MA1521, ST2334], [CS2040S, MA1311, MA1102R, EE2012], [CS2040S, MA1311, MA1102R, MA2216], [CS2040S, MA1311, MA1102R, ST2334], [CS2040S, MA1311, MA1505, EE2012], [CS2040S, MA1311, MA1505, MA2216], [CS2040S, MA1311, MA1505, ST2334], [CS2040S, MA1311, MA1507, EE2012], [CS2040S, MA1311, MA1507, MA2216], [CS2040S, MA1311, MA1507, ST2334], [CS2040S, MA1311, MA1511, MA1512, EE2012], [CS2040S, MA1311, MA1511, MA1512, MA2216], [CS2040S, MA1311, MA1511, MA1512, ST2334], [CS2040S, MA1311, MA1521, EE2012], [CS2040S, MA1311, MA1521, MA2216], [CS2040S, MA1311, MA1521, ST2334], [CS2040S, MA1508, MA1102R, EE2012], [CS2040S, MA1508, MA1102R, MA2216], [CS2040S, MA1508, MA1102R, ST2334], [CS2040S, MA1508, MA1505, EE2012], [CS2040S, MA1508, MA1505, MA2216], [CS2040S, MA1508, MA1505, ST2334], [CS2040S, MA1508, MA1507, EE2012], [CS2040S, MA1508, MA1507, MA2216], [CS2040S, MA1508, MA1507, ST2334], [CS2040S, MA1508, MA1511, MA1512, EE2012], [CS2040S, MA1508, MA1511, MA1512, MA2216], [CS2040S, MA1508, MA1511, MA1512, ST2334], [CS2040S, MA1508, MA1521, EE2012], [CS2040S, MA1508, MA1521, MA2216], [CS2040S, MA1508, MA1521, ST2334], [CS2040S, MA1513, MA1102R, EE2012], [CS2040S, MA1513, MA1102R, MA2216], [CS2040S, MA1513, MA1102R, ST2334], [CS2040S, MA1513, MA1505, EE2012], [CS2040S, MA1513, MA1505, MA2216], [CS2040S, MA1513, MA1505, ST2334], [CS2040S, MA1513, MA1507, EE2012], [CS2040S, MA1513, MA1507, MA2216], [CS2040S, MA1513, MA1507, ST2334], [CS2040S, MA1513, MA1511, MA1512, EE2012], [CS2040S, MA1513, MA1511, MA1512, MA2216], [CS2040S, MA1513, MA1511, MA1512, ST2334], [CS2040S, MA1513, MA1521, EE2012], [CS2040S, MA1513, MA1521, MA2216], [CS2040S, MA1513, MA1521, ST2334], [CS2040C, MA1101R, MA1102R, EE2012], [CS2040C, MA1101R, MA1102R, MA2216], [CS2040C, MA1101R, MA1102R, ST2334], [CS2040C, MA1101R, MA1505, EE2012], [CS2040C, MA1101R, MA1505, MA2216], [CS2040C, MA1101R, MA1505, ST2334], [CS2040C, MA1101R, MA1507, EE2012], [CS2040C, MA1101R, MA1507, MA2216], [CS2040C, MA1101R, MA1507, ST2334], [CS2040C, MA1101R, MA1511, MA1512, EE2012], [CS2040C, MA1101R, MA1511, MA1512, MA2216], [CS2040C, MA1101R, MA1511, MA1512, ST2334], [CS2040C, MA1101R, MA1521, EE2012], [CS2040C, MA1101R, MA1521, MA2216], [CS2040C, MA1101R, MA1521, ST2334], [CS2040C, MA1311, MA1102R, EE2012], [CS2040C, MA1311, MA1102R, MA2216], [CS2040C, MA1311, MA1102R, ST2334], [CS2040C, MA1311, MA1505, EE2012], [CS2040C, MA1311, MA1505, MA2216], [CS2040C, MA1311, MA1505, ST2334], [CS2040C, MA1311, MA1507, EE2012], [CS2040C, MA1311, MA1507, MA2216], [CS2040C, MA1311, MA1507, ST2334], [CS2040C, MA1311, MA1511, MA1512, EE2012], [CS2040C, MA1311, MA1511, MA1512, MA2216], [CS2040C, MA1311, MA1511, MA1512, ST2334], [CS2040C, MA1311, MA1521, EE2012], [CS2040C, MA1311, MA1521, MA2216], [CS2040C, MA1311, MA1521, ST2334], [CS2040C, MA1508, MA1102R, EE2012], [CS2040C, MA1508, MA1102R, MA2216], [CS2040C, MA1508, MA1102R, ST2334], [CS2040C, MA1508, MA1505, EE2012], [CS2040C, MA1508, MA1505, MA2216], [CS2040C, MA1508, MA1505, ST2334], [CS2040C, MA1508, MA1507, EE2012], [CS2040C, MA1508, MA1507, MA2216], [CS2040C, MA1508, MA1507, ST2334], [CS2040C, MA1508, MA1511, MA1512, EE2012], [CS2040C, MA1508, MA1511, MA1512, MA2216], [CS2040C, MA1508, MA1511, MA1512, ST2334], [CS2040C, MA1508, MA1521, EE2012], [CS2040C, MA1508, MA1521, MA2216], [CS2040C, MA1508, MA1521, ST2334], [CS2040C, MA1513, MA1102R, EE2012], [CS2040C, MA1513, MA1102R, MA2216], [CS2040C, MA1513, MA1102R, ST2334], [CS2040C, MA1513, MA1505, EE2012], [CS2040C, MA1513, MA1505, MA2216], [CS2040C, MA1513, MA1505, ST2334], [CS2040C, MA1513, MA1507, EE2012], [CS2040C, MA1513, MA1507, MA2216], [CS2040C, MA1513, MA1507, ST2334], [CS2040C, MA1513, MA1511, MA1512, EE2012], [CS2040C, MA1513, MA1511, MA1512, MA2216], [CS2040C, MA1513, MA1511, MA1512, ST2334], [CS2040C, MA1513, MA1521, EE2012], [CS2040C, MA1513, MA1521, MA2216], [CS2040C, MA1513, MA1521, ST2334]];
prerequisitesMap["CS3245"] = [[CS2010], [CS2020], [CS2040], [CS2040C], [CS2040S]];
prerequisitesMap["CS3247"] = [[CS3241]];
prerequisitesMap["CS3281"] = [[CS2103], [CS2103T]];
prerequisitesMap["CS3282"] = [[CS3281]];
prerequisitesMap["CS4211"] = [[CS2103], [CS2103T]];
prerequisitesMap["CS4212"] = [[CS2104]];
prerequisitesMap["CS4215"] = [[CS2010], [CS2020], [CS2030, CS2040], [CS2030, CS2040S], [CS2030, CS2040C], [CS2113, CS2040], [CS2113, CS2040S], [CS2113, CS2040C]];
prerequisitesMap["CS4218"] = [[CS3219]];
prerequisitesMap["CS4220"] = [[CS2220], [LSM2241]];
prerequisitesMap["CS4221"] = [[CS3223]];
prerequisitesMap["CS4222"] = [[CS2105, EE2012], [CS2105, MA2216], [CS2105, ST2334], [EE3204, EE2012], [EE3204, MA2216], [EE3204, ST2334], [EE4204, EE2012], [EE4204, MA2216], [EE4204, ST2334]];
prerequisitesMap["CS4223"] = [[CS2106, CS3210], [CS2106, CS3220], [CS2106, CG3207], [CG2271, CS3210], [CG2271, CS3220], [CG2271, CG3207]];
prerequisitesMap["CS4224"] = [[CS3223]];
prerequisitesMap["CS4225"] = [[CS2102], [IT2002]];
prerequisitesMap["CS4226"] = [[CS2105, EE2012], [CS2105, MA2216], [CS2105, ST2334], [EE3204, EE2012], [EE3204, MA2216], [EE3204, ST2334], [EE4204, EE2012], [EE4204, MA2216], [EE4204, ST2334]];
prerequisitesMap["CS4231"] = [[CS3230], [CS3210]];
prerequisitesMap["CS4232"] = [[CS1231], [MA2101], [MA2202], [MA2104], [MA2108], [MA2108S], [MA2216], [MA2213], [MA2214], [MA2219], [MA2311]];
prerequisitesMap["CS4234"] = [[CS3230, MA1101R], [CS3230, MA1311], [CS3230, MA1508], [CS3230, MA1513]];
prerequisitesMap["CS4236"] = [[CS2010, CS1231, CS2107], [CS2020, CS1231, CS2107], [CS2040, CS1231, CS2107], [CS2040S, CS1231, CS2107], [CS2040C, CS1231, CS2107]];
prerequisitesMap["CS4238"] = [[CS3235]];
prerequisitesMap["CS4239"] = [[CS3235, CS2103], [CS3235, CS2103T]];
prerequisitesMap["CS4240"] = [[CS3240, MA1301]];
prerequisitesMap["CS4242"] = [[CS2108, CS3245]];
prerequisitesMap["CS4243"] = [[CS1020, MA1101R, MA1102R, EE2012], [CS1020, MA1101R, MA1102R, MA2216], [CS1020, MA1101R, MA1102R, ST1131], [CS1020, MA1101R, MA1102R, ST1232], [CS1020, MA1101R, MA1102R, ST2334], [CS1020, MA1101R, MA1505, EE2012], [CS1020, MA1101R, MA1505, MA2216], [CS1020, MA1101R, MA1505, ST1131], [CS1020, MA1101R, MA1505, ST1232], [CS1020, MA1101R, MA1505, ST2334], [CS1020, MA1101R, MA1507, EE2012], [CS1020, MA1101R, MA1507, MA2216], [CS1020, MA1101R, MA1507, ST1131], [CS1020, MA1101R, MA1507, ST1232], [CS1020, MA1101R, MA1507, ST2334], [CS1020, MA1101R, MA1511, MA1512, EE2012], [CS1020, MA1101R, MA1511, MA1512, MA2216], [CS1020, MA1101R, MA1511, MA1512, ST1131], [CS1020, MA1101R, MA1511, MA1512, ST1232], [CS1020, MA1101R, MA1511, MA1512, ST2334], [CS1020, MA1101R, MA1521, EE2012], [CS1020, MA1101R, MA1521, MA2216], [CS1020, MA1101R, MA1521, ST1131], [CS1020, MA1101R, MA1521, ST1232], [CS1020, MA1101R, MA1521, ST2334], [CS1020, MA1311, MA1102R, EE2012], [CS1020, MA1311, MA1102R, MA2216], [CS1020, MA1311, MA1102R, ST1131], [CS1020, MA1311, MA1102R, ST1232], [CS1020, MA1311, MA1102R, ST2334], [CS1020, MA1311, MA1505, EE2012], [CS1020, MA1311, MA1505, MA2216], [CS1020, MA1311, MA1505, ST1131], [CS1020, MA1311, MA1505, ST1232], [CS1020, MA1311, MA1505, ST2334], [CS1020, MA1311, MA1507, EE2012], [CS1020, MA1311, MA1507, MA2216], [CS1020, MA1311, MA1507, ST1131], [CS1020, MA1311, MA1507, ST1232], [CS1020, MA1311, MA1507, ST2334], [CS1020, MA1311, MA1511, MA1512, EE2012], [CS1020, MA1311, MA1511, MA1512, MA2216], [CS1020, MA1311, MA1511, MA1512, ST1131], [CS1020, MA1311, MA1511, MA1512, ST1232], [CS1020, MA1311, MA1511, MA1512, ST2334], [CS1020, MA1311, MA1521, EE2012], [CS1020, MA1311, MA1521, MA2216], [CS1020, MA1311, MA1521, ST1131], [CS1020, MA1311, MA1521, ST1232], [CS1020, MA1311, MA1521, ST2334], [CS1020, MA1508, MA1102R, EE2012], [CS1020, MA1508, MA1102R, MA2216], [CS1020, MA1508, MA1102R, ST1131], [CS1020, MA1508, MA1102R, ST1232], [CS1020, MA1508, MA1102R, ST2334], [CS1020, MA1508, MA1505, EE2012], [CS1020, MA1508, MA1505, MA2216], [CS1020, MA1508, MA1505, ST1131], [CS1020, MA1508, MA1505, ST1232], [CS1020, MA1508, MA1505, ST2334], [CS1020, MA1508, MA1507, EE2012], [CS1020, MA1508, MA1507, MA2216], [CS1020, MA1508, MA1507, ST1131], [CS1020, MA1508, MA1507, ST1232], [CS1020, MA1508, MA1507, ST2334], [CS1020, MA1508, MA1511, MA1512, EE2012], [CS1020, MA1508, MA1511, MA1512, MA2216], [CS1020, MA1508, MA1511, MA1512, ST1131], [CS1020, MA1508, MA1511, MA1512, ST1232], [CS1020, MA1508, MA1511, MA1512, ST2334], [CS1020, MA1508, MA1521, EE2012], [CS1020, MA1508, MA1521, MA2216], [CS1020, MA1508, MA1521, ST1131], [CS1020, MA1508, MA1521, ST1232], [CS1020, MA1508, MA1521, ST2334], [CS1020, MA1513, MA1102R, EE2012], [CS1020, MA1513, MA1102R, MA2216], [CS1020, MA1513, MA1102R, ST1131], [CS1020, MA1513, MA1102R, ST1232], [CS1020, MA1513, MA1102R, ST2334], [CS1020, MA1513, MA1505, EE2012], [CS1020, MA1513, MA1505, MA2216], [CS1020, MA1513, MA1505, ST1131], [CS1020, MA1513, MA1505, ST1232], [CS1020, MA1513, MA1505, ST2334], [CS1020, MA1513, MA1507, EE2012], [CS1020, MA1513, MA1507, MA2216], [CS1020, MA1513, MA1507, ST1131], [CS1020, MA1513, MA1507, ST1232], [CS1020, MA1513, MA1507, ST2334], [CS1020, MA1513, MA1511, MA1512, EE2012], [CS1020, MA1513, MA1511, MA1512, MA2216], [CS1020, MA1513, MA1511, MA1512, ST1131], [CS1020, MA1513, MA1511, MA1512, ST1232], [CS1020, MA1513, MA1511, MA1512, ST2334], [CS1020, MA1513, MA1521, EE2012], [CS1020, MA1513, MA1521, MA2216], [CS1020, MA1513, MA1521, ST1131], [CS1020, MA1513, MA1521, ST1232], [CS1020, MA1513, MA1521, ST2334], [CS2030, CS2040, MA1101R, MA1102R, EE2012], [CS2030, CS2040, MA1101R, MA1102R, MA2216], [CS2030, CS2040, MA1101R, MA1102R, ST1131], [CS2030, CS2040, MA1101R, MA1102R, ST1232], [CS2030, CS2040, MA1101R, MA1102R, ST2334], [CS2030, CS2040, MA1101R, MA1505, EE2012], [CS2030, CS2040, MA1101R, MA1505, MA2216], [CS2030, CS2040, MA1101R, MA1505, ST1131], [CS2030, CS2040, MA1101R, MA1505, ST1232], [CS2030, CS2040, MA1101R, MA1505, ST2334], [CS2030, CS2040, MA1101R, MA1507, EE2012], [CS2030, CS2040, MA1101R, MA1507, MA2216], [CS2030, CS2040, MA1101R, MA1507, ST1131], [CS2030, CS2040, MA1101R, MA1507, ST1232], [CS2030, CS2040, MA1101R, MA1507, ST2334], [CS2030, CS2040, MA1101R, MA1511, MA1512, EE2012], [CS2030, CS2040, MA1101R, MA1511, MA1512, MA2216], [CS2030, CS2040, MA1101R, MA1511, MA1512, ST1131], [CS2030, CS2040, MA1101R, MA1511, MA1512, ST1232], [CS2030, CS2040, MA1101R, MA1511, MA1512, ST2334], [CS2030, CS2040, MA1101R, MA1521, EE2012], [CS2030, CS2040, MA1101R, MA1521, MA2216], [CS2030, CS2040, MA1101R, MA1521, ST1131], [CS2030, CS2040, MA1101R, MA1521, ST1232], [CS2030, CS2040, MA1101R, MA1521, ST2334], [CS2030, CS2040, MA1311, MA1102R, EE2012], [CS2030, CS2040, MA1311, MA1102R, MA2216], [CS2030, CS2040, MA1311, MA1102R, ST1131], [CS2030, CS2040, MA1311, MA1102R, ST1232], [CS2030, CS2040, MA1311, MA1102R, ST2334], [CS2030, CS2040, MA1311, MA1505, EE2012], [CS2030, CS2040, MA1311, MA1505, MA2216], [CS2030, CS2040, MA1311, MA1505, ST1131], [CS2030, CS2040, MA1311, MA1505, ST1232], [CS2030, CS2040, MA1311, MA1505, ST2334], [CS2030, CS2040, MA1311, MA1507, EE2012], [CS2030, CS2040, MA1311, MA1507, MA2216], [CS2030, CS2040, MA1311, MA1507, ST1131], [CS2030, CS2040, MA1311, MA1507, ST1232], [CS2030, CS2040, MA1311, MA1507, ST2334], [CS2030, CS2040, MA1311, MA1511, MA1512, EE2012], [CS2030, CS2040, MA1311, MA1511, MA1512, MA2216], [CS2030, CS2040, MA1311, MA1511, MA1512, ST1131], [CS2030, CS2040, MA1311, MA1511, MA1512, ST1232], [CS2030, CS2040, MA1311, MA1511, MA1512, ST2334], [CS2030, CS2040, MA1311, MA1521, EE2012], [CS2030, CS2040, MA1311, MA1521, MA2216], [CS2030, CS2040, MA1311, MA1521, ST1131], [CS2030, CS2040, MA1311, MA1521, ST1232], [CS2030, CS2040, MA1311, MA1521, ST2334], [CS2030, CS2040, MA1508, MA1102R, EE2012], [CS2030, CS2040, MA1508, MA1102R, MA2216], [CS2030, CS2040, MA1508, MA1102R, ST1131], [CS2030, CS2040, MA1508, MA1102R, ST1232], [CS2030, CS2040, MA1508, MA1102R, ST2334], [CS2030, CS2040, MA1508, MA1505, EE2012], [CS2030, CS2040, MA1508, MA1505, MA2216], [CS2030, CS2040, MA1508, MA1505, ST1131], [CS2030, CS2040, MA1508, MA1505, ST1232], [CS2030, CS2040, MA1508, MA1505, ST2334], [CS2030, CS2040, MA1508, MA1507, EE2012], [CS2030, CS2040, MA1508, MA1507, MA2216], [CS2030, CS2040, MA1508, MA1507, ST1131], [CS2030, CS2040, MA1508, MA1507, ST1232], [CS2030, CS2040, MA1508, MA1507, ST2334], [CS2030, CS2040, MA1508, MA1511, MA1512, EE2012], [CS2030, CS2040, MA1508, MA1511, MA1512, MA2216], [CS2030, CS2040, MA1508, MA1511, MA1512, ST1131], [CS2030, CS2040, MA1508, MA1511, MA1512, ST1232], [CS2030, CS2040, MA1508, MA1511, MA1512, ST2334], [CS2030, CS2040, MA1508, MA1521, EE2012], [CS2030, CS2040, MA1508, MA1521, MA2216], [CS2030, CS2040, MA1508, MA1521, ST1131], [CS2030, CS2040, MA1508, MA1521, ST1232], [CS2030, CS2040, MA1508, MA1521, ST2334], [CS2030, CS2040, MA1513, MA1102R, EE2012], [CS2030, CS2040, MA1513, MA1102R, MA2216], [CS2030, CS2040, MA1513, MA1102R, ST1131], [CS2030, CS2040, MA1513, MA1102R, ST1232], [CS2030, CS2040, MA1513, MA1102R, ST2334], [CS2030, CS2040, MA1513, MA1505, EE2012], [CS2030, CS2040, MA1513, MA1505, MA2216], [CS2030, CS2040, MA1513, MA1505, ST1131], [CS2030, CS2040, MA1513, MA1505, ST1232], [CS2030, CS2040, MA1513, MA1505, ST2334], [CS2030, CS2040, MA1513, MA1507, EE2012], [CS2030, CS2040, MA1513, MA1507, MA2216], [CS2030, CS2040, MA1513, MA1507, ST1131], [CS2030, CS2040, MA1513, MA1507, ST1232], [CS2030, CS2040, MA1513, MA1507, ST2334], [CS2030, CS2040, MA1513, MA1511, MA1512, EE2012], [CS2030, CS2040, MA1513, MA1511, MA1512, MA2216], [CS2030, CS2040, MA1513, MA1511, MA1512, ST1131], [CS2030, CS2040, MA1513, MA1511, MA1512, ST1232], [CS2030, CS2040, MA1513, MA1511, MA1512, ST2334], [CS2030, CS2040, MA1513, MA1521, EE2012], [CS2030, CS2040, MA1513, MA1521, MA2216], [CS2030, CS2040, MA1513, MA1521, ST1131], [CS2030, CS2040, MA1513, MA1521, ST1232], [CS2030, CS2040, MA1513, MA1521, ST2334], [CS2030, CS2040S, MA1101R, MA1102R, EE2012], [CS2030, CS2040S, MA1101R, MA1102R, MA2216], [CS2030, CS2040S, MA1101R, MA1102R, ST1131], [CS2030, CS2040S, MA1101R, MA1102R, ST1232], [CS2030, CS2040S, MA1101R, MA1102R, ST2334], [CS2030, CS2040S, MA1101R, MA1505, EE2012], [CS2030, CS2040S, MA1101R, MA1505, MA2216], [CS2030, CS2040S, MA1101R, MA1505, ST1131], [CS2030, CS2040S, MA1101R, MA1505, ST1232], [CS2030, CS2040S, MA1101R, MA1505, ST2334], [CS2030, CS2040S, MA1101R, MA1507, EE2012], [CS2030, CS2040S, MA1101R, MA1507, MA2216], [CS2030, CS2040S, MA1101R, MA1507, ST1131], [CS2030, CS2040S, MA1101R, MA1507, ST1232], [CS2030, CS2040S, MA1101R, MA1507, ST2334], [CS2030, CS2040S, MA1101R, MA1511, MA1512, EE2012], [CS2030, CS2040S, MA1101R, MA1511, MA1512, MA2216], [CS2030, CS2040S, MA1101R, MA1511, MA1512, ST1131], [CS2030, CS2040S, MA1101R, MA1511, MA1512, ST1232], [CS2030, CS2040S, MA1101R, MA1511, MA1512, ST2334], [CS2030, CS2040S, MA1101R, MA1521, EE2012], [CS2030, CS2040S, MA1101R, MA1521, MA2216], [CS2030, CS2040S, MA1101R, MA1521, ST1131], [CS2030, CS2040S, MA1101R, MA1521, ST1232], [CS2030, CS2040S, MA1101R, MA1521, ST2334], [CS2030, CS2040S, MA1311, MA1102R, EE2012], [CS2030, CS2040S, MA1311, MA1102R, MA2216], [CS2030, CS2040S, MA1311, MA1102R, ST1131], [CS2030, CS2040S, MA1311, MA1102R, ST1232], [CS2030, CS2040S, MA1311, MA1102R, ST2334], [CS2030, CS2040S, MA1311, MA1505, EE2012], [CS2030, CS2040S, MA1311, MA1505, MA2216], [CS2030, CS2040S, MA1311, MA1505, ST1131], [CS2030, CS2040S, MA1311, MA1505, ST1232], [CS2030, CS2040S, MA1311, MA1505, ST2334], [CS2030, CS2040S, MA1311, MA1507, EE2012], [CS2030, CS2040S, MA1311, MA1507, MA2216], [CS2030, CS2040S, MA1311, MA1507, ST1131], [CS2030, CS2040S, MA1311, MA1507, ST1232], [CS2030, CS2040S, MA1311, MA1507, ST2334], [CS2030, CS2040S, MA1311, MA1511, MA1512, EE2012], [CS2030, CS2040S, MA1311, MA1511, MA1512, MA2216], [CS2030, CS2040S, MA1311, MA1511, MA1512, ST1131], [CS2030, CS2040S, MA1311, MA1511, MA1512, ST1232], [CS2030, CS2040S, MA1311, MA1511, MA1512, ST2334], [CS2030, CS2040S, MA1311, MA1521, EE2012], [CS2030, CS2040S, MA1311, MA1521, MA2216], [CS2030, CS2040S, MA1311, MA1521, ST1131], [CS2030, CS2040S, MA1311, MA1521, ST1232], [CS2030, CS2040S, MA1311, MA1521, ST2334], [CS2030, CS2040S, MA1508, MA1102R, EE2012], [CS2030, CS2040S, MA1508, MA1102R, MA2216], [CS2030, CS2040S, MA1508, MA1102R, ST1131], [CS2030, CS2040S, MA1508, MA1102R, ST1232], [CS2030, CS2040S, MA1508, MA1102R, ST2334], [CS2030, CS2040S, MA1508, MA1505, EE2012], [CS2030, CS2040S, MA1508, MA1505, MA2216], [CS2030, CS2040S, MA1508, MA1505, ST1131], [CS2030, CS2040S, MA1508, MA1505, ST1232], [CS2030, CS2040S, MA1508, MA1505, ST2334], [CS2030, CS2040S, MA1508, MA1507, EE2012], [CS2030, CS2040S, MA1508, MA1507, MA2216], [CS2030, CS2040S, MA1508, MA1507, ST1131], [CS2030, CS2040S, MA1508, MA1507, ST1232], [CS2030, CS2040S, MA1508, MA1507, ST2334], [CS2030, CS2040S, MA1508, MA1511, MA1512, EE2012], [CS2030, CS2040S, MA1508, MA1511, MA1512, MA2216], [CS2030, CS2040S, MA1508, MA1511, MA1512, ST1131], [CS2030, CS2040S, MA1508, MA1511, MA1512, ST1232], [CS2030, CS2040S, MA1508, MA1511, MA1512, ST2334], [CS2030, CS2040S, MA1508, MA1521, EE2012], [CS2030, CS2040S, MA1508, MA1521, MA2216], [CS2030, CS2040S, MA1508, MA1521, ST1131], [CS2030, CS2040S, MA1508, MA1521, ST1232], [CS2030, CS2040S, MA1508, MA1521, ST2334], [CS2030, CS2040S, MA1513, MA1102R, EE2012], [CS2030, CS2040S, MA1513, MA1102R, MA2216], [CS2030, CS2040S, MA1513, MA1102R, ST1131], [CS2030, CS2040S, MA1513, MA1102R, ST1232], [CS2030, CS2040S, MA1513, MA1102R, ST2334], [CS2030, CS2040S, MA1513, MA1505, EE2012], [CS2030, CS2040S, MA1513, MA1505, MA2216], [CS2030, CS2040S, MA1513, MA1505, ST1131], [CS2030, CS2040S, MA1513, MA1505, ST1232], [CS2030, CS2040S, MA1513, MA1505, ST2334], [CS2030, CS2040S, MA1513, MA1507, EE2012], [CS2030, CS2040S, MA1513, MA1507, MA2216], [CS2030, CS2040S, MA1513, MA1507, ST1131], [CS2030, CS2040S, MA1513, MA1507, ST1232], [CS2030, CS2040S, MA1513, MA1507, ST2334], [CS2030, CS2040S, MA1513, MA1511, MA1512, EE2012], [CS2030, CS2040S, MA1513, MA1511, MA1512, MA2216], [CS2030, CS2040S, MA1513, MA1511, MA1512, ST1131], [CS2030, CS2040S, MA1513, MA1511, MA1512, ST1232], [CS2030, CS2040S, MA1513, MA1511, MA1512, ST2334], [CS2030, CS2040S, MA1513, MA1521, EE2012], [CS2030, CS2040S, MA1513, MA1521, MA2216], [CS2030, CS2040S, MA1513, MA1521, ST1131], [CS2030, CS2040S, MA1513, MA1521, ST1232], [CS2030, CS2040S, MA1513, MA1521, ST2334], [CS2030, CS2040C, MA1101R, MA1102R, EE2012], [CS2030, CS2040C, MA1101R, MA1102R, MA2216], [CS2030, CS2040C, MA1101R, MA1102R, ST1131], [CS2030, CS2040C, MA1101R, MA1102R, ST1232], [CS2030, CS2040C, MA1101R, MA1102R, ST2334], [CS2030, CS2040C, MA1101R, MA1505, EE2012], [CS2030, CS2040C, MA1101R, MA1505, MA2216], [CS2030, CS2040C, MA1101R, MA1505, ST1131], [CS2030, CS2040C, MA1101R, MA1505, ST1232], [CS2030, CS2040C, MA1101R, MA1505, ST2334], [CS2030, CS2040C, MA1101R, MA1507, EE2012], [CS2030, CS2040C, MA1101R, MA1507, MA2216], [CS2030, CS2040C, MA1101R, MA1507, ST1131], [CS2030, CS2040C, MA1101R, MA1507, ST1232], [CS2030, CS2040C, MA1101R, MA1507, ST2334], [CS2030, CS2040C, MA1101R, MA1511, MA1512, EE2012], [CS2030, CS2040C, MA1101R, MA1511, MA1512, MA2216], [CS2030, CS2040C, MA1101R, MA1511, MA1512, ST1131], [CS2030, CS2040C, MA1101R, MA1511, MA1512, ST1232], [CS2030, CS2040C, MA1101R, MA1511, MA1512, ST2334], [CS2030, CS2040C, MA1101R, MA1521, EE2012], [CS2030, CS2040C, MA1101R, MA1521, MA2216], [CS2030, CS2040C, MA1101R, MA1521, ST1131], [CS2030, CS2040C, MA1101R, MA1521, ST1232], [CS2030, CS2040C, MA1101R, MA1521, ST2334], [CS2030, CS2040C, MA1311, MA1102R, EE2012], [CS2030, CS2040C, MA1311, MA1102R, MA2216], [CS2030, CS2040C, MA1311, MA1102R, ST1131], [CS2030, CS2040C, MA1311, MA1102R, ST1232], [CS2030, CS2040C, MA1311, MA1102R, ST2334], [CS2030, CS2040C, MA1311, MA1505, EE2012], [CS2030, CS2040C, MA1311, MA1505, MA2216], [CS2030, CS2040C, MA1311, MA1505, ST1131], [CS2030, CS2040C, MA1311, MA1505, ST1232], [CS2030, CS2040C, MA1311, MA1505, ST2334], [CS2030, CS2040C, MA1311, MA1507, EE2012], [CS2030, CS2040C, MA1311, MA1507, MA2216], [CS2030, CS2040C, MA1311, MA1507, ST1131], [CS2030, CS2040C, MA1311, MA1507, ST1232], [CS2030, CS2040C, MA1311, MA1507, ST2334], [CS2030, CS2040C, MA1311, MA1511, MA1512, EE2012], [CS2030, CS2040C, MA1311, MA1511, MA1512, MA2216], [CS2030, CS2040C, MA1311, MA1511, MA1512, ST1131], [CS2030, CS2040C, MA1311, MA1511, MA1512, ST1232], [CS2030, CS2040C, MA1311, MA1511, MA1512, ST2334], [CS2030, CS2040C, MA1311, MA1521, EE2012], [CS2030, CS2040C, MA1311, MA1521, MA2216], [CS2030, CS2040C, MA1311, MA1521, ST1131], [CS2030, CS2040C, MA1311, MA1521, ST1232], [CS2030, CS2040C, MA1311, MA1521, ST2334], [CS2030, CS2040C, MA1508, MA1102R, EE2012], [CS2030, CS2040C, MA1508, MA1102R, MA2216], [CS2030, CS2040C, MA1508, MA1102R, ST1131], [CS2030, CS2040C, MA1508, MA1102R, ST1232], [CS2030, CS2040C, MA1508, MA1102R, ST2334], [CS2030, CS2040C, MA1508, MA1505, EE2012], [CS2030, CS2040C, MA1508, MA1505, MA2216], [CS2030, CS2040C, MA1508, MA1505, ST1131], [CS2030, CS2040C, MA1508, MA1505, ST1232], [CS2030, CS2040C, MA1508, MA1505, ST2334], [CS2030, CS2040C, MA1508, MA1507, EE2012], [CS2030, CS2040C, MA1508, MA1507, MA2216], [CS2030, CS2040C, MA1508, MA1507, ST1131], [CS2030, CS2040C, MA1508, MA1507, ST1232], [CS2030, CS2040C, MA1508, MA1507, ST2334], [CS2030, CS2040C, MA1508, MA1511, MA1512, EE2012], [CS2030, CS2040C, MA1508, MA1511, MA1512, MA2216], [CS2030, CS2040C, MA1508, MA1511, MA1512, ST1131], [CS2030, CS2040C, MA1508, MA1511, MA1512, ST1232], [CS2030, CS2040C, MA1508, MA1511, MA1512, ST2334], [CS2030, CS2040C, MA1508, MA1521, EE2012], [CS2030, CS2040C, MA1508, MA1521, MA2216], [CS2030, CS2040C, MA1508, MA1521, ST1131], [CS2030, CS2040C, MA1508, MA1521, ST1232], [CS2030, CS2040C, MA1508, MA1521, ST2334], [CS2030, CS2040C, MA1513, MA1102R, EE2012], [CS2030, CS2040C, MA1513, MA1102R, MA2216], [CS2030, CS2040C, MA1513, MA1102R, ST1131], [CS2030, CS2040C, MA1513, MA1102R, ST1232], [CS2030, CS2040C, MA1513, MA1102R, ST2334], [CS2030, CS2040C, MA1513, MA1505, EE2012], [CS2030, CS2040C, MA1513, MA1505, MA2216], [CS2030, CS2040C, MA1513, MA1505, ST1131], [CS2030, CS2040C, MA1513, MA1505, ST1232], [CS2030, CS2040C, MA1513, MA1505, ST2334], [CS2030, CS2040C, MA1513, MA1507, EE2012], [CS2030, CS2040C, MA1513, MA1507, MA2216], [CS2030, CS2040C, MA1513, MA1507, ST1131], [CS2030, CS2040C, MA1513, MA1507, ST1232], [CS2030, CS2040C, MA1513, MA1507, ST2334], [CS2030, CS2040C, MA1513, MA1511, MA1512, EE2012], [CS2030, CS2040C, MA1513, MA1511, MA1512, MA2216], [CS2030, CS2040C, MA1513, MA1511, MA1512, ST1131], [CS2030, CS2040C, MA1513, MA1511, MA1512, ST1232], [CS2030, CS2040C, MA1513, MA1511, MA1512, ST2334], [CS2030, CS2040C, MA1513, MA1521, EE2012], [CS2030, CS2040C, MA1513, MA1521, MA2216], [CS2030, CS2040C, MA1513, MA1521, ST1131], [CS2030, CS2040C, MA1513, MA1521, ST1232], [CS2030, CS2040C, MA1513, MA1521, ST2334], [CS2113, CS2040, MA1101R, MA1102R, EE2012], [CS2113, CS2040, MA1101R, MA1102R, MA2216], [CS2113, CS2040, MA1101R, MA1102R, ST1131], [CS2113, CS2040, MA1101R, MA1102R, ST1232], [CS2113, CS2040, MA1101R, MA1102R, ST2334], [CS2113, CS2040, MA1101R, MA1505, EE2012], [CS2113, CS2040, MA1101R, MA1505, MA2216], [CS2113, CS2040, MA1101R, MA1505, ST1131], [CS2113, CS2040, MA1101R, MA1505, ST1232], [CS2113, CS2040, MA1101R, MA1505, ST2334], [CS2113, CS2040, MA1101R, MA1507, EE2012], [CS2113, CS2040, MA1101R, MA1507, MA2216], [CS2113, CS2040, MA1101R, MA1507, ST1131], [CS2113, CS2040, MA1101R, MA1507, ST1232], [CS2113, CS2040, MA1101R, MA1507, ST2334], [CS2113, CS2040, MA1101R, MA1511, MA1512, EE2012], [CS2113, CS2040, MA1101R, MA1511, MA1512, MA2216], [CS2113, CS2040, MA1101R, MA1511, MA1512, ST1131], [CS2113, CS2040, MA1101R, MA1511, MA1512, ST1232], [CS2113, CS2040, MA1101R, MA1511, MA1512, ST2334], [CS2113, CS2040, MA1101R, MA1521, EE2012], [CS2113, CS2040, MA1101R, MA1521, MA2216], [CS2113, CS2040, MA1101R, MA1521, ST1131], [CS2113, CS2040, MA1101R, MA1521, ST1232], [CS2113, CS2040, MA1101R, MA1521, ST2334], [CS2113, CS2040, MA1311, MA1102R, EE2012], [CS2113, CS2040, MA1311, MA1102R, MA2216], [CS2113, CS2040, MA1311, MA1102R, ST1131], [CS2113, CS2040, MA1311, MA1102R, ST1232], [CS2113, CS2040, MA1311, MA1102R, ST2334], [CS2113, CS2040, MA1311, MA1505, EE2012], [CS2113, CS2040, MA1311, MA1505, MA2216], [CS2113, CS2040, MA1311, MA1505, ST1131], [CS2113, CS2040, MA1311, MA1505, ST1232], [CS2113, CS2040, MA1311, MA1505, ST2334], [CS2113, CS2040, MA1311, MA1507, EE2012], [CS2113, CS2040, MA1311, MA1507, MA2216], [CS2113, CS2040, MA1311, MA1507, ST1131], [CS2113, CS2040, MA1311, MA1507, ST1232], [CS2113, CS2040, MA1311, MA1507, ST2334], [CS2113, CS2040, MA1311, MA1511, MA1512, EE2012], [CS2113, CS2040, MA1311, MA1511, MA1512, MA2216], [CS2113, CS2040, MA1311, MA1511, MA1512, ST1131], [CS2113, CS2040, MA1311, MA1511, MA1512, ST1232], [CS2113, CS2040, MA1311, MA1511, MA1512, ST2334], [CS2113, CS2040, MA1311, MA1521, EE2012], [CS2113, CS2040, MA1311, MA1521, MA2216], [CS2113, CS2040, MA1311, MA1521, ST1131], [CS2113, CS2040, MA1311, MA1521, ST1232], [CS2113, CS2040, MA1311, MA1521, ST2334], [CS2113, CS2040, MA1508, MA1102R, EE2012], [CS2113, CS2040, MA1508, MA1102R, MA2216], [CS2113, CS2040, MA1508, MA1102R, ST1131], [CS2113, CS2040, MA1508, MA1102R, ST1232], [CS2113, CS2040, MA1508, MA1102R, ST2334], [CS2113, CS2040, MA1508, MA1505, EE2012], [CS2113, CS2040, MA1508, MA1505, MA2216], [CS2113, CS2040, MA1508, MA1505, ST1131], [CS2113, CS2040, MA1508, MA1505, ST1232], [CS2113, CS2040, MA1508, MA1505, ST2334], [CS2113, CS2040, MA1508, MA1507, EE2012], [CS2113, CS2040, MA1508, MA1507, MA2216], [CS2113, CS2040, MA1508, MA1507, ST1131], [CS2113, CS2040, MA1508, MA1507, ST1232], [CS2113, CS2040, MA1508, MA1507, ST2334], [CS2113, CS2040, MA1508, MA1511, MA1512, EE2012], [CS2113, CS2040, MA1508, MA1511, MA1512, MA2216], [CS2113, CS2040, MA1508, MA1511, MA1512, ST1131], [CS2113, CS2040, MA1508, MA1511, MA1512, ST1232], [CS2113, CS2040, MA1508, MA1511, MA1512, ST2334], [CS2113, CS2040, MA1508, MA1521, EE2012], [CS2113, CS2040, MA1508, MA1521, MA2216], [CS2113, CS2040, MA1508, MA1521, ST1131], [CS2113, CS2040, MA1508, MA1521, ST1232], [CS2113, CS2040, MA1508, MA1521, ST2334], [CS2113, CS2040, MA1513, MA1102R, EE2012], [CS2113, CS2040, MA1513, MA1102R, MA2216], [CS2113, CS2040, MA1513, MA1102R, ST1131], [CS2113, CS2040, MA1513, MA1102R, ST1232], [CS2113, CS2040, MA1513, MA1102R, ST2334], [CS2113, CS2040, MA1513, MA1505, EE2012], [CS2113, CS2040, MA1513, MA1505, MA2216], [CS2113, CS2040, MA1513, MA1505, ST1131], [CS2113, CS2040, MA1513, MA1505, ST1232], [CS2113, CS2040, MA1513, MA1505, ST2334], [CS2113, CS2040, MA1513, MA1507, EE2012], [CS2113, CS2040, MA1513, MA1507, MA2216], [CS2113, CS2040, MA1513, MA1507, ST1131], [CS2113, CS2040, MA1513, MA1507, ST1232], [CS2113, CS2040, MA1513, MA1507, ST2334], [CS2113, CS2040, MA1513, MA1511, MA1512, EE2012], [CS2113, CS2040, MA1513, MA1511, MA1512, MA2216], [CS2113, CS2040, MA1513, MA1511, MA1512, ST1131], [CS2113, CS2040, MA1513, MA1511, MA1512, ST1232], [CS2113, CS2040, MA1513, MA1511, MA1512, ST2334], [CS2113, CS2040, MA1513, MA1521, EE2012], [CS2113, CS2040, MA1513, MA1521, MA2216], [CS2113, CS2040, MA1513, MA1521, ST1131], [CS2113, CS2040, MA1513, MA1521, ST1232], [CS2113, CS2040, MA1513, MA1521, ST2334], [CS2113, CS2040S, MA1101R, MA1102R, EE2012], [CS2113, CS2040S, MA1101R, MA1102R, MA2216], [CS2113, CS2040S, MA1101R, MA1102R, ST1131], [CS2113, CS2040S, MA1101R, MA1102R, ST1232], [CS2113, CS2040S, MA1101R, MA1102R, ST2334], [CS2113, CS2040S, MA1101R, MA1505, EE2012], [CS2113, CS2040S, MA1101R, MA1505, MA2216], [CS2113, CS2040S, MA1101R, MA1505, ST1131], [CS2113, CS2040S, MA1101R, MA1505, ST1232], [CS2113, CS2040S, MA1101R, MA1505, ST2334], [CS2113, CS2040S, MA1101R, MA1507, EE2012], [CS2113, CS2040S, MA1101R, MA1507, MA2216], [CS2113, CS2040S, MA1101R, MA1507, ST1131], [CS2113, CS2040S, MA1101R, MA1507, ST1232], [CS2113, CS2040S, MA1101R, MA1507, ST2334], [CS2113, CS2040S, MA1101R, MA1511, MA1512, EE2012], [CS2113, CS2040S, MA1101R, MA1511, MA1512, MA2216], [CS2113, CS2040S, MA1101R, MA1511, MA1512, ST1131], [CS2113, CS2040S, MA1101R, MA1511, MA1512, ST1232], [CS2113, CS2040S, MA1101R, MA1511, MA1512, ST2334], [CS2113, CS2040S, MA1101R, MA1521, EE2012], [CS2113, CS2040S, MA1101R, MA1521, MA2216], [CS2113, CS2040S, MA1101R, MA1521, ST1131], [CS2113, CS2040S, MA1101R, MA1521, ST1232], [CS2113, CS2040S, MA1101R, MA1521, ST2334], [CS2113, CS2040S, MA1311, MA1102R, EE2012], [CS2113, CS2040S, MA1311, MA1102R, MA2216], [CS2113, CS2040S, MA1311, MA1102R, ST1131], [CS2113, CS2040S, MA1311, MA1102R, ST1232], [CS2113, CS2040S, MA1311, MA1102R, ST2334], [CS2113, CS2040S, MA1311, MA1505, EE2012], [CS2113, CS2040S, MA1311, MA1505, MA2216], [CS2113, CS2040S, MA1311, MA1505, ST1131], [CS2113, CS2040S, MA1311, MA1505, ST1232], [CS2113, CS2040S, MA1311, MA1505, ST2334], [CS2113, CS2040S, MA1311, MA1507, EE2012], [CS2113, CS2040S, MA1311, MA1507, MA2216], [CS2113, CS2040S, MA1311, MA1507, ST1131], [CS2113, CS2040S, MA1311, MA1507, ST1232], [CS2113, CS2040S, MA1311, MA1507, ST2334], [CS2113, CS2040S, MA1311, MA1511, MA1512, EE2012], [CS2113, CS2040S, MA1311, MA1511, MA1512, MA2216], [CS2113, CS2040S, MA1311, MA1511, MA1512, ST1131], [CS2113, CS2040S, MA1311, MA1511, MA1512, ST1232], [CS2113, CS2040S, MA1311, MA1511, MA1512, ST2334], [CS2113, CS2040S, MA1311, MA1521, EE2012], [CS2113, CS2040S, MA1311, MA1521, MA2216], [CS2113, CS2040S, MA1311, MA1521, ST1131], [CS2113, CS2040S, MA1311, MA1521, ST1232], [CS2113, CS2040S, MA1311, MA1521, ST2334], [CS2113, CS2040S, MA1508, MA1102R, EE2012], [CS2113, CS2040S, MA1508, MA1102R, MA2216], [CS2113, CS2040S, MA1508, MA1102R, ST1131], [CS2113, CS2040S, MA1508, MA1102R, ST1232], [CS2113, CS2040S, MA1508, MA1102R, ST2334], [CS2113, CS2040S, MA1508, MA1505, EE2012], [CS2113, CS2040S, MA1508, MA1505, MA2216], [CS2113, CS2040S, MA1508, MA1505, ST1131], [CS2113, CS2040S, MA1508, MA1505, ST1232], [CS2113, CS2040S, MA1508, MA1505, ST2334], [CS2113, CS2040S, MA1508, MA1507, EE2012], [CS2113, CS2040S, MA1508, MA1507, MA2216], [CS2113, CS2040S, MA1508, MA1507, ST1131], [CS2113, CS2040S, MA1508, MA1507, ST1232], [CS2113, CS2040S, MA1508, MA1507, ST2334], [CS2113, CS2040S, MA1508, MA1511, MA1512, EE2012], [CS2113, CS2040S, MA1508, MA1511, MA1512, MA2216], [CS2113, CS2040S, MA1508, MA1511, MA1512, ST1131], [CS2113, CS2040S, MA1508, MA1511, MA1512, ST1232], [CS2113, CS2040S, MA1508, MA1511, MA1512, ST2334], [CS2113, CS2040S, MA1508, MA1521, EE2012], [CS2113, CS2040S, MA1508, MA1521, MA2216], [CS2113, CS2040S, MA1508, MA1521, ST1131], [CS2113, CS2040S, MA1508, MA1521, ST1232], [CS2113, CS2040S, MA1508, MA1521, ST2334], [CS2113, CS2040S, MA1513, MA1102R, EE2012], [CS2113, CS2040S, MA1513, MA1102R, MA2216], [CS2113, CS2040S, MA1513, MA1102R, ST1131], [CS2113, CS2040S, MA1513, MA1102R, ST1232], [CS2113, CS2040S, MA1513, MA1102R, ST2334], [CS2113, CS2040S, MA1513, MA1505, EE2012], [CS2113, CS2040S, MA1513, MA1505, MA2216], [CS2113, CS2040S, MA1513, MA1505, ST1131], [CS2113, CS2040S, MA1513, MA1505, ST1232], [CS2113, CS2040S, MA1513, MA1505, ST2334], [CS2113, CS2040S, MA1513, MA1507, EE2012], [CS2113, CS2040S, MA1513, MA1507, MA2216], [CS2113, CS2040S, MA1513, MA1507, ST1131], [CS2113, CS2040S, MA1513, MA1507, ST1232], [CS2113, CS2040S, MA1513, MA1507, ST2334], [CS2113, CS2040S, MA1513, MA1511, MA1512, EE2012], [CS2113, CS2040S, MA1513, MA1511, MA1512, MA2216], [CS2113, CS2040S, MA1513, MA1511, MA1512, ST1131], [CS2113, CS2040S, MA1513, MA1511, MA1512, ST1232], [CS2113, CS2040S, MA1513, MA1511, MA1512, ST2334], [CS2113, CS2040S, MA1513, MA1521, EE2012], [CS2113, CS2040S, MA1513, MA1521, MA2216], [CS2113, CS2040S, MA1513, MA1521, ST1131], [CS2113, CS2040S, MA1513, MA1521, ST1232], [CS2113, CS2040S, MA1513, MA1521, ST2334], [CS2113, CS2040C, MA1101R, MA1102R, EE2012], [CS2113, CS2040C, MA1101R, MA1102R, MA2216], [CS2113, CS2040C, MA1101R, MA1102R, ST1131], [CS2113, CS2040C, MA1101R, MA1102R, ST1232], [CS2113, CS2040C, MA1101R, MA1102R, ST2334], [CS2113, CS2040C, MA1101R, MA1505, EE2012], [CS2113, CS2040C, MA1101R, MA1505, MA2216], [CS2113, CS2040C, MA1101R, MA1505, ST1131], [CS2113, CS2040C, MA1101R, MA1505, ST1232], [CS2113, CS2040C, MA1101R, MA1505, ST2334], [CS2113, CS2040C, MA1101R, MA1507, EE2012], [CS2113, CS2040C, MA1101R, MA1507, MA2216], [CS2113, CS2040C, MA1101R, MA1507, ST1131], [CS2113, CS2040C, MA1101R, MA1507, ST1232], [CS2113, CS2040C, MA1101R, MA1507, ST2334], [CS2113, CS2040C, MA1101R, MA1511, MA1512, EE2012], [CS2113, CS2040C, MA1101R, MA1511, MA1512, MA2216], [CS2113, CS2040C, MA1101R, MA1511, MA1512, ST1131], [CS2113, CS2040C, MA1101R, MA1511, MA1512, ST1232], [CS2113, CS2040C, MA1101R, MA1511, MA1512, ST2334], [CS2113, CS2040C, MA1101R, MA1521, EE2012], [CS2113, CS2040C, MA1101R, MA1521, MA2216], [CS2113, CS2040C, MA1101R, MA1521, ST1131], [CS2113, CS2040C, MA1101R, MA1521, ST1232], [CS2113, CS2040C, MA1101R, MA1521, ST2334], [CS2113, CS2040C, MA1311, MA1102R, EE2012], [CS2113, CS2040C, MA1311, MA1102R, MA2216], [CS2113, CS2040C, MA1311, MA1102R, ST1131], [CS2113, CS2040C, MA1311, MA1102R, ST1232], [CS2113, CS2040C, MA1311, MA1102R, ST2334], [CS2113, CS2040C, MA1311, MA1505, EE2012], [CS2113, CS2040C, MA1311, MA1505, MA2216], [CS2113, CS2040C, MA1311, MA1505, ST1131], [CS2113, CS2040C, MA1311, MA1505, ST1232], [CS2113, CS2040C, MA1311, MA1505, ST2334], [CS2113, CS2040C, MA1311, MA1507, EE2012], [CS2113, CS2040C, MA1311, MA1507, MA2216], [CS2113, CS2040C, MA1311, MA1507, ST1131], [CS2113, CS2040C, MA1311, MA1507, ST1232], [CS2113, CS2040C, MA1311, MA1507, ST2334], [CS2113, CS2040C, MA1311, MA1511, MA1512, EE2012], [CS2113, CS2040C, MA1311, MA1511, MA1512, MA2216], [CS2113, CS2040C, MA1311, MA1511, MA1512, ST1131], [CS2113, CS2040C, MA1311, MA1511, MA1512, ST1232], [CS2113, CS2040C, MA1311, MA1511, MA1512, ST2334], [CS2113, CS2040C, MA1311, MA1521, EE2012], [CS2113, CS2040C, MA1311, MA1521, MA2216], [CS2113, CS2040C, MA1311, MA1521, ST1131], [CS2113, CS2040C, MA1311, MA1521, ST1232], [CS2113, CS2040C, MA1311, MA1521, ST2334], [CS2113, CS2040C, MA1508, MA1102R, EE2012], [CS2113, CS2040C, MA1508, MA1102R, MA2216], [CS2113, CS2040C, MA1508, MA1102R, ST1131], [CS2113, CS2040C, MA1508, MA1102R, ST1232], [CS2113, CS2040C, MA1508, MA1102R, ST2334], [CS2113, CS2040C, MA1508, MA1505, EE2012], [CS2113, CS2040C, MA1508, MA1505, MA2216], [CS2113, CS2040C, MA1508, MA1505, ST1131], [CS2113, CS2040C, MA1508, MA1505, ST1232], [CS2113, CS2040C, MA1508, MA1505, ST2334], [CS2113, CS2040C, MA1508, MA1507, EE2012], [CS2113, CS2040C, MA1508, MA1507, MA2216], [CS2113, CS2040C, MA1508, MA1507, ST1131], [CS2113, CS2040C, MA1508, MA1507, ST1232], [CS2113, CS2040C, MA1508, MA1507, ST2334], [CS2113, CS2040C, MA1508, MA1511, MA1512, EE2012], [CS2113, CS2040C, MA1508, MA1511, MA1512, MA2216], [CS2113, CS2040C, MA1508, MA1511, MA1512, ST1131], [CS2113, CS2040C, MA1508, MA1511, MA1512, ST1232], [CS2113, CS2040C, MA1508, MA1511, MA1512, ST2334], [CS2113, CS2040C, MA1508, MA1521, EE2012], [CS2113, CS2040C, MA1508, MA1521, MA2216], [CS2113, CS2040C, MA1508, MA1521, ST1131], [CS2113, CS2040C, MA1508, MA1521, ST1232], [CS2113, CS2040C, MA1508, MA1521, ST2334], [CS2113, CS2040C, MA1513, MA1102R, EE2012], [CS2113, CS2040C, MA1513, MA1102R, MA2216], [CS2113, CS2040C, MA1513, MA1102R, ST1131], [CS2113, CS2040C, MA1513, MA1102R, ST1232], [CS2113, CS2040C, MA1513, MA1102R, ST2334], [CS2113, CS2040C, MA1513, MA1505, EE2012], [CS2113, CS2040C, MA1513, MA1505, MA2216], [CS2113, CS2040C, MA1513, MA1505, ST1131], [CS2113, CS2040C, MA1513, MA1505, ST1232], [CS2113, CS2040C, MA1513, MA1505, ST2334], [CS2113, CS2040C, MA1513, MA1507, EE2012], [CS2113, CS2040C, MA1513, MA1507, MA2216], [CS2113, CS2040C, MA1513, MA1507, ST1131], [CS2113, CS2040C, MA1513, MA1507, ST1232], [CS2113, CS2040C, MA1513, MA1507, ST2334], [CS2113, CS2040C, MA1513, MA1511, MA1512, EE2012], [CS2113, CS2040C, MA1513, MA1511, MA1512, MA2216], [CS2113, CS2040C, MA1513, MA1511, MA1512, ST1131], [CS2113, CS2040C, MA1513, MA1511, MA1512, ST1232], [CS2113, CS2040C, MA1513, MA1511, MA1512, ST2334], [CS2113, CS2040C, MA1513, MA1521, EE2012], [CS2113, CS2040C, MA1513, MA1521, MA2216], [CS2113, CS2040C, MA1513, MA1521, ST1131], [CS2113, CS2040C, MA1513, MA1521, ST1232], [CS2113, CS2040C, MA1513, MA1521, ST2334]];
prerequisitesMap["CS4244"] = [[CS3243]];
prerequisitesMap["CS4246"] = [[CS3243, EE2012], [CS3243, ST2132], [CS3243, ST2334], [CS3243, MA2216, ST1131], [CS3243, MA2216, ST1232], [CS3243, MA2216, DSC2008]];
prerequisitesMap["CS4247"] = [[CS3241]];
prerequisitesMap["CS4248"] = [[CS3243, EE2012], [CS3243, MA2216], [CS3243, ST2334], [CS3245, EE2012], [CS3245, MA2216], [CS3245, ST2334]];
prerequisitesMap["CS4249"] = [[CS3240], [NM2213], [NM2216]];
prerequisitesMap["CS4268"] = [[CS3230, MA1101R, EE2012], [CS3230, MA1101R, MA2216], [CS3230, MA1101R, ST2334], [CS3230, MA1311, EE2012], [CS3230, MA1311, MA2216], [CS3230, MA1311, ST2334], [CS3230, MA1508, EE2012], [CS3230, MA1508, MA2216], [CS3230, MA1508, ST2334], [CS3230, MA1513, EE2012], [CS3230, MA1513, MA2216], [CS3230, MA1513, ST2334]];
prerequisitesMap["CS4276"] = [[CG3002], [CG4002], [CS3237]];
prerequisitesMap["CS4277"] = [[MA1101R, CS2040], [MA1101R, CS2040S], [MA1101R, CS2040C], [MA1311, CS2040], [MA1311, CS2040S], [MA1311, CS2040C], [MA1506, CS2040], [MA1506, CS2040S], [MA1506, CS2040C], [MA1508, CS2040], [MA1508, CS2040S], [MA1508, CS2040C]];
prerequisitesMap["CS4278"] = [[CS3243, MA1101R, MA1102R, EE2012], [CS3243, MA1101R, MA1102R, MA2216], [CS3243, MA1101R, MA1102R, ST2334], [CS3243, MA1101R, MA1505, EE2012], [CS3243, MA1101R, MA1505, MA2216], [CS3243, MA1101R, MA1505, ST2334], [CS3243, MA1101R, MA1511, MA1512, EE2012], [CS3243, MA1101R, MA1511, MA1512, MA2216], [CS3243, MA1101R, MA1511, MA1512, ST2334], [CS3243, MA1101R, MA1521, EE2012], [CS3243, MA1101R, MA1521, MA2216], [CS3243, MA1101R, MA1521, ST2334], [CS3243, MA1311, MA1102R, EE2012], [CS3243, MA1311, MA1102R, MA2216], [CS3243, MA1311, MA1102R, ST2334], [CS3243, MA1311, MA1505, EE2012], [CS3243, MA1311, MA1505, MA2216], [CS3243, MA1311, MA1505, ST2334], [CS3243, MA1311, MA1511, MA1512, EE2012], [CS3243, MA1311, MA1511, MA1512, MA2216], [CS3243, MA1311, MA1511, MA1512, ST2334], [CS3243, MA1311, MA1521, EE2012], [CS3243, MA1311, MA1521, MA2216], [CS3243, MA1311, MA1521, ST2334], [CS3243, MA1508, MA1102R, EE2012], [CS3243, MA1508, MA1102R, MA2216], [CS3243, MA1508, MA1102R, ST2334], [CS3243, MA1508, MA1505, EE2012], [CS3243, MA1508, MA1505, MA2216], [CS3243, MA1508, MA1505, ST2334], [CS3243, MA1508, MA1511, MA1512, EE2012], [CS3243, MA1508, MA1511, MA1512, MA2216], [CS3243, MA1508, MA1511, MA1512, ST2334], [CS3243, MA1508, MA1521, EE2012], [CS3243, MA1508, MA1521, MA2216], [CS3243, MA1508, MA1521, ST2334]];
prerequisitesMap["CS4347"] = [[CS2108, MA1101R, MA1102R], [CS2108, MA1101R, MA1505], [CS2108, MA1101R, MA1507], [CS2108, MA1101R, MA1511, MA1512], [CS2108, MA1101R, MA1521], [CS2108, MA1311, MA1102R], [CS2108, MA1311, MA1505], [CS2108, MA1311, MA1507], [CS2108, MA1311, MA1511, MA1512], [CS2108, MA1311, MA1521], [CS2108, MA1508, MA1102R], [CS2108, MA1508, MA1505], [CS2108, MA1508, MA1507], [CS2108, MA1508, MA1511, MA1512], [CS2108, MA1508, MA1521], [CS2108, MA1513, MA1102R], [CS2108, MA1513, MA1505], [CS2108, MA1513, MA1507], [CS2108, MA1513, MA1511, MA1512], [CS2108, MA1513, MA1521]];
prerequisitesMap["CS4350"] = [[CS3247], [NM3216]];
prerequisitesMap["CS5218"] = [[CS4212], [CS4215]];
prerequisitesMap["CS5219"] = [[CS2104]];
prerequisitesMap["CS5222"] = [[CS3220], [CS4223]];
prerequisitesMap["CS5223"] = [[CS3211]];
prerequisitesMap["CS5228"] = [[CS2102, CS3243, EE2012], [CS2102, CS3243, ST2132], [CS2102, CS3243, ST2334], [CS2102, CS3243, MA2216, ST1131], [CS2102, CS3243, MA2216, ST1232], [CS2102, CS3243, MA2216, DSC2008]];
prerequisitesMap["CS5229"] = [[CS4226], [EE4210]];
prerequisitesMap["CS5230"] = [[CS4232]];
prerequisitesMap["CS5231"] = [[CS3235]];
prerequisitesMap["CS5232"] = [[CS1231, CS2103], [CS1231, CS2103T]];
prerequisitesMap["CS5233"] = [[CS4231, EE2012], [CS4231, ST2132], [CS4231, ST2334], [CS4231, MA2216, ST1131], [CS4231, MA2216, ST1232], [CS4231, MA2216, DSC2008]];
prerequisitesMap["CS5234"] = [[CS3230]];
prerequisitesMap["CS5236"] = [[CS4232]];
prerequisitesMap["CS5239"] = [[CS1020, EE2012], [CS1020, ST2132], [CS1020, ST2334], [CS1020, MA2216, ST1131], [CS1020, MA2216, ST1232], [CS1020, MA2216, DSC2008], [CS2020, EE2012], [CS2020, ST2132], [CS2020, ST2334], [CS2020, MA2216, ST1131], [CS2020, MA2216, ST1232], [CS2020, MA2216, DSC2008], [CS2030, EE2012], [CS2030, ST2132], [CS2030, ST2334], [CS2030, MA2216, ST1131], [CS2030, MA2216, ST1232], [CS2030, MA2216, DSC2008], [CS2113, EE2012], [CS2113, ST2132], [CS2113, ST2334], [CS2113, MA2216, ST1131], [CS2113, MA2216, ST1232], [CS2113, MA2216, DSC2008]];
prerequisitesMap["CS5240"] = [[CS1020, MA1101R, MA1102R, EE2012], [CS1020, MA1101R, MA1102R, MA2216], [CS1020, MA1101R, MA1102R, ST1131], [CS1020, MA1101R, MA1102R, ST1232], [CS1020, MA1101R, MA1102R, ST2334], [CS1020, MA1101R, MA1505, EE2012], [CS1020, MA1101R, MA1505, MA2216], [CS1020, MA1101R, MA1505, ST1131], [CS1020, MA1101R, MA1505, ST1232], [CS1020, MA1101R, MA1505, ST2334], [CS1020, MA1101R, MA1507, EE2012], [CS1020, MA1101R, MA1507, MA2216], [CS1020, MA1101R, MA1507, ST1131], [CS1020, MA1101R, MA1507, ST1232], [CS1020, MA1101R, MA1507, ST2334], [CS1020, MA1101R, MA1511, MA1512, EE2012], [CS1020, MA1101R, MA1511, MA1512, MA2216], [CS1020, MA1101R, MA1511, MA1512, ST1131], [CS1020, MA1101R, MA1511, MA1512, ST1232], [CS1020, MA1101R, MA1511, MA1512, ST2334], [CS1020, MA1101R, MA1521, EE2012], [CS1020, MA1101R, MA1521, MA2216], [CS1020, MA1101R, MA1521, ST1131], [CS1020, MA1101R, MA1521, ST1232], [CS1020, MA1101R, MA1521, ST2334], [CS1020, MA1311, MA1102R, EE2012], [CS1020, MA1311, MA1102R, MA2216], [CS1020, MA1311, MA1102R, ST1131], [CS1020, MA1311, MA1102R, ST1232], [CS1020, MA1311, MA1102R, ST2334], [CS1020, MA1311, MA1505, EE2012], [CS1020, MA1311, MA1505, MA2216], [CS1020, MA1311, MA1505, ST1131], [CS1020, MA1311, MA1505, ST1232], [CS1020, MA1311, MA1505, ST2334], [CS1020, MA1311, MA1507, EE2012], [CS1020, MA1311, MA1507, MA2216], [CS1020, MA1311, MA1507, ST1131], [CS1020, MA1311, MA1507, ST1232], [CS1020, MA1311, MA1507, ST2334], [CS1020, MA1311, MA1511, MA1512, EE2012], [CS1020, MA1311, MA1511, MA1512, MA2216], [CS1020, MA1311, MA1511, MA1512, ST1131], [CS1020, MA1311, MA1511, MA1512, ST1232], [CS1020, MA1311, MA1511, MA1512, ST2334], [CS1020, MA1311, MA1521, EE2012], [CS1020, MA1311, MA1521, MA2216], [CS1020, MA1311, MA1521, ST1131], [CS1020, MA1311, MA1521, ST1232], [CS1020, MA1311, MA1521, ST2334], [CS1020, MA1508, MA1102R, EE2012], [CS1020, MA1508, MA1102R, MA2216], [CS1020, MA1508, MA1102R, ST1131], [CS1020, MA1508, MA1102R, ST1232], [CS1020, MA1508, MA1102R, ST2334], [CS1020, MA1508, MA1505, EE2012], [CS1020, MA1508, MA1505, MA2216], [CS1020, MA1508, MA1505, ST1131], [CS1020, MA1508, MA1505, ST1232], [CS1020, MA1508, MA1505, ST2334], [CS1020, MA1508, MA1507, EE2012], [CS1020, MA1508, MA1507, MA2216], [CS1020, MA1508, MA1507, ST1131], [CS1020, MA1508, MA1507, ST1232], [CS1020, MA1508, MA1507, ST2334], [CS1020, MA1508, MA1511, MA1512, EE2012], [CS1020, MA1508, MA1511, MA1512, MA2216], [CS1020, MA1508, MA1511, MA1512, ST1131], [CS1020, MA1508, MA1511, MA1512, ST1232], [CS1020, MA1508, MA1511, MA1512, ST2334], [CS1020, MA1508, MA1521, EE2012], [CS1020, MA1508, MA1521, MA2216], [CS1020, MA1508, MA1521, ST1131], [CS1020, MA1508, MA1521, ST1232], [CS1020, MA1508, MA1521, ST2334], [CS1020, MA1513, MA1102R, EE2012], [CS1020, MA1513, MA1102R, MA2216], [CS1020, MA1513, MA1102R, ST1131], [CS1020, MA1513, MA1102R, ST1232], [CS1020, MA1513, MA1102R, ST2334], [CS1020, MA1513, MA1505, EE2012], [CS1020, MA1513, MA1505, MA2216], [CS1020, MA1513, MA1505, ST1131], [CS1020, MA1513, MA1505, ST1232], [CS1020, MA1513, MA1505, ST2334], [CS1020, MA1513, MA1507, EE2012], [CS1020, MA1513, MA1507, MA2216], [CS1020, MA1513, MA1507, ST1131], [CS1020, MA1513, MA1507, ST1232], [CS1020, MA1513, MA1507, ST2334], [CS1020, MA1513, MA1511, MA1512, EE2012], [CS1020, MA1513, MA1511, MA1512, MA2216], [CS1020, MA1513, MA1511, MA1512, ST1131], [CS1020, MA1513, MA1511, MA1512, ST1232], [CS1020, MA1513, MA1511, MA1512, ST2334], [CS1020, MA1513, MA1521, EE2012], [CS1020, MA1513, MA1521, MA2216], [CS1020, MA1513, MA1521, ST1131], [CS1020, MA1513, MA1521, ST1232], [CS1020, MA1513, MA1521, ST2334], [CS2020, MA1101R, MA1102R, EE2012], [CS2020, MA1101R, MA1102R, MA2216], [CS2020, MA1101R, MA1102R, ST1131], [CS2020, MA1101R, MA1102R, ST1232], [CS2020, MA1101R, MA1102R, ST2334], [CS2020, MA1101R, MA1505, EE2012], [CS2020, MA1101R, MA1505, MA2216], [CS2020, MA1101R, MA1505, ST1131], [CS2020, MA1101R, MA1505, ST1232], [CS2020, MA1101R, MA1505, ST2334], [CS2020, MA1101R, MA1507, EE2012], [CS2020, MA1101R, MA1507, MA2216], [CS2020, MA1101R, MA1507, ST1131], [CS2020, MA1101R, MA1507, ST1232], [CS2020, MA1101R, MA1507, ST2334], [CS2020, MA1101R, MA1511, MA1512, EE2012], [CS2020, MA1101R, MA1511, MA1512, MA2216], [CS2020, MA1101R, MA1511, MA1512, ST1131], [CS2020, MA1101R, MA1511, MA1512, ST1232], [CS2020, MA1101R, MA1511, MA1512, ST2334], [CS2020, MA1101R, MA1521, EE2012], [CS2020, MA1101R, MA1521, MA2216], [CS2020, MA1101R, MA1521, ST1131], [CS2020, MA1101R, MA1521, ST1232], [CS2020, MA1101R, MA1521, ST2334], [CS2020, MA1311, MA1102R, EE2012], [CS2020, MA1311, MA1102R, MA2216], [CS2020, MA1311, MA1102R, ST1131], [CS2020, MA1311, MA1102R, ST1232], [CS2020, MA1311, MA1102R, ST2334], [CS2020, MA1311, MA1505, EE2012], [CS2020, MA1311, MA1505, MA2216], [CS2020, MA1311, MA1505, ST1131], [CS2020, MA1311, MA1505, ST1232], [CS2020, MA1311, MA1505, ST2334], [CS2020, MA1311, MA1507, EE2012], [CS2020, MA1311, MA1507, MA2216], [CS2020, MA1311, MA1507, ST1131], [CS2020, MA1311, MA1507, ST1232], [CS2020, MA1311, MA1507, ST2334], [CS2020, MA1311, MA1511, MA1512, EE2012], [CS2020, MA1311, MA1511, MA1512, MA2216], [CS2020, MA1311, MA1511, MA1512, ST1131], [CS2020, MA1311, MA1511, MA1512, ST1232], [CS2020, MA1311, MA1511, MA1512, ST2334], [CS2020, MA1311, MA1521, EE2012], [CS2020, MA1311, MA1521, MA2216], [CS2020, MA1311, MA1521, ST1131], [CS2020, MA1311, MA1521, ST1232], [CS2020, MA1311, MA1521, ST2334], [CS2020, MA1508, MA1102R, EE2012], [CS2020, MA1508, MA1102R, MA2216], [CS2020, MA1508, MA1102R, ST1131], [CS2020, MA1508, MA1102R, ST1232], [CS2020, MA1508, MA1102R, ST2334], [CS2020, MA1508, MA1505, EE2012], [CS2020, MA1508, MA1505, MA2216], [CS2020, MA1508, MA1505, ST1131], [CS2020, MA1508, MA1505, ST1232], [CS2020, MA1508, MA1505, ST2334], [CS2020, MA1508, MA1507, EE2012], [CS2020, MA1508, MA1507, MA2216], [CS2020, MA1508, MA1507, ST1131], [CS2020, MA1508, MA1507, ST1232], [CS2020, MA1508, MA1507, ST2334], [CS2020, MA1508, MA1511, MA1512, EE2012], [CS2020, MA1508, MA1511, MA1512, MA2216], [CS2020, MA1508, MA1511, MA1512, ST1131], [CS2020, MA1508, MA1511, MA1512, ST1232], [CS2020, MA1508, MA1511, MA1512, ST2334], [CS2020, MA1508, MA1521, EE2012], [CS2020, MA1508, MA1521, MA2216], [CS2020, MA1508, MA1521, ST1131], [CS2020, MA1508, MA1521, ST1232], [CS2020, MA1508, MA1521, ST2334], [CS2020, MA1513, MA1102R, EE2012], [CS2020, MA1513, MA1102R, MA2216], [CS2020, MA1513, MA1102R, ST1131], [CS2020, MA1513, MA1102R, ST1232], [CS2020, MA1513, MA1102R, ST2334], [CS2020, MA1513, MA1505, EE2012], [CS2020, MA1513, MA1505, MA2216], [CS2020, MA1513, MA1505, ST1131], [CS2020, MA1513, MA1505, ST1232], [CS2020, MA1513, MA1505, ST2334], [CS2020, MA1513, MA1507, EE2012], [CS2020, MA1513, MA1507, MA2216], [CS2020, MA1513, MA1507, ST1131], [CS2020, MA1513, MA1507, ST1232], [CS2020, MA1513, MA1507, ST2334], [CS2020, MA1513, MA1511, MA1512, EE2012], [CS2020, MA1513, MA1511, MA1512, MA2216], [CS2020, MA1513, MA1511, MA1512, ST1131], [CS2020, MA1513, MA1511, MA1512, ST1232], [CS2020, MA1513, MA1511, MA1512, ST2334], [CS2020, MA1513, MA1521, EE2012], [CS2020, MA1513, MA1521, MA2216], [CS2020, MA1513, MA1521, ST1131], [CS2020, MA1513, MA1521, ST1232], [CS2020, MA1513, MA1521, ST2334], [CS2040, MA1101R, MA1102R, EE2012], [CS2040, MA1101R, MA1102R, MA2216], [CS2040, MA1101R, MA1102R, ST1131], [CS2040, MA1101R, MA1102R, ST1232], [CS2040, MA1101R, MA1102R, ST2334], [CS2040, MA1101R, MA1505, EE2012], [CS2040, MA1101R, MA1505, MA2216], [CS2040, MA1101R, MA1505, ST1131], [CS2040, MA1101R, MA1505, ST1232], [CS2040, MA1101R, MA1505, ST2334], [CS2040, MA1101R, MA1507, EE2012], [CS2040, MA1101R, MA1507, MA2216], [CS2040, MA1101R, MA1507, ST1131], [CS2040, MA1101R, MA1507, ST1232], [CS2040, MA1101R, MA1507, ST2334], [CS2040, MA1101R, MA1511, MA1512, EE2012], [CS2040, MA1101R, MA1511, MA1512, MA2216], [CS2040, MA1101R, MA1511, MA1512, ST1131], [CS2040, MA1101R, MA1511, MA1512, ST1232], [CS2040, MA1101R, MA1511, MA1512, ST2334], [CS2040, MA1101R, MA1521, EE2012], [CS2040, MA1101R, MA1521, MA2216], [CS2040, MA1101R, MA1521, ST1131], [CS2040, MA1101R, MA1521, ST1232], [CS2040, MA1101R, MA1521, ST2334], [CS2040, MA1311, MA1102R, EE2012], [CS2040, MA1311, MA1102R, MA2216], [CS2040, MA1311, MA1102R, ST1131], [CS2040, MA1311, MA1102R, ST1232], [CS2040, MA1311, MA1102R, ST2334], [CS2040, MA1311, MA1505, EE2012], [CS2040, MA1311, MA1505, MA2216], [CS2040, MA1311, MA1505, ST1131], [CS2040, MA1311, MA1505, ST1232], [CS2040, MA1311, MA1505, ST2334], [CS2040, MA1311, MA1507, EE2012], [CS2040, MA1311, MA1507, MA2216], [CS2040, MA1311, MA1507, ST1131], [CS2040, MA1311, MA1507, ST1232], [CS2040, MA1311, MA1507, ST2334], [CS2040, MA1311, MA1511, MA1512, EE2012], [CS2040, MA1311, MA1511, MA1512, MA2216], [CS2040, MA1311, MA1511, MA1512, ST1131], [CS2040, MA1311, MA1511, MA1512, ST1232], [CS2040, MA1311, MA1511, MA1512, ST2334], [CS2040, MA1311, MA1521, EE2012], [CS2040, MA1311, MA1521, MA2216], [CS2040, MA1311, MA1521, ST1131], [CS2040, MA1311, MA1521, ST1232], [CS2040, MA1311, MA1521, ST2334], [CS2040, MA1508, MA1102R, EE2012], [CS2040, MA1508, MA1102R, MA2216], [CS2040, MA1508, MA1102R, ST1131], [CS2040, MA1508, MA1102R, ST1232], [CS2040, MA1508, MA1102R, ST2334], [CS2040, MA1508, MA1505, EE2012], [CS2040, MA1508, MA1505, MA2216], [CS2040, MA1508, MA1505, ST1131], [CS2040, MA1508, MA1505, ST1232], [CS2040, MA1508, MA1505, ST2334], [CS2040, MA1508, MA1507, EE2012], [CS2040, MA1508, MA1507, MA2216], [CS2040, MA1508, MA1507, ST1131], [CS2040, MA1508, MA1507, ST1232], [CS2040, MA1508, MA1507, ST2334], [CS2040, MA1508, MA1511, MA1512, EE2012], [CS2040, MA1508, MA1511, MA1512, MA2216], [CS2040, MA1508, MA1511, MA1512, ST1131], [CS2040, MA1508, MA1511, MA1512, ST1232], [CS2040, MA1508, MA1511, MA1512, ST2334], [CS2040, MA1508, MA1521, EE2012], [CS2040, MA1508, MA1521, MA2216], [CS2040, MA1508, MA1521, ST1131], [CS2040, MA1508, MA1521, ST1232], [CS2040, MA1508, MA1521, ST2334], [CS2040, MA1513, MA1102R, EE2012], [CS2040, MA1513, MA1102R, MA2216], [CS2040, MA1513, MA1102R, ST1131], [CS2040, MA1513, MA1102R, ST1232], [CS2040, MA1513, MA1102R, ST2334], [CS2040, MA1513, MA1505, EE2012], [CS2040, MA1513, MA1505, MA2216], [CS2040, MA1513, MA1505, ST1131], [CS2040, MA1513, MA1505, ST1232], [CS2040, MA1513, MA1505, ST2334], [CS2040, MA1513, MA1507, EE2012], [CS2040, MA1513, MA1507, MA2216], [CS2040, MA1513, MA1507, ST1131], [CS2040, MA1513, MA1507, ST1232], [CS2040, MA1513, MA1507, ST2334], [CS2040, MA1513, MA1511, MA1512, EE2012], [CS2040, MA1513, MA1511, MA1512, MA2216], [CS2040, MA1513, MA1511, MA1512, ST1131], [CS2040, MA1513, MA1511, MA1512, ST1232], [CS2040, MA1513, MA1511, MA1512, ST2334], [CS2040, MA1513, MA1521, EE2012], [CS2040, MA1513, MA1521, MA2216], [CS2040, MA1513, MA1521, ST1131], [CS2040, MA1513, MA1521, ST1232], [CS2040, MA1513, MA1521, ST2334], [CS2040S, MA1101R, MA1102R, EE2012], [CS2040S, MA1101R, MA1102R, MA2216], [CS2040S, MA1101R, MA1102R, ST1131], [CS2040S, MA1101R, MA1102R, ST1232], [CS2040S, MA1101R, MA1102R, ST2334], [CS2040S, MA1101R, MA1505, EE2012], [CS2040S, MA1101R, MA1505, MA2216], [CS2040S, MA1101R, MA1505, ST1131], [CS2040S, MA1101R, MA1505, ST1232], [CS2040S, MA1101R, MA1505, ST2334], [CS2040S, MA1101R, MA1507, EE2012], [CS2040S, MA1101R, MA1507, MA2216], [CS2040S, MA1101R, MA1507, ST1131], [CS2040S, MA1101R, MA1507, ST1232], [CS2040S, MA1101R, MA1507, ST2334], [CS2040S, MA1101R, MA1511, MA1512, EE2012], [CS2040S, MA1101R, MA1511, MA1512, MA2216], [CS2040S, MA1101R, MA1511, MA1512, ST1131], [CS2040S, MA1101R, MA1511, MA1512, ST1232], [CS2040S, MA1101R, MA1511, MA1512, ST2334], [CS2040S, MA1101R, MA1521, EE2012], [CS2040S, MA1101R, MA1521, MA2216], [CS2040S, MA1101R, MA1521, ST1131], [CS2040S, MA1101R, MA1521, ST1232], [CS2040S, MA1101R, MA1521, ST2334], [CS2040S, MA1311, MA1102R, EE2012], [CS2040S, MA1311, MA1102R, MA2216], [CS2040S, MA1311, MA1102R, ST1131], [CS2040S, MA1311, MA1102R, ST1232], [CS2040S, MA1311, MA1102R, ST2334], [CS2040S, MA1311, MA1505, EE2012], [CS2040S, MA1311, MA1505, MA2216], [CS2040S, MA1311, MA1505, ST1131], [CS2040S, MA1311, MA1505, ST1232], [CS2040S, MA1311, MA1505, ST2334], [CS2040S, MA1311, MA1507, EE2012], [CS2040S, MA1311, MA1507, MA2216], [CS2040S, MA1311, MA1507, ST1131], [CS2040S, MA1311, MA1507, ST1232], [CS2040S, MA1311, MA1507, ST2334], [CS2040S, MA1311, MA1511, MA1512, EE2012], [CS2040S, MA1311, MA1511, MA1512, MA2216], [CS2040S, MA1311, MA1511, MA1512, ST1131], [CS2040S, MA1311, MA1511, MA1512, ST1232], [CS2040S, MA1311, MA1511, MA1512, ST2334], [CS2040S, MA1311, MA1521, EE2012], [CS2040S, MA1311, MA1521, MA2216], [CS2040S, MA1311, MA1521, ST1131], [CS2040S, MA1311, MA1521, ST1232], [CS2040S, MA1311, MA1521, ST2334], [CS2040S, MA1508, MA1102R, EE2012], [CS2040S, MA1508, MA1102R, MA2216], [CS2040S, MA1508, MA1102R, ST1131], [CS2040S, MA1508, MA1102R, ST1232], [CS2040S, MA1508, MA1102R, ST2334], [CS2040S, MA1508, MA1505, EE2012], [CS2040S, MA1508, MA1505, MA2216], [CS2040S, MA1508, MA1505, ST1131], [CS2040S, MA1508, MA1505, ST1232], [CS2040S, MA1508, MA1505, ST2334], [CS2040S, MA1508, MA1507, EE2012], [CS2040S, MA1508, MA1507, MA2216], [CS2040S, MA1508, MA1507, ST1131], [CS2040S, MA1508, MA1507, ST1232], [CS2040S, MA1508, MA1507, ST2334], [CS2040S, MA1508, MA1511, MA1512, EE2012], [CS2040S, MA1508, MA1511, MA1512, MA2216], [CS2040S, MA1508, MA1511, MA1512, ST1131], [CS2040S, MA1508, MA1511, MA1512, ST1232], [CS2040S, MA1508, MA1511, MA1512, ST2334], [CS2040S, MA1508, MA1521, EE2012], [CS2040S, MA1508, MA1521, MA2216], [CS2040S, MA1508, MA1521, ST1131], [CS2040S, MA1508, MA1521, ST1232], [CS2040S, MA1508, MA1521, ST2334], [CS2040S, MA1513, MA1102R, EE2012], [CS2040S, MA1513, MA1102R, MA2216], [CS2040S, MA1513, MA1102R, ST1131], [CS2040S, MA1513, MA1102R, ST1232], [CS2040S, MA1513, MA1102R, ST2334], [CS2040S, MA1513, MA1505, EE2012], [CS2040S, MA1513, MA1505, MA2216], [CS2040S, MA1513, MA1505, ST1131], [CS2040S, MA1513, MA1505, ST1232], [CS2040S, MA1513, MA1505, ST2334], [CS2040S, MA1513, MA1507, EE2012], [CS2040S, MA1513, MA1507, MA2216], [CS2040S, MA1513, MA1507, ST1131], [CS2040S, MA1513, MA1507, ST1232], [CS2040S, MA1513, MA1507, ST2334], [CS2040S, MA1513, MA1511, MA1512, EE2012], [CS2040S, MA1513, MA1511, MA1512, MA2216], [CS2040S, MA1513, MA1511, MA1512, ST1131], [CS2040S, MA1513, MA1511, MA1512, ST1232], [CS2040S, MA1513, MA1511, MA1512, ST2334], [CS2040S, MA1513, MA1521, EE2012], [CS2040S, MA1513, MA1521, MA2216], [CS2040S, MA1513, MA1521, ST1131], [CS2040S, MA1513, MA1521, ST1232], [CS2040S, MA1513, MA1521, ST2334], [CS2040C, MA1101R, MA1102R, EE2012], [CS2040C, MA1101R, MA1102R, MA2216], [CS2040C, MA1101R, MA1102R, ST1131], [CS2040C, MA1101R, MA1102R, ST1232], [CS2040C, MA1101R, MA1102R, ST2334], [CS2040C, MA1101R, MA1505, EE2012], [CS2040C, MA1101R, MA1505, MA2216], [CS2040C, MA1101R, MA1505, ST1131], [CS2040C, MA1101R, MA1505, ST1232], [CS2040C, MA1101R, MA1505, ST2334], [CS2040C, MA1101R, MA1507, EE2012], [CS2040C, MA1101R, MA1507, MA2216], [CS2040C, MA1101R, MA1507, ST1131], [CS2040C, MA1101R, MA1507, ST1232], [CS2040C, MA1101R, MA1507, ST2334], [CS2040C, MA1101R, MA1511, MA1512, EE2012], [CS2040C, MA1101R, MA1511, MA1512, MA2216], [CS2040C, MA1101R, MA1511, MA1512, ST1131], [CS2040C, MA1101R, MA1511, MA1512, ST1232], [CS2040C, MA1101R, MA1511, MA1512, ST2334], [CS2040C, MA1101R, MA1521, EE2012], [CS2040C, MA1101R, MA1521, MA2216], [CS2040C, MA1101R, MA1521, ST1131], [CS2040C, MA1101R, MA1521, ST1232], [CS2040C, MA1101R, MA1521, ST2334], [CS2040C, MA1311, MA1102R, EE2012], [CS2040C, MA1311, MA1102R, MA2216], [CS2040C, MA1311, MA1102R, ST1131], [CS2040C, MA1311, MA1102R, ST1232], [CS2040C, MA1311, MA1102R, ST2334], [CS2040C, MA1311, MA1505, EE2012], [CS2040C, MA1311, MA1505, MA2216], [CS2040C, MA1311, MA1505, ST1131], [CS2040C, MA1311, MA1505, ST1232], [CS2040C, MA1311, MA1505, ST2334], [CS2040C, MA1311, MA1507, EE2012], [CS2040C, MA1311, MA1507, MA2216], [CS2040C, MA1311, MA1507, ST1131], [CS2040C, MA1311, MA1507, ST1232], [CS2040C, MA1311, MA1507, ST2334], [CS2040C, MA1311, MA1511, MA1512, EE2012], [CS2040C, MA1311, MA1511, MA1512, MA2216], [CS2040C, MA1311, MA1511, MA1512, ST1131], [CS2040C, MA1311, MA1511, MA1512, ST1232], [CS2040C, MA1311, MA1511, MA1512, ST2334], [CS2040C, MA1311, MA1521, EE2012], [CS2040C, MA1311, MA1521, MA2216], [CS2040C, MA1311, MA1521, ST1131], [CS2040C, MA1311, MA1521, ST1232], [CS2040C, MA1311, MA1521, ST2334], [CS2040C, MA1508, MA1102R, EE2012], [CS2040C, MA1508, MA1102R, MA2216], [CS2040C, MA1508, MA1102R, ST1131], [CS2040C, MA1508, MA1102R, ST1232], [CS2040C, MA1508, MA1102R, ST2334], [CS2040C, MA1508, MA1505, EE2012], [CS2040C, MA1508, MA1505, MA2216], [CS2040C, MA1508, MA1505, ST1131], [CS2040C, MA1508, MA1505, ST1232], [CS2040C, MA1508, MA1505, ST2334], [CS2040C, MA1508, MA1507, EE2012], [CS2040C, MA1508, MA1507, MA2216], [CS2040C, MA1508, MA1507, ST1131], [CS2040C, MA1508, MA1507, ST1232], [CS2040C, MA1508, MA1507, ST2334], [CS2040C, MA1508, MA1511, MA1512, EE2012], [CS2040C, MA1508, MA1511, MA1512, MA2216], [CS2040C, MA1508, MA1511, MA1512, ST1131], [CS2040C, MA1508, MA1511, MA1512, ST1232], [CS2040C, MA1508, MA1511, MA1512, ST2334], [CS2040C, MA1508, MA1521, EE2012], [CS2040C, MA1508, MA1521, MA2216], [CS2040C, MA1508, MA1521, ST1131], [CS2040C, MA1508, MA1521, ST1232], [CS2040C, MA1508, MA1521, ST2334], [CS2040C, MA1513, MA1102R, EE2012], [CS2040C, MA1513, MA1102R, MA2216], [CS2040C, MA1513, MA1102R, ST1131], [CS2040C, MA1513, MA1102R, ST1232], [CS2040C, MA1513, MA1102R, ST2334], [CS2040C, MA1513, MA1505, EE2012], [CS2040C, MA1513, MA1505, MA2216], [CS2040C, MA1513, MA1505, ST1131], [CS2040C, MA1513, MA1505, ST1232], [CS2040C, MA1513, MA1505, ST2334], [CS2040C, MA1513, MA1507, EE2012], [CS2040C, MA1513, MA1507, MA2216], [CS2040C, MA1513, MA1507, ST1131], [CS2040C, MA1513, MA1507, ST1232], [CS2040C, MA1513, MA1507, ST2334], [CS2040C, MA1513, MA1511, MA1512, EE2012], [CS2040C, MA1513, MA1511, MA1512, MA2216], [CS2040C, MA1513, MA1511, MA1512, ST1131], [CS2040C, MA1513, MA1511, MA1512, ST1232], [CS2040C, MA1513, MA1511, MA1512, ST2334], [CS2040C, MA1513, MA1521, EE2012], [CS2040C, MA1513, MA1521, MA2216], [CS2040C, MA1513, MA1521, ST1131], [CS2040C, MA1513, MA1521, ST1232], [CS2040C, MA1513, MA1521, ST2334]];
prerequisitesMap["CS5242"] = [[CS3244]];
prerequisitesMap["CS5246"] = [[CS2103, MA1101R, EE2012], [CS2103, MA1101R, MA2216], [CS2103, MA1101R, ST2334], [CS2103, MA1311, EE2012], [CS2103, MA1311, MA2216], [CS2103, MA1311, ST2334], [CS2103, MA1508, EE2012], [CS2103, MA1508, MA2216], [CS2103, MA1508, ST2334], [CS2103, MA1513, EE2012], [CS2103, MA1513, MA2216], [CS2103, MA1513, ST2334], [CS2103T, MA1101R, EE2012], [CS2103T, MA1101R, MA2216], [CS2103T, MA1101R, ST2334], [CS2103T, MA1311, EE2012], [CS2103T, MA1311, MA2216], [CS2103T, MA1311, ST2334], [CS2103T, MA1508, EE2012], [CS2103T, MA1508, MA2216], [CS2103T, MA1508, ST2334], [CS2103T, MA1513, EE2012], [CS2103T, MA1513, MA2216], [CS2103T, MA1513, ST2334]];
prerequisitesMap["CS5250"] = [[CS2106], [CG2271]];
prerequisitesMap["CS5260"] = [[CS5242]];
prerequisitesMap["CS5272"] = [[CG2271, CS2103], [CG2271, CS2103T], [CS2106, CS2103], [CS2106, CS2103T]];
prerequisitesMap["CS5321"] = [[CS3235]];
prerequisitesMap["CS5322"] = [[CS3223]];
prerequisitesMap["CS5330"] = [[CS3230]];
prerequisitesMap["CS5331"] = [[CS3235]];
prerequisitesMap["CS5332"] = [[CS2040, MA1101R, MA1102R, EE2012], [CS2040, MA1101R, MA1102R, ST2132], [CS2040, MA1101R, MA1102R, ST2334], [CS2040, MA1101R, MA1102R, MA2216, ST1131], [CS2040, MA1101R, MA1102R, MA2216, ST1232], [CS2040, MA1101R, MA1102R, MA2216, DSC2008], [CS2040, MA1101R, MA1505, EE2012], [CS2040, MA1101R, MA1505, ST2132], [CS2040, MA1101R, MA1505, ST2334], [CS2040, MA1101R, MA1505, MA2216, ST1131], [CS2040, MA1101R, MA1505, MA2216, ST1232], [CS2040, MA1101R, MA1505, MA2216, DSC2008], [CS2040, MA1101R, MA1507, EE2012], [CS2040, MA1101R, MA1507, ST2132], [CS2040, MA1101R, MA1507, ST2334], [CS2040, MA1101R, MA1507, MA2216, ST1131], [CS2040, MA1101R, MA1507, MA2216, ST1232], [CS2040, MA1101R, MA1507, MA2216, DSC2008], [CS2040, MA1101R, MA1511, MA1512, EE2012], [CS2040, MA1101R, MA1511, MA1512, ST2132], [CS2040, MA1101R, MA1511, MA1512, ST2334], [CS2040, MA1101R, MA1511, MA1512, MA2216, ST1131], [CS2040, MA1101R, MA1511, MA1512, MA2216, ST1232], [CS2040, MA1101R, MA1511, MA1512, MA2216, DSC2008], [CS2040, MA1101R, MA1521, EE2012], [CS2040, MA1101R, MA1521, ST2132], [CS2040, MA1101R, MA1521, ST2334], [CS2040, MA1101R, MA1521, MA2216, ST1131], [CS2040, MA1101R, MA1521, MA2216, ST1232], [CS2040, MA1101R, MA1521, MA2216, DSC2008], [CS2040, MA1311, MA1102R, EE2012], [CS2040, MA1311, MA1102R, ST2132], [CS2040, MA1311, MA1102R, ST2334], [CS2040, MA1311, MA1102R, MA2216, ST1131], [CS2040, MA1311, MA1102R, MA2216, ST1232], [CS2040, MA1311, MA1102R, MA2216, DSC2008], [CS2040, MA1311, MA1505, EE2012], [CS2040, MA1311, MA1505, ST2132], [CS2040, MA1311, MA1505, ST2334], [CS2040, MA1311, MA1505, MA2216, ST1131], [CS2040, MA1311, MA1505, MA2216, ST1232], [CS2040, MA1311, MA1505, MA2216, DSC2008], [CS2040, MA1311, MA1507, EE2012], [CS2040, MA1311, MA1507, ST2132], [CS2040, MA1311, MA1507, ST2334], [CS2040, MA1311, MA1507, MA2216, ST1131], [CS2040, MA1311, MA1507, MA2216, ST1232], [CS2040, MA1311, MA1507, MA2216, DSC2008], [CS2040, MA1311, MA1511, MA1512, EE2012], [CS2040, MA1311, MA1511, MA1512, ST2132], [CS2040, MA1311, MA1511, MA1512, ST2334], [CS2040, MA1311, MA1511, MA1512, MA2216, ST1131], [CS2040, MA1311, MA1511, MA1512, MA2216, ST1232], [CS2040, MA1311, MA1511, MA1512, MA2216, DSC2008], [CS2040, MA1311, MA1521, EE2012], [CS2040, MA1311, MA1521, ST2132], [CS2040, MA1311, MA1521, ST2334], [CS2040, MA1311, MA1521, MA2216, ST1131], [CS2040, MA1311, MA1521, MA2216, ST1232], [CS2040, MA1311, MA1521, MA2216, DSC2008], [CS2040, MA1508, MA1102R, EE2012], [CS2040, MA1508, MA1102R, ST2132], [CS2040, MA1508, MA1102R, ST2334], [CS2040, MA1508, MA1102R, MA2216, ST1131], [CS2040, MA1508, MA1102R, MA2216, ST1232], [CS2040, MA1508, MA1102R, MA2216, DSC2008], [CS2040, MA1508, MA1505, EE2012], [CS2040, MA1508, MA1505, ST2132], [CS2040, MA1508, MA1505, ST2334], [CS2040, MA1508, MA1505, MA2216, ST1131], [CS2040, MA1508, MA1505, MA2216, ST1232], [CS2040, MA1508, MA1505, MA2216, DSC2008], [CS2040, MA1508, MA1507, EE2012], [CS2040, MA1508, MA1507, ST2132], [CS2040, MA1508, MA1507, ST2334], [CS2040, MA1508, MA1507, MA2216, ST1131], [CS2040, MA1508, MA1507, MA2216, ST1232], [CS2040, MA1508, MA1507, MA2216, DSC2008], [CS2040, MA1508, MA1511, MA1512, EE2012], [CS2040, MA1508, MA1511, MA1512, ST2132], [CS2040, MA1508, MA1511, MA1512, ST2334], [CS2040, MA1508, MA1511, MA1512, MA2216, ST1131], [CS2040, MA1508, MA1511, MA1512, MA2216, ST1232], [CS2040, MA1508, MA1511, MA1512, MA2216, DSC2008], [CS2040, MA1508, MA1521, EE2012], [CS2040, MA1508, MA1521, ST2132], [CS2040, MA1508, MA1521, ST2334], [CS2040, MA1508, MA1521, MA2216, ST1131], [CS2040, MA1508, MA1521, MA2216, ST1232], [CS2040, MA1508, MA1521, MA2216, DSC2008], [CS2040, MA1513, MA1102R, EE2012], [CS2040, MA1513, MA1102R, ST2132], [CS2040, MA1513, MA1102R, ST2334], [CS2040, MA1513, MA1102R, MA2216, ST1131], [CS2040, MA1513, MA1102R, MA2216, ST1232], [CS2040, MA1513, MA1102R, MA2216, DSC2008], [CS2040, MA1513, MA1505, EE2012], [CS2040, MA1513, MA1505, ST2132], [CS2040, MA1513, MA1505, ST2334], [CS2040, MA1513, MA1505, MA2216, ST1131], [CS2040, MA1513, MA1505, MA2216, ST1232], [CS2040, MA1513, MA1505, MA2216, DSC2008], [CS2040, MA1513, MA1507, EE2012], [CS2040, MA1513, MA1507, ST2132], [CS2040, MA1513, MA1507, ST2334], [CS2040, MA1513, MA1507, MA2216, ST1131], [CS2040, MA1513, MA1507, MA2216, ST1232], [CS2040, MA1513, MA1507, MA2216, DSC2008], [CS2040, MA1513, MA1511, MA1512, EE2012], [CS2040, MA1513, MA1511, MA1512, ST2132], [CS2040, MA1513, MA1511, MA1512, ST2334], [CS2040, MA1513, MA1511, MA1512, MA2216, ST1131], [CS2040, MA1513, MA1511, MA1512, MA2216, ST1232], [CS2040, MA1513, MA1511, MA1512, MA2216, DSC2008], [CS2040, MA1513, MA1521, EE2012], [CS2040, MA1513, MA1521, ST2132], [CS2040, MA1513, MA1521, ST2334], [CS2040, MA1513, MA1521, MA2216, ST1131], [CS2040, MA1513, MA1521, MA2216, ST1232], [CS2040, MA1513, MA1521, MA2216, DSC2008], [CS2040S, MA1101R, MA1102R, EE2012], [CS2040S, MA1101R, MA1102R, ST2132], [CS2040S, MA1101R, MA1102R, ST2334], [CS2040S, MA1101R, MA1102R, MA2216, ST1131], [CS2040S, MA1101R, MA1102R, MA2216, ST1232], [CS2040S, MA1101R, MA1102R, MA2216, DSC2008], [CS2040S, MA1101R, MA1505, EE2012], [CS2040S, MA1101R, MA1505, ST2132], [CS2040S, MA1101R, MA1505, ST2334], [CS2040S, MA1101R, MA1505, MA2216, ST1131], [CS2040S, MA1101R, MA1505, MA2216, ST1232], [CS2040S, MA1101R, MA1505, MA2216, DSC2008], [CS2040S, MA1101R, MA1507, EE2012], [CS2040S, MA1101R, MA1507, ST2132], [CS2040S, MA1101R, MA1507, ST2334], [CS2040S, MA1101R, MA1507, MA2216, ST1131], [CS2040S, MA1101R, MA1507, MA2216, ST1232], [CS2040S, MA1101R, MA1507, MA2216, DSC2008], [CS2040S, MA1101R, MA1511, MA1512, EE2012], [CS2040S, MA1101R, MA1511, MA1512, ST2132], [CS2040S, MA1101R, MA1511, MA1512, ST2334], [CS2040S, MA1101R, MA1511, MA1512, MA2216, ST1131], [CS2040S, MA1101R, MA1511, MA1512, MA2216, ST1232], [CS2040S, MA1101R, MA1511, MA1512, MA2216, DSC2008], [CS2040S, MA1101R, MA1521, EE2012], [CS2040S, MA1101R, MA1521, ST2132], [CS2040S, MA1101R, MA1521, ST2334], [CS2040S, MA1101R, MA1521, MA2216, ST1131], [CS2040S, MA1101R, MA1521, MA2216, ST1232], [CS2040S, MA1101R, MA1521, MA2216, DSC2008], [CS2040S, MA1311, MA1102R, EE2012], [CS2040S, MA1311, MA1102R, ST2132], [CS2040S, MA1311, MA1102R, ST2334], [CS2040S, MA1311, MA1102R, MA2216, ST1131], [CS2040S, MA1311, MA1102R, MA2216, ST1232], [CS2040S, MA1311, MA1102R, MA2216, DSC2008], [CS2040S, MA1311, MA1505, EE2012], [CS2040S, MA1311, MA1505, ST2132], [CS2040S, MA1311, MA1505, ST2334], [CS2040S, MA1311, MA1505, MA2216, ST1131], [CS2040S, MA1311, MA1505, MA2216, ST1232], [CS2040S, MA1311, MA1505, MA2216, DSC2008], [CS2040S, MA1311, MA1507, EE2012], [CS2040S, MA1311, MA1507, ST2132], [CS2040S, MA1311, MA1507, ST2334], [CS2040S, MA1311, MA1507, MA2216, ST1131], [CS2040S, MA1311, MA1507, MA2216, ST1232], [CS2040S, MA1311, MA1507, MA2216, DSC2008], [CS2040S, MA1311, MA1511, MA1512, EE2012], [CS2040S, MA1311, MA1511, MA1512, ST2132], [CS2040S, MA1311, MA1511, MA1512, ST2334], [CS2040S, MA1311, MA1511, MA1512, MA2216, ST1131], [CS2040S, MA1311, MA1511, MA1512, MA2216, ST1232], [CS2040S, MA1311, MA1511, MA1512, MA2216, DSC2008], [CS2040S, MA1311, MA1521, EE2012], [CS2040S, MA1311, MA1521, ST2132], [CS2040S, MA1311, MA1521, ST2334], [CS2040S, MA1311, MA1521, MA2216, ST1131], [CS2040S, MA1311, MA1521, MA2216, ST1232], [CS2040S, MA1311, MA1521, MA2216, DSC2008], [CS2040S, MA1508, MA1102R, EE2012], [CS2040S, MA1508, MA1102R, ST2132], [CS2040S, MA1508, MA1102R, ST2334], [CS2040S, MA1508, MA1102R, MA2216, ST1131], [CS2040S, MA1508, MA1102R, MA2216, ST1232], [CS2040S, MA1508, MA1102R, MA2216, DSC2008], [CS2040S, MA1508, MA1505, EE2012], [CS2040S, MA1508, MA1505, ST2132], [CS2040S, MA1508, MA1505, ST2334], [CS2040S, MA1508, MA1505, MA2216, ST1131], [CS2040S, MA1508, MA1505, MA2216, ST1232], [CS2040S, MA1508, MA1505, MA2216, DSC2008], [CS2040S, MA1508, MA1507, EE2012], [CS2040S, MA1508, MA1507, ST2132], [CS2040S, MA1508, MA1507, ST2334], [CS2040S, MA1508, MA1507, MA2216, ST1131], [CS2040S, MA1508, MA1507, MA2216, ST1232], [CS2040S, MA1508, MA1507, MA2216, DSC2008], [CS2040S, MA1508, MA1511, MA1512, EE2012], [CS2040S, MA1508, MA1511, MA1512, ST2132], [CS2040S, MA1508, MA1511, MA1512, ST2334], [CS2040S, MA1508, MA1511, MA1512, MA2216, ST1131], [CS2040S, MA1508, MA1511, MA1512, MA2216, ST1232], [CS2040S, MA1508, MA1511, MA1512, MA2216, DSC2008], [CS2040S, MA1508, MA1521, EE2012], [CS2040S, MA1508, MA1521, ST2132], [CS2040S, MA1508, MA1521, ST2334], [CS2040S, MA1508, MA1521, MA2216, ST1131], [CS2040S, MA1508, MA1521, MA2216, ST1232], [CS2040S, MA1508, MA1521, MA2216, DSC2008], [CS2040S, MA1513, MA1102R, EE2012], [CS2040S, MA1513, MA1102R, ST2132], [CS2040S, MA1513, MA1102R, ST2334], [CS2040S, MA1513, MA1102R, MA2216, ST1131], [CS2040S, MA1513, MA1102R, MA2216, ST1232], [CS2040S, MA1513, MA1102R, MA2216, DSC2008], [CS2040S, MA1513, MA1505, EE2012], [CS2040S, MA1513, MA1505, ST2132], [CS2040S, MA1513, MA1505, ST2334], [CS2040S, MA1513, MA1505, MA2216, ST1131], [CS2040S, MA1513, MA1505, MA2216, ST1232], [CS2040S, MA1513, MA1505, MA2216, DSC2008], [CS2040S, MA1513, MA1507, EE2012], [CS2040S, MA1513, MA1507, ST2132], [CS2040S, MA1513, MA1507, ST2334], [CS2040S, MA1513, MA1507, MA2216, ST1131], [CS2040S, MA1513, MA1507, MA2216, ST1232], [CS2040S, MA1513, MA1507, MA2216, DSC2008], [CS2040S, MA1513, MA1511, MA1512, EE2012], [CS2040S, MA1513, MA1511, MA1512, ST2132], [CS2040S, MA1513, MA1511, MA1512, ST2334], [CS2040S, MA1513, MA1511, MA1512, MA2216, ST1131], [CS2040S, MA1513, MA1511, MA1512, MA2216, ST1232], [CS2040S, MA1513, MA1511, MA1512, MA2216, DSC2008], [CS2040S, MA1513, MA1521, EE2012], [CS2040S, MA1513, MA1521, ST2132], [CS2040S, MA1513, MA1521, ST2334], [CS2040S, MA1513, MA1521, MA2216, ST1131], [CS2040S, MA1513, MA1521, MA2216, ST1232], [CS2040S, MA1513, MA1521, MA2216, DSC2008], [CS2040C, MA1101R, MA1102R, EE2012], [CS2040C, MA1101R, MA1102R, ST2132], [CS2040C, MA1101R, MA1102R, ST2334], [CS2040C, MA1101R, MA1102R, MA2216, ST1131], [CS2040C, MA1101R, MA1102R, MA2216, ST1232], [CS2040C, MA1101R, MA1102R, MA2216, DSC2008], [CS2040C, MA1101R, MA1505, EE2012], [CS2040C, MA1101R, MA1505, ST2132], [CS2040C, MA1101R, MA1505, ST2334], [CS2040C, MA1101R, MA1505, MA2216, ST1131], [CS2040C, MA1101R, MA1505, MA2216, ST1232], [CS2040C, MA1101R, MA1505, MA2216, DSC2008], [CS2040C, MA1101R, MA1507, EE2012], [CS2040C, MA1101R, MA1507, ST2132], [CS2040C, MA1101R, MA1507, ST2334], [CS2040C, MA1101R, MA1507, MA2216, ST1131], [CS2040C, MA1101R, MA1507, MA2216, ST1232], [CS2040C, MA1101R, MA1507, MA2216, DSC2008], [CS2040C, MA1101R, MA1511, MA1512, EE2012], [CS2040C, MA1101R, MA1511, MA1512, ST2132], [CS2040C, MA1101R, MA1511, MA1512, ST2334], [CS2040C, MA1101R, MA1511, MA1512, MA2216, ST1131], [CS2040C, MA1101R, MA1511, MA1512, MA2216, ST1232], [CS2040C, MA1101R, MA1511, MA1512, MA2216, DSC2008], [CS2040C, MA1101R, MA1521, EE2012], [CS2040C, MA1101R, MA1521, ST2132], [CS2040C, MA1101R, MA1521, ST2334], [CS2040C, MA1101R, MA1521, MA2216, ST1131], [CS2040C, MA1101R, MA1521, MA2216, ST1232], [CS2040C, MA1101R, MA1521, MA2216, DSC2008], [CS2040C, MA1311, MA1102R, EE2012], [CS2040C, MA1311, MA1102R, ST2132], [CS2040C, MA1311, MA1102R, ST2334], [CS2040C, MA1311, MA1102R, MA2216, ST1131], [CS2040C, MA1311, MA1102R, MA2216, ST1232], [CS2040C, MA1311, MA1102R, MA2216, DSC2008], [CS2040C, MA1311, MA1505, EE2012], [CS2040C, MA1311, MA1505, ST2132], [CS2040C, MA1311, MA1505, ST2334], [CS2040C, MA1311, MA1505, MA2216, ST1131], [CS2040C, MA1311, MA1505, MA2216, ST1232], [CS2040C, MA1311, MA1505, MA2216, DSC2008], [CS2040C, MA1311, MA1507, EE2012], [CS2040C, MA1311, MA1507, ST2132], [CS2040C, MA1311, MA1507, ST2334], [CS2040C, MA1311, MA1507, MA2216, ST1131], [CS2040C, MA1311, MA1507, MA2216, ST1232], [CS2040C, MA1311, MA1507, MA2216, DSC2008], [CS2040C, MA1311, MA1511, MA1512, EE2012], [CS2040C, MA1311, MA1511, MA1512, ST2132], [CS2040C, MA1311, MA1511, MA1512, ST2334], [CS2040C, MA1311, MA1511, MA1512, MA2216, ST1131], [CS2040C, MA1311, MA1511, MA1512, MA2216, ST1232], [CS2040C, MA1311, MA1511, MA1512, MA2216, DSC2008], [CS2040C, MA1311, MA1521, EE2012], [CS2040C, MA1311, MA1521, ST2132], [CS2040C, MA1311, MA1521, ST2334], [CS2040C, MA1311, MA1521, MA2216, ST1131], [CS2040C, MA1311, MA1521, MA2216, ST1232], [CS2040C, MA1311, MA1521, MA2216, DSC2008], [CS2040C, MA1508, MA1102R, EE2012], [CS2040C, MA1508, MA1102R, ST2132], [CS2040C, MA1508, MA1102R, ST2334], [CS2040C, MA1508, MA1102R, MA2216, ST1131], [CS2040C, MA1508, MA1102R, MA2216, ST1232], [CS2040C, MA1508, MA1102R, MA2216, DSC2008], [CS2040C, MA1508, MA1505, EE2012], [CS2040C, MA1508, MA1505, ST2132], [CS2040C, MA1508, MA1505, ST2334], [CS2040C, MA1508, MA1505, MA2216, ST1131], [CS2040C, MA1508, MA1505, MA2216, ST1232], [CS2040C, MA1508, MA1505, MA2216, DSC2008], [CS2040C, MA1508, MA1507, EE2012], [CS2040C, MA1508, MA1507, ST2132], [CS2040C, MA1508, MA1507, ST2334], [CS2040C, MA1508, MA1507, MA2216, ST1131], [CS2040C, MA1508, MA1507, MA2216, ST1232], [CS2040C, MA1508, MA1507, MA2216, DSC2008], [CS2040C, MA1508, MA1511, MA1512, EE2012], [CS2040C, MA1508, MA1511, MA1512, ST2132], [CS2040C, MA1508, MA1511, MA1512, ST2334], [CS2040C, MA1508, MA1511, MA1512, MA2216, ST1131], [CS2040C, MA1508, MA1511, MA1512, MA2216, ST1232], [CS2040C, MA1508, MA1511, MA1512, MA2216, DSC2008], [CS2040C, MA1508, MA1521, EE2012], [CS2040C, MA1508, MA1521, ST2132], [CS2040C, MA1508, MA1521, ST2334], [CS2040C, MA1508, MA1521, MA2216, ST1131], [CS2040C, MA1508, MA1521, MA2216, ST1232], [CS2040C, MA1508, MA1521, MA2216, DSC2008], [CS2040C, MA1513, MA1102R, EE2012], [CS2040C, MA1513, MA1102R, ST2132], [CS2040C, MA1513, MA1102R, ST2334], [CS2040C, MA1513, MA1102R, MA2216, ST1131], [CS2040C, MA1513, MA1102R, MA2216, ST1232], [CS2040C, MA1513, MA1102R, MA2216, DSC2008], [CS2040C, MA1513, MA1505, EE2012], [CS2040C, MA1513, MA1505, ST2132], [CS2040C, MA1513, MA1505, ST2334], [CS2040C, MA1513, MA1505, MA2216, ST1131], [CS2040C, MA1513, MA1505, MA2216, ST1232], [CS2040C, MA1513, MA1505, MA2216, DSC2008], [CS2040C, MA1513, MA1507, EE2012], [CS2040C, MA1513, MA1507, ST2132], [CS2040C, MA1513, MA1507, ST2334], [CS2040C, MA1513, MA1507, MA2216, ST1131], [CS2040C, MA1513, MA1507, MA2216, ST1232], [CS2040C, MA1513, MA1507, MA2216, DSC2008], [CS2040C, MA1513, MA1511, MA1512, EE2012], [CS2040C, MA1513, MA1511, MA1512, ST2132], [CS2040C, MA1513, MA1511, MA1512, ST2334], [CS2040C, MA1513, MA1511, MA1512, MA2216, ST1131], [CS2040C, MA1513, MA1511, MA1512, MA2216, ST1232], [CS2040C, MA1513, MA1511, MA1512, MA2216, DSC2008], [CS2040C, MA1513, MA1521, EE2012], [CS2040C, MA1513, MA1521, ST2132], [CS2040C, MA1513, MA1521, ST2334], [CS2040C, MA1513, MA1521, MA2216, ST1131], [CS2040C, MA1513, MA1521, MA2216, ST1232], [CS2040C, MA1513, MA1521, MA2216, DSC2008]];
prerequisitesMap["CS5339"] = [[CS3244]];
prerequisitesMap["CS5340"] = [[CS3243, EE2012], [CS3243, ST2132], [CS3243, ST2334], [CS3243, MA2216, ST1131], [CS3243, MA2216, ST1232], [CS3243, MA2216, DSC2008]];
prerequisitesMap["CS5344"] = [[BT5110], [CS2102], [IT2002]];
prerequisitesMap["CS5346"] = [[CS2040, CS2102, CS3240, EE2012], [CS2040, CS2102, CS3240, ST1131], [CS2040, CS2102, CS3240, ST1232], [CS2040, CS2102, CS3240, DSC2008], [CS2040, CS2102, CS3240, ST2132], [CS2040, CS2102, CS3240, ST2334], [CS2040C, CS2102, CS3240, EE2012], [CS2040C, CS2102, CS3240, ST1131], [CS2040C, CS2102, CS3240, ST1232], [CS2040C, CS2102, CS3240, DSC2008], [CS2040C, CS2102, CS3240, ST2132], [CS2040C, CS2102, CS3240, ST2334], [CS2040S, CS2102, CS3240, EE2012], [CS2040S, CS2102, CS3240, ST1131], [CS2040S, CS2102, CS3240, ST1232], [CS2040S, CS2102, CS3240, DSC2008], [CS2040S, CS2102, CS3240, ST2132], [CS2040S, CS2102, CS3240, ST2334]];
prerequisitesMap["CS5421"] = [[CS3223]];
prerequisitesMap["CS5422"] = [[CS2105, EE2012], [CS2105, MA2216], [CS2105, ST2334], [EE3204, EE2012], [EE3204, MA2216], [EE3204, ST2334], [EE4204, EE2012], [EE4204, MA2216], [EE4204, ST2334]];
prerequisitesMap["CS5424"] = [[CS3223]];
prerequisitesMap["CS5425"] = [[CS2102]];
prerequisitesMap["CS5439"] = [[CS3235, CS2103], [CS3235, CS2103T]];
prerequisitesMap["CS5446"] = [[CS3243, EE2012], [CS3243, ST2132], [CS3243, ST2334], [CS3243, MA2216, ST1131], [CS3243, MA2216, ST1232], [CS3243, MA2216, DSC2008]];
prerequisitesMap["CS5476"] = [[CG3002], [CG4002], [CS3237]];
prerequisitesMap["CS5477"] = [[MA1101R, CS2040], [MA1101R, CS2040S], [MA1101R, CS2040C], [MA1311, CS2040], [MA1311, CS2040S], [MA1311, CS2040C], [MA1506, CS2040], [MA1506, CS2040S], [MA1506, CS2040C], [MA1508, CS2040], [MA1508, CS2040S], [MA1508, CS2040C]];
prerequisitesMap["CS6203"] = [[CS3223]];
prerequisitesMap["CS6207"] = [[CS4248]];
prerequisitesMap["CS6208"] = [[CS3243]];
prerequisitesMap["CS6210"] = [[CS3230]];
prerequisitesMap["CS6211"] = [[ST2334, CS2106, CS2105], [MA2216, CS2105, CS2106]];
prerequisitesMap["CS6213"] = [[CS3211], [CS4231]];
prerequisitesMap["CS6215"] = [[CS3230, CS4212]];
prerequisitesMap["CS6219"] = [[CS2105, CS2106]];
prerequisitesMap["CS6231"] = [[CS4236], [CS3235], [CS5231]];
prerequisitesMap["CS6234"] = [[CS5234]];
prerequisitesMap["CS6240"] = [[CS4243], [CS5240]];
prerequisitesMap["CS6244"] = [[CS3230, MA1101R, ST2334], [CS3230, MA1101R, MA2216], [CS3230, MA1311, ST2334], [CS3230, MA1311, MA2216], [CS3230, MA1506, ST2334], [CS3230, MA1506, MA2216], [CS3230, MA1508, ST2334], [CS3230 ,MA1508, MA2216]];
prerequisitesMap["CS6283"] = [[CS3244]];
prerequisitesMap["DAO2702"] = [[DAO1704]];
prerequisitesMap["DBA3701"] = [[DAO2702]];
prerequisitesMap["DBA3711"] = [[DAO2702]];
prerequisitesMap["DBA3803"] = [[DAO2702]];
prerequisitesMap["DBA4811"] = [[DAO2702]];
prerequisitesMap["DSA1101"] = [[MA1301]];
prerequisitesMap["DSA2101"] = [[DSA1101, MA1101R, MA2216]];
prerequisitesMap["DSA2102"] = [[MA1101R, MA1102R]];
prerequisitesMap["DSA3101"] = [[DSA2101, ST2132]];
prerequisitesMap["DSA3102"] = [[CS1010, MA1101R, MA1104], [CS1010, MA1101R, MA2104], [CS1010, MA1101R, MA2311]];
prerequisitesMap["DSA4211"] = [[ST3131]];
prerequisitesMap["DSA4212"] = [[MA1101R, MA1104, ST2132], [MA1101R, MA2311, ST2132]];
prerequisitesMap["DSA4264"] = [[CS3244, DSA3101]];
prerequisitesMap["DSA4266"] = [[CS3244, DSA3101]];
prerequisitesMap["DSA5102"] = [[CS1010, MA1101R, MA1102R, EE2012], [CS1010, MA1101R, MA1102R, MA2216], [CS1010, MA1101R, MA1102R, ST2334], [CS1010, MA1101R, MA1505, EE2012], [CS1010, MA1101R, MA1505, MA2216], [CS1010, MA1101R, MA1505, ST2334], [CS1010, MA1101R, MA1507, EE2012], [CS1010, MA1101R, MA1507, MA2216], [CS1010, MA1101R, MA1507, ST2334], [CS1010, MA1101R, MA1511, MA1512, EE2012], [CS1010, MA1101R, MA1511, MA1512, MA2216], [CS1010, MA1101R, MA1511, MA1512, ST2334], [CS1010, MA1101R, MA1521, EE2012], [CS1010, MA1101R, MA1521, MA2216], [CS1010, MA1101R, MA1521, ST2334], [CS1010, MA1311, MA1102R, EE2012], [CS1010, MA1311, MA1102R, MA2216], [CS1010, MA1311, MA1102R, ST2334], [CS1010, MA1311, MA1505, EE2012], [CS1010, MA1311, MA1505, MA2216], [CS1010, MA1311, MA1505, ST2334], [CS1010, MA1311, MA1507, EE2012], [CS1010, MA1311, MA1507, MA2216], [CS1010, MA1311, MA1507, ST2334], [CS1010, MA1311, MA1511, MA1512, EE2012], [CS1010, MA1311, MA1511, MA1512, MA2216], [CS1010, MA1311, MA1511, MA1512, ST2334], [CS1010, MA1311, MA1521, EE2012], [CS1010, MA1311, MA1521, MA2216], [CS1010, MA1311, MA1521, ST2334], [CS1010, MA1508, MA1102R, EE2012], [CS1010, MA1508, MA1102R, MA2216], [CS1010, MA1508, MA1102R, ST2334], [CS1010, MA1508, MA1505, EE2012], [CS1010, MA1508, MA1505, MA2216], [CS1010, MA1508, MA1505, ST2334], [CS1010, MA1508, MA1507, EE2012], [CS1010, MA1508, MA1507, MA2216], [CS1010, MA1508, MA1507, ST2334], [CS1010, MA1508, MA1511, MA1512, EE2012], [CS1010, MA1508, MA1511, MA1512, MA2216], [CS1010, MA1508, MA1511, MA1512, ST2334], [CS1010, MA1508, MA1521, EE2012], [CS1010, MA1508, MA1521, MA2216], [CS1010, MA1508, MA1521, ST2334], [CS1010, MA1513, MA1102R, EE2012], [CS1010, MA1513, MA1102R, MA2216], [CS1010, MA1513, MA1102R, ST2334], [CS1010, MA1513, MA1505, EE2012], [CS1010, MA1513, MA1505, MA2216], [CS1010, MA1513, MA1505, ST2334], [CS1010, MA1513, MA1507, EE2012], [CS1010, MA1513, MA1507, MA2216], [CS1010, MA1513, MA1507, ST2334], [CS1010, MA1513, MA1511, MA1512, EE2012], [CS1010, MA1513, MA1511, MA1512, MA2216], [CS1010, MA1513, MA1511, MA1512, ST2334], [CS1010, MA1513, MA1521, EE2012], [CS1010, MA1513, MA1521, MA2216], [CS1010, MA1513, MA1521, ST2334]];
prerequisitesMap["DSA5201"] = [[DSA5101]];
prerequisitesMap["DSA5202"] = [[DSA5102]];
prerequisitesMap["DSC3214"] = [[DSC1007], [MA1101R, MA1521], [MA1101R, MA1102R], [MA1311, MA1521], [MA1311, MA1102R]];
prerequisitesMap["DSC3215"] = [[DSC1007], [ST2334], [MA2216]];
prerequisitesMap["DSC4213"] = [[DSC1007], [IE2110], [DSC3214]];
prerequisitesMap["EC2101"] = [[EC1101E], [RE1704], [BSP1005], [BSP1703]];
prerequisitesMap["EC2102"] = [[EC1101E], [EC1301], [RE1704], [BSP1005], [BSP1703]];
prerequisitesMap["EC2204"] = [[EC1101E], [EC1301], [GET1023]];
prerequisitesMap["EC3101"] = [[EC2101, EC2104], [EC2101, MA1101R], [EC2101, MA1102R], [EC2101, MA1521], [EC2101, MA1505], [EC2101, MA1506], [EC2101, MA1507], [EC2101, MA1508], [EC2101, MA1511], [EC2101, MA1512], [EC2101, MA1513]];
prerequisitesMap["EC3102"] = [[EC2102, EC2101, EC2104], [EC2102, EC2101, MA1101R], [EC2102, EC2101, MA1102R], [EC2102, EC2101, MA1521], [EC2102, EC2101, MA1505], [EC2102, EC2101, MA1506], [EC2102, EC2101, MA1507], [EC2102, EC2101, MA1508], [EC2102, EC2101, MA1511], [EC2102, EC2101, MA1512], [EC2102, EC2101, MA1513]];
prerequisitesMap["EC3303"] = [[EC1101E, EC2303], [EC1101E, DSC1007], [EC1101E, ST2334], [EC1101E, ST1131], [EC1101E, ST1232], [EC1101E, MA2216], [EC1101E, SA4101], [EC1101E, SA4102], [EC1101E, SA4104], [EC1101E, SA4105], [EC1101E, SA4106], [EC1101E, SA4107], [EC1101E, SA4108], [EC1301, EC2303], [EC1301, DSC1007], [EC1301, ST2334], [EC1301, ST1131], [EC1301, ST1232], [EC1301, MA2216], [EC1301, SA4101], [EC1301, SA4102], [EC1301, SA4104], [EC1301, SA4105], [EC1301, SA4106], [EC1301, SA4107], [EC1301, SA4108], [BSP1005, EC2303], [BSP1005, DSC1007], [BSP1005, ST2334], [BSP1005, ST1131], [BSP1005, ST1232], [BSP1005, MA2216], [BSP1005, SA4101], [BSP1005, SA4102], [BSP1005, SA4104], [BSP1005, SA4105], [BSP1005, SA4106], [BSP1005, SA4107], [BSP1005, SA4108]];
prerequisitesMap["EC3312"] = [[EC2101, EC2104], [EC2101, MA1101R], [EC2101, MA1102R], [EC2101, MA1521], [EC2101, MA1505], [EC2101, MA1506], [EC2101, MA1507], [EC2101, MA1508], [EC2101, MA1511], [EC2101, MA1512], [EC2101, MA1513]];
prerequisitesMap["EC3333"] = [[EC2102, EC2101, EC2104], [EC2102, EC2101, MA1101R], [EC2102, EC2101, MA1102R], [EC2102, EC2101, MA1521], [EC2102, EC2101, MA1505], [EC2102, EC2101, MA1506], [EC2102, EC2101, MA1507], [EC2102, EC2101, MA1508], [EC2102, EC2101, MA1511], [EC2102, EC2101, MA1512], [EC2102, EC2101, MA1513]];
prerequisitesMap["EC4301"] = [[EC3101, EC3102]];
prerequisitesMap["EE2011E"] = [[TE2002]];
prerequisitesMap["EE2012"] = [[MA1505, MA1506], [MA1511, MA1512]];
prerequisitesMap["EE2023"] = [[MA1506], [MA1512]];
prerequisitesMap["EE2023E"] = [[TG1401]];
prerequisitesMap["EE2026"] = [[EE1111A], [EG1111], [CG1111]];
prerequisitesMap["EE2027"] = [[EE2111A], [EG1112]];
prerequisitesMap["EE2028"] = [[EE2028A, EE2026], [IT1007, EE2026]];
prerequisitesMap["EE3104C"] = [[PC2020], [EE2011]];
prerequisitesMap["EE3104E"] = [[EE2011E]];
prerequisitesMap["EE3131C"] = [[EE2023]];
prerequisitesMap["EE3131E"] = [[EE2009E, EE2010E], [EE2023E]];
prerequisitesMap["EE3207E"] = [[EE2007E], [EE2024], [TEE2028]];
prerequisitesMap["EE3331C"] = [[EE2023]];
prerequisitesMap["EE3331E"] = [[EE2023E]];
prerequisitesMap["EE3408C"] = [[CG2027], [EE2027], [EE2021]];
prerequisitesMap["EE3408E"] = [[EE2021E], [TEE2027]];
prerequisitesMap["EE3431C"] = [[EE2111A], [EG1112]];
prerequisitesMap["EE3501E"] = [[EE2005E], [EE2021E], [TEE2027]];
prerequisitesMap["EE3731C"] = [[EE2012, EE2023], [ST2334, EE2023]];
prerequisitesMap["EE3801"] = [[CS1010, EE2012], [CS1010, ST2334], [CS1010, MA2216, ST2132]];
prerequisitesMap["EE4101"] = [[PC2020]];
prerequisitesMap["EE4101E"] = [[EE2011E]];
prerequisitesMap["EE4104"] = [[EE3104C]];
prerequisitesMap["EE4112"] = [[PC2020]];
prerequisitesMap["EE4112E"] = [[EE2011E]];
prerequisitesMap["EE4204"] = [[EE2012], [ST2334]];
prerequisitesMap["EE4204E"] = [[TE2003]];
prerequisitesMap["EE4205"] = [[EE2012, EE2023], [ST2334, CG2023]];
prerequisitesMap["EE4210"] = [[EE2012], [ST2334]];
prerequisitesMap["EE4210E"] = [[TE2003]];
prerequisitesMap["EE4211"] = [[EE2012], [ST2334]];
prerequisitesMap["EE4214"] = [[MA1508, EE3731C], [MA1508, EE4704]];
prerequisitesMap["EE4214E"] = [[TE2101, EE2024E], [TE2101, TEE2028]];
prerequisitesMap["EE4218"] = [[EE2028], [CG2028], [EE2024]];
prerequisitesMap["EE4302"] = [[EE3331C]];
prerequisitesMap["EE4303"] = [[EE3331C]];
prerequisitesMap["EE4303E"] = [[EE2010E], [EE3331E]];
prerequisitesMap["EE4305"] = [[EE2023]];
prerequisitesMap["EE4307"] = [[EE3331C]];
prerequisitesMap["EE4308"] = [[EE3331C], [ME2142]];
prerequisitesMap["EE4407"] = [[EE2021], [CG2027], [EE2027]];
prerequisitesMap["EE4407E"] = [[EE2021E], [TEE2027]];
prerequisitesMap["EE4409"] = [[CG2027], [EE2027], [EE2021]];
prerequisitesMap["EE4415"] = [[EE2026], [EE2020]];
prerequisitesMap["EE4415E"] = [[EE2006E], [EE2020E], [TEE2026]];
prerequisitesMap["EE4434"] = [[EE2026, CG2027], [EE2026, EE2027], [EE2020, EE2021]];
prerequisitesMap["EE4435"] = [[CG2027, EE3431C], [EE2027, EE3431C], [EE2021, EE3431C]];
prerequisitesMap["EE4435E"] = [[EE2021E], [TEE2027]];
prerequisitesMap["EE4436"] = [[CG2027], [EE2027], [EE2021]];
prerequisitesMap["EE4436E"] = [[EE2021E], [TEE2027]];
prerequisitesMap["EE4437"] = [[CG2027], [EE2027], [EE2021]];
prerequisitesMap["EE4438"] = [[CG2027], [EE2027], [EE2021]];
prerequisitesMap["EE4501"] = [[EE2029], [EE3506C]];
prerequisitesMap["EE4502"] = [[EE2029], [EE3506C]];
prerequisitesMap["EE4503"] = [[EE2029], [EE3506C]];
prerequisitesMap["EE4505"] = [[EE2021]];
prerequisitesMap["EE4511"] = [[EE2029], [EE3506C]];
prerequisitesMap["EE4603"] = [[EE2023], [BN2401]];
prerequisitesMap["EE4704"] = [[EE2023], [CG2023]];
prerequisitesMap["EE4802"] = [[CS1010, EE2012], [CS1010, ST2334], [CS1010, MA2216, ST2132]];
prerequisitesMap["EE5026"] = [[CS1010], [CS1020], [CS2020]];
prerequisitesMap["EE5060"] = [[ME2142], [ME2142E], [TME2142], [EE3331C], [EE3331E], [TEE3331]];
prerequisitesMap["EE5061"] = [[ME2142], [ME2142E], [TME2142], [EE3331C], [EE3331E], [TEE3331]];
prerequisitesMap["EE5064"] = [[ME2142, MA1101R, MA1102R, CS1010], [ME2142, MA1101R, MA1511, MA1512, CS1010], [ME2142, MA1101R, MA1505, CS1010], [ME2142, MA1101R, MA1507, CS1010], [ME2142, MA1101R, MA1521, CS1010], [ME2142, MA1311, MA1102R, CS1010], [ME2142, MA1311, MA1511, MA1512, CS1010], [ME2142, MA1311, MA1505, CS1010], [ME2142, MA1311, MA1507, CS1010], [ME2142, MA1311, MA1521, CS1010], [ME2142, MA1508, MA1102R, CS1010], [ME2142, MA1508, MA1511, MA1512, CS1010], [ME2142, MA1508, MA1505, CS1010], [ME2142, MA1508, MA1507, CS1010], [ME2142, MA1508, MA1521, CS1010], [ME2142, MA1513, MA1102R, CS1010], [ME2142, MA1513, MA1511, MA1512, CS1010], [ME2142, MA1513, MA1505, CS1010], [ME2142, MA1513, MA1507, CS1010], [ME2142, MA1513, MA1521, CS1010], [ME2142E, MA1101R, MA1102R, CS1010], [ME2142E, MA1101R, MA1511, MA1512, CS1010], [ME2142E, MA1101R, MA1505, CS1010], [ME2142E, MA1101R, MA1507, CS1010], [ME2142E, MA1101R, MA1521, CS1010], [ME2142E, MA1311, MA1102R, CS1010], [ME2142E, MA1311, MA1511, MA1512, CS1010], [ME2142E, MA1311, MA1505, CS1010], [ME2142E, MA1311, MA1507, CS1010], [ME2142E, MA1311, MA1521, CS1010], [ME2142E, MA1508, MA1102R, CS1010], [ME2142E, MA1508, MA1511, MA1512, CS1010], [ME2142E, MA1508, MA1505, CS1010], [ME2142E, MA1508, MA1507, CS1010], [ME2142E, MA1508, MA1521, CS1010], [ME2142E, MA1513, MA1102R, CS1010], [ME2142E, MA1513, MA1511, MA1512, CS1010], [ME2142E, MA1513, MA1505, CS1010], [ME2142E, MA1513, MA1507, CS1010], [ME2142E, MA1513, MA1521, CS1010], [TME2142, MA1101R, MA1102R, CS1010], [TME2142, MA1101R, MA1511, MA1512, CS1010], [TME2142, MA1101R, MA1505, CS1010], [TME2142, MA1101R, MA1507, CS1010], [TME2142, MA1101R, MA1521, CS1010], [TME2142, MA1311, MA1102R, CS1010], [TME2142, MA1311, MA1511, MA1512, CS1010], [TME2142, MA1311, MA1505, CS1010], [TME2142, MA1311, MA1507, CS1010], [TME2142, MA1311, MA1521, CS1010], [TME2142, MA1508, MA1102R, CS1010], [TME2142, MA1508, MA1511, MA1512, CS1010], [TME2142, MA1508, MA1505, CS1010], [TME2142, MA1508, MA1507, CS1010], [TME2142, MA1508, MA1521, CS1010], [TME2142, MA1513, MA1102R, CS1010], [TME2142, MA1513, MA1511, MA1512, CS1010], [TME2142, MA1513, MA1505, CS1010], [TME2142, MA1513, MA1507, CS1010], [TME2142, MA1513, MA1521, CS1010], [EE3331C, MA1101R, MA1102R, CS1010], [EE3331C, MA1101R, MA1511, MA1512, CS1010], [EE3331C, MA1101R, MA1505, CS1010], [EE3331C, MA1101R, MA1507, CS1010], [EE3331C, MA1101R, MA1521, CS1010], [EE3331C, MA1311, MA1102R, CS1010], [EE3331C, MA1311, MA1511, MA1512, CS1010], [EE3331C, MA1311, MA1505, CS1010], [EE3331C, MA1311, MA1507, CS1010], [EE3331C, MA1311, MA1521, CS1010], [EE3331C, MA1508, MA1102R, CS1010], [EE3331C, MA1508, MA1511, MA1512, CS1010], [EE3331C, MA1508, MA1505, CS1010], [EE3331C, MA1508, MA1507, CS1010], [EE3331C, MA1508, MA1521, CS1010], [EE3331C, MA1513, MA1102R, CS1010], [EE3331C, MA1513, MA1511, MA1512, CS1010], [EE3331C, MA1513, MA1505, CS1010], [EE3331C, MA1513, MA1507, CS1010], [EE3331C, MA1513, MA1521, CS1010], [EE3331E, MA1101R, MA1102R, CS1010], [EE3331E, MA1101R, MA1511, MA1512, CS1010], [EE3331E, MA1101R, MA1505, CS1010], [EE3331E, MA1101R, MA1507, CS1010], [EE3331E, MA1101R, MA1521, CS1010], [EE3331E, MA1311, MA1102R, CS1010], [EE3331E, MA1311, MA1511, MA1512, CS1010], [EE3331E, MA1311, MA1505, CS1010], [EE3331E, MA1311, MA1507, CS1010], [EE3331E, MA1311, MA1521, CS1010], [EE3331E, MA1508, MA1102R, CS1010], [EE3331E, MA1508, MA1511, MA1512, CS1010], [EE3331E, MA1508, MA1505, CS1010], [EE3331E, MA1508, MA1507, CS1010], [EE3331E, MA1508, MA1521, CS1010], [EE3331E, MA1513, MA1102R, CS1010], [EE3331E, MA1513, MA1511, MA1512, CS1010], [EE3331E, MA1513, MA1505, CS1010], [EE3331E, MA1513, MA1507, CS1010], [EE3331E, MA1513, MA1521, CS1010], [TEE3331, MA1101R, MA1102R, CS1010], [TEE3331, MA1101R, MA1511, MA1512, CS1010], [TEE3331, MA1101R, MA1505, CS1010], [TEE3331, MA1101R, MA1507, CS1010], [TEE3331, MA1101R, MA1521, CS1010], [TEE3331, MA1311, MA1102R, CS1010], [TEE3331, MA1311, MA1511, MA1512, CS1010], [TEE3331, MA1311, MA1505, CS1010], [TEE3331, MA1311, MA1507, CS1010], [TEE3331, MA1311, MA1521, CS1010], [TEE3331, MA1508, MA1102R, CS1010], [TEE3331, MA1508, MA1511, MA1512, CS1010], [TEE3331, MA1508, MA1505, CS1010], [TEE3331, MA1508, MA1507, CS1010], [TEE3331, MA1508, MA1521, CS1010], [TEE3331, MA1513, MA1102R, CS1010], [TEE3331, MA1513, MA1511, MA1512, CS1010], [TEE3331, MA1513, MA1505, CS1010], [TEE3331, MA1513, MA1507, CS1010], [TEE3331, MA1513, MA1521, CS1010]];
prerequisitesMap["EE5101"] = [[ME2142], [EE3331C], [EE4302], [ME4246]];
prerequisitesMap["EE5103"] = [[EE2023], [EE3331C], [ME2142], [EE2010]];
prerequisitesMap["EE5104"] = [[EE3331C], [EE5101], [ME5401], [ME4501]];
prerequisitesMap["EE5106"] = [[MA1101R, ME2142], [MA1101R], [EE3331C], [MA1311, ME2142], [MA1311, EE3331C], [MA1508, ME2142], [MA1508, EE3331C], [MA1513, ME2142], [MA1513, EE3331C]];
prerequisitesMap["EE5110"] = [[EE2023], [EE3331C], [ME2142], [EE2010], [ME4246], [EE4302]];
prerequisitesMap["EE5111"] = [[EE3331C]];
prerequisitesMap["EE5132"] = [[EE4204], [EE4210]];
prerequisitesMap["EE5134"] = [[EE4210], [EE4210E], [EE4204], [EE4204E], [CS2105]];
prerequisitesMap["EE5135"] = [[EE2012, EE2023], [EE2012, CS2023], [ST2334, EE2023], [ST2334, CS2023]];
prerequisitesMap["EE5137"] = [[EE2012], [ST2334]];
prerequisitesMap["EE5138"] = [[EE2012], [MA1101R], [MA1102R], [MA1505], [MA1507], [MA1506], [MA1508], [MA1511], [MA1311], [MA1512], [MA1513], [MA1521]];
prerequisitesMap["EE5139"] = [[EE2012], [ST2334]];
prerequisitesMap["EE5303"] = [[EE4101], [EE4104], [EE4112]];
prerequisitesMap["EE5308"] = [[EE4112]];
prerequisitesMap["EE5431"] = [[PC2232], [EE3431C]];
prerequisitesMap["EE5434"] = [[EE3431C]];
prerequisitesMap["EE5439"] = [[EE4411], [EE4436], [CN4217]];
prerequisitesMap["EE5440"] = [[PC3231], [PC3235], [PC4240], [MLE3105]];
prerequisitesMap["EE5502"] = [[EE3431C], [EE2004]];
prerequisitesMap["EE5507"] = [[EE3408C], [EE3408]];
prerequisitesMap["EE5508"] = [[EE3431C], [EE2004], [EE3406]];
prerequisitesMap["EE5517"] = [[EE3431C]];
prerequisitesMap["EE5518"] = [[EE4415]];
prerequisitesMap["EE5701"] = [[EE3501E], [EE4501], [EE4503], [EE4505]];
prerequisitesMap["EE5702"] = [[EE4501]];
prerequisitesMap["EE5703"] = [[EE4502]];
prerequisitesMap["EE5711"] = [[EE4503]];
prerequisitesMap["EE5731"] = [[EE4212, EE4704]];
prerequisitesMap["EE5801"] = [[EE4101, EE4112]];
prerequisitesMap["EE5902"] = [[EE4204], [EE3207], [EE4218], [CS5272], [CG3207], [CS2100]];
prerequisitesMap["EE5903"] = [[EE4218], [CS5272], [CG2271], [CS2106]];
prerequisitesMap["EE5907"] = [[EE2012], [ST2334], [EE3731C], [CS1010]];
prerequisitesMap["EE5934"] = [[CS1010, EE5907], [IT1007, EE5907]];
prerequisitesMap["EE6104"] = [[EE5101], [ME4501]];
prerequisitesMap["EE6110"] = [[EE5101], [ME5401], [EE5103], [ME5403]];
prerequisitesMap["EE6138"] = [[EE2012], [MA1101R], [MA1102R], [MA1505], [MA1507], [MA1506], [MA1508], [MA1511], [MA1311], [MA1512], [MA1513], [MA1521]];
prerequisitesMap["EE6439"] = [[EE4411], [CN4217]];
prerequisitesMap["EE6934"] = [[CS1010, EE5907], [IT1007, EE5907]];
prerequisitesMap["EG2401"] = [[ES1501], [EG1413], [ES1531]];
prerequisitesMap["EG2401A"] = [[ES1501], [EG1413], [ES1531]];
prerequisitesMap["ENV1202"] = [[ES1103]];
prerequisitesMap["ES1103"] = [[ES1000]];
prerequisitesMap["ES1531"] = [[ES1103]];
prerequisitesMap["ES1541"] = [[ES1103]];
prerequisitesMap["ES1601"] = [[ES1103]];
prerequisitesMap["ES2002"] = [[ES1000]];
prerequisitesMap["ES2007D"] = [[ES1103]];
prerequisitesMap["ES2531"] = [[ES1103]];
prerequisitesMap["ES2660"] = [[ES1103]];
prerequisitesMap["FAS1101"] = [[ES1103]];
prerequisitesMap["FIN2004"] = [[BK1003], [BZ1002], [BH1002], [FNA1002], [ACC1002], [ACC1002X], [EC3212], [EG1422]];
prerequisitesMap["FIN2704"] = [[ACC1701], [ACC1701X], [EC2204]];
prerequisitesMap["FIN3117"] = [[FNA2004, FNA3102], [FNA2004, FIN3102], [FIN2004, FNA3102], [FIN2004, FIN3102]];
prerequisitesMap["FIN3118"] = [[FIN3102]];
prerequisitesMap["FIN3701"] = [[FIN2704]];
prerequisitesMap["FIN3703"] = [[FIN2704]];
prerequisitesMap["FIN3713"] = [[FIN2704, FIN3702]];
prerequisitesMap["FIN3714"] = [[FIN3702]];
prerequisitesMap["FIN4112G"] = [[FIN3101, FIN3102, FIN3103]];
prerequisitesMap["FIN4112L"] = [[FIN3101]];
prerequisitesMap["FIN4761A"] = [[FIN3701, FIN3702, FIN3703], [RE3807, FIN3701, FIN3703]];
prerequisitesMap["FIN4761D"] = [[FIN3701], [RE3807]];
prerequisitesMap["GEK1549"] = [[ES1103]];
prerequisitesMap["GET1021"] = [[ES1103]];
prerequisitesMap["IE2100"] = [[ST2334], [EE2012], [CE2407], [BN2102]];
prerequisitesMap["IE3100M"] = [[IE2100], [IE2110], [IE1112]];
prerequisitesMap["IE4210"] = [[IE2110]];
prerequisitesMap["IFS4101"] = [[CS2107]];
prerequisitesMap["IFS4102"] = [[CS3235]];
prerequisitesMap["IFS4103"] = [[CS3235]];
prerequisitesMap["IFS4201"] = [[CP3880]];
prerequisitesMap["IFS4202"] = [[IFS4201]];
prerequisitesMap["IFS4205"] = [[CS3235]];
prerequisitesMap["IS2101"] = [[ES1103]];
prerequisitesMap["IS2102"] = [[CS1020], [CS2030]];
prerequisitesMap["IS2103"] = [[CS1020], [CS2030]];
prerequisitesMap["IS3103"] = [[IS1103, CS2101], [IS1103, IS2101]];
prerequisitesMap["IS3106"] = [[IS2103]];
prerequisitesMap["IS3150"] = [[IS2101]];
prerequisitesMap["IS3221"] = [[CS1010, IS1103], [CS1010, BT1101], [DAO2702, IT3010]];
prerequisitesMap["IS3240"] = [[IS1103, IS2102], [IS1103, BT2102]];
prerequisitesMap["IS3251"] = [[IS1103]];
prerequisitesMap["IS4010"] = [[IS2101, IS1105, IS2103], [IS2101, IS1105, CS2107], [IS2101, IS1105, BT2101, BT2102], [IS2101, IS3101, IS2103], [IS2101, IS3101, CS2107], [IS2101, IS3101, BT2101, BT2102], [IS2101, IS3103, IS2103], [IS2101, IS3103, CS2107], [IS2101, IS3103, BT2101, BT2102], [CS2101, IS1105, IS2103], [CS2101, IS1105, CS2107], [CS2101, IS1105, BT2101, BT2102], [CS2101, IS3101, IS2103], [CS2101, IS3101, CS2107], [CS2101, IS3101, BT2101, BT2102], [CS2101, IS3103, IS2103], [CS2101, IS3103, CS2107], [CS2101, IS3103, BT2101, BT2102]];
prerequisitesMap["IS4100"] = [[IS2102, IS2103, IS1103], [IS2102, IS2103, EG2401]];
prerequisitesMap["IS4103"] = [[IS2101, IS2102, IS2103, IS3106]];
prerequisitesMap["IS4151"] = [[IS2103, IS3106]];
prerequisitesMap["IS4152"] = [[IS4242], [IS4303], [CS3244], [BT4240]];
prerequisitesMap["IS4204"] = [[IS3101], [IS3103]];
prerequisitesMap["IS4228"] = [[IS3101], [IS3103]];
prerequisitesMap["IS4231"] = [[CS2107]];
prerequisitesMap["IS4233"] = [[IS4233]];
prerequisitesMap["IS4234"] = [[IS2102, IS2103], [CS2103], [CS2103T], [CS2113]];
prerequisitesMap["IS4301"] = [[IS4100]];
prerequisitesMap["IS4302"] = [[CS2102, CS1020], [CS2102, CS2030], [CS2102, CS2103], [CS2102, CS2103T], [CS2102, CS2113], [BT2102, CS1020], [BT2102, CS2030], [BT2102, CS2103], [BT2102, CS2103T], [BT2102, CS2113]];
prerequisitesMap["IS4241"] = [[CS1010, IS1103], [CS1010, BT1101], [DAO2702, IT3010]];
prerequisitesMap["IS4242"] = [[MA1312, ST2334, IS3106], [MA1312, ST2334, BT3103], [MA1312, MA2216, IS3106], [MA1312, MA2216, BT3103], [MA1312, ST2132, IS3106], [MA1312, ST2132, BT3103], [MA1521, ST2334, IS3106], [MA1521, ST2334, BT3103], [MA1521, MA2216, IS3106], [MA1521, MA2216, BT3103], [MA1521, ST2132, IS3106], [MA1521, ST2132, BT3103], [MA1505, ST2334, IS3106], [MA1505, ST2334, BT3103], [MA1505, MA2216, IS3106], [MA1505, MA2216, BT3103], [MA1505, ST2132, IS3106], [MA1505, ST2132, BT3103], [MA1511, MA1512, ST2334, IS3106], [MA1511, MA1512, ST2334, BT3103], [MA1511, MA1512, MA2216, IS3106], [MA1511, MA1512, MA2216, BT3103], [MA1511, MA1512, ST2132, IS3106], [MA1511, MA1512, ST2132, BT3103]];
prerequisitesMap["IS4243"] = [[IS3101], [IS3103]];
prerequisitesMap["IS4250"] = [[IS1103]];
prerequisitesMap["IS4261"] = [[IS3103], [IS3101]];
prerequisitesMap["IS4303"] = [[IS2102]];
prerequisitesMap["IS5002"] = [[IS2102]];
prerequisitesMap["IS5128"] = [[IS2102, IS3103]];
prerequisitesMap["IS5451"] = [[IS2103, IS3106]];
prerequisitesMap["IT2002"] = [[CS1010]];
prerequisitesMap["IT3010"] = [[DAO2702], [CS1010]];
prerequisitesMap["IT3011"] = [[CS1010, MA1101R, MA1102R, EE2012], [CS1010, MA1101R, MA1102R, MA2216], [CS1010, MA1101R, MA1102R, ST2334], [CS1010, MA1101R, MA1505, EE2012], [CS1010, MA1101R, MA1505, MA2216], [CS1010, MA1101R, MA1505, ST2334], [CS1010, MA1101R, MA1507, EE2012], [CS1010, MA1101R, MA1507, MA2216], [CS1010, MA1101R, MA1507, ST2334], [CS1010, MA1101R, MA1511, MA1512, EE2012], [CS1010, MA1101R, MA1511, MA1512, MA2216], [CS1010, MA1101R, MA1511, MA1512, ST2334], [CS1010, MA1101R, MA1521, EE2012], [CS1010, MA1101R, MA1521, MA2216], [CS1010, MA1101R, MA1521, ST2334], [CS1010, MA1311, MA1102R, EE2012], [CS1010, MA1311, MA1102R, MA2216], [CS1010, MA1311, MA1102R, ST2334], [CS1010, MA1311, MA1505, EE2012], [CS1010, MA1311, MA1505, MA2216], [CS1010, MA1311, MA1505, ST2334], [CS1010, MA1311, MA1507, EE2012], [CS1010, MA1311, MA1507, MA2216], [CS1010, MA1311, MA1507, ST2334], [CS1010, MA1311, MA1511, MA1512, EE2012], [CS1010, MA1311, MA1511, MA1512, MA2216], [CS1010, MA1311, MA1511, MA1512, ST2334], [CS1010, MA1311, MA1521, EE2012], [CS1010, MA1311, MA1521, MA2216], [CS1010, MA1311, MA1521, ST2334], [CS1010, MA1508, MA1102R, EE2012], [CS1010, MA1508, MA1102R, MA2216], [CS1010, MA1508, MA1102R, ST2334], [CS1010, MA1508, MA1505, EE2012], [CS1010, MA1508, MA1505, MA2216], [CS1010, MA1508, MA1505, ST2334], [CS1010, MA1508, MA1507, EE2012], [CS1010, MA1508, MA1507, MA2216], [CS1010, MA1508, MA1507, ST2334], [CS1010, MA1508, MA1511, MA1512, EE2012], [CS1010, MA1508, MA1511, MA1512, MA2216], [CS1010, MA1508, MA1511, MA1512, ST2334], [CS1010, MA1508, MA1521, EE2012], [CS1010, MA1508, MA1521, MA2216], [CS1010, MA1508, MA1521, ST2334], [CS1010, MA1513, MA1102R, EE2012], [CS1010, MA1513, MA1102R, MA2216], [CS1010, MA1513, MA1102R, ST2334], [CS1010, MA1513, MA1505, EE2012], [CS1010, MA1513, MA1505, MA2216], [CS1010, MA1513, MA1505, ST2334], [CS1010, MA1513, MA1507, EE2012], [CS1010, MA1513, MA1507, MA2216], [CS1010, MA1513, MA1507, ST2334], [CS1010, MA1513, MA1511, MA1512, EE2012], [CS1010, MA1513, MA1511, MA1512, MA2216], [CS1010, MA1513, MA1511, MA1512, ST2334], [CS1010, MA1513, MA1521, EE2012], [CS1010, MA1513, MA1521, MA2216], [CS1010, MA1513, MA1521, ST2334]];
prerequisitesMap["LSM1102"] = [[LSM1301]];
prerequisitesMap["LSM1105"] = [[LSM1301]];
prerequisitesMap["LSM1105"] = [[LSM1301]];
prerequisitesMap["LSM1401"] = [[CM1417]];
prerequisitesMap["LSM2241"] = [[LSM1102], [LSM1105], [LSM1106], [PR1111A]];
prerequisitesMap["MA1101R"] = [[MA1301]];
prerequisitesMap["MA1102R"] = [[MA1301]];
prerequisitesMap["MA1312"] = [[MA1301]];
prerequisitesMap["MA1505"] = [[MA1301]];
prerequisitesMap["MA1507"] = [[MA1301]];
prerequisitesMap["MA1508"] = [[MA1301]];
prerequisitesMap["MA1511"] = [[MA1301]];
prerequisitesMap["MA1512"] = [[MA1301]];
prerequisitesMap["MA1513"] = [[MA1301]];
prerequisitesMap["MA1521"] = [[MA1301]];
prerequisitesMap["MA2101"] = [[MA1101R], [MA1506], [MA1508], [MA1513]];
prerequisitesMap["MA2104"] = [[MA1102R], [MA1505], [MA1511], [MA1521]];
prerequisitesMap["MA2108"] = [[MA1102R], [MA1505], [MA1511], [MA1507], [MA1521]];
prerequisitesMap["MA2108S"] = [[MA1102R], [MA1505], [MA1511], [MA1507], [MA1521]];
prerequisitesMap["MA2202"] = [[CS1231]];
prerequisitesMap["MA2213"] = [[MA1102R, MA1101R], [MA1102R, MA1311], [MA1102R, MA1508], [MA1102R, MA1506], [MA1102R, MA1513], [MA1312, MA1101R], [MA1312, MA1311], [MA1312, MA1508], [MA1312, MA1506], [MA1312, MA1513], [MA1507, MA1101R], [MA1507, MA1311], [MA1507, MA1508], [MA1507, MA1506], [MA1507, MA1513], [MA1505, MA1101R], [MA1505, MA1311], [MA1505, MA1508], [MA1505, MA1506], [MA1505, MA1513], [MA1521, MA1101R], [MA1521, MA1311], [MA1521, MA1508], [MA1521, MA1506], [MA1521, MA1513], [MA1511, MA1101R], [MA1511, MA1311], [MA1511, MA1508], [MA1511, MA1506], [MA1511, MA1513], [EG1402, MA1101R], [EG1402, MA1311], [EG1402, MA1508], [EG1402, MA1506], [EG1402, MA1513], [EE1401, MA1101R], [EE1401, MA1311], [EE1401, MA1508], [EE1401, MA1506], [EE1401, MA1513], [EE1461, MA1101R], [EE1461, MA1311], [EE1461, MA1508], [EE1461, MA1506], [EE1461, MA1513]]; 
prerequisitesMap["MA2214"] = [[CS1231], [MA1101R], [MA1311], [MA1506], [MA1508], [MA1513]];
prerequisitesMap["MA2216"] = [[MA1102R], [MA1312], [MA1507], [MA1505], [MA1511], [MA1521]];
prerequisitesMap["MA2219"] = [[MA1101R], [CS1231], [MA1506], [MA1508], [MA1513], [MA1102R], [MA1505], [MA1507], [MA1511]];
prerequisitesMap["MA2288"] = [[MA1101R]];
prerequisitesMap["MA2289"] = [[MA1101R]];
prerequisitesMap["MA2311"] = [[MA1102R], [MA1312], [MA1421], [MA1521]];
prerequisitesMap["MA3110"] = [[MA2108], [MA2108S]];
prerequisitesMap["MA3110S"] = [[MA2108], [MA2108S]];
prerequisitesMap["MA3111"] = [[MA1104, MA3110], [MA1104, MA3110S], [MA2104, MA3110], [MA2104, MA3110S], [MA1507, MA3110], [MA1507, MA3110S]];
prerequisitesMap["MA3201"] = [[MA2202, MA2101]];
prerequisitesMap["MA3205"] = [[CS1231]];
prerequisitesMap["MA3209"] = [[MA3110, MA1104], [MA3110, MA2104], [MA3110, MA1507], [MA3110S, MA1104], [MA3110S, MA2104], [MA3110S, MA1507]];
prerequisitesMap["MA3218"] = [[MA2101]];
prerequisitesMap["MA3220"] = [[MA1104, MA1101R, MA2108], [MA2104, MA1101R, MA2108], [MA1505, MA1101R, MA2108], [MA1507, MA1101R, MA2108], [MA1511, MA1101R, MA2108], [MA1521, MA1101R, MA2108], [MA1104, MA1311, MA2108], [MA2104, MA1311, MA2108], [MA1505, MA1311, MA2108], [MA1507, MA1311, MA2108], [MA1511, MA1311, MA2108], [MA1521, MA1311, MA2108], [MA1104, MA1506, MA2108], [MA2104, MA1506, MA2108], [MA1505, MA1506, MA2108], [MA1507, MA1506, MA2108], [MA1511, MA1506, MA2108], [MA1521, MA1506, MA2108], [MA1104, MA1508, MA2108], [MA2104, MA1508, MA2108], [MA1505, MA1508, MA2108], [MA1507, MA1508, MA2108], [MA1511, MA1508, MA2108], [MA1521, MA1508, MA2108], [MA1104, MA1513, MA2108], [MA2104, MA1513, MA2108], [MA1505, MA1513, MA2108], [MA1507, MA1513, MA2108], [MA1511, MA1513, MA2108], [MA1521, MA1513, MA2108], [MA1104, MA1101R, MA2108S], [MA2104, MA1101R, MA2108S], [MA1505, MA1101R, MA2108S], [MA1507, MA1101R, MA2108S], [MA1511, MA1101R, MA2108S], [MA1521, MA1101R, MA2108S], [MA1104, MA1311, MA2108S], [MA2104, MA1311, MA2108S], [MA1505, MA1311, MA2108S], [MA1507, MA1311, MA2108S], [MA1511, MA1311, MA2108S], [MA1521, MA1311, MA2108S], [MA1104, MA1506, MA2108S], [MA2104, MA1506, MA2108S], [MA1505, MA1506, MA2108S], [MA1507, MA1506, MA2108S], [MA1511, MA1506, MA2108S], [MA1521, MA1506, MA2108S], [MA1104, MA1508, MA2108S], [MA2104, MA1508, MA2108S], [MA1505, MA1508, MA2108S], [MA1507, MA1508, MA2108S], [MA1511, MA1508, MA2108S], [MA1521, MA1508, MA2108S], [MA1104, MA1513, MA2108S], [MA2104, MA1513, MA2108S], [MA1505, MA1513, MA2108S], [MA1507, MA1513, MA2108S], [MA1511, MA1513, MA2108S], [MA1521, MA1513, MA2108S]];
prerequisitesMap["MA3227"] = [[MA2213, MA1104, MA2216], [MA2213, MA2104, MA2216], [MA2213, MA1505, MA2216], [MA2213, MA1506, MA2216], [MA2213, MA1507, MA2216], [MA2213, MA1511, MA2216], [MA2213, MA2311, MA2216], [MA2213, MA1104, ST2334], [MA2213, MA2104, ST2334], [MA2213, MA1505, ST2334], [MA2213, MA1506, ST2334], [MA2213, MA1507, ST2334], [MA2213, MA1511, ST2334], [MA2213, MA2311, ST2334]];
prerequisitesMap["MA3233"] = [[MA2214]];
prerequisitesMap["MA3236"] = [[MA1104], [MA2104], [MA1506], [MA1507], [MA1505], [MA1511], [MA2311]];
prerequisitesMap["MA3238"] = [[MA1101, MA2216], [MA1101R, MA2216], [MA1311, MA2216], [MA1508, MA2216], [GM1302, MA2216]];
prerequisitesMap["MA3252"] = [[MA1101R], [MA1306], [MA1311], [MA1508], [MA1506], [MA1513]];
prerequisitesMap["MA3259"] = [[MA2216], [MA3233], [MA3501], [ST2334], [LSM2241]];
prerequisitesMap["MA3264"] = [[MA1104], [MA2104], [MA1506], [MA2108], [MA2108S], [MA2221], [MA1505], [MA1511], [MA2311]];
prerequisitesMap["MA3269"] = [[CS1010, MA2216], [CS1010, ST2334], [IT1006, MA2216], [IT1006, ST2334], [IT1002, MA2216], [IT1002, ST2334]];
prerequisitesMap["MA4203"] = [[MA3201]];
prerequisitesMap["MA4207"] = [[MA3110], [MA3110S], [MA3205], [MA3219]];
prerequisitesMap["MA4211"] = [[MA3207H], [MA3209]];
prerequisitesMap["MA4221"] = [[MA3220]];
prerequisitesMap["MA4229"] = [[MA2101, MA3110], [MA2101, MA3110S]];
prerequisitesMap["MA4230"] = [[MA2101, MA2213], [MA2101, DSA2102]];
prerequisitesMap["MA4251"] = [[MA3238], [ST3236]];
prerequisitesMap["MA4254"] = [[MA2215], [MA3252], [DSC3214], [DSN3701]];
prerequisitesMap["MA4255"] = [[MA2213, MA3220], [DSA2102, MA3220]];
prerequisitesMap["MA4260"] = [[MA2216, MA3236], [ST2334, MA3236], [MA2216, MA3252], [ST2334, MA3252], [MA2216, DSC3214], [ST2334, DSC3214], [MA2216, DSN3701], [ST2334, DSN3701]];
prerequisitesMap["MA4261"] = [[MA3201], [MA3218], [MA3265]];
prerequisitesMap["MA4262"] = [[MA3209]];
prerequisitesMap["MA4264"] = [[MA3236, MA2216], [MA3236, ST2334], [MA3252, MA2216], [MA3252, ST2334], [DSC3214, MA2216], [DSC3214, ST2334], [DSN3701, MA2216], [DSN3701, ST2334]];
prerequisitesMap["MA4266"] = [[MA3209]];
prerequisitesMap["MA4268"] = [[MA2213]];
prerequisitesMap["MA4269"] = [[MA1104, MA3269], [MA1506, MA3269], [MA1507, MA3269], [MA1511, MA3269], [MA2104, MA3269], [MA2311, MA3269]];
prerequisitesMap["MA4270"] = [[MA2213, MA2216], [DSA2102, MA2216], [MA2213, ST2334], [DSA2102, ST2334]];
prerequisitesMap["MA4271"] = [[MA1104, MA2101], [MA2104, MA2101], [MA1507, MA2101], [MA1505, MA2101], [MA2311, MA2101]];
prerequisitesMap["MA5245"] = [[MA4269]];
prerequisitesMap["MA5248"] = [[MA4262], [MA3245], [MA4269]];
prerequisitesMap["ME1102"] = [[EG1111]];
prerequisitesMap["ME2134"] = [[ME1102]];
prerequisitesMap["ME2142"] = [[MA1512, MA1513]];
prerequisitesMap["ME2142E"] = [[TM2401]];
prerequisitesMap["ME3291"] = [[MA1505], [MA1512, MA1513]];
prerequisitesMap["ME4101"] = [[MLE2103, MLE2104, MLE2105, MLE3101]];
prerequisitesMap["ME4233"] = [[ME2134]];
prerequisitesMap["ME5401"] = [[ME2142], [EE3331C]];
prerequisitesMap["ME5402"] = [[ME2142], [EE3331C]];
prerequisitesMap["ME5403"] = [[EE2023], [EE2010], [EE3331C], [ME2142]];
prerequisitesMap["MKT4420"] = [[MKT2401]];
prerequisitesMap["MKT4812"] = [[MKT1705], [RE3704]];
prerequisitesMap["MLE2101"] = [[PC1221, PC1222], [MLE1111], [MLE1001], [MLE1002]];
prerequisitesMap["MLE2102"] = [[PC1221, PC1222], [MLE1111], [MLE1001], [MLE1002]];
prerequisitesMap["MLE2103"] = [[MLE2102], [MLE1111], [MLE1001], [MLE1002]];
prerequisitesMap["MLE2104"] = [[EG1109], [MLE1101], [MLE2101], [MLE1111], [MLE1001], [MLE1002]];
prerequisitesMap["MLE2105"] = [[MLE1001], [MLE1002], [MLE1101], [MLE2101], [MLE1111]];
prerequisitesMap["MLE3101"] = [[MLE1101], [MLE2101], [MLE1001], [MLE1002]];
prerequisitesMap["MLE3105"] = [[MLE2105]];
prerequisitesMap["MLE4101A"] = [[MLE2103, MLE2104, MLE3101]];
prerequisitesMap["MLE4102"] = [[MLE2103]];
prerequisitesMap["MNO2706"] = [[ES1000]];
prerequisitesMap["PC1141"] = [[PC1221, PC1222]];
prerequisitesMap["PC1142"] = [[PC1221, PC1222]];
prerequisitesMap["PC1143"] = [[PC1221, PC1222]];
prerequisitesMap["PC1143"] = [[PC1221, PC1222]];
prerequisitesMap["PC1431"] = [[PC1221, PC1222]];
prerequisitesMap["PC1432"] = [[PC1221, PC1222]];
prerequisitesMap["PC1433"] = [[PC1221, PC1222]];
prerequisitesMap["PC2020"] = [[MA1511, MA1512]];
prerequisitesMap["PC2130"] = [[PC1144, MA1101R, MA1102R], [PC1144, MA1101R, MA1505], [PC1144, MA1101R, MA1511], [PC1144, MA1101R, MA1512], [PC1144, MA1513, MA1102R], [PC1144, MA1513, MA1505], [PC1144, MA1513, MA1511], [PC1144, MA1513, MA1512], [PC1144, MA1508, MA1102R], [PC1144, MA1508, MA1505], [PC1144, MA1508, MA1511], [PC1144, MA1508, MA1512], [PC1432, MA1101R, MA1102R], [PC1432, MA1101R, MA1505], [PC1432, MA1101R, MA1511], [PC1432, MA1101R, MA1512], [PC1432, MA1513, MA1102R], [PC1432, MA1513, MA1505], [PC1432, MA1513, MA1511], [PC1432, MA1513, MA1512], [PC1432, MA1508, MA1102R], [PC1432, MA1508, MA1505], [PC1432, MA1508, MA1511], [PC1432, MA1508, MA1512]];
prerequisitesMap["PC2130B"] = [[PC1144], [PC1432], [PC1433]];
prerequisitesMap["PC2131"] = [[PC1143, MA1101R, MA1102R], [PC1143, MA1101R, MA1505], [PC1143, MA1101R, MA1511], [PC1143, MA1101R, MA1512], [PC1143, MA1513, MA1102R], [PC1143, MA1513, MA1505], [PC1143, MA1513, MA1511], [PC1143, MA1513, MA1512], [PC1143, MA1508, MA1102R], [PC1143, MA1508, MA1505], [PC1143, MA1508, MA1511], [PC1143, MA1508, MA1512], [PC1432, MA1101R, MA1102R], [PC1432, MA1101R, MA1505], [PC1432, MA1101R, MA1511], [PC1432, MA1101R, MA1512], [PC1432, MA1513, MA1102R], [PC1432, MA1513, MA1505], [PC1432, MA1513, MA1511], [PC1432, MA1513, MA1512], [PC1432, MA1508, MA1102R], [PC1432, MA1508, MA1505], [PC1432, MA1508, MA1511], [PC1432, MA1508, MA1512]];
prerequisitesMap["PC2132"] = [[PC1141, MA1101R, MA1102R], [PC1141, MA1101R, MA1505], [PC1141, MA1101R, MA1511], [PC1141, MA1101R, MA1512], [PC1141, MA1513, MA1102R], [PC1141, MA1513, MA1505], [PC1141, MA1513, MA1511], [PC1141, MA1513, MA1512], [PC1141, MA1508, MA1102R], [PC1141, MA1508, MA1505], [PC1141, MA1508, MA1511], [PC1141, MA1508, MA1512], [PC1431, MA1101R, MA1102R], [PC1431, MA1101R, MA1505], [PC1431, MA1101R, MA1511], [PC1431, MA1101R, MA1512], [PC1431, MA1513, MA1102R], [PC1431, MA1513, MA1505], [PC1431, MA1513, MA1511], [PC1431, MA1513, MA1512], [PC1431, MA1508, MA1102R], [PC1431, MA1508, MA1505], [PC1431, MA1508, MA1511], [PC1431, MA1508, MA1512], [PC1433, MA1101R, MA1102R], [PC1433, MA1101R, MA1505], [PC1433, MA1101R, MA1511], [PC1433, MA1101R, MA1512], [PC1433, MA1513, MA1102R], [PC1433, MA1513, MA1505], [PC1433, MA1513, MA1511], [PC1433, MA1513, MA1512], [PC1433, MA1508, MA1102R], [PC1433, MA1508, MA1505], [PC1433, MA1508, MA1511], [PC1433, MA1508, MA1512]];
prerequisitesMap["PC2133"] = [[PC1144], [PC1433]];
prerequisitesMap["PC2134"] = [[MA1101R, MA1102R]];
prerequisitesMap["PC3130"] = [[PC2130, PC2134], [PC2130B, PC2134]];
prerequisitesMap["PC3231"] = [[PC2131]];
prerequisitesMap["PC3235"] = [[PC2130], [PC2130B]];
prerequisitesMap["PC3236"] = [[PC2134]];
prerequisitesMap["PC3238"] = [[PC2134], [PC3236]];
prerequisitesMap["PC3274"] = [[PC2134]];
prerequisitesMap["PC4240"] = [[PC3235]];
prerequisitesMap["PC4248"] = [[PC3274]];
prerequisitesMap["PC4274"] = [[PC3274]];
prerequisitesMap["PR4201"] = [[PR1140]];
prerequisitesMap["QF3101"] = [[MA1104, MA2222], [MA2104, MA2222], [MA1505, MA2222], [MA1507, MA2222], [MA1511, MA2222], [MA1104, QF2101], [MA2104, QF2101], [MA1505, QF2101], [MA1507, QF2101], [MA1511, QF2101], [MA1104, MA3269], [MA2104, MA3269], [MA1505, MA3269], [MA1507, MA3269], [MA1511, MA3269]];
prerequisitesMap["QF4102"] = [[QF3101]];
prerequisitesMap["QF5210"] = [[QF3101, MA4269]];
prerequisitesMap["RE3807"] = [[RE3701]];
prerequisitesMap["SP1541"] = [[ES1103]];
prerequisitesMap["ST1131"] = [[MA1301]];
prerequisitesMap["ST2132"] = [[MA2216], [ST2334]];
prerequisitesMap["ST2334"] = [[MA1102R], [MA1312], [MA1505], [MA1507], [MA1521]];
prerequisitesMap["ST3131"] = [[MA2216], [ST2334]];
prerequisitesMap["ST3232"] = [[ST2132], [ST2334]];
prerequisitesMap["ST3233"] = [[ST2132], [ST2334]];
prerequisitesMap["ST3236"] = [[MA1101, MA2216], [MA1101R, MA2216], [MA1311, MA2216], [MA1508, MA2216]];
prerequisitesMap["ST3239"] = [[MA2216], [ST2334]];
prerequisitesMap["ST3240"] = [[ST3131]];
prerequisitesMap["ST3247"] = [[ST2334, CS1010], [ST2334, IT1006], [MA2216, CS1010], [MA2216, IT1006]];
prerequisitesMap["ST3248"] = [[ST2132], [ST2334]];
prerequisitesMap["ST4231"] = [[ST2132]];
prerequisitesMap["ST4233"] = [[ST3131]];
prerequisitesMap["ST4234"] = [[ST2132]];
prerequisitesMap["ST4238"] = [[MA3238], [ST3236]];
prerequisitesMap["ST4245"] = [[ST3131]];
prerequisitesMap["ST4248"] = [[ST3131, ST3248]];
prerequisitesMap["TCE2407"] = [[TTG1401]];
prerequisitesMap["TE2002"] = [[TE2102], [TG1401]];
prerequisitesMap["TE2003"] = [[TE2002]];
prerequisitesMap["TEE2002"] = [[TE2102], [TTG1401]];
prerequisitesMap["TEE2003"] = [[TEE2002]];
prerequisitesMap["TEE2011"] = [[TEE2002]];
prerequisitesMap["TEE2023"] = [[TTG1401]];
prerequisitesMap["TEE2026"] = [[EE1002]];
prerequisitesMap["TEE2027"] = [[EG1112]];
prerequisitesMap["TEE2028"] = [[EE2020E], [TEE2020], [TEE2026]];
prerequisitesMap["TEE3207"] = [[TEE2024], [TEE2028]];
prerequisitesMap["TEE3104"] = [[TEE2011]];
prerequisitesMap["TEE3131"] = [[TEE2023]];
prerequisitesMap["TEE3331"] = [[TEE2023]];
prerequisitesMap["TEE3408"] = [[TEE2021], [TEE2027]];
prerequisitesMap["TEE3501"] = [[TEE2021], [TEE2027]];
prerequisitesMap["TEE4101"] = [[TEE2011]];
prerequisitesMap["TEE4112"] = [[TEE2011]];
prerequisitesMap["TEE4204"] = [[TEE2003]];
prerequisitesMap["TEE4210"] = [[TEE2003]];
prerequisitesMap["TEE4214"] = [[TEE2101, TEE2024], [TEE2101, TEE2028]];
prerequisitesMap["TEE4303"] = [[TEE3331]];
prerequisitesMap["TEE4407"] = [[TEE2021], [TEE2027]];
prerequisitesMap["TEE4415"] = [[TEE2020], [TEE2026]];
prerequisitesMap["TEE4435"] = [[TEE2021], [TEE2027]];
prerequisitesMap["TEE4436"] = [[TEE2021], [TEE2027]];
prerequisitesMap["TIC1002"] = [[TIC1001]];
prerequisitesMap["TIC2401"] = [[TIC1002]];
prerequisitesMap["TIC2501"] = [[TIC1002]];
prerequisitesMap["TME2142"] = [[TME2401], [TM2401]];
prerequisitesMap["UTC2101"] = [[UTC1119], [UTC1102H], [UTC1102B], [UTC1102U], [UTC1120], [UTC1102C], [UTC1114], [UTC1102R], [UTC1112A], [UTC1102S], [UTC1102P], [UTC1102G], [UTC1117], [UTC1112F], [UTC1102E], [UTC1102N], [UTC1116], [UTC1115], [UTC1113], [UTC1102M], [UTC1112B], [UTC1112G], [UTC1118], [UTC1102V]];
prerequisitesMap["UTC2102"] = [[UTC1119], [UTC1102H], [UTC1102B], [UTC1102U], [UTC1120], [UTC1102C], [UTC1114], [UTC1102R], [UTC1112A], [UTC1102S], [UTC1102P], [UTC1102G], [UTC1117], [UTC1112F], [UTC1102E], [UTC1102N], [UTC1116], [UTC1115], [UTC1113], [UTC1102M], [UTC1112B], [UTC1112G], [UTC1118], [UTC1102V]];
prerequisitesMap["UTC2107"] = [[UTC1119], [UTC1102H], [UTC1102B], [UTC1102U], [UTC1120], [UTC1102C], [UTC1114], [UTC1102R], [UTC1112A], [UTC1102S], [UTC1102P], [UTC1102G], [UTC1117], [UTC1112F], [UTC1102E], [UTC1102N], [UTC1116], [UTC1115], [UTC1113], [UTC1102M], [UTC1112B], [UTC1112G], [UTC1118], [UTC1102V]];
prerequisitesMap["UTC2113"] = [[UTC1119], [UTC1102H], [UTC1102B], [UTC1102U], [UTC1120], [UTC1102C], [UTC1114], [UTC1102R], [UTC1112A], [UTC1102S], [UTC1102P], [UTC1102G], [UTC1117], [UTC1112F], [UTC1102E], [UTC1102N], [UTC1116], [UTC1115], [UTC1113], [UTC1102M], [UTC1112B], [UTC1112G], [UTC1118], [UTC1102V]];
prerequisitesMap["UTS2100"] = [[UTC1119], [UTC1102H], [UTC1102B], [UTC1102U], [UTC1120], [UTC1102C], [UTC1114], [UTC1102R], [UTC1112A], [UTC1102S], [UTC1102P], [UTC1102G], [UTC1117], [UTC1112F], [UTC1102E], [UTC1102N], [UTC1116], [UTC1115], [UTC1113], [UTC1102M], [UTC1112B], [UTC1112G], [UTC1118], [UTC1102V]];
prerequisitesMap["UTS2101"] = [[UTC1119], [UTC1102H], [UTC1102B], [UTC1102U], [UTC1120], [UTC1102C], [UTC1114], [UTC1102R], [UTC1112A], [UTC1102S], [UTC1102P], [UTC1102G], [UTC1117], [UTC1112F], [UTC1102E], [UTC1102N], [UTC1116], [UTC1115], [UTC1113], [UTC1102M], [UTC1112B], [UTC1112G], [UTC1118], [UTC1102V]];
prerequisitesMap["UTS2105"] = [[UTC1119], [UTC1102H], [UTC1102B], [UTC1102U], [UTC1120], [UTC1102C], [UTC1114], [UTC1102R], [UTC1112A], [UTC1102S], [UTC1102P], [UTC1102G], [UTC1117], [UTC1112F], [UTC1102E], [UTC1102N], [UTC1116], [UTC1115], [UTC1113], [UTC1102M], [UTC1112B], [UTC1112G], [UTC1118], [UTC1102V]];
prerequisitesMap["UTW2001H"] = [[UTW1001]];
prerequisitesMap["UTW2001J"] = [[UTW1001]];
prerequisitesMap["UTW2001M"] = [[UTW1001]];
prerequisitesMap["UTW2001P"] = [[UTW1001]];
prerequisitesMap["UTW2001Q"] = [[UTW1001]];
prerequisitesMap["UTW2001R"] = [[UTW1001]];
prerequisitesMap["UTW2001W"] = [[UTW1001]];
prerequisitesMap["UTW2001Z"] = [[UTW1001]];

let preclusionsMap = {};
preclusionsMap["ACC1002"] = [FNA1002];
preclusionsMap["ACC1002X"] = [CS1304, EC3212, BK1003, BZ1002, BH1002, FNA1002];
preclusionsMap["ACC1701"] = [ACC1002, ACC1002X, EC2204];
preclusionsMap["ACC1701X"] = [ACC1002, ACC1002X];
preclusionsMap["BSE3701"] = [EC2102, BSP2001];
preclusionsMap["BSE3703"] = [RE3801, EC2303, EC3303];
preclusionsMap["BSP1005"] = [BH1005, BZ1005, BK1008];
preclusionsMap["BSP1703"] = [BSP1005, EC2101, EC1101E];
preclusionsMap["BSP1707"] = [BSP1005, BSP1703];
preclusionsMap["BT1101"] = [DSC1007];
preclusionsMap["BT4103"] = [BT3101];
preclusionsMap["BT4221"] = [CS4225, CS5425];
preclusionsMap["BT4240"] = [IS4240, IT3011, CS3244];
preclusionsMap["CE2407"] = [TCE2407];
preclusionsMap["CE4104"] = [TCE4104];
preclusionsMap["CG1111"] = [CG1108, EG1112];
preclusionsMap["CG2023"] = [EE2023];
preclusionsMap["CG2027"] = [EE2021];
preclusionsMap["CG2028"] = [EE2024];
preclusionsMap["CG2271"] = [CS2106];
preclusionsMap["CG3207"] = [EE3207E, TEE3207];
preclusionsMap["CG4001"] = [EE4001, CP4101];
preclusionsMap["CG4002"] = [CG3002, EE3032, EE3208];
preclusionsMap["CG4003"] = [CG4001, CP4101, CP4106, CP3200, CP3880, EE4001, EE4002R, EG3611A, EG3612];
preclusionsMap["CN2122A"] = [CN2122];
preclusionsMap["CP3208"] = [CS3208];
preclusionsMap["CP3880"] = [EG3601];
preclusionsMap["CP4101"] = [CS4101];
preclusionsMap["CS2040"] = [CS1020, CS2020, CS2010, CS2040C, CS2040S];
preclusionsMap["CS2040C"] = [CS1020, CS2020, CS2010, CS2040, CS2040S];
preclusionsMap["CS2040S"] = [CS1020, CS2020, CS2010, CS2040, CS2040C];
preclusionsMap["CS2100"] = [CS1104];
preclusionsMap["CS2101"] = [CS2103, IS2101, ES2002, ES2007D, ES1601];
preclusionsMap["CS2102"] = [IT2002];
preclusionsMap["CS2103"] = [CS2103T, CS2113, CS2113T];
preclusionsMap["CS2103T"] = [CS2103, CS2113, CS2113T, IS2101];
preclusionsMap["CS2105"] = [IT2001, EE3204, EE4204, EE4204E, EE4210];
preclusionsMap["CS2106"] = [CG2271, EE4214];
preclusionsMap["CS2108"] = [CS3246];
preclusionsMap["CS2113"] = [CS2103, CS2103T];
preclusionsMap["CS2309"] = [CS2305S];
preclusionsMap["CS3203"] = [CS3201, CS3202];
preclusionsMap["CS3219"] = [CS3213];
preclusionsMap["CS3242"] = [CS4342];
preclusionsMap["CS3244"] = [IT3011, BT4240];
preclusionsMap["CS4221"] = [CS5421];
preclusionsMap["CS4222"] = [CS5422];
preclusionsMap["CS4224"] = [CS5424];
preclusionsMap["CS4225"] = [CS5425, BT4221];
preclusionsMap["CS4239"] = [CS5439];
preclusionsMap["CS4243"] = [EE4212];
preclusionsMap["CS4246"] = [CS5446];
preclusionsMap["CS4276"] = [CS5476];
preclusionsMap["CS4277"] = [CS5477];
preclusionsMap["CS4278"] = [CS5478];
preclusionsMap["CS5230"] = [CS4230];
preclusionsMap["CS5422"] = [CS4222];
preclusionsMap["CS5421"] = [CS4221];
preclusionsMap["CS5424"] = [CS4224];
preclusionsMap["CS5425"] = [CS4225, BT4221];
preclusionsMap["CS5439"] = [CS4239];
preclusionsMap["CS5446"] = [CS4246];
preclusionsMap["CS5476"] = [CS4276];
preclusionsMap["CS5477"] = [CS4277];
preclusionsMap["DAO1704"] = [DSC1007];
preclusionsMap["DAO2702"] = [DSC1007];
preclusionsMap["DBA3701"] = [DSC3214, IE2110];
preclusionsMap["DBA3711"] = [DSC3215];
preclusionsMap["DBA3803"] = [DSC3216];
preclusionsMap["DBA4811"] = [DSC4213];
preclusionsMap["DSA2102"] = [MA2213];
preclusionsMap["DSA4199"] = [DSA4299];
preclusionsMap["DSA4299"] = [DSA4199];
preclusionsMap["DSA5102"] = [CS5339];
preclusionsMap["DSC2008"] = [ST1131, ST1232, ST2334];
preclusionsMap["DSC3214"] = [IE2110];
preclusionsMap["EC1101E"] = [BSP1005, BSP1703, RE1704];
preclusionsMap["EC2102"] = [BSP2001, BSE3701];
preclusionsMap["EC2104"] = [MA1101R, MA1102R, MA1505, MA1506, MA1507, MA1508, MA1511, MA1512, MA1513, MA1521];
preclusionsMap["EC3303"] = [ST3131];
preclusionsMap["EC3312"] = [MA4264];
preclusionsMap["EC2204"] = [ACC1002, ACC1002X, ACC1701, ACC1701X];
preclusionsMap["EC2303"] = [ST1131, ST1232, ST2334, MA2216, DSC1007, BT1101, SA4101, SA4102, SA4104, SA4105, SA4106, SA4107, SA4108];
preclusionsMap["EC5104"] = [EC5210, EC5311];
preclusionsMap["EE1111A"] = [EE1111, EG1111, EE1111B];
preclusionsMap["EE2011E"] = [TEE2011];
preclusionsMap["EE2012"] = [ST2334];
preclusionsMap["EE2023"] = [EE2023E, CG2023, TEE2023];
preclusionsMap["EE2023E"] = [EE2009E, EE2010E, TEE2023];
preclusionsMap["EE2026"] = [EE2020];
preclusionsMap["EE2027"] = [EE2021, CG2027];
preclusionsMap["EE2028"] = [EE2024, CG2028];
preclusionsMap["EE2111A"] = [EG1112, ME2104, CG1111, EE1112];
preclusionsMap["EE3031"] = [TR3001, EE3001, MT4003];
preclusionsMap["EE3031E"] = [TM4209, EE3001E, TEE3031];
preclusionsMap["EE3104C"] = [EE3104E, TEE3104];
preclusionsMap["EE3104E"] = [TEE3104];
preclusionsMap["EE3131C"] = [EE3103];
preclusionsMap["EE3131E"] = [EE3103E, TEE3131];
preclusionsMap["EE3331C"] = [EE2010];
preclusionsMap["EE3331E"] = [EE2010E, TEE3331];
preclusionsMap["EE3207E"] = [TEE3207];
preclusionsMap["EE3408C"] = [EE3408E, TEE3408];
preclusionsMap["EE3408E"] = [TEE3408];
preclusionsMap["EE3431C"] = [EE3406, EE2004, PC3235];
preclusionsMap["EE3501E"] = [TEE3501];
preclusionsMap["EE4001"] = [CG4001];
preclusionsMap["EE4002D"] = [EE3032, EG3301R];
preclusionsMap["EE4002R"] = [EE4001, EG4301, CG4001];
preclusionsMap["EE4031"] = [MT5001, MT5010];
preclusionsMap["EE4101E"] = [TEE4101];
preclusionsMap["EE4112"] = [EE4112E, TEE4112];
preclusionsMap["EE4112E"] = [TEE4112];
preclusionsMap["EE4204"] = [EE3204, EE4204E, TEE3204, TEE4204, EE5310, EE6310];
preclusionsMap["EE4204E"] = [CS2105, CS3103, TEE3204, EE4204, TEE4204];
preclusionsMap["EE4211"] = [EE4802, CS3244, IT3011];
preclusionsMap["EE4210"] = [EE4210E, TEE4210];
preclusionsMap["EE4210E"] = [TEE4210, TIC2501];
preclusionsMap["EE4212"] = [CS4243];
preclusionsMap["EE4214E"] = [TEE4214, TIC2401];
preclusionsMap["EE4303"] = [EE3302, EE3302E, TEE3302, TEE4303];
preclusionsMap["EE4303E"] = [TEE3302, EE3302E, TEE4303];
preclusionsMap["EE4407"] = [EE3407, EE3407E, TEE3407, TEE4407];
preclusionsMap["EE4407E"] = [TEE3407, EE3407E, TEE4407];
preclusionsMap["EE4409"] = [EE3409];
preclusionsMap["EE4415E"] = [TEE4415];
preclusionsMap["EE4435"] = [TEE4435, EE4435E];
preclusionsMap["EE4435E"] = [EE4408E, EE4412E, TEE4435];
preclusionsMap["EE4436"] = [EE4411, EE4411E, EE4436E, TEE4436];
preclusionsMap["EE4436E"] = [EE4411E, TEE4436];
preclusionsMap["EE4437"] = [EE4401];
preclusionsMap["EE4438"] = [EE4432];
preclusionsMap["EE4503"] = [EE2025, EE3501E, TEE3501];
preclusionsMap["EE4704"] = [CS4243, EE3206, TEE3206, TEE4704];
preclusionsMap["EE4802"] = [EE4211, CS3244, IT3011];
preclusionsMap["EE5001"] = [EE5003];
preclusionsMap["EE5002"] = [EE5002];
preclusionsMap["EE5003"] = [EE5001];
preclusionsMap["EE5023"] = [EE5132];
preclusionsMap["EE5024"] = [EE5132];
preclusionsMap["EE5061"] = [EE5111, EE6111];
preclusionsMap["EE5064"] = [EE5106, ME5402];
preclusionsMap["EE5101"] = [MCH5201, ME5401];
preclusionsMap["EE5103"] = [ME5403, MCH5103, TD5241];
preclusionsMap["EE5104"] = [EE6104];
preclusionsMap["EE5106"] = [MCH5209, ME5402];
preclusionsMap["EE5110"] = [EE6110, EE5062];
preclusionsMap["EE5111"] = [EE5060, EE5061];
preclusionsMap["EE5132"] = [EE5406, EE5913, EE5023, EE5024];
preclusionsMap["EE5134"] = [EE5912, EE6134];
preclusionsMap["EE5135"] = [EE6135];
preclusionsMap["EE5137"] = [EE5306];
preclusionsMap["EE5138"] = [EE6138];
preclusionsMap["EE5434"] = [EE5515, EE5516, EE5432R];
preclusionsMap["EE5439"] = [EE6439, EE5520];
preclusionsMap["EE5440"] = [EE4433, EE5202];
preclusionsMap["EE5703"] = [MCH5203];
preclusionsMap["EE5731"] = [EE6904];
preclusionsMap["EE5902"] = [TD5180A, CS5222, CS5223, CS4223];
preclusionsMap["EE5903"] = [EE4214, MCH5205, TD5103, CS5270, CS5250];
preclusionsMap["EE5904"] = [ME5404, MCH5202];
preclusionsMap["EE5907"] = [EE5026, EE5027];
preclusionsMap["EE5934"] = [EE6934];
preclusionsMap["EE6104"] = [EE5104];
preclusionsMap["EE6110"] = [EE5110];
preclusionsMap["EE6138"] = [EE5138];
preclusionsMap["EE6439"] = [EE5439, EE5520];
preclusionsMap["EE6934"] = [EE5934];
preclusionsMap["EG3301R"] = [ESP3902, ESP3903, BN2203, BN3101, CG3002, EE3001, EE3031, EE3032, IE3100M, ME3101, ME3102, ESE4501, MLE3103, MLE4102, EG3301];
preclusionsMap["EG3611A"] = [EG3601, EG3611, EG3602, EG3612];
preclusionsMap["EG3611"] = [EG3601, EG3602, EG3612];
preclusionsMap["EG4301"] = [ESP4901, BN4101R, CN4118R, CG4001, EE4001, IE4100, ME4101, CE4104, ESE4502, MLE4101, BN4101, CG4003, CN4118, EE4002R, ESE4502R, IE4100R, ME4101A, MLE4101A];
preclusionsMap["ENV1202"] = [SP1202];
preclusionsMap["ES1103"] = [ES1102];
preclusionsMap["ES1531"] = [IEM1201, UTW1001, ES2531, GEK1549, GET1021, FAS1101, ES1601];
preclusionsMap["ES1541"] = [SP1203, ENV1202, SP2171, SP1541, UTW1001, UWC2101, ES1601];
preclusionsMap["ES1601"] = [CS2101, IS2101, ES2331, ES2002, ES2007D, SP1541];
preclusionsMap["ES2002"] = [MNO2706, IS2101, ES2007D, ES1601, UWC2101];
preclusionsMap["ES2007D"] = [CS2301, ES2002, IS2101, CS2101, CG1413, ES1601];
preclusionsMap["ES2531"] = [IEM1201, UTW1001, ES1531, GEK1549, GET1021, ES1601];
preclusionsMap["ES2660"] = [GET1006, GEK1901];
preclusionsMap["ESP3902"] = [ESP3901];
preclusionsMap["ESP3903"] = [ESP3901];
preclusionsMap["FAS1101"] = [ES1531, GEK1549, GET1021, ES2531, ES1501];
preclusionsMap["FIN2004"] = [CS2251, EC3209, EC3333, BK2004, BZ2004, BH2004, FNA2004];
preclusionsMap["FIN2704"] = [FIN2004];
preclusionsMap["FIN3117"] = [FNA3117, FE5105];
preclusionsMap["FIN3118"] = [BH3118, BZ3305, FNA3118];
preclusionsMap["FIN3703"] = [FIN3103];
preclusionsMap["FIN3713"] = [FIN3117];
preclusionsMap["FIN3714"] = [FIN3118];
preclusionsMap["FIN4112G"] = [FIN4112F];
preclusionsMap["FIN4761A"] = [FIN4112G];
preclusionsMap["FIN4761D"] = [FIN4112L];
preclusionsMap["GEK1531"] = [GET1004];
preclusionsMap["GEK1549"] = [IEM1201, UTW1001, ES1531, GET1021, ES1601];
preclusionsMap["GEM1536"] = [GET1020, UTC1102B];
preclusionsMap["GEQ1917"] = [GEM1917];
preclusionsMap["GET1004"] = [GEK1531];
preclusionsMap["GET1020"] = [GEM1536, UTC1102B];
preclusionsMap["GET1021"] = [IEM1201, UTW1001, ES1531, GEK1549, ES1601];
preclusionsMap["IE2100"] = [DBA3711];
preclusionsMap["IE2110"] = [DBA3701, MA2215, MA3236];
preclusionsMap["IE4100R"] = [IE4102];
preclusionsMap["IE4102"] = [IE4100R];
preclusionsMap["IFS4201"] = [IFS4205, CS3205];
preclusionsMap["IFS4205"] = [CS3205];
preclusionsMap["IS2101"] = [ES2002, ES2007D, CS2101, CS2103T, ES1601];
preclusionsMap["IS3103"] = [IS3101];
preclusionsMap["IS3106"] = [CS3226];
preclusionsMap["IS4100"] = [CS5212, IS5110];
preclusionsMap["IS4103"] = [IS3102];
preclusionsMap["IS4151"] = [IS4150, IS5451, SMA5508, SG5233];
preclusionsMap["IS4233"] = [CS4259];
preclusionsMap["IS5451"] = [IS4151, IS4150, SMA5508, SG5233];
preclusionsMap["CS3254"] = [CS3254];
preclusionsMap["IT2002"] = [CS2102];
preclusionsMap["IT3010"] = [BT2102, CS2102];
preclusionsMap["IT3011"] = [CS3244, BT4240];
preclusionsMap["LSM1106"] = [LSM1101];
preclusionsMap["LSM1401"] = [LSM1101];
preclusionsMap["MA1101R"] = [EG1401, EG1402, MA1101, MA1311, MA1506, MA1508];
preclusionsMap["MA1102R"] = [EE1401, EE1461, EG1401, CE1402, MA1102, MA1312, MA1505, MA1507, MA1521];
preclusionsMap["MA1301"] = [MA1101R, MA1102R, MA1505, MA1506, MA1507, MA1508, MA1521, MA1311, MA1312, MA1421];
preclusionsMap["MA1312"] = [MA1102R, MA1505, MA1521, MA1511];
preclusionsMap["MA1421"] = [MA1102R, MA1312, MA1505, MA1506, MA1507, MA1521];
preclusionsMap["MA1505"] = [MA1102R, MA1312, MA1507, MA1521, MA2311, MA2501];
preclusionsMap["MA1507"] = [MA1102R, MA1505, MA1511, MA1512, MA1521, MA2104, MA2311];
preclusionsMap["MA1508"] = [MA1101R, MA1311, MA1506, MA1513];
preclusionsMap["MA1511"] = [MA1102R, MA1312, MA1505, MA1506, MA1507, MA1521, MA2311, MA2501, EE1461, PC2134, PC2174];
preclusionsMap["MA1512"] = [MA1506, MA1507, EE1461, PC2134, PC2174];
preclusionsMap["MA1513"] = [MA1101R, MA1311, MA1506, MA1508];
preclusionsMap["MA1521"] = [MA1102R, MA1312, MA1505, MA1507, MA2501];
preclusionsMap["MA2101"] = [MA2201, MA2203, MQ2201, MQ2101, MQ2203];
preclusionsMap["MA2104"] = [MA1104, MA2311, MA1507];
preclusionsMap["MA2108"] = [MA2108S, MA2311];
preclusionsMap["MA2108S"] = [MA2108, MA2206, MA2208, MA2221, MA2311, MQ2202, MQ2102, MQ2203, CN2401, EE2401, ME2492];
preclusionsMap["MA2202"] = [MA3250, MQ3201];
preclusionsMap["MA2213"] = [CE2407, ME3291, CN3421, CN3411, DSA2102];
preclusionsMap["MA2216"] = [ST2334, CE2407];
preclusionsMap["MA2311"] = [MA1104, MA2104, MA1505, MA1507, MA1511, MA2108, MA2108S];
preclusionsMap["MA3110"] = [MA2118, MA2205, MQ3202, MA3110S, ST2236];
preclusionsMap["MA3110S"] = [MA2118, MA2205, MQ3202, MA3110];
preclusionsMap["MA3111"] = [EE3002];
preclusionsMap["MA3209"] = [MA3213, MA3251];
preclusionsMap["MA3218"] = [MA2202, EE4103];
preclusionsMap["MA3220"] = [MA2312, PC2174];
preclusionsMap["MA3227"] = [ME3291];
preclusionsMap["MA3236"] = [DSC3214, DSN3701];
preclusionsMap["MA3238"] = [ST3236];
preclusionsMap["MA3252"] = [MQ2204, CS3252, IC2231, DSC3214, DSN3701, MA3235, BH3214];
preclusionsMap["MA3269"] = [QF2101];
preclusionsMap["MA4199"] = [XFS4199M];
preclusionsMap["MA4251"] = [MA3237, MA3239, GM3310, ST4238];
preclusionsMap["MA4254"] = [MA3235];
preclusionsMap["MA4264"] = [EC3312];
preclusionsMap["MA4269"] = [MA3245, MA4257];
preclusionsMap["MA5455"] = [ME4233];
preclusionsMap["MA4270"] = [CS5339, DSA5102];
preclusionsMap["MA4271"] = [MA3215];
preclusionsMap["ME2104"] = [EG1112];
preclusionsMap["ME2142"] = [ME2142E];
preclusionsMap["ME2142E"] = [TM3142, TME2142];
preclusionsMap["ME5401"] = [MCH5201, EE5101];
preclusionsMap["ME5402"] = [MCH5209, EE5106];
preclusionsMap["ME5403"] = [EE5103, MCH5103, TD5241];
preclusionsMap["ME5404"] = [EE5904, MCH5202];
preclusionsMap["MKT1003"] = [EC3230, EC2210, CS3261, IC3243, PR4201, BK2003, BZ1003, BH1003, MKT1003X];
preclusionsMap["MKT1003X"] = [EC3230, EC2210, CS3261, IC3243, PR4201, BK2003, BZ1003, BH1003, MKT1003];
preclusionsMap["MKT1705"] = [MKT1003, MKT1003X];
preclusionsMap["MKT4812"] = [MKT4415C, MKT4420];
preclusionsMap["MLE4101A"] = [MLE4101, MLE4101N];
preclusionsMap["MNO2706"] = [ES2002];
preclusionsMap["NM2207"] = [CS1010];
preclusionsMap["PC1141"] = [PC1431, PC1433];
preclusionsMap["PC1142"] = [PC1431];
preclusionsMap["PC1143"] = [PC1432];
preclusionsMap["PC1144"] = [PC1432];
preclusionsMap["PC1221"] = [PC1141, PC1142, PC1431];
preclusionsMap["PC1222"] = [PC1143, PC1144, PC1432];
preclusionsMap["PC1431"] = [PC1141, PC1142, PC1433];
preclusionsMap["PC1432"] = [PC1143, PC1144]
preclusionsMap["PC1433"] = [PC1141, PC1431];
preclusionsMap["PC2020"] = [PC2131, PC2232];
preclusionsMap["PC2130"] = [PC2130B];
preclusionsMap["PC2130B"] = [PC2130];
preclusionsMap["PC2133"] = [PC3235];
preclusionsMap["PC2134"] = [MA1511, MA1512];
preclusionsMap["PC3231"] = [ESP2104];
preclusionsMap["PC3235"] = [EE3406, PC2133];
preclusionsMap["PR4201"] = [BH1003, MKT1003, MKT1003X, CS3261];
preclusionsMap["RE1704"] = [EC1101E];
preclusionsMap["RE3701"] = [RE3104];
preclusionsMap["RE3704"] = [RE2106];
preclusionsMap["SP1541"] = [SP1203, ENV1202, SP2171, ES1541, UTW1001, UWC2101, ES1601];
preclusionsMap["ST1131"] = [ST1232, ST2334, CE2407, CN3421, EE2231, EC2303, PR2103, DSC2008];
preclusionsMap["ST1232"] = [ST1131, ST2334, CE2407, CN3421, EC2231, EC2303, PR2103, DSC2008];
preclusionsMap["ST2334"] = [ST1131, ST1232, MA2216, CE2407, EC2231, EC2303, PR2103, DSC2008];
preclusionsMap["ST3131"] = [ST2335, EC3303];
preclusionsMap["ST3236"] = [MA3238];
preclusionsMap["ST3248"] = [ST4240];
preclusionsMap["ST4238"] = [MA4251];
preclusionsMap["ST4248"] = [ST4240];
preclusionsMap["TCE2407"] = [CE2407];
preclusionsMap["TCE4104"] = [CE4104];
preclusionsMap["TE2002"] = [TEE2002, TM2401, TME2401];
preclusionsMap["TE2003"] = [TE2401, TEE2003];
preclusionsMap["TE2101"] = [TE1122, TEE2101, TIC1001];
preclusionsMap["TEE2002"] = [TE2002, TM2401, TME2401];
preclusionsMap["TEE2003"] = [TE2401, TE2003];
preclusionsMap["TEE2011"] = [EE2011E];
preclusionsMap["TEE2023"] = [EE2009E, EE2010E, EE2023E];
preclusionsMap["TEE2026"] = [EE2020E, TEE2020];
preclusionsMap["TEE2027"] = [EE2004E, EE2005E, EE2021E, TEE2021];
preclusionsMap["TEE2028"] = [EE2007E, EE2024, TEE2024];
preclusionsMap["TEE2101"] = [TE1122, TE2101, TIC1001];
preclusionsMap["TEE3031"] = [TM4209, TME4209, EE3001E, EE3031E];
preclusionsMap["TEE3104"] = [EE3104E];
preclusionsMap["TEE3131"] = [EE3103E, EE3131E];
preclusionsMap["TEE3207"] = [EE3207E];
preclusionsMap["TEE3331"] = [EE2010E, EE3331E];
preclusionsMap["TEE3408"] = [EE3408E];
preclusionsMap["TEE3501"] = [EE3501E];
preclusionsMap["TEE4101"] = [EE4101E];
preclusionsMap["TEE4112"] = [EE4112E];
preclusionsMap["TEE4204"] = [CS2105, CS3103, EE3204, TEE3204, EE4204];
preclusionsMap["TEE4210"] = [EE4210, TIC2501];
preclusionsMap["TEE4214"] = [EE4214E, TIC2401];
preclusionsMap["TEE4303"] = [EE3302E, EE4303E, TEE3302];
preclusionsMap["TEE4407"] = [EE3407E, TEE3407, EE4407E];
preclusionsMap["TEE4415"] = [EE4415E];
preclusionsMap["TEE4435"] = [EE4408E, EE4412E, EE4435E];
preclusionsMap["TEE4436"] = [EE4411E, EE4436E];
preclusionsMap["TG1401"] = [TE2102, TM1401, TTG1401];
preclusionsMap["TIC1001"] = [TE2101, TEE2101];
preclusionsMap["TIC2401"] = [EE4214E, TEE4214];
preclusionsMap["TIC2501"] = [TEE4210, EE4210];
preclusionsMap["TM2401"] = [TE2002, TC2401, TC1402, TM1402, TME2401];
preclusionsMap["TME2142"] = [TM3142, ME2142E];
preclusionsMap["TME2401"] = [TE2002, TEE2002, TC2401, TC1402, TM1402];
preclusionsMap["TTG1401"] = [TE2102, TM1401, TG1401];
preclusionsMap["UTC1102B"] = [GEM1536, GET1020];
preclusionsMap["UTW1001D"] = [NM1101E];
preclusionsMap["XFS4199M"] = [MA4199];

const combine = (list) => {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    let temp = list.filter(x => !res.includes(x));
    res = res.concat(temp);
  }
  return res;
};
const geh = [];
const ges = [];
const get = [];
const iem1 = [UTW1001A, UTW1001B, UTW1001C, UTW1001D, UTW1001E, UTW1001F, UTW1001G, UTW1001H, UTW1001S, UTW1001W, UTW1001Z];
const iem2 = [UTW2001H, UTW2001J, UTW2001M, UTW2001P, UTW2001Q, UTW2001R, UTW2001W, UTW2001Z];
const cp3000 = [CP3106, CP3208, CP3209];
const cp4000 = [CP4101, CP4106];
const cpMods = cp3000.concat(cp4000);
const cs1000 = [CS1010, CS1010S, CS1010X, CS1010J, CS1010E, CS1010XCP, CS1010FC, CS1020, CS1020E, CS1101S, CS1104, CS1231, CS1231S];
const cs2000 = [CS2010, CS2020, CS2030, CS2030S, CS2040, CS2040C, CS2040S, CS2100, CS2101, CS2102, CS2102S, CS2103, CS2103T, CS2104, CS2105, CS2106, CS2107, CS2108, CS2113, CS2113T, CS2220, CS2301, CS2305S];
const cs3000 = [CS3103, CS3201, CS3202, CS3203, CS3205, CS3208, CS3210, CS3211, CS3213, CS3214, CS3215, CS3216, CS3217, CS3219, CS3220, CS3223, CS3230, CS3233, CS3234, CS3235, CS3236, CS3237, CS3240, CS3241, CS3242, CS3243, CS3244, CS3245, CS3246, CS3247, CS3281, CS3282, CS3283, CS3284];
const cs4000 = [CS4101, CS4201, CS4203, CS4211, CS4212, CS4215, CS4218, CS4220, CS4221, CS4222, CS4224, CS4225, CS4226, CS4230, CS4231, CS4232, CS4234, CS4236, CS4238, CS4239, CS4240, CS4242, CS4243, CS4244, CS4246, CS4247, CS4248, CS4249, CS4257, CS4261, CS4268, CS4269, CS4276, CS4277, CS4278, CS4330, CS4342, CS4347, CS4350, CS5215, CS5218, CS5219, CS5222, CS5223, CS5224, CS5228, CS5229, CS5230, CS5231, CS5232, CS5233, CS5234, CS5236, CS5237, CS5238, CS5239, CS5240, CS5242, CS5246, CS5250, CS5260, CS5272, CS5321, CS5322, CS5330, CS5331, CS5332, CS5339, CS5340, CS5344, CS5346, CS5421, CS5422, CS5424, CS5439, CS5425, CS5446, CS5476, CS5477, CS5478, CS6101, CS6203, CS6207, CS6208, CS6210, CS6211, CS6213, CS6215, CS6219, CS6231, CS6234, CS6240, CS6244, CS6283];
const ifsMods = [IFS4101, IFS4102, IFS4103, IFS4205];
const is3000 = [IS3101, IS3102, IS3103];
const is4000 = [IS4102, IS4231, IS4240];
const ee3000 = [EE3001, EE3001E, EE3031, EE3031E, EE3032, EE3103, EE3103E, EE3104C, EE3104E, EE3131C, EE3131E, EE3204, EE3204E, EE3206, EE3206E, EE3207E, EE3208, EE3302, EE3302E, EE3305, EE3331C, EE3331E, EE3406, EE3407, EE3407E, EE3408C, EE3408E, EE3409, EE3431C, EE3501E, EE3506C, EE3731C, EE3801];
const ee4000 = [EE4001, EE4002D, EE4002R, EE4031, EE4032, EE4101, EE4101E, EE4103, EE4104, EE4112, EE4112E, EE4204, EE4204E, EE4205, EE4210, EE4210E, EE4211, EE4212, EE4214, EE4214E, EE4218, EE4302, EE4303, EE4303E, EE4305, EE4306, EE4307, EE4308, EE4401, EE4407, EE4407E, EE4408E, EE4409, EE4411, EE4411E, EE4412E, EE4415, EE4415E, EE4432, EE4434, EE4435, EE4435E, EE4436, EE4436E, EE4437, EE4438, EE4501, EE4502, EE4503, EE4505, EE4511, EE4603, EE4604, EE4704, EE4802, EE5026, EE5027, EE5135, EE5310, EE5518, EE5518R, EE5903, EE5904, EE5904R, EE5907, EE6135, EE6310];
const bzaListA3000 = [DBA3712, IE3120, IS3240];
const bzaListA4000 = [BT4013, BT4016, BT4211, BT4212, DBA4811, IS4241, IS4250, MKT4812];
const bzaListA = bzaListA3000.concat(bzaListA4000);
const bzaListB3000 = [IE2110, DBA3701, CS3244, DBA3803, ST3131];
const bzaListB4000 = [BSE4711, BT4012, BT4015, BT4221, BT4222, BT4240, IS4241, IE4210, ST4245];
const bzaListB = bzaListB3000.concat(bzaListB4000);
const bzaListC3000 = [IS3221, IS3261];
const bzaListC4000 = [BT4014, IS4228, IS4302];
const bzaListC = bzaListC3000.concat(bzaListC4000);
const cegcnBreadth = [CS2107, CS3103, EE3131C];
const cegcnDepth = [CS4222, CS4226, EE4210, CS5223, CS5321, EE5135];
const cegecBreadth = [CG3207, CS2107, CS3211, EE3731C];
const cegecDepth = [CS4222, CS4223, EE4218, EE4415, CS5272, EE5903];
const cegisBreadth = [CS3243, CS3244, EE3331C];
const cegisDepth = [CS4244, CS4246, CS4248, EE4305, EE4308, CS5242, CS5339, EE5904, EE5907];
const cegidmBreadth = [CS2108, CS3240, CS3241, CS3242, CS3247, CS3249, EE3731C];
const cegidmDepth = [CS4240, CS4243, CS4247, CS4249, CS4347, CS4351, EE4212, EE4604, EE4704];
const ceglcBreadth = [CS2102, CS3210, CS3211, CS3230, CS3235];
const ceglcDepth = [CS3223, CS4211, CS4221, CS4223, CS4224, CS4231, EE4210, EE4218];
const cegsdBreadth = [CG3207, EE3104C, EE3408C];
const cegsdDepth = [CS4223, EE4104, EE4112, EE4218, EE4415, EE4505, EE5518];
const cegDepth = combine([cegecDepth, cegisDepth, cegidmDepth, ceglcDepth, cegsdDepth, cs4000, ee4000]);
const cegte = combine([cegDepth, cegcnBreadth, cegisBreadth, cegidmBreadth, ceglcBreadth, cegsdBreadth, cs3000, ee3000]);
const fosMods = [];
const maList2 = [MA2101, MA2101S, MA2101H, MA2104, MA2108, MA2108S, MA2118, MA2118H, MA2201, MA2202, MA2202S, MA2203, MA2205, MA2206, MA2208, MA2213, MA2214, MA2215, MA2216, MA2219, MA2221, PC2130, PC2132, ST2132, EC2101];
const maList3 = [MA3110, MA3110S, MA3111, MA3111S, MA3201, MA3205, MA3209, MA3213, MA3218, MA3220, MA3227, MA3233, MA3235, MA3236, MA3238, MA3250, MA3251, MA3252, MA3259, MA3264, MA3265, MA3269, MA3288, MA3289, MA3501, BSE3703, CS3230, CS3234, DSA3102, EC3101, EC3303, PC3130, PC3236, PC3238, ST3131, ST3236];
const maList4 = [MA4203, MA4207, MA4211, MA4221, MA4229, MA4230, MA4251, MA4254, MA4255, MA4257, MA4260, MA4261, MA4262, MA4264, MA4266, MA4268, MA4269, MA4269A, MA4270, MA4271, MA4273, CS4232, CS4234, CS4236, CS5230, CS5237, DSA4211, DSA4212, EC4301, EC5104, PC4248, PC4274, ST4238, ST4245];
const ma3 = [MA3110, MA3110S, MA3210, MA3111, MA3111S, MA3211, MA3211S, MA3201, MA3205, MA3209, MA3265];
const ma4 = [MA4203, MA4207, MA4221, MA4229, MA4262, MA4271, MA4273];
const am3a = [MA3220, MA3227, MA3233, MA3264, ST3131];
const am3b = [MA3236, MA3238, MA3252, MA3269, ST3131];
const am3 = combine([am3a, am3b]);
const am4a = [MA4229, MA4230, MA4255, MA4261, MA4268, MA4270];
const am4b = [MA4235, MA4254, MA4260, MA4264, MA4269, ST4245];
const am4 = am4a.concat(am4b);
const dsaListA = [DSA4211, DSA4212, DSA4264, DSA4266];
const dsaListB1 = [MA3236, MA3252, MA4270, ST3232, ST3233, ST3239, ST3240, ST3247, ST3248, ST4231, ST4234, ST4248];
const dsaListB2 = [CS3210, CS3223, CS3230, CS3243, CS4224, CS4225, CS4231, CS4234, CS4243, CS4248, CS5340, MA4230];
const dsaList4000 = [DSA4211, DSA4212, DSA4264, DSA4266, MA4270, ST4231, ST4234, ST4248, CS4224, CS4225, CS4231, CS4234, CS4243, CS4248, CS5340, MA4230];

const CHNL = {
  label: "Chinese Language",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CHNS = {
  label: "Chinese Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CNM = {
  label: "Communications and New Media",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ECON = {
  label: "Economics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ENGL = {
  label: "English Language",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ENGLIT = {
  label: "English Literature",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const GEO = {
  label: "Geography",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const GS = {
  label: "Global Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const HIS = {
  label: "History",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const JAPS = {
  label: "Japanese Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const MALS = {
  label: "Malay Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PHY = {
  label: "Philosophy",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PS = {
  label: "Political Science",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PSY = {
  label: "Psychology",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const SW = {
  label: "Social Work",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const SOCI = {
  label: "Sociology",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const SAS = {
  label: "South Asian Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const SEAS = {
  label: "Southeast Asian Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const TS = {
  label: "Theatre Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PPE = {
  label: "Philosophy, Political Science, and Economics Programme",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const AMS = {
  label: "American Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ENVS = {
  label: "Environmental Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const fassList = {
  label: "Faculty of Arts and Social Sciences",
  classes: "Major",
  requirement: [],
  value: {
    "Chinese Language": CHNL,
    "Chinese Studies": CHNS,
    "Communications and New Media": CNM,
    "Economics": ECON,
    "English Language": ENGL,
    "English Literature": ENGLIT,
    "Geography": GEO,
    "Global Studies": GS,
    "History": HIS,
    "Japanese Studies": JAPS,
    "Malay Studies": MALS,
    "Philosophy": PHY,
    "Political Science": PS,
    "Psychology": PSY,
    "Social Work": SW,
    "Sociology": SOCI,
    "South Asian Studies": SAS,
    "Southeast Asian Studies": SEAS,
    "Theatre Studies": TS,
    "Philosophy, Political Science, and Economics Programme": PPE,
    "American Studies": AMS,
    "Environmental Studies": ENVS
  }
};
const BBA = {
  label: "Business Administration (B.B.A)",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ACC = {
  label: "Business Administration (Accountancy)",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const bizList = {
  label: "School of Business",
  classes: "Major",
  requirement: [],
  value: {
    "Business Administration (B.B.A)": BBA,
    "Business Administration (Accountancy)": ACC
  }
};
const CSNone = {
  label: "None",
  requirement: [
    {
      mc: 4,
      list: [CS3203, CS3216, CS3281, CS3283]
    }, {
      mc: 4,
      list: [CS3203, CS3217, CS3282, CS3284]
    }
  ],
  value: null
};
const vonNeumann = {
  label: "von Neumann Programme",
  requirement: [
    {
      mc: 4,
      list: [CS2309]
    }, {
      mc: 4,
      list: [CS3216, CS3281]
    }, {
      mc: 4,
      list: [CS3217, CS3282]
    }
  ],
  value: null
};
const turing = {
  label: "Turing Programme",
  requirement: [
    {
      mc: 28,
       list: [CS2309, CP3208, CP3209, CP4101]
    }
  ],
  value: null
};
const CSAT = {
  label: "Algorithms & Theory",
  requirement: [
    {
      mc: 12,
      list: [CS3230, CS3236, CS4231, CS4232, CS4234]
    }, {
      mc: 4,
      list: [CS4231, CS4232, CS4234, CS4257, CS4261, CS4268, CS4269, CS4330, CS5230, CS5234, CS5236, CS5237, CS5238, CS5330]
    }
  ],
  value: null
};
const CSAI = {
  label: "Artificial Intelligence",
  requirement: [
    {
      mc: 12,
      list: [CS3243, CS3244, CS4243, CS4244, CS4246, CS4248]
    }, {
      mc: 4,
      list: [CS4243, CS4244, CS4246, CS4248, CS4220, CS4261, CS4269, CS4277, CS4278, CS5215, CS5228, CS5242, CS5260, CS5340, CS5339]
    }
  ],
  value: null
};
const CSCGG = {
  label: "Computer Graphics and Games",
  requirement: [
    {
      mc: 12,
      list: [CS3241, CS3242, CS3247, CS4247, CS4350]
    }, {
      mc: 4,
      list: [CS4247, CS4350, CS4240, CS4243, CS4249, CS4351, CS5237, CS5240, CS5343, CS5346]
    }
  ],
  value: null
};
const CSCS = {
  label: "Computer Security",
  requirement: [
    {
      mc: 12,
      list: [CS2107, CS3235, CS4236, CS4238, CS4239]
    }, {
      mc: 4,
      list: [CS4236, CS4238, CS4239, CS4257, CS4276, CS5231, CS5250, CS5321, CS5322, CS5331, CS5332, IFS4101, IFS4102, IFS4103]
    }
  ],
  value: null
};
const CSDS = {
  label: "Database Systems",
  requirement: [
    {
      mc: 12,
      list: [CS2102, CS3223, CS4221, CS4224, CS4225]
    }, {
      mc: 4,
      list: [CS4221, CS4224, CS4225, CS4220, CS5226, CS5228, CS5322]
    }
  ],
  value: null
};
const CSMIR = {
  label: "Multimedia Information Retrieval",
  requirement: [
    {
      mc: 12,
      list: [CS2108, CS3245, CS4242, CS4248, CS4347]
    }, {
      mc: 4,
      list: [CS4242, CS4248, CS4347, CS5246, CS5241]
    }
  ],
  value: null
};
const CSNDS = {
  label: "Networking and Distributed Systems",
  requirement: [
    {
      mc: 12,
      list: [CS2105, CS3103, CS4222, CS4226, CS4231]
    }, {
      mc: 4,
      list: [CS4222, CS4226, CS4231, CS4344, CS5223, CS5224, CS5229, CS5248, CS5321]
    }
  ],
  value: null
};
const CSPC = {
  label: "Parallel Computing",
  requirement: [
    {
      mc: 12,
      list: [CS3210, CS3211, CS4231, CS4223]
    }, {
      mc: 4,
      list: [CS4231, CS4223, CS5222, CS5223, CS5224, CS5239, CS5250]
    }
  ],
  value: null
};
const CSPL = {
  label: "Programming Languages",
  requirement: [
    {
      mc: 12,
      list: [CS2104, CS3211, CS4212, CS4215]
    }, {
      mc: 4,
      list: [CS4212, CS4215, CS4216, CS5232, CS5214, CS5215, CS5218]
    }
  ],
  value: null
};
const CSSE = {
  label: "Software Engineering",
  requirement: [
    {
      mc: 12,
      list: [CS2103, CS2103T, CS3219, CS4211, CS4218, CS4239]
    }, {
      mc: 4,
      list: [CS4211, CS4218, CS4239, CS5219, CS5232, CS5272]
    }
  ],
  value: null
};
const CS = {
  label: "Computer Sciences",
  classes: ["Special Programme", "Focus Area"],
  multi: [false, true],
  requirement: [
    {
      mc: 52,
      list: [CS1101S, CS1231S, CS2030, CS2040S, CS2100, CS2106, CS3230, IS1103, CS2101, ES2660, MA1521, MA1101R, ST2334]
    }, {
      mc: 4,
      list: [CS2103, CS2103T]
    }, {
      mc: 4,
      list: fosMods
    }, {
      mc: 28,
      list: [CP3106, CP4106].concat(cs2000).concat(cs3000).concat(cs4000).concat(ifsMods)
    }
  ],
  value: [
    {
      "None": CSNone,
      "von Neumann Programme": vonNeumann,
      "Turing Programme": turing
    }, {
      "Algorithms & Theory": CSAT,
      "Artificial Intelligence": CSAI,
      "Computer Graphics and Games": CSCGG,
      "Computer Security": CSCS,
      "Database Systems": CSDS,
      "Multimedia Information Retrieval": CSMIR,
      "Networking and Distributed Systems": CSNDS,
      "Parallel Computing": CSPC,
      "Programming Languages": CSPL,
      "Software Engineering": CSSE
    }
  ]
};
const IFSNone = {
  label: "None",
  requirement: [
    {
      mc: 4,
      list: [IFS4205, CS4238]
    }, {
      mc: 4,
      list: [IFS4205, IFS4103]
    }, 
  ],
  value: null
};
const IFSCEP = {
  label: "Co-operative Education Programme",
  requirement: [
    {
      mc: 32,
      list: [IFS4201, CP3880, IFS2200, IFS4202]
    }
  ],
  value: null
};
const IFS = {
  label: "Information Security",
  classes: ["Special Programme"],
  multi: [false],
  requirement: [
    {
      mc: 64,
      list: [CS1010, CS1231S, CS2040C, CS2100, CS2102, CS2105, CS2106, IS3103, CS2107, CS3235, IS4231, IS1103, CS2101, MA1101R, MA1521, ST2334]
    }, {
      mc: 4,
      list: [CS2113, CS2113T]
    }, {
      mc: 12,
      list: [CS3236, CS4236, MA4261, CS4238, CS4239, CS4257, CS4276, CS5231, CS5321, CS5322, CS5331, CS5332, IS4204, IFS4101, IFS4102, IFS4103, IS4233, IS4234, IS4302]
    }, {
      mc: 8,
      list: cp3000.concat(cp4000).concat(cs3000).concat(cs4000).concat(is3000).concat(is4000)
    }
  ],
  value: [
    {
      "None": IFSNone,
      "Co-operative Education Programme": IFSCEP
    }
  ]
};
const ISNone = {
  label: "None",
  requirement: [],
  value: null
};
const ISDI = {
  label: "Digital Innovation",
  requirement: [
    {
      mc: 12,
      list: [IS3240, IS3251, IS4261],
    }, {
      mc: 12,
      list: [IS3150, IS3261, IS4152, IS4204, IS4233, IS4242, IS4243, IS5002, IS5128]
    }
  ],
  value: null
};
const ISEC = {
  label: "Electronic Commerce",
  requirement: [
    {
      mc: 12,
      list: [IS3150, IS4151, IS4261]
    }, {
      mc: 12,
      list: [IS3240, IS3261, IS4228, IS4231, IS4242, IS4243]
    }
  ],
  value: null
};
const ISFT = {
  label: "Financial Technology",
  requirement: [
    {
      mc: 12,
      list: [IS4228, IS4302, IS4303]
    }, {
      mc: 12,
      list: [IS3221, IS4231, IS4233, IS4234, IS4242, IS4301, IS5002]
    }
  ],
  value: null
};
const IS = {
  label: "Information Systems",
  classes: ["Specialisation"],
  multi: [false],
  requirement: [
    {
      mc: 64,
      list: [CS1010J, CS1231, IS1103, IS2101, CS2030, CS2040, CS2102, CS2105, IS2102, IS2103, IS3103, IS3106, IS4100, IS4103, ST2334]
    }, {
      mc: 4,
      list: [MA1521, MA1312]
    }, {
      mc: 12,
      list: [CP4101, IS4010]
    }, {
      mc: 12,
      list: [IS4151, IS4228, IS4302, IS4303, IS4204, IS4234, IS4243, IS4250, IS4301, IS4152, IS4242, IS4241, IS4261, IS5002, IS5128, IFS4101, IS4231, IS4233]
    }, {
      mc: 24,
      list: [IS4151, IS4228, IS4302, IS4303, IS4204, IS4234, IS4243, IS4250, IS4301, IS4152, IS4242, IS4241, IS4261, IS5002, IS5128, IFS4101, IS4231, IS4233, IS3150, IS3240, IS3261, CS3240, IS3251, CS2107]
    }
  ],
  value: [
    {
      "None": ISNone,
      "Digital Innovation": ISDI,
      "Electronic Commerce": ISEC,
      "Financial Technology": ISFT
    }
  ]
};
const BZAFA = {
  label: "Financial Analytics",
  requirement: [
    {
      mc: 12,
      list: [BT4013, BT4016, IS4228]
    }, {
      mc: 12,
      list: [BT4012, BT4221, BT4222, IS4234, IS4302]
    }
  ],
  value: null
};
const BZANone = {
  label: "None",
  requirement: [
    {
      mc: 4,
      list: [BT4103]
    }
  ],
  value: null
};
const BZACEP = {
  label: "Co-operative Education Programme",
  requirement: [
    {
      mc: 36,
      list: [BT4240, BT2010, BT4010, BT4011]
    }
  ],
  value: null
};
const BZANone2 = {
  label: "None",
  requirement: [],
  value: null
};
const BZAMA = {
  label: "Marketing Analytics",
  requirement: [
    {
      mc: 12,
      list: [BT4211, BT4212, BT4222]
    }, {
      mc: 12,
      list: [BT4014, BT4015, BT4221, IS3240, IS4241]
    }
  ],
  value: null
};
const BZA = {
  label: "Business Analytics",
  classes: ["Special Programme", "Specialisation"],
  multi: [false, false],
  requirement: [
    {
      mc: 64,
      list: [BT1101, CS1010S, EC1301, IS1103, MA1521, MKT1705X, BT2101, BT2102, CS2030, CS2040, IS2101, ST2334, BT3102, BT3103, IS3103]
    }, {
      mc: 4,
      list: [MA1311, MA1101R]
    }, {
      mc:12,
      list: [BT4101, IS4010]
    }, {
      mc: 24,
      list: bzaListA.concat(bzaListB).concat(bzaListC)
    }, {
      mc: 8,
      list: bzaListA
    }, {
      mc: 8,
      list: bzaListC
    }, {
      mc: 20,
      list: bzaListA4000.concat(bzaListB4000).concat(bzaListC4000)
    }
  ],
  value: [
    {
      "None": BZANone,
      "Co-operative Education Programme": BZACEP
    }, {
      "None": BZANone2,
      "Financial Analytics": BZAFA,
      "Marketing Analytics": BZAMA
    }
  ]
};
const CEGNone = {
  label: "None",
  requirement: [
    {
      mc: 12,
      list: cegDepth
    }, {
      mc: 20,
      list: cegte
    }
  ],
  value: null
};
const CEGCN = {
  label: "Communications & Networking",
  requirement: [
    {
      mc: 12,
      list: cegcnDepth
    }, {
      mc: 20,
      list: cegcnDepth.concat(cegcnBreadth)
    }
  ],
  value: null
};
const CEGEC = {
  label: "Embedded Computing",
  requirement: [
    {
      mc: 12,
      list: cegecDepth
    }, {
      mc: 20,
      list: cegecDepth.concat(cegecBreadth)
    }
  ],
  value: null
};
const CEGIS = {
  label: "Intelligent Systems",
  requirement: [
    {
      mc: 12,
      list: cegisDepth
    }, {
      mc: 20,
      list: cegisDepth.concat(cegisBreadth)
    }
  ],
  value: null
};
const CEGIDM = {
  label: "Interactive Digital Media",
  requirement: [
    {
      mc: 12,
      list: cegidmDepth
    }, {
      mc: 20,
      list: cegidmDepth.concat(cegidmBreadth)
    }
  ],
  value: null
};
const CEGLC = {
  label: "Large-scale Computing",
  requirement: [
    {
      mc: 12,
      list: ceglcDepth
    }, {
      mc: 20,
      list: ceglcDepth.concat(ceglcBreadth)
    }
  ],
  value: null
};
const CEGSD = {
  label: "System-on-a-chip Design",
  requirement: [
    {
      mc: 12,
      list: cegsdDepth
    }, {
      mc: 20,
      list: cegsdDepth.concat(cegsdBreadth)
    }
  ],
  value: null
};
const CEG = {
  label: "Computer Engineering",
  classes: ["Concentration"],
  multi: [false],
  requirement: [
    {
      mc: 74,
      list: [CG2023, CG2027, CG2028, CG2271, CS1010, CS1231, CS2040C, CS2101, CS2113T, EE2026, EE4204, EG2401A, MA1508E, MA1511, MA1512, ST2334, CG1111, CG1112, CG4002]
    }, {
      mc: 4,
      list: [CG3207, CS3230]
    }
  ],
  value: [
    {
      "None": CEGNone,
      "Communications & Networking": CEGCN,
      "Embedded Computing": CEGEC,
      "Intelligent Systems": CEGIS,
      "Interactive Digital Media": CEGIDM,
      "Large-scale Computing": CEGLC,
      "System-on-a-chip Design": CEGSD,
    }
  ]
};
const socList = {
  label: "School of Computing",
  classes: "Major",
  requirement: [],
  value: {
    "Computer Sciences": CS,
    "Information Security": IFS,
    "Information Systems": IS,
    "Business Analytics": BZA,
    "Computer Engineering": CEG
  }
};
const DS = {
  label: "Dental Surgery",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const fodList = {
  label: "Faculty of Dentistry",
  classes: "Major",
  requirement: [],
  value: {
    "Dental Surgery": DS
  }
};
const ACH = {
  label: "Architecture",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ID = {
  label: "Industrial Design",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const LSA = {
  label: "Landscape Architecture",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PFM = {
  label: "Project & Facilities Management",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const RE = {
  label: "Real Estate",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const sdeList = {
  label: "School of Deisgn & Environment",
  classes: "Major",
  requirement: [],
  value: {
    "Architecture": ACH,
    "Industrial Design": ID,
    "Landscape Architecture": LSA,
    "Project & Facilities Managment": PFM,
    "Real Estate": RE
  }
};
const BME = {
  label: "Biomedical Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CME = {
  label: "Chemical Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CE = {
  label: "Civil Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const EEE = {
  label: "Electrical Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const EGS = {
  label: "Engineering Science",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ENVE = {
  label: "Environmental Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ISE = {
  label: "Industrial & Systems Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const MSE = {
  label: "Materials Science & Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const MCE = {
  label: "Mechanical Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const foeList = {
  label: "Faculty of Engineering",
  classes: "Major",
  requirement: [],
  value: {
    "Biomedical Engineering": BME,
    "Chemical Engineering": CME,
    "Civil Engineering": CE,
    "Electrical Engineering": EEE,
    "Engineering Science": EGS,
    "Environmental Engineering": ENVE,
    "Industrial & Systems Engineering": ISE,
    "Material Science & Engineering": MSE,
    "Mechanical Engineering": MCE
  }
};
const LAW = {
  label: "Laws",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const lawList = {
  label: "Faculty of Law",
  classes: "Major",
  requirement: [],
  value: {
    "Laws": LAW
  }
};
const MBBS = {
  label: "Medicine and Surgery (MBBS)",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const NURS = {
  label: "Nursing",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PCP = {
  label: "2-year Bachelor of Science (Nursing) Professional Conversion Programme",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const NP = {
  label: "Nursing Practice",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const yllList = {
  label: "Yong Loo Lin School of Medicine",
  classes: "Major",
  requirement: [],
  value: {
    "Medicine and Surgery (MBBS)": MBBS,
    "Nursing": NURS,
    "2-year Bachelor of Science (Nursing) Professional Conversion Programme": PCP,
    "Nursing Practice": NP
  }
};
const CM = {
  label: "Chemistry",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CB = {
  label: "Computational Biology",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const FST = {
  label: "Food Science and Technology",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const DSA = {
  label: "Data Science and Analytics",
  classes: [],
  multi: [],
  requirement: [
    {
      mc: 52,
      list: [CS1010, DSA1101, MA1101R, MA1102R, CS2040, DSA2101, DSA2102, MA2311, ST2132, CS3244, DSA3101, DSA3102, ST3131]
    }, {
      mc: 4,
      list: [ST2131, MA2216]
    }, {
      mc: 16,
      list: [DSA4199, DSA4299]
    }, {
      mc: 8,
      list: dsaListA
    }, {
      mc: 8,
      list: dsaListB1
    }, {
      mc: 8,
      list: dsaListB2
    }, {
      mc: 16,
      list: dsaList4000
    }
  ],
  value: []
};
const LS = {
  label: "Life Sciences",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const MAhons = {
  label: "Bsc (Hons)",
  requirement: [
    {
      mc: 12,
      list: [MA4199]
    }, {
      mc: 12,
      list: ma4
    }, {
      mc: 20,
      list: combine([ma4, maList4])
    }, {
      mc: 44,
      list: combine([ma3, ma4, maList2, maList3, maList4])
    }
  ],
  value: null
};
const MAnon = {
  label: "Bsc",
  requirement: [
    {
      mc: 24,
      list: combine([ma3, maList2, maList3, maList4])
    }
  ],
  value: null
};
const MA = {
  label: "Mathematics",
  classes: ["Honours"],
  multi: [false],
  requirement: [
    {
      mc: 32,
      list: [CS1231, MA1101R, MA1102R, CS1010, MA2101, MA2104, MA2202, MA2216]
    }, {
      mc: 4,
      list: [MA2108, MA2108S]
    },{
      mc: 12,
      list: ma3
    }, {
      mc: 20,
      list: combine([ma3, maList3, maList4])
    }
  ],
  value: [
    {
      "Bsc (Hons)": MAhons,
      "Bsc": MAnon
    }
  ]
};
const AMhons = {
  label: "Bsc (Hons)",
  requirement: [
    {
      mc: 12,
      list: [MA4199]
    }, {
      mc: 16,
      list: am4
    }, {
      mc: 20,
      list: maList4
    }, {
      mc: 44,
      list: maList2.concat(maList3).concat(maList4)
    }
  ],
  value: null
};
const AMnon = {
  label: "Bsc",
  requirement: [
    {
      mc: 24,
      list: maList2.concat(maList3).concat(maList4)
    }
  ],
  value: null
};
const AMNone = {
  label: "None",
  requirement: [],
  value: null
};
const AMMMDA = {
  label: "Mathematical Modelling and Data Analytics",
  requirement: [
    {
      mc: 12,
      list: am3a
    }, {
      mc: 16,
      list: am4a
    }
  ],
  value: null
};
const AMORFM = {
  label: "Operations Research and Financial Mathematics",
  requirement: [
    {
      mc: 12,
      list: am3b
    }, {
      mc: 16,
      list: am4b
    }
  ],
  value: null
};
const AM = {
  label: "Applied Mathematics",
  classes: ["Honours", "Specialisation"],
  multi: [false, false],
  requirement: [
    {
      mc: 32,
      list: [CS1231, MA1101R, MA1102R, CS1010, MA2101, MA2104, MA2213, MA2216]
    }, {
      mc: 4,
      list: [MA2108, MA2108S]
    }, {
      mc: 12,
      list: am3
    }, {
      mc: 20,
      list: maList3.concat(maList4)
    }
  ],
  value: [
    {
      "Bsc (Hons)": AMhons,
      "Bsc": AMnon
    }, {
      "None": AMNone,
      "Mathematical Modelling and Data Analytics": AMMMDA,
      "Operations Research and Financial Mathematics": AMORFM
    }
  ]
};
const PHS = {
  label: "Pharmaceutical Science",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PHYS = {
  label: "Physics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const QFhons = {
  label: "Bsc (Hons)",
  requirement: [
    {
      mc: 20,
      list: [QF4199, QF4102, MA4269]
    }, {
      mc: 12,
      list: [QF5210, FIN4711, FIN4761A, FIN4761D, MA4254, MA4255, MA4260, MA4264, ST4233, ST4245, MA5245, MA5248]
    }
  ],
  value: null
};
const QFnon = {
  label: "Bsc",
  requirement: [],
  value: null
};
const QF = {
  label: "Quantitative Finance",
  classes: ["Honours"],
  multi: [false],
  requirement: [
    {
      mc: 40,
      list: [CS1010, ACC1701, MA1101R, MA1102R, FIN2704, MA2213, MA2104, QF3101, MA3269, ST3131]
    }, {
      mc: 4,
      list: [ST2131, MA2216]
    }, {
      mc: 4,
      list: [MA2108, MA2108S]
    }, {
      mc: 8,
      list: [MA3220, MA3236, MA3252, MA3264]
    }, {
      mc: 8,
      list: [FIN3701, FIN3703, FIN3713, FIN3714]
    }
  ],
  value: [
    {
      "Bsc (Hons)": QFhons,
      "Bsc": QFnon
    }
  ]
};
const ST = {
  label: "Statistics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PHARM = {
  label: "Pharmacy",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const fosList = {
  label: "Faculty of Science",
  classes: "Major",
  requirement: [],
  value: {
    "Chemistry": CM,
    "Computational Biology": CB,
    "Food Science and Technology": FST,
    "Data Science and Analytics": DSA,
    "Life Sciences": LS,
    "Mathematics": MA,
    "Applied Mathematics": AM,
    "Pharmaceutical Science": PHS,
    "Physics": PHYS,
    "Quantitative Finance": QF,
    "Statistics": ST,
    "Pharmacy": PHARM,
    "Environmental Studies": ENVS
  }
};
const VLNP = {
  label: "Violin Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const VLAP = {
  label: "Viola Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CLP = {
  label: "Cello Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const DBP = {
  label: "Double Bass Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const FLTP = {
  label: "Flute Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const OBP = {
  label: "Oboe Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CLNP = {
  label: "Clarinet Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const BSNP = {
  label: "Bassoon Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const FHP = {
  label: "French Horn Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const TMPP = {
  label: "Trumpet Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const TMBP = {
  label: "Trombone Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const TBP = {
  label: "Tuba Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PCSP = {
  label: "Percussion Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const HPP = {
  label: "Harp Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const PNP = {
  label: "Piano Performance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const VC = {
  label: "Voice",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const CMP = {
  label: "Composition",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const AAS = {
  label: "Audio Arts and Sciences",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const MSC = {
  label: "Music and Society",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const MCP = {
  label: "Music, Collaboration and Production",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ystList = {
  label: "Yong SIew Toh Conservatory of Music",
  classes: "Major",
  requirement: [],
  value: {
    "Violin Performance": VLNP,
    "Viola Performance": VLAP,
    "Cello Performance": CLP,
    "Double Bass Performance": DBP,
    "Flute Performance": FLTP,
    "Oboe Performance": OBP,
    "Clarinet Performance": CLNP,
    "Bassoon Performance": BSNP,
    "French Horn Performance": FHP,
    "Trumpet Performance": TMPP,
    "Trombone Performance": TMBP,
    "Tuba Performance": TBP,
    "Percussion Performance": PCSP,
    "Harp Performance": HPP,
    "Piano Performance": PNP,
    "Voice": VC,
    "Composition": CMP,
    "Audio Arts and Sciences": AAS,
    "Music and Society": MSC,
    "Music, Collaboration and Production": MCP
  }
};
const primary = {
  label: "Faculty",
  classes: "Faculty",
  requirement: [],
  value: {
    "Faculty of Arts and Social Sciences": fassList,
    "School of Business": bizList,
    "School of Computing": socList,
    "Faculty of Dentistry": fodList,
    "School of Design & Environment": sdeList,
    "Faculty of Engineering": foeList,
    "Facutly of Law": lawList,
    "Yong Loo Lin School of Medicine": yllList,
    "Faculty of Science": fosList,
    "Yong Siew Toh Conservatory of Music": ystList
  }
};

const secondCHNL = {
  label: "Chinese Language",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondCHNS = {
  label: "Chinese Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondCNM = {
  label: "Communications and New Media",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondECON = {
  label: "Economics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondENGL = {
  label: "English Language",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondENGLIT = {
  label: "English Literature",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondGEO = {
  label: "Geography",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondGS = {
  label: "Global Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondHIS = {
  label: "History",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondJAPS = {
  label: "Japanese Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondMALS = {
  label: "Malay Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondPHY = {
  label: "Philosophy",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondPS = {
  label: "Political Science",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondPSY = {
  label: "Psychology",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondSW = {
  label: "Social Work",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondSOCI = {
  label: "Sociology",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondSAS = {
  label: "South Asian Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondSEAS = {
  label: "Southeast Asian Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondTS = {
  label: "Theatre Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondPPE = {
  label: "Philosophy, Political Science, and Economics Programme",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondAMS = {
  label: "American Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondENVS = {
  label: "Environmental Studies",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const fassSecond = {
  label: "Faculty of Arts and Social Sciences",
  classes: "Major",
  requirement: [],
  value: {
    "Chinese Language": secondCHNL,
    "Chinese Studies": secondCHNS,
    "Communications and New Media": secondCNM,
    "Economics": secondECON,
    "English Language": secondENGL,
    "English Literature": secondENGLIT,
    "Geography": secondGEO,
    "Global Studies": secondGS,
    "History": secondHIS,
    "Japanese Studies": secondJAPS,
    "Malay Studies": secondMALS,
    "Philosophy": secondPHY,
    "Political Science": secondPS,
    "Psychology": secondPSY,
    "Social Work": secondSW,
    "Sociology": secondSOCI,
    "South Asian Studies": secondSAS,
    "Southeast Asian Studies": secondSEAS,
    "Theatre Studies": secondTS,
    "Philosophy, Political Science, and Economics Programme": secondPPE,
    "American Studies": secondAMS,
    "Environmental Studies": secondENVS
  }
};
const secondMNG = {
  label: "Management",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const bizSecond = {
  label: "School of Business",
  classes: "Major",
  requirement: [],
  value: {
    "Management": secondMNG
  }
};
const secondBZA = {
  label: "Business Analytics",
  classes: [],
  multi: [],
  requirement: [
    {
      mc: 4,
      list: [BT1101, DSC1007]
    }, {
      mc: 4,
      list: [CS2040, CS2040C]
    }, {
      mc: 4,
      list: [ST3131, BT4240]
    }, {
      mc: 24,
      list: [BT2101, BT2102, BT3102, BT3103, CS1010S, CS2030]
    }, {
      mc: 8,
      list: [BT4211, BT4212, BT4221, BT4222, IS3221, IS4241]
    }, {
      mc: 4,
      list: [ST2334, MA2216, ST2132]
    }
  ],
  value: []
};
const secondCS = {
  label: "Computer Science",
  classes: [],
  multi: [],
  requirement: [
    {
      mc: 4,
      list: [CS2040, CS2040C, CS2040S]
    }, {
      mc: 24,
      list: [CS1010, CS1231, CS2030, CS2100, CS2106, CS3230]
    }, {
      mc: 4,
      list: [CS2103, CS2103T]
    }, {
      mc: 4,
      list: [CS3201, CS3281, CS3216]
    }, {
      mc: 4,
      list: [CS3202, CS3282, CS3217]
    }, {
      mc: 8,
      list: [CS2102, CS2104, CS2105, CS2107, CS2108].concat(cs3000).concat(cs4000).filter(x => ![CS3230, CS3201, CS3202, CS3281, CS3282, CS3216, CS3217].includes(x))
    }, {
      mc: 4,
      list: cs3000.concat(cs4000).filter(x => ![CS3230, CS3201, CS3202, CS3281, CS3282, CS3216, CS3217].includes(x))
    }
  ],
  value: []
};
const secondISC1 = {
  label: "Group I: Data and Software Security",
  requirement: [
    {
      mc: 12,
      list: [CS2102, CS2113, CS4239]
    }
  ],
  value: null
};
const secondISC2 = {
  label: "Group II: Foundation of Information Security",
  requirement: [
    {
      mc: 12,
      list: [CS1231S, CS3236, CS4236]
    }
  ],
  value: null
};
const secondISC3 = {
  label: "Group III: Information Systems and Security Management",
  requirement: [
    {
      mc: 4,
      list: [IS1103, IS1103X]
    }, {
      mc: 8,
      list: [IS3103, IS4231]
    }
  ],
  value: null
};
const secondISC = {
  label: "Information Security",
  classes: ["Group"],
  multi: [false],
  requirement: [
    {
      mc: 4,
      list: [CS2040, CS2040C, CS2040S]
    }, {
      mc: 28,
      list: [CS1010, CS2100, CS2105, CS2106, CS2107, CS3235, IFS4205]
    }
  ],
  value: [
    {
      "Group I: Data and Software Security": secondISC1,
      "Group II: Foundation of Information Security": secondISC2,
      "Group III: Information Systems and Security Management": secondISC3
    }
  ]
};
const socSecond = {
  label: "School of Computing",
  classes: "Major",
  requirement: [],
  value: {
    "Business Analytics": secondBZA,
    "Computer Science": secondCS,
    "Information Security": secondISC
  }
};
const secondREF = {
  label: "Real Estate Finance",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const sdeSecond = {
  label: "School of Design & Environment",
  classes: "Major",
  requirement: [],
  value: {
    "Real Estate Finance": secondREF
  }
};
const secondID = {
  label: "Innovation & Design",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondSYSE = {
  label: "Systems Engineering",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const foeSecond = {
  label: "Faculty of Engineering",
  classes: "Major",
  requirement: [],
  value: {
    "Innovation & Design": secondID,
    "Systems Engineering": secondSYSE
  }
};
const secondPH = {
  label: "Public Health",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const sshSecond = {
  label: "Saw Swee Hock School of Public Health",
  classes: "Major",
  requirement: [],
  value: {
    "Public Health": secondPH
  }
};
const secondCM = {
  label: "Chemistry",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondDA = {
  label: "Data Analytics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondFS = {
  label: "Food Science",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondLS = {
  label: "Life Sciences",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondMA = {
  label: "Mathematics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondPHYS = {
  label: "Physics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondST = {
  label: "Statistics",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const fosSecond = {
  label: "Faculty of Science",
  classes: "Major",
  requirement: [],
  value: {
    "Chemistry": secondCM,
    "Data Analytics": secondDA,
    "Food Science": secondFS,
    "Life Sciences": secondLS,
    "Mathematics": secondMA,
    "Physics": secondPHYS,
    "Statistics": secondST
  }
};
const secondAAS = {
  label: "Audio Arts and Sciences",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const secondPC = {
  label: "Performance / Composition",
  classes: [],
  multi: [],
  requirement: [],
  value: []
};
const ystSecond = {
  label: "Yong Siew Toh Conservatory of Music",
  classes: "Major",
  requirement: [],
  value: {
    "Audio Arts and Sciences": secondAAS,
    "Performance / Composition": secondPC,
  }
};
const second = {
  label: "Faculty",
  classes: "Faculty",
  requirement: [],
  value: {
    "Faculty of Arts and Social Sciences": fassSecond,
    "School of Business": bizSecond,
    "School of Computing": socSecond,
    "School of Design & Environment": sdeSecond,
    "Faculty of Engineering": foeSecond,
    "Saw Swee Hock School of Public Health": sshSecond,
    "Faculty of Science": fosSecond,
    "Yong Siew Toh Conservatory of Music": ystSecond
  }
};

const minorAEco = {
  label: "Aquatic Ecology",
  requirement: [],
  value: null
};
const minorAHis = {
  label: "Art History",
  requirement: [],
  value: null
};
const minorAS = {
  label: "Asian Studies",
  requirement: [],
  value: null
};
const minorChnS = {
  label: "China Studies",
  requirement: [],
  value: null
};
const minorChnTrans = {
  label: "Chinese Translation",
  requirement: [],
  value: null
};
const minorCltS = {
  label: "Cultural Studies",
  requirement: [],
  value: null
};
const minorEngS = {
  label: "English Studies",
  requirement: [],
  value: null
};
const minorFlmS = {
  label: "Film Studies",
  requirement: [],
  value: null
};
const minorGndS = {
  label: "Gender Studies",
  requirement: [],
  value: null
};
const minorGIS = {
  label: "Geographical Inforamtion Systems",
  requirement: [],
  value: null
};
const minorGeoS = {
  label: "Geosciences",
  requirement: [],
  value: null
};
const minorGS = {
  label: "Global Studies",
  requirement: [],
  value: null
};
const minorHSS = {
  label: "Health and Social Sciences",
  requirement: [],
  value: null
};
const minorIMD = {
  label: "Interactive Media Development",
  requirement: [],
  value: null
};
const minorLangS = {
  label: "Language Studies",
  requirement: [],
  value: null
};
const minorRlgS = {
  label: "Religious Studies",
  requirement: [],
  value: null
};
const minorSTS = {
  label: "Science, Technology, and Society",
  requirement: [],
  value: null
};
const minorUbS = {
  label: "Urban Studies",
  requirement: [],
  value: null
};
const minorMNG = {
  label: "Management",
  requirement: [],
  value: null
};
const minorETN = {
  label: "Entrepreneurship",
  requirement: [],
  value: null
};
const minorAI = {
  label: "Artificial Intelligence",
  requirement: [
    {
      mc: 16,
      list: [CS1010, CS1231, CS2040, CS2040S, CS2040C, CS3243]
    }, {
      mc: 4,
      list: [CS3244, IT3011, ST3248]
    }, {
      mc: 4,
      list: [CS3244, IT3011, ST4248]
    }, {
      mc: 4,
      list: [CS4243, CS4244, CS4246, CS4248, EE4212]
    }
  ],
  value: null
};
const minorBZA = {
  label: "Business Analytics",
  requirement: [
    {
      mc: 4,
      list: [BT1101, DSC1007]
    }, {
      mc: 12,
      list: [BT2101, BT2102, CS1010]
    }, {
      mc: 8,
      list: [BT4211, BT4212, BT4221, BT4222, IS3221, IS4241]
    }
  ],
  value: null
};
const minorCS = {
  label: "Computer Science",
  requirement: [
    {
      mc: 4,
      list: [CS1010]
    }, {
      mc: 16,
      list: [CS1231, CS2030, CS2040S, CS2040C, CS2040, CS2100, CS2102, CS2103, CS2103T, CS2104, CS2105, CS2106, CS2107, CS2108]
    }, {
      mc: 4,
      list: cs3000.concat(cs4000)
    }
  ],
  value: null
};
const minorIFS = {
  label: "Information Security",
  requirement: [
    {
      mc: 8,
      list: [CS1010, CS2107]
    }, {
      mc: 4,
      list: [CS2040, CS2040C]
    }, {
      mc: 16,
      list: [IS1103, IS1103X, CS2100, CS2105, CS2106, CS3235, IS3103, IS4231]
    }, {
      mc: 4,
      list: [CS3235, IS3103, IS4231]
    }
  ],
  value: null
};
const minorIS = {
  label: "Information Systems",
  requirement: [
    {
      mc: 4,
      list: [CS1010]
    }, {
      mc: 4,
      list: [IS1103, IS1103X]
    }, {
      mc: 4,
      list: [IT1001, CS2030]
    }, {
      mc: 12,
      list: [IS2102, IS2103, IS3103, IS3150, IS3221, IS3240, IS3251, IS4204, IS4241, IS4261]
    }
  ],
  value: null
};
const minorAchS = {
  label: "Architectural Studies",
  requirement: [],
  value: null
};
const minorIMF = {
  label: "Infrastructure Management and Finance",
  requirement: [],
  value: null
};
const minorPMng = {
  label: "Project Management",
  requirement: [],
  value: null
};
const minorRE = {
  label: "Real Estate",
  requirement: [],
  value: null
};
const minorBE = {
  label: "Biomedical Engineering",
  requirement: [],
  value: null
};
const minorCvIfs = {
  label: "Civil Infrastructure",
  requirement: [],
  value: null
};
const minorDEg = {
  label: "Data Engineering",
  requirement: [],
  value: null
};
const minorEgMt = {
  label: "Engineering Materials",
  requirement: [],
  value: null
};
const minorSysEg = {
  label: "Systems Engineering",
  requirement: [],
  value: null
};
const minorPH = {
  label: "Public Health",
  requirement: [],
  value: null
};
const minorAnlChm = {
  label: "Analytical Chemistry",
  requirement: [],
  value: null
};
const minorBioPhy = {
  label: "Biophysics",
  requirement: [],
  value: null
};
const minorFM = {
  label: "Financial Mathematics",
  requirement: [],
  value: null
};
const minorFrS = {
  label: "Forensic Science",
  requirement: [],
  value: null
};
const minorLS = {
  label: "Life Sciences",
  requirement: [],
  value: null
};
const minorMA = {
  label: "Mathematics",
  requirement: [],
  value: null
};
const minorMdPhy = {
  label: "Medical Physics",
  requirement: [],
  value: null
};
const minorNanoS = {
  label: "Nanoscience",
  requirement: [],
  value: null
};
const minorPharS = {
  label: "Pharmaceutical Science",
  requirement: [],
  value: null
};
const minorPhy = {
  label: "Physics",
  requirement: [],
  value: null
};
const minorST = {
  label: "Statistics",
  requirement: [],
  value: null
};
const minorMS = {
  label: "Music and Society",
  requirement: [],
  value: null
};
const minor = {
  label: "Minor",
  classes: "Minor",
  requirement: [],
  value: {
    "Aquatic Ecology": minorAEco,
    "Art History": minorAHis,
    "Asian Studies": minorAS,
    "China Studies": minorChnS,
    "Chinese Translation": minorChnTrans,
    "Cultural Studies": minorCltS,
    "English Studies": minorEngS,
    "Film Studies": minorFlmS,
    "Gender Studies": minorGndS,
    "Geographical Information Systems": minorGIS,
    "Geosciences": minorGeoS,
    "Global Studies": minorGS,
    "Health and Social Sciences": minorHSS,
    "Interactive Media Development": minorIMD,
    "Language Studies": minorLangS,
    "Religious Studies": minorRlgS,
    "Science, Technology, and Society": minorSTS,
    "Urban Studies": minorUbS,
    "Management": minorMNG,
    "Entrepreneuship": minorETN,
    "Artificial Intelligence": minorAI,
    "Business Analytics": minorBZA,
    "Computer Science": minorCS,
    "Information Security": minorIFS,
    "Information Systems": minorIS,
    "Architectural Studies": minorAchS,
    "Infrastructure Management and Finance": minorIMF,
    "Project Management": minorPMng,
    "Real Estate": minorRE,
    "Biomedical Engineering": minorBE,
    "Civil Infrastructure": minorCvIfs,
    "Data Engineering": minorDEg,
    "Engineering Materials": minorEgMt,
    "Systems Engineering": minorSysEg,
    "Public Health": minorPH,
    "Analytical Chemistry": minorAnlChm,
    "Biophysics": minorBioPhy,
    "Financial Mathematics": minorFM,
    "Forensic Science": minorFrS,
    "Life Sciences": minorLS,
    "Mathematics": minorMA,
    "Medical Physics": minorMdPhy,
    "Nanoscience": minorNanoS,
    "Pharmaceutical Science": minorPharS,
    "Physics": minorPhy,
    "Statistics": minorST,
    "Music and Society": minorMS
  }
};

const notOnCampus = {
  label: "Not on campus",
  requirement: [
    {
      mc: 8,
      list: [GER1000, GEQ1000]
    }, {
      mc: 4,
      list: geh
    }, {
      mc: 4,
      list: ges
    }, {
      mc: 4,
      list: get
    }
  ],
  value: null
};
const USP = {
  label: "University Scholars Programme",
  requirement: [],
  value: null
};
const Tembu = {
  label: "Tembusu College",
  requirement: [
    {
      mc: 4,
      list: [GER1000]
    }, {
      mc: 4,
      list: [UTC1119, UTC1102H, UTC1102B, UTC1102U, UTC1120, UTC1102C, UTC1114, UTC1102R, UTC1112A, UTC1102S, UTC1102P, UTC1102G, UTC1117, UTC1112F, UTC1102E, UTC1102N, UTC1116, UTC1115, UTC1113, UTC1102M, UTC1112B, UTC1112G, UTC1118, UTC1102V]
    }, {
      mc: 4,
      list: iem1
    }, {
      mc: 4,
      list: iem2
    }, {
      mc: 4,
      list: [UTS2109, UTS2101, UTS2100, UTS2105, UTS2114]
    }, {
      mc: 4,
      list: [UTC2109, UTC2102, UTC2113, UTC2107, UTC2111, UTC2108, UTC2101]
    }
  ],
  value: null
};
const CAPT = {
  label: "College of Alice & Peter Tan",
  requirement: [
    {
      mc: 4,
      list: [GER1000]
    }, {
      mc: 4,
      list: iem1
    }, {
      mc: 4,
      list: iem2
    }
  ],
  value: null
};
const RC4 = {
  label: "Residential College 4",
  requirement: [
    {
      mc: 4,
      list: [GER1000]
    }, {
      mc: 4,
      list: iem1
    }, {
      mc: 4,
      list: iem2
    }
  ],
  value: null
};
const RVRC = {
  label: "Ridge View Residential College",
  requirement: [
    {
      mc: 12,
      list: [GER1000, GEQ1917, ES1601, WR1401]
    }, {
      mc: 4,
      list: geh
    }, {
      mc: 4,
      list: ges
    }, {
      mc: 4,
      list: get
    }
  ],
  value: null
};
const Yale = {
  label: "Yale-NUS College",
  requirement: [],
  value: null
};
const Hall = {
  label: "Hall",
  requirement: [
    {
      mc: 8,
      list: [GER1000H, GEQ1000H]
    }, {
      mc: 4,
      list: geh
    }, {
      mc: 4,
      list: ges
    }, {
      mc: 4,
      list: get
    }
  ],
  value: null
};
const Residence = {
  label: "PGP / UTown Residences",
  requirement: [
    {
      mc: 8,
      list: [GER1000, GEQ1000]
    }, {
      mc: 4,
      list: geh
    }, {
      mc: 4,
      list: ges
    }, {
      mc: 4,
      list: get
    }
  ],
  value: null
};
const residences = {
  label: "Residence",
  classes: "Residence",
  requirement: [],
  value: {
    "Not on campus": notOnCampus,
    "University Scholars Programme": USP,
    "Tembusu College": Tembu,
    "College of Alice & Peter Tan": CAPT,
    "Residential College 4": RC4,
    "Ridge View Residential College": RVRC,
    "Yale-NUS College": Yale,
    "Hall": Hall,
    "PGP / UTown Residences": Residence
  }
};

export default function Data() {
  return (
    <div>
      <Form
	moduleMap={moduleMap}
	prerequisitesMap={prerequisitesMap}
	preclusionsMap={preclusionsMap}
	primary={primary}
	second={second}
	minor={minor}
	residences={residences}
      />
    </div>
  );
}
