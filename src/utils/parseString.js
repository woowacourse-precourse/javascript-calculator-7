const parseString = (value) => {
    if (typeof value === 'string') {
        if (value.startsWith('//')) {
        } else {
            const splitByComma = value.split(',');
            const splitByColon = [];
            for (let i = 0; i < splitByComma.length; i++) {
                const temp = splitByComma[i].split(':');
                for (let j = 0; j < temp.length; j++) {
                    const num = Number(temp[j]);
                    if (temp[j].includes('.') || isNaN(num)) return 'error';
                    splitByColon.push(+temp[j]);
                }
            }
            return splitByColon;
        }
    }
    return 'error';
};

export default parseString;
