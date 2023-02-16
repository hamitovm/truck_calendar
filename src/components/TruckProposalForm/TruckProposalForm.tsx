import {Modal} from "../common/Modal";

import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {useAppDispatch} from "../../state/hooks";
import {closeTruckProposalModalAC} from "../../state/truck-proposal-modal-reducer";
import {getDayMonthYear} from "../../helpers/helpers";
import {DepartmentType} from "../../state/departments-reducer";
import {
    Button,
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import {TruckType} from "../../state/truck-cards-reducer";
import {Form, FormikProvider, useField, useFormik} from 'formik';
import {addTruckProposalAC, TruckProposalsType, TruckProposalType} from "../../state/truck-proposals-reducer";

type TruckProposalFormType = {}
type FormikErrorType = {
    date?: string,
    description?: string | null,
    truckId?: string | null,
    driver?: string | null,
    departmentId?: string | null,
    highPriority?: string
}
type MySelectType = {
    label: string
    id: string
    name: string
    children: React.ReactNode
}
const MySelect = ({label, ...props}: MySelectType) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {props.children}
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const TruckProposalForm = (props: TruckProposalFormType) => {
    // console.log('in TruckProposalForm')
    const dispatch = useAppDispatch()
    const proposals = useSelector<AppRootStateType, TruckProposalsType>(state => state.truckProposals)
    const date = useSelector<AppRootStateType, Date | null>(state => state.truckProposalModal.date)
    const department = useSelector<AppRootStateType, DepartmentType | null>(state => state.truckProposalModal.department)
    const isModalActive = useSelector<AppRootStateType, boolean>(state => state.truckProposalModal.isModalActive)
    const closeModal = (value: boolean) => {
        dispatch(closeTruckProposalModalAC())
    }
    const trucks = useSelector<AppRootStateType, Array<TruckType>>(state => state.truckCards)
    const [truckId, setTruckId] = React.useState('');
    const onTruckSelectChange = (e: SelectChangeEvent) => {
        setTruckId(e.target.value)
    }

    const formik = useFormik({
        initialValues: {
            // date: date && date,
            description: '',
            // truckId: '',
            driver: '',
            // departmentId: department && department.id,
            highPriority: false
        },
        // validate: (values: any) => {
        //     const errors: FormikErrorType = {}
        //     if (!values.description) {
        //         errors.description = 'Required'
        //     }
        //     if (!values.truckId) {
        //         errors.truckId = 'Required'
        //     }
        //     return errors
        // },
        onSubmit: values => {

            if (date && truckId && department) {
                console.log('in if')
                dispatch(addTruckProposalAC(getDayMonthYear(date), values.description, truckId, values.driver, department.id, values.highPriority))
                console.log(proposals)
                dispatch(closeTruckProposalModalAC())
                values.description = ''
                values.driver = ''
                values.highPriority = false
                setTruckId('')
            }
            // alert(JSON.stringify(values));
        },
    })
    console.log(formik.values)


    return (
        <div>
            <Modal active={isModalActive} setActive={closeModal}>
                <div>{date && getDayMonthYear(date)}</div>
                <div>{department && department.shortName}</div>
                <FormikProvider value={formik}>
                    {/*    <Form onSubmit={formik.handleSubmit}>*/}
                    <FormControl className={'truck-proposal-form'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <InputLabel id="truck-select-label">Вид техники</InputLabel>
                            <Select
                                labelId="truck-select-label"
                                id="demo-simple-select"
                                value={truckId}
                                label="Вид техники"
                                // displayEmpty
                                onChange={onTruckSelectChange}>
                                <MenuItem value="" selected>
                                    <em>None</em>
                                </MenuItem>
                                {trucks.map(el => {
                                    return <MenuItem value={el.id}>{el.title}</MenuItem>
                                })}
                            </Select>
                            <TextField label="Description"
                                       error={formik.errors.description ? true : false}
                                       helperText="Обязательное поле"
                                       multiline
                                       rows={3}
                                       margin="normal"
                                       name={'description'}
                                       onChange={formik.handleChange}
                                       value={formik.values.description}/>
                            <TextField label="Driver name"
                                       helperText="Обязательное поле"
                                       margin="normal"
                                       name={'driver'}
                                       onChange={formik.handleChange}
                                       value={formik.values.driver}/>
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Отправить заявку
                            </Button>
                        </FormGroup>
                        {/*</Form>*/}
                        {/**/}
                    </form>
                    </FormControl>

                </FormikProvider>

            </Modal>
        </div>
    )
}
