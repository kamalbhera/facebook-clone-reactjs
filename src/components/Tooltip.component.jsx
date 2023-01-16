import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.gray,
    opacity: 0.1,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    color: "white"
  },
}))(Tooltip);

export const ProfileTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    borderRadius: '10px'
  },
}))(Tooltip);