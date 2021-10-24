const SingleDog = ({
  photo,
  breed,
  flipped,
  intelligence,
  id,
  toggle,
  locked,
  uiData,
}) => {
  return (
    <div className="window" style={uiData}>
      {locked ? (
        <div className="inner">
          <img className="image" alt="Dog" src={photo}></img>
        </div>
      ) : flipped ? (
        <div className="inner" onClick={() => toggle(id)}>
          <p className="windowText">
            {breed}
            <br />
            Intelligence: {intelligence}
          </p>
        </div>
      ) : (
        <div className="inner" onClick={() => toggle(id)}>
          <img className="image" alt="Dog" src={photo}></img>
        </div>
      )}
    </div>
  );
};

export default SingleDog;
