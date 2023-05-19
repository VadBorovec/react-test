import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

export default function Painting({
  imageUrl = defaultImage,
  title = 'undefined',
  profileUrl,
  author = 'undefined',
  price = 'undefined',
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author} </a>
      </p>
      <p>Price: {price} credits</p>
      <p>Availability: {quantity < 10 ? 'Out of stock' : 'Available'}</p>
      <button type="button">Add to Basket</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
