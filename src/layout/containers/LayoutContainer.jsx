import React from 'react';

import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Footer from '../components/Footer.jsx';

class Layout extends React.Component {

	render() {
		return (
			<section className="vbox">
			    <Header />
			    <section>
			      	<section className="hbox stretch">
			        	<Sidebar />

			        	<section id="content">
			        		<section className="hbox stretch">
					            <section className="vbox">
					            	{this.props.children}

					                <Footer />
					            </section>
					        </section>
			        	</section>
			    	</section>
			    </section>
			</section>
		);
	}

}

export default Layout;