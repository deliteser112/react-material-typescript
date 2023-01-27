import { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, LinkProps } from '@mui/material';
//
import { MenuProps, MenuItemProps } from './type';

// ----------------------------------------------------------------------

interface RouterLinkProps extends LinkProps {
  component?: ReactNode;
  to?: string;
  end?: boolean;
}

const LinkStyle = styled(Link)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function MenuDesktop({ navConfig }: MenuProps) {
  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem key={link.title} item={link} />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type MenuDesktopItemProps = {
  item: MenuItemProps;
};

function MenuDesktopItem({ item }: MenuDesktopItemProps) {
  const { title, path } = item;

  return (
    <LinkStyle to={path} component={RouterLink}>
      {title}
    </LinkStyle>
  );
}
