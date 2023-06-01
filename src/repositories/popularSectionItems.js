import client, { baseDomain } from './repository.js';

class PopularSectionItems {
	getPopulars() {
		const endPoint = '/popular';

		const PopularList = client
			.get(baseDomain + endPoint)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});

		return PopularList;
	}
}

export default new PopularSectionItems();