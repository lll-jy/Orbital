import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const allGceMods = [
  'Mathematics',
  'Physics',
  'Biology',
  'QET Band2 or equivalent',
  'QET Band3 or equivalent'
];//TODO: need to complete the list of gce modules


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
	? theme.typography.fontWeightRegular
	: theme.typography.fontWeightMedium,
  };
}

export default function Form(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [degree, setDegree] = useState("bachelor");
  const [faculty1, setFaculty1] = useState("");
  const [faculty2, setFaculty2] = useState("");
  const [major1, setMajor1] = useState("");
  const [major2, setMajor2] = useState("");
  const [spec11, setSpec11] = useState([]);
  const [spec12, setSpec12] = useState([]);
  const [spec13, setSpec13] = useState([]);
  const [spec21, setSpec21] = useState([]);
  const [spec22, setSpec22] = useState([]);
  const [spec23, setSpec23] = useState([]);
  const [minors, setMinors] = useState([]);
  const [residence, setResidence] = useState("");
  const [moduleCode, setModuleCode] = useState("");
  const [moduleError, setModuleError] = useState(null);
  const [modulesTaken, setModulesTaken] = useState([]);
  const [gceMods, setGceMods] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [recommend, setRecommend] = useState("");
  const [moduleCheck, setModuleCheck] = useState("");
  const [moduleCheckError, setModuleCheckError] = useState(null);
  const [flag, setFlag] = useState(null);
  const [requirements, setRequirements] = useState([]);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnSubmit = async event => {
    //event.preventDefault();
  };

  const handleDegree = (event) => {
    setDegree(event.target.value);
  };

  const handleFaculty1 = (event) => {
    setFaculty1(event.target.value);
  };

  const handleFaculty2 = (event) => {
    setFaculty2(event.target.value);
  };

  const handleMajor1 = (event) => {
    setMajor1(event.target.value);
  };

  const handleMajor2 = (event) => {
    setMajor2(event.target.value);
  };

  const handleSpec11 = (event) => {
    setSpec11(event.target.value);
  }

  const handleSpec12 = (event) => {
    setSpec12(event.target.value);
  }

  const handleSpec13 = (event) => {
    setSpec13(event.target.value);
  }

  const handleSpec21 = (event) => {
    setSpec21(event.target.value);
  }

  const handleSpec22 = (event) => {
    setSpec22(event.target.value);
  }

  const handleSpec23 = (event) => {
    setSpec23(event.target.value);
  }

  const handleMinors = (event) => {
    setMinors(event.target.value);
  }

  const handleResidence = (event) => {
    setResidence(event.target.value);
  };

  const showDegree = () => (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
      <InputLabel id="degree-label">Degree programme</InputLabel>
      <Select
	labelId="degree-label"
	id="degree"
	value={degree}
	onChange={handleDegree}
	label="Degree"
      >
	<MenuItem value="DDP">Double Degree Programme</MenuItem>
	<MenuItem value="DMP">Double Major Programme</MenuItem>
	<MenuItem value="bachelor">Bachelor Degree</MenuItem>
      </Select>
    </FormControl>
  );

  const showSelect = (label, value, handle, coll) => (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
	value={value}
	onChange={handle}
	label={label}
      >
	{Object.keys(coll).map(x => (
	  <MenuItem value={x}>{coll[x].label}</MenuItem>
	))}
      </Select>
    </FormControl>
  );

  const showMulti = (label, value, handle, coll) => (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
	multiple
	value={value}
	onChange={handle}
	input={<Input />}
	renderValue={(selected) => (
	  <div className={classes.chips}>
	    {selected.map((value) => (
	      <Chip key={value} label={value} className={classes.chip} />
	    ))}
	  </div>
	)}
	MenuProps={MenuProps}
      >
	{Object.keys(coll).map(x => (
	  <MenuItem key={x} value={x} style={getStyles(x, value, theme)}>
	    {coll[x].label}
	  </MenuItem>
	))}
      </Select>
    </FormControl>
  );

  const showSpec = (coll, n, v, handle) => {
    if (coll.multi[n] === true) {
      return showMulti(
	coll.classes[n],
	v,
	handle,
	coll.value[n]
      );
    } else if (coll.multi[n] === false) {
      return showSelect(
	coll.classes[n],
	v,
	handle,
	coll.value[n]
      );
    } else {
      return null;
    }
  };

  const showFaculty1 = (deg) => {
    if (deg !== "") {
      return showSelect(
	"Faculty",
	faculty1,
	handleFaculty1,
	props.primary.value
      );
    }
    return null;
  };

  const showMajor1 = (faculty1) => {
    if (faculty1 !== "") {
      return showSelect(
	props.primary.value[faculty1].classes,
	major1,
	handleMajor1,
	props.primary.value[faculty1].value
      );
    }
    return null;
  };

  const showSpec11 = (major1) => {
    if (major1 !== "") {
      return showSpec(props.primary.value[faculty1].value[major1], 0, spec11, handleSpec11);
    }
  };

  const showSpec12 = (major1) => {
    if (major1 !== "") {
      return showSpec(props.primary.value[faculty1].value[major1], 1, spec12, handleSpec12);
    }
  };

  const showSpec13 = (major1) => {
    if (major1 !== "") {
      return showSpec(props.primary.value[faculty1].value[major1], 2, spec13, handleSpec13);
    }
  };

  const showFaculty2 = (deg) => {
    if (deg === "DDP") {
      return showSelect(
	"Faculty",
	faculty2,
	handleFaculty2,
	props.primary.value
      );
    } else if (deg === "DMP") {
      return showSelect(
	"Faculty",
	faculty2,
	handleFaculty2,
	props.second.value
      );
    }
    return null;
  };

  const showMajor2 = (faculty2) => {
    if (degree === "DDP" && faculty2 !== "") {
      return showSelect(
	props.primary.value[faculty2].classes,
	major2,
	handleMajor2,
	props.primary.value[faculty2].value
      );
    } else if (degree === "DMP" && faculty2 !== "") {
      return showSelect(
	props.second.value[faculty2].classes,
	major2,
	handleMajor2,
	props.second.value[faculty2].value
      );
    }
    return null;
  };

  const showSpec21 = (major2) => {
    if (major2 !== "") {
      if (degree === "DDP") {
	return showSpec(props.primary.value[faculty2].value[major2], 0, spec21, handleSpec21);
      } else if (degree === "DMP") {
	return showSpec(props.second.value[faculty2].value[major2], 0, spec21, handleSpec21);
      }
    }
  };

  const showSpec22 = (major2) => {
    if (major2 !== "") {
      if (degree === "DDP") {
	return showSpec(props.primary.value[faculty2].value[major2], 1, spec22, handleSpec22);
      } else if (degree === "DMP") {
	return showSpec(props.second.value[faculty2].value[major2], 1, spec22, handleSpec22);
      }
    }
  };

  const showSpec23 = (major2) => {
    if (major2 !== "") {
      if (degree === "DDP") {
	return showSpec(props.primary.value[faculty2].value[major2], 2, spec23, handleSpec23);
      } else if (degree === "DMP") {
	return showSpec(props.second.value[faculty2].value[major2], 2, spec23, handleSpec23);
      }
    }
  };

  const showMinors = (minors) => {
    return showMulti("Minors", minors, handleMinors, props.minor.value);
  };

  const showResidence = () => {
    return showSelect("Residence", residence, handleResidence, props.residences.value);
  };

  const showModulesRead = (mods) => (
    mods.map(mod => (
      <Fab
	variant="extended"
	className={classes.margin}
	onClick={() => deleteModule(mod)}
      >
	{mod.code}
	<HighlightOffIcon className={classes.extendedIcon} />
      </Fab>
    ))
  );

  const handleModules = () => {
    setModuleError(null);
    let mod = props.moduleMap[moduleCode];
    if (!mod) {
      setModuleError("The module code doesn't exist.");
      return;
    }

    if (prerequisites.includes(mod)) {
      setModuleError("You've already added this module or you've completed preclusions.");
      return;
    }

    if (mod.equivalent === null) {
      prerequisites.push(mod);
    } else {
      prerequisites.push(mod.equivalent);
    }
    modulesTaken.push(mod);
  };

  const handleModuleCheck = () => {
    setModuleCheckError(null);
    let mod = props.moduleMap[moduleCheck];
    if (!!mod.equivalent) {
      mod = mod.equivalent;
    }
    if (!mod) {
      setModuleCheckError("The module code doesn't exist.");
    } else if (!mod.offered) {
      setModuleCheckError("The module is no longer provided.");
    } else if (!mod.sem1) { //TODO: can manipulate according to the timing.
      setModuleCheckError("The module is not provided next semester.");
    } else if (prerequisites.includes(mod)) {
      setModuleCheckError("You've already read this module or its equivalent");
    } else {
      const preclusion = props.preclusionsMap[mod.code];
      if (!!preclusion) {
	let canRead = true;
	for (let i = 0; i < preclusion.length; i++) {
	  if (prerequisites.includes(preclusion[i])) {
	    canRead = false;
	    break;
	  }
	}
	if (canRead) {
	  check(mod);
	} else {
	  setModuleCheckError("You're precluded for this module.");
	}
      } else {
	check(mod);
      }
    }
  }

  const check = (mod) => {
    setFlag(false);
    let pres = props.prerequisitesMap[mod.code];
    if (!pres) {
      setFlag(true);
      setModuleCheckError("You can read " + mod.code + " " + mod.name + " next semester.");
    } else {
      let record = 100;
      let target = [];
      for (let i = 0; i < pres.length; i++) {
	let notDone = 0;
	let canRead = true;
	for (let j = 0; j < pres[i].length; j++) {
	  if (!prerequisites.includes(pres[i][j])) {
	    notDone++;
	  }
	  if (!pres[i][j].offered) {
	    canRead = false;
	  }
	}
	if (notDone === 0) {
	  setFlag(true);
	  setModuleCheckError("You can read " + mod.code + " " + mod.name + " next semester.");
	  return ;
	} else if (canRead && notDone < record) {
	  record = notDone;
	  target = [pres[i]];
	} else if (canRead && notDone === record) {
	  target.push(pres[i]);
	}
      }
      let toRead = [];
      for (let i = 0; i < target.length; i++) {
	for (let j = 0; j < target[i].length; j++) {
	  if (!prerequisites.includes(target[i][j]) && !toRead.includes(target[i][j])) {
	    toRead.push(target[i][j]);
	  }
	}
      }
      let str = toRead[0].code;
      for (let i = 1; i < toRead.length; i++) {
	str += ", " + toRead[i].code;
      }
      setModuleCheckError("You haven't completed the prerequisites yet. You may want to read " + str);
    }
  };

  const deleteModule = (mod) => {
    setPrerequisites(prerequisites.filter(m => m.code !== mod.code));
    if (mod.equivalent !== null) {
      setPrerequisites(prerequisites.filter(m => m.code !== mod.equivalent.code));
    }
    setModulesTaken(modulesTaken.filter(m => m.code !== mod.code));
  };

  const handleGceMod = (event) => {
    let mods = event.target.value;
    setGceMods(mods);
    let MA1301 = props.moduleMap["MA1301"];
    let PC1221 = props.moduleMap["PC1221"];
    let PC1222 = props.moduleMap["PC1222"];
    let LSM1301 = props.moduleMap["LSM1301"];
    let ES1000 = props.moduleMap["ES1000"];
    let ES1103 = props.moduleMap["ES1103"];
    if (mods.includes("Mathematics")) {
      if (!prerequisites.includes(MA1301)) {
	prerequisites.push(MA1301);
      }
    } else {
      if (!modulesTaken.includes(MA1301)) {
	setPrerequisites(prerequisites.filter(m => m.code !== "MA1301"));
      }
    }
    if (mods.includes("Physics")) {
      if (!prerequisites.includes(PC1221)) {
	prerequisites.push(PC1221);
      }
      if (!prerequisites.includes(PC1222)) {
	prerequisites.push(PC1222);
      }
    } else {
      if (!modulesTaken.includes(PC1221)) {
	setPrerequisites(prerequisites.filter(m => m.code !== "PC1221"));
      }
      if (!modulesTaken.includes(PC1222)) {
	setPrerequisites(prerequisites.filter(m => m.code !== "PC1222"));
      }
    }
    if (mods.includes("Biology")) {
      if (!prerequisites.includes(LSM1301)) {
	prerequisites.push(LSM1301);
      }
    } else {
      if (!modulesTaken.includes(LSM1301)) {
	setPrerequisites(prerequisites.filter(m => m.code !== "LSM1301"));
      }
    }
    if (mods.includes("QET Band2 or equivalent")) {
      if (!prerequisites.includes(ES1000)) {
	prerequisites.push(ES1000);
      }
    } else {
      if (!modulesTaken.includes(ES1000)) {
	setPrerequisites(prerequisites.filter(m => m.code !== "ES1000"));
      }
    }
    if (mods.includes("QET Band3 or equivalent")) {
      if (!prerequisites.includes(ES1000)) {
	prerequisites.push(ES1000);
      }
      if (!prerequisites.includes(ES1103)) {
	prerequisites.push(ES1103);
      }
    } else {
      if (!modulesTaken.includes(ES1000)) {
	setPrerequisites(prerequisites.filter(m => m.code !== "ES1000"));
      }
      if (!modulesTaken.includes(ES1103)) {
	setPrerequisites(prerequisites.filter(m => m.code !== "ES1103"));
      }
    }
  }; // TODO: Need to complete the gce-equivalent modules

  const canReadNextSem = (mod) => {
    let equiv = mod.equivalent === null ? mod : mod.equivalent;
    if (!mod.offered || !mod.sem1) return false; //TODO: can change the sem if needed
    let satisfy = !props.prerequisitesMap[equiv.code];
    for (let k = 0; !satisfy && k < props.prerequisitesMap[equiv.code].length; k++) {
      let allRead = true;
      for (let l = 0; allRead && l < props.prerequisitesMap[equiv.code][k].length; l++) {
	if (!prerequisites.includes(
	  props.prerequisitesMap[equiv.code][k][l])) {
	  allRead = false;
	}
      }
      if (allRead) {
        satisfy = true;
      }
    }
    return satisfy;
  }

  const handleRecommend = () => {
    let requirements = [];
    if (major1 === "" || residence === "") return ;
    requirements = requirements
      .concat(props.residences.requirement)
      .concat(props.residences.value[residence].requirement)
      .concat(props.primary.requirement)
      .concat(props.primary.value[faculty1].requirement)
      .concat(props.primary.value[faculty1].value[major1].requirement);
    let specs = [spec11, spec12, spec13, spec21, spec22, spec23];
    for (let i = 0; i < 3; i++) {
      if (specs[i] instanceof Array) {
	for (let j = 0; j < specs[i].length; j++) {
	  requirements = requirements
	    .concat(props.primary.value[faculty1].value[major1]
	      .value[i][specs[i][j]].requirement);
	}
      } else {
	requirements = requirements
	  .concat(props.primary.value[faculty1].value[major1]
	    .value[i][specs[i]].requirement);
      }
    }
    if (degree === "DDP") {
      if (major2 === "" || major1 === major2) return ;
      if (faculty1 !== faculty2) {
	requirements = requirements
	  .concat(props.primary.value[faculty2].requirement);
      }
      requirements = requirements
	.concat(props.primary.value[faculty2].value[major2].requirement);
      for (let i = 3; i < 6; i++) {
	if (specs[i] instanceof Array) {
	  for (let j = 0; j < specs[i].length; j++) {
	    requirements = requirements
	      .concat(props.primary.value[faculty2].value[major2]
		.value[i - 3][specs[i][j]].requirement);
	  }
	} else {
	  requirements = requirements
	    .concat(props.primary.value[faculty2].value[major2]
	      .value[i - 3][specs[i]].requirement);
	}
      }
    } else if (degree === "DMP") {
      if (major2 === "" || major1 === major2) return ;
      requirements = requirements
	.concat(props.second.value[faculty2].requirement)
	.concat(props.second.value[faculty2].value[major2].requirement);
      for (let i = 3; i < 6; i++) {
	if (specs[i] instanceof Array) {
	  for (let j = 0; j < specs[i].length; j++) {
	    requirements = requirements
	      .concat(props.second.value[faculty2].value[major2]
		.value[i - 3][specs[i][j]].requirement);
	  }
	} else {
	  requirements = requirements
	    .concat(props.second.value[faculty2].value[major2]
	      .value[i - 3][specs[i]].requirement);
	}
      }
    }
    for (let i = 0; i < minors.length; i++) {
      requirements = requirements.concat(props.minor.value[minors[i]].requirement);
    }

    let toRecommend = [];
    let canRecommend = [];
    let mayRecommend = [];
    for (let i = 0; i < requirements.length && canRecommend.length < 20 && mayRecommend.length < 20; i++) {
      let completed = 0;
      let notCompleted = [];
      for (let j = 0; j < requirements[i].list.length && completed < requirements[i].mc; j++) {
	if (prerequisites.includes(requirements[i].list[j])) {
	  completed += requirements[i].list[j].mc;
	} else {
	  notCompleted.push(requirements[i].list[j]);
	}
      }
      if (completed < requirements[i].mc) {
	for (let j = 0; j < notCompleted.length; j++) {
	  let mod = notCompleted[j];
	  let equiv = mod.equivalent === null ? mod : mod.equivalent;
	  let possible = !toRecommend.includes(equiv) && canReadNextSem(mod);
	  if (possible) {
	    toRecommend.push(mod);
	    canRecommend.push(mod);
	  } else if (mod.offered && mod.sem1) { //TODO: may change the sem
	    let currentSmallest = 100;
	    let mods = [];
	    for (let k = 0; k < props.prerequisitesMap[equiv.code].length; k++) {
	      let notDone = 0;
	      let modsNotDone = [];
	      for (let l = 0; l < props.prerequisitesMap[equiv.code][k].length; l++) {
		if (!prerequisites.includes(props.prerequisitesMap[equiv.code][k][l])) {
		  notDone += props.prerequisitesMap[equiv.code][k][l].mc;
		  modsNotDone.push(props.prerequisitesMap[equiv.code][k][l]);
		}
	      }
	      if (notDone < currentSmallest) {
		currentSmallest = notDone;
		mods = modsNotDone;
	      } else if (notDone === currentSmallest) {
		for (let l = 0; l < modsNotDone.length; l++) {
		  if (!mods.includes(modsNotDone[l])) mods.push(modsNotDone[l]);
		}
	      }
	    }
	    for (let k = 0; k < mods.length; k++) {
	      let possible = !toRecommend.includes(mods[k]) && canReadNextSem(mods[k]);
	      if (possible) {
		toRecommend.push(mods[k]);
		mayRecommend.push(mods[k]);
	      }
	    }
	  }
	}
      }
    }
    mayRecommend = mayRecommend.filter(x => !canRecommend.includes(x));
    toRecommend = canRecommend.concat(mayRecommend);
    let str = "You may want to read these modules next semester:\n";
    for (let i = 0; i < toRecommend.length; i++) {
      str += toRecommend[i].code + " \t";
    }
    setRecommend(str);
  }

  const showRecommends = () => (
    <div>
      <Typography>{recommend}</Typography>
    </div>
  );

  const showModuleCheckError = () => {
    if (!flag) {
      return (
	<Alert severity="error">{moduleCheckError}</Alert>
      );
    } else {
      return (
	<Alert severity="success">{moduleCheckError}</Alert>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
	<CssBaseline />
	<div className={classes.paper}>
	  <form className={classes.form}>
	    {showDegree()}
	    {showFaculty1(degree)}
	    {showMajor1(faculty1)}
	    {showSpec11(major1)}
	    {showSpec12(major1)}
	    {showSpec13(major1)}
	    {showFaculty2(degree)}
	    {showMajor2(faculty2)}
	    {showSpec21(major2)}
	    {showSpec22(major2)}
	    {showSpec23(major2)}
	    {showMinors(minors)}
	    {showResidence()}

	    {showModulesRead(modulesTaken)}
	    <TextField
	      fullWidth
	      label="Module Code"
	      variant="outlined"
	      value={moduleCode}
	      onChange={e => setModuleCode(e.target.value)}
	    />
	    <Button
	      fullWidth
	      variant="contained"
	      onClick={handleModules}
	    >
	      I've read this module
	    </Button>
	    {!!moduleError &&
	      <Alert severity="error">{moduleError}</Alert>
	    }

	    <FormControl className={classes.formControl} fullWidth>
	      <InputLabel id="gce-label">Passed GCE subjects</InputLabel>
	      <Select
		labelId="gce-label"
		id="gce"
		multiple
		value={gceMods}
		onChange={handleGceMod}
		input={<Input id="select-multiple-gce" />}
		renderValue={(selected) => (
		  <div className={classes.chips}>
		    {selected.map((value) => (
		      <Chip key={value} label={value} className={classes.chip} />
		    ))}
		  </div>
		)}
		MenuProps={MenuProps}
	      >
		{allGceMods.map((mod) => (
		  <MenuItem key={mod} value={mod} style={getStyles(mod, gceMods, theme)}>
		    {mod}
		  </MenuItem>
		))}
	      </Select>
	    </FormControl>

	    <Button
	      fullWidth
	      variant="contained"
	      onClick={handleRecommend}
	    >
	      Recommend modules
	    </Button>
	    {showRecommends()}

	    <TextField
	      fullWidth
	      label="Module to check"
	      variant="outlined"
	      value={moduleCheck}
	      onChange={e => setModuleCheck(e.target.value)}
	    />
	    <Button
	      fullWidth
	      variant="contained"
	      onClick={handleModuleCheck}
	    >
	      Check whether I can read this module next semester
	    </Button>
	    {!!moduleCheckError && showModuleCheckError()}
	  </form>
	</div>
      </Container>
    </div>
  );
}

