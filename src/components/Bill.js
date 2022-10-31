import React, { Component } from 'react';

class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slno: '',
            product: '',
            Quantity: '',
            Price: '',
            Total: ''

        }
    }
    handleBChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
        console.log(e.target.value)

    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch
            ('http://127.0.0.1:8000/Bill/', {
                method: "POST", header: {
                    'Accept': 'application/JSON',
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify({
                    Slno: this.state.slno,
                    Product: this.state.product,
                    price: this.state.Price,
                    quantity:this.state.Quantity,
                    total: this.state.Total,
                })
                
            })
            .then((Response) => Response.JSON)
            .then((JSON.stringify), console.log(JSON.stringify))
            .catch(e => {
                console.log(e)
                this.setState({ errorMsg: "error in retriving" })
            })


        }

        render() {
            const {Slno, Product, Quantity, Price, Total}= this.state
            return (
                <div>


                    <h3>Billing</h3>

                    <table >
                        <th>Slno</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <tbody>
                            <td><input text="number" id="Slno" name='Slno' value={Slno} onClick={this.handleBChange}/></td>
                            <td><input text="Text" id="Product" name='Product' value={Product} onClick={this.handleBChange}/></td>
                            <td><input text="number" id="Quantity" name='Quantity' value={Quantity} onClick={this.handleBChange} /></td>
                            <td><input text="number" id="Price" name='Price'value={Price} onClick={this.handleBChange}/></td>
                            <td><input text="number" id="Total" name='Total' value={Total} onClick={this.handleBChange}/></td>
                            <button type="submit" onClick={this.handleSubmit}>submit</button>
                            </tbody>

                    </table>
                </div >
            );
        
        
    }
}
export default Bill