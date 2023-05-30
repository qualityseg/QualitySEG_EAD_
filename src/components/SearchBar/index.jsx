import React, { useState } from 'react';
import cursosData from './cursos.json';
import styles from './CursosEad.module.scss';
import mercadopago from 'mercadopago';

const CursosEad = () => {
  mercadopago.configure({
    access_token: 'TEST-2684905602430236-052513-51d07b1caa42a7938ab7e2a9f13a7f98-135153905',
    integrator_id: 'integrator_id_test',
  });

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

  const createPreference = async (curso) => {
    const preference = {
      items: [
        {
          title: curso.titulo,
          unit_price: curso.valor,
          quantity: 1,
        },
      ],
      external_reference: 'suus_external',
      back_urls: {
        success: 'http://localhost:3000/sucesso',
        failure: 'http://localhost:3000/falha',
        pending: 'http://localhost:3000/pendente',
      },
      auto_return: 'approved',
    };

    const response = await mercadopago.preferences.create(preference);
    return response.body.init_point;
  };

  const handleCheckoutClick = async (curso) => {
    const initPoint = await createPreference(curso);
    window.open(initPoint, '_blank');
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
                  onClick={() => handleCheckoutClick(curso)}
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
