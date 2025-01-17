

'use client';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
    <div className="card mb-3 cart-item">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`https://placehold.co/400x400?text=${item.name}`}
                    className="img-fluid rounded-start"
                    alt={item.name}
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title cart-item-name">{item.name}</h5>
                    <p className="card-text cart-item-price">
                        <strong>Price:</strong> ${item.price}
                    </p>
                    <div className="d-flex align-items-center mb-2">
                        <button
                            className="btn btn-secondary btn-sm me-2 cart-item-decrease"
                            onClick={() =>
                                onUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))
                            }
                        >
                            -
                        </button>
                        <span className="cart-item-quantity">{item.quantity}</span>
                        <button
                            className="btn btn-secondary btn-sm ms-2 cart-item-increase"
                            onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                    <button className="btn btn-danger cart-item-remove" onClick={() => onRemove(item.productId)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default CartItem;