var React = require('react');
 
var Testtxn = React.createClass({
  render: function () {
    return (
<html>
<head>
<title>Merchant Check Out Page</title>
<meta name="GENERATOR" content="Evrsoft First Page" />
</head>
<body>

	<h1>Merchant Check Out Page</h1>
	<pre>
	</pre>
	<form id="form1" method="post" action="#">
		<table border="1">
			<tbody>
				<tr>
					<th>S.No</th>
					<th>Label</th>
					<th>Value</th>
				</tr>
				<tr>
					<td>1</td>
					<td><label>ORDER_ID::*</label></td>
					<td><input id="ORDER_ID" tabindex="1" maxlength="20" size="20"
						name="ORDER_ID" autocomplete="off"
						value="vidisha123"/>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td><label>CUSTID ::*</label></td>
					<td><input id="CUST_ID" tabindex="2" maxlength="12" size="12" name="CUST_ID" autocomplete="off" value="CUST001" /></td>
				</tr>
				<tr>
					<td>3</td>
					<td><label>INDUSTRY_TYPE_ID ::*</label></td>
					<td><input id="INDUSTRY_TYPE_ID" tabindex="4" maxlength="12" size="12" name="INDUSTRY_TYPE_ID" autocomplete="off" value={ this.props.config.INDUSTRY_TYPE_ID }/></td>
				</tr>
				<tr>
					<td>4</td>
					<td><label>Channel ::*</label></td>
					<td><input id="CHANNEL_ID" tabindex="4" maxlength="12"
						size="12" name="CHANNEL_ID" autocomplete="off" value={ this.props.config.CHANNEL_ID } />
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td><label>txnAmount*</label></td>
					<td><input title="TXN_AMOUNT" tabindex="10"
						type="text" name="TXN_AMOUNT"
						value="1" />
					</td>
				</tr>
                                <tr>
					<td>6</td>
					<td><label>MID</label></td>
					<td><input title="MID" tabindex="10"
						type="text" name="MID"
						value={ this.props.config.MID } />
					</td>
				</tr>
                                <tr>
					<td>7</td>
					<td><label>WEBSITE</label></td>
					<td><input title="WEBSITE" tabindex="10"
						type="text" name="WEBSITE"
						value={ this.props.config.WEBSITE } />
					</td>
				</tr>
                                <tr>
					<td>8</td>
					<td><label>PAYTM_MERCHANT_KEY</label></td>
					<td><input title="PAYTM_MERCHANT_KEY" tabindex="10"
						type="text" name="PAYTM_MERCHANT_KEY"
						value={ this.props.config.PAYTM_MERCHANT_KEY } />
					</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td><input value="CheckOut" type="submit" id ="user-submit" /></td>
				</tr>
			</tbody>
		</table>
	</form>
</body>
</html>
    );
  }
});
 
module.exports = Testtxn;