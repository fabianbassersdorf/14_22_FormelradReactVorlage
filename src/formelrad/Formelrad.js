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

    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues(values => {
            const r = values.r === "" ? 0 : values.r;
            const u = values.u === "" ? 0 : values.u;
            const i = values.i === "" ? 0 : values.i;
            const p = values.p === "" ? 0 : values.p;

            const newValues = {
                ...values,
                u: i * r,
                i: u / r,
                p: u * i
            };
            setMessage("Berechnungen durchgeführt");
            return newValues;
        });
    }

    const handleClear = () => {
        setValues({
            u: "",
            i: "",
            r: "",
            p: ""
        });
        setMessage("");
    }

    const getColor = (field) => {
        if (field === "u" && values.u == values.i * values.r) return "red";
        if (field === "i" && values.i == values.u / values.r) return "red";
        if (field === "p" && values.p == values.u * values.i) return "red";
        return "black";
    }

    return (
        <>
            <h2>Formelrad</h2>
            <img src={formelrad} width="200" alt="Formelrad"/>
            <form onSubmit={handleSubmit}>
                <InputField color={getColor("u")} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                <InputField color={getColor("i")} value={values.i} label="Stromstaerke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                <InputField color={getColor("r")} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                <InputField color={getColor("p")} value={values.p} label="Leistung" handleChange={e => {setValues(values => ({...values, p: e.target.value}))}} />
                <button type="submit">Calculate</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
            <p>{message}</p>
        </>
    )
}
