import styled from 'styled-components';

// const ListItem = styled.li`
//   padding: ${props => props.theme.spacing(1)};
//   cursor: pointer;
//   color: ${({ selected, theme }) => {
//     return selected ? theme.colors.red : theme.colors.primaryText;
//   }};

//   &:hover {
//     color: ${props => props.theme.colors.secondaryText};
//   }
// `;

const ListItem = styled.li`
  padding: 4px;
  cursor: pointer;
  color: ${({ selected }) => {
    return selected ? '#f44336' : '#212121';
  }};

  &:hover {
    color: #757575;
  }
`;

export const VideoList = ({ videos, selectedVideo, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        <ListItem
          key={video.id}
          onClick={() => onSelect(video.link)}
          selected={selectedVideo === video.link}
        >
          {video.link}
        </ListItem>
      ))}
    </ul>
  );
};
