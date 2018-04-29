import React from 'react';
import config from '../../config/config';
import axios from 'axios';
class Home extends React.Component{

submitRequest(){
const data = {};
data.ORDER_ID = this.refs.ORDER_ID.value;
data.CUST_ID = this.refs.CUST_ID.value;
data.INDUSTRY_TYPE_ID = this.refs.INDUSTRY_TYPE_ID.value;
data.CHANNEL_ID = this.refs.CHANNEL_ID.value;
data.TXN_AMOUNT = this.refs.TXN_AMOUNT.value;
data.PAYTM_MERCHANT_KEY = this.refs.PAYTM_MERCHANT_KEY.value;
data.WEBSITE = this.refs.WEBSITE.value;
data.MID = this.refs.MID.value;
axios.post('/testTxn', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

	render(){
		return (
			<div >
				<h2>Transaction Details</h2>
				<form className="form-horizontal" name="checkoutForm" id="form1" method="post" action="/testtxn">
					<div className="form-group">
						<label className="control-label col-sm-2">ORDER_ID:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control"  name="ORDER_ID" value={Date.now() + Math.random().toString(36).substr(2, 9)}/>
						</div>
					</div>					
					<div className="form-group">
						<label className="control-label col-sm-2">CUSTOMER_ID:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control"  name="CUST_ID" value={Date.now() + Math.random().toString(36).substr(2, 9)}/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2">INDUSTRY_TYPE_ID:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control"  name="INDUSTRY_TYPE_ID" value={config.INDUSTRY_TYPE_ID}/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2">CHANNEL:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" name="CHANNEL_ID" value={config.CHANNEL_ID}/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2">TRANSACTION_AMOUNT:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control"  name="TXN_AMOUNT" value="125"/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2">PAYTM_MERCHANT_KEY:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" name="PAYTM_MERCHANT_KEY" value={config.PAYTM_MERCHANT_KEY}/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2">WEBSITE:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control"  name="WEBSITE" value={config.WEBSITE}/>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2">MID:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" name="MID" value={config.MID}/>
						</div>
					</div>
					<div className="form-group">        
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-default" >Checkout</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Home;