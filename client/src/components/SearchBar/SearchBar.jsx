import React, { useState } from "react";
import style from "./SearchBar.module.css";
import myIcon from "../../icons/magnifying-glass-test-tube-svgrepo-com.svg";
import random from "../../icons/random.svg";

export default function SearchBar(props) {
    const { onSearch, isDuplicate } = props;
    const [id, setId] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleChange = (event) => {
        setId(event.target.value);
    };
    const generateNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita el comportamiento predeterminado del evento
            if (!isButtonDisabled) {
                onSearch(id);
            }
        }
    };

    const handleClick = () => {
        onSearch(id);
    };

    const validateId = () => {
        const parsedId = parseInt(id);

        if (
            parsedId < 1 ||
            parsedId > 826 ||
            isNaN(parsedId) ||
            isDuplicate(parsedId)
        ) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    };

    React.useEffect(() => {
        validateId();
    }, [id]);

    return (
        <div className={style.SearchBarContainer}>
            <button
                onClick={() => onSearch(generateNumber(1, 826))}
                className={style.randomContainer}
            >
                <img className={style.randomIcon} src={random} alt="random" />
            </button>
            <input
                className={style.SearchInput}
                type="search"
                value={id}
                onKeyDown={handleKeyPress}
                onChange={handleChange}
                placeholder="NºPersonje..."
            />
            <button
                className={`${style.IconContainer} ${
                    isButtonDisabled ? style.disabledButton : ""
                }`}
                onClick={handleClick}
                disabled={isButtonDisabled}
            >
                <img src={myIcon} alt="Icon" className={style.Icon} />
            </button>
        </div>
    );
}
