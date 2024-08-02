import mysql from 'mysql';

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'brice',
});

con.connect(function (err) {
	if (err) {
		console.log('connection error');
		console.log(err);
	} else {
		console.log('connected successfully');
	}
});

export default con;
