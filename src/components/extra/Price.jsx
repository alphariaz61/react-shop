export default function Price ({value=0, decimals=0}) {
    return (
        <>${Number(value).toFixed(decimals)}</>
    )
}