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
];//TODO: need to complete the list of gce modules


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
	? theme.typography.fontWeightRegular
	: theme.typography.fontWeightMedium,
  };
}

export default function Form() {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [degree, setDegree] = useState("hon");
  const [faculty, setFaculty] = useState("");
  const [programme, setProgramme] = useState("");
  const [moduleCode, setModuleCode] = useState("");
  const [moduleError, setModuleError] = useState(null);
  const [modulesTaken, setModulesTaken] = useState([]);
  const [gceMods, setGceMods] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [moduleCheck, setModuleCheck] = useState("");
  const [moduleCheckError, setModuleCheckError] = useState(null);
  const [flag, setFlag] = useState(null);
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

  const handleFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleProgramme = (event) => {
    setProgramme(event.target.value);
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
	<MenuItem value="DDP-hon">Double Degrees Programme (Hons.)</MenuItem>
	<MenuItem value="DDP">Double Degrees Programme</MenuItem>
	<MenuItem value="hon">Honours Bachelor Degree</MenuItem>
      </Select>
    </FormControl>
  ); // TODO: complete the programmes

  const showFaculties = (deg) => {
    if (deg === "hon") {
      return (
	<FormControl variant="outlined" className={classes.formControl} fullWidth>
	  <InputLabel id="faculty-label">Faculty</InputLabel>
	  <Select
	    labelId="faculty-label"
	    id="faculty"
	    value={faculty}
	    onChange={handleFaculty}
	    label="Faculty"
	  >
	    <MenuItem value="FASS">Faculty of Arts and Social Sciences</MenuItem>
	    <MenuItem value="FoS">Faculty of Sciences</MenuItem>
	    <MenuItem value="SoC">School of Computing</MenuItem>
          </Select>
        </FormControl>
      );
    }
    return null;
  }; // TODO: show all faculties

  const programmes = (faculty) => {
    if (faculty === "SoC") {
      return (
	<FormControl variant="outlined" className={classes.formControl} fullWidth>
	  <InputLabel id="programme-label">Major</InputLabel>
	  <Select
	    labelId="programme-label"
	    id="programme"
	    value={programme}
	    onChange={handleProgramme}
	    label="Programme"
	  >
	    <MenuItem value="SoC-CS">Computer Sciences</MenuItem>
	    <MenuItem value="SoC-BZA">Business Analytics</MenuItem>
	    <MenuItem value="SoC-IS">Information System</MenuItem>
	  </Select>
	</FormControl>
      )
    }
    return (<p></p>);
  }; //TODO: Full list of programmes of each faculties

  const showModulesRead = () => (
    modulesTaken.map(mod => (
      <Fab
	variant="extended"
	className={classes.margin}
	onClick={() => deleteModule(mod)}
      >
	{mod}
	<HighlightOffIcon className={classes.extendedIcon} />
      </Fab>
    ))
  );

  const handleModules = () => {
    setModuleError(null);
    if (!isValidModuleCode(moduleCode)) {
      setModuleError("The module code format is incorrect.");
      return;
    }

    if (prerequisites.includes(moduleCode)) {
      setModuleError("You've already added this module or you've completed preclusions.");
      return;
    }

    prerequisites.push(moduleCode);
    modulesTaken.push(moduleCode);
  };

  const handleModuleCheck = () => {
    setModuleCheckError(null);
    if (!isValidModuleCode(moduleCheck)) {
      setModuleCheckError("The module code format is incorrect.");
      return ;
    }

    check(moduleCheck);
  }

  const check = (mod) => {
    setFlag(true);
  }; //TODO: Check whether I can read mod next sem.

  const deleteModule = (mod) => {
    setPrerequisites(prerequisites.filter(m => m !== mod));
    setModulesTaken(modulesTaken.filter(m => m !== mod));
  };

  const isValidModuleCode = (code) => {
    let valid = true;
    let index = 0;
    while (index < 2) {
      let char = code.charAt(index++);
      if (char > 'Z' || char < 'A') {
	valid = false;
	break;
      }
    }
    while (index < 6) {
      let char = code.charAt(index++);
      if (char > '9' || char < '0') {
	valid = false;
	break;
      }
    }
    if (code.length > 6) {
      let char = code.charAt(index);
      if (char > 'Z' || char < 'A') {
	valid = false;
      }
    }
    return valid;
  }; // TODO: Will need to modify according to real module codes

  const handleGceMod = (event) => {
    let mods = event.target.value;
    setGceMods(mods);
    let mod = mods[mods.length - 1];
    if (mod === "Mathematics" && !prerequisites.includes("MA1301")) {
      prerequisites.push("MA1301");
    }
  }; // TODO: Need to complete the gce-equivalent modules

  const handleRecommend = () => {
    recommend.push("CS2030");
    recommend.push("CS2040S");
    recommend.push("CS3230");
  } // TODO: Generate from database


  const deleteRec = (mod) => {
    setRecommend(recommend.filter(m => m !== mod));
  };

  const showRecommends = () => (
    recommend.map(mod => (
      <Fab
	variant="extended"
	className={classes.margin}
	onClick={() => deleteRec(mod)}
      >
	{mod}
	<HighlightOffIcon className={classes.extendedIcon} />
      </Fab>
    ))
  );

  const displayCheck = () => {
    if (flag === true) {
      return (<Typography>You can read this mod next semester.</Typography>);
    } else if (flag === false) {
      return (<Typography>You cannot read this mod next semester.</Typography>);
    }
  }; //TODO: if cannot read, can provide more detailed info

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
	<CssBaseline />
	<div className={classes.paper}>
	  <form className={classes.form}>
	    {showDegree()}
	    {showFaculties(degree)}
	    {programmes(faculty)}

	    {showModulesRead()}
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
	    {recommend.length > 0 && (
	      <Typography>{recommend.length} modules are recommended</Typography>
	    )}

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
	    {!!moduleCheckError &&
	      <Alert severity="error">{moduleCheckError}</Alert>
	    }
	    {displayCheck()}
	  </form>
	</div>
      </Container>
    </div>
  );
}

