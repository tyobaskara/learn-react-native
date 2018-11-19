import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene
						key='login'
						component={LoginForm}
						title='Please Login'
					/>
				</Scene>
				<Scene key='main'>
					<Scene
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
						key='employeeList'
						component={EmployeeList}
						title='Employees'
                        initial
					/>
                    <Scene 
                        title='Create Employee'
                        key='employeeCreate'
                        component={EmployeeCreate}
                    />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
