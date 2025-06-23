import { Star, Diamond, Wc, LocalMall } from '@mui/icons-material';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

export const FILTERS = [
  {
    key: 'gender',
    label: 'Gender',
    options: [
      { label: 'Male', icon: ManIcon },
      { label: 'Female', icon: WomanIcon },
      { label: 'Kids', icon: EscalatorWarningIcon },
    ],
  },
  {
    key: 'brand',
    label: 'Brand',
    options: [
      { label: 'Tanishq', icon: LocalMall },
      { label: 'Kalyan Jewellers', icon: LocalMall },
      { label: 'Tiffany & Co.', icon: LocalMall },
      { label: 'Cartier', icon: LocalMall },
      { label: 'Bulgari', icon: LocalMall },
    ],
  },
  {
    key: 'purity',
    label: 'Purity',
    options: [
      { label: '18', icon: Star },
      { label: '20', icon: Star },
      { label: '22', icon: Star },
      { label: '24', icon: Star },
    ],
  },
  {
    key: 'type',
    label: 'Jewellery Type',
    options: [
      { label: 'gold', icon: Diamond },
      { label: 'silver', icon: Diamond },
      { label: 'diamond', icon: Diamond },
      { label: 'platinum', icon: Diamond },
    ],
  },
];

export const OPTION = [
  { icon: 'trending-down.svg', label: 'Low to High' },
  { icon: 'trending-up.svg', label: 'High to Low' },
  { icon: 'sort-alphabetical-ascending.svg', label: 'A to Z' },
  { icon: 'sort-alphabetical-descending.svg', label: 'Z to A' },
];