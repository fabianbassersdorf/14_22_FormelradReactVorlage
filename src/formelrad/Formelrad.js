import {useState} from "react";
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues(values => ({
            ...values,
            u: values.i * values.r,
            i: values.u / values.r,
            p: values.u * values.i
        }));
    }

    return (
        <>
            <h2>Formelrad</h2>
            <img src={formelrad} width="200" alt="Formelrad"/>
            <form onSubmit={handleSubmit}>
                <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                <InputField color={"black"} value={values.i} label="Stromstaerke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                <InputField color={"black"} value={values.p} label="Leistung" handleChange={e => {setValues(values => ({...values, p: e.target.value}))}} />
                <button type="submit">Calculate</button>
            </form>
        </>
    )
}
