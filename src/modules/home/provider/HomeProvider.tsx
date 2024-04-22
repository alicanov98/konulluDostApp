import $axios from '../../../utils/accessor';
import {$api} from '../../../api/api.ts';
import { IActivities } from "../types/HomeTypes.tsx";

export const getActivities = async () => {
  return await $axios.get<Array<IActivities>>($api('all_activities'));
};

export const getProjects = async () =>{
  return await $axios.get<string>($api('all_projects'))
}
