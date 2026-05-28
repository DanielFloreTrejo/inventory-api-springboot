import { useEffect, useState } from "react";

const initDataForm = {
    id: 0,
    name: '',
    description: '',
    price: 0,
};

export const ProductForm = ({ hanlderAdd, productSelected }) => {
    
    const [form, setForm] = useState( initDataForm );

    const {id, name, description, price} = form;

    useEffect(() => {
        setForm( productSelected );
    }, [ productSelected ]);

    return (<form onSubmit={event => {
        event.preventDefault();
        if (!name || !description || !price) {
            alert('Debe completar el formulario');
            return;
        }
        
        console.log( form );
        hanlderAdd( form );
        setForm( initDataForm );
    }}>
        <div>
            <input placeholder="Name" className="form-control my-3 w-75" name="name" value={name} onChange={(e) => setForm({...form, name: e.target.value})} />
        </div>
        <div>
            <input placeholder="Description" className="form-control my-3 w-75" name="description" value={description} onChange={(e) => setForm({...form, description: e.target.value})} />
        </div>
        <div>
            <input placeholder="Price" className="form-control my-3 w-75" name="price" value={price} onChange={(e) => setForm({...form, price: e.target.value})} />
        </div>
        <div>
            <button type="submit" className="btn btn-primary">
                { id > 0 ? 'Update' : 'Create'}
            </button>
        </div>
    </form>);
};