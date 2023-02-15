import React, { useState } from 'react';
import { Cancel, Close, Save } from '../../../node_modules/@mui/icons-material/index';
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormGroup,
    IconButton,
    Slide,
    Tooltip
} from '../../../node_modules/@mui/material/index';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import CustomTextField from "../../components/CustomTextField";
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import AutocompleteCustomer from "../../components/AutocompleteCustomer";
import moment from '../../../node_modules/moment/moment';
import { useEffect } from 'react';



const rows = [
    {
        id: 1,
        sex: "Nam"
    },
    {
        id: 2,
        sex: "Nữ"
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 6
    },
    closeButton: {
        position: 'absolute',
        right: 3,
        top: 3,
        color: "#595959",
    },
    paperWidthLg: {
        height: '852px',
    },
    paperWidthMd: {
        height: '640px',
    },
    paperWidthSm: {
        height: '296px',
    },
}));

const useStylesSm = makeStyles(theme => ({
    paperWidthSm: {
        height: '400px',
    },
}));

const useStylesMd = makeStyles(theme => ({
    paperWidthMd: {
        height: '640px',
    },
}));

const useStylesLg = makeStyles(theme => ({
    paperWidthLg: {
        height: '852px',
    },
}));

const Transition = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

export function TaskForm(props) {
    let [msv, setMsv] = useState("");

    let [data, setData] = useState({});
    const handleClickInput = () => {
        props.onSave();
    }
    const {
        title,
        children,
        onClose,
        open,
        onSave,
        canSave,
        onCancel,
        saveText,
        cancelText,
        maxWidth,
        dialogAction,
        extraAction,
        disabledFlex,
    } = props;

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const classes = useStyles();
    const smClasses = useStylesSm();
    const mdClasses = useStylesMd();
    const lgClasses = useStylesLg();
    let dialogClasses = null;
    if (maxWidth === 'sm') {
        dialogClasses = smClasses;
    } else if (maxWidth === 'md') {
        dialogClasses = mdClasses;
    } else if (maxWidth === 'lg') {
        dialogClasses = lgClasses;
    }

    //khai data
    const onChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }
    const [check, setCheck] = useState(false)
    useEffect(() => {
        setData({
            ...data,
            "check": check
        })
    }, [check])
    console.log("data", data);
    return (
        <Dialog
            TransitionComponent={Transition}
            fullWidth
            maxWidth={maxWidth}
            onClose={onClose}
            open={open}
            classes={dialogClasses}

        >
            {title && (
                <DialogTitle id="alert-dialog-title" className={classes.root}>
                    {title}
                    {onClose && (
                        <Tooltip title="Đóng">
                            <IconButton
                                size="small"
                                aria-label="close"
                                onClick={onClose}
                                className={classes.closeButton}
                            >
                                <Close />
                            </IconButton>
                        </Tooltip>
                    )}
                </DialogTitle>
            )}
            <br />
            <div style={{ padding: '0 32px' }}>
                <div>
                    MSV : <br />
                    <CustomTextField clearText onChange={(e) => onChange("msv", e)} />
                </div>
                <br />
                <div>
                    Họ Và Tên : <br />
                    <CustomTextField clearText onChange={(e) => onChange("name", e)} />
                </div>
                <br />
                <div>
                    Email : <br />
                    <CustomTextField clearText onChange={(e) => onChange("email", e)} />
                </div>
                <br />
                <div>
                    <div>
                        <CustomDatePicker onChange={(e) => onChange("date", moment(new Date(e)).format("DD/MM/YYYY"))} />
                    </div>
                    <br />
                    <div>
                        Tuổi : <br />
                        <CustomTextField clearText onChange={(e) => onChange("age", e)} />
                        {/* <CustomNumber /> */}
                    </div>
                    <br />
                    <div>
                        Quê Quán : <br />
                        <CustomTextField clearText onChange={(e) => onChange("address", e)} />
                    </div>
                    <br />
                    <div>
                        <AutocompleteCustomer
                            options={rows}
                            textLabel="Giới Tính"
                            error={false}
                            helperText=""
                            optionLabel="sex"
                            onChange={(e) => onChange("gender", e && e.id)}
                        />
                    </div>
                    <div>
                            <FormControlLabel control={<Checkbox defaultChecked />} onChange={(e) => setCheck(!check)} label="Test Check" />
                    </div>
                </div>
            </div>


            <DialogContent
                dividers
                className="dialog-content"
                style={
                    !disabledFlex ? { display: 'flex', flexDirection: 'column' } : {}
                }
            >
                {children}
            </DialogContent>
            {dialogAction && (
                <DialogActions>
                    {onSave && (
                        // checkHasPermission(currentUser, savePermission) &&
                        <Button
                            startIcon={<Save />}
                            size="small"
                            onClick={handleClickInput}
                            disabled={!canSave}
                            color="primary"
                            variant="contained"
                        >
                            {saveText}
                        </Button>
                    )}
                    {/* {checkHasPermission(currentUser, closePermission) && ( */}
                    <Button
                        startIcon={<Cancel />}
                        size="small"
                        onClick={onCancel || onClose}
                        color="secondary"
                        variant="contained"
                    >
                        {cancelText}
                    </Button>
                    {/* )} */}
                    {extraAction}
                </DialogActions>
            )}
        </Dialog>
    );
}

TaskForm.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    saveText: PropTypes.string,
    cancelText: PropTypes.string,
    maxWidth: PropTypes.string,
    dialogAction: PropTypes.bool,
    canSave: PropTypes.bool,
    extraAction: PropTypes.object,
    disabledFlex: PropTypes.bool,
    currentUser: PropTypes.object,
    savePermission: PropTypes.string,
    closePermission: PropTypes.string,
};

TaskForm.defaultProps = {
    maxWidth: 'md',
    saveText: 'Lưu lại',
    cancelText: 'Hủy',
    dialogAction: true,
    canSave: true,
};

export default TaskForm;
