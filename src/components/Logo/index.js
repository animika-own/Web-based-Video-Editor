import PropTypes from 'prop-types';

// material-ui
import { ButtonBase } from '@mui/material';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return <ButtonBase disableRipple>VEED.IO</ButtonBase>;
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
