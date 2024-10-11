import "../BoxFurniture/BoxFurniture.css";

function BoxFurniture({ indexId, name, description, imageSrc, deleteFunction, changeFunction }) {
    return (
        <div className="furniture-card">
            <img src={imageSrc} alt={name} className="furniture-image" />
                <h3>{name}</h3>
            <p>{description}</p>
            <button onClick={() => deleteFunction(indexId)}>Удалить</button>
            <button onClick={() => changeFunction(indexId, `Updated ${name}`, `Updated ${description}`)}>Изменить</button>
        </div>
    );
}

export default BoxFurniture;
