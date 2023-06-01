import client, { baseDomain } from './repository.js';

class JustSectionList {
	getJustList() {
		const endPoint = '/just';

		const JustList = client
			.get(baseDomain + endPoint)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});

		return JustList;
	}
}

export default new JustSectionList();