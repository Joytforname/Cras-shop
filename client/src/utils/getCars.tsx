import axios from 'axios';
import { Car } from '../graphql/generated';
import { Query } from '../graphql/generated';

const url = 'http://localhost:4000/api';


type AllCarsResponse = {
	data: {
		cars: Car[];
	};
};

const getAllCars = async (): Promise<Car[]> => {
	const query = `
    query GetAllCars {
      cars {
        id
        brand
        model
        color
        model_year
        img_src
        price
        description
        availability
        __typename
      }
    }
  `;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result: AllCarsResponse = await response.json();

		if (result.data && result.data.cars) {
			return result.data.cars;
		} else {
			throw new Error('No cars data found');
		}
	} catch (error) {
		console.error('Error fetching the cars:', error);
		throw error; 
	}
};
export default getAllCars;
