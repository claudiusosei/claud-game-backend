import AppInformation from '@/types/response/appInformation';
import CONFIG from '@/config';

/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export const getAppInfo = (): AppInformation => {
  return CONFIG.APP;
};
