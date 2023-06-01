import client, { baseDomain } from './repository.js';

class ListSectionArr {
	getLists() {
		const endPoint = '/watchlist';

		const ListArr = client
			.get(baseDomain + endPoint)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});
		return ListArr;
	}
}

export default new ListSectionArr();