import clubKitData from '../../content/pages/club-kit-items.json';
import type { ClubKitDetails } from './types';

const publishedItems = clubKitData.items.filter((item) => item.published).sort((a, b) => a.order - b.order);

export const clubKit: ClubKitDetails = {
  ...clubKitData,
  items: publishedItems,
  ordering: clubKitData.orderInformation,
};
