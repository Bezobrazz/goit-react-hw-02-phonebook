import { styled } from '@mui/system';
import { Container, List, ListItem } from '@mui/material';

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  margin: 'auto',
});

export const StyledLabel = styled('label')({
  marginBottom: '8px',
});
export const StyledContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '20px',
});

export const StyledList = styled(List)({
  padding: 0,
  listStyle: 'none',
  marginTop: '20px',
});

export const StyledListItem = styled(ListItem)({
  padding: '10px',
  border: '1px solid #ddd',
  marginBottom: '10px',
  borderRadius: '5px',
});
