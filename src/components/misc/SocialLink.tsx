'use client';
import { Box, ButtonBase } from '@mui/material';
import PropTypes from 'prop-types';

export default function SocialLink({Icon, id, href}: {Icon: React.ElementType, id: string, href: string}) {
  return (
    <a href={href} target='_blank'>
      <ButtonBase >
        <Box className="flex">
          <Box className="w-6 mt-4">
            <Icon className='text-2xl'/>
          </Box>
          <span className="text-lg m-4">{id}</span>
        </Box>
      </ButtonBase>
    </a>
  );
}

SocialLink.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};