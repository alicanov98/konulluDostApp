import * as HomeProvider from '../provider/HomeProvider';

export class HomeService {
  static async getHomeData() {
    return await HomeProvider.getHomeData().then(res => {
      return res;
    });
  }
}
