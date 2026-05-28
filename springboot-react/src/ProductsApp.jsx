import { useEffect, useState } from 'react';
import { ProductTable } from './components/ProductTable';
import { ProductForm } from './components/ProductForm';
import { create, findAll, remove, update } from './services/ProductService';

/* const initProducts = [{
    id: 1,
    name: 'Monitor Asus 27 pulgadas',
    description: 'Monitor LCD, color negro',
    price: 1000,
},
{
    id: 2,
    name: 'Celular A24 Samsung',
    description: 'Celular A24, color negro',
    price: 5000,
}]; */

export const ProductsApp = ( { title } ) => {

    const [products, setProducts] = useState( [] );
    const [productSelected, setProductSelected] = useState({ id:0, name: '', description: '', price: 0,});

    const getProducts = async() => {
        const result = await findAll();
        setProducts( result.data );
    };

    useEffect(() => {
        getProducts();
    }, []);

    // agreagr o actualizar producto
    const hanlderAddProduct = async( product ) => {
        if (product.id > 0) {
            const response = await update( product );
            setProducts(
                products.map( prod => { 
                    if (prod.id === product.id) {
                        return {...response.data };
                    }
                    return prod;
                })
            );

            // Swal.fire({
            // title: "Actualizado con éxito!",
            // text: `¡Producto ${product.name} fue actualizado con éxito!`,
            // icon: "success"
            // });

        } else {
            const response = await create( product );
            setProducts([...products, { ...response.data }]);
            
            // Swal.fire({
            // title: "Creado con éxito!",
            // text: `¡Producto ${product.name} fue creado con éxito!`,
            // icon: "success"
            // });
        }
    };

    const hanlderProductSelected = ( product ) => {
        setProductSelected( {...product } );
    };

    // eliminar un producto
    const hanlderRemoveProduct = async( id ) => {
        await remove( id );
        setProducts(
            products.filter( product => product.id != id)
        );
    };

    return <div className='container my-4'>
        <h2>{ title }</h2>
        <div className='row'>
            <div className='col'>
                <ProductForm hanlderAdd = { hanlderAddProduct } productSelected = { productSelected } />
            </div>
            <div className='col'>
                {
                    products.length > 0 ? <ProductTable products = { products } hanlderProductSelected = { hanlderProductSelected } hanlderRemoveProduct = { hanlderRemoveProduct } /> 
                    : <div className='alert alert-warning'>No hay productos en sistema</div>
                }
            </div>
        </div>
    </div>;
};
