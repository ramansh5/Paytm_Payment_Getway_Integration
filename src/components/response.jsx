var React = require('react');
 
var Response = React.createClass({
  render: function () {
      const data = this.props.paramlist;
    return (
<html>
<head>
<title>Merchant Check Out Page</title>
</head>
	
<body>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

{this.props.restdata? <center><h1>validation succesfull</h1></center> :  <center><h1>validation unsuccesfull</h1></center>}
		<form method="post" name="f1"> 
		<table border="1">
			<tbody>
			<tr>
					<th>Label</th>
					<th>Value</th>
				</tr>
                {Object.keys(data).map((key, index)=>(
                <tr>
					<td><label>{key}</label></td>
					<td><input id={ key} tabindex="1" maxlength="30" size="30"
						name={ key}  autocomplete="off"
						value={data[key]} />
					</td>
				</tr> 
                ))}
			</tbody>
		</table>
		<script type="text/javascript">
		</script>
	</form>
</body>
</html>
    );
  }
});
 
module.exports = Response;