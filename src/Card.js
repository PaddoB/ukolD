import React from 'react';


const Card = ({ title, image, optionalText, optionalComponent }) => {
  return (
    <div style={styles.card}>
      <div style={styles.title}>{title}</div>
      <div style={styles.imageContainer}>
        <img src={image} alt="Obrázek" style={styles.image} />
      </div>
      <div style={styles.optionalContent}>
        {optionalText && <div>{optionalText}</div>}
        {optionalComponent && <div>{optionalComponent}</div>}
      </div>
    </div>
  );
};


const styles = {
  card: {
    border: '1px solid black',
    padding: '10px',
    width: '200px',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  imageContainer: {
    border: '1px solid black',
    padding: '5px',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  optionalContent: {
    borderTop: '1px solid black',
    paddingTop: '10px',
  },
};

export default Card;
