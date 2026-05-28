


export const ProductTable = ( { products, hanlderProductSelected, hanlderRemoveProduct } ) => {
    return <table className="table table hover table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Descipcion</th>
                <th>Precio</th>
                <th>Update</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map( product => {
                    return (<tr key={ product.id }>
                                <th>{ product.id }</th>
                                <th>{ product.name }</th>
                                <th>{ product.description }</th>
                                <th>{ product.price }</th>
                                <th><button className="btn btn-primary" onClick={() => hanlderProductSelected(product)}>Update</button></th>
                                <th><button className="btn btn-danger" onClick={() => hanlderRemoveProduct(product.id)}>Remove</button></th>
                            </tr>);
                })
            }
        </tbody>
    </table>;
};