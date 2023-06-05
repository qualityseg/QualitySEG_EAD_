import React, { useState } from 'react';
import cursosData from './cursos.json';
import styles from './CursosEad.module.scss';

const CursosEad = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(cursosData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm) {
      const filteredResults = cursosData.filter((curso) =>
        curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(cursosData);
    }
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <div className={styles['search-bar']}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className={styles['search-icon']}></div>
        </div>
      </div>
      <div className={`${styles.treatments} ${styles.center}`}>
        {searchResults.map((curso) => (
          <div
            className={styles.treatmentsItem}
            data-aos="fade-up"
            key={curso.id}
          >
            <div className={styles.images}>
              <img
                src={curso.imageSrc}
                alt={curso.titulo}
                className={styles.image}
                width={360}
                height={196}
              />
            </div>
            <h3>{curso.titulo}</h3>
            <div className={styles.description}>
              <p>{curso.descricao}</p>
              <p>Carga Horaria: {curso.carga_horaria}</p>
              <p>Valor: {curso.valor}</p>
              <center>
              <button
                className={styles.learnMoreButton}
                onClick={() => window.open('https://forms.zohopublic.com/esocial/form/ServiceOrderForm/formperma/Q9ZdGBC2hH8LNYuxJdLQFgZ8hbLqbwu-MCLzsJ2biUY', '_blank')}
              >
                Clique e saiba mais
              </button>

              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursosEad;
