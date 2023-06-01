import client, { baseDomain } from './repository.js';

class NavbarRepository {
	getNavList() {
		const endPoint = '/navbar';

		const navbarList = client
			.get(baseDomain + endPoint)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});

		return navbarList;
	}
}

export default new NavbarRepository();
