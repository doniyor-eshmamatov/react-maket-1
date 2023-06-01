import client, { baseDomain } from './repository.js';

class ConwatchingRepository {
	getConwatchingList() {
		const endPoint = '/watching';

		const watchingList = client
			.get(baseDomain + endPoint)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});

		return watchingList;
	}
}

export default new ConwatchingRepository();
