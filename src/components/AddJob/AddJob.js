import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import './AddJob.css';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
      },
    input: {
        display: 'none',
        margin: theme.spacing(1),
    },
}));


class AddJob extends Component {

    render() {
        return (
            <div>
                <form className="root">
                    <h1>Add a Job Form</h1>

                    <TextField
                        id="outlined-name"
                        label="Full Name"
                        className="textField"
                        // value={values.name}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                    <FormControl className="formControl">   
                    <label>Please Select JOB Position</label>
                        <Select
                        // value={values.job}
                        // onChange={handleChange}
                        inputProps={{
                          name: 'job',
                          id: 'job-simple',
                        }}
                        >
                            <MenuItem value="SEI">Intern-Software Engineer</MenuItem>
                            <MenuItem value="ASE">Associate Software Engineer</MenuItem>
                            <MenuItem value="SE">Software Engineer</MenuItem>
                            <MenuItem value="SSE">Senior Software Engineer</MenuItem>
                            <MenuItem value="TC">Tech Lead</MenuItem>
                            <MenuItem value="AR">Software Architect</MenuItem>
                        </Select>
                    </FormControl>
                   <br></br>
                   <label>Date of Birth</label> <br></br>
                    <TextField
                        id="date"
                        // label="Date of Birth"
                        type="date"
                        defaultValue="2017-05-24"
                        className={useStyles.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                    <label>Degree: </label> &nbsp; &nbsp;
                    <Input
                        placeholder="BEng(hons) Software Engineering"
                        className="input"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                    <br/><br/>

                    <label>Upload Your Resume</label>
                    <div className="Field">
                         <input type="file" name="file"/>
                    </div>

                    <div className="Field">     
                       <Button variant="contained" color="secondary" className="button" onClick={this.props.cancelClicked}>Cancel</Button> &nbsp; &nbsp;
                       <Button variant="contained" color="primary" className="button" onClick={this.props.okClicked}>OK</Button>
                    </div>
                </form>
            </div>
        );
    }
}


export default AddJob;