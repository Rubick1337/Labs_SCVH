import React, { useState} from "react";
import BoxFurniture from "../BoxFurniture/BoxFurniture";
import ButtonBlackStyle from "../ButtonBlackStyle/ButtonBlackStyle";
import DataFurniture from '../../data/dataFurniture.json';
import PopupModalChange from "../PopupModalChange/PopupModalChange";
import './SectionFurniture.css';
import { useTranslation } from 'react-i18next';
import User from '../User/User.jsx'
import Furniture from '../Furniture/Furniture.jsx'
function SectionFurniture() {
        const { t } = useTranslation(); // Импортируйте функцию t для перевода
    const [dataFurniture, setDataFurniture] = useState(DataFurniture);
    const [openModalChange, setOpenModalChange] = useState(false);
    const [indexChangeElement, setIndexChangeElement] = useState(null);


    function deleteObjectFromArr(index) {
        setDataFurniture([...dataFurniture.slice(0, index), ...dataFurniture.slice(index + 1)]);
    }

    function addNewObject(name, description) {
        const newObject = { name, description, imageSrc: "assets/free-icon-furniture-5540319.png" }; 
        setDataFurniture([...dataFurniture, newObject]);
    }

    function changeObject(index, name, description) {
        const updatedObject = { ...dataFurniture[index], name, description };
        setDataFurniture([...dataFurniture.slice(0, index), updatedObject, ...dataFurniture.slice(index + 1)]);
    }

    const toggleOpenModalChange = () => {
        setOpenModalChange(!openModalChange);
    };

    const furnitureCards = dataFurniture.map((furniture, index) => (
        <BoxFurniture
            key={index}
            indexId={index}
            name={furniture.name}
            description={furniture.description}
            imageSrc={furniture.imageSrc}
            deleteFunction={deleteObjectFromArr}
            changeFunction={() => {
                setIndexChangeElement(index);
                toggleOpenModalChange();
            }}
        />
    ));

    return (
        <>
          <section className="section-furniture">
            <div className="content-furniture">
              <div className="title-furniture">
                <h2 className="h2-text-size-big">{t('sectionFurniture.title')}</h2>
                <button className="button-explore-all">{t('sectionFurniture.exploreAll')}</button>
              </div>
              <ButtonBlackStyle title={t('sectionFurniture.add')} onClickEvent={() => addNewObject(`New Furniture ${dataFurniture.length + 1}`, 'New Description')} />
              <div className="furniture-cards">
                {furnitureCards}
              </div>
            </div>
            <PopupModalChange
              openModalChange={openModalChange}
              toggleOpenModalChange={toggleOpenModalChange}
              indexChangeElement={indexChangeElement}
              name={indexChangeElement !== null ? dataFurniture[indexChangeElement].name : ''}
              description={indexChangeElement !== null ? dataFurniture[indexChangeElement].description : ''}
              changeFunction={changeObject}
            />
          </section>
          <Furniture />
          <User />
        </>
      );
}

export default SectionFurniture;
