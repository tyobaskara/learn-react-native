import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router
			sceneStyle={style.sceneStyle}
			navBarButtonColor={style.navBarButtonColor}
			navigationBarStyle={style.navigationBarStyle}
			titleStyle={style.titleStyle}
			rightButtonTextStyle={style.titleStyle}
		>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene key='login' component={LoginForm} title='Please Login' />
				</Scene>
				<Scene key='main'>
					<Scene
						rightTitle='Add'
						title='Employees'
						onRight={() => Actions.employeeCreate()}
						key='employeeList'
						component={EmployeeList}
						initial
					/>
					<Scene
						title='Create Employee'
						key='employeeCreate'
						component={EmployeeCreate}
					/>
					<Scene
						title='Edit Employee'
						key='employeeEdit'
						component={EmployeeEdit}
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

const style = {
	navigationBarStyle: {
		backgroundColor: 'lightseagreen'
	},
	titleStyle: {
		color: '#fff'
	},
	sceneStyle: {
		backgroundColor: '#fff'
	},
	navBarButtonColor: '#fff'
};

export default RouterComponent;
