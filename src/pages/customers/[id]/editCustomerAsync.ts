import axios from 'axios';

const editCustomerAsync = async (customerData) => {
    try{
        const response = await axios.put('http://localhost:4567/customers', customerData);
        console.log('Customer added successfully:', response.data);
        return response;
      } catch (error) {
        console.error('Error adding customer:');
        throw error.response.data;
      }
    };
    
    export default editCustomerAsync;