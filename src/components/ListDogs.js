import SingleDog from './SingleDog';

const Dogs = ({ dogs, toggle }) => {
  return (
    <div className="windowWrapper mt-4">
      {dogs.map(({ id, breed, photo, flipped, locked, intelligence }) => {
        return (
          <SingleDog
            key={id}
            breed={breed}
            photo={photo}
            flipped={flipped}
            locked={locked}
            intelligence={intelligence}
            id={id}
            toggle={toggle}
            uiData={
              flipped === true
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
