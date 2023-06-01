import client, { baseDomain } from './repository.js';

class PartnersRepository {
	getPartners() {
		const endPoint = '/partners';

		const partnersList = client
			.get(baseDomain + endPoint)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});

		return partnersList;
	}
}

export default new PartnersRepository();
