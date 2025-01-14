import { getServerConfig } from '$shared/constants';
import { i18n } from '$translation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAppCategory, IAppsListStore } from './types';

const initialState: Omit<IAppsListStore, 'actions'> = {
  fetching: true,
  appsList: [],
  categories: [],
  moreEnabled: false,
  moreUrl: '',
};

export const useAppsListStore = create(
  persist<IAppsListStore>(
    (set) => ({
      ...initialState,
      actions: {
        fetchPopularApps: async () => {
          set({ fetching: true });
          try {
            const response = await axios.get(
              `${getServerConfig('tonkeeperEndpoint')}/apps/popular?lang=${i18n.locale}`,
            );

            const { categories, moreEnabled, moreUrl } = response.data.data as {
              categories: IAppCategory[];
              moreEnabled: boolean;
              moreUrl: string;
            };

            const apps = categories.map((c) => c.apps).flat();

            const sources =
              categories?.[0]?.apps.map((app) => ({
                uri: app.icon,
              })) || [];

            FastImage.preload(sources);

            set({
              appsList: apps,
              categories,
              moreEnabled,
              moreUrl,
            });
          } catch {
          } finally {
            set({ fetching: false });
          }
        },
      },
    }),
    {
      name: 'appsList',
      getStorage: () => AsyncStorage,
      partialize: ({ categories, appsList, moreEnabled }) =>
        ({ categories, appsList, moreEnabled } as IAppsListStore),
    },
  ),
);

useAppsListStore.getState().actions.fetchPopularApps();
