import React from 'react';
import TempCalculator from '../component/TempCalculator';
import NameForm from '../component/NameForm';
import FilterableProductTable from '../component/FilterableProductTable';

class Index extends React.Component{
	render(){
		return(
			<div className="indexceshi">
				<TempCalculator></TempCalculator>
				<div style={{ height : '10px' , background : '#ccc' }}></div>
				<NameForm></NameForm>
				<div style={{ height : '10px' , background : '#ccc' }}></div>
				<FilterableProductTable></FilterableProductTable>
			</div>
		)
	}
}
export default Index;