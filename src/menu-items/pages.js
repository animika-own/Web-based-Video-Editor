// assets
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import VibrationOutlinedIcon from '@mui/icons-material/VibrationOutlined';

// icons
const icons = {
  AutoAwesomeMosaicOutlinedIcon,
  FolderOutlinedIcon,
  PodcastsOutlinedIcon,
  VibrationOutlinedIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  type: 'group',
  children: [
    {
      id: 'template',
      title: 'Template',
      type: 'item',
      icon: icons.AutoAwesomeMosaicOutlinedIcon,
      target: true
    },
    {
      id: 'video',
      title: 'All Videoes',
      type: 'item',
      icon: icons.FolderOutlinedIcon,
      target: true
    },
    {
      id: 'podcast',
      title: 'Podcast & Shows',
      type: 'item',
      icon: icons.PodcastsOutlinedIcon,
      target: true
    },
    {
      id: 'kit',
      title: 'Brand Kit',
      type: 'item',
      icon: icons.VibrationOutlinedIcon,
      target: true
    }
  ]
};

export default pages;
