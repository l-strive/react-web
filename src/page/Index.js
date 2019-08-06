import React from 'react';
import TempCalculator from '../component/TempCalculator';
import NameForm from '../component/NameForm';

class Index extends React.Component{
	render(){
		return(
			<div className="indexceshi">
				<TempCalculator></TempCalculator>
				<NameForm></NameForm>
			</div>
		)
	}
}
export default Index;