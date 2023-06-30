import { Link } from 'react-router-dom';

const Dogs = () => {
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <div>
      <ul>
        {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
          return (
            <li>
              <Link key={dog} to={`${dog}`}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
