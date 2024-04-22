import * as HomeProvider from '../provider/HomeProvider';
import {getActivities, getProjects} from '../provider/HomeProvider';

export class HomeService {
  static async activitiesList() {
    return await HomeProvider.getActivities().then(res => {
      return res.data
    });
  }

  static async projectHTML() {
    return await HomeProvider.getProjects().then(res => {
      return res.data
    });
  }
}
