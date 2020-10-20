import { useQuery, gql } from '@apollo/client';
import Preloader from '../components/Preloader';

const MyQuery = gql`
	{
		hello
	}
`;

const index = () => {
	const { loading, data } = useQuery(MyQuery);

	if (loading) {
		return <Preloader />;
	}

	return <div className='container'>{data && data.hello && <p className='flow-text red-text'>{data.hello}</p>}</div>;
};

export default index;
