class Api {
		public static User: string = "";

		constructor() {
			Api.User = process.env.API_USER;
		}
}

export default Api;
