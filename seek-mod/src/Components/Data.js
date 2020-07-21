import React from 'react';

import Form from './Form';

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
const LSM2241 = {
  code: "LSM2241",
  name: "INtroductory Bioinformatics",
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
  name: "Exploring Sceince Communication through Popular Science",
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

let moduleMap = {};
moduleMap["BH1005"] = BH1005;
moduleMap["BK1008"] = BK1008;
moduleMap["BSP1005"] = BSP1005;
moduleMap["BSP1703"] = BSP1703;
moduleMap["BT1101"] = BT1101;
moduleMap["BT2101"] = BT2101;
moduleMap["BT2102"] = BT2102;
moduleMap["BT4221"] = BT4221;
moduleMap["BT4240"] = BT4240;
moduleMap["BT5110"] = BT5110;
moduleMap["BZ1005"] = BZ1005;
moduleMap["CE1402"] = CE1402;
moduleMap["CE2407"] = CE2407;
moduleMap["CG1108"] = CG1108;
moduleMap["CG1111"] = CG1111;
moduleMap["CG1413"] = CG1413;
moduleMap["CG2007"] = CG2007;
moduleMap["CG2023"] = CG2023;
moduleMap["CG2028"] = CG2028;
moduleMap["CG2271"] = CG2271;
moduleMap["CG3002"] = CG3002;
moduleMap["CG3207"] = CG3207;
moduleMap["CG4002"] = CG4002;
moduleMap["CN2401"] = CN2401;
moduleMap["CN3411"] = CN3411;
moduleMap["CN3421"] = CN3421;
moduleMap["CP3106"] = CP3106;
moduleMap["CP3208"] = CP3208;
moduleMap["CP3209"] = CP3209;
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
moduleMap["CS1101S"] = CS1101S;
moduleMap["CS1104"] = CS1104;
moduleMap["CS1231"] = CS1231;
moduleMap["CS1231S"] = CS1231S;
moduleMap["CS2010"] = CS2010;
moduleMap["CS2020"] = CS2020;
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
moduleMap["CS4261"] = CS4261;
moduleMap["CS4268"] = CS4268;
moduleMap["CS4269"] = CS4269;
moduleMap["CS4276"] = CS4276;
moduleMap["CS4277"] = CS4277;
moduleMap["CS4278"] = CS4278;
moduleMap["CS4330"] = CS4330;
moduleMap["CS4342"] = CS4342;
moduleMap["CS4347"] = CS4347;
moduleMap["CS4350"] = CS4350;
moduleMap["CS5215"] = CS5215;
moduleMap["CS5218"] = CS5218;
moduleMap["CS5219"] = CS5219;
moduleMap["CS5222"] = CS5222;
moduleMap["CS5223"] = CS5223;
moduleMap["CS5224"] = CS5224;
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
moduleMap["CS5242"] = CS5242;
moduleMap["CS5246"] = CS5246;
moduleMap["CS5250"] = CS5250;
moduleMap["CS5260"] = CS5260;
moduleMap["CS5272"] = CS5272;
moduleMap["CS5321"] = CS5321;
moduleMap["CS5322"] = CS5322;
moduleMap["CS5330"] = CS5330;
moduleMap["CS5331"] = CS5331;
moduleMap["CS5332"] = CS5332;
moduleMap["CS5339"] = CS5339;
moduleMap["CS5340"] = CS5340;
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
moduleMap["DBA3803"] = DBA3803;
moduleMap["DSA2102"] = DSA2102;
moduleMap["DSC1007"] = DSC1007;
moduleMap["DSC1007X"] = DSC1007X;
moduleMap["DSC2008"] = DSC2008;
moduleMap["DSC3216"] = DSC3216;
moduleMap["EE1002"] = EE1002;
moduleMap["EE1111"] = EE1111;
moduleMap["EE1111A"] = EE1111A;
moduleMap["EE1111B"] = EE1111B;
moduleMap["EE1401"] = EE1401;
moduleMap["EE1461"] = EE1461;
moduleMap["EE2007"] = EE2007;
moduleMap["EE2007E"] = EE2007E;
moduleMap["EE2009E"] = EE2009E;
moduleMap["EE2010E"] = EE2010E;
moduleMap["EE2012"] = EE2012;
moduleMap["EE2012A"] = EE2012A;
moduleMap["EE2020"] = EE2020;
moduleMap["EE2020E"] = EE2020E;
moduleMap["EE2023"] = EE2023;
moduleMap["EE2023E"] = EE2023E;
moduleMap["EE2024"] = EE2024;
moduleMap["EE2026"] = EE2026;
moduleMap["EE2028"] = EE2028;
moduleMap["EE2028A"] = EE2028A;
moduleMap["EE2231"] = EE2231;
moduleMap["EE2401"] = EE2401;
moduleMap["EE3032"] = EE3032;
moduleMap["EE3204"] = EE3204;
moduleMap["EE3204E"] = EE3204E;
moduleMap["EE3206"] = EE3206;
moduleMap["EE3206E"] = EE3206E;
moduleMap["EE3207E"] = EE3207E;
moduleMap["EE3208"] = EE3208;
moduleMap["EE3731C"] = EE3731C;
moduleMap["EE4204"] = EE4204;
moduleMap["EE4204E"] = EE4204E;
moduleMap["EE4210"] = EE4210;
moduleMap["EE4210E"] = EE4210E;
moduleMap["EE4212"] = EE4212;
moduleMap["EE4214"] = EE4214;
moduleMap["EE4704"] = EE4704;
moduleMap["EE5310"] =  EE5310;
moduleMap["EE6310"] = EE6310;
moduleMap["EC1101E"] = EC1101E;
moduleMap["EC1301"] = EC1301;
moduleMap["EC2101"] = EC2101;
moduleMap["EC2231"] = EC2231;
moduleMap["EC2303"] = EC2303;
moduleMap["EC3303"] = EC3303;
moduleMap["EG1111"] = EG1111;
moduleMap["EG1112"] = EG1112;
moduleMap["EG1401"] = EG1401;
moduleMap["EG1402"] = EG1402;
moduleMap["ENV1202"] = ENV1202;
moduleMap["ES1000"] = ES1000;
moduleMap["ES1102"] = ES1102;
moduleMap["ES1103"] = ES1103;
moduleMap["ES1541"] = ES1541;
moduleMap["ES1601"] = ES1601;
moduleMap["ES2002"] = ES2002;
moduleMap["ES2007D"] = ES2007D;
moduleMap["ES2331"] = ES2331;
moduleMap["ES2660"] = ES2660;
moduleMap["GEK1901"] = GEK1901;
moduleMap["GET1006"] = GET1006;
moduleMap["IFS4101"] = IFS4101;
moduleMap["IFS4102"] = IFS4102;
moduleMap["IFS4103"] = IFS4103;
moduleMap["IFS4205"] = IFS4205;
moduleMap["IS1103"] = IS1103;
moduleMap["IS2101"] = IS2101;
moduleMap["IS3102"] = IS3102;
moduleMap["IS4102"] = IS4102;
moduleMap["IS4240"] = IS4240;
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
moduleMap["LSM2241"] = LSM2241;
moduleMap["MA1100"] = MA1100;
moduleMap["MA1101"] = MA1101;
moduleMap["MA1101R"] = MA1101R;
moduleMap["MA1102"] = MA1102;
moduleMap["MA1102R"] = MA1102R;
moduleMap["MA1104"] = MA1104;
moduleMap["MA1301"] = MA1301;
moduleMap["MA1301X"] = MA1301X;
moduleMap["MA1301FC"] = MA1301FC;
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
moduleMap["MA2201"] = MA2201;
moduleMap["MA2202"] = MA2202;
moduleMap["MA2202S"] = MA2202S;
moduleMap["MA2203"] = MA2203;
moduleMap["MA2206"] = MA2206;
moduleMap["MA2208"] = MA2208;
moduleMap["MA2213"] = MA2213;
moduleMap["MA2214"] = MA2214;
moduleMap["MA2216"] = MA2216;
moduleMap["MA2219"] = MA2219;
moduleMap["MA2221"] = MA2221;
moduleMap["MA2311"] = MA2311;
moduleMap["MA2501"] = MA2501;
moduleMap["MA3250"] = MA3250;
moduleMap["ME2492"] = ME2492;
moduleMap["ME3291"] = ME3291;
moduleMap["MNO2706"] = MNO2706;
moduleMap["MQ2101"] = MQ2101;
moduleMap["MQ2102"] = MQ2102;
moduleMap["MQ2201"] = MQ2201;
moduleMap["MQ2202"] = MQ2202;
moduleMap["MQ2203"] = MQ2203;
moduleMap["MQ3201"] = MQ3201;
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
moduleMap[" PC2134"] =  PC2134;
moduleMap["PC2174"] = PC2174;
moduleMap["PR1111A"] = PR1111A;
moduleMap["PR2103"] = PR2103;
moduleMap["RE1704"] = RE1704;
moduleMap["SA4101"] = SA4101;
moduleMap["SA4102"] = SA4102;
moduleMap["SA4104"] = SA4104;
moduleMap["SA4105"] = SA4105;
moduleMap["SA4106"] = SA4106;
moduleMap["SA4107"] = SA4107;
moduleMap["SA4108"] = SA4108;
moduleMap["SP1202"] = SP1202;
moduleMap["SP1203"] = SP1203;
moduleMap["SP1541"] = SP1541;
moduleMap["SP2171"] = SP2171;
moduleMap["ST1131"] = ST1131;
moduleMap["ST1131A"] = ST1131A;
moduleMap["ST1232"] = ST1232;
moduleMap["ST2131"] = ST2131;
moduleMap["ST2132"] = ST2132;
moduleMap["ST2334"] = ST2334;
moduleMap["ST2335"] = ST2335;
moduleMap["ST3131"] = ST3131;
moduleMap["ST3248"] = ST3248;
moduleMap["ST4240"] = ST4240;
moduleMap["ST4248"] = ST4248;
moduleMap["TC1402"] = TC1402;
moduleMap["TC2401"] = TC2401;
moduleMap["TCE2407"] = TCE2407;
moduleMap["TE1122"] = TE1122;
moduleMap["TE2002"] = TE2002;
moduleMap["TE2003"] = TE2003;
moduleMap["TE2101"] = TE2101;
moduleMap["TE2102"] = TE2102;
moduleMap["TE2401"] = TE2401;
moduleMap["TEE2002"] = TEE2002;
moduleMap["TEE2003"] = TEE2003;
moduleMap["TEE2020"] = TEE2020;
moduleMap["TEE2023"] = TEE2023;
moduleMap["TEE2024"] = TEE2024;
moduleMap["TEE2026"] = TEE2026;
moduleMap["TEE2028"] = TEE2028;
moduleMap["TEE2101"] = TEE2101;
moduleMap["TEE3204"] = TEE3204;
moduleMap["TEE3206"] = TEE3206;
moduleMap["TEE3207"] = TEE3207;
moduleMap["TEE4204"] = TEE4204;
moduleMap["TEE4210"] = TEE4210;
moduleMap["TEE4704"] = TEE4704;
moduleMap["TG1401"] = TG1401;
moduleMap["TIC1001"] = TIC1001;
moduleMap["TIC1002"] = TIC1002;
moduleMap["TIC2501"] = TIC2501;
moduleMap["TM1401"] = TM1401;
moduleMap["TM1402"] = TM1402;
moduleMap["TM2401"] = TM2401;
moduleMap["TME2401"] = TME2401;
moduleMap["TTG1401"] = TTG1401;
moduleMap["UTW1001"] = UTW1001;
moduleMap["UWC2101"] = UWC2101;

let prerequisitesMap = {};
prerequisitesMap["BT2101"] = [[CS1010, MA1521, BT1101], [CS1010, MA1102R, BT1101]];
prerequisitesMap["BT2102"] = [[CS1010, BT1101]];
prerequisitesMap["BT4221"] = [[CS1010, BT2101, BT2102], [DAO2702, DBA3803, IT3010]];
prerequisitesMap["BT4240"] = [[MA1311, MA1521, BT2101], [MA1311, MA1102R, BT2101], [MA1101R, MA1521, BT2101], [MA1101R, MA1102R, BT2101]];
prerequisitesMap["CE2407"] = [[MA1505, MA1506]];
prerequisitesMap["CG2023"] = [[MA1506], [MA1512]];
prerequisitesMap["CG2028"] = [[CS1010, EE2026]];
prerequisitesMap["CG2271"] = [[CS1020], [CS2040], [CS2040C], [CS2040S]];
prerequisitesMap["CG3207"] = [[EE2024], [CG2028], [EE2028]];
prerequisitesMap["CG4002"] = [[CG2028, CG2271, CS2113]];
prerequisitesMap["CN3421"] = [[MA1505, MA1506], [MA1511, MA1512, MA1513]];
prerequisitesMap["CP3106"] = [[CS2102, CS2105, CS3214], [CS2102, CS2105, CS3215], [IS3102], [IS4102], [CS3201], [CS3281], [CS4201], [CS4203]];
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
prerequisitesMap["DBA3803"] = [[DAO2702]];
prerequisitesMap["DSA2102"] = [[MA1101R, MA1102R]];
prerequisitesMap["EC2101"] = [[EC1101E], [RE1704], [BSP1005], [BSP1703]];
prerequisitesMap["EC3303"] = [[EC1101E, EC2303], [EC1101E, DSC1007], [EC1101E, ST2334], [EC1101E, ST1131], [EC1101E, ST1232], [EC1101E, MA2216], [EC1101E, SA4101], [EC1101E, SA4102], [EC1101E, SA4104], [EC1101E, SA4105], [EC1101E, SA4106], [EC1101E, SA4107], [EC1101E, SA4108], [EC1301, EC2303], [EC1301, DSC1007], [EC1301, ST2334], [EC1301, ST1131], [EC1301, ST1232], [EC1301, MA2216], [EC1301, SA4101], [EC1301, SA4102], [EC1301, SA4104], [EC1301, SA4105], [EC1301, SA4106], [EC1301, SA4107], [EC1301, SA4108], [BSP1005, EC2303], [BSP1005, DSC1007], [BSP1005, ST2334], [BSP1005, ST1131], [BSP1005, ST1232], [BSP1005, MA2216], [BSP1005, SA4101], [BSP1005, SA4102], [BSP1005, SA4104], [BSP1005, SA4105], [BSP1005, SA4106], [BSP1005, SA4107], [BSP1005, SA4108]];
prerequisitesMap["EE2012"] = [[MA1505, MA1506], [MA1511, MA1512]];
prerequisitesMap["EE2023"] = [[MA1506], [MA1512]];
prerequisitesMap["EE2023E"] = [[TG1401]];
prerequisitesMap["EE2026"] = [[EE1111A], [EG1111], [CG1111]];
prerequisitesMap["EE2028"] = [[EE2028A, EE2026], [IT1007, EE2026]];
prerequisitesMap["EE3207E"] = [[EE2007E], [EE2024], [TEE2028]];
prerequisitesMap["EE3731C"] = [[EE2012, EE2023], [ST2334, EE2023]];
prerequisitesMap["EE4204"] = [[EE2012], [ST2334]];
prerequisitesMap["EE4204E"] = [[TE2003]];
prerequisitesMap["EE4210"] = [[EE2012], [ST2334]];
prerequisitesMap["EE4210E"] = [[TE2003]];
prerequisitesMap["EE4214"] = [[MA1508, EE3731C], [MA1508, EE4704]];
prerequisitesMap["EE4704"] = [[EE2023], [CG2023]];
prerequisitesMap["ENV1202"] = [[ES1103]];
prerequisitesMap["ES1103"] = [[ES1000]];
prerequisitesMap["ES1541"] = [[ES1103]];
prerequisitesMap["ES1601"] = [[ES1103]];
prerequisitesMap["ES2002"] = [[ES1000]];
prerequisitesMap["ES2007D"] = [[ES1103]];
prerequisitesMap["ES2660"] = [[ES1103]];
prerequisitesMap["IFS4101"] = [[CS2107]];
prerequisitesMap["IFS4102"] = [[CS3235]];
prerequisitesMap["IFS4103"] = [[CS3235]];
prerequisitesMap["IFS4205"] = [[CS3235]];
prerequisitesMap["IS2101"] = [[ES1103]];
prerequisitesMap["IT2002"] = [[CS1010]];
prerequisitesMap["IT3010"] = [[DAO2702], [CS1010]];
prerequisitesMap["IT3011"] = [[CS1010, MA1101R, MA1102R, EE2012], [CS1010, MA1101R, MA1102R, MA2216], [CS1010, MA1101R, MA1102R, ST2334], [CS1010, MA1101R, MA1505, EE2012], [CS1010, MA1101R, MA1505, MA2216], [CS1010, MA1101R, MA1505, ST2334], [CS1010, MA1101R, MA1507, EE2012], [CS1010, MA1101R, MA1507, MA2216], [CS1010, MA1101R, MA1507, ST2334], [CS1010, MA1101R, MA1511, MA1512, EE2012], [CS1010, MA1101R, MA1511, MA1512, MA2216], [CS1010, MA1101R, MA1511, MA1512, ST2334], [CS1010, MA1101R, MA1521, EE2012], [CS1010, MA1101R, MA1521, MA2216], [CS1010, MA1101R, MA1521, ST2334], [CS1010, MA1311, MA1102R, EE2012], [CS1010, MA1311, MA1102R, MA2216], [CS1010, MA1311, MA1102R, ST2334], [CS1010, MA1311, MA1505, EE2012], [CS1010, MA1311, MA1505, MA2216], [CS1010, MA1311, MA1505, ST2334], [CS1010, MA1311, MA1507, EE2012], [CS1010, MA1311, MA1507, MA2216], [CS1010, MA1311, MA1507, ST2334], [CS1010, MA1311, MA1511, MA1512, EE2012], [CS1010, MA1311, MA1511, MA1512, MA2216], [CS1010, MA1311, MA1511, MA1512, ST2334], [CS1010, MA1311, MA1521, EE2012], [CS1010, MA1311, MA1521, MA2216], [CS1010, MA1311, MA1521, ST2334], [CS1010, MA1508, MA1102R, EE2012], [CS1010, MA1508, MA1102R, MA2216], [CS1010, MA1508, MA1102R, ST2334], [CS1010, MA1508, MA1505, EE2012], [CS1010, MA1508, MA1505, MA2216], [CS1010, MA1508, MA1505, ST2334], [CS1010, MA1508, MA1507, EE2012], [CS1010, MA1508, MA1507, MA2216], [CS1010, MA1508, MA1507, ST2334], [CS1010, MA1508, MA1511, MA1512, EE2012], [CS1010, MA1508, MA1511, MA1512, MA2216], [CS1010, MA1508, MA1511, MA1512, ST2334], [CS1010, MA1508, MA1521, EE2012], [CS1010, MA1508, MA1521, MA2216], [CS1010, MA1508, MA1521, ST2334], [CS1010, MA1513, MA1102R, EE2012], [CS1010, MA1513, MA1102R, MA2216], [CS1010, MA1513, MA1102R, ST2334], [CS1010, MA1513, MA1505, EE2012], [CS1010, MA1513, MA1505, MA2216], [CS1010, MA1513, MA1505, ST2334], [CS1010, MA1513, MA1507, EE2012], [CS1010, MA1513, MA1507, MA2216], [CS1010, MA1513, MA1507, ST2334], [CS1010, MA1513, MA1511, MA1512, EE2012], [CS1010, MA1513, MA1511, MA1512, MA2216], [CS1010, MA1513, MA1511, MA1512, ST2334], [CS1010, MA1513, MA1521, EE2012], [CS1010, MA1513, MA1521, MA2216], [CS1010, MA1513, MA1521, ST2334]];
prerequisitesMap["LSM1102"] = [[LSM1301]];
prerequisitesMap["LSM1105"] = [[LSM1301]];
prerequisitesMap["LSM1105"] = [[LSM1301]];
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
prerequisitesMap["MA2311"] = [[MA1102R], [MA1312], [MA1421], [MA1521]];
prerequisitesMap["ME3291"] = [[MA1505], [MA1512, MA1513]];
prerequisitesMap["MNO2706"] = [[ES1000]];
prerequisitesMap["PC1141"] = [[PC1221, PC1222]];
prerequisitesMap["PC1142"] = [[PC1221, PC1222]];
prerequisitesMap["PC1143"] = [[PC1221, PC1222]];
prerequisitesMap["PC1143"] = [[PC1221, PC1222]];
prerequisitesMap["PC1431"] = [[PC1221, PC1222]];
prerequisitesMap["PC1432"] = [[PC1221, PC1222]];
prerequisitesMap["PC1433"] = [[PC1221, PC1222]];
prerequisitesMap["PC2134"] = [[MA1101R, MA1102R]];
prerequisitesMap["SP1541"] = [[ES1103]];
prerequisitesMap["ST1131"] = [[MA1301]];
prerequisitesMap["ST2132"] = [[MA2216], [ST2334]];
prerequisitesMap["ST2334"] = [[MA1102R], [MA1312], [MA1505], [MA1507], [MA1521]];
prerequisitesMap["ST3131"] = [[MA2216], [ST2334]];
prerequisitesMap["ST3248"] = [[ST2132], [ST2334]];
prerequisitesMap["ST4248"] = [[ST3131, ST3248]];
prerequisitesMap["TCE2407"] = [[TTG1401]];
prerequisitesMap["TE2002"] = [[TE2102], [TG1401]];
prerequisitesMap["TE2003"] = [[TE2002]];
prerequisitesMap["TEE2002"] = [[TE2102], [TTG1401]];
prerequisitesMap["TEE2003"] = [[TEE2002]];
prerequisitesMap["TEE2023"] = [[TTG1401]];
prerequisitesMap["TEE2026"] = [[EE1002]];
prerequisitesMap["TEE2028"] = [[EE2020E], [TEE2020], [TEE2026]];
prerequisitesMap["TEE3207"] = [[TEE2024], [TEE2028]];
prerequisitesMap["TEE4204"] = [[TEE2003]];
prerequisitesMap["TEE4210"] = [[TEE2003]];
prerequisitesMap["TIC1002"] = [[TIC1001]];
prerequisitesMap["TIC2501"] = [[TIC1002]];

let nextPossible = {};
nextPossible["BSP1005"] = [EC2101, EC3303];
nextPossible["BSP1704"] = [EC2101];
nextPossible["BT1101"] = [BT2101, BT2102];
nextPossible["BT2101"] = [BT4221, BT4240];
nextPossible["BT2102"] = [BT4221];
nextPossible["BT5110"] = [CS5344];
nextPossible["CG1111"] = [EE2026];
nextPossible["CG2023"] = [EE4704];
nextPossible["CG2028"] = [CG3207, CG4002, CS3210, CS3237];
nextPossible["CG2271"] = [CG4002, CS3211, CS3235, CS4223, CS5250, CS5272];
nextPossible["CG3207"] = [CS4223];
nextPossible["CG4002"] = [CS4276, CS5476];
nextPossible["CS1010"] = [BT2101, BT2102, BT4221, CG2028, CS2030, CS2040, CS2040C, CS2040S, CS2100, CS2107, CS3237, IT2002, IT3010, IT3011];
nextPossible["CS1231"] = [CS2040S, CS2309, CS3230, CS3234, CS3236, CS3243, CS4236, CS5232, MA2202, MA2214, MA2219];
nextPossible["CS2030"] = [CS2103, CS2102, CS2103T, CS2104, CS2309, CS3233, CS3240, CS3241, CS4215, CS4243, CS5239];
nextPossible["CS2040"] = [CG2271, CS2103, CS2102, CS2103T, CS2105, CS2108, CS2113, CS2220, CS2309, CS3223, CS3230, CS3233, CS3241, CS3243, CS3244, CS3245, CS4215, CS4236, CS4243, CS4277, CS5240, CS5332, CS5346, CS5477];
nextPossible["CS2040C"] = [CG2271, CS2103, CS2103T, CS2105, CS2108, CS2113, CS2220, CS2309, CS3223, CS3230, CS3233, CS3241, CS3243, CS3244, CS3245, CS4215, CS4236, CS4243, CS4277, CS5240, CS5332, CS5346, CS5477];
nextPossible["CS2040S"] = [CG2271, CS2103, CS2103T, CS2105, CS2108, CS2113, CS2220, CS2309, CS3223, CS3230, CS3233, CS3241, CS3243, CS3244, CS3245, CS4215, CS4236, CS4243, CS4277, CS5240, CS5332, CS5346, CS5477];
nextPossible["CS2100"] = [CS2106, CS3210, CS3237];
nextPossible["CS2102"] = [CP3106, CS3223, CS4225, CS5228, CS5344, CS5346, CS5425];
nextPossible["CS2103"] = [CS3203, CS3216, CS3217, CS3219, CS3281, CS4211, CS4239, CS5232, CS5246, CS5272, CS5439];
nextPossible["CS2103T"] = [CS3203, CS3216, CS3217, CS3219, CS3281, CS4211, CS4239, CS5232, CS5246, CS5272, CS5439];
nextPossible["CS2104"] = [CS4212, CS5219];
nextPossible["CS2105"] = [CP3106, CS3103, CS3235, CS4222, CS4226, CS5422, CS6211, CS6219];
nextPossible["CS2106"] = [CS3211, CS3235, CS4223,CS5250, CS5272, CS6211, CS6219];
nextPossible["CS2107"] = [CS3235, CS4236, IFS4101];
nextPossible["CS2108"] = [CS4242, CS4347];
nextPossible["CS2113"] = [CG4002, CS2104, CS3203, CS3240, CS3241, CS4215, CS4243, CS5239];
nextPossible["CS2220"] = [CS4220];
nextPossible["CS3210"] = [CS4223, CS4231];
nextPossible["CS3211"] = [CS5223, CS6213];
nextPossible["CS3219"] = [CS4218];
nextPossible["CS3223"] = [CS4221, CS4224, CS5322, CS5421, CS5424, CS6203];
nextPossible["CS3230"] = [CS4231, CS4234, CS4268, CS5234, CS5330, CS6210, CS6215, CS6244];
nextPossible["CS3235"] = [CS4238, CS4239, CS5231, CS5321, CS5331, CS5439, CS6231, IFS4102, IFS4103, IFS4205];
nextPossible["CS3237"] = [CS4276, CS5476];
nextPossible["CS3240"] = [CS4240, CS4249, CS5346];
nextPossible["CS3241"] = [CS3242, CS3247, CS4247];
nextPossible["CS3243"] = [CS4244, CS4246, CS4248, CS4278, CS5228, CS5340, CS5446, CS6208];
nextPossible["CS3244"] = [CS5242, CS5339, CS6283];
nextPossible["CS3245"] = [CS4242, CS4248];
nextPossible["CS3247"] = [CS4350];
nextPossible["CS3281"] = [CP3106, CS3282];
nextPossible["CS4212"] = [CS5218, CS6215];
nextPossible["CS4215"] = [CS5218];
nextPossible["CS4223"] = [CS5222];
nextPossible["CS4226"] = [CS5229];
nextPossible["CS4231"] = [CS5233, CS6213];
nextPossible["CS4232"] = [CS5230, CS5236];
nextPossible["CS4236"] = [CS6231];
nextPossible["CS4243"] = [CS6240];
nextPossible["CS4248"] = [CS6207];
nextPossible["CS5231"] = [CS6231];
nextPossible["CS5234"] = [CS6234];
nextPossible["CS5240"] = [CS6240];
nextPossible["CS5242"] = [CS5260];
nextPossible["DAO1704"] = [DAO2702];
nextPossible["DAO2702"] = [BT4221, DBA3803, IT3010];
nextPossible["DBA3803"] = [BT4221];
nextPossible["DSC1007"] = [EC3303];
nextPossible["DSC2008"] = [CS4246, CS5228, CS5233, CS5239, CS5332, CS5340, CS5346, CS5446];
nextPossible["EC1101E"] = [EC2101, EC3303];
nextPossible["EC1301"] = [EC3303];
nextPossible["EC2303"] = [EC3303];
nextPossible["EE1111A"] = [EE2026];
nextPossible["EE2012"] = [CS3236, CS3244, CS4222, CS4226, CS4243, CS4246, CS4248, CS4268, CS4278, CS5228, CS5233, CS5239, CS5240, CS5246, CS5332, CS5340, CS5346, CS5446, CS5422, EE3731C, EE4204, EE4210, IT3011];
nextPossible["EE2023"] = [EE3731C, EE4704];
nextPossible["EE2026"] = [CG2028, EE2028];
nextPossible["EE2028A"] = [EE2028];
nextPossible["EE2028"] = [CG3207, CS2106, CS3210, CS3237];
nextPossible["EE3731C"] = [EE4212];
nextPossible["EE4204"] = [CS3103, CS3235, CS4222, CS4226, CS5422];
nextPossible["EE4210"] = [CS5229];
nextPossible["EE4704"] = [EE4212];
nextPossible["ES1000"] = [ES1103, ES2002, MNO2706];
nextPossible["ES1103"] = [CS2101, ENV1202, ES1541, ES1601, ES2007D, ES2660, IS2101, SP1541];
nextPossible["IT2002"] = [CS3223, CS4225, CS5344];
nextPossible["IT3010"] = [BT4221];
nextPossible["LSM1102"] = [LSM2241];
nextPossible["LSM1105"] = [LSM2241];
nextPossible["LSM1106"] = [LSM2241];
nextPossible["LSM1301"] = [LSM1102, LSM1105, LSM1106];
nextPossible["LSM2241"] = [CS4220];
nextPossible["MA1101R"] = [BT4240, CS3242, CS3244, CS4234, CS4243, CS4268, CS4277, CS4278, CS4347, CS5240, CS5246, CS5332, CS5477, CS6244, DSA2102, IT3011, MA2101, MA2213, MA2214, MA2219, PC2134];
nextPossible["MA1102R"] = [BT2101, BT4240, CS3242, CS3244, CS4243, CS4278, CS4347, CS5240, CS5332, DSA2102, IT3011, MA2104, MA2108, MA2108S, MA2213, MA2216, MA2219, MA2311, PC2134, ST2334];
nextPossible["MA1301"] = [CS1231, CS4240, MA1101R, MA1102R, MA1312, MA1421, MA1505, MA1507, MA1508, MA1511, MA1512, MA1513, MA1521, ST1131];
nextPossible["MA1312"] = [MA2213, MA2216, MA2311, ST2334];
nextPossible["MA1421"] = [MA2311];
nextPossible["MA1505"] = [CE2407, CN3421, CS3242, CS3244, CS4243, CS4278, CS4347, CS5240, CS5332, EE2012, IT3011, MA2104, MA2108, MA2108S, MA2213, MA2216, MA2219, ME3291, ST2334];
nextPossible["MA1507"] = [CS3242, CS3244, CS4243, CS4347, CS5240, CS5332, IT3011, MA2108, MA2108S, MA2213, MA2216, MA2219, ST2334];
nextPossible["MA1508"] = [CS3242, CS3244, CS4234, CS4243, CS4268, CS4277, CS4278, CS4347, CS5240, CS5246, CS5332, CS5477, CS6244, EE4212, IT3011, MA2101, MA2213, MA2219, MA2214];
nextPossible["MA1511"] = [CN3421, CS3242, CS3244, CS4243, CS4278, CS4347, CS5240, CS5332, IT3011, EE2012, MA2104, MA2108, MA2108S, MA2213, MA2216, MA2219];
nextPossible["MA1512"] = [CG2023, CN3421, CS3242, CS3244, CS4243, CS4278, CS4347, CS5240, CS5332, IT3011, EE2012, EE2023, ME3291];
nextPossible["MA1513"] = [CN3421, CS3242, CS3244, CS4234, CS4243, CS4268, CS4347, CS5240, CS5246, CS5332, IT3011, MA2101, MA2213, MA2214, MA2219, ME3291];
nextPossible["MA1521"] = [BT2101, BT4240, CS3242, CS3244, CS4243, CS4278, CS4347, CS5240, CS5332, IT3011, MA2104, MA2108, MA2108S, MA2213, MA2216, MA2311, ST2334];
nextPossible["MA2101"] = [CS4232];
nextPossible["MA2104"] = [CS4232];
nextPossible["MA2108"] = [CS4232];
nextPossible["MA2202"] = [CS4232];
nextPossible["MA2213"] = [CS4232];
nextPossible["MA2214"] = [CS4232];
nextPossible["MA2216"] = [CS3236, CS3244, CS4222, CS4226, CS4232, CS4243, CS4246, CS4248, CS4268, CS5228, CS5233, CS5239, CS5240, CS5246, CS5332, CS5340, CS5446, CS5422, CS6211, CS6244, EC3303, IT3011, ST2132, ST3131];
nextPossible["MA2219"] = [CS4232];
nextPossible["MA2311"] = [CS4232];
nextPossible["NM2207"] = [CS3240];
nextPossible["NM2213"] = [CS4249];
nextPossible["NM3216"] = [CS4350];
nextPossible["PC1221"] = [CS3242, PC1141, PC1142, PC1143, PC1144, PC1431, PC1432, PC1433];
nextPossible["PC1222"] = [PC1141, PC1142, PC1143, PC1144, PC1431, PC1432, PC1433];
nextPossible["RE1704"] = [EC2101];
nextPossible["SA4101"] = [EC3303];
nextPossible["SA4102"] = [EC3303];
nextPossible["SA4104"] = [EC3303];
nextPossible["SA4105"] = [EC3303];
nextPossible["SA4106"] = [EC3303];
nextPossible["SA4107"] = [EC3303];
nextPossible["SA4108"] = [EC3303];
nextPossible["ST1131"] = [CS4243, CS4246, CS5228, CS5233, CS5239, CS5240, CS5332, CS5340, CS5346, CS5446, EC3303];
nextPossible["ST1232"] = [CS4243, CS4246, CS5228, CS5233, CS5239, CS5240, CS5332, CS5340, CS5346, CS5446, EC3303, ST3248];
nextPossible["ST2132"] = [CS4246, CS5228, CS5233, CS5239, CS5332, CS5340, CS5346, CS5446];
nextPossible["ST2334"] = [CS3236, CS3244, CS4222, CS4226, CS4243, CS4246, CS4248, CS4268, CS4278, CS5228, CS5233, CS5239, CS5240, CS5246, CS5332, CS5340, CS5346, CS5422, CS5446, CS6211, CS6244, EC3303, EE3731C, EE4204, EE4210, IT3011, ST2132, ST3131, ST3248];
nextPossible["ST3131"] = [ST4248];
nextPossible["ST3248"] = [ST4248];
nextPossible["TE2002"] = [TE2003];
nextPossible["TE2003"] = [EE4204E, EE4210E];
nextPossible["TEE2002"] = [TEE2003];
nextPossible["TEE2003"] = [TEE4204, TEE4210];
nextPossible["TEE2026"] = [TEE2028];
nextPossible["TEE2028"] = [EE3207E, TEE3207];
nextPossible["TG1401"] = [EE2023E, TE2002];
nextPossible["TIC1001"] = [TIC1002];
nextPossible["TIC1002"] = [TIC2501];
nextPossible["TTG1401"] = [TCE2407, TEE2002, TEE2023];

let preclusionsMap = {};
preclusionsMap["BSP1005"] = [BH1005, BZ1005, BK1008];
preclusionsMap["BSP1703"] = [BSP1005, EC2101, EC1101E];
preclusionsMap["BT1101"] = [DSC1007];
preclusionsMap["BT4221"] = [CS4225, CS5425];
preclusionsMap["BT4240"] = [IS4240, IT3011, CS3244];
preclusionsMap["CE2407"] = [TCE2407];
preclusionsMap["CG1111"] = [CG1108, EG1112];
preclusionsMap["CG2023"] = [EE2023];
preclusionsMap["CG2028"] = [EE2024];
preclusionsMap["CG2271"] = [CS2106];
preclusionsMap["CG3207"] = [EE3207E, TEE3207];
preclusionsMap["CG4002"] = [CG3002, EE3032, EE3208];
preclusionsMap["CP3208"] = [CS3208];
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
preclusionsMap["DBA3803"] = [DSC3216];
preclusionsMap["DSA2102"] = [MA2213];
preclusionsMap["DSC2008"] = [ST1131, ST1232, ST2334];
preclusionsMap["EC1101E"] = [BSP1005, BSP1703, RE1704];
preclusionsMap["EC3303"] = [ST3131];
preclusionsMap["EC2303"] = [ST1131, ST1232, ST2334, MA2216, DSC1007, BT1101, SA4101, SA4102, SA4104, SA4105, SA4106, SA4107, SA4108];
preclusionsMap["EE1111A"] = [EE1111, EG1111, EE1111B];
preclusionsMap["EE2012"] = [ST2334];
preclusionsMap["EE2023"] = [EE2023E, CG2023, TEE2023];
preclusionsMap["EE2023E"] = [EE2009E, EE2010E, TEE2023];
preclusionsMap["EE2026"] = [EE2020];
preclusionsMap["EE2028"] = [EE2024, CG2028];
preclusionsMap["EE3207E"] = [TEE3207];
preclusionsMap["EE4204"] = [EE3204, EE4204E, TEE3204, TEE4204, EE5310, EE6310];
preclusionsMap["EE4204E"] = [CS2105, CS3103, TEE3204, EE4204, TEE4204];
preclusionsMap["EE4210"] = [EE4210E, TEE4210];
preclusionsMap["EE4210E"] = [TEE4210, TIC2501];
preclusionsMap["EE4212"] = [CS4243];
preclusionsMap["EE4704"] = [CS4243, EE3206, TEE3206, TEE4704];
preclusionsMap["ENV1202"] = [SP1202];
preclusionsMap["ES1103"] = [ES1102];
preclusionsMap["ES1541"] = [SP1203, ENV1202, SP2171, SP1541, UTW1001, UWC2101, ES1601];
preclusionsMap["ES1601"] = [CS2101, IS2101, ES2331, ES2002, ES2007D, SP1541];
preclusionsMap["ES2002"] = [MNO2706, IS2101, ES2007D, ES1601, UWC2101];
preclusionsMap["ES2007D"] = [CS2301, ES2002, IS2101, CS2101, CG1413, ES1601];
preclusionsMap["ES2660"] = [GET1006, GEK1901];
preclusionsMap["IFS4205"] = [CS3205]
preclusionsMap["IS2101"] = [ES2002, ES2007D, CS2101, CS2103T, ES1601];
preclusionsMap["IT2002"] = [CS2102];
preclusionsMap["IT3010"] = [BT2102, CS2102];
preclusionsMap["IT3011"] = [CS3244, BT4240];
preclusionsMap["LSM1106"] = [LSM1101];
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
preclusionsMap["MA2311"] = [MA1104, MA2104, MA1505, MA1507, MA1511, MA2108];
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
preclusionsMap["PC2134"] = [MA1511, MA1512];
preclusionsMap["RE1704"] = [EC1101E];
preclusionsMap["SP1541"] = [SP1203, ENV1202, SP2171, ES1541, UTW1001, UWC2101, ES1601];
preclusionsMap["ST1131"] = [ST1232, ST2334, CE2407, CN3421, EE2231, EC2303, PR2103, DSC2008];
preclusionsMap["ST1232"] = [ST1131, ST2334, CE2407, CN3421, EC2231, EC2303, PR2103, DSC2008];
preclusionsMap["ST2334"] = [ST1131, ST1232, MA2216, CE2407, EC2231, EC2303, PR2103, DSC2008];
preclusionsMap["ST3131"] = [ST2335, EC3303];
preclusionsMap["ST3248"] = [ST4240];
preclusionsMap["ST4248"] = [ST4240];
preclusionsMap["TCE2407"] = [CE2407];
preclusionsMap["TE2002"] = [TEE2002, TM2401, TME2401];
preclusionsMap["TE2003"] = [TE2401, TEE2003];
preclusionsMap["TE2101"] = [TE1122, TEE2101, TIC1001];
preclusionsMap["TEE2002"] = [TE2002, TM2401, TME2401];
preclusionsMap["TEE2003"] = [TE2401, TE2003];
preclusionsMap["TEE2023"] = [EE2009E, EE2010E, EE2023E];
preclusionsMap["TEE2026"] = [EE2020E, TEE2020];
preclusionsMap["TEE2028"] = [EE2007E, EE2024, TEE2024];
preclusionsMap["TEE2101"] = [TE1122, TE2101, TIC1001];
preclusionsMap["TEE3207"] = [EE3207E];
preclusionsMap["TEE4204"] = [CS2105, CS3103, EE3204, TEE3204, EE4204];
preclusionsMap["TEE4210"] = [EE4210, TIC2501];
preclusionsMap["TG1401"] = [TE2102, TM1401, TTG1401];
preclusionsMap["TIC1001"] = [TE2101, TEE2101];
preclusionsMap["TIC2501"] = [TEE4210, EE4210];
preclusionsMap["TM2401"] = [TE2002, TC2401, TC1402, TM1402, TME2401];
preclusionsMap["TME2401"] = [TE2002, TEE2002, TC2401, TC1402, TM1402];
preclusionsMap["TTG1401"] = [TE2102, TM1401, TG1401];

const cs1000 = [CS1010, CS1010S, CS1010X, CS1010J, CS1010E, CS1010XCP, CS1010FC, CS1020, CS1020E, CS1101S, CS1104, CS1231, CS1231S];
const cs2000 = [CS2010, CS2020, CS2030, CS2030S, CS2040, CS2040C, CS2040S, CS2100, CS2101, CS2102, CS2102S, CS2103, CS2103T, CS2104, CS2105, CS2106, CS2107, CS2108, CS2113, CS2113T, CS2220, CS2301, CS2305S];
const cs3000 = [CS3103, CS3201, CS3202, CS3203, CS3205, CS3208, CS3210, CS3211, CS3213, CS3214, CS3215, CS3216, CS3217, CS3219, CS3220, CS3223, CS3230, CS3233, CS3234, CS3235, CS3236, CS3237, CS3240, CS3241, CS3242, CS3243, CS3244, CS3245, CS3246, CS3247, CS3281, CS3282, CS3283, CS3284];
const cs4000 = [CS4101, CS4201, CS4203, CS4211, CS4212, CS4215, CS4218, CS4220, CS4221, CS4222, CS4224, CS4225, CS4226, CS4230, CS4231, CS4232, CS4234, CS4236, CS4238, CS4239, CS4240, CS4242, CS4243, CS4244, CS4246, CS4247, CS4248, CS4249, CS4268, CS4276, CS4277, CS4278, CS4342, CS4347, CS4350, CS5218, CS5219, CS5222, CS5223, CS5224, CS5228, CS5229, CS5230, CS5231, CS5232, CS5233, CS5234, CS5236, CS5239, CS5240, CS5242, CS5246, CS5250, CS5260, CS5272, CS5321, CS5322, CS5330, CS5331, CS5332, CS5339, CS5340, CS5344, CS5346, CS5421, CS5422, CS5424, CS5439, CS5425, CS5446, CS5476, CS5477, CS5478, CS6101, CS6203, CS6207, CS6208, CS6210, CS6211, CS6213, CS6215, CS6219, CS6231, CS6234, CS6240, CS6244, CS6283];
const csMods = cs1000.concat(cs2000).concat(cs3000).concat(cs4000);
const ifsMods = [IFS4101, IFS4102, IFS4103, IFS4205];
const fosMods = [];

const fassList = {
  label: "Faculty of Arts and Social Sciences",
  classes: "Major",
  requirement: [],
  value: {}
};
const IFS = {
  label: "Information Security",
  classes: [],
  requirement: [],
  value: {}
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
      "Artificial Intelligence": CSAI
    }
  ]
};
const socList = {
  label: "School of Computing",
  classes: "Major",
  requirement: [],
  value: {
    "Computer Sciences": CS,
    "Information Security": IFS
  }
};
const primary = {
  label: "Faculty",
  classes: "Faculty",
  requirement: [],
  value: {
    "Faculty of Arts and Social Sciences": fassList,
    "School of Computing": socList
  }
};

const second = {
  label: "Faculty",
  classes: "Faculty",
  requirement: [],
  value: {
  }
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
const minor = {
  label: "Minor",
  classes: "Minor",
  requirement: [],
  value: {
    "Artificial Intelligence": minorAI,
    "Computer Science": minorCS
  }
};

const notOnCampus = {
  label: "Not on campus",
  requirement: [],
  value: null
};
const USP = {
  label: "University Scholars Programme",
  requirement: [],
  value: null
};
const residences = {
  label: "Residence",
  classes: "Residence",
  requirement: [],
  value: {
    "Not on campus": notOnCampus,
    "University Scholars Programme": USP
  }
};

export default function Data() {
  return (
    <div>
      <Form
	moduleMap={moduleMap}
	prerequisitesMap={prerequisitesMap}
	nextPossible={nextPossible}
	preclusionsMap={preclusionsMap}
	primary={primary}
	second={second}
	minor={minor}
	residences={residences}
      />
    </div>
  );
}
