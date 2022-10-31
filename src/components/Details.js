import React, { Component } from "react";



class Details extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            billno: "",
            buyername: ' ',
            sellername: ' ',
            buyeraddress: ' ',
            selleraddress: ' ',
            buyerphonenumber: ' ',
            sellerphonenumber: ' ',
        }




    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
        console.log(e.target.value)

    }


    handleCheck = (e) => {
        e.preventDefault();
        fetch
            ('http://127.0.0.1:8000/Details/', {
                method: "POST", header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    billno: this.state,
                    bname: this.state.state,
                    sname: this.state.sellername,
                    baddress: this.state.buyeraddress,
                    saddress: this.state.selleraddress,
                    bphonenumber: this.state.buyerphonenumber,
                    sphonenumber: this.state.sellerphonenumber,


                })
            })

            .then((Response) => Response.JSON)
            .then((JSON.stringify), console.log(JSON.stringify))
            .catch(e => {
                console.log(e)
                this.setState({ errorMsg: "error in retriving" })
            })


    }



    render(){
    const { billno, buyername, sellername, buyeraddress, selleraddress, buyerphonenumber, sellerphonenumber } = this.state

    return (
        <form onSubmit={this.handleCheck}>
            <h3>Detail</h3>
            <table>

                <tr>
                    <td>BILLNO</td><td><input type="number" placeholder="billno" name="billno" value={billno} onChange={this.handleChange} /></td></tr>
                <tr>
                    <td>BUYER NAME</td><td><input type="text" placeholder="buyername" name="buyername" value={buyername} onChange={this.handleChange} /></td>
                    <td>SELLER NAME</td><td><input type="text" placeholder="sellername" name="sellername" value={sellername} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td>BUYER ADDRESS</td><td><input type="text" placeholder="buyer address" name="buyeraddress" value={buyeraddress} onChange={this.handleChange} /></td>
                    <td>SELLER ADDRESS</td><td><input type="text" placeholder="seller address" name="selleraddress" value={selleraddress} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td>BUYER PHONENUMBER</td><td><input type="text" placeholder="buyer phonenumber" name="buyerphonenumber" value={buyerphonenumber} onChange={this.handleChange} /></td>
                    <td>SELLER PHONENUMBER</td><td><input type="text" placeholder="seller phonenumber" name="sellerphonenumber" value={sellerphonenumber} onChange={this.handleChange} /></td>
                </tr>
                <button type="submit">Check</button>
            </table>
        </form>
    );

}
    }

export default Details