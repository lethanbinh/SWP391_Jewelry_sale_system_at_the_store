import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CRow,
} from '@coreui/react';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        image: '', // Lưu trữ dưới dạng base64 nếu bạn muốn hiển thị từ local
        description: '',
        purchasePrice: '',
        sellPrice: '',
        quantity: '',
        status: '',
        weight: '',
        size: '',
        stallLocation: '',
        type: '',
        stallId: ''
    });

    const [items, setItems] = useState([]);

    // Xử lý thay đổi các trường dữ liệu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    // Xử lý khi người dùng chọn ảnh
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduct((prevProduct) => ({
                    ...prevProduct,
                    image: reader.result // Lưu trữ ảnh dưới dạng base64
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Xử lý khi người dùng nhấn nút submit
    const handleSubmit = () => {
        // Thực hiện các logic xử lý khi người dùng submit form, ví dụ lưu vào cơ sở dữ liệu
        console.log('Product submitted:', product);
        // Reset form after submission (optional)
        setProduct({
            name: '',
            image: '',
            description: '',
            purchasePrice: '',
            sellPrice: '',
            quantity: '',
            status: '',
            weight: '',
            size: '',
            stallLocation: '',
            type: '',
            stallId: ''
        });
    };

    const deleteItemHandler = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const editItemHandler = (id, updatedItem) => {
        setItems(items.map((item) => (item.id === id ? updatedItem : item)));
    };


    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Add Product</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={6}>
                                <CFormInput
                                    type="text"
                                    name="name"
                                    label="Name"
                                    value={product.name}
                                    onChange={handleChange}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput
                                    type="file"
                                    name="image"
                                    label="Image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol md={12}>
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt="Product Preview"
                                        style={{ width: '100%', height: 'auto', marginTop: '10px' }}
                                    />
                                )}
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol md={12}>
                                <CFormTextarea
                                    name="description"
                                    label="Description"
                                    value={product.description}
                                    onChange={handleChange}
                                />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol md={4}>
                                <CFormInput
                                    type="number"
                                    name="purchasePrice"
                                    label="Purchase Price"
                                    value={product.purchasePrice}
                                    onChange={handleChange}
                                />
                            </CCol>
                            <CCol md={4}>
                                <CFormInput
                                    type="number"
                                    name="sellPrice"
                                    label="Sell Price"
                                    value={product.sellPrice}
                                    onChange={handleChange}
                                />
                            </CCol>
                            <CCol md={4}>
                                <CFormInput
                                    type="number"
                                    name="quantity"
                                    label="Quantity"
                                    value={product.quantity}
                                    onChange={handleChange}
                                />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol md={4}>
                                <CFormInput
                                    type="number"
                                    name="weight"
                                    label="Weight"
                                    value={product.weight}
                                    onChange={handleChange}
                                />
                            </CCol>
                            <CCol md={4}>
                                <CFormInput
                                    type="text"
                                    name="size"
                                    label="Size"
                                    value={product.size}
                                    onChange={handleChange}
                                />
                            </CCol>
                            <CCol md={4}>
                                <CFormInput
                                    type="text"
                                    name="stallLocation"
                                    label="Stall Location"
                                    value={product.stallLocation}
                                    onChange={handleChange}
                                />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol md={4}>
                                <CFormInput
                                    type="text"
                                    name="type"
                                    label="Type"
                                    value={product.type}
                                    onChange={handleChange}
                                />
                            </CCol>
                            <CCol md={4}>
                                <CFormSelect
                                    onChange={handleChange}
                                    label="Stall">
                                    <option value="">Select Stall</option>
                                    <option value="Stall 1">Stall 1</option>
                                    <option value="Stall 2">Stall 2</option>
                                    <option value="Stall 3">Stall 3</option>
                                    <option value="Stall 4">Stall 4</option>
                                </CFormSelect>
                            </CCol>
                            <CCol md={4}>
                                <CFormSelect
                                    onChange={handleChange}
                                    label="Status">
                                    <option value="">Select Status</option>
                                    <option value="PENDING">PENDING</option>
                                    <option value="CONFIRMED">CONFIRMED</option>
                                    <option value="SHIPPED">SHIPPED</option>
                                    <option value="DELIVERED">DELIVERED</option>
                                    <option value="CANCELLED">CANCELLED</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                        <CButton
                            color="primary"
                            className="mt-4"
                            onClick={handleSubmit}
                        >
                            Submit Product
                        </CButton>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default AddProduct;
