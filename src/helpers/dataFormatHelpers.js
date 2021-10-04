import { NUMBER_COLUMNS_IN_ROW } from '../constants/appConstants';

export const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

export const dataFormatToPlayingFields = (data = []) => {
    let id = 0;

    return shuffle(data.reduce((acc, [item1, item2]) => {
        const props = {
            isShow: false,
            isHidden: false,
        };

        return [
            ...acc,
            {
                ...item1,
                ...props,
                id: ++id,
            },
            {
                ...item2,
                ...props,
                id: ++id,
            },
        ]
    }, [])).reduce((acc, _, index, items) => {
        const isRow = index % NUMBER_COLUMNS_IN_ROW === 0;

        return isRow ? [
            ...acc,
            items.slice(index, index + NUMBER_COLUMNS_IN_ROW),
        ] : acc;
    }, []);
};

export const gameTimeFormat = ({ minutes, seconds, hours }) => {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}