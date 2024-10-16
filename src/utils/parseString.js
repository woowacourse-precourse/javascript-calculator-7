const parseString = (value) => {
    if (typeof value !== 'string') return 'error';

    const result = [];

    if (value.startsWith('//')) {
        const indexOfEnd = value.indexOf('\\n');
        if (indexOfEnd === -1) return 'error';
        const pivotString = value.substring(2, indexOfEnd);
        const splitByPivot = value.substring(indexOfEnd + 2).split(pivotString);
        for (let i = 0; i < splitByPivot.length; i++) {
            const num = Number(splitByPivot[i]);
            if (splitByPivot[i].includes('.') || isNaN(num)) return 'error';
            result.push(num);
        }
    } else {
        const splitByComma = value.split(',');
        for (let i = 0; i < splitByComma.length; i++) {
            const splitByColon = splitByComma[i].split(':');
            for (let j = 0; j < splitByColon.length; j++) {
                const num = Number(splitByColon[j]);
                if (splitByColon[j].includes('.') || isNaN(num)) return 'error';
                result.push(num);
            }
        }
    }
    return result;
};

export default parseString;
