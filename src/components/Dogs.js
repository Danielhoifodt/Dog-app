import Dog from './Dog';

const Dogs = ({ dogs, toggle }) => {
  return (
    <div className="windowWrapper">
      {dogs.map((item) => {
        return (
          <Dog
            key={item.id}
            breed={item.breed}
            photo={item.photo}
            flipped={item.flipped}
            locked={item.locked}
            intelligence={item.intelligence}
            id={item.id}
            toggle={toggle}
            uiData={
              item.flipped === true
                ? { border: '3px solid green' }
                : { border: '1px solid black' }
            }
          />
        );
      })}
    </div>
  );
};

export default Dogs;
