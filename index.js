// Tutorial from https://hackernoon.com/setting-up-a-react-project-from-scratch-6cb7cbb4da28

import React from 'react';
import ReactDOM from 'react-dom';
import ComponentA from './components/componentA'

ReactDOM.render(
	<div>
		<ComponentA />
	</div>,
	document.getElementById('root')
)