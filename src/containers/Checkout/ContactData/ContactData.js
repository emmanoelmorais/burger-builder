import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{
    state= {
        name:'',
        email:'',
        address:{
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({
            loading: true
        });
        //alert('You continue!');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name: 'Thiago M',
                address:{
                    street: 'Rua da Lionesa',
                    zipCode: '0000-000',
                    country: 'Portugal'
                },
                email: 'teste@teste.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                //console.log (response)
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                //console.log (error)
                this.setState({
                    loading: false
                });
            });
    }

    render(){
        let form = (
            <form>
                <input type="text" name="name" className={classes.Input} placeholder="Your name"/>
                <input type="email" name="email" className={classes.Input} placeholder="Your email"/>
                <input type="text" name="street" className={classes.Input} placeholder="Street"/>
                <input type="text" name="postal" className={classes.Input} placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;