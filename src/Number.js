function Number({ value, label }) {
    return (
        <li className="part">
            <p className="part">
                {String(value).padStart(2, "0")}
            </p>
            <p className="unit">{label}</p>
        </li>
    )
}

export default Number;