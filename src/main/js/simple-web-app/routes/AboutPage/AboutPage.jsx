import React from 'react';
import { Link } from 'react-router-dom';

const author = 'PoorPolonius';
const repository = 'https://github.com/PoorPolonius/simple-web-app.git';

export default function AboutPage () {
	
	return (
		<div>
			<div>Author: {author}</div>
			<div>Repository: <Link to={repository}>{repository}</Link></div>
		</div>
	);
};