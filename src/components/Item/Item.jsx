import './Item.css'
export const Item = ({ id, category, description, img, name, price, stock }) => {
    return (
        <>
            <div className="card">
                <div>{category}</div>
                <img src={img} />
                <div>{name}</div>
                <div>{price}</div>
                <button className="btn-card">Ver Detalle</button>
            </div>
        </>
    )
}


