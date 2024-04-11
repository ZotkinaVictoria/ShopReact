export default function ShopCard(props) {
    const {
        id,
        name,
        price,
        images,
        appendToCart
    } = props;
    const item = {id: id, name: name, price: price}
    return (
        <div id={"product-" + id} className="card grey darken-4 white-text">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={images.icon} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator white-text">
                    {name}
                </span>
                <p className="pink-text text-lighten-4">Цена: {price} руб.</p>
            </div>
            <div className="card-action">
                <button className="btn-small pink" onClick={() => appendToCart(item, 1)} >
                    Купить
                </button>
                <button className="btn-small right pink lighten-2">Больше</button>
            </div>
        </div>
    );
}